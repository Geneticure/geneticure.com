import { routes } from 'src/routes';

export const _faqs: Array<[
	string,
	string,
	Array<
		Array<string>
	>,
]> = [
	[
		`methodology`,
		`Understanding the test`,
		[
			[
				`for-whom`,
				`Who might want this test?`,
				`Individuals with newly diagnosed hypertension that are interested in avoiding the "trial and error" approach for finding the best medication.`,
				`Individuals who have already been treated for hypertension can also benefit from our test. Most medications have a bell-curve response meaning some medications may do nothing to impact blood pressure for certain people and for others this same medication could cause blood pressure to go down, or even up. This means many patients may be taking medications that are either ineffective or potentially even counter productive. With the guidance of your doctor, the Geneticure test could help you reduce the number of medications you are taking or optimize them.`,
			],
			[
				`difference`,
				`What is the difference between this test and other genetic tests (e.g. 23andMe, Ancestry.com)?`,
				`Unlike novelty or disease-risk tests, this test focuses only on hypertension and only analyzes the genes most-vetted by research to impact response to blood pressure medications. We also use a patent-pending multi-gene algorithm that analyzes the variants both independently and in combination, so that the recommendations are a result of a networked, integrated approach.`,
			],
			[
				`reuse-data`,
				`I already took a genetic test from another company. Can Geneticure use that data?`,
				`Unfortunately we cannot use genetic results from other companies. No other known genetic test has sufficient clinical coverage of the sites examined by Geneticure's hypertension panel. Most other tests are primarily for entertainment purposes, whereas Geneticure's looks at very specific sites which have been tested through clinical research to show, collectively, a difference in blood pressure control.`,
			],
			[
				`science`,
				`Is this test validated by science?`,
				`Yes. In Geneticure's retrospective clinical trial, the data suggests the Geneticure approach is associated with a 7.1mm Hg lower systolic blood pressure (top number) and 5.4mm Hg lower diastolic Blood Pressure (bottom number). This is meaningfully better than the current standard of care -- about 22% and 39% lower, respectively.`,
				`Blood pressure reductions like this have been shown in previous studies to lead to a 40% reduction in stroke and 25% reduction in heart attacks. Several well published studies (New England Journal of Medicine, American Heart Association, The Journal of the American Medical Association) praise similar therapy reductions in blood pressure when assessing new therapies against placebo. This is particularly meaningful when our genotyping guided-therapy is going head-to-head against standard of care drug therapy in a very well controlled population on multiple medications. For more information, please see <a href="${routes.research}">our research</a>.`,
			],
			[
				`evidence`,
				`What is the evidence for the test?`,
				`Thousands of peer-reviewed research articles have been reviewed and critically assessed to develop this comprehensive panel. The efficacy of the test was then vetted with 2 retrospective, and 1 prospective randomized clinical trial. Our publications can be viewed at <a href="${routes.research}">geneticure.com${routes.research}</a>.`,
			],
			[
				`interactions`,
				`Does your test examine my existing medications and whether new drugs will interact?`,
				`Our provider network will look at your medication list and will promptly inform you of any counter-indications of medications you may be taking. Please enter medication names with correct spelling for accurate assessment.`,
			],
			[
				`which-genes`,
				`What genes are analyzed?`,
				`Genes that impact your cardiac, vascular, and renal function are analyzed so that we can determine which variants you carry and can deliver recommendations for the medications that will work best for you.`,
			],
		],
	],
	[
		`kits`,
		`Getting a test kit`,
		[
			[
				`prescriptions`,
				`Do you need a prescription for this test?`,
				`We will work with your primary care provider to get you the test or, in certain cases, we will contract with an independent provider network. Your provider can register for an account on our portal using the link at the top of this page, or reach out to us at info@geneticure.com to discuss the details.`,
			],
			[
				`for-other`,
				`Can I order tests for someone else?`,
				`Yes. This is commonly done when a loved one or relative has hypertension. They must read the disclosers and complete the the online kit activation process themselves to ensure consent.`,
			],
			[
				`refunds`,
				`What is your refund policy?`,
				`If our ordering physician determines that you are not a candidate for the test at this time, we will reimburse you for the cost of the test. We cannot accept returns for any kits that have been used.`,
			],
			[
				`insurance`,
				`Is the test covered by insurance?`,
				`We are working on insurance coverage for the technology, but at this time Geneticure does not handle insurance billing or payments. It is most likely going to be difficult at this time for you to be reimbursed by your insurance for the cost of the test. To better understand if your policy will cover this test please contact your insurance company directly.`,
			],
			[
				`hsa`,
				`Can I use my health saving account to pay for the test?`,
				`Genetic Testing is generally considered eligible medical expense for FSA and HSA reimbursement. You will want to check with your carrier to confirm whether or not you can use your HSA/FSA dollars to pay for the Geneticure test.`,
			],
			[
				`restrictions`,
				`Are there any age restrictions?`,
				`Yes. We do not test individuals under the age of 18.`,
			],
			[
				`usa-states`,
				`Is Geneticure available in all US states?`,
				`At this time our test is not available to residents of New York. Please check back periodically as we hope to be able to offer the test in this state soon.`,
			],
			[
				`international`,
				`Is Geneticure available outside of the US?`,
				`Processing samples outside the United States is done on a country-by-country analysis in accordance with the country of origin's regulations.`,
			],
		],
	],
	[
		`testing`,
		`Taking the test`,
		[
			[
				`expiration`,
				`How soon do I need to complete and ship my kit? Do the kits expire?`,
				`The kits do expire. The expiration date is printed on the sticker on the outside of the kit.`,
			],
			[
				`why-activate`,
				`Why do I need to activate my kit?`,
				`Your sample cannot be processed until you activate your kit. If you do not active your kit prior to mailing the sample, the timing of your report could be delayed`,
			],
			[
				`how-activate`,
				`How do I activate my kit?`,
				`Activating your kit initiates the process of a physician overseeing the processing of your request as well as the sample tracking system. Your sample will not be processed until you activate your kit, please activate your kit prior to mailing the sample. To activate your kit go to the <a href="${routes.login}">Geneticure User Portal</a>. Simply sign in, or for a first time user, register a new account.`,
			],
			[
				`kit-id`,
				`How do I find my kit ID?`,
				`Within your collection kit you received an extra sticker containing a unique barcode. This is your kit ID. The insert provided with your sample collection kit has the extra sticker already affixed for safe keeping with your medical records. The kit ID sticker is the only unique identifier of your kit. Because we take privacy very seriously, if your kit ID is lost, we will not be able to retrieve it for you. Using the kit ID, please activate your kit prior to mailing in your sample.`,
			],
			[
				`speciment`,
				`How do I send a specimen?`,
				`Collection is simple and painless. Included within the collection kit are detailed instructions. You will use a cheek swab (which is like a Q-tip with an ejectable tip) to rub the inside of your cheek, then place the tip into the sample tubes provided. You will do this 2 times—once for each cheek—so that we will be certain to have enough DNA to perform the test. Be sure to follow the instructions closely and contact us with questions. Additionally, please do activate your kit prior to mailing the samples.`,
			],
			[
				`forgot-activate`,
				`What should I do if I forgot to activate my kit before mailing it back?`,
				`As long as you have your kit ID, you can still activate your kit. The kit identification code is on the additional sticker attached to the kit insert. Please note, we will not be able to process your sample until your kit has been activated.`,
			],
			[
				`after-test`,
				`What should I do after I am tested?`,
				`Please ensure that your kit has been activated before you mail the samples.`,
				`Maintain all health regimens and appointments and follow your doctor's orders. We'll work quickly to provide you your test results.`,
				`When you receive your report, share it with your provider and have a conversation about next steps. It is important that you follow your providers  medical advice.`,
			],
		],
	],
	[
		`results`,
		`About your results`,
		[
			[
				`when-results`,
				`When will I get my results?`,
				`It is important to active your kit prior to mailing your sample. Your sample will not be processed prior to kit activation. If your kit has been activated, you can expect to receive your results in approximately 10-15 business days of our lab receiving your sample. <strong>Please note that delays can happen.</strong>. Timing can vary based on quality of the sample, transit times, our 3rd party physician approval, and holidays, among many other factors. You will receive an email notification when your results are ready.`,
			],
			[
				`report`,
				`How do I receive my report?`,
				`Our service is exclusively online. You'll receive your reports through a password-protected account at Geneticure.com. In order to receive reports and participate in the service, you need to have a valid email address that allows you to send and receive messages. You also need access to a computer or mobile device that connects to the Internet.`,
			],
			[
				`confidential`,
				`Are my results confidential?`,
				`Absolutely. Geneticure complies with HIPAA (Health Insurance Portability and Accountability Act of 1996). Geneticure goes further by keeping the records of your test coded and deidentified.`,
			],
			[
				`what-results`,
				`What will my results tell me?`,
				`The test generates a list of recommendations in order of evidence-based most-to-least effective. This allows your doctor to examine your whole health and which of the medications should be used based on the additional information they know about you.`,
			],
			[
				`accuracy`,
				`How accurate are the results?`,
				`Our rigorous quality standards include:`,
				`- All samples being processed in CLIA-certified and CAP-accredited labs`,
				`- Our DNA collection kits are manufactured in accordance with FDA's Good Manufacturing Practice regulations`,
				`- Genotyping is a well-established and a reliable platform is used for for analyzing DNA`,
				`- A team of scientists and medical experts that use a rigorous process to develop and design each report, ensuring validity and ease of use.`,
			],
		],
	],
	[
		`doctor`,
		`Working with your doctor`,
		[
			[
				`tell-provider`,
				`How do I share Geneticure with my personal healthcare provider?`,
				`We'd be happy to help you discuss our solution with your healthcare provider. After a brief introductory call or email we can get them onboard in minutes and send a kit. The best way to get started is to send us an email at info@geneticure.com and we can set up a discussion and answer any questions you or your provider may have. Or, if they are ready to order kits, have them register for an account using the button at the top of this page.`,
			],
			[
				`reporting`,
				`What information is reported to my doctor?`,
				`If your provider ordered the test, the report will be shared directly with them.`,
			],
			[
				`use`,
				`How will my doctor use this information provided by the test?`,
				`The recommendations are provided at the top of the report followed by a narrative description and the description of your genotypes as they relate to the functionality of medication classes.`,
			],
			[
				`discuss`,
				`How do I talk to my doctor about the test?`,
				`As with all medical decisions, the information is used in a conversation between you and your doctor about treatment options and what is best for you.`,
			],
		],
	],
	[
		`security`,
		`Security and privacy`,
		[
			[
				`hipaa`,
				`What is HIPAA?`,
				`HIPAA stands for Health Insurance Portability and Accountability Act. It serves 2 major functions:  1) maintains high levels of security and privacy of medical information and 2) ensures that individuals can access their own medical records and health information.`,
			],
			[
				`gina`,
				`What is GINA?`,
				`GINA is the Genetic Information Non-Discrimination Act. This 2008 law prevents employers and health insurance companies from discriminating against you based on genetic results (like those in the Geneticure test). However, GINA does not protect against decisions that may be made by life insurance companies. More information on GINA can be found here: https://www.eeoc.gov/laws/types/genetic.cfm ,http://ginahelp.org/`,
			],
			[
				`risks`,
				`What risks to my privacy does getting a genetic test pose?`,
				`Privacy is a priority for us, and, as a result your personal health information is secure. Our third-party clinician ordering service may collect personal/clinical information if you are ordering as a patient, but Geneticure does not collect any identifiable information that will be tied to your genetic sample. Geneticure assigns a unique identifier to you (included in your kit) and it is important for you to keep track of this because Geneticure has no way to identify you outside of this ID. Once your sample moves into the genotyping laboratory, your sample is de-identified one additional time. This double de-identification process protects your raw genetic data from being tied to you in any identifiable manner. Please see our full privacy policy located on our website.`,
			],
			[
				`sample`,
				`What do you do with my DNA sample once the report is sent to my doctor?`,
				`We do not keep any samples beyond the time needed to get a Geneticure for Hypertension result report. Once a successful file is uploaded and a report is generated based on our algorithm, all DNA samples are destroyed.`,
			],
			[
				`legal`,
				`What laws exist that protect my information?`,
				`The primary protection provided to customers who have had genetic testing performed is the Genetic Information Non-Discrimination Act (GINA) of 2008. This protects against discrimination, harassment, and retaliation by health insurers and employers based on your genetic results. More information can be found at: http://ginahelp.org/`,
			],
			[
				`license`,
				`Where can I find a copy of your licenses and certifications?`,
				`Our CLIA registration for our accessioning facility is 24D2145318.`,
				`Our CLIA accreditation for sample processing and assay performance is 03D2055105.`,
			],
		],
	],
	[
		`providers`,
		`For providers`,
		[
			[
				`how-request`,
				`How do I request Geneticure kits for my office?`,
				`Once you have <a href="${routes.login}">registered for an account</a>, you will have an opportunity to request Geneticure kits.`,
			],
			[
				`patient-accounts`,
				`Will my patient need a Geneticure account?`,
				`Activation of kits can be done by providers. No action by the patient will be needed when providers activate kits on behalf of patients.`,
			],
			[
				`integrate`,
				`How do I integrate Geneticure into my practice?`,
				`Please <a href="${routes.login}">register for an account</a> as a provider. We will be in touch regarding next steps once we verify your information.`,
			],
		],
	],
];

export const faqs = _faqs.map(([sectionId, sectionTitle, questions]) => ({
	id: sectionId,
	questions: questions.map(([questionId, questionTitle, ...text]) => ({
		id: `${sectionId}-${questionId}`,
		text: text.join(`\n`),
		title: questionTitle,
	})),
	title: sectionTitle,
}));
