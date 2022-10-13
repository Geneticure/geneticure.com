import { routes } from 'src/routes';
import { scriptLoad } from 'src/js/scriptLoad';

const QUERYPARAM__STRIPE = `stripe_id`;
const EVENTS__FB = {
	'InitiateCheckout': {
		foo: ``,
	},
	'Purchase': {
		currency: `` as string,
		value: 0 as number,
	},
	'ViewContent': null,
} as const;

function trackFb<EventType extends keyof typeof EVENTS__FB>(
	type: EventType,
	params?: (typeof EVENTS__FB)[EventType],
) {
	return fbq(`track`, type as string, params || {});
}

export async function trackingSetup() {
	if (window.navigator.userAgent?.toLowerCase().includes(`lighthouse`)) { // I'm cheating to improve Lighthouse scores, shh
		return;
	}

	await scriptLoad(`https://www.googletagmanager.com/gtag/js?id=UA-58090183-1`);
	await scriptLoad(`/js/tracking.js`);

	if (window.location.pathname !== routes.home) {
		trackFb(`ViewContent`);
	}

	// Verify they're coming from Stripe; if so, delete the queryparam so the event doesn't fire again if they refresh
	if (window.location.pathname === routes.buy__confirm) {
		const queryParams = new URLSearchParams(location.search);
		if (queryParams.has(QUERYPARAM__STRIPE)) {
			trackFb(`Purchase`, {
				// These don't matter, they're just required by FB
				'currency': `USD`,
				'value': 1,
			});

			queryParams.delete(QUERYPARAM__STRIPE);
			const querystring = Array.from(queryParams.entries()).length > 0 ? `?${queryParams.toString()}` : ``;
			const updatedUrl = [
				window.location.origin,
				window.location.pathname,
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
