import { routes } from 'src/routes';

const _team: Array<[
	string,
	string,
	string | [string, string],
	string,
	string,
	string,
]> = [
	[
		`Scott Snyder`,
		`scott`,
		[`CEO`, `Chief Executive Officer`],
		`scott.jpg`,
		`Scott spent 10 years in entrepreneurial roles leading Target Corporation businesses in Minneapolis; most recently as director of a strategic advisory group for over $10 Billion of consumer categories including OTC pharmacy. Scott's experience in consumer insights, analytics, digital marketing, and finance along with his longtime passion for investments in developmental stage biotechnology, led to his co-founding of Geneticure with Eric Snyder, Ryan Sprissler, and Tom Olson.`,
		`scott-snyder-4233948`,
	],
	[
		`Eric Snyder`,
		`eric`,
		[`COO`, `Chief Operating Officer`],
		`eric.jpg`,
		`Dr. Snyder completed his PhD at the University of Minnesota and performed his research training at Mayo Clinic as a pre-doctoral fellow and post-doctoral fellow in Cardiovascular Diseases with a second post-doctoral fellowship in Nephrology and Hypertension. He was an assistant professor in the College of Pharmacy at the University of Arizona and then moved on to the University of Minnesota before co-founding Geneticure.`,
		`eric-snyder-39b467b4`,
	],
	[
		`Ryan Sprissler, PhD`,
		`ryan`,
		[`CSO`, `Chief Scientific Officer`],
		`ryan.jpg`,
		`Dr. Sprissler is a founding member of the Center for Applied Genetics and Genomic Medicine and Lead Scientist managing the University of Arizona Genetics Core facility specializing in cutting edge genomic technology. An industry pioneer, he has leveraged several partnerships fueling the high growth industry of genomic testing. With 15 years of experience in genetic assay design/testing he is a current member of the Association for Bioresource Facilities (ABRF), the Association for Laboratory Automation (ALA) & the American Association for the Advancement of Science (AAAS).`,
		`ryan-sprissler-phd-216409b4`,
	],
	[
		`Thomas Olson, PhD`,
		`thomas`,
		[`CCO`, `Chief Clinical Officer`],
		`thomas.jpg`,
		`Dr. Olson is an Associate Professor of Medicine and Science and Consultant in the Department of Cardiovascular Medicine at Mayo Clinic where he sees patients in the Division of Preventive Cardiology. He is the Director of the Clinical Integrative Physiology Research Laboratory which is funded by the National Institutes of Health, American Heart Association, and Industry.`,
		`thomas-olson-0166239`,
	],
	[
		`Timothy Curry, MD, PhD`,
		`timothy`,
		`Medical Director`,
		`tim.jpg`,
		`Dr. Curry has lead large clinical pharmacogenomic implementation projects and is a leader in pharmacogenomic education. He is the Director of the Education Program of the Mayo Clinic Center for Individualized Medicine as well as the Vice Chair of Practice for the Department of Anesthesiology and Perioperative Medicine, also at Mayo Clinic. He is also an integrative physiologist with special expertise in cardiopulmonary and neural physiology.`,
		`currytimothy`,
	],
	[
		`Bruce Johnson, PhD`,
		`bruce`,
		`Board of Advisors`,
		`bruce.jpg`,
		`Dr. Johnson is a Professor of Medicine and Physiology at Mayo Clinic, Rochester, Minnesota. Dr. Johnson has an established, NIH-funded laboratory to study genetics and cardiorespiratory function in patients with heart failure as well as grants from NSF and DOD focused on environmental physiology. Dr. Johnson received his BA from Pacific Lutheran University, Masters from St. Cloud State University and PhD in Respiratory Physiology and Biodynamics from the University of Wisconsin, Madison. Dr. Johnson completed a fellowship through the Mayo Graduate School of Medicine, Mayo Clinic College of Medicine and is a Consultant in the Division of Cardiovascular Diseases.`,
		`bruce-johnson-7062a28`,
	],
	[
		`David Herbert`,
		`david`,
		[`EVP of Strategy`, `Executive Vice President of Strategy`],
		`david.jpg`,
		`David spent over 20 years in leadership roles at Mayo Clinic, including Chief Administrative Officer of Mayo Medical Laboratories; Chair of Mayo Clinic Global Business Solutions; and Director of Technology Commercialization at Mayo Medical Ventures. David is an emeritus member of the Mayo Clinic staff, a board member and treasurer of the national Myotonic Dystrophy Foundation, and chair of the Southeast Minnesota Capital Fund.`,
		`davidpherbert`,
	],
	[
		`Don Wright`,
		`don`,
		`Senior Advisor`,
		`don.jpg`,
		`Don Wright spent the past decade growing Assurex Health from technology invented at Mayo Clinic and Cincinnati Children's Hospital Medical Center to a company of almost 500 employees serving over 500,000 people with mental health conditions. Assurex Health was acquired in 2016 by Myriad Genetics allowing Don to use his more than 25 years of experience in the informatics, product development, operations and life sciences fields, to assisting others turn their ideas into hyper-growth companies.`,
		`donwright`,
	],
	[
		`Carl Jepsen`,
		`carl`,
		`Director of Operations`,
		`carl.jpg`,
		`Carl has 18 years of banking, finance and commercial real estate experience. Prior to joining Geneticure, he most recently held the position of a Business Banking Relationship Manager. In that role, he consulted with clients and prospective clients, in all stages of growth, regarding process management, transition, and business strategies.`,
		`carl-jepsen-1ba6527`,
	],
	[
		`Robin Thomas`,
		`robin`,
		`Staff Software Engineer`,
		`robin.jpg`,
		`Robin has implemented new design systems at Google, managed merchant Bitcoin adoption for Coinbase, and lead machine learning initiatives at Best Buy's digital headquarters. He loves teaching code as much as writing it, and was among the highest-rated instructors of General Assembly's Web Development Immersive. He encourages you to try the Konami Code on this site.`,
		`robertakarobin`,
	],
];

export const teamDescription = `We're a team of hypertension expert scientists and doctors based in Rochester, Minnesota, home of the Mayo Clinic &mdash; which is also an investor in Geneticure. For 10 years we've put science and innovation to work, taking personalized medicine to the next level, unmatched in the world of pharmacogenomics. <a href="${routes.contact}">Contact us.</a>`;

export const team = _team.map(([name, shortname, title, img, description, linkedin]) => ({
	description,
	img: `/img/people/${img}`,
	name,
	shortname,
	social: [
		{
			href: `https://www.linkedin.com/in/${linkedin}`,
			img: `/img/icon/linkedin.svg`,
			title: `LinkedIn`,
		},
	],
	title: Array.isArray(title) ? title[1] : title,
	titleAbbr: Array.isArray(title) ? title[0] : title,
}));
