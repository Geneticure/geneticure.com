const _stats: Record<string, [number, string, string]> = {
	attacks: [
		25,
		`Reduction in heart attacks`,
		`research-trials-cardio`,
	],
	costs: [
		47,
		`Decreased healthcare costs`,
		`article-economics`,
	],
	diastolic: [
		39,
		`Lower diastolic pressure`,
		`article-algorithm`,
	],
	eventrisk: [
		19,
		`Decreased event risk among diagnosed and controlled population`,
		`article-economics`,
	],
	htn: [
		50,
		`Decreased time to control patient's hypertension`,
		`present-time-to-control`,
	],
	sprint: [
		50,
		`Increased likelihood of meeting SPRINT guidelines`,
		`trial-algorithm`,
	],
	strokes: [
		40,
		`Reduction in strokes`,
		`article-economics`,
	],
	systolic: [
		22,
		`Lower systolic pressure`,
		`article-algorithm`,
	],
};

export const statsById = Object.fromEntries(
	Object.entries(_stats).map(([id, [value, title, cite]]) => [
		id,
		{
			cite,
			href: `#cite-${cite}`,
			title,
			value,
		},
	]),
);
