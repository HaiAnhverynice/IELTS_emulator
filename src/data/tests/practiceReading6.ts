import type { IeltsTest, Option } from '../../types'

// Original reading practice test 6 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headings: Option[] = [
  { value: 'i', label: 'Cooling the urban environment' },
  { value: 'ii', label: 'A boost to the body' },
  { value: 'iii', label: 'Defining the urban green space' },
  { value: 'iv', label: 'Calmer minds' },
  { value: 'v', label: 'Unequal access to nature' },
  { value: 'vi', label: 'Planning greener cities' },
  { value: 'vii', label: 'The cost of maintenance' },
  { value: 'viii', label: 'Wildlife in the city' },
  { value: 'ix', label: 'A short history of parks' },
]

const benefit: Option[] = [
  { value: 'A', label: 'physical health' },
  { value: 'B', label: 'mental health' },
  { value: 'C', label: 'the environment' },
  { value: 'D', label: 'the community' },
]

export const practiceReading6: IeltsTest = {
  id: 'practice-reading-6',
  title: 'Practice Test 6 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'FALSE', 5: 'TRUE', 6: 'NOT GIVEN',
      7: ['Shen Nong', 'Shennong'], 8: 'Tang', 9: 'Assam', 10: ['taxes', 'tax'],
      11: ['Dutch traders', 'the Dutch', 'Dutch'], 12: 'China', 13: ['Chinese monopoly', 'monopoly'],
      14: 'iii', 15: 'ii', 16: 'iv', 17: 'i', 18: 'v', 19: 'vi',
      20: 'C', 21: 'B', 22: 'A', 23: 'D',
      24: 'B', 25: 'B', 26: 'B',
      27: 'YES', 28: 'NO', 29: 'YES', 30: 'NO', 31: 'NOT GIVEN',
      32: 'A', 33: 'D',
      34: 'REM', 35: ['tissue', 'tissues'], 36: 'immune', 37: 'memory', 38: 'concentration', 39: ['disease', 'illness', 'diseases'], 40: 'screens',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The story of tea',
        html: `
          <p>Tea is, after water, the most widely drunk beverage on Earth, yet its origins lie thousands of years in the past. According to a Chinese legend, the drink was discovered by the Emperor Shen Nong around 2737 BC, when leaves from a wild bush blew into a pot of water he was boiling.</p>
          <p>Whatever the truth of the legend, tea-drinking was certainly well established in China by the Tang dynasty, when it had become an everyday drink rather than a medicine or a luxury. From China the habit spread slowly outward, first to neighbouring countries such as Japan and only much later to the West.</p>
          <p>Europe did not taste tea until the early seventeenth century, when Dutch traders carried the first chests back from Asia. The drink reached Britain a few decades afterwards. There it was at first extremely expensive, partly because the government placed very high taxes on it, and as a result smuggling became widespread.</p>
          <p>For a long time China was the world's only major source of tea, a position that gave it enormous commercial power. In the nineteenth century the British, eager to break this dependence, began growing tea on a large scale in the Assam region of India. Indian plantations soon supplied much of the tea drunk in Britain.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Tea was first drunk in China.' },
              { number: 2, text: 'Tea reached Europe in the fifteenth century.' },
              { number: 3, text: 'Dutch traders first brought tea to Europe.' },
              { number: 4, text: 'Tea was cheap when it first arrived in Britain.' },
              { number: 5, text: 'High taxes led to the smuggling of tea in Britain.' },
              { number: 6, text: 'By 1850 India produced more tea than China.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 7, text: 'Legend says tea was discovered by the Emperor ___.' },
              { number: 8, text: 'Tea had become an everyday drink by the ___ dynasty.' },
              { number: 9, text: 'The British grew tea in the ___ region of India.' },
              { number: 10, text: 'Smuggling spread because of the high ___ placed on tea.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 11, text: 'Who carried the first tea to Europe?' },
              { number: 12, text: 'In which country did tea-drinking begin?' },
              { number: 13, text: 'What did Britain want to break by growing tea in India?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Green spaces in the city',
        html: `
          <p><span class="passage-letter">A</span> An urban green space is any vegetated land within a city that is open to people — a park, a garden, a tree-lined avenue, even a planted roof. Planners increasingly treat such spaces not as decoration but as essential infrastructure, as important to a city as its roads or its water pipes.</p>
          <p><span class="passage-letter">B</span> Part of the reason is what green space does for the body. People who live near parks are more likely to walk, run and cycle, and regular contact with green surroundings is linked to lower blood pressure and a reduced risk of several chronic illnesses.</p>
          <p><span class="passage-letter">C</span> The effect on the mind may be just as strong. Even a short walk among trees has been shown to lower stress and anxiety, and views of greenery from a window are associated with better concentration and a brighter mood.</p>
          <p><span class="passage-letter">D</span> Green spaces also work on the city itself. Trees provide shade and release moisture into the air, so leafy districts can be several degrees cooler than bare concrete ones during a summer heatwave — a growing concern as the climate warms.</p>
          <p><span class="passage-letter">E</span> These benefits, however, are not shared equally. In many cities the wealthiest neighbourhoods enjoy generous parks and gardens, while poorer ones have little more than a few scattered trees, so the people who might gain the most from green space often have the least.</p>
          <p><span class="passage-letter">F</span> For all these reasons, a growing number of cities now set targets for tree cover and protect existing parks by law. Designing greenery into a city from the start, rather than adding it as an afterthought, is becoming a mark of good urban planning.</p>`,
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
            id: 'r2b', type: 'matching', instructions: 'Which benefit does each statement describe? Choose from the list, A–D.',
            options: benefit,
            questions: [
              { number: 20, text: 'lowers the temperature of a district in summer' },
              { number: 21, text: 'reduces stress and anxiety' },
              { number: 22, text: 'encourages people to take exercise' },
              { number: 23, text: 'gives neighbours a place to meet' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'According to the passage, access to green space is', options: [{ value: 'A', label: 'equal across a city.' }, { value: 'B', label: 'often unequal.' }, { value: 'C', label: 'improving everywhere.' }] },
              { number: 25, text: 'Trees help cool cities mainly by', options: [{ value: 'A', label: 'blocking the wind.' }, { value: 'B', label: 'giving shade and releasing moisture.' }, { value: 'C', label: 'absorbing traffic noise.' }] },
              { number: 26, text: 'The writer suggests that future cities should', options: [{ value: 'A', label: 'remove old parks.' }, { value: 'B', label: 'plan in more green space.' }, { value: 'C', label: 'build taller blocks.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Why we sleep',
        html: `
          <p>We spend about a third of our lives asleep, and for centuries this seemed like wasted time. Modern science tells a very different story: far from shutting down, the sleeping brain and body are busy with work that cannot be done while we are awake.</p>
          <p>Sleep is not a single state but a series of cycles, each made up of light sleep, deep sleep and a stage known as REM sleep, in which most dreaming occurs. During deep sleep the body repairs tissue and strengthens the immune system, while the brain uses both deep and REM sleep to move the day's experiences into long-term memory. This is why a good night's sleep before an exam is worth more than another hour of revision.</p>
          <p>How much sleep we need is often misunderstood. The figure of eight hours is only an average; the real requirement varies from person to person, and a few people function well on noticeably less. A short afternoon nap, far from being lazy, can restore alertness and is recommended by many sleep researchers.</p>
          <p>The costs of going without sleep are serious. Even one poor night harms concentration and mood, and long-term sleep loss has been linked to a higher risk of disease. Light from phones and computers is a common culprit, because it can trick the brain into thinking it is still daytime.</p>
          <p>For better sleep, experts give the same simple advice: keep a regular schedule, going to bed and waking at similar times, and avoid bright screens in the hour before bed. Dreaming itself remains only partly understood, but the value of the sleep that surrounds it is no longer in doubt.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Sleep helps the brain store memories.' },
              { number: 28, text: 'Everyone needs exactly eight hours of sleep.' },
              { number: 29, text: 'Screens before bed can disturb sleep.' },
              { number: 30, text: 'Afternoon naps are harmful for adults.' },
              { number: 31, text: 'People sleep less now than they did a century ago.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO effects of poor sleep are mentioned? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'weakened concentration' },
              { value: 'B', label: 'improved eyesight' },
              { value: 'C', label: 'a stronger immune system' },
              { value: 'D', label: 'a higher risk of disease' },
              { value: 'E', label: 'faster reflexes' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Sleep runs in cycles of light sleep, deep sleep and {{34}} sleep, when most dreaming
              happens. During deep sleep the body repairs {{35}} and strengthens the {{36}} system, and
              the brain moves experiences into long-term {{37}}. A lack of sleep harms {{38}} and mood and
              raises the risk of {{39}}. Experts advise keeping a regular schedule and avoiding bright
              {{40}} before bed.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
