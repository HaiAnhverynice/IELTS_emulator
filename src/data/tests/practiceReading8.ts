import type { IeltsTest, Option } from '../../types'

// Original reading practice test 8 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headings: Option[] = [
  { value: 'i', label: 'A drink discovered by accident' },
  { value: 'ii', label: 'Spreading across the Arab world' },
  { value: 'iii', label: 'Resistance and bans' },
  { value: 'iv', label: 'The rise of the coffee house' },
  { value: 'v', label: 'Coffee reaches Europe' },
  { value: 'vi', label: 'A global crop' },
  { value: 'vii', label: 'How coffee is grown' },
  { value: 'viii', label: 'The health debate' },
  { value: 'ix', label: 'Tea versus coffee' },
]

export const practiceReading8: IeltsTest = {
  id: 'practice-reading-8',
  title: 'Practice Test 8 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'TRUE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'TRUE', 6: 'FALSE',
      7: 'silk', 8: ['Chang’an', 'Changan'], 9: ['paper', 'gunpowder'], 10: 'caravans',
      11: ['camels', 'camel'], 12: ['diseases', 'disease'], 13: ['ideas', 'religions'],
      14: 'i', 15: 'ii', 16: 'iii', 17: 'v', 18: 'iv', 19: 'vi',
      20: 'B', 21: 'A', 22: 'A', 23: 'C',
      24: 'A', 25: 'C', 26: 'B',
      27: 'YES', 28: 'NO', 29: 'NOT GIVEN', 30: 'YES', 31: 'NO',
      32: 'A', 33: 'C',
      34: 'nectar', 35: 'pollen', 36: 'dance', 37: 'third', 38: 'pesticides', 39: ['habitat', 'habitats'], 40: 'wildflowers',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The Silk Road',
        html: `
          <p>The Silk Road was not a single paved highway but a vast web of trade routes that linked China with the Mediterranean for more than a thousand years. It crossed deserts, mountains and grasslands, and few merchants ever travelled its whole length; instead, goods passed from trader to trader along the way.</p>
          <p>The route took its name from its most famous cargo. Chinese silk was light, valuable and almost impossible to produce elsewhere, since the secret of its making was guarded for centuries. From the great city of Chang’an, the eastern end of the road, caravans carried silk westward in exchange for horses, glass, gold and silver.</p>
          <p>Silk was far from the only thing that moved. Chinese inventions such as paper and gunpowder travelled west along the same routes, while new foods, metals and techniques travelled east. Goods were carried for huge distances by caravans of camels, the only animals able to cross the harsh deserts of Central Asia.</p>
          <p>Yet the most important cargoes may have been the ones no one intended to carry. Religions, languages, art styles and ideas spread along the road and reshaped the societies it touched. So too did diseases: historians believe that some of the great epidemics of the past travelled the trade routes alongside the silk.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The Silk Road was a single paved road.' },
              { number: 2, text: 'Most merchants travelled only part of the route.' },
              { number: 3, text: 'The method of making silk was kept secret for a long time.' },
              { number: 4, text: 'Silk was the most expensive item ever traded on the route.' },
              { number: 5, text: 'Chinese inventions spread westward along the road.' },
              { number: 6, text: 'Diseases were deliberately carried along the trade routes.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 7, text: 'The road was named after Chinese ___.' },
              { number: 8, text: 'Caravans set out from the city of ___ at the eastern end.' },
              { number: 9, text: 'Inventions such as ___ travelled west from China.' },
              { number: 10, text: 'Goods were carried over long distances by ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'Which animals crossed the deserts of Central Asia?' },
              { number: 12, text: 'What spread along the road and caused epidemics?' },
              { number: 13, text: 'Besides goods, what reshaped the societies the road touched?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'A short history of coffee',
        html: `
          <p><span class="passage-letter">A</span> No one knows exactly how people first learned to drink coffee, but a much-loved legend points to Ethiopia, where a goatherd is said to have noticed that his animals became lively after eating the red berries of a certain bush. Whether or not the story is true, the coffee plant is native to that part of Africa.</p>
          <p><span class="passage-letter">B</span> From Ethiopia the practice of brewing the roasted beans spread across the Arabian Peninsula. By the fifteenth century coffee was being grown in Yemen and drunk throughout the Arab world, valued by scholars and worshippers who needed to stay awake through long nights of study and prayer.</p>
          <p><span class="passage-letter">C</span> Coffee’s rise was not always welcomed. Because it was new and stimulating, and because the places where it was drunk became centres of lively discussion, rulers in several cities tried to ban it, fearing the gatherings more than the drink. The bans never lasted; coffee was simply too popular.</p>
          <p><span class="passage-letter">D</span> European travellers brought coffee home in the seventeenth century, and it caused a sensation. At first it was an exotic curiosity, but within a few decades it had become an everyday drink in cities from Venice to London.</p>
          <p><span class="passage-letter">E</span> Wherever coffee went, the coffee house followed. These were places to read the news, do business and argue about politics, and they played a real part in the intellectual life of their age. Some of the world’s great institutions, from newspapers to insurance markets, began life in a coffee house.</p>
          <p><span class="passage-letter">F</span> Today coffee is one of the most valuable crops on Earth, grown across a warm belt of countries near the equator and traded in enormous quantities. From a wild African bush it has become a drink shared by billions of people every day.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F.',
            options: headings,
            questions: [
              { number: 14, text: 'Paragraph A' },
              { number: 15, text: 'Paragraph B' },
              { number: 16, text: 'Paragraph C' },
              { number: 17, text: 'Paragraph D' },
              { number: 18, text: 'Paragraph E' },
              { number: 19, text: 'Paragraph F' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'In which region did each event take place? Choose from the list, A–C. You may use any letter more than once.',
            options: [
              { value: 'A', label: 'the Arab world' },
              { value: 'B', label: 'Africa' },
              { value: 'C', label: 'Europe' },
            ],
            questions: [
              { number: 20, text: 'The coffee plant grows in the wild.' },
              { number: 21, text: 'Coffee was first grown as a crop, in Yemen.' },
              { number: 22, text: 'Rulers tried to ban coffee gatherings.' },
              { number: 23, text: 'Coffee houses gave rise to newspapers and insurance markets.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'According to the legend, coffee’s effect was first noticed in', options: [{ value: 'A', label: 'goats.' }, { value: 'B', label: 'scholars.' }, { value: 'C', label: 'travellers.' }] },
              { number: 25, text: 'Rulers who banned coffee were mainly worried about', options: [{ value: 'A', label: 'its taste.' }, { value: 'B', label: 'its price.' }, { value: 'C', label: 'the gatherings around it.' }] },
              { number: 26, text: 'The passage says coffee houses were important places for', options: [{ value: 'A', label: 'sleeping.' }, { value: 'B', label: 'news and discussion.' }, { value: 'C', label: 'growing coffee.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The importance of bees',
        html: `
          <p>It is often said that bees are vital to human life, and for once the popular claim is close to the truth. Honeybees and their wild relatives pollinate a great many of the plants we depend on, and a world without them would be a poorer and hungrier place.</p>
          <p>A honeybee colony is a model of organisation. A single queen lays all the eggs; thousands of female workers gather food, build the comb and care for the young; and a smaller number of male drones do little but mate with a queen. Each bee has its role, and the colony behaves almost like a single organism.</p>
          <p>The workers’ daily task is to collect two things from flowers: nectar, a sugary liquid that the colony turns into honey, and pollen, which provides protein for the developing young. As a bee moves from bloom to bloom it carries pollen with it, fertilising the flowers and allowing them to produce seeds and fruit. When a worker finds a rich patch of flowers, it returns to the hive and performs a special dance that tells the others where to fly.</p>
          <p>This pollination service matters enormously to agriculture. Roughly a third of the crops we eat depend to some degree on animal pollinators, of which bees are by far the most important. Without them, many fruits, nuts and vegetables would become scarce and expensive.</p>
          <p>In recent years, however, bee numbers have fallen in many regions, and researchers point to several causes acting together: the heavy use of pesticides, the loss of wild habitat as land is built on or farmed intensively, disease, and a changing climate. The remedies are equally varied. Reducing harmful chemicals, leaving strips of wildflowers around fields, and protecting natural habitat all help bees, and so, in the end, help us.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Bees are genuinely important to human food supplies.' },
              { number: 28, text: 'Drones do most of the work in a colony.' },
              { number: 29, text: 'Honey is more valuable than the pollination bees provide.' },
              { number: 30, text: 'Many crops depend on animals for pollination.' },
              { number: 31, text: 'A single cause explains the fall in bee numbers.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO causes of falling bee numbers does the passage mention? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'the use of pesticides' },
              { value: 'B', label: 'competition from birds' },
              { value: 'C', label: 'loss of wild habitat' },
              { value: 'D', label: 'a fall in flower prices' },
              { value: 'E', label: 'too many beekeepers' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Worker bees collect {{34}}, which becomes honey, and {{35}}, which feeds the young. A bee that
              finds good flowers performs a {{36}} to guide the others. About a {{37}} of human crops rely on
              pollinators. Bee numbers have fallen because of {{38}}, the loss of {{39}}, disease and climate
              change. Leaving strips of {{40}} around fields is one way to help.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
