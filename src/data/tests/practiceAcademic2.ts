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

export const practiceAcademic2: IeltsTest = {
  id: 'practice-academic-2',
  title: 'Practice Test 2 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with or endorsed by Cambridge/IELTS.',
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
