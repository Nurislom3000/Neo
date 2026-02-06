export const ulugbekDialog = {
	start: {
		text: `Greetings.
I am Mirzo Ulugbek, ruler of Samarkand and a servant of science.
Ask your questions, and I shall answer according to history.`,
		audio:
			'/src/assets/mirzoAudioFiles/Greetings_I_am_Mirzo_Ulugbek,_ruler_of_Samarkand_and_a_servant_of.m4a',
		options: [
			{
				id: 'identity',
				question:
					'Who were you historically, and how did you differ from other Timurid rulers?',
				next: 'identity_answer',
			},
			{
				id: 'science_focus',
				question:
					'Why did you prioritize science and astronomy instead of military expansion?',
				next: 'science_focus_answer',
			},
			{
				id: 'politics',
				question: 'What political challenges did you face as a ruler?',
				next: 'politics_answer',
			},
		],
	},

	/* ========== LAYER 2 ========== */

	identity_answer: {
		text: `I was born in 1394, the grandson of Amir Timur, whose empire was built through conquest and fear. Unlike him, my identity was shaped by education and scholarship. From a young age, I studied mathematics, astronomy, and philosophy, believing knowledge to be more enduring than military power. While other Timurid rulers sought legitimacy through warfare, I pursued it through intellectual leadership, which made my reign unique but also politically fragile.`,
		audio:
			'/src/assets/mirzoAudioFiles/I_was_born_in_1394,_the_grandson_of_Amir_Timur,_whose_empire_was.m4a',
		options: [
			{
				id: 'education',
				question:
					'How did your education influence your worldview and leadership style?',
				next: 'education_answer',
			},
			{
				id: 'legacy_view',
				question: 'How did you wish future generations to remember you?',
				next: 'legacy_view_answer',
			},
			{
				id: 'family',
				question:
					'How did being Timur’s grandson affect expectations placed upon you?',
				next: 'family_answer',
			},
		],
	},

	science_focus_answer: {
		text: `I believed science created lasting order, while conquest brought temporary dominance. Astronomy was essential for calendars, navigation, agriculture, and religious life. By understanding the heavens, society could better understand time and structure. Samarkand became my laboratory, not a battlefield. However, my devotion to science was often misunderstood by military elites, who viewed scholarly pursuits as weakness rather than strength.`,
		audio:
			'/src/assets/mirzoAudioFiles/I_believed_science_created_lasting_order,_while_conquest_brought.m4a',
		options: [
			{
				id: 'observatory',
				question: 'Why did you build the Ulugbek Observatory in Samarkand?',
				next: 'observatory_answer',
			},
			{
				id: 'zij',
				question: 'What was the Zij-i Sultani, and why was it revolutionary?',
				next: 'zij_answer',
			},
			{
				id: 'scholars',
				question: 'What role did scholars play in your court and government?',
				next: 'scholars_answer',
			},
		],
	},

	politics_answer: {
		text: `Ruling an empire built on conquest required constant military strength, which conflicted with my priorities. The nobility expected expansion and rewards through war, while I focused on stability and education. This created political tension and weakened my authority. Without fear as a tool, rival factions grew stronger, eventually threatening my position as ruler.`,
		audio:
			'/src/assets/mirzoAudioFiles/Ruling_an_empire_built_on_conquest_required_constant_military_strength.m4a',
		options: [
			{
				id: 'military_elite',
				question:
					'Why did your relationship with the military elite deteriorate?',
				next: 'military_elite_answer',
			},
			{
				id: 'administration',
				question: 'How did you attempt to govern the empire administratively?',
				next: 'administration_answer',
			},
			{
				id: 'religion',
				question: 'How did religious authorities view your rule?',
				next: 'religion_answer',
			},
		],
	},

	/* ========== LAYER 3 ========== */

	education_answer: {
		text: `My education was guided by leading scholars such as Qadi Zada al-Rumi. I was trained in precise observation, calculation, and verification rather than blind acceptance of tradition. This shaped my belief that rulers should understand the world they govern. Education transformed me from a patron of science into an active contributor, which deeply influenced my decisions as a ruler.`,
		audio:
			'/src/assets/mirzoAudioFiles/My_education_was_guided_by_leading_scholars_such_as_Qadi_Zada_al.m4a',
		options: [
			{
				id: 'impact',
				question: 'What long-term impact did your rule have?',
				next: 'impact_answer',
			},
			{
				id: 'failure',
				question: 'Why did your reign ultimately fail politically?',
				next: 'failure_answer',
			},
			{
				id: 'judgement',
				question: 'How should history judge your life and work?',
				next: 'judgement_answer',
			},
		],
	},

	legacy_view_answer: {
		text: `I hoped to be remembered as a ruler who valued knowledge over destruction. While my political reign was short and fragile, my scientific contributions endured for centuries. I believed true legacy was written in books and discoveries rather than conquered lands.`,
		audio:
			'/src/assets/mirzoAudioFiles/I_hoped_to_be_remembered_as_a_ruler_who_valued_knowledge_over_destruction.m4a',
		options: [
			{
				id: 'impact',
				question: 'What long-term impact did your rule have?',
				next: 'impact_answer',
			},
			{
				id: 'failure',
				question: 'Why did your reign ultimately fail politically?',
				next: 'failure_answer',
			},
			{
				id: 'judgement',
				question: 'How should history judge your life and work?',
				next: 'judgement_answer',
			},
		],
	},

	family_answer: {
		text: `As Timur’s grandson, I was expected to rule through conquest and fear. My rejection of this path disappointed many nobles and commanders. While my lineage granted legitimacy, it also created unrealistic expectations that conflicted with my scholarly nature.`,
		audio:
			'/src/assets/mirzoAudioFiles/As_Timur’s_grandson,_I_was_expected_to_rule_through_conquest_and.m4a',
		options: [
			{
				id: 'impact',
				question: 'What long-term impact did your rule have?',
				next: 'impact_answer',
			},
			{
				id: 'failure',
				question: 'Why did your reign ultimately fail politically?',
				next: 'failure_answer',
			},
			{
				id: 'judgement',
				question: 'How should history judge your life and work?',
				next: 'judgement_answer',
			},
		],
	},

	/* ========== LAYER 4 (FINAL) ========== */

	impact_answer: {
		text: `My long-term impact lies almost entirely in science and education. Although my political authority collapsed, my astronomical works influenced scholars in the Islamic world, India, and Europe for centuries. Samarkand became a symbol of intellectual ambition, proving that Central Asia was not only a land of conquerors but also of thinkers.`,
		audio:
			'/src/assets/mirzoAudioFiles/My_long_term_impact_lies_almost_entirely_in_science_and_education.m4a',
		options: [],
	},

	failure_answer: {
		text: `My reign failed politically because I ruled an empire that valued military dominance while offering intellectual leadership instead. Without strong military loyalty, internal rivals gained strength. My refusal to rule through fear left me vulnerable to rebellion, including betrayal from within my own family.`,
		audio:
			'/src/assets/mirzoAudioFiles/My_reign_failed_politically_because_I_ruled_an_empire_that_valued.m4a',
		options: [],
	},

	judgement_answer: {
		text: `History should judge me as a ruler ahead of my time. While ineffective by the standards of imperial politics, I demonstrated that knowledge, precision, and inquiry could rival power. My life shows that intellectual legacy can survive long after political authority disappears.`,
		audio:
			'/src/assets/mirzoAudioFiles/History should judge me as a ruler ahead of my time.m4a',
		options: [],
	},
}
