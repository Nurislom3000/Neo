// src/data/amirDialog.js

export const amirDialog = {
	start: {
		text: `Greetings.
I am Amir Timur, ruler of Transoxiana.
Ask, and I shall answer according to history.`,
		audio: '/src/assets/audioFiles/Greetings.m4a',
		options: [
			{
				id: 'rise',
				question:
					'Explain the political collapse of the Chagatai Khanate and how this chaos allowed you to rise to power.',
				next: 'rise_answer',
			},
			{
				id: 'rule',
				question:
					'Describe the strategy you used to rule as Amir while keeping the Mongol tradition of a Chinggisid khan.',
				next: 'rule_answer',
			},
			{
				id: 'empire',
				question:
					'Describe your empire-building strategy, including military conquest, governance, and cultural changes.',
				next: 'empire_answer',
			},
		],
	},

	// ================== LAYER 1 ==================

	rise_answer: {
		text: `The collapse of the Chagatai Khanate created a power vacuum in Central Asia. During the mid-14th century, the Khanate became divided due to internal conflicts, rival leaders, and weak central authority. This allowed local warlords and tribal leaders to fight for control of land and trade routes. Without a single strong ruler, power became based on military strength rather than inheritance or law. This chaotic environment allowed ambitious commanders to rise quickly if they could gather a loyal army and defeat rivals. I used this chaos as my opportunity. I built a disciplined army, formed alliances, and won key battles against rival commanders. By 1370, I had secured control over Transoxiana and began building a new power system based on personal authority and military dominance. The collapse of the Khanate made it possible for someone like me—strong, ruthless, and strategically intelligent—to rise from a noble but non-royal family to become the most powerful leader in the region.`,
		audio:
			'/src/assets/audioFiles/The_collapse_of_the_Chagatai_Khanate_created_a_power_vacuum_in_Central.m4a',
		options: [
			{
				id: 'early_life',
				question:
					'How did your early life and training in the Barlas tribe help you become a military leader and commander?',
				next: 'early_life_answer',
			},
			{
				id: 'alliances',
				question:
					'Explain the role of alliances, marriages, and tribal loyalty in your rise to power.',
				next: 'alliances_answer',
			},
			{
				id: 'battle',
				question:
					'Describe the key battles that helped you defeat rivals and gain control of Central Asia.',
				next: 'battle_answer',
			},
		],
	},

	rule_answer: {
		text: `Mongol tradition required that only descendants of Genghis Khan could become khans. To respect this tradition while holding real power, I ruled as Amir and placed a Chinggisid khan on the throne as a symbolic ruler. This allowed me to maintain authority without breaking tradition. The khan represented legitimacy, while I controlled the military, administration, and decision-making. This strategy prevented rebellion from supporters of the old Mongol system. I also used strict discipline and a strong administration to keep control over the empire. My army and officials were loyal and organized, which allowed me to manage distant regions. This system combined traditional legitimacy with practical power, allowing me to rule effectively. It was a careful balance between appearance and reality, which was necessary in a society that valued lineage and tradition.`,
		audio:
			'/src/assets/audioFiles/Mongol_tradition_required_that_only_descendants_of_Genghis_Khan.m4a',
		options: [
			{
				id: 'administration',
				question:
					'Explain how your administration managed the empire’s size, trade routes, and regional governors.',
				next: 'administration_answer',
			},
			{
				id: 'law',
				question:
					'Describe your legal system and how it maintained order across diverse regions.',
				next: 'law_answer',
			},
			{
				id: 'religion',
				question:
					'Explain how religion and culture were used to strengthen your legitimacy and control.',
				next: 'religion_answer',
			},
		],
	},

	empire_answer: {
		text: `My empire expanded through continuous military campaigns and strategic governance. Between 1380 and 1405, my armies conquered Persia, the Caucasus, Central Asia, and northern India. I used fast cavalry, siege tactics, and strategic planning to defeat powerful opponents. Major cities like Samarkand, Herat, and Delhi were captured and often rebuilt under my rule. I also used harsh punishments against resistance, which discouraged rebellion. At the same time, I relocated skilled artisans, scholars, and architects to Samarkand, turning it into a major cultural center. This helped the empire grow not only in power but also in wealth, art, and knowledge. My strategy combined military strength with cultural development. I used both fear and respect to maintain control. This created a powerful empire that lasted for many years and left a strong historical legacy.`,
		audio:
			'/src/assets/audioFiles/My_empire_expanded_through_continuous_military_campaigns_and_strategic.m4a',
		options: [
			{
				id: 'persia',
				question:
					'Explain how the conquest of Persia changed the region’s political structure and economy, and how it strengthened your empire.',
				next: 'persia_answer',
			},
			{
				id: 'india',
				question:
					'Describe your campaign in India, including its impact on wealth, reputation, and military strength.',
				next: 'india_answer',
			},
			{
				id: 'samarkand',
				question:
					'Explain how Samarkand became the cultural center of your empire and how it supported your legacy.',
				next: 'samarkand_answer',
			},
		],
	},

	// ================== LAYER 2 ==================

	early_life_answer: {
		text: `I was born in 1336 near Kesh (now Shahrisabz) into the Barlas tribe, which was noble but not part of the royal Chinggisid lineage. This meant I could not claim leadership through blood alone. Instead, I had to earn power through skill, discipline, and success. From a young age, I trained in horseback riding, archery, and battlefield tactics. I learned to lead men in war and understand the importance of loyalty, rewards, and punishment. My upbringing taught me that strength was gained through action, not inheritance. This shaped my leadership style: strict discipline, strategic planning, and ruthless decisions when needed. I also learned how to inspire loyalty among soldiers by rewarding success and punishing betrayal. This early training prepared me for the chaotic political environment of Central Asia, where only the strongest and most organized commanders could survive. Without royal blood, I became determined to build my power through military achievement and strategic alliances.`,
		audio:
			'/src/assets/audioFiles/I_was_born_in_1336_near_Kesh_now_Shahrisabz_into_the_Barlas_tribe.m4a',
		options: [
			{
				id: 'training',
				question:
					'How did your military training shape the structure and discipline of your army?',
				next: 'training_answer',
			},
			{
				id: 'loyalty',
				question:
					'How did you build loyalty among your soldiers and commanders despite your non-royal status?',
				next: 'loyalty_answer',
			},
		],
	},

	alliances_answer: {
		text: `Alliances were essential to my rise. I built partnerships with tribal leaders and rival commanders when it was useful, especially when we faced a stronger enemy. These alliances helped me gather more soldiers and resources, allowing me to win key battles. I also used marriage alliances to connect myself to the Chinggisid family, which improved my legitimacy. However, my alliances were often temporary. Once a rival became weak, I would remove them to prevent future threats. This was a harsh strategy, but it helped me stay in control. By balancing cooperation and elimination, I could expand my power without creating strong rivals. The ability to form alliances when needed and break them when necessary was a major reason for my success. It allowed me to navigate the complex political environment of Central Asia and become the dominant leader.`,
		audio:
			'/src/assets/audioFiles/Alliances_were_essential_to_my_rise_I_built_partnerships_with_tribal.m4a',
		options: [
			{
				id: 'marriage',
				question:
					'Explain how marriage into the Chinggisid family helped you gain legitimacy and power.',
				next: 'marriage_answer',
			},
			{
				id: 'betrayal',
				question:
					'Why did you betray some allies, and how did this affect your empire?',
				next: 'betrayal_answer',
			},
		],
	},

	// Complete sections for marriage_answer and betrayal_answer

	marriage_answer: {
		text: `Marriage into the Chinggisid family was essential for my political legitimacy. In 1370, I married Saray Mulk Khanum, a direct descendant of Genghis Khan and daughter of Qazan Khan of the Chagatai Khanate. This marriage connected me to the sacred Chinggisid bloodline, which was crucial because only descendants of Genghis Khan were traditionally accepted as legitimate rulers in Mongol society. Through this marriage, I gained the title of "guregen" (royal son-in-law), which provided me with political legitimacy while I held the real power as Amir. I also married other women from powerful families to strengthen alliances. For example, my marriage to Tukal Khanum, another Chinggisid princess, further solidified my connection to the Mongol royal lineage. These strategic marriages allowed me to place puppet khans on the throne—such as Suyurghatmish Khan (1370-1388) and Mahmud Khan (1388-1402)—while I controlled the military and administration. The marriages created a dual power structure where the khan represented traditional legitimacy and I exercised actual authority. This system prevented rebellion from Mongol traditionalists who might have opposed a non-Chinggisid ruler.`,
		audio:
			'/src/assets/audioFiles/Marriage_into_the_Chinggisid_family_was_essential_for_my_political.m4a',
		options: [
			{
				id: 'legitimacy',
				question:
					'How did marriage alliances affect your relationship with traditional Mongol nobles?',
				next: 'legitimacy_answer',
			},
			{
				id: 'political_marriage',
				question:
					'Explain how you used marriage as a political tool to strengthen regional control.',
				next: 'political_marriage_answer',
			},
		],
	},

	betrayal_answer: {
		text: `Betraying allies was a harsh but necessary strategy for maintaining power in Central Asia's unstable political environment. One of the most significant examples was my relationship with Amir Husayn, who was both my brother-in-law and early ally. Between 1360 and 1370, we fought together against the Chagatai khans and shared control of Transoxiana. However, by 1370, our alliance had deteriorated into rivalry. Husayn controlled Balkh while I controlled Samarkand. Rather than share power permanently, I besieged Balkh and captured Husayn in 1370. He was executed shortly after, allowing me to unite Transoxiana under single rule. Another example was my treatment of Tokhtamysh, khan of the Golden Horde. I initially supported Tokhtamysh's rise to power in the 1370s and 1380s, helping him defeat his rivals. However, by 1385, Tokhtamysh began raiding territories I considered mine, including Azerbaijan and Tabriz. This led to conflict, and I defeated him decisively at the Battle of the Kondurcha River in 1391 and again at the Battle of Terek River in 1395. These betrayals, while brutal, prevented civil war and consolidated power under my authority, ensuring the empire remained strong and united.`,
		audio:
			'/src/assets/audioFiles/Betraying_allies_was_a_harsh_but_necessary_strategy_for_maintaining.m4a',
		options: [
			{
				id: 'trust',
				question:
					'How did betraying allies affect trust within your empire and among other leaders?',
				next: 'trust_answer',
			},
			{
				id: 'elimination',
				question:
					'Describe specific examples of allies you eliminated and why it was necessary.',
				next: 'elimination_answer',
			},
		],
	},

	// ================== LAYER 3 (for marriage and betrayal paths) ==================

	legitimacy_answer: {
		text: `Marriage alliances significantly improved my relationship with traditional Mongol nobles by providing me with Chinggisid legitimacy. After marrying Saray Mulk Khanum in 1370, I gained acceptance from many Mongol aristocrats who valued the sacred bloodline of Genghis Khan. This marriage allowed me to install puppet khans—first Suyurghatmish Khan (1370-1388) and then Mahmud Khan (1388-1402)—who provided ceremonial legitimacy while I controlled military and administrative matters. The Mongol nobles accepted this arrangement because it preserved the appearance of Chinggisid rule, even though real power rested with me. My title of "guregen" (royal son-in-law) was recognized throughout Central Asia and reduced resistance from traditionalist factions. However, I also used military force to back up this legitimacy. For example, when regional nobles challenged my authority, such as during the 1365-1370 period when various tribal leaders competed for control, I defeated them militarily while simultaneously strengthening my dynastic claims through marriage. This dual approach—combining traditional legitimacy with military dominance—created a stable power base that lasted throughout my reign until 1405.`,
		audio:
			'/src/assets/audioFiles/Marriage_alliances_significantly_improved_my_relationship_with_traditional.m4a',
		options: [
			{
				id: 'end_marriage',
				question: 'I understand. Let me ask about something else.',
				next: 'end',
			},
		],
	},

	political_marriage_answer: {
		text: `Marriage was a crucial political tool for strengthening regional control throughout my empire. I arranged marriages between my sons and grandsons with daughters of conquered rulers to solidify control over new territories. For example, after conquering Khwarezm in 1379-1388, I married my grandson Khalil Sultan to a daughter of the local ruling family, helping to integrate the region into my empire. When I conquered parts of Persia in the 1380s and 1390s, I similarly arranged marriages between my family members and Persian noble families, particularly in cities like Herat, Shiraz, and Isfahan. These marriages created kinship ties that made rebellion more difficult because local nobles had family connections to my court. I also married my daughters to important regional governors and military commanders to ensure their loyalty. My son Shah Rukh, for instance, was married to Gawhar Shad, daughter of an important noble family, which strengthened his position as governor of Khurasan from 1397 onward. Additionally, I had multiple wives from different tribal and ethnic backgrounds—Turkic, Mongol, and Persian—which helped build a coalition of support across diverse populations. By 1405, my family network extended throughout the empire, creating a web of kinship that reinforced political control alongside military power.`,
		options: [
			{
				id: 'end_marriage',
				question: 'I understand. Let me ask about something else.',
				next: 'end',
			},
		],
	},

	trust_answer: {
		text: `Betraying allies created a climate of fear rather than trust, but this served my strategic purposes. After I executed Amir Husayn in 1370, other regional leaders understood that even close family ties and past alliances would not protect them if they became rivals. This created what some historians call a "reign of terror," but it also established clear rules: absolute loyalty was required, and any challenge to my authority would be crushed. When Tokhtamysh of the Golden Horde raided my territories in 1385-1386 despite my earlier support, I responded with devastating military campaigns in 1391 and 1395 that destroyed his power completely. This sent a message across Asia that betraying me had catastrophic consequences. Other rulers, such as the Ottoman Sultan Bayezid I and the Mamluk Sultan of Egypt, chose to maintain diplomatic relations rather than risk conflict. The fear-based system actually reduced the number of rebellions because potential rivals knew they could not survive opposing me. Within my empire, governors and military commanders remained loyal not from trust but from calculation—supporting me was more profitable and safer than rebellion. This harsh approach kept the empire stable from 1370 until my death in 1405, preventing the civil wars that had plagued the Chagatai Khanate before my rise.`,
		options: [
			{
				id: 'end_betrayal',
				question: 'I see. Let me explore another topic.',
				next: 'end',
			},
		],
	},

	elimination_answer: {
		text: `The elimination of Amir Husayn in 1370 was the most significant example of removing a former ally. Husayn and I had fought together against the Chagatai khan and his supporters throughout the 1360s. We were also brothers-in-law, both married to granddaughters of Amir Kazagan, the previous strongman of Transoxiana. However, by 1370, we had divided the region—Husayn controlled Balkh and surrounding areas while I held Samarkand. This division was unsustainable because it created two rival power centers. I besieged Balkh, and when the city fell, Husayn was captured and executed. This eliminated the possibility of civil war and allowed me to unite all of Transoxiana under single rule. Another major elimination involved the nobility and tribal leaders who had helped me rise but later became obstacles. Between 1370 and 1380, I systematically replaced old tribal aristocrats with commanders personally loyal to me, often from lower social backgrounds who owed their positions entirely to my favor. I also eliminated Tokhtamysh's power through the campaigns of 1391 and 1395. Although I didn't kill him personally, I destroyed his armies and cities so thoroughly that he fled and never recovered his throne, dying in obscurity around 1406. These eliminations were strategically necessary to prevent the empire from fracturing into competing power centers.`,
		options: [
			{
				id: 'end_betrayal',
				question: 'I see. Let me explore another topic.',
				next: 'end',
			},
		],
	},

	battle_answer: {
		text: `My key battles were crucial for establishing control over Central Asia. One major victory was the Battle of the Kondurcha River in 1391, where I defeated Tokhtamysh of the Golden Horde. This victory ended a powerful rival and gave me control over the western steppe region. Another important battle was the conquest of Khwarezm and Persia, where my armies captured cities like Herat and Isfahan. These victories not only increased my territory but also gave me access to wealth and resources. My military tactics were based on speed, mobility, and surprise. I used cavalry to attack quickly and retreat, forcing enemies into confusion. I also used siege tactics to capture fortified cities. Each victory increased my power and allowed me to build a larger army. Over time, these battles created a reputation of fear and strength that made other regions more likely to surrender without fighting.`,
		audio:
			'/src/assets/audioFiles/My_key_battles_were_crucial_for_establishing_control_over_Central.m4a',
		options: [
			{
				id: 'tactics',
				question:
					'Describe the military tactics you used in battle, including speed, surprise, and siege methods.',
				next: 'tactics_answer',
			},
			{
				id: 'strategy',
				question:
					'How did your strategy differ from traditional Mongol warfare?',
				next: 'strategy_answer',
			},
		],
	},

	administration_answer: {
		text: `To manage the empire, I built a centralized administration that relied on loyal governors and military commanders. Each region was assigned a governor responsible for collecting taxes, maintaining order, and enforcing laws. These governors reported directly to me, which prevented local leaders from becoming too powerful. I also created a system of officials who supervised trade routes and protected caravans. This was important because trade was a major source of wealth. My administration also used a strong military presence to prevent rebellion and maintain control. Communication between regions was organized through messengers and military posts, allowing quick responses to threats. By combining military power with administrative organization, I kept the empire united and strong. This system allowed me to rule over a vast territory that included different ethnic groups and cultures.`,
		audio:
			'/src/assets/audioFiles/To_manage_the_empire,_I_built_a_centralized_administration_that_relied_on_loyal.m4a',
		options: [
			{
				id: 'tax',
				question:
					'How did taxation and trade control help stabilize the economy and strengthen your power?',
				next: 'tax_answer',
			},
			{
				id: 'governors',
				question:
					'How did you control governors and prevent them from becoming too powerful?',
				next: 'governors_answer',
			},
		],
	},

	law_answer: {
		text: `My legal system was strict and often harsh. I used severe punishments to discourage rebellion and disobedience. Anyone who betrayed me or threatened the empire faced extreme consequences, which created fear and obedience. However, punishment was paired with reward. Loyal leaders received land, wealth, and titles. This created a strong incentive to support me. In a diverse empire with many ethnic groups, strict law was necessary to maintain order. Without it, different groups could fight for power and cause chaos. My system ensured stability and prevented constant internal conflict. It also showed that I was in control and would not tolerate disloyalty. Although my methods were harsh, they were effective in keeping the empire united and strong. The fear of punishment discouraged rebellion and kept the empire stable.`,
		audio:
			'/src/assets/audioFiles/My legal system was strict and often harsh..m4a',
		options: [
			{
				id: 'punishment',
				question:
					'Why was fear necessary to maintain order, and how did it affect the empire’s stability?',
				next: 'punishment_answer',
			},
			{
				id: 'justice',
				question:
					'How did your legal system treat different ethnic groups and religions?',
				next: 'justice_answer',
			},
		],
	},

	religion_answer: {
		text: `Religion was a powerful tool in strengthening my rule. I supported Islamic scholars and built mosques and madrasas, which increased my influence in Muslim regions. This helped me gain support from religious leaders and scholars, who were respected by the population. At the same time, I tolerated other religions and allowed cultural diversity. This reduced resistance and helped unite different groups under my rule. I also promoted education, art, and architecture, which created a cultural identity that supported my legitimacy. By encouraging learning and building grand structures, I created respect and admiration. This cultural development made my empire not only powerful but also respected for its achievements. Religion and culture became a way to build loyalty and strengthen the empire’s stability.`,
		audio:
			'/src/assets/audioFiles/Religion_was_a_powerful_tool_in_strengthening_my_rule_I_supported.m4a',
		options: [
			{
				id: 'architecture',
				question:
					'How did your architectural projects support your legitimacy and political power?',
				next: 'architecture_answer',
			},
			{
				id: 'scholars',
				question: 'Explain the role of scholars and education in your empire.',
				next: 'scholars_answer',
			},
		],
	},

	persia_answer: {
		text: `The conquest of Persia was one of the most important achievements of my rule. Persia was rich in resources, trade routes, and powerful cities that controlled large regions. When my armies captured cities like Herat and Shiraz, I replaced local rulers with my own governors and established a centralized administration. This changed the political structure by ending independent dynasties and uniting the region under my control. Economically, Persia brought enormous wealth through taxes, trade, and loot. It also provided skilled craftsmen, scholars, and architects who were later moved to Samarkand. This helped improve the empire’s culture and infrastructure. Persia also became an important center for trade, connecting the Middle East with Central Asia. By controlling Persia, I strengthened my empire’s influence and created a stronger foundation for further expansion.`,
		audio:
			'/src/assets/audioFiles/The_conquest_of_Persia_was_one_of_the_most_important_achievements.m4a',
		options: [
			{
				id: 'persia_economy',
				question:
					'How did Persia’s economy and trade routes help fund your military campaigns?',
				next: 'persia_economy_answer',
			},
			{
				id: 'persia_culture',
				question:
					'How did Persian scholars and craftsmen influence Samarkand and the empire?',
				next: 'persia_culture_answer',
			},
		],
	},

	india_answer: {
		text: `My campaign in northern India was one of the most significant military operations of my rule. In 1398, my armies marched into India and captured Delhi, the capital of the Delhi Sultanate. This victory brought enormous wealth through treasure, tribute, and trade goods. It also increased my reputation as a powerful conqueror, spreading fear across Asia. However, the campaign caused widespread destruction and loss of life. Many cities were damaged, and the invasion left a long-lasting impact on the region. Despite the destruction, the victory strengthened my empire’s influence and control over trade routes. It also showed that my army could defeat major powers far from Central Asia. The Indian campaign became a key moment in my legacy, demonstrating both military strength and harsh consequences for resistance.`,
		audio:
			'/src/assets/audioFiles/My_campaign_in_northern_India_was_one_of_the_most_significant_military.m4a',
		options: [
			{
				id: 'india_wealth',
				question:
					'Explain how the wealth from India supported your empire’s administration and culture.',
				next: 'india_wealth_answer',
			},
			{
				id: 'india_impact',
				question:
					'What long-term impact did your invasion have on India’s politics and society?',
				next: 'india_impact_answer',
			},
		],
	},

	samarkand_answer: {
		text: `Samarkand became the cultural heart of my empire because I invested heavily in architecture, education, and art. After conquering many cities, I relocated artisans, scholars, and architects to Samarkand. I built grand structures such as mosques, madrasas, and palaces, turning the city into a symbol of power and wealth. Scholars from Persia, India, and Central Asia gathered in Samarkand, creating a center for learning and science. The city became famous for its architectural beauty, including intricate tilework and grand designs. This cultural development strengthened my legitimacy and created a lasting legacy. Samarkand became the center of culture, trade, and political power in my empire. It showed that my rule was not only about conquest but also about building a powerful and lasting civilization.`,
		audio:
			'/src/assets/audioFiles/Samarkand_became_the_cultural_heart_of_my_empire_because_I_invested.m4a',
		options: [
			{
				id: 'samarkand_architecture',
				question:
					'Describe the main architectural achievements in Samarkand and their political meaning.',
				next: 'samarkand_architecture_answer',
			},
			{
				id: 'samarkand_trade',
				question:
					'How did Samarkand’s location support trade and economic growth?',
				next: 'samarkand_trade_answer',
			},
		],
	},

	// ================== LAYER 3 ==================

	training_answer: {
		text: `Military training was central to my success. In a region where armies were often made of different tribes and groups, discipline was the only way to create unity. I trained my soldiers to obey commands instantly, maintain formation, and coordinate attacks. I also focused on speed and mobility, especially cavalry tactics. My army could move quickly across long distances, surprise enemies, and retreat when necessary to avoid heavy losses. Training also included siege tactics because many important cities had strong defenses. I prepared my commanders to manage supply lines and maintain discipline during long campaigns. This high level of organization gave my army an advantage over larger forces that lacked structure. My training system created soldiers who were loyal, efficient, and ready to follow orders even in dangerous situations. This allowed me to build a powerful military force that could conquer large territories and defeat strong rivals.`,
		audio:
			'/src/assets/audioFiles/Military_training_was_central_to_my_success_In_a_region_where_armies.m4a',
		options: [
			{
				id: 'cavalry',
				question:
					'Explain how cavalry tactics gave your army an advantage over heavier forces.',
				next: 'cavalry_answer',
			},
			{
				id: 'siege',
				question:
					'Describe your siege tactics and how you captured fortified cities.',
				next: 'siege_answer',
			},
		],
	},

	loyalty_answer: {
		text: `Building loyalty was a major challenge because I was not a Chinggisid descendant. To solve this, I used a system of rewards and punishments. I gave land, wealth, and titles to commanders who proved their loyalty and performed well in battle. I also promoted based on merit rather than bloodline, which encouraged talented soldiers to join my side. At the same time, I punished betrayal harshly, creating fear and respect. This combination of reward and fear ensured that commanders remained loyal and obedient. I also formed strategic marriages with powerful families and tribes, which created personal ties and political alliances. These connections made it harder for rivals to oppose me. Over time, my reputation for strength and success attracted more supporters, and my army grew more loyal and powerful. This loyalty was the foundation of my rise to power.`,
		audio:
			'/src/assets/audioFiles/Building_loyalty_was_a_major_challenge_because_I_was_not_a_Chinggisid.m4a',
		options: [
			{
				id: 'reward',
				question:
					'What types of rewards did you give, and how did this affect loyalty and morale?',
				next: 'reward_answer',
			},
			{
				id: 'punishment',
				question:
					'Why was fear necessary to maintain order, and how did it affect the empire’s stability?',
				next: 'punishment_answer',
			},
		],
	},

	tactics_answer: {
		text: `Tactics were the foundation of my victories. My army used fast cavalry to move quickly across large distances, surprising enemies before they could prepare. We used feigned retreats to lure enemy forces into traps, then attacked from multiple directions. This strategy worked especially well against armies that relied on slow infantry or heavy armor. Another key tactic was siege warfare. When attacking fortified cities, my commanders used engineers and siege machines to break walls and gates. We also cut off supply lines to weaken defenders over time. Intelligence was also essential. Spies and scouts gathered information about enemy positions, strengths, and weaknesses. This allowed us to plan attacks with precision. The combination of speed, deception, and siege tactics gave my army an advantage over larger but slower opponents. These methods allowed me to conquer vast territories and maintain control over them.`,
		audio:
			'/src/assets/audioFiles/Tactics_were_the_foundation_of_my_victories_My_army_used_fast_cavalry.m4a',
		options: [
			{
				id: 'intelligence',
				question:
					'How did intelligence and spy networks improve your military success?',
				next: 'intelligence_answer',
			},
			{
				id: 'retreat',
				question:
					'Explain the feigned retreat tactic and why it was effective.',
				next: 'retreat_answer',
			},
		],
	},

	strategy_answer: {
		text: `My strategy differed from traditional Mongol warfare by combining brutal conquest with state-building. Mongol armies often focused on raiding and quick conquest, but I aimed to create a lasting empire. This required not only military victories but also administrative control, economic stability, and cultural development. I also used more direct governance rather than relying solely on local leaders. This allowed me to control distant regions more effectively. Another difference was the use of fear as a political tool. I made examples of rebellious cities to discourage future resistance. At the same time, I supported culture and learning to create loyalty through respect. My strategy was therefore a combination of terror and development, which created a powerful and lasting empire. This approach was different from many traditional Mongol rulers who focused only on conquest.`,
		audio:
			'/src/assets/audioFiles/My_strategy_differed_from_traditional_Mongol_warfare_by_combining.m4a',
		options: [],
	},

	// ================== LAYER 4 ==================

	cavalry_answer: {
		text: `Cavalry tactics gave my army the ability to move faster than most enemies. Cavalry soldiers were trained to ride long distances without rest, allowing my army to appear suddenly and attack before enemies could prepare. Light cavalry was especially useful for scouting, harassment, and flanking maneuvers. Heavy cavalry was used for direct attacks and breaking enemy lines. This combination created a flexible force that could adapt to different battle conditions. Cavalry also allowed my army to retreat quickly if the situation became dangerous, avoiding heavy losses. This mobility gave me an advantage over armies that relied mainly on infantry, which moved slowly and were easier to trap. Cavalry also supported siege campaigns by quickly surrounding cities and cutting off supplies. Overall, cavalry tactics made my army faster, more flexible, and more powerful than many opponents.`,
		audio:
			'/src/assets/audioFiles/Cavalry_tactics_gave_my_army_the_ability_to_move_faster_than_most.m4a',
		options: [],
	},

	siege_answer: {
		text: `Siege tactics were essential because many key cities had strong defenses. My army used engineers and siege machines such as battering rams, catapults, and towers to break walls. We also used psychological warfare, including threats of destruction and starvation, to force defenders to surrender. Cutting off supplies and blocking trade routes weakened cities over time. In some cases, we used tunnels or undermining to collapse walls. Siege warfare required careful planning and logistics, including food supply and coordination between units. It also required patience, because some cities held out for months. Despite the difficulty, sieges allowed us to capture important cities that controlled trade routes and political power. These victories strengthened my empire and allowed me to control major regions more effectively.`,
		audio:
			'/src/assets/audioFiles/Siege_tactics_were_essential_because_many_key_cities_had_strong.m4a',
		options: [],
	},

	intelligence_answer: {
		text: `Intelligence and spy networks were crucial to my success. Scouts and spies gathered information about enemy movements, strengths, and weaknesses. This allowed my commanders to plan attacks with precision and avoid surprise attacks. Intelligence also helped identify weak points in enemy defenses, such as poorly guarded routes or divided leadership. Spies could also spread misinformation to confuse enemies and create chaos. This strategy allowed my army to win battles with fewer losses. Intelligence was also used to monitor conquered regions and prevent rebellions. Local informants reported suspicious activity, allowing me to respond quickly. Overall, intelligence turned warfare into a science rather than a gamble. It gave my army the advantage of knowing the enemy before the battle began.`,
		audio:
			'/src/assets/audioFiles/Intelligence_and_spy_networks_were_crucial_to_my_success_Scouts.m4a',
		options: [],
	},

	retreat_answer: {
		text: `The feigned retreat tactic was a deliberate fake withdrawal designed to trick the enemy into thinking we were defeated. When the enemy chased, we turned and attacked from multiple directions. This tactic worked because many armies believed a retreat meant victory, so they became careless and separated from their formation. It required high discipline because soldiers had to retreat without panic and return to fight at the right moment. This tactic was especially effective against large armies with slow communication. It allowed my smaller but disciplined forces to destroy larger enemies. Feigned retreat was dangerous, but when executed correctly, it was extremely powerful. It became a signature tactic of my army and contributed to many victories.`,
		audio:
			'/src/assets/audioFiles/The_feigned_retreat_tactic_was_a_deliberate_fake_withdrawal_designed.m4a',
		options: [],
	},

	reward_answer: {
		text: `Rewards were essential for maintaining loyalty. I gave land, money, and titles to commanders who performed well in battle and remained loyal. These rewards created a strong incentive for soldiers to fight bravely and follow orders. In addition, I allowed commanders to gain wealth through tribute and trade in the regions they controlled. This made them financially dependent on my success and loyalty. Rewards also increased morale because soldiers knew their service would be recognized. However, rewards were carefully controlled to prevent any commander from becoming too powerful. This balance ensured loyalty without creating rivals. By combining rewards with strict discipline, I created an army that was loyal, motivated, and effective.`,
		audio:
			'/src/assets/audioFiles/Rewards_were_essential_for_maintaining_loyalty_I_gave_land,_money.m4a',
		options: [],
	},

	punishment_answer: {
		text: `Fear was necessary because the empire was large and diverse, with many different tribes and ethnic groups. Without strict punishment, local leaders could rebel, and chaos could spread. I used harsh punishments to show that betrayal would not be tolerated. Cities that resisted were often destroyed, and leaders were executed or removed. This created fear and discouraged rebellion. However, punishment was not random. It was used as a political tool to maintain order. The threat of punishment forced local leaders to obey and reduced the cost of maintaining control. At the same time, I rewarded loyalty, creating a system where obedience was more profitable than rebellion. This combination kept the empire stable and prevented constant internal conflict.`,
		audio:
			'/src/assets/audioFiles/Fear_was_necessary_because_the_empire_was_large_and_diverse,_with.m4a',
		options: [],
	},

	// ================== LAYER 5 ==================

	justice_answer: {
		text: `My legal system was strict, but it also respected the diversity of the empire. I allowed different ethnic groups and religions to keep their traditions, as long as they obeyed the central authority. Religious leaders and local rulers were allowed to manage internal affairs, which reduced resistance and created stability. However, when any group challenged my authority, punishment was severe. The goal was to keep order in a diverse empire. I also used law to protect trade routes and ensure safe travel. This made merchants and traders loyal because they benefited from stability. Overall, my legal system combined strict enforcement with cultural tolerance. This balance allowed different groups to live under my rule while maintaining control and preventing rebellion.`,
		audio:
			'/src/assets/audioFiles/My_legal_system_was_strict,_but_it_also_respected_the_diversity.m4a',
		options: [],
	},

	architecture_answer: {
		text: `My architectural projects were designed to show power and legitimacy. Grand buildings like mosques, palaces, and madrasas were not only places of worship and learning but also symbols of the empire’s strength. The scale and beauty of the architecture impressed both subjects and foreign visitors. Samarkand became famous for its large domes, blue tiles, and intricate designs. This architecture also supported the economy by creating jobs and attracting artisans. It also created a cultural identity that united different groups under my rule. The buildings showed that my empire was not only powerful but also civilized and advanced. Architecture became a key tool for political power and legacy.`,
		audio:
			'/src/assets/audioFiles/My_architectural_projects_were_designed_to_show_power_and_legitimacy.m4a',
		options: [],
	},

	scholars_answer: {
		text: `Scholars were important because they spread knowledge and helped create a cultural identity for the empire. I invited scholars from Persia, India, and other regions to study and teach in Samarkand. This created a center of learning that attracted students from many places. Scholars helped develop science, astronomy, medicine, and literature. Their work also supported the administration by improving record-keeping, taxation systems, and diplomacy. Education also created respect for the empire because it showed that we valued knowledge. This cultural development made the empire stronger and more stable. Scholars helped shape the legacy of my rule by creating a lasting cultural and intellectual impact.`,
		options: [],
	},

	persia_economy_answer: {
		text: `Persia’s economy was a major source of wealth for my empire. Persian cities controlled important trade routes connecting Asia with the Middle East and Europe. By controlling these routes, I could collect taxes and tribute from merchants. This wealth helped fund military campaigns, pay soldiers, and build grand buildings in Samarkand. Persia also had rich agricultural land and valuable goods like silk, carpets, and spices. The wealth from Persia allowed me to expand the empire and maintain a large army. It also strengthened the empire’s economy by increasing trade and investment. Persia’s wealth became a foundation for the empire’s stability and growth.`,
		audio:
			'/src/assets/audioFiles/Persia’s_economy_was_a_major_source_of_wealth_for_my_empire_.m4a',
		options: [],
	},

	persia_culture_answer: {
		text: `Persian scholars and craftsmen played a key role in shaping Samarkand’s culture. When I moved artisans to Samarkand, they brought new skills in architecture, painting, and crafts. Persian scholars also brought knowledge in science, literature, and philosophy. This created a cultural center where different traditions merged. Persian influence made Samarkand famous for its architecture, especially its intricate tilework and grand buildings. Persian culture also influenced administration and education. The blending of Persian and Central Asian traditions created a unique cultural identity that strengthened the empire. This cultural exchange became one of the most important legacies of my rule.`,
		audio:
			'/src/assets/audioFiles/Persian_scholars_and_craftsmen_played_a_key_role_in_shaping_Samarkand’s.m4a',
		options: [],
	},

	india_wealth_answer: {
		text: `The wealth from India was enormous. When my armies captured Delhi, they gained access to treasure, tribute, and valuable trade goods. This wealth helped fund the empire’s administration, pay soldiers, and build grand structures in Samarkand. It also increased the empire’s influence by showing that my power reached far beyond Central Asia. The wealth allowed me to support culture and education, which strengthened my legitimacy. However, the wealth also came with destruction and conflict. The campaign caused massive damage, and many cities suffered. Despite this, the wealth from India supported the empire’s growth and strengthened my power. It also increased the empire’s reputation as one of the most powerful forces in Asia.`,
		audio:
			'/src/assets/audioFiles/The wealth from India was enormous..m4a',
		options: [],
	},

	india_impact_answer: {
		text: `The invasion of India had a long-term impact on the region’s politics and society. The Delhi Sultanate was weakened, and many cities were damaged or destroyed. The invasion also caused fear and instability, which affected trade and governance. However, it also opened new trade connections between India and Central Asia. Some regions experienced cultural exchange as artisans and scholars moved between regions. The invasion also changed the balance of power in the region, making other powers more cautious. While the invasion caused destruction, it also created new political realities and strengthened my reputation. The long-term impact was a combination of devastation and increased influence over trade and politics.`,
		audio:
			'/src/assets/audioFiles/The_invasion_of_India_had_a_long_term_impact_on_the_region’s_politics.m4a',
		options: [],
	},

	samarkand_architecture_answer: {
		text: `Samarkand’s architecture became a symbol of power and culture. Grand buildings like the Bibi-Khanym Mosque and Registan were built or rebuilt with beautiful tilework and large domes. These structures were designed to impress and show the empire’s wealth and stability. The architecture also reflected cultural fusion, blending Persian, Central Asian, and Islamic styles. This created a unique identity for the empire. Architecture also supported the economy by creating jobs and attracting craftsmen. The grand buildings became a source of pride for the people and a symbol of my legacy. They showed that my empire was not only powerful but also advanced and civilized.`,
		audio:
			'/src/assets/audioFiles/Samarkand’s_architecture_became_a_symbol_of_power_and_culture_.m4a',
		options: [],
	},

	samarkand_trade_answer: {
		text: `Samarkand’s location on the Silk Road made it a major trade center. Traders from China, Persia, India, and Europe passed through the city, bringing goods like silk, spices, and precious metals. The trade routes provided wealth and helped the empire grow economically. I protected trade routes with military forces, which made merchants feel safe and encouraged more trade. Samarkand also became a center of culture because traders brought new ideas, art, and knowledge. The city’s trade and culture made it a powerful and influential center in the empire. It became a place where different cultures met, creating a unique and rich environment.`,
		audio:
			'/src/assets/audioFiles/Samarkand’s_location_on_the_Silk_Road_made_it_a_major_trade_center.m4a',
		options: [],
	},

	// ================== END NODE ==================

	end: {
		text: `This is the end of the dialog tree.
You can go back to the start and ask another question.`,
		options: [
			{
				id: 'restart',
				question: 'Return to the start',
				next: 'start',
			},
		],
	},
}
