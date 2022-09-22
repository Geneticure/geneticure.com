import { routes } from 'src/routes';

const _menu: Array<
	[keyof typeof routes, string]
> = [
	[`home`, `About`],
	[`providers`, `Providers`],
	[`faqs`, `FAQs`],
	[`company`, `Company`],
	[`login`, `Login`],
	[`buy`, `Buy now`],
];

export const menu = _menu.map(([route, label]) => ({
	href: routes[route],
	label,
	route,
}));
