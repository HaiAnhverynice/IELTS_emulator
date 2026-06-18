import type { IeltsTest, Option } from '../../types'

// Original reading practice test 9 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headings: Option[] = [
  { value: 'i', label: 'What lies beneath' },
  { value: 'ii', label: 'Different kinds of eruption' },
  { value: 'iii', label: 'Why people live near volcanoes' },
  { value: 'iv', label: 'Predicting an eruption' },
  { value: 'v', label: 'Where volcanoes form' },
  { value: 'vi', label: 'Benefits to the planet' },
  { value: 'vii', label: 'The most famous eruptions' },
  { value: 'viii', label: 'Volcanoes on other worlds' },
  { value: 'ix', label: 'Measuring a volcano’s size' },
]

export const practiceReading9: IeltsTest = {
  id: 'practice-reading-9',
  title: 'Practice Test 9 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'TRUE', 3: 'FALSE', 4: 'NOT GIVEN', 5: 'TRUE', 6: 'FALSE',
      7: 'clay', 8: ['coastlines', 'coasts'], 9: ['compass', 'the compass'], 10: 'satellites',
      11: 'imagination', 12: 'position', 13: 'complexity',
      14: 'v', 15: 'i', 16: 'ii', 17: 'iii', 18: 'iv', 19: 'vi',
      20: 'A', 21: 'C', 22: 'B', 23: 'A',
      24: 'B', 25: 'C', 26: 'A',
      27: 'NO', 28: 'YES', 29: 'YES', 30: 'NOT GIVEN', 31: 'NO',
      32: 'B', 33: 'D',
      34: 'published', 35: 'middle', 36: 'libraries', 37: 'pastime', 38: 'cinema', 39: 'screens', 40: 'attention',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The history of the map',
        html: `
          <p>People have been making maps for far longer than they have been writing. Some of the oldest surviving maps are marks scratched on pieces of clay thousands of years ago, showing rivers, fields and towns. Long before that, it is likely that people drew simple route maps in the sand that have left no trace.</p>
          <p>For most of history, maps were rough and often inaccurate. The shape of distant lands was guessed at, and large blank areas were filled with decoration or imagination. As sailors ventured further, the need for better maps grew, and the careful charting of coastlines became one of the great projects of the age of exploration.</p>
          <p>Accurate mapping depended on new tools. The compass allowed sailors to hold a steady direction out of sight of land, and later instruments let them fix their position more precisely. With each advance, the maps drawn from these measurements came closer to the true shape of the world.</p>
          <p>The change in our own time has been just as dramatic. Today maps are made not by hand but from images taken by satellites, and most people carry a constantly updating map in their pocket. Yet the basic purpose has never altered: a map remains a way of turning the bewildering complexity of the world into something we can hold in the mind.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Maps are older than writing.' },
              { number: 2, text: 'Some very old maps were made on clay.' },
              { number: 3, text: 'Early maps were usually highly accurate.' },
              { number: 4, text: 'Ancient sand maps have been found by archaeologists.' },
              { number: 5, text: 'The compass helped sailors keep a steady direction.' },
              { number: 6, text: 'Modern maps are still drawn mainly by hand.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'Some of the oldest maps were scratched on ___.' },
              { number: 8, text: 'During the age of exploration, sailors carefully charted ___.' },
              { number: 9, text: 'The ___ let sailors hold a direction out of sight of land.' },
              { number: 10, text: 'Modern maps are made from images taken by ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'Besides decoration, what filled the blank areas of early maps?' },
              { number: 12, text: 'What did later instruments help sailors fix more precisely?' },
              { number: 13, text: 'What does a map turn into something we can hold in the mind?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Living with volcanoes',
        html: `
          <p><span class="passage-letter">A</span> Volcanoes are not scattered at random across the globe. Most of them lie along the edges of the great plates that make up the Earth’s surface, where these plates pull apart or grind together. A famous ring of volcanoes, the so-called Ring of Fire, traces the rim of the Pacific Ocean for exactly this reason.</p>
          <p><span class="passage-letter">B</span> To understand an eruption you have to look downward. Deep below the surface, intense heat melts rock into a thick liquid called magma. Lighter than the solid rock around it, the magma rises, collecting in chambers beneath a volcano until the pressure forces it out.</p>
          <p><span class="passage-letter">C</span> Not all eruptions are alike. Where the magma is runny, it flows out gently as rivers of lava that people can sometimes outwalk. Where it is thick and full of gas, the pressure can build until the volcano explodes with terrible force, hurling ash and rock high into the sky.</p>
          <p><span class="passage-letter">D</span> Given the danger, it may seem strange that millions choose to live in a volcano’s shadow. But the ash that volcanoes throw out breaks down into some of the richest farmland on Earth, and volcanic regions also offer minerals and, increasingly, clean geothermal energy. For many communities, the rewards outweigh the risk.</p>
          <p><span class="passage-letter">E</span> Scientists cannot yet say exactly when a volcano will erupt, but they are no longer helpless. By tracking small earthquakes, swelling of the ground and changes in the gases a volcano releases, they can often warn that an eruption is approaching and give people time to leave.</p>
          <p><span class="passage-letter">F</span> Seen on the longest timescale, volcanoes are not merely destroyers. Over billions of years their eruptions helped create the atmosphere and the oceans, and they continue to build new land. The planet we live on is, in a real sense, a volcanic creation.</p>`,
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
            id: 'r2b', type: 'matching', instructions: 'Match each fact with the warning sign or benefit it relates to. Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'small earthquakes' },
              { value: 'B', label: 'rich farmland' },
              { value: 'C', label: 'swelling ground' },
              { value: 'D', label: 'geothermal energy' },
            ],
            questions: [
              { number: 20, text: 'a warning sign caused by magma moving below' },
              { number: 21, text: 'a sign that the surface is being pushed upward' },
              { number: 22, text: 'a benefit produced when ash breaks down' },
              { number: 23, text: 'tracked, along with gases, to predict eruptions' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'Most volcanoes are found', options: [{ value: 'A', label: 'in the centre of oceans.' }, { value: 'B', label: 'along the edges of plates.' }, { value: 'C', label: 'near the poles.' }] },
              { number: 25, text: 'A volcano explodes violently when the magma is', options: [{ value: 'A', label: 'thin and runny.' }, { value: 'B', label: 'cold.' }, { value: 'C', label: 'thick and full of gas.' }] },
              { number: 26, text: 'People live near volcanoes mainly because of', options: [{ value: 'A', label: 'fertile soil and energy.' }, { value: 'B', label: 'the fine views.' }, { value: 'C', label: 'cheaper housing.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The novel and the reading public',
        html: `
          <p>The novel is so familiar a form that it is easy to forget how recent it is. Long stories in prose existed in earlier ages, but the novel as we know it — a book-length work of invented characters and everyday life — took shape only a few hundred years ago, and its rise is bound up with changes in society as much as in literature.</p>
          <p>One common claim should be treated with care. It is often said that the novel was, from the start, a form for the wealthy. In fact the opposite is closer to the truth: many early novels were aimed at a broad audience, and some of the most popular were published in cheap instalments, a chapter at a time, so that even readers of modest means could follow a long story week by week.</p>
          <p>The growth of the reading public made this possible. As more people learned to read and as a prosperous middle class expanded, the demand for stories grew. Circulating libraries, which lent books for a small fee, put novels within reach of those who could not afford to buy them, and reading became a popular pastime rather than a privilege.</p>
          <p>The form has faced rivals ever since. When the cinema arrived, and later television, many predicted that the novel would fade away as audiences turned to moving pictures. It did not happen; if anything, popular films and series have sent readers back to the books behind them.</p>
          <p>Today the challenge is different. The endless distractions of glowing screens, and the short bursts of text they encourage, are said to be eroding our patience for a long book. Whether the novel survives this latest rival may depend less on the form itself than on whether readers can still summon the sustained attention that a novel demands.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'The novel was always a form intended only for the rich.' },
              { number: 28, text: 'Some early novels were published a chapter at a time.' },
              { number: 29, text: 'Circulating libraries helped spread the reading of novels.' },
              { number: 30, text: 'Television caused more harm to the novel than cinema did.' },
              { number: 31, text: 'The arrival of cinema made the novel disappear.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO things does the passage link to the rise of the novel? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'the invention of cinema' },
              { value: 'B', label: 'a growing middle class' },
              { value: 'C', label: 'falling literacy' },
              { value: 'D', label: 'circulating libraries' },
              { value: 'E', label: 'the disappearance of poetry' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Many early novels reached ordinary readers because they were {{34}} in cheap instalments. The
              growth of a prosperous {{35}} class increased demand, and circulating {{36}} lent books to those
              who could not buy them, turning reading into a popular {{37}}. Later the {{38}} was
              expected to kill the novel, but did not. Today the distraction of glowing {{39}} threatens the
              sustained {{40}} that a long book requires.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
