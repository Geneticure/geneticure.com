import { RouteId, routes } from 'src/routes';

const menuItems: Partial<Record<RouteId, string>> = {
	buy: `Buy now`,
	company: `Company`,
	contact: `Contact us`,
	faqs: `FAQs`,
	home: `About`,
	login: `Login`,
	providers: `Providers`,
};

export const menuTop = toMenu([
	`home`,
	`providers`,
	`faqs`,
	`company`,
	`login`,
	`buy`,
]);

export const menuFooter = toMenu([
	`home`,
	`providers`,
	`faqs`,
	`company`,
]);

export const menuFooterSub = toMenu([
	`login`,
	`buy`,
	`contact`,
]);

function toMenu(routeIds: Array<RouteId>) {
	return routeIds.map((routeId) => ({
		href: routes[routeId],
		label: menuItems[routeId],
		route: routeId,
	}));
}
