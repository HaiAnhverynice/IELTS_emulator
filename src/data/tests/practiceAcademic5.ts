import type { IeltsTest, Option } from '../../types'

// Original practice test 5 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const map: Option[] = ['A', 'B', 'C', 'D', 'E', 'F'].map((v) => ({ value: v, label: '' }))

const headings: Option[] = [
  { value: 'i', label: 'Defining the gig economy' },
  { value: 'ii', label: 'Flexibility for workers' },
  { value: 'iii', label: 'The downside for workers' },
  { value: 'iv', label: 'What it means for companies' },
  { value: 'v', label: 'The legal debate' },
  { value: 'vi', label: 'What lies ahead' },
  { value: 'vii', label: 'The history of work' },
  { value: 'viii', label: 'Well-known gig companies' },
  { value: 'ix', label: 'Taxing the gig economy' },
]

const groups4: Option[] = [
  { value: 'A', label: 'workers' },
  { value: 'B', label: 'companies' },
  { value: 'C', label: 'governments' },
  { value: 'D', label: 'economists' },
]

const who: Option[] = [
  { value: 'A', label: 'Ken' },
  { value: 'B', label: 'Lucy' },
  { value: 'C', label: 'both students' },
]

export const practiceAcademic5: IeltsTest = {
  id: 'practice-academic-5',
  title: 'Practice Test 5 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  listening: {
    durationSec: 32 * 60,
    answerKey: {
      1: 'Delgado', 2: 'birthday', 3: ['20 July', '20th July'], 4: '45', 5: 'Garden', 6: '4', 7: '300', 8: '75', 9: 'chairs', 10: 'Friday',
      11: 'B', 12: 'B', 13: 'B', 14: 'B', 15: 'C', 16: 'B', 17: 'D', 18: 'F', 19: 'C', 20: 'A',
      21: 'A', 22: 'B', 23: 'C', 24: 'A', 25: 'A', 26: 'C', 27: 'A', 28: 'B', 29: 'A', 30: 'B',
      31: 'algae', 32: 'calcium', 33: 'fish', 34: 'storms', 35: 'tourism', 36: 'warming', 37: 'bleaching', 38: 'pollution', 39: 'protected', 40: 'sustainable',
    },
    parts: [
      {
        number: 1,
        heading: 'Questions 1–10',
        context: 'A customer is hiring a venue for a party.',
        transcript: [
          "Good morning, Meadow Hall venue hire. I'd like to book a room for a party.",
          "Of course. Your surname? Delgado — D, E, L, G, A, D, O. What's the occasion? A birthday party.",
          "And the date? The twentieth of July. How many guests? About forty-five.",
          "For that number I'd suggest the Garden room. How many hours do you need it? Four hours.",
          "The hire cost for four hours is three hundred pounds, with a deposit of seventy-five pounds.",
          "Does that include furniture? Yes, tables and chairs are included.",
          "When do I need to confirm? Please confirm by Friday.",
        ],
        speakers: ['M', 'W'],
        groups: [
          {
            id: 'l1', type: 'inline-gap', instructions: 'Complete the booking form below.',
            wordLimit: 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
            bodyHtml: `
              <div style="border:1px solid var(--ielts-border);padding:1rem;max-width:30rem">
                <div style="font-weight:700;margin-bottom:.5rem">VENUE HIRE — Booking</div>
                <div style="display:grid;grid-template-columns:auto 1fr;gap:.5rem .75rem;align-items:center">
                  <div>Surname:</div><div>{{1}}</div>
                  <div>Occasion:</div><div>{{2}} party</div>
                  <div>Date:</div><div>{{3}}</div>
                  <div>Number of guests:</div><div>{{4}}</div>
                  <div>Room:</div><div>{{5}} room</div>
                  <div>Hours:</div><div>{{6}}</div>
                  <div>Hire cost:</div><div>£{{7}}</div>
                  <div>Deposit:</div><div>£{{8}}</div>
                  <div>Included:</div><div>tables and {{9}}</div>
                  <div>Confirm by:</div><div>{{10}}</div>
                </div>
              </div>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 1 })),
          },
        ],
      },
      {
        number: 2,
        heading: 'Questions 11–20',
        context: 'A warden describes Greenwood Nature Reserve.',
        transcript:
          "Welcome to Greenwood Nature Reserve. The reserve is especially famous for its birds — over a hundred species have been recorded here. " +
          "There's no fixed entry fee, but we do ask for a donation. " +
          "The best season for bird-watching is winter, when migrating birds gather on the lake. " +
          "Please note that bicycles are not allowed anywhere on the reserve. " +
          "We run a free guided walk every day at ten o'clock. " +
          "Now for the map. As you enter at the bottom, the visitor centre is the building on your right. " +
          "On the left, just past the pond, is the pond-dipping area for children. " +
          "Up at the top, by the lake, is the bird hide. " +
          "In the centre, beside the old oak, is the picnic area. And the toilets are in the bottom-left corner.",
        groups: [
          {
            id: 'l2a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 11, text: 'The reserve is especially famous for its', options: [{ value: 'A', label: 'deer.' }, { value: 'B', label: 'birds.' }, { value: 'C', label: 'butterflies.' }] },
              { number: 12, text: 'For entry, visitors are asked to', options: [{ value: 'A', label: 'pay £4.' }, { value: 'B', label: 'give a donation.' }, { value: 'C', label: 'book online.' }] },
              { number: 13, text: 'The best season for bird-watching is', options: [{ value: 'A', label: 'spring.' }, { value: 'B', label: 'winter.' }, { value: 'C', label: 'summer.' }] },
              { number: 14, text: 'Bicycles are', options: [{ value: 'A', label: 'allowed on paths.' }, { value: 'B', label: 'not allowed at all.' }, { value: 'C', label: 'allowed everywhere.' }] },
              { number: 15, text: 'A free guided walk runs', options: [{ value: 'A', label: 'on Saturdays.' }, { value: 'B', label: 'on Sundays.' }, { value: 'C', label: 'every day.' }] },
            ],
          },
          {
            id: 'l2b', type: 'map-labeling', instructions: 'Label the map below. Choose the correct letter, A–F.',
            imageUrl: 'sample/park-map.svg', options: map,
            questions: [
              { number: 16, text: 'Visitor centre' },
              { number: 17, text: 'Pond-dipping area' },
              { number: 18, text: 'Bird hide' },
              { number: 19, text: 'Picnic area' },
              { number: 20, text: 'Toilets' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Questions 21–30',
        context: 'Two students, Ken and Lucy, plan a marketing project.',
        transcript: [
          "Ken: Let's plan our marketing project. I'll design the survey.",
          "Lucy: Good. I'll interview customers in the shopping centre.",
          "Ken: Who analyses the results? Lucy: Let's analyse them together.",
          "Ken: Agreed, we'll do the analysis together. And the poster? Ken: I'll make the poster.",
          "Lucy: Which products should we focus on? Ken: I think drinks and clothing.",
          "Lucy: Perfect — drinks and clothing. Who's our target group? Ken: Teenagers, I think.",
          "Lucy: How big a sample? Ken: Let's aim for one hundred people.",
          "Lucy: And the method — online or face to face? Ken: An online survey will be quickest.",
          "Lucy: Finally, how do we present the results? Ken: As graphs, I think, they're clearest.",
        ],
        speakers: ['A', 'B'],
        groups: [
          {
            id: 'l3a', type: 'matching', instructions: 'Who will do each task? Choose from the list.',
            options: who,
            questions: [
              { number: 21, text: 'Design the survey' },
              { number: 22, text: 'Interview customers' },
              { number: 23, text: 'Analyse the results' },
              { number: 24, text: 'Make the poster' },
            ],
          },
          {
            id: 'l3b', type: 'mcq-multi', instructions: 'Which TWO products will they study? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'drinks' },
              { value: 'B', label: 'snacks' },
              { value: 'C', label: 'clothing' },
              { value: 'D', label: 'phones' },
              { value: 'E', label: 'shoes' },
            ],
            questions: [{ number: 25 }, { number: 26 }],
          },
          {
            id: 'l3c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 27, text: 'Their target group is', options: [{ value: 'A', label: 'teenagers.' }, { value: 'B', label: 'families.' }, { value: 'C', label: 'retired people.' }] },
              { number: 28, text: 'They aim for a sample of', options: [{ value: 'A', label: '50 people.' }, { value: 'B', label: '100 people.' }, { value: 'C', label: '200 people.' }] },
              { number: 29, text: 'They will use', options: [{ value: 'A', label: 'an online survey.' }, { value: 'B', label: 'phone calls.' }, { value: 'C', label: 'face-to-face interviews only.' }] },
              { number: 30, text: 'They will present the results as', options: [{ value: 'A', label: 'a report.' }, { value: 'B', label: 'graphs.' }, { value: 'C', label: 'a video.' }] },
            ],
          },
        ],
      },
      {
        number: 4,
        heading: 'Questions 31–40',
        context: 'Listen to part of a lecture about coral reefs.',
        transcript:
          "Coral reefs are among the richest ecosystems on Earth. Each coral is a tiny animal that lives together with microscopic algae, which provide it with food through photosynthesis. " +
          "Corals build hard skeletons out of calcium, and over thousands of years these skeletons grow into vast reefs. " +
          "Reefs are vital. They are home to a quarter of all ocean fish. They protect coastlines by absorbing the force of storms. And for many countries they bring in valuable income from tourism. " +
          "Sadly, reefs are under threat. The biggest danger is ocean warming. When the water gets too warm, the coral expels its algae and turns white — a process called bleaching. " +
          "Pollution from the land makes things worse. " +
          "To save reefs, governments are creating marine protected areas, and encouraging more sustainable fishing.",
        groups: [
          {
            id: 'l4', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Write ONE WORD ONLY for each answer.',
            bodyHtml: `
              <div style="font-weight:700;margin-bottom:.4rem">Coral Reefs</div>
              <div style="font-weight:700;margin-top:.6rem">What they are</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>each coral lives with tiny {{31}}</li>
                <li>corals build skeletons from {{32}}</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Why they matter</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>home to many {{33}}</li>
                <li>protect the coast from {{34}}</li>
                <li>bring income from {{35}}</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Threats &amp; solutions</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>main threat is ocean {{36}}</li>
                <li>warm water causes {{37}}</li>
                <li>{{38}} from land makes it worse</li>
                <li>create marine {{39}} areas</li>
                <li>encourage {{40}} fishing</li>
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
      1: 'TRUE', 2: 'TRUE', 3: 'FALSE', 4: 'TRUE', 5: 'FALSE', 6: 'NOT GIVEN',
      7: '105', 8: ['Cai Lun', 'Cai'], 9: 'Arab',
      10: 'parchment', 11: ['animal skin', 'skin'], 12: 'Samarkand', 13: ['printing press', 'the printing press'],
      14: 'i', 15: 'ii', 16: 'iii', 17: 'iv', 18: 'v', 19: 'vi',
      20: 'A', 21: 'B', 22: 'C', 23: 'D', 24: 'B', 25: 'B', 26: 'B',
      27: 'YES', 28: 'NO', 29: 'NO', 30: 'YES', 31: 'NOT GIVEN',
      32: 'B', 33: 'C',
      34: 'mood', 35: 'red', 36: 'appetite', 37: 'restaurants', 38: 'blue', 39: 'trust', 40: ['learned', 'cultural'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The invention of paper',
        html: `
          <p><span class="passage-letter">A</span> Few inventions have shaped human history as quietly as paper. It was invented in China around the year 105, traditionally credited to a court official named Cai Lun, who is said to have perfected a method of making it.</p>
          <p><span class="passage-letter">B</span> The earliest paper was made from plant fibres and old rags, which were soaked, beaten into a pulp, and then pressed and dried into thin sheets. The process was cheap and the result was light and easy to write on.</p>
          <p><span class="passage-letter">C</span> Paper did not travel directly to Europe. Instead it spread first through the Arab world, where the city of Samarkand became an early centre of paper-making, before finally reaching Europe several centuries later.</p>
          <p><span class="passage-letter">D</span> Before paper arrived, Europeans wrote mainly on parchment, which was made from animal skin. Parchment was strong but extremely expensive, so the cheaper paper gradually replaced it. Demand grew enormously once the printing press made books available to ordinary people.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Paper was invented in China.' },
              { number: 2, text: 'The earliest paper was made from plant fibres and rags.' },
              { number: 3, text: 'Paper travelled directly from China to Europe.' },
              { number: 4, text: 'Parchment was made from animal skin.' },
              { number: 5, text: 'Parchment was cheaper than paper.' },
              { number: 6, text: 'The printing press was invented in China.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 7, text: 'Paper was invented around the year ___.' },
              { number: 8, text: 'The invention is credited to a court official named ___.' },
              { number: 9, text: 'Paper spread to Europe through the ___ world.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 10, text: 'What did Europeans mainly write on before paper?' },
              { number: 11, text: 'What was parchment made from?' },
              { number: 12, text: 'Which city was an early centre of paper-making in the Arab world?' },
              { number: 13, text: 'What greatly increased the demand for paper in Europe?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Working in the gig economy',
        html: `
          <p><span class="passage-letter">A</span> Over the past decade a new way of working has spread rapidly. In the so-called "gig economy", people are not employed in steady, long-term jobs but are paid for short tasks — a delivery, a ride, a piece of design work — usually arranged through a smartphone app.</p>
          <p><span class="passage-letter">B</span> For many workers the appeal is freedom. They can choose when and how much to work, fitting jobs around studies, family or another career. This flexibility is, for some, the single greatest advantage.</p>
          <p><span class="passage-letter">C</span> But there is a cost. Gig workers rarely receive the benefits that employees take for granted — paid holidays, sick pay, a pension. Their income can be unpredictable, and in a bad week there is no safety net at all.</p>
          <p><span class="passage-letter">D</span> Businesses, meanwhile, have embraced the model enthusiastically. It lets them expand or shrink their workforce instantly and avoid the cost of permanent staff, which can make a young company far more competitive.</p>
          <p><span class="passage-letter">E</span> All this has provoked a fierce legal argument. Are gig workers genuinely self-employed, as the companies claim, or are they really employees who deserve the same rights? Courts and governments around the world are still wrestling with the question.</p>
          <p><span class="passage-letter">F</span> What happens next is unclear. The gig economy is unlikely to disappear, but it may be reshaped — by new laws, by worker pressure, or by the firms themselves — into something that offers more security than it does today.</p>`,
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
            id: 'r2b', type: 'matching', instructions: 'Match each view with the group it belongs to, A–D.',
            options: groups4,
            questions: [
              { number: 20, text: 'value the freedom to choose their own hours' },
              { number: 21, text: 'save money by avoiding permanent staff' },
              { number: 22, text: 'are debating whether gig workers are employees' },
              { number: 23, text: 'warn that insecurity may harm the wider economy' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'In the gig economy, work is usually arranged through', options: [{ value: 'A', label: 'job centres.' }, { value: 'B', label: 'smartphone apps.' }, { value: 'C', label: 'newspapers.' }] },
              { number: 25, text: 'A drawback for gig workers is', options: [{ value: 'A', label: 'too little flexibility.' }, { value: 'B', label: 'a lack of benefits.' }, { value: 'C', label: 'very high pay.' }] },
              { number: 26, text: 'The central legal question is whether gig workers are', options: [{ value: 'A', label: 'customers.' }, { value: 'B', label: 'employees.' }, { value: 'C', label: 'owners.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The psychology of colour',
        html: `
          <p>Does the colour of a room change how you feel in it? Does the colour of a package make you more likely to buy what is inside? The psychology of colour explores such questions, and although the field is full of bold claims, some careful findings stand out.</p>
          <p>It does seem clear that colours can influence our mood and behaviour, at least a little. Warm colours, and red above all, are associated with energy and excitement. Red is also thought to stimulate the appetite, which is one reason it appears so often in the branding of fast-food restaurants.</p>
          <p>Cooler colours work differently. Blue, in particular, tends to feel calming, and it carries strong associations of trust and reliability. That is why so many banks, insurers and technology companies choose blue for their logos.</p>
          <p>There is an important catch, however. Many of these associations are not universal but are learned within a culture. The colour that signals mourning in one society may signal celebration in another. Context matters enormously too: the very same colour can feel quite different in a hospital and in a nightclub.</p>
          <p>None of this stops marketers from using colour with great care. But scientists caution that many popular claims go well beyond the evidence, and that colour, on its own, is a gentle nudge rather than a hidden lever controlling our choices.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Colours can influence our mood and behaviour.' },
              { number: 28, text: 'The colour red is associated with calmness.' },
              { number: 29, text: 'Colour associations are the same in every culture.' },
              { number: 30, text: 'Businesses choose colours deliberately for their branding.' },
              { number: 31, text: 'Blue is the most popular colour in the world.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO things does the passage associate with the colour blue? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'excitement' },
              { value: 'B', label: 'calmness' },
              { value: 'C', label: 'trust' },
              { value: 'D', label: 'hunger' },
              { value: 'E', label: 'danger' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>Colour can affect our {{34}} and behaviour. {{35}} is linked to excitement and is thought to
              increase {{36}}, which is why it is common in the branding of fast-food {{37}}. {{38}}, by
              contrast, feels calming and suggests {{39}}, so it is favoured by banks. However, many of these
              associations are {{40}} rather than universal.</p>`,
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
          <p>The table below shows the number of visitors (in thousands) to a city museum by age group in
          2010 and 2020.</p>
          <p>Summarise the information by selecting and reporting the main features, and make comparisons
          where relevant.</p>
          <table style="border-collapse:collapse;margin-top:.75rem" border="1">
            <thead><tr><th style="padding:.4rem .8rem">Age group</th><th style="padding:.4rem .8rem">2010</th><th style="padding:.4rem .8rem">2020</th></tr></thead>
            <tbody>
              <tr><td style="padding:.4rem .8rem">Under 18</td><td style="padding:.4rem .8rem;text-align:center">40</td><td style="padding:.4rem .8rem;text-align:center">90</td></tr>
              <tr><td style="padding:.4rem .8rem">18–40</td><td style="padding:.4rem .8rem;text-align:center">120</td><td style="padding:.4rem .8rem;text-align:center">110</td></tr>
              <tr><td style="padding:.4rem .8rem">41–65</td><td style="padding:.4rem .8rem;text-align:center">90</td><td style="padding:.4rem .8rem;text-align:center">100</td></tr>
              <tr><td style="padding:.4rem .8rem">Over 65</td><td style="padding:.4rem .8rem;text-align:center">30</td><td style="padding:.4rem .8rem;text-align:center">70</td></tr>
            </tbody>
          </table>`,
      },
      {
        number: 2, minWords: 250,
        promptHtml: `
          <p>Write about the following topic:</p>
          <p style="font-weight:600">Some people believe that museums and art galleries should be free for
          everyone to enter. Others think visitors should always pay an entrance fee.</p>
          <p>Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or
          experience.</p>`,
      },
    ],
  },
}
