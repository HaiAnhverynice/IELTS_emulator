import type { IeltsTest, Option } from '../../types'

// Original reading practice test 7 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headings: Option[] = [
  { value: 'i', label: 'How a turbine works' },
  { value: 'ii', label: 'An ancient source of power' },
  { value: 'iii', label: 'The problem of an unsteady wind' },
  { value: 'iv', label: 'Moving offshore' },
  { value: 'v', label: 'Objections from local people' },
  { value: 'vi', label: 'A falling price' },
  { value: 'vii', label: 'Power for transport' },
  { value: 'viii', label: 'The first power stations' },
  { value: 'ix', label: 'Building bigger machines' },
]

export const practiceReading7: IeltsTest = {
  id: 'practice-reading-7',
  title: 'Practice Test 7 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'TRUE', 3: 'NOT GIVEN', 4: 'FALSE', 5: 'TRUE', 6: 'FALSE',
      7: ['wolves', 'wolf'], 8: ['hunting', 'hunt'], 9: 'guarding', 10: 'breeds',
      11: ['scent', 'smell'], 12: 'sheep', 13: ['companions', 'companionship', 'pets'],
      14: 'ii', 15: 'i', 16: 'ix', 17: 'iii', 18: 'iv', 19: 'vi',
      20: 'A', 21: 'C', 22: 'B', 23: 'D',
      24: 'C', 25: 'B', 26: 'A',
      27: 'YES', 28: 'NO', 29: 'YES', 30: 'NOT GIVEN', 31: 'NO',
      32: 'B', 33: 'C',
      34: 'attention', 35: 'meaning', 36: 'sleep', 37: 'cues', 38: ['emotion', 'emotional'], 39: 'repetition', 40: 'reliable',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'How the dog came to live with us',
        html: `
          <p>The dog was the first animal that humans ever domesticated, long before sheep, cattle or even crops. Genetic studies show that every breed alive today, from the tiny chihuahua to the giant mastiff, is descended from the grey wolf, and that the split from wild wolves happened many thousands of years ago.</p>
          <p>Exactly how it began is still debated, but the most popular theory is one of mutual benefit. Wolves that were bold enough to scavenge around human camps got an easy meal; in return, their barking warned people of danger. Over many generations the tamest animals stayed close to humans, and a new kind of creature gradually emerged.</p>
          <p>Once dogs lived alongside people, humans began to shape them for particular tasks. Some were bred to help with hunting, others to guard homes and livestock, and later still to pull sledges or herd sheep. By selecting animals with useful qualities, people slowly created the hundreds of breeds we know today.</p>
          <p>Many of these working roles depend on abilities far beyond our own. A dog's sense of scent, for example, is thousands of times more sensitive than a human's, which is why dogs are still used to track people and detect explosives. Today, though, the majority of dogs do no work at all: they are kept simply as companions, valued for their loyalty and affection.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The dog was the first animal humans domesticated.', evidence: 'The dog was the first animal that humans ever domesticated, long before sheep, cattle or even crops.' },
              { number: 2, text: 'All modern dog breeds descend from the grey wolf.', evidence: 'every breed alive today, from the tiny chihuahua to the giant mastiff, is descended from the grey wolf' },
              { number: 3, text: 'Wolves were domesticated at the same time as sheep.' },
              { number: 4, text: 'The way dogs were domesticated is fully agreed upon.', evidence: 'Exactly how it began is still debated' },
              { number: 5, text: 'A dog’s sense of smell is far better than a human’s.', evidence: "A dog's sense of scent, for example, is thousands of times more sensitive than a human's" },
              { number: 6, text: 'Most dogs today are working animals.', evidence: 'the majority of dogs do no work at all: they are kept simply as companions' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'Modern dogs are descended from grey ___.', evidence: 'is descended from the grey wolf, and that the split from wild wolves happened many thousands of years ago' },
              { number: 8, text: 'Some dogs were bred to help with ___.', evidence: 'Some were bred to help with hunting' },
              { number: 9, text: 'Other dogs were bred for ___ homes and livestock.', evidence: 'others to guard homes and livestock' },
              { number: 10, text: 'Selecting useful animals created hundreds of ___.', evidence: 'people slowly created the hundreds of breeds we know today' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 11, text: 'What sense of a dog is far more sensitive than a human’s?', evidence: "A dog's sense of scent, for example, is thousands of times more sensitive than a human's" },
              { number: 12, text: 'Which animals were dogs bred to herd?', evidence: 'to pull sledges or herd sheep' },
              { number: 13, text: 'What are most dogs kept as today?', evidence: 'they are kept simply as companions, valued for their loyalty and affection' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The return of the windmill',
        html: `
          <p><span class="passage-letter">A</span> People have harnessed the wind for at least a thousand years. Early windmills in Persia and later in Europe used sails to turn heavy stones that ground grain or to lift water out of low-lying land. For centuries the wind was, alongside flowing water, one of the few sources of power that did not depend on muscle.</p>
          <p><span class="passage-letter">B</span> A modern wind turbine works on the same basic idea but produces electricity rather than flour. Moving air pushes against long blades, making them spin; the rotating shaft drives a generator inside the housing at the top of the tower, and the electricity flows down through cables to the grid.</p>
          <p><span class="passage-letter">C</span> The most striking change has been in size. Early electricity-generating turbines were modest machines a few metres across. Today the largest stand taller than many skyscrapers, with blades longer than a football pitch, because a bigger rotor sweeps more air and so captures far more energy.</p>
          <p><span class="passage-letter">D</span> Wind has one obvious weakness: it does not blow steadily. A turbine produces nothing on a calm day and may produce more than the grid can use in a gale, so wind power has to be balanced by other sources or by ways of storing electricity for later.</p>
          <p><span class="passage-letter">E</span> One answer has been to build turbines at sea. Offshore winds are stronger and more constant than those over land, and the machines are far from houses. Although building in deep water is expensive, offshore wind farms now supply a growing share of some countries’ electricity.</p>
          <p><span class="passage-letter">F</span> Perhaps the biggest reason for wind’s rapid spread is simply money. As turbines have grown larger and manufacturers have gained experience, the cost of the electricity they produce has tumbled, until in many places it is now cheaper than power from coal or gas.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F.',
            options: headings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'People have harnessed the wind for at least a thousand years.' },
              { number: 15, text: 'Paragraph B', evidence: 'A modern wind turbine works on the same basic idea but produces electricity rather than flour.' },
              { number: 16, text: 'Paragraph C', evidence: 'The most striking change has been in size.' },
              { number: 17, text: 'Paragraph D', evidence: 'Wind has one obvious weakness: it does not blow steadily.' },
              { number: 18, text: 'Paragraph E', evidence: 'One answer has been to build turbines at sea.' },
              { number: 19, text: 'Paragraph F', evidence: 'Perhaps the biggest reason for wind’s rapid spread is simply money.' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Match each description with a stage of a turbine’s operation. Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'the blades' },
              { value: 'B', label: 'the generator' },
              { value: 'C', label: 'the tower' },
              { value: 'D', label: 'the cables' },
            ],
            questions: [
              { number: 20, text: 'are pushed round by moving air', evidence: 'Moving air pushes against long blades, making them spin' },
              { number: 21, text: 'holds the machine high above the ground', evidence: 'a generator inside the housing at the top of the tower' },
              { number: 22, text: 'turns rotation into electricity', evidence: 'the rotating shaft drives a generator inside the housing at the top of the tower' },
              { number: 23, text: 'carry the electricity to the grid', evidence: 'the electricity flows down through cables to the grid' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'The earliest windmills were mainly used to', evidence: 'used sails to turn heavy stones that ground grain or to lift water out of low-lying land', options: [{ value: 'A', label: 'make electricity.' }, { value: 'B', label: 'pump seawater.' }, { value: 'C', label: 'grind grain and lift water.' }] },
              { number: 25, text: 'Turbines have been made larger because bigger rotors', evidence: 'a bigger rotor sweeps more air and so captures far more energy', options: [{ value: 'A', label: 'are cheaper to build.' }, { value: 'B', label: 'capture more energy.' }, { value: 'C', label: 'are quieter.' }] },
              { number: 26, text: 'Offshore turbines are built at sea because winds there are', evidence: 'Offshore winds are stronger and more constant than those over land', options: [{ value: 'A', label: 'stronger and steadier.' }, { value: 'B', label: 'warmer.' }, { value: 'C', label: 'easier to predict by season.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'How memory works',
        html: `
          <p>Memory feels like a recording, a faithful film of the past that we can play back at will. Psychologists know that it is nothing of the kind. Remembering is an active process in which the brain builds an experience anew each time, and the result is far less reliable than most of us assume.</p>
          <p>It is useful to think of memory in three stages. First comes encoding, the moment an experience enters the mind; then storage, the holding of that information over time; and finally retrieval, the act of bringing it back. A failure at any stage feels, from the inside, like exactly the same thing: forgetting.</p>
          <p>What we encode depends heavily on attention. We remember the things we notice and think about, and barely register the rest, which is why two people at the same event may recall it quite differently. Material that we connect to meaning — a story, a pattern, something we already know — is encoded far more strongly than a string of unrelated facts.</p>
          <p>Storage is not passive either. Memories are strengthened during sleep, when the brain replays the day and files away what matters, and they can fade or change if they are never used. Retrieval, the third stage, is helped by cues: a smell, a place or a piece of music can suddenly unlock a memory that seemed completely lost.</p>
          <p>Two further findings stand out. Emotion makes memories more vivid and longer-lasting, which is why we remember dramatic events so clearly. And simple repetition works: reviewing material several times, spread out over days, fixes it far better than a single long session. None of this makes memory perfect — but it does make it a little more reliable.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Remembering rebuilds an experience rather than replaying it.', evidence: 'Remembering is an active process in which the brain builds an experience anew each time' },
              { number: 28, text: 'Memory is a completely accurate record of the past.', evidence: 'the result is far less reliable than most of us assume' },
              { number: 29, text: 'Sleep helps to strengthen memories.', evidence: 'Memories are strengthened during sleep, when the brain replays the day and files away what matters' },
              { number: 30, text: 'Older people forget more than younger people.' },
              { number: 31, text: 'A single long study session is the best way to learn.', evidence: 'reviewing material several times, spread out over days, fixes it far better than a single long session' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO things, according to the passage, make a memory stronger? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'a noisy setting' },
              { value: 'B', label: 'connecting it to meaning' },
              { value: 'C', label: 'strong emotion' },
              { value: 'D', label: 'ignoring it' },
              { value: 'E', label: 'a single exposure' },
            ],
            questions: [
              { number: 32, evidence: 'Material that we connect to meaning — a story, a pattern, something we already know — is encoded far more strongly than a string of unrelated facts.' },
              { number: 33, evidence: 'Emotion makes memories more vivid and longer-lasting, which is why we remember dramatic events so clearly.' },
            ],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>What we encode depends on {{34}}: we remember what we notice. Information linked to {{35}} is
              stored more strongly than unrelated facts. Memories are strengthened during {{36}}, and bringing
              them back is helped by {{37}} such as a smell or a place. Strong {{38}} makes memories last, and
              spaced {{39}} fixes material far better than one long session, making memory a little more
              {{40}}.</p>`,
            questions: [
              { number: 34, evidence: 'What we encode depends heavily on attention.' },
              { number: 35, evidence: 'Material that we connect to meaning — a story, a pattern, something we already know — is encoded far more strongly' },
              { number: 36, evidence: 'Memories are strengthened during sleep, when the brain replays the day and files away what matters' },
              { number: 37, evidence: 'Retrieval, the third stage, is helped by cues: a smell, a place or a piece of music' },
              { number: 38, evidence: 'Emotion makes memories more vivid and longer-lasting' },
              { number: 39, evidence: 'reviewing material several times, spread out over days, fixes it far better than a single long session' },
              { number: 40, evidence: 'None of this makes memory perfect — but it does make it a little more reliable.' },
            ],
          },
        ],
      },
    ],
  },
}
