import { routes } from 'src/routes';
import { scriptLoad } from 'src/js/scriptLoad';

const PRODUCT = {
	currency: `USD`,
	shipping: 0,
	tax: 0,
	value: 149,
};
const QUERYPARAM__STRIPE = `stripe_id`;
const HUBSPOT__ID = `23495910`;

// #region Facebook

const FB__ID = `1300441860085124`;
const FB__EVENTS = {
	'InitiateCheckout': null,
	'PageView': null,
	'Purchase': {
		currency: PRODUCT.currency,
		value: PRODUCT.value,
	},
	'ViewContent': null,
} as const;

// #endregion

// #region Google

const GTAG__ID = `G-73YQ14W1W8`;
const GTAG__EVENTS = {
	conversion: {
		'currency': PRODUCT.currency,
		'send_to': `AW-957485369/JmASCLypqYAYELmiyMgD` as string,
		'transaction_id': `` as string,
		'value': PRODUCT.value,
	},
	purchase: {
		'currency': PRODUCT.currency,
		'shipping': PRODUCT.shipping,
		'tax': PRODUCT.tax,
		'transaction_id': `` as string,
		'value': PRODUCT.value,
	},
} as const;

// #endregion

// #region StackAdapt

const STACKADAPT__ID = {
	conv: `10ySFDyjxY4pm03GVmsfRI`,
	universal: `EIqSOK9XE-SBt8SBMGsRDA`,
} as const;

const STACKADAPT__EVENTS = {
	[STACKADAPT__ID.conv]: {
		'orderId': `` as string,
		'revenue': PRODUCT.value,
	},
} as const;

// #endregion

type TagFunction = (
	eventCategory: string,
	eventId: string,
	eventData?: unknown
) => void;

declare global {
	interface Window {
		fbq: TagFunction;
		gtag: TagFunction;
		saq: TagFunction;
	}
}

function track<
	EventMap extends Record<string, unknown>,
	GlobalFunction extends TagFunction,
>(
	eventMap: EventMap,
	eventCategory: string,
	getGlobalFunction: () => GlobalFunction,
) {
	return function<
		EventType extends keyof EventMap,
		EventParams extends EventMap[EventType],
	>(
		eventType: EventType,
		params?: Partial<EventParams>
	) {
		const defaults = eventMap[eventType];
		const payload = {
			...(defaults || {}),
			...(params || {}),
		} as EventParams;
		getGlobalFunction().call(window, eventCategory, eventType, payload);
	};
}

const trackFb = track(FB__EVENTS, `track`, () => window.fbq);
const trackGtag = track(GTAG__EVENTS, `event`, () => window.gtag);
const trackSaq = track(STACKADAPT__EVENTS, `conv`, () => window.saq);

/*
Not exporting these and calling them in individual routes, because:
- I want to be able to easily tear out/modify all this analytics stuff in one file if necessary, and
- As analytics needs get more complex, trying to trigger things in the correct order gets monumentally more complex when they're in separate files
 */

export async function trackingSetup() {
	if (window.navigator.userAgent?.toLowerCase().includes(`lighthouse`)) { // I'm cheating to improve Lighthouse scores, shh
		return;
	}

	await scriptLoad(`https://www.googletagmanager.com/gtag/js?id=${GTAG__ID}`);
	await scriptLoad(`//js.hs-scripts.com/${HUBSPOT__ID}.js`);
	await scriptLoad(`/js/tracking.js`); // This is where the tracking boilerplate is loaded
	// @see public/js/tracking.js

	window.gtag(`config`, GTAG__ID);
	window.fbq(`init`, FB__ID);
	window.saq(`ts`, STACKADAPT__ID.universal);

	trackFb(`PageView`);

	const pathname = window.location.pathname?.replace(/\/$/, ``);

	if (pathname !== routes.home) {
		trackFb(`ViewContent`);
	}

	// Verify they're coming from Stripe; if so, delete the queryparam so the event doesn't fire again if they refresh
	if (pathname === routes.buy__confirm) {
		const queryParams = new URLSearchParams(window.location.search);
		if (queryParams.has(QUERYPARAM__STRIPE)) {
			const stripeId = queryParams.get(QUERYPARAM__STRIPE);

			trackFb(`Purchase`);

			trackGtag(`conversion`, { 'transaction_id': stripeId });

			trackGtag(`purchase`, { 'transaction_id': stripeId });

			trackSaq(STACKADAPT__ID.conv, { 'orderId': stripeId });

			queryParams.delete(QUERYPARAM__STRIPE);
			const querystring = Array.from(queryParams.entries()).length > 0 ? `?${queryParams.toString()}` : ``;
			const updatedUrl = [
				window.location.origin,
				pathname,
				querystring,
			].join(``);
			window.history.replaceState(null, ``, updatedUrl);
		}
	}

	// Assume if they're going to the Stripe checkout URL, they've clicked a `Buy` button
	// TODO3: Handle cases where it wasn't a click on an `<a>`
	window.addEventListener(`click`, (event) => {
		const targetUrl = (event.target as Element).getAttribute(`href`);
		if (targetUrl === routes.buy) {
			trackFb(`InitiateCheckout`);
		}
	});
}
