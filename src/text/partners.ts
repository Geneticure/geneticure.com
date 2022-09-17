const _partners: Array<[
	string,
	string,
	string
]> = [
	[
		`Mayo Clinic`,
		`mayo.svg`,
		`https://www.mayoclinic.org/`,
	],
	[
		`Stanford University`,
		`stanford.svg`,
		`https://www.stanford.edu/`,
	],
	[
		`Fairview Health`,
		`fairview.svg`,
		`https://www.fairview.org/`,
	],
	[
		`Wireframe Ventures`,
		`wireframe.svg`,
		`https://www.wireframevc.com/`,
	],
	[
		`M25`,
		`m25.png`,
		`https://m25vc.com/`,
	],
	[
		`Southeast Minnesota Capital Fund`,
		`semncf.png`,
		`http://www.semncapital.com/`,
	],
	[
		`Univeristy of St. Thomas`,
		`stthomas.svg`,
		`https://www.stthomas.edu/`,
	],
];

export const partners = _partners.map(([name, logo, url]) => ({
	icon: `/img/logo/${logo}`,
	name,
	url,
}));
