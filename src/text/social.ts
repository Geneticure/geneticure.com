import { routes } from 'src/routes';

const _socials: Array<
	[keyof typeof routes, string]
> = [
	[`linkedin`, `LinkedIn`],
	[`twitter`, `Twitter`],
];

export const socials = _socials.map(([id, label]) => ({
	href: routes[id],
	icon: `public/img/icon/${id}.svg`,
	id,
	label,
}));
