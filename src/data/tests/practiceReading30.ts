import type { IeltsTest, Option } from '../../types'

// Original reading practice test 30 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const burnoutEndings: Option[] = [
  { value: 'A', label: 'should be used only in relation to work.' },
  { value: 'B', label: 'normally recovers after a short rest.' },
  { value: 'C', label: 'described people in demanding caring roles.' },
  { value: 'D', label: 'may become unbearable when workers lack control.' },
  { value: 'E', label: 'may help people to cope without tackling the causes.' },
  { value: 'F', label: 'is classified as a medical condition.' },
  { value: 'G', label: 'usually prevents burnout entirely.' },
  { value: 'H', label: 'is always the most important cause of burnout.' },
]

const heatHeadings: Option[] = [
  { value: 'i', label: 'Why rural areas are also becoming hotter' },
  { value: 'ii', label: 'Materials that soak up the sun' },
  { value: 'iii', label: 'Heat that is not shared equally' },
  { value: 'iv', label: 'An old observation with a new urgency' },
  { value: 'v', label: 'Building taller to save energy' },
  { value: 'vi', label: 'When nights offer no relief' },
  { value: 'vii', label: 'Cooling the city: options and trade-offs' },
  { value: 'viii', label: 'Lost plants, trapped air and waste heat' },
  { value: 'ix', label: 'The influence of nearby seas and rivers' },
  { value: 'x', label: 'A remedy that adds to the problem' },
]

export const practiceReading30: IeltsTest = {
  id: 'practice-reading-30',
  title: 'Practice Test 30 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'C', 2: 'A', 3: 'B', 4: 'D', 5: 'E',
      6: 'B', 7: 'D',
      8: 'YES', 9: 'NOT GIVEN', 10: 'NO', 11: 'NO', 12: 'NO', 13: 'YES',
      14: 'FALSE', 15: 'FALSE', 16: 'TRUE', 17: 'NOT GIVEN', 18: 'TRUE', 19: 'FALSE',
      20: ['thicker'], 21: ['culture'], 22: ['hours'], 23: ['lactic'], 24: ['proteins', 'milk proteins'],
      25: 'B', 26: 'C',
      27: 'iv', 28: 'ii', 29: 'viii', 30: 'vi', 31: 'x', 32: 'iii', 33: 'vii',
      34: ['London'], 35: ['night'], 36: ['evaporation'], 37: ['ozone'],
      38: ['green roofs', 'green roof'], 39: ['cool roofs', 'cool roof'], 40: ['older people'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Burnout: more than just being tired',
        html: `
          <p>The word burnout was first used in its modern sense in the 1970s, when psychologists began describing a condition they observed among people in demanding caring jobs, such as volunteers at free health clinics. Workers who had started with great enthusiasm gradually became exhausted, cynical and ineffective. Since then the term has spread far beyond the caring professions, and it is now used so loosely that it risks meaning little more than having a busy week. Researchers, by contrast, give it a more precise meaning.</p>
          <p>In 2019 the World Health Organization included burnout in its International Classification of Diseases, but it was careful about how it did so. Burnout is listed not as a medical condition but as an occupational phenomenon, a factor that may lead people to seek help from health services, and it is said to result specifically from chronic stress at work that has not been successfully managed. The definition identifies three features. The first is a feeling of exhaustion or depleted energy. The second is increased mental distance from one's job, often expressed as negative or cynical feelings about it. The third is a sense of reduced effectiveness. The classification also states that the term should not be applied to experiences in other areas of life.</p>
          <p>The distinction from ordinary tiredness is important. Someone who is tired after a hard week usually recovers after a good weekend. Someone experiencing burnout often does not, because the problem lies less in the amount of rest than in the person's relationship with the work itself. The cynicism is what makes it particularly damaging. A worker who has stopped caring about the people the job is meant to serve, or who feels that nothing he or she does makes any difference, may continue to turn up every day while contributing far less than before.</p>
          <p>Where does burnout come from? An influential model developed by researchers including the psychologist Christina Maslach identifies six areas in which a mismatch between a person and a job can lead to burnout: workload, control, reward, community, fairness and values. Excessive workload is the most obvious, but it is not always the most important. People can sustain heavy demands for long periods if they have some control over how they work, feel adequately recognised, get on well with their colleagues, believe that they are treated fairly and consider their work worthwhile. Conversely, a moderate workload can become intolerable when it is combined with a lack of control or a sense that decisions are unjust.</p>
          <p>This analysis has uncomfortable implications for the way burnout is usually tackled. Many employers respond by offering individual remedies: workshops on resilience, meditation apps and advice on sleep. These may help some people to cope, and there is nothing wrong with them in themselves. But if the causes lie in the organisation of work, treating burnout as a personal weakness is rather like treating the symptoms of a disease while ignoring its cause. Reviews of the research suggest that interventions tend to be most effective when they address both the individual and the working environment, for example by giving staff more say over their schedules or reducing unnecessary administrative tasks.</p>
          <p>Holidays illustrate the limits of individual solutions. A break from work does reduce exhaustion, but several studies have found that the benefits tend to fade within a few weeks of returning, particularly if the person comes back to the same pressures. Rest is necessary, but it cannot by itself repair a job that is badly designed.</p>
          <p>None of this means that individuals are powerless. Recognising the early signs, such as dreading the start of the working week or becoming unusually irritable with colleagues, gives people the chance to act before the problem becomes severe. Talking to a manager about workload or priorities, seeking support from colleagues and, where symptoms are serious, consulting a doctor are all sensible steps. What the research makes clear is that burnout is not simply a sign that someone could not cope. It is, at least as often, a sign of a job that asks the impossible.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–H, from the list below.',
            options: burnoutEndings,
            questions: [
              { number: 1, text: 'In the 1970s, the term burnout', evidence: 'when psychologists began describing a condition they observed among people in demanding caring jobs' },
              { number: 2, text: 'According to the WHO classification, the term burnout', evidence: 'the term should not be applied to experiences in other areas of life' },
              { number: 3, text: 'A person who is simply tired after a hard week', evidence: 'Someone who is tired after a hard week usually recovers after a good weekend.' },
              { number: 4, text: 'A workload that is only moderate', evidence: 'a moderate workload can become intolerable when it is combined with a lack of control' },
              { number: 5, text: 'Individual remedies such as meditation apps', evidence: 'These may help some people to cope, and there is nothing wrong with them in themselves.' },
            ],
          },
          {
            id: 'r1b', type: 'mcq-multi', instructions: 'Which TWO of the following are included in the WHO definition of burnout? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'difficulty sleeping' },
              { value: 'B', label: 'a lack of energy' },
              { value: 'C', label: 'anxiety about the future' },
              { value: 'D', label: 'negative feelings about one’s job' },
              { value: 'E', label: 'conflict with family members' },
            ],
            questions: [
              { number: 6, evidence: 'The first is a feeling of exhaustion or depleted energy.' },
              { number: 7, evidence: 'often expressed as negative or cynical feelings about it' },
            ],
          },
          {
            id: 'r1c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 1? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 8, text: 'The word burnout is now often used too loosely.', evidence: 'it is now used so loosely that it risks meaning little more than having a busy week' },
              { number: 9, text: 'The WHO was right not to classify burnout as a disease.' },
              { number: 10, text: 'People experiencing burnout generally stop going to work.', evidence: 'may continue to turn up every day while contributing far less than before' },
              { number: 11, text: 'A heavy workload is always the main reason for burnout.', evidence: 'Excessive workload is the most obvious, but it is not always the most important.' },
              { number: 12, text: 'Employers should stop offering workshops on resilience.', evidence: 'there is nothing wrong with them in themselves' },
              { number: 13, text: 'A holiday on its own is unlikely to solve burnout caused by a poorly designed job.', evidence: 'Rest is necessary, but it cannot by itself repair a job that is badly designed.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Fermentation: the oldest way to keep food',
        html: `
          <p>Long before refrigerators, canning or chemical preservatives, people found ways of keeping food edible for months, and many of the most successful depended on microorganisms. Cabbage became sauerkraut in Germany and kimchi in Korea, milk became yoghurt and cheese, grain became bread and beer, and soya beans became soy sauce and miso. In every case, living microbes transformed the food, and for most of history nobody knew they were there. It was only in the nineteenth century that Louis Pasteur showed that fermentation is carried out by living cells rather than being a purely chemical process.</p>
          <p>At its simplest, fermentation is the process by which microorganisms such as bacteria, yeasts and moulds break down sugars without needing oxygen, producing substances such as acids, alcohol and carbon dioxide. Which of these is produced depends on the organism. In bread, yeast generates carbon dioxide, which makes the dough rise, and a small amount of alcohol, which evaporates during baking. In many vegetable and dairy foods, the key organisms are lactic acid bacteria, which convert sugars into lactic acid.</p>
          <p>It is this acid that preserves the food. As lactic acid accumulates, the food becomes steadily more acidic, and most of the bacteria that cause spoilage or illness cannot grow in such conditions. The process also tends to reinforce itself: once the lactic acid bacteria have become established, the conditions they create discourage their competitors. Fermentation therefore works less by killing undesirable microbes than by giving a harmless group of them an early advantage and allowing them to take over.</p>
          <p>Sauerkraut shows how simple the process can be. Cabbage is shredded and mixed with salt, which draws water out of the leaves and forms a salty liquid known as brine. The cabbage is pressed down until it is covered by this liquid and kept submerged, which excludes air. No starter is needed, because lactic acid bacteria are naturally present on the leaves. The salt is important: at the right concentration it slows the growth of many unwanted microbes, while the lactic acid bacteria, which tolerate it well, continue to multiply. After several days at room temperature the cabbage has become noticeably sour, and over the following weeks its flavour continues to develop.</p>
          <p>Yoghurt, by contrast, is usually made with a deliberately added culture. Milk is first heated, which kills many of the bacteria already present and changes the milk proteins so that the finished yoghurt is thicker. It is then cooled to a warm temperature, since a very hot liquid would kill the culture, and a small amount of existing yoghurt or a commercial starter is stirred in. Kept warm for several hours, the bacteria convert part of the milk sugar, lactose, into lactic acid, and the rising acidity causes the proteins to set. Because some of the lactose has been consumed, many people who have difficulty digesting milk find that they can eat yoghurt without discomfort.</p>
          <p>Fermented foods have recently attracted attention for another reason. Some of them contain large numbers of living microbes, and there is growing scientific interest in how these might interact with the bacteria that live in the human gut. The evidence on specific health benefits is still developing, however, and the claims made in advertising often go further than the research. It is also worth noting that not every fermented food contains live microbes when it is eaten. Bread is baked, many commercial products are heated after fermentation to extend their shelf life, and many supermarket pickles are not fermented at all, but are simply preserved in vinegar.</p>
          <p>For anyone tempted to try fermenting at home, vegetables are a forgiving place to start. The essentials are clean equipment, the correct amount of salt and, above all, keeping the vegetables beneath the brine. Most failures occur when pieces float to the surface and are exposed to air, where moulds can grow. A ferment that smells unpleasant rather than pleasantly sour, or that shows fuzzy mould, should be thrown away. Beyond these precautions, the process largely looks after itself, as it has done for thousands of years.</p>`,
        groups: [
          {
            id: 'r2a', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 2? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 14, text: 'People understood the part played by microorganisms in fermentation long before the nineteenth century.', evidence: 'for most of history nobody knew they were there' },
              { number: 15, text: 'Baked bread contains a significant amount of alcohol.', evidence: 'a small amount of alcohol, which evaporates during baking' },
              { number: 16, text: 'Lactic acid bacteria create conditions in which competing microbes find it hard to grow.', evidence: 'once the lactic acid bacteria have become established, the conditions they create discourage their competitors' },
              { number: 17, text: 'Kimchi is normally fermented for longer than sauerkraut.' },
              { number: 18, text: 'Lactic acid bacteria are less affected by salt than many unwanted microbes.', evidence: 'while the lactic acid bacteria, which tolerate it well, continue to multiply' },
              { number: 19, text: 'All fermented foods still contain living microbes when they are eaten.', evidence: 'not every fermented food contains live microbes when it is eaten' },
            ],
          },
          {
            id: 'r2b', type: 'inline-gap', instructions: 'Complete the flow-chart below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Making yoghurt</strong></p>
              <p>Milk is heated: this kills many bacteria and makes the finished yoghurt {{20}}.</p>
              <p>↓</p>
              <p>The milk is cooled, because very hot liquid would kill the {{21}}.</p>
              <p>↓</p>
              <p>Existing yoghurt or a commercial starter is stirred in, and the mixture is kept warm for several {{22}}.</p>
              <p>↓</p>
              <p>Bacteria turn some of the lactose into {{23}} acid.</p>
              <p>↓</p>
              <p>The increasing acidity makes the {{24}} set.</p>`,
            questions: [
              { number: 20, evidence: 'changes the milk proteins so that the finished yoghurt is thicker' },
              { number: 21, evidence: 'since a very hot liquid would kill the culture' },
              { number: 22, evidence: 'Kept warm for several hours' },
              { number: 23, evidence: 'the bacteria convert part of the milk sugar, lactose, into lactic acid' },
              { number: 24, evidence: 'the rising acidity causes the proteins to set' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 25, text: 'What does the writer say about the health claims made for fermented foods?', evidence: 'the claims made in advertising often go further than the research', options: [{ value: 'A', label: 'They have been fully confirmed by research.' }, { value: 'B', label: 'Advertisers often exaggerate what has been shown.' }, { value: 'C', label: 'They apply only to fermented vegetables.' }, { value: 'D', label: 'Scientists have now rejected them.' }] },
              { number: 26, text: 'According to the writer, home fermentation most often fails because', evidence: 'Most failures occur when pieces float to the surface and are exposed to air, where moulds can grow.', options: [{ value: 'A', label: 'too much salt has been added.' }, { value: 'B', label: 'the equipment has not been cleaned.' }, { value: 'C', label: 'pieces of vegetable come into contact with air.' }, { value: 'D', label: 'the room is too warm.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Why cities are hotter than the countryside',
        html: `
          <p><span class="passage-letter">A</span> As long ago as the early nineteenth century, an amateur scientist named Luke Howard noticed, while recording the weather in and around London, that the city was consistently warmer than the surrounding countryside. The phenomenon he described is now known as the urban heat island, and it has been found in cities throughout the world. The difference is usually greatest not in the afternoon but at night, particularly on calm, clear nights, when the countryside cools rapidly while the city remains warm, sometimes by several degrees. What was once a scientific curiosity has become a pressing practical concern, as cities grow and heatwaves become more frequent.</p>
          <p><span class="passage-letter">B</span> The first cause lies in what cities are made of. Dark surfaces such as asphalt roads and many roofing materials absorb a large proportion of the sunlight that falls on them, whereas lighter surfaces reflect more of it. Materials such as concrete, brick and stone also store a great deal of heat during the day. After sunset they release it slowly into the surrounding air, which is why city streets can remain uncomfortably warm long after the sun has gone down.</p>
          <p><span class="passage-letter">C</span> A second cause is the absence of vegetation. Plants release water vapour through their leaves, and the evaporation of this water uses energy that would otherwise warm the air, in much the same way that sweating cools the body. Where fields and woods are replaced by buildings and paving, this natural cooling largely disappears, and rain runs quickly into drains instead of evaporating from the soil. The shape of the city adds to the effect. Narrow streets between tall buildings trap heat that would otherwise escape to the night sky and reduce the wind that might carry it away. Finally, vehicles, factories and air-conditioning units all release waste heat directly into the streets.</p>
          <p><span class="passage-letter">D</span> The health consequences are most serious during heatwaves. High daytime temperatures are dangerous in themselves, but warm nights may matter even more, because the body depends on cooler periods to recover. When temperatures stay high throughout the night, people sleep badly and their bodies remain under strain for days at a time. Older people, those with heart or lung conditions and people living alone are especially vulnerable, and heatwaves have repeatedly been followed by a rise in deaths in cities.</p>
          <p><span class="passage-letter">E</span> The most common response to heat creates a further problem. Air conditioning keeps the inside of a building cool by moving heat outdoors, so that a street lined with air-conditioning units is made warmer by the very machines that protect the people inside. The extra demand for electricity can strain power networks at the hottest times of year and, where the electricity comes from fossil fuels, adds to the emissions that drive climate change. Heat also speeds up the chemical reactions that form ground-level ozone, a pollutant that irritates the lungs, so hot cities often suffer from poorer air quality as well.</p>
          <p><span class="passage-letter">F</span> The heat island is not spread evenly. Within a single city, temperatures can vary considerably from one neighbourhood to the next, and research in a number of countries has found that poorer districts tend to be hotter than wealthier ones, largely because they have fewer trees and parks and more paved surfaces. Their residents are also less likely to be able to afford air conditioning, so that those most exposed to heat often have the fewest means of escaping it.</p>
          <p><span class="passage-letter">G</span> Fortunately, many remedies are well understood. So-called cool roofs, painted or coated in light, reflective materials, absorb less sunlight and keep the buildings beneath them cooler. Green roofs, covered with plants, provide insulation and cooling through evaporation. Trees are perhaps the most valuable measure of all, since they combine shade with evaporative cooling and make streets far more comfortable for pedestrians. Each option has drawbacks, however: green roofs are costly and need maintenance, trees take years to mature and need water, and some studies suggest that highly reflective paving can bounce heat back onto people walking above it. Cities are therefore likely to need a combination of measures rather than any single solution.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching-headings', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: heatHeadings,
            questions: [
              { number: 27, text: 'Paragraph A', evidence: 'What was once a scientific curiosity has become a pressing practical concern' },
              { number: 28, text: 'Paragraph B', evidence: 'Dark surfaces such as asphalt roads and many roofing materials absorb a large proportion of the sunlight that falls on them' },
              { number: 29, text: 'Paragraph C', evidence: 'A second cause is the absence of vegetation.' },
              { number: 30, text: 'Paragraph D', evidence: 'warm nights may matter even more, because the body depends on cooler periods to recover' },
              { number: 31, text: 'Paragraph E', evidence: 'The most common response to heat creates a further problem.' },
              { number: 32, text: 'Paragraph F', evidence: 'The heat island is not spread evenly.' },
              { number: 33, text: 'Paragraph G', evidence: 'Cities are therefore likely to need a combination of measures rather than any single solution.' },
            ],
          },
          {
            id: 'r3b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 34, text: 'The urban heat island was first noticed by someone recording the weather in and around ________.', evidence: 'while recording the weather in and around London' },
              { number: 35, text: 'The temperature gap between city and countryside is usually largest at ________.', evidence: 'The difference is usually greatest not in the afternoon but at night' },
              { number: 36, text: 'Plants cool the air through the ________ of water from their leaves.', evidence: 'the evaporation of this water uses energy that would otherwise warm the air' },
              { number: 37, text: 'High temperatures speed up the formation of ground-level ________.', evidence: 'Heat also speeds up the chemical reactions that form ground-level ozone' },
            ],
          },
          {
            id: 'r3c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 38, text: 'What kind of roof cools buildings with the help of plants?', evidence: 'Green roofs, covered with plants, provide insulation and cooling through evaporation.' },
              { number: 39, text: 'What name is given to roofs coated in light, reflective materials?', evidence: 'So-called cool roofs, painted or coated in light, reflective materials' },
              { number: 40, text: 'Apart from people living alone and those with heart or lung conditions, which group is described as especially vulnerable to heat?', evidence: 'Older people, those with heart or lung conditions and people living alone are especially vulnerable' },
            ],
          },
        ],
      },
    ],
  },
}
