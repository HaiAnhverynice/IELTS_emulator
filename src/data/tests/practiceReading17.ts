import type { IeltsTest } from '../../types'

// Original reading practice test 17 (Academic). CC0. Not affiliated with Cambridge/IELTS.

export const practiceReading17: IeltsTest = {
  id: 'practice-reading-17',
  title: 'Practice Test 17 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'FALSE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'TRUE',
      6: ['nets', 'fishing nets'], 7: 'screen', 8: 'dry', 9: ['Chinese', 'the Chinese'],
      10: 'B', 11: 'A', 12: 'B', 13: 'A',
      14: 'C', 15: 'E', 16: 'B', 17: 'F', 18: 'D',
      19: 'accent', 20: 'reading', 21: 'foolish', 22: 'attention',
      23: 'B', 24: 'A', 25: 'B', 26: 'C',
      27: 'B', 28: 'A', 29: 'C', 30: 'A', 31: 'C',
      32: 'TRUE', 33: 'NOT GIVEN', 34: 'FALSE', 35: 'TRUE',
      36: 'microbeads', 37: ['filters', 'filter'], 38: 'seaweed', 39: 'produce', 40: ['oceans', 'the oceans'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The story of paper',
        html: `
          <p>Before paper, people wrote on whatever came to hand: clay tablets in Mesopotamia, papyrus reeds in Egypt, and animal skins prepared as parchment in Europe. Each had drawbacks. Clay was heavy, papyrus cracked when it was folded, and parchment was so costly that a single book could require the skins of dozens of sheep.</p>
          <p>Paper was invented in China, and tradition credits an official named Cai Lun with presenting the process to the emperor in the year 105. Archaeologists have since found fragments of older paper, so Cai Lun may have improved the method rather than invented it. He is said to have mixed mulberry bark, old rags and fishing nets with water, beaten into a pulp, spread across a screen and left to dry into a thin sheet.</p>
          <p>For about six centuries the Chinese kept the secret of papermaking. It spread west only after 751, when Arab forces defeated a Chinese army near the city of Samarkand and captured craftsmen who knew the technique. Paper mills soon appeared in Baghdad, and from there the knowledge travelled through Egypt and North Africa to Spain, reaching Italy in the thirteenth century.</p>
          <p>Paper remained expensive until the invention of the printing press in the fifteenth century raised demand. Rags, the main ingredient, were in short supply, and manufacturers searched for alternatives. In the 1840s a German weaver, Friedrich Keller, developed a machine that ground wood into pulp, and since trees were abundant, paper became cheap enough for newspapers and school books.</p>
          <p>Today paper is again at a crossroads. Digital screens have reduced the use of paper for letters and newspapers, yet the amount of packaging made from paper has grown with online shopping. Recycling is now widespread, and in some countries more than two thirds of paper is reused.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Parchment was an inexpensive writing material.', evidence: 'parchment was so costly that a single book could require the skins of dozens of sheep' },
              { number: 2, text: 'Cai Lun is the only person known to have made paper before the year 105.', evidence: 'Archaeologists have since found fragments of older paper' },
              { number: 3, text: 'Chinese papermakers were captured by Arab forces near Samarkand.', evidence: 'captured craftsmen who knew the technique' },
              { number: 4, text: 'The first European paper mill was built in Spain.' },
              { number: 5, text: 'The use of wood pulp made paper cheaper.', evidence: 'paper became cheap enough for newspapers and school books' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>How paper was made</strong></p>
              <ul>
                <li>Mulberry bark, old rags and fishing {{6}} were mixed with water and beaten into a pulp.</li>
                <li>The pulp was spread across a {{7}} and left to {{8}} into a thin sheet.</li>
                <li>The secret of papermaking was kept by the {{9}} for about six centuries.</li>
              </ul>`,
            questions: [
              { number: 6, evidence: 'mixed mulberry bark, old rags and fishing nets with water' },
              { number: 7, evidence: 'spread across a screen and left to dry into a thin sheet' },
              { number: 8, evidence: 'spread across a screen and left to dry into a thin sheet' },
              { number: 9, evidence: 'For about six centuries the Chinese kept the secret of papermaking' },
            ],
          },
          {
            id: 'r1c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 10, text: 'Papyrus was unsuitable for books because it', evidence: 'papyrus cracked when it was folded', options: [{ value: 'A', label: 'was too heavy.' }, { value: 'B', label: 'cracked when folded.' }, { value: 'C', label: 'was too expensive.' }] },
              { number: 11, text: 'What does the writer suggest about Cai Lun?', evidence: 'Cai Lun may have improved the method rather than invented it', options: [{ value: 'A', label: 'He may have improved an existing method.' }, { value: 'B', label: 'He kept the process secret from the emperor.' }, { value: 'C', label: 'He was the first to use mulberry bark.' }] },
              { number: 12, text: 'Paper reached Italy in the', evidence: 'reaching Italy in the thirteenth century', options: [{ value: 'A', label: 'eighth century.' }, { value: 'B', label: 'thirteenth century.' }, { value: 'C', label: 'fifteenth century.' }] },
              { number: 13, text: 'Why did manufacturers search for new ingredients?', evidence: 'Rags, the main ingredient, were in short supply', options: [{ value: 'A', label: 'Rags were in short supply.' }, { value: 'B', label: 'Trees were no longer available.' }, { value: 'C', label: 'Printers demanded thicker paper.' }] },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The language-learning brain',
        html: `
          <p><span class="passage-letter">A</span> It is often said that children learn languages effortlessly while adults struggle. There is some truth in this: young children exposed to a second language usually end up speaking it with a native accent, something few adults achieve. But the picture is more complicated than the popular saying suggests.</p>
          <p><span class="passage-letter">B</span> Researchers once believed in a critical period ending around puberty, after which language learning became impossible. Evidence has weakened that idea. Adults can reach a high level of grammar and vocabulary, and in the early stages of study they often progress faster than children because they can use reading skills and understand explicit rules.</p>
          <p><span class="passage-letter">C</span> What children do have is time and immersion. A young child may hear a language for ten hours a day, in play with other children, and is rarely embarrassed by mistakes. Adults typically study for a few hours a week and worry about sounding foolish, which can stop them from speaking at all.</p>
          <p><span class="passage-letter">D</span> Brain scans suggest that those who learn a second language when young process both languages in overlapping areas of the brain, while late learners tend to use separate regions. Researchers are still unsure what this difference means for fluency.</p>
          <p><span class="passage-letter">E</span> Learning a second language may also benefit the brain in other ways. Studies of bilingual people suggest that they are better at switching attention between tasks, and some research indicates that bilingualism can delay the symptoms of dementia by several years, although not all scientists accept these findings.</p>
          <p><span class="passage-letter">F</span> The practical lesson for adults is encouraging. Regular practice, plenty of listening, and a willingness to make mistakes matter more than age. Those who study for short periods each day generally do better than those who cram once a week.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching', instructions: 'Which paragraph contains the following information? Choose the correct letter, A–F.',
            options: ['A', 'B', 'C', 'D', 'E', 'F'].map((l) => ({ value: l, label: `Paragraph ${l}` })),
            questions: [
              { number: 14, text: 'a comparison of the time children and adults spend using a language', evidence: 'A young child may hear a language for ten hours a day' },
              { number: 15, text: 'a claim that not all scientists accept', evidence: 'although not all scientists accept these findings' },
              { number: 16, text: 'a belief that has been weakened by evidence', evidence: 'Evidence has weakened that idea.' },
              { number: 17, text: 'advice about how often to practise', evidence: 'Those who study for short periods each day generally do better than those who cram once a week.' },
              { number: 18, text: 'a difference in how the brain handles a second language', evidence: 'late learners tend to use separate regions' },
            ],
          },
          {
            id: 'r2b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 19, text: 'Young children usually speak a second language with a native ___.', evidence: 'usually end up speaking it with a native accent' },
              { number: 20, text: 'In the early stages, adults can make use of their ___ skills.', evidence: 'they can use reading skills and understand explicit rules' },
              { number: 21, text: 'Adults often worry about sounding ___.', evidence: 'worry about sounding foolish' },
              { number: 22, text: 'Bilingual people are better at switching ___ between tasks.', evidence: 'they are better at switching attention between tasks' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 23, text: 'The writer says the popular saying about children and languages is', evidence: 'There is some truth in this', options: [{ value: 'A', label: 'completely false.' }, { value: 'B', label: 'partly true.' }, { value: 'C', label: 'proved by brain scans.' }] },
              { number: 24, text: 'What do children have that adults usually lack?', evidence: 'What children do have is time and immersion.', options: [{ value: 'A', label: 'time and immersion' }, { value: 'B', label: 'a better memory' }, { value: 'C', label: 'better teachers' }] },
              { number: 25, text: 'Brain scans show that late learners tend to', evidence: 'late learners tend to use separate regions', options: [{ value: 'A', label: 'use overlapping brain areas for both languages.' }, { value: 'B', label: 'use separate regions for each language.' }, { value: 'C', label: 'use only one language area.' }] },
              { number: 26, text: 'Which approach does the writer recommend for adult learners?', evidence: 'Those who study for short periods each day generally do better than those who cram once a week.', options: [{ value: 'A', label: 'one long weekly session' }, { value: 'B', label: 'studying grammar only' }, { value: 'C', label: 'short periods of study every day' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Plastic in the oceans',
        html: `
          <p>Plastic has been mass-produced for only about seventy years, yet it is now found almost everywhere on Earth, from the deepest ocean trenches to the snow of high mountains. Much of the visible waste, such as bottles and fishing nets, is gradually broken down by sunlight and waves into fragments smaller than five millimetres. These fragments are known as microplastics.</p>
          <p>Microplastics also enter the environment directly. Tiny beads were once added to some face washes and toothpastes, and synthetic clothing sheds thousands of fibres in every wash. Because water treatment works cannot capture all of these particles, many pass into rivers and eventually the sea.</p>
          <p>Marine biologist Dr Amara Okoye has studied plankton-eating fish and found plastic in the stomachs of nearly a third of them. In her view, the greatest concern is that microplastics enter the food chain at its base, so that the effects could be felt by every animal above. Professor Lars Jensen, a chemist, is more interested in what the particles carry. He points out that plastics soak up pollutants from seawater like a sponge, which means that a fish swallowing a fragment may also absorb the poisons stuck to it. Dr Mei Tan, who researches public health, takes a more cautious view. Microplastics have been found in drinking water, salt and even human blood, she says, but there is not yet enough evidence to show that they harm human health, and she warns against alarm until better studies are completed.</p>
          <p>Solutions are being tried at several levels. Several countries have banned microbeads in cosmetics, and some washing machine manufacturers are testing filters that trap fibres. Inventors are developing materials made from seaweed that break down harmlessly. Yet most experts agree that the most effective step is to produce less plastic and recover more of what we use, since cleaning the oceans once the particles are there is almost impossible.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Match each statement with the correct scientist, A, B or C. You may use any letter more than once.',
            options: [
              { value: 'A', label: 'Dr Amara Okoye' },
              { value: 'B', label: 'Professor Lars Jensen' },
              { value: 'C', label: 'Dr Mei Tan' },
            ],
            questions: [
              { number: 27, text: 'Plastics may carry harmful substances into the animals that eat them.', evidence: 'a fish swallowing a fragment may also absorb the poisons stuck to it' },
              { number: 28, text: 'The effects of microplastics could spread through the whole food chain.', evidence: 'the effects could be felt by every animal above' },
              { number: 29, text: 'More evidence is needed before conclusions about human health can be drawn.', evidence: 'there is not yet enough evidence to show that they harm human health' },
              { number: 30, text: 'Plastic has been found in the stomachs of small fish.', evidence: 'found plastic in the stomachs of nearly a third of them' },
              { number: 31, text: 'People should not be alarmed until better studies exist.', evidence: 'she warns against alarm until better studies are completed' },
            ],
          },
          {
            id: 'r3b', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 32, text: 'Microplastics are plastic fragments smaller than five millimetres.', evidence: 'fragments smaller than five millimetres' },
              { number: 33, text: 'Synthetic clothing is the largest single source of microplastics.' },
              { number: 34, text: 'Water treatment works capture all microplastic particles.', evidence: 'water treatment works cannot capture all of these particles' },
              { number: 35, text: 'Microplastics have been found in human blood.', evidence: 'Microplastics have been found in drinking water, salt and even human blood' },
            ],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Several countries have banned {{36}} in cosmetics, while manufacturers are testing {{37}} for washing
              machines. Inventors are also developing materials made from {{38}} that break down harmlessly. Experts
              nevertheless argue that the best approach is to {{39}} less plastic, because removing particles from the
              {{40}} is almost impossible.</p>`,
            questions: [
              { number: 36, evidence: 'Several countries have banned microbeads in cosmetics' },
              { number: 37, evidence: 'some washing machine manufacturers are testing filters that trap fibres' },
              { number: 38, evidence: 'materials made from seaweed that break down harmlessly' },
              { number: 39, evidence: 'the most effective step is to produce less plastic' },
              { number: 40, evidence: 'cleaning the oceans once the particles are there is almost impossible' },
            ],
          },
        ],
      },
    ],
  },
}
