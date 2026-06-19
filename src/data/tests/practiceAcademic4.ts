import type { IeltsTest, Option } from '../../types'

// Original practice test 4 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const map: Option[] = ['A', 'B', 'C', 'D', 'E', 'F'].map((v) => ({ value: v, label: '' }))

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

const who: Option[] = [
  { value: 'A', label: 'Leo' },
  { value: 'B', label: 'Mia' },
  { value: 'C', label: 'both students' },
]

export const practiceAcademic4: IeltsTest = {
  id: 'practice-academic-4',
  title: 'Practice Test 4 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  listening: {
    durationSec: 32 * 60,
    answerKey: {
      1: 'Okonkwo', 2: ['5 May', '5th May'], 3: 'Oak', 4: 'BS1 2AB', 5: 'adult', 6: '12', 7: '3', 8: '20', 9: 'passport', 10: 'Thursday',
      11: 'B', 12: 'A', 13: 'B', 14: 'B', 15: 'A', 16: 'B', 17: 'C', 18: 'F', 19: 'D', 20: 'A',
      21: 'A', 22: 'B', 23: 'C', 24: 'A', 25: 'A', 26: 'C', 27: 'B', 28: 'C', 29: 'A', 30: 'B',
      31: 'plates', 32: 'magma', 33: 'pressure', 34: 'ash', 35: 'lava', 36: 'gases', 37: 'fertile', 38: 'monitor', 39: 'earthquakes', 40: 'evacuate',
    },
    parts: [
      {
        number: 1,
        heading: 'Questions 1–10',
        context: 'A person is registering for a library card.',
        transcript: [
          "Good morning, Central Library. I'd like to register for a library card.",
          "Certainly. Your surname, please? Okonkwo — O, K, O, N, K, W, O.",
          "And your date of birth? The fifth of May. What's your address? It's twelve Oak Street.",
          "And the postcode? B S one, two A B.",
          "We offer adult and child cards — which do you need? An adult card, please.",
          "With an adult card you may borrow up to twelve items at a time, for a loan period of three weeks.",
          "Is there a fine for late returns? Yes, twenty pence per day per item.",
          "Do you need to see any identification? Yes, a passport will do.",
          "And finally, we stay open late on Thursdays, until nine.",
        ],
        speakers: ['M', 'W'],
        groups: [
          {
            id: 'l1', type: 'inline-gap', instructions: 'Complete the form below.',
            wordLimit: 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
            bodyHtml: `
              <div style="border:1px solid var(--ielts-border);padding:1rem;max-width:30rem">
                <div style="font-weight:700;margin-bottom:.5rem">LIBRARY CARD — Registration</div>
                <div style="display:grid;grid-template-columns:auto 1fr;gap:.5rem .75rem;align-items:center">
                  <div>Surname:</div><div>{{1}}</div>
                  <div>Date of birth:</div><div>{{2}}</div>
                  <div>Address:</div><div>12 {{3}} Street</div>
                  <div>Postcode:</div><div>{{4}}</div>
                  <div>Card type:</div><div>{{5}}</div>
                  <div>Max items:</div><div>{{6}}</div>
                  <div>Loan period:</div><div>{{7}} weeks</div>
                  <div>Fine per day:</div><div>{{8}}p</div>
                  <div>ID shown:</div><div>{{9}}</div>
                  <div>Late opening on:</div><div>{{10}}</div>
                </div>
              </div>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 1 })),
          },
        ],
      },
      {
        number: 2,
        heading: 'Questions 11–20',
        context: 'A guide gives a tour of Hilltop Heritage Park.',
        transcript:
          "Welcome to Hilltop Heritage Park. The great house here was built in the nineteenth century by a wealthy wool merchant. " +
          "Admission is eight pounds for adults. Guided tours run twice a day, at eleven and at two. " +
          "Photography is not permitted inside the house, though you may take photos in the grounds. " +
          "Please note the park is closed on Mondays. " +
          "Now, using the map: as you come in through the main gate at the bottom, the ticket office is immediately on your right. " +
          "In the centre of the grounds, by the old oak, stands the main house itself. " +
          "Right at the top, overlooking the lake, is the viewpoint. " +
          "On the left, just beyond the pond, is the walled garden. " +
          "And the gift shop is in the bottom-left corner.",
        groups: [
          {
            id: 'l2a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 11, text: 'The house was built in the', options: [{ value: 'A', label: '18th century.' }, { value: 'B', label: '19th century.' }, { value: 'C', label: '20th century.' }] },
              { number: 12, text: 'Adult admission costs', options: [{ value: 'A', label: '£8.' }, { value: 'B', label: '£10.' }, { value: 'C', label: '£12.' }] },
              { number: 13, text: 'Guided tours run', options: [{ value: 'A', label: 'every hour.' }, { value: 'B', label: 'twice a day.' }, { value: 'C', label: 'on request.' }] },
              { number: 14, text: 'Photography is', options: [{ value: 'A', label: 'allowed everywhere.' }, { value: 'B', label: 'not allowed inside the house.' }, { value: 'C', label: 'banned completely.' }] },
              { number: 15, text: 'The park is closed on', options: [{ value: 'A', label: 'Mondays.' }, { value: 'B', label: 'Tuesdays.' }, { value: 'C', label: 'no days.' }] },
            ],
          },
          {
            id: 'l2b', type: 'map-labeling', instructions: 'Label the map below. Choose the correct letter, A–F.',
            imageUrl: 'sample/park-map.svg', options: map,
            questions: [
              { number: 16, text: 'Ticket office' },
              { number: 17, text: 'Main house' },
              { number: 18, text: 'Viewpoint' },
              { number: 19, text: 'Walled garden' },
              { number: 20, text: 'Gift shop' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Questions 21–30',
        context: 'Two students, Leo and Mia, plan a history essay.',
        transcript: [
          "Leo: Let's divide up the work for our history essay. I'll find the primary sources online.",
          "Mia: Good. I'll visit the archive in town to look at the original documents.",
          "Leo: Who writes the outline? Mia: Let's do the outline together.",
          "Leo: Agreed, we'll write the outline together. And checking the references? Leo: I'll check the references at the end.",
          "Mia: So which aspects shall we cover? Leo: I think the causes and the timeline of events.",
          "Mia: Perfect — causes and timeline. How long does it need to be? Leo: Two thousand words.",
          "Mia: And the deadline? Leo: It's due in two weeks.",
          "Mia: What should we focus on? Leo: Just one event, in real depth, rather than the whole period.",
          "Mia: And it's a written essay, not a presentation? Leo: Yes, a formal essay.",
        ],
        speakers: ['A', 'B'],
        groups: [
          {
            id: 'l3a', type: 'matching', instructions: 'Who will do each task? Choose from the list.',
            options: who,
            questions: [
              { number: 21, text: 'Find primary sources' },
              { number: 22, text: 'Visit the archive' },
              { number: 23, text: 'Write the outline' },
              { number: 24, text: 'Check the references' },
            ],
          },
          {
            id: 'l3b', type: 'mcq-multi', instructions: 'Which TWO aspects will they cover? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'the causes' },
              { value: 'B', label: 'key figures' },
              { value: 'C', label: 'the timeline' },
              { value: 'D', label: 'the economy' },
              { value: 'E', label: 'the art' },
            ],
            questions: [{ number: 25 }, { number: 26 }],
          },
          {
            id: 'l3c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 27, text: 'The essay should be', options: [{ value: 'A', label: '1,500 words.' }, { value: 'B', label: '2,000 words.' }, { value: 'C', label: '2,500 words.' }] },
              { number: 28, text: 'The essay is due', options: [{ value: 'A', label: 'on Friday.' }, { value: 'B', label: 'next Monday.' }, { value: 'C', label: 'in two weeks.' }] },
              { number: 29, text: 'They will focus on', options: [{ value: 'A', label: 'a single event.' }, { value: 'B', label: 'a whole century.' }, { value: 'C', label: 'one person.' }] },
              { number: 30, text: 'The work will be', options: [{ value: 'A', label: 'a report.' }, { value: 'B', label: 'an essay.' }, { value: 'C', label: 'a presentation.' }] },
            ],
          },
        ],
      },
      {
        number: 4,
        heading: 'Questions 31–40',
        context: 'Listen to part of a lecture about volcanoes.',
        transcript:
          "Today's lecture is about volcanoes. The Earth's surface is broken into great tectonic plates, and most volcanoes form where these plates meet. " +
          "Beneath the surface lies molten rock called magma. As pressure builds, the magma is forced upwards. " +
          "In an eruption, a volcano may throw out clouds of ash, rivers of lava, and dangerous gases. " +
          "Volcanoes are not all bad news, however. Over time, volcanic soil becomes extremely fertile, which is why people farm near them. " +
          "To reduce the danger, scientists carefully monitor active volcanoes. " +
          "Warning signs include small earthquakes, which often come before an eruption. " +
          "If the signs are serious, the authorities will evacuate the people living nearby.",
        groups: [
          {
            id: 'l4', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Write ONE WORD ONLY for each answer.',
            bodyHtml: `
              <div style="font-weight:700;margin-bottom:.4rem">Volcanoes</div>
              <div style="font-weight:700;margin-top:.6rem">How they form</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>most form where tectonic {{31}} meet</li>
                <li>molten rock called {{32}} lies below</li>
                <li>rising {{33}} forces it upwards</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">An eruption produces</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>clouds of {{34}}</li>
                <li>rivers of {{35}}</li>
                <li>dangerous {{36}}</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">People &amp; safety</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>volcanic soil is very {{37}}</li>
                <li>scientists {{38}} active volcanoes</li>
                <li>small {{39}} can be a warning sign</li>
                <li>authorities may {{40}} nearby residents</li>
              </ul>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 31 })),
          },
        ],
      },
    ],
  },

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
              { number: 1, text: 'Tea is the second most popular drink in the world after water.', evidence: 'Tea is, after water, the most widely drunk beverage on Earth.' },
              { number: 2, text: 'Tea was first cultivated in Japan.', evidence: 'tea was certainly first cultivated in China' },
              { number: 3, text: 'In Japan, tea drinking became an elaborate ceremony.', evidence: 'reaching Japan, where it developed into an elaborate ceremony' },
              { number: 4, text: 'The Dutch traders made a large profit on the first tea.' },
              { number: 5, text: 'Early European tea was expensive enough to be locked away.', evidence: 'At first it was so expensive that it was kept locked away' },
              { number: 6, text: 'The habit of adding milk to tea began in China.', evidence: 'it was in Britain that the habit of adding milk became common' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'Tea was first cultivated in ___.', evidence: 'tea was certainly first cultivated in China' },
              { number: 8, text: 'Tea is made by steeping the dried ___ of the tea plant.', evidence: 'it was made by steeping the dried leaves of the tea plant' },
              { number: 9, text: 'Tea drinking became an elaborate ceremony in ___.', evidence: 'reaching Japan, where it developed into an elaborate ceremony' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 10, text: 'In which year did the first tea reach Europe?', evidence: 'The first chests are recorded as arriving in 1610, carried by Dutch traders.' },
              { number: 11, text: 'What metal were the pots of wealthy households made of?', evidence: 'wealthy households served it from precious silver pots' },
              { number: 12, text: 'What did the British commonly add to their tea?', evidence: 'it was in Britain that the habit of adding milk became common' },
              { number: 13, text: 'Where did the British establish vast plantations?', evidence: 'the British established vast tea plantations in India' },
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
              { number: 14, text: 'Paragraph A', evidence: 'Today, however, it is making a remarkable return.' },
              { number: 15, text: 'Paragraph B', evidence: 'The reasons begin with the rider.' },
              { number: 16, text: 'Paragraph C', evidence: 'Yet plenty of people remain reluctant.' },
              { number: 17, text: 'Paragraph D', evidence: 'That is exactly what some cities are trying to do.' },
              { number: 18, text: 'Paragraph E', evidence: 'The gains are not only personal.' },
              { number: 19, text: 'Paragraph F', evidence: 'Where might this lead?' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Match each action with the correct city, A–D.',
            options: cities,
            questions: [
              { number: 20, text: 'built a dense network of protected lanes long ago', evidence: 'Amsterdam built a dense network of protected lanes decades ago.' },
              { number: 21, text: 'closes major roads to cars every Sunday', evidence: 'Bogotá closes major roads to cars every Sunday so that families can cycle freely.' },
              { number: 22, text: 'has spent heavily on new lanes very recently', evidence: 'Paris has spent heavily on new lanes in just a few years.' },
              { number: 23, text: 'is not named as having improved its cycle lanes' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'According to the passage, cycling became marginal because of', evidence: 'Then came the car, and for decades the bicycle was pushed to the margins.', options: [{ value: 'A', label: 'bad weather.' }, { value: 'B', label: 'the rise of the car.' }, { value: 'C', label: 'poor bicycles.' }] },
              { number: 25, text: 'A barrier to cycling mentioned in the passage is', evidence: 'fear of traffic, a lack of safe lanes, bad weather, and nowhere secure to park', options: [{ value: 'A', label: 'the cost of bicycles.' }, { value: 'B', label: 'a lack of riders.' }, { value: 'C', label: 'nowhere secure to park.' }] },
              { number: 26, text: 'The writer expects future cities to be designed around', evidence: 'Planners increasingly imagine cities designed around people rather than cars', options: [{ value: 'A', label: 'people.' }, { value: 'B', label: 'cars.' }, { value: 'C', label: 'factories.' }] },
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
              { number: 27, text: 'Tool use was once believed to be unique to humans.', evidence: 'the use of tools was thought to be what set human beings apart from every other animal' },
              { number: 28, text: 'The Gombe chimpanzees made tools, not just used them.', evidence: 'Here was an animal not merely using a tool, but making one.' },
              { number: 29, text: 'All groups of chimpanzees fish for termites.', evidence: 'One group of chimpanzees will fish for termites while a neighbouring group, with the same opportunities, will not.' },
              { number: 30, text: 'Crows are more intelligent than chimpanzees.' },
              { number: 31, text: 'The most valuable examples of tool use are those seen in captivity.', evidence: 'the richest examples remain those that arise on their own in the wild' },
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
            questions: [
              { number: 32, evidence: 'Sea otters float on their backs and use stones to crack open shellfish.' },
              { number: 33, evidence: 'Certain dolphins carry sponges on their snouts to protect them while foraging on the seabed.' },
            ],
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
            questions: [
              { number: 34, evidence: 'the use of tools was thought to be what set human beings apart from every other animal' },
              { number: 35, evidence: 'poke them into termite mounds, pulling them out covered in termites to eat' },
              { number: 36, evidence: 'Sea otters float on their backs and use stones to crack open shellfish.' },
              { number: 37, evidence: 'many scientists are now comfortable calling this animal "culture"' },
              { number: 38, evidence: 'Some skills have even been taught to animals in captivity' },
              { number: 39, evidence: 'Some skills have even been taught to animals in captivity' },
              { number: 40, evidence: 'which continue to force us to rethink animal intelligence' },
            ],
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
