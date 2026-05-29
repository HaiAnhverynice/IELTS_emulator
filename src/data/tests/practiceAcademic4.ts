import type { IeltsTest, Option } from '../../types'

// Original practice test 4 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headings: Option[] = [
  { value: 'i', label: 'Health and safety benefits' },
  { value: 'ii', label: 'A simple idea with a long history' },
  { value: 'iii', label: 'Barriers that put people off' },
  { value: 'iv', label: 'How cities are encouraging cycling' },
  { value: 'v', label: 'The cost of building cycle lanes' },
  { value: 'vi', label: 'Cycling and the environment' },
  { value: 'vii', label: 'A look to the future' },
  { value: 'viii', label: 'Famous cyclists' },
  { value: 'ix', label: 'Rules of the road' },
]

const cities: Option[] = [
  { value: 'A', label: 'Amsterdam' },
  { value: 'B', label: 'Bogotá' },
  { value: 'C', label: 'Paris' },
  { value: 'D', label: 'Tokyo' },
]

export const practiceAcademic4: IeltsTest = {
  id: 'practice-academic-4',
  title: 'Practice Test 4 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',
  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'TRUE', 6: 'FALSE',
      7: 'China', 8: 'leaves', 9: 'Japan',
      10: ['1610', 'in 1610'], 11: 'silver', 12: 'milk', 13: 'India',
      14: 'ii', 15: 'i', 16: 'iii', 17: 'iv', 18: 'vi', 19: 'vii',
      20: 'A', 21: 'B', 22: 'C', 23: 'D', 24: 'B', 25: 'C', 26: 'A',
      27: 'YES', 28: 'YES', 29: 'NO', 30: 'NOT GIVEN', 31: 'NO',
      32: 'B', 33: 'D',
      34: 'tools', 35: 'termites', 36: 'stones', 37: 'culture', 38: 'taught', 39: 'captivity', 40: 'intelligence',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The story of tea',
        html: `
          <p><span class="passage-letter">A</span> Tea is, after water, the most widely drunk beverage on Earth. According to Chinese tradition, it was discovered there almost five thousand years ago, when leaves blew into the emperor's pot of boiling water.</p>
          <p><span class="passage-letter">B</span> Whatever its true origin, tea was certainly first cultivated in China, where it was made by steeping the dried leaves of the tea plant. From China the custom spread slowly across Asia, reaching Japan, where it developed into an elaborate ceremony.</p>
          <p><span class="passage-letter">C</span> Tea did not reach Europe until much later. The first chests are recorded as arriving in 1610, carried by Dutch traders. At first it was so expensive that it was kept locked away, and wealthy households served it from precious silver pots.</p>
          <p><span class="passage-letter">D</span> The British took to tea with particular enthusiasm, and it was in Britain that the habit of adding milk became common. Later, to meet soaring demand, the British established vast tea plantations in India, which remains one of the world's largest producers today.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Tea is the second most popular drink in the world after water.' },
              { number: 2, text: 'Tea was first cultivated in Japan.' },
              { number: 3, text: 'In Japan, tea drinking became an elaborate ceremony.' },
              { number: 4, text: 'The Dutch traders made a large profit on the first tea.' },
              { number: 5, text: 'Early European tea was expensive enough to be locked away.' },
              { number: 6, text: 'The habit of adding milk to tea began in China.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'Tea was first cultivated in ___.' },
              { number: 8, text: 'Tea is made by steeping the dried ___ of the tea plant.' },
              { number: 9, text: 'Tea drinking became an elaborate ceremony in ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 10, text: 'In which year did the first tea reach Europe?' },
              { number: 11, text: 'What metal were the pots of wealthy households made of?' },
              { number: 12, text: 'What did the British commonly add to their tea?' },
              { number: 13, text: 'Where did the British establish vast plantations?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Bringing the bicycle back to the city',
        html: `
          <p><span class="passage-letter">A</span> The bicycle is one of the oldest forms of mechanical transport still in everyday use, and for a century it was central to city life. Then came the car, and for decades the bicycle was pushed to the margins. Today, however, it is making a remarkable return.</p>
          <p><span class="passage-letter">B</span> The reasons begin with the rider. Regular cycling improves fitness, lowers the risk of heart disease, and — where good lanes exist — is a strikingly safe way to travel. For many, it is simply the healthiest part of the day.</p>
          <p><span class="passage-letter">C</span> Yet plenty of people remain reluctant. Surveys find the same barriers again and again: fear of traffic, a lack of safe lanes, bad weather, and nowhere secure to park. Remove these, and many more would ride.</p>
          <p><span class="passage-letter">D</span> That is exactly what some cities are trying to do. Amsterdam built a dense network of protected lanes decades ago. Bogotá closes major roads to cars every Sunday so that families can cycle freely. Paris has spent heavily on new lanes in just a few years.</p>
          <p><span class="passage-letter">E</span> The gains are not only personal. Every journey made by bike instead of car means less congestion, cleaner air and lower carbon emissions — a quiet but real contribution to tackling climate change.</p>
          <p><span class="passage-letter">F</span> Where might this lead? Planners increasingly imagine cities designed around people rather than cars, in which cycling, walking and public transport carry most journeys, and the bicycle is once again at the centre of urban life.</p>`,
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
            id: 'r2b', type: 'matching', instructions: 'Match each action with the correct city, A–D.',
            options: cities,
            questions: [
              { number: 20, text: 'built a dense network of protected lanes long ago' },
              { number: 21, text: 'closes major roads to cars every Sunday' },
              { number: 22, text: 'has spent heavily on new lanes very recently' },
              { number: 23, text: 'is not named as having improved its cycle lanes' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'According to the passage, cycling became marginal because of', options: [{ value: 'A', label: 'bad weather.' }, { value: 'B', label: 'the rise of the car.' }, { value: 'C', label: 'poor bicycles.' }] },
              { number: 25, text: 'A barrier to cycling mentioned in the passage is', options: [{ value: 'A', label: 'the cost of bicycles.' }, { value: 'B', label: 'a lack of riders.' }, { value: 'C', label: 'nowhere secure to park.' }] },
              { number: 26, text: 'The writer expects future cities to be designed around', options: [{ value: 'A', label: 'people.' }, { value: 'B', label: 'cars.' }, { value: 'C', label: 'factories.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Animals that use tools',
        html: `
          <p>For a long time, the use of tools was thought to be what set human beings apart from every other animal. That comfortable idea has been steadily dismantled by patient observation in the wild.</p>
          <p>The most famous example came from the chimpanzees of Gombe, in Tanzania. Researchers watched them strip the leaves from twigs and poke them into termite mounds, pulling them out covered in termites to eat. Here was an animal not merely using a tool, but making one.</p>
          <p>Chimpanzees are far from alone. Sea otters float on their backs and use stones to crack open shellfish. Some crows bend wire into hooks to fish food out of tubes. Certain dolphins carry sponges on their snouts to protect them while foraging on the seabed.</p>
          <p>What makes these behaviours especially striking is that they are often local. One group of chimpanzees will fish for termites while a neighbouring group, with the same opportunities, will not. Such differences are passed from one generation to the next by learning, and many scientists are now comfortable calling this animal "culture".</p>
          <p>How do the animals acquire these skills? Largely, it seems, by watching and copying others — particularly the young learning from their mothers. Some skills have even been taught to animals in captivity, but the richest examples remain those that arise on their own in the wild, and which continue to force us to rethink animal intelligence.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Tool use was once believed to be unique to humans.' },
              { number: 28, text: 'The Gombe chimpanzees made tools, not just used them.' },
              { number: 29, text: 'All groups of chimpanzees fish for termites.' },
              { number: 30, text: 'Crows are more intelligent than chimpanzees.' },
              { number: 31, text: 'The most valuable examples of tool use are those seen in captivity.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO animals are described as using tools? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'elephants' },
              { value: 'B', label: 'sea otters' },
              { value: 'C', label: 'parrots' },
              { value: 'D', label: 'dolphins' },
              { value: 'E', label: 'foxes' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>Once thought unique to humans, the use of {{34}} has been found in many animals. The
              chimpanzees of Gombe make twigs to catch {{35}}, while sea otters use {{36}} to open
              shellfish. Because such habits differ between groups and are passed on, scientists now speak
              of animal {{37}}. The skills are mostly learned by copying others, though some have been
              {{38}} to animals in {{39}}. Such discoveries keep forcing us to rethink animal {{40}}.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },

  writing: {
    durationSec: 60 * 60,
    tasks: [
      {
        number: 1, minWords: 150,
        promptHtml: `
          <p>The table below shows how electricity was generated from different sources in one country in
          2000 and 2020 (figures are percentages of total generation).</p>
          <p>Summarise the information by selecting and reporting the main features, and make comparisons
          where relevant.</p>
          <table style="border-collapse:collapse;margin-top:.75rem" border="1">
            <thead><tr><th style="padding:.4rem .8rem">Source</th><th style="padding:.4rem .8rem">2000</th><th style="padding:.4rem .8rem">2020</th></tr></thead>
            <tbody>
              <tr><td style="padding:.4rem .8rem">Coal</td><td style="padding:.4rem .8rem;text-align:center">55%</td><td style="padding:.4rem .8rem;text-align:center">20%</td></tr>
              <tr><td style="padding:.4rem .8rem">Gas</td><td style="padding:.4rem .8rem;text-align:center">25%</td><td style="padding:.4rem .8rem;text-align:center">35%</td></tr>
              <tr><td style="padding:.4rem .8rem">Nuclear</td><td style="padding:.4rem .8rem;text-align:center">15%</td><td style="padding:.4rem .8rem;text-align:center">10%</td></tr>
              <tr><td style="padding:.4rem .8rem">Renewables</td><td style="padding:.4rem .8rem;text-align:center">5%</td><td style="padding:.4rem .8rem;text-align:center">35%</td></tr>
            </tbody>
          </table>`,
      },
      {
        number: 2, minWords: 250,
        promptHtml: `
          <p>Write about the following topic:</p>
          <p style="font-weight:600">In many cities, private cars are being banned from the centre to reduce
          traffic and pollution.</p>
          <p>Do the advantages of this policy outweigh the disadvantages?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or
          experience.</p>`,
      },
    ],
  },
}
