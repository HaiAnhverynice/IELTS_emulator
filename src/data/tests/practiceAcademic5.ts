import type { IeltsTest, Option } from '../../types'

// Original practice test 5 (Academic). CC0. Not affiliated with Cambridge/IELTS.

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

export const practiceAcademic5: IeltsTest = {
  id: 'practice-academic-5',
  title: 'Practice Test 5 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',
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
