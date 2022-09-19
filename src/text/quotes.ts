const _quotes = [
	[
		`I had my hypertension under control, but my medication went off the market. Soon I was in the emergency room. I remember my systolic blood pressure was 210. The doctors worked together to come up with a cocktail of drugs that was like the medication I used to take, but it didn't seem to work. A coworker recommended the Geneticure test. It showed that <strong>the new medication was my best choice</strong>, which made me feel like I was on the right track. Now I have good blood pressure again.`,
		`Carole`,
	],
	[
		`I went to the ER for an unrelated issue. When I arrived my blood pressure was 181/96. I asked them to dose my Geneticure recommended therapy, which they did through an IV. <strong>My blood pressure dropped to 139/66 within 2 minutes.</strong>`,
		`Gayle`,
	],
	[
		`It came on suddenly at work. My co-workers tried to use an automatic blood pressure cuff but it kept saying "ERROR." By the time the ambulance came my numbers were 240/160. Many medications, doctors, nurses, and days in the hospital later, I had more questions than answers. I took Geneticure's test. <strong>It recommended a medication we hadn't tried.</strong> My doctor prescribed it immediately, and it worked. Now when I take my blood pressure every afternoon it's usually 120/80.`,
		`Dave`,
	],
	[
		`I started with ACE inhibitors and it worked for a bit. When it stopped, my doctor increased the dose. It still didn't work consistently, so my doctor added a calcium channel blocker at a high dose, but that didn't work any better. My sister had a Geneticure report. I showed it to my doctor. He followed its recommendation and prescribed the same beta blocker as my sister. <strong>It started working right away.</strong> My sister and I believe in the work that you are doing and I love the way I feel!`,
		`Cynda`,
	],
];

export const quotes = _quotes.map(([text, name]) => ({
	name,
	text,
}));
