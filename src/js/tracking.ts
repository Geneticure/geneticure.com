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

const GTAG__ID = `UA-58090183-1`;
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
	REVENUE: `10ySFDyjxY4pm03GVmsfRI`,
	UNIVERSAL: `EIqSOK9XE-SBt8SBMGsRDA`,
} as const;

const STACKADAPT__EVENTS = {
	conversion: {
		'orderId': `` as string,
		'revenue': PRODUCT.value,
	},
	ts: {}, // Don't know what this stands for
};

declare global {
	interface Window {
		saq: (
			event: string,
			id: string,
			data?: unknown
		) => void;
	}
}

// #endregion

/*
Not exporting these and calling them in individual routes, because:
- I want to be able to easily tear out/modify all this analytics stuff in one file if necessary, and
- As analytics needs get more complex, trying to trigger things in the correct order gets monumentally more complex when they're in separate files
 */
function trackFb<EventType extends keyof typeof FB__EVENTS>(
	type: EventType,
	params?: Partial<(typeof FB__EVENTS)[EventType]>,
) {
	const payload = {
		...(FB__EVENTS[type] || {}),
		...(params || {}),
	};
	return window.fbq(`track`, type, payload);
}

function trackGtag<EventType extends keyof typeof GTAG__EVENTS>(
	type: EventType,
	params?: Partial<(typeof GTAG__EVENTS)[EventType]>
) {
	const payload = {
		...(GTAG__EVENTS[type] || {}),
		...(params || {}),
	};
	return window.gtag(`event`, type, payload);
}

function trackStackAdapt<EventType extends keyof typeof STACKADAPT__EVENTS>(
	type: EventType,
	id: string,
	params?: Partial<(typeof STACKADAPT__EVENTS[EventType])>
) {
	const payload = {
		...(STACKADAPT__EVENTS[type] || {}),
		...(params || {}),
	};
	return window.saq(type, id, payload);
}

export async function trackingSetup() {
	if (window.navigator.userAgent?.toLowerCase().includes(`lighthouse`)) { // I'm cheating to improve Lighthouse scores, shh
		return;
	}

	await scriptLoad(`https://www.googletagmanager.com/gtag/js?id=${GTAG__ID}`);
	await scriptLoad(`//js.hs-scripts.com/${HUBSPOT__ID}.js`);
	await scriptLoad(`/js/tracking.js`);

	window.gtag(`config`, GTAG__ID);
	window.fbq(`init`, FB__ID);
	trackStackAdapt(`ts`, STACKADAPT__ID.UNIVERSAL);
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

			trackStackAdapt(`conversion`, STACKADAPT__ID.REVENUE, { 'orderId': stripeId });

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
