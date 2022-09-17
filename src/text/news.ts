import { routes } from 'src/routes';

const _news: Array<[
	string,
	keyof typeof routes,
]> = [
	[
		`Geneticure can increase renal denervation adoption by 250%`,
		`article__rdn`,
	],
	[
		`How Geneticure's test can help treat COVID-19`,
		`article__covid`,
	],
];

export const news = _news.map(([title, route]) => ({
	route: routes[route],
	title,
}));
