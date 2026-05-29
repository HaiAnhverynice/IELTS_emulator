import type { IeltsTest, Option } from '../../types'

// Original practice test 2 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headingOptions: Option[] = [
  { value: 'i', label: 'Problems remote workers face' },
  { value: 'ii', label: 'How the pandemic transformed working patterns' },
  { value: 'iii', label: 'The gains for employees' },
  { value: 'iv', label: 'Costs and concerns for employers' },
  { value: 'v', label: 'The technology behind remote work' },
  { value: 'vi', label: 'A look ahead to hybrid working' },
  { value: 'vii', label: 'Company approaches compared' },
  { value: 'viii', label: 'The environmental impact of commuting' },
  { value: 'ix', label: 'Government rules on remote work' },
]

const companyOptions: Option[] = [
  { value: 'A', label: 'TechCorp' },
  { value: 'B', label: 'BankCo' },
  { value: 'C', label: 'DesignStudio' },
  { value: 'D', label: 'RetailPlus' },
]

const dayOptions: Option[] = [
  { value: 'A', label: 'Tuesday' },
  { value: 'B', label: 'Thursday' },
  { value: 'C', label: 'Saturday' },
  { value: 'D', label: 'every day' },
]

const whoOptions: Option[] = [
  { value: 'A', label: 'Anna' },
  { value: 'B', label: 'Ben' },
  { value: 'C', label: 'both students' },
]

export const practiceAcademic2: IeltsTest = {
  id: 'practice-academic-2',
  title: 'Practice Test 2 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with or endorsed by Cambridge/IELTS.',

  listening: {
    durationSec: 32 * 60,
    answerKey: {
      1: 'Whitfield',
      2: '4',
      3: 'Rose',
      4: 'sea',
      5: 'dog',
      6: '85',
      7: '50',
      8: ['14 June', '14th June'],
      9: 'email',
      10: 'cot',
      11: 'B',
      12: 'A',
      13: 'B',
      14: 'A',
      15: 'B',
      16: 'B',
      17: 'D',
      18: 'B',
      19: 'C',
      20: 'A',
      21: 'C',
      22: 'A',
      23: 'B',
      24: 'A',
      25: 'B',
      26: 'D',
      27: 'A',
      28: 'B',
      29: 'C',
      30: 'B',
      31: 'flowers',
      32: 'nectar',
      33: 'pollen',
      34: 'dance',
      35: 'distance',
      36: 'crops',
      37: 'third',
      38: 'pesticides',
      39: 'habitat',
      40: 'hives',
    },
    parts: [
      {
        number: 1,
        heading: 'Questions 1–10',
        context: 'A customer is booking a holiday cottage by phone.',
        transcript:
          "Good afternoon, Lakeside Cottages. How can I help? " +
          "Hello, I'd like to book a cottage. " +
          "Certainly. Can I take your surname? " +
          "It's Whitfield. W, H, I, T, F, I, E, L, D. " +
          "And how many nights would you like to stay? " +
          "Four nights, please. " +
          "Which cottage were you interested in? " +
          "Rose Cottage looked lovely. " +
          "Good choice — Rose has a beautiful sea view. " +
          "We're also bringing our dog. Is that all right? " +
          "Yes, one dog is allowed in Rose. " +
          "How much is it per night? " +
          "It's eighty-five pounds a night. " +
          "And is there a deposit? " +
          "Yes, we ask for a fifty-pound deposit. " +
          "When will you be arriving? " +
          "On the fourteenth of June. " +
          "We'll send you the directions by email. " +
          "Lovely. One more thing — could we have a cot for the baby? " +
          "Of course, we'll put a cot in the bedroom for you.",
        groups: [
          {
            id: 'l1',
            type: 'inline-gap',
            instructions: 'Complete the booking form below.',
            wordLimit: 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
            bodyHtml: `
              <div style="border:1px solid var(--ielts-border);padding:1rem;max-width:30rem">
                <div style="font-weight:700;margin-bottom:.5rem">LAKESIDE COTTAGES — Booking</div>
                <div style="display:grid;grid-template-columns:auto 1fr;gap:.5rem .75rem;align-items:center">
                  <div>Surname:</div><div>{{1}}</div>
                  <div>Number of nights:</div><div>{{2}}</div>
                  <div>Cottage name:</div><div>{{3}} Cottage</div>
                  <div>View:</div><div>{{4}} view</div>
                  <div>Pet allowed:</div><div>one {{5}}</div>
                  <div>Price per night:</div><div>£{{6}}</div>
                  <div>Deposit:</div><div>£{{7}}</div>
                  <div>Arrival date:</div><div>{{8}}</div>
                  <div>Directions sent by:</div><div>{{9}}</div>
                  <div>Special request:</div><div>a {{10}}</div>
                </div>
              </div>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 1 })),
          },
        ],
      },
      {
        number: 2,
        heading: 'Questions 11–20',
        context: 'A presenter gives information about a local farmers’ market.',
        transcript:
          "Welcome to this guide to our weekly farmers' market. " +
          "The market is held in the town car park, not in the square as it used to be. " +
          "It takes place every Saturday — there is no Sunday market. " +
          "Stalls open at nine in the morning and close at two. " +
          "Parking is completely free for shoppers on market day. " +
          "New this year, we are running cooking demonstrations near the entrance — do come and watch. " +
          "Most stalls now accept cards, so you don't need to bring cash. " +
          "Let me tell you when some of the stalls are open. " +
          "The bakery is there every day of the week. " +
          "The fish stall comes only on Thursdays. " +
          "The cheese stall is here on Saturdays only. " +
          "And the flower stall sets up on Tuesdays.",
        groups: [
          {
            id: 'l2a',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 11, text: 'The market is now held in', options: [{ value: 'A', label: 'the town square.' }, { value: 'B', label: 'the car park.' }, { value: 'C', label: 'the park.' }] },
              { number: 12, text: 'The market takes place on', options: [{ value: 'A', label: 'Saturdays.' }, { value: 'B', label: 'Sundays.' }, { value: 'C', label: 'both days.' }] },
              { number: 13, text: 'The stalls open at', options: [{ value: 'A', label: '8 am.' }, { value: 'B', label: '9 am.' }, { value: 'C', label: '10 am.' }] },
              { number: 14, text: 'Parking on market day is', options: [{ value: 'A', label: 'free.' }, { value: 'B', label: '£2.' }, { value: 'C', label: '£5.' }] },
              { number: 15, text: 'New this year are', options: [{ value: 'A', label: 'live music acts.' }, { value: 'B', label: 'cooking demonstrations.' }, { value: 'C', label: "a children's area." }] },
              { number: 16, text: 'To pay, shoppers', options: [{ value: 'A', label: 'must use cash.' }, { value: 'B', label: 'can use cards.' }, { value: 'C', label: 'need exact change.' }] },
            ],
          },
          {
            id: 'l2b',
            type: 'matching',
            instructions: 'On which day is each stall open? Choose your answer from the list.',
            options: dayOptions,
            questions: [
              { number: 17, text: 'Bakery' },
              { number: 18, text: 'Fish stall' },
              { number: 19, text: 'Cheese stall' },
              { number: 20, text: 'Flower stall' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Questions 21–30',
        context: 'Two students, Anna and Ben, plan a class presentation.',
        transcript:
          "Anna: So our presentation is on energy. Shall we cover just solar, or wind, or a mix? " +
          "Ben: Let's do a mix of renewables — it'll be more interesting than just one. " +
          "Anna: Agreed, a mix of renewables. And it's for our own class, isn't it, not the public? " +
          "Ben: Yes, just our class. The teacher said fifteen minutes. " +
          "Anna: Fifteen minutes — that's not long. My worry is we'll try to include too much information. " +
          "Ben: True, too much detail is the main risk. We should keep it focused. " +
          "Anna: For sources, I think the government website is reliable. " +
          "Ben: Yes, the government website, and that documentary we watched would be great too. " +
          "Anna: Perfect — the government website and the documentary. Now, who does what? " +
          "Ben: You're good at design, so you make the slides. " +
          "Anna: Happy to. And you find the statistics. " +
          "Ben: Sure, I'll get the statistics. We should rehearse together though. " +
          "Anna: Definitely, let's rehearse together. And can you write the conclusion? " +
          "Ben: No problem, I'll write the conclusion.",
        groups: [
          {
            id: 'l3a',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 21, text: 'The presentation will cover', options: [{ value: 'A', label: 'solar power only.' }, { value: 'B', label: 'wind power only.' }, { value: 'C', label: 'a mix of renewables.' }] },
              { number: 22, text: 'The audience will be', options: [{ value: 'A', label: 'their class.' }, { value: 'B', label: 'the public.' }, { value: 'C', label: 'other teachers.' }] },
              { number: 23, text: 'The presentation should last', options: [{ value: 'A', label: '10 minutes.' }, { value: 'B', label: '15 minutes.' }, { value: 'C', label: '20 minutes.' }] },
              { number: 24, text: "Anna's main concern is", options: [{ value: 'A', label: 'including too much information.' }, { value: 'B', label: 'finding images.' }, { value: 'C', label: 'running out of time.' }] },
            ],
          },
          {
            id: 'l3b',
            type: 'mcq-multi',
            instructions: 'Which TWO sources will the students use? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'a textbook' },
              { value: 'B', label: 'a government website' },
              { value: 'C', label: 'interviews' },
              { value: 'D', label: 'a documentary' },
              { value: 'E', label: 'a newspaper' },
            ],
            questions: [{ number: 25 }, { number: 26 }],
          },
          {
            id: 'l3c',
            type: 'matching',
            instructions: 'Who will do each task? Choose your answer from the list.',
            options: whoOptions,
            questions: [
              { number: 27, text: 'Make the slides' },
              { number: 28, text: 'Find the statistics' },
              { number: 29, text: 'Rehearse the talk' },
              { number: 30, text: 'Write the conclusion' },
            ],
          },
        ],
      },
      {
        number: 4,
        heading: 'Questions 31–40',
        context: 'Listen to part of a lecture about honeybees and pollination.',
        transcript:
          "Today I want to talk about honeybees and why they matter so much. " +
          "Bees visit flowers to feed. From each flower they collect two things: nectar, a sugary liquid they use for energy, and pollen, which provides protein. " +
          "Bees are also remarkable communicators. When a scout bee finds a good source of food, it returns to the hive and performs a special dance. " +
          "This dance tells the other bees two pieces of information: the direction of the food, and its distance from the hive. " +
          "Why does this matter to us? Bees pollinate a great many of our food crops. " +
          "In fact, about a third of the food we eat depends on pollinators like bees. " +
          "Sadly, bees face serious threats. Chemical pesticides can harm or kill them. " +
          "And as wild land is built on, the loss of habitat removes the flowers they rely on. " +
          "There are things we can do to help. Farmers and gardeners can plant flowers, and beekeepers can provide hives where bees can live safely.",
        groups: [
          {
            id: 'l4',
            type: 'inline-gap',
            instructions: 'Complete the notes below.',
            wordLimit: 'Write ONE WORD ONLY for each answer.',
            bodyHtml: `
              <div style="font-weight:700;margin-bottom:.4rem">Honeybees and Pollination</div>
              <div style="font-weight:700;margin-top:.6rem">Feeding</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>bees visit {{31}} to feed</li>
                <li>they collect {{32}} for energy</li>
                <li>they collect {{33}} for protein</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Communication</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>a scout bee performs a {{34}}</li>
                <li>it shows direction and {{35}} of the food</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Importance</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>bees pollinate many food {{36}}</li>
                <li>about a {{37}} of our food depends on pollinators</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Threats &amp; help</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>{{38}} can harm bees</li>
                <li>loss of {{39}} removes their flowers</li>
                <li>beekeepers can provide {{40}}</li>
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
      1: 'TRUE',
      2: 'TRUE',
      3: 'FALSE',
      4: 'FALSE',
      5: 'FALSE',
      6: 'NOT GIVEN',
      7: 'Aztecs',
      8: 'money',
      9: 'sixteenth',
      10: 'sugar',
      11: '1847',
      12: ['Peter and Nestlé', 'Daniel Peter and Henri Nestlé', 'Nestlé and Peter'],
      13: 'West Africa',
      14: 'ii',
      15: 'iii',
      16: 'iv',
      17: 'i',
      18: 'vii',
      19: 'vi',
      20: 'A',
      21: 'B',
      22: 'C',
      23: 'D',
      24: 'B',
      25: 'B',
      26: 'C',
      27: 'NO',
      28: 'YES',
      29: 'YES',
      30: 'NO',
      31: 'NOT GIVEN',
      32: 'B',
      33: 'B',
      34: 'B',
      35: 'B',
      36: 'sun',
      37: 'stars',
      38: 'magnetic',
      39: 'landmarks',
      40: 'direction',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'A brief history of chocolate',
        html: `
          <p><span class="passage-letter">A</span> Chocolate comes from the cacao tree, which is native to the tropical forests of Central and South America. The Maya, and later the Aztecs, valued cacao very highly. They ground the beans into a bitter drink flavoured with spices, and they even used the beans themselves as a form of money.</p>
          <p><span class="passage-letter">B</span> When Spanish explorers carried cacao back to Europe in the sixteenth century, Europeans added sugar to the bitter drink. Sweetened chocolate quickly became a fashionable luxury — but, because it was expensive, it was enjoyed only by the wealthy.</p>
          <p><span class="passage-letter">C</span> For a long time chocolate was something you drank, not ate. The solid chocolate bar did not appear until the nineteenth century. In 1847 the British firm Fry's produced the first moulded eating bar, by combining cocoa powder, sugar and cocoa butter.</p>
          <p><span class="passage-letter">D</span> Another breakthrough came in 1875, when the Swiss makers Daniel Peter and Henri Nestlé mixed chocolate with condensed milk to create milk chocolate. It proved enormously popular and spread around the world.</p>
          <p><span class="passage-letter">E</span> Today chocolate is a vast global industry. Yet most cacao is now grown by small farmers in West Africa — especially Ghana and Ivory Coast — far from the forests where the tree first grew.</p>`,
        groups: [
          {
            id: 'r1a',
            type: 'tfng',
            instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Cacao trees originally grew in Central and South America.' },
              { number: 2, text: 'The Aztecs used cacao beans as a form of money.' },
              { number: 3, text: 'Europeans preferred their chocolate drink without sugar.' },
              { number: 4, text: 'Chocolate was affordable for most Europeans when it was first introduced.' },
              { number: 5, text: 'The first solid eating bar was made in Switzerland.' },
              { number: 6, text: 'Milk chocolate was more expensive than dark chocolate.' },
            ],
          },
          {
            id: 'r1b',
            type: 'inline-gap',
            instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>The cacao tree is native to Central and South America, where the Maya and the {{7}} prized
              its beans, even using them as {{8}}. Cacao reached Europe in the {{9}} century, where
              {{10}} was added to make the drink more pleasant.</p>`,
            questions: [{ number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }],
          },
          {
            id: 'r1c',
            type: 'short-answer',
            instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: "In which year did Fry's produce the first eating bar?" },
              { number: 12, text: 'Which two makers created milk chocolate?' },
              { number: 13, text: 'In which region is most cacao grown today?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The rise of remote work',
        html: `
          <p><span class="passage-letter">A</span> Working away from a central office is not new, but for most of the twentieth century it was rare. That changed almost overnight. When the pandemic forced offices to close, millions of people began working from home, and patterns that might have taken decades to develop arrived in a matter of weeks.</p>
          <p><span class="passage-letter">B</span> For many employees, the gains were immediate. There was no daily commute to drain time and money, schedules became more flexible, and a number of studies reported improvements in well-being. Workers could fit their jobs around their lives, rather than the other way round.</p>
          <p><span class="passage-letter">C</span> Employers saw advantages too, chiefly lower spending on office space. But there were concerns. Managers found it harder to supervise staff they could not see, and many worried that creativity and teamwork suffered when colleagues rarely met face to face.</p>
          <p><span class="passage-letter">D</span> Remote work also created difficulties for the workers themselves. Some felt isolated and missed the social side of the office. The boundary between work and home life blurred, and not everyone had a quiet room or a fast connection in which to work.</p>
          <p><span class="passage-letter">E</span> Companies responded in very different ways. TechCorp announced that it would remain fully remote permanently. BankCo, by contrast, ordered all its staff back to the office full-time. DesignStudio chose to let each team decide its own schedule, while RetailPlus settled on a rule of three days a week in the office.</p>
          <p><span class="passage-letter">F</span> What happens next? Few expect a complete return to the old five-days-in-the-office model, but nor will most jobs become entirely remote. The likeliest outcome is a hybrid arrangement that combines time at home with time together in person.</p>`,
        groups: [
          {
            id: 'r2a',
            type: 'matching-headings',
            instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph.',
            options: headingOptions,
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
            id: 'r2b',
            type: 'matching',
            instructions: 'Match each policy with the correct company, A–D.',
            options: companyOptions,
            questions: [
              { number: 20, text: 'has gone fully remote permanently' },
              { number: 21, text: 'requires all staff to return full-time' },
              { number: 22, text: 'lets each team choose its own schedule' },
              { number: 23, text: 'requires three office days a week' },
            ],
          },
          {
            id: 'r2c',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'According to the passage, the main benefit for employees is', options: [{ value: 'A', label: 'higher pay.' }, { value: 'B', label: 'flexibility and no commute.' }, { value: 'C', label: 'faster promotion.' }] },
              { number: 25, text: 'A key concern for employers is', options: [{ value: 'A', label: 'higher office costs.' }, { value: 'B', label: 'weaker teamwork.' }, { value: 'C', label: 'losing customers.' }] },
              { number: 26, text: 'The writer predicts that the future of work will be', options: [{ value: 'A', label: 'fully office-based.' }, { value: 'B', label: 'fully remote.' }, { value: 'C', label: 'hybrid.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'How birds find their way',
        html: `
          <p>Every year, billions of birds make journeys of astonishing length, some travelling from one end of the Earth to the other and back. How they find their way across oceans and continents puzzled scientists for centuries, and parts of the answer are still being worked out today.</p>
          <p>What is now clear is that birds do not rely on a single method. Instead they draw on a whole toolkit of cues. By day, many species use the position of the sun, correcting for the way it moves across the sky as the hours pass. By night, others steer by the pattern of the stars.</p>
          <p>Perhaps the most remarkable cue is the Earth's magnetic field, which some birds can sense and use as a compass. Exactly how they detect it is not yet fully understood; the leading ideas point to light-sensitive chemical reactions in the bird's eye, or to tiny particles of iron in its beak.</p>
          <p>Birds also read the landscape, following familiar landmarks such as rivers and coastlines, and some appear to use their sense of smell. The different cues seem to back one another up, so that if one fails, another can take over.</p>
          <p>There is a fascinating difference between young and experienced birds. Many young birds appear to inherit a direction instinctively, flying a set heading even on their very first migration. Experienced birds, however, build something more powerful: a mental map of where they are, which lets them correct their course. In classic experiments, birds that were deliberately carried far off route were still able to find their way back on track.</p>`,
        groups: [
          {
            id: 'r3a',
            type: 'ynng',
            instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Scientists fully understand how birds detect the magnetic field.' },
              { number: 28, text: 'Birds use more than one method to navigate.' },
              { number: 29, text: 'Some young birds have an inborn sense of direction.' },
              { number: 30, text: 'Experienced birds rely only on landmarks.' },
              { number: 31, text: 'Birds navigate more accurately in large flocks than alone.' },
            ],
          },
          {
            id: 'r3b',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 32, text: 'At night, migrating birds may navigate using', options: [{ value: 'A', label: 'the sun.' }, { value: 'B', label: 'the stars.' }, { value: 'C', label: 'their sense of smell.' }] },
              { number: 33, text: 'Sensing the magnetic field may involve', options: [{ value: 'A', label: 'the wings.' }, { value: 'B', label: 'the eye or the beak.' }, { value: 'C', label: 'the feet.' }] },
              { number: 34, text: 'In the experiments described, birds carried off route', options: [{ value: 'A', label: 'became permanently lost.' }, { value: 'B', label: 'corrected their course.' }, { value: 'C', label: 'stopped migrating.' }] },
              { number: 35, text: 'Compared with young birds, experienced birds have', options: [{ value: 'A', label: 'no sense of direction.' }, { value: 'B', label: 'a learned mental map.' }, { value: 'C', label: 'sharper eyesight.' }] },
            ],
          },
          {
            id: 'r3c',
            type: 'inline-gap',
            instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>Migrating birds rely on several cues. By day they can use the position of the {{36}}; by
              night they read the {{37}}. Many species can also sense the Earth's {{38}} field as a
              compass. Familiar {{39}}, such as rivers and coasts, help as well. While young birds may
              inherit a {{40}}, experienced birds build a mental map.</p>`,
            questions: [{ number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },

  writing: {
    durationSec: 60 * 60,
    tasks: [
      {
        number: 1,
        minWords: 150,
        promptHtml: `
          <p>The table below shows the percentage of households with internet access in four countries
          in 2005 and 2020.</p>
          <p>Summarise the information by selecting and reporting the main features, and make comparisons
          where relevant.</p>
          <table style="border-collapse:collapse;margin-top:.75rem" border="1">
            <thead><tr><th style="padding:.4rem .8rem">Country</th><th style="padding:.4rem .8rem">2005</th><th style="padding:.4rem .8rem">2020</th></tr></thead>
            <tbody>
              <tr><td style="padding:.4rem .8rem">UK</td><td style="padding:.4rem .8rem;text-align:center">50%</td><td style="padding:.4rem .8rem;text-align:center">95%</td></tr>
              <tr><td style="padding:.4rem .8rem">Spain</td><td style="padding:.4rem .8rem;text-align:center">35%</td><td style="padding:.4rem .8rem;text-align:center">90%</td></tr>
              <tr><td style="padding:.4rem .8rem">China</td><td style="padding:.4rem .8rem;text-align:center">8%</td><td style="padding:.4rem .8rem;text-align:center">75%</td></tr>
              <tr><td style="padding:.4rem .8rem">Brazil</td><td style="padding:.4rem .8rem;text-align:center">20%</td><td style="padding:.4rem .8rem;text-align:center">80%</td></tr>
            </tbody>
          </table>`,
      },
      {
        number: 2,
        minWords: 250,
        promptHtml: `
          <p>Write about the following topic:</p>
          <p style="font-weight:600">Some people think that children should begin formal schooling at a very
          young age, while others believe children should not start school until they are older.</p>
          <p>Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or
          experience.</p>`,
      },
    ],
  },
}
