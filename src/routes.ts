export const routes = {
	buy: `/buy`,
	buy__confirm: `/thanks`,
	company: `/company`,
	faqs: `/faqs`,
	home: `/`,
	privacy: `/privacy`,
	providers: `/providers`,
	report: `/report.pdf`,
	research: `/research`,
	terms: `/terms`,

	article__covid: `/covid19`,
	article__rdn: `/rdn`,

	email: `info@geneticure.com`,
	phone: `1.800.362.8109`,
	phone_brand: `1.800.DNA.8109`,

	deck: `https://www.beautiful.ai/player/-Obh7gr4YEecJI0Licl4`,
	lsi: `https://www.beautiful.ai/player/-Omu3gudvnmGVxbb05so`,

	linkedin: `https://www.linkedin.com/company/geneticure`,
	twitter: `https://twitter.com/geneticure`,

	contact: `https://portal.geneticure.com/contact`,
	login: `https://portal.geneticure.com`,
	register: `https://portal.geneticure.com/user/register`,
	register__clinician: `https://portal.geneticure.com/user/register/clinician`,
	register__user: `https://portal.geneticure.com/user/register/user`,
} as const;

export const redirects = {
	'/file/geneticure_htn_pgx_brochure.pdf': routes.deck,
	'/file/geneticure_htn_pgx_report.pdf': routes.report,
	'/lsi': routes.lsi,
	'/report': routes.report,
	'/slides': routes.deck,
};

export type RouteId = keyof typeof routes;
