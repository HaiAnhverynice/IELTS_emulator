import type { IeltsTest, Option } from '../../types'

// Original reading practice test 16 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const sleepHeadings: Option[] = [
  { value: 'i', label: 'Sleep in the animal world' },
  { value: 'ii', label: 'Sleep and memory' },
  { value: 'iii', label: 'How modern life disturbs sleep' },
  { value: 'iv', label: "What happens during a night's sleep" },
  { value: 'v', label: 'Medicines that help people sleep' },
  { value: 'vi', label: 'The risks of too little sleep' },
  { value: 'vii', label: 'A mystery solved by new technology' },
  { value: 'viii', label: 'Different needs at different ages' },
  { value: 'ix', label: 'Dreams and their meanings' },
]

export const practiceReading16: IeltsTest = {
  id: 'practice-reading-16',
  title: 'Practice Test 16 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'FALSE', 6: 'TRUE',
      7: ['baron'], 8: ['front'], 9: ['chain'], 10: ['skirts'],
      11: ['1880s', 'the 1880s'], 12: ['boneshaker', 'the boneshaker'], 13: ['electric bicycles'],
      14: 'vii', 15: 'iv', 16: 'ii', 17: 'viii', 18: 'iii', 19: 'vi',
      20: 'A', 21: 'E', 22: 'F', 23: 'C',
      24: 'B', 25: 'C', 26: 'A',
      27: 'NO', 28: 'YES', 29: 'NOT GIVEN', 30: 'YES', 31: 'NO',
      32: 'A', 33: 'C',
      34: 'far', 35: 'community', 36: 'soil', 37: 'pollution', 38: 'electricity', 39: 'expensive', 40: 'herbs',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The humble bicycle',
        html: `
          <p>The bicycle is so familiar that it is easy to forget how recently it was invented. For most of history, people who wanted to travel faster than walking pace depended on animals. The first machine to change that was the running machine built by a German baron, Karl von Drais, in 1817. It had two wheels in a line and a wooden frame, but no pedals; riders pushed themselves along with their feet on the ground.</p>
          <p>Pedals arrived in the 1860s, when French workshops fixed them directly to the front wheel. The machine was nicknamed the boneshaker because of its iron-rimmed wooden wheels. It was uncomfortable, but it proved that people wanted personal transport. Later makers enlarged the front wheel so that each turn of the pedals covered more ground, producing the high-wheeled penny-farthing. It was fast, but dangerous: a rider sat so high above the ground that a sudden stop could throw him over the handlebars.</p>
          <p>The breakthrough came in the 1880s with the safety bicycle. Its two wheels were of equal size, and a chain carried power from the pedals to the rear wheel, so the rider could sit low and close to the ground. When the pneumatic tyre, filled with air, was added a few years later, the ride became smoother as well as safer. Within a decade, bicycles were being sold in huge numbers.</p>
          <p>The social effects were far-reaching. Cycling gave ordinary workers a cheap way to travel to jobs beyond walking distance, allowing them to live further from the factories. It also gave women a new freedom of movement, and campaigners for women's rights praised the bicycle as an engine of independence. Fashion changed too, as long heavy skirts proved impractical for riding.</p>
          <p>In the twentieth century the bicycle lost ground to the car in many wealthy countries, but it has never disappeared. In parts of Asia and Africa it remains the main means of transport for millions of families. In recent years cities concerned about pollution and traffic have built cycle lanes and hire schemes, while electric bicycles have made cycling possible for people who once found hills too difficult.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The first two-wheeled machine had no pedals.', evidence: 'It had two wheels in a line and a wooden frame, but no pedals' },
              { number: 2, text: 'The boneshaker was comfortable to ride.', evidence: 'It was uncomfortable, but it proved that people wanted personal transport.' },
              { number: 3, text: 'Penny-farthing riders risked being thrown forward over the handlebars.', evidence: 'a sudden stop could throw him over the handlebars' },
              { number: 4, text: 'The safety bicycle cost less than the penny-farthing.' },
              { number: 5, text: 'The pneumatic tyre was invented before the safety bicycle.', evidence: 'When the pneumatic tyre, filled with air, was added a few years later' },
              { number: 6, text: 'Campaigners for women\u2019s rights welcomed the bicycle.', evidence: "campaigners for women's rights praised the bicycle as an engine of independence" },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'The first running machine was built by a German ___.', evidence: 'the running machine built by a German baron, Karl von Drais, in 1817' },
              { number: 8, text: 'The earliest pedals were fixed to the ___ wheel.', evidence: 'French workshops fixed them directly to the front wheel' },
              { number: 9, text: 'On the safety bicycle, power travelled to the rear wheel by a ___.', evidence: 'a chain carried power from the pedals to the rear wheel' },
              { number: 10, text: 'Long, heavy ___ were impractical for riding.', evidence: 'long heavy skirts proved impractical for riding' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 11, text: 'In which decade did the safety bicycle appear?', evidence: 'The breakthrough came in the 1880s with the safety bicycle.' },
              { number: 12, text: 'What nickname was given to the early pedal machine?', evidence: 'The machine was nicknamed the boneshaker' },
              { number: 13, text: 'What has made cycling possible for people who found hills too difficult?', evidence: 'electric bicycles have made cycling possible for people who once found hills too difficult' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Why we sleep',
        html: `
          <p><span class="passage-letter">A</span> For something that takes up a third of our lives, sleep remained a mystery until the twentieth century. Many people assumed the brain simply switched off at night. In the 1950s, however, researchers recording brain activity discovered that sleep is divided into distinct stages, and that the brain is highly active during some of them.</p>
          <p><span class="passage-letter">B</span> A night's sleep is made up of cycles lasting about ninety minutes each. In the lighter stages, heart rate and body temperature fall. In deep sleep, the body repairs tissue and strengthens the immune system. Dreaming occurs mainly in rapid eye movement, or REM, sleep, when the brain's activity resembles that of waking life but the muscles are almost completely relaxed.</p>
          <p><span class="passage-letter">C</span> One of the most important jobs of sleep is the processing of memories. Experiments show that students who sleep after learning new material remember more of it than those who stay awake. It seems that during sleep the brain replays the day's experiences and stores the important ones, discarding what it does not need.</p>
          <p><span class="passage-letter">D</span> Not everybody needs the same amount of sleep. Most adults function best on between seven and nine hours, but teenagers need more, partly because their body clocks shift later during adolescence. This is one reason why some schools that have started lessons later in the morning have reported better results and fewer absences.</p>
          <p><span class="passage-letter">E</span> Modern life, however, often works against sleep. Artificial light, especially the blue light from screens, tricks the brain into believing it is still daytime and delays the release of melatonin, the hormone that makes us feel drowsy. Shift work, long commutes and constant notifications add to the problem.</p>
          <p><span class="passage-letter">F</span> The consequences of too little sleep are serious. Tired people make more mistakes, react more slowly and find it harder to control their emotions. Over the long term, poor sleep is linked with heart disease and diabetes. Doctors therefore advise keeping regular hours, avoiding screens before bed and keeping the bedroom cool and dark.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F, from the list of headings below.',
            options: sleepHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'researchers recording brain activity discovered that sleep is divided into distinct stages' },
              { number: 15, text: 'Paragraph B', evidence: "A night's sleep is made up of cycles lasting about ninety minutes each." },
              { number: 16, text: 'Paragraph C', evidence: 'One of the most important jobs of sleep is the processing of memories.' },
              { number: 17, text: 'Paragraph D', evidence: 'Not everybody needs the same amount of sleep.' },
              { number: 18, text: 'Paragraph E', evidence: 'Modern life, however, often works against sleep.' },
              { number: 19, text: 'Paragraph F', evidence: 'The consequences of too little sleep are serious.' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Which paragraph contains the following information? Choose the correct letter, A–F.',
            options: ['A', 'B', 'C', 'D', 'E', 'F'].map((l) => ({ value: l, label: `Paragraph ${l}` })),
            questions: [
              { number: 20, text: 'the use of recording equipment to study the brain', evidence: 'researchers recording brain activity discovered that sleep is divided into distinct stages' },
              { number: 21, text: 'a hormone that makes people feel sleepy', evidence: 'delays the release of melatonin, the hormone that makes us feel drowsy' },
              { number: 22, text: 'advice on healthier sleeping habits', evidence: 'Doctors therefore advise keeping regular hours, avoiding screens before bed and keeping the bedroom cool and dark' },
              { number: 23, text: 'the effect of sleep on student learning', evidence: 'students who sleep after learning new material remember more of it than those who stay awake' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'Research in the 1950s showed that during sleep the brain is', evidence: 'the brain is highly active during some of them', options: [{ value: 'A', label: 'completely inactive.' }, { value: 'B', label: 'very active in some stages.' }, { value: 'C', label: 'identical to the waking brain.' }] },
              { number: 25, text: 'During REM sleep, the muscles are', evidence: 'the muscles are almost completely relaxed', options: [{ value: 'A', label: 'tense and ready to move.' }, { value: 'B', label: 'repairing damaged tissue.' }, { value: 'C', label: 'almost completely relaxed.' }] },
              { number: 26, text: 'Some schools that start lessons later have reported', evidence: 'have reported better results and fewer absences', options: [{ value: 'A', label: 'better results and fewer absences.' }, { value: 'B', label: 'a shorter school day.' }, { value: 'C', label: 'less homework for teenagers.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Farming in the city',
        html: `
          <p>By 2050 about two thirds of the world's people are expected to live in cities, and feeding them is already a challenge. Most food is grown far from where it is eaten, and transporting it uses fuel, adds cost and means that fresh produce may be several days old by the time it reaches the shop. Some city planners believe that part of the answer lies in growing food inside cities themselves.</p>
          <p>Urban farming takes many forms. The simplest are community gardens, where residents use vacant plots or rooftops to grow vegetables for their own tables. More ambitious are vertical farms, in which crops are stacked in layers inside warehouses and grown under artificial light, without soil, using nutrient-rich water. Because the temperature, light and water are all controlled, such farms can produce harvests all year round and use far less water than traditional fields.</p>
          <p>Supporters point to several advantages. Food grown near its customers needs little transport, which cuts pollution, and it reaches the table fresher. Green roofs and gardens also help to cool buildings and absorb rainwater, and they give city dwellers, especially children, a chance to learn where food comes from. In some neighbourhoods with few shops selling fresh produce, community growing has improved the local diet.</p>
          <p>Critics, however, doubt that cities can ever feed themselves. Vertical farms consume a great deal of electricity for lighting, and unless that power comes from renewable sources, the environmental benefits may be smaller than claimed. Setting up a farm indoors is also expensive, and a number of companies have closed after failing to make a profit. Moreover, the crops that grow best indoors, such as salad leaves and herbs, provide few calories; staple foods like wheat and rice need so much space that they are unlikely to be grown in cities.</p>
          <p>Most experts therefore see urban farming as a supplement rather than a replacement for conventional agriculture. It may not feed a whole city, but it can supply fresh, local produce, reduce waste and reconnect people with the land. Its greatest value, some argue, may be educational: a generation that has grown a tomato on a balcony may take more interest in how its food is produced.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Most food is grown close to where it is eaten.', evidence: 'Most food is grown far from where it is eaten' },
              { number: 28, text: 'Vertical farms can produce harvests throughout the year.', evidence: 'such farms can produce harvests all year round' },
              { number: 29, text: 'Community gardens should receive government funding.' },
              { number: 30, text: 'The environmental benefit of vertical farms depends on how their electricity is generated.', evidence: 'unless that power comes from renewable sources, the environmental benefits may be smaller than claimed' },
              { number: 31, text: 'Staple crops such as wheat are likely to be grown in cities soon.', evidence: 'staple foods like wheat and rice need so much space that they are unlikely to be grown in cities' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO benefits of urban farming does the writer mention? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'less pollution from transport' },
              { value: 'B', label: 'cheaper food in the shops' },
              { value: 'C', label: 'help in cooling buildings' },
              { value: 'D', label: 'higher calorie yields than fields' },
              { value: 'E', label: 'extra income for rural farmers' },
            ],
            questions: [
              { number: 32, evidence: 'Food grown near its customers needs little transport, which cuts pollution' },
              { number: 33, evidence: 'Green roofs and gardens also help to cool buildings and absorb rainwater' },
            ],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Most food is grown {{34}} from the cities where it is eaten. Urban farms try to solve this problem, from
              simple {{35}} gardens to vertical farms that grow crops without {{36}} under artificial light. Supporters say
              they reduce {{37}} and give fresher produce. However, indoor farms use a great deal of {{38}} and are
              {{39}} to set up. They mostly grow salad leaves and {{40}}, so experts regard them as a supplement to
              conventional farming rather than a replacement.</p>`,
            questions: [
              { number: 34, evidence: 'Most food is grown far from where it is eaten' },
              { number: 35, evidence: 'The simplest are community gardens' },
              { number: 36, evidence: 'grown under artificial light, without soil' },
              { number: 37, evidence: 'Food grown near its customers needs little transport, which cuts pollution' },
              { number: 38, evidence: 'Vertical farms consume a great deal of electricity for lighting' },
              { number: 39, evidence: 'Setting up a farm indoors is also expensive' },
              { number: 40, evidence: 'such as salad leaves and herbs' },
            ],
          },
        ],
      },
    ],
  },
}
