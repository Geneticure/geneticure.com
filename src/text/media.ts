import { fromKeys } from '@util/js/util';

const _media: Record<string, [string, string, string]> = {
	ashp: [
		`American Society of Health-System Pharmacists (ASHP)`,
		`ashp.svg`,
		`https://faseb.onlinelibrary.wiley.com/doi/10.1096/fasebj.30.1_supplement.941.12`,
	],
	bizjournals: [
		`Minneapolis/St. Paul Business Journal`,
		`bizjournals.svg`,
		`https://www.bizjournals.com/twincities/news/2016/05/25/geneticure-scott-snyder-startup-funding-study.html`,
	],
	faseb: [
		`Journal of the Federation of American Societies for Experimental Biology (FASEB)`,
		`faseb.svg`,
		`https://faseb.onlinelibrary.wiley.com/doi/10.1096/fasebj.30.1_supplement.942.1`,
	],
	jcm: [
		`Journal of Clinical Medicine`,
		`jcm.webp`,
		`https://www.mdpi.com/2077-0383/8/3/289`,
	],
	jme: [
		`Journal of Medical Economics (JME)`,
		`jme.jpg`,
		`https://www.tandfonline.com/doi/abs/10.1080/13696998.2018.1531011`,
	],
	lancet: [
		`The Lancet`,
		`lancet.svg`,
		`https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01471-4/fulltext`,
	],
	postbulletin: [
		`Post Bulletin`,
		`post-bulletin.svg`,
		`https://www.postbulletin.com/newsmd/geneticure-personalizes-medical-treatment`,
	],
	strib: [
		`Star Tribune`,
		`startribune.png`,
		`https://www.startribune.com/high-blood-pressure-is-billion-dollar-target-for-device-makers/509449331/`,
	],
};

export const mediaById = Object.fromEntries(
	Object.entries(_media).map(([id, [name, logo, url]]) => [
		id,
		{
			icon: `/img/logo/${logo}`,
			name,
			url,
		},
	]),
);

export const mediaIds = [`strib`, `bizjournals`, `postbulletin`];
export const medias = fromKeys(mediaIds, mediaById, { assertAll: false });

export const journalIds = [`lancet`, `jcm`, `jme`, `faseb`, `ashp`];
export const journals = fromKeys(journalIds, mediaById, { assertAll: false });
