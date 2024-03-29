export const routes = {
	brochure: `/file/geneticure_htn_pgx_brochure.pdf`,
	buy: `/buy`,
	buy__confirm: `/thanks`,
	company: `/company`,
	faqs: `/faqs`,
	home: `/`,
	privacy: `/privacy`,
	providers: `/providers`,
	report: `/file/geneticure_htn_pgx_report.pdf`,
	research: `/research`,
	terms: `/terms`,

	article__covid: `/covid19`,
	article__rdn: `/rdn`,

	email: `info@geneticure.com`,
	phone: `1.800.362.8109`,
	phone_brand: `1.800.DNA.8109`,

	linkedin: `https://www.linkedin.com/company/geneticure`,
	twitter: `https://twitter.com/geneticure`,

	contact: `https://portal.geneticure.com/contact`,
	login: `https://portal.geneticure.com`,
	register: `https://portal.geneticure.com/user/register`,
	register__clinician: `https://portal.geneticure.com/user/register/clinician`,
	register__user: `https://portal.geneticure.com/user/register/user`,
} as const;

export type RouteId = keyof typeof routes;
