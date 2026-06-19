import type { IeltsTest, Option } from '../../types'

// Original reading practice test 14 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const desertHeadings: Option[] = [
  { value: 'i', label: 'What makes a desert a desert' },
  { value: 'ii', label: 'How plants survive the drought' },
  { value: 'iii', label: 'Animals built for dry lands' },
  { value: 'iv', label: 'Deserts are spreading' },
  { value: 'v', label: 'Not all deserts are hot' },
  { value: 'vi', label: 'People of the desert' },
  { value: 'vii', label: 'The shapes of the land' },
  { value: 'viii', label: 'Riches beneath the sand' },
  { value: 'ix', label: 'Deserts of the past' },
]

export const practiceReading14: IeltsTest = {
  id: 'practice-reading-14',
  title: 'Practice Test 14 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'TRUE', 5: 'NOT GIVEN', 6: 'FALSE',
      7: ['wheels', 'two wheels'], 8: ['pedals'], 9: 'chain', 10: 'rubber',
      11: ['safety'], 12: ['women'], 13: ['cheaper'],
      14: 'i', 15: 'v', 16: 'ii', 17: 'iii', 18: 'vii', 19: 'iv',
      20: 'B', 21: 'D', 22: 'A', 23: 'C',
      24: 'C', 25: 'A', 26: 'B',
      27: 'NO', 28: 'YES', 29: 'YES', 30: 'NOT GIVEN', 31: 'NO',
      32: 'A', 33: 'D',
      34: 'sleep', 35: 'repetition', 36: 'meaning', 37: 'cues', 38: 'anxiety', 39: 'confident', 40: 'gradual',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The story of the bicycle',
        html: `
          <p>The bicycle is such a familiar machine that it is easy to forget how strange the idea once seemed. The notion that a person could balance on two wheels, one behind the other, and travel faster than they could walk struck many people as absurd when the first such machines appeared. Yet over the course of the nineteenth century a series of inventors, each building on the work of others, turned that unlikely idea into one of the most popular and useful machines ever made.</p>
          <p>The earliest ancestor of the bicycle had no pedals at all. It was a wooden machine with two wheels and a seat, which the rider pushed along by kicking against the ground, lifting their feet once it was moving. It was little more than a curiosity and rather uncomfortable, but it proved the central point on which everything else would depend: that a rider could indeed balance on two wheels while in motion. From this simple beginning the rest of the machine slowly developed.</p>
          <p>The next great step was to add pedals, so that the rider's effort could turn a wheel directly rather than pushing against the road. At first the pedals were fixed to the front wheel itself. Because each turn of the pedals moved the bicycle only as far as the wheel could roll, makers fitted larger and larger front wheels to gain more speed, producing the famous machines with one huge wheel and one tiny one. These were fast but dangerous, for the rider sat high above the ground and a fall could cause serious injury.</p>
          <p>The bicycle we would recognise today arrived when inventors connected the pedals to the rear wheel by means of a chain. This clever arrangement meant that the pedals could turn the wheel several times for each turn of the pedals, so a machine with two ordinary wheels of equal size could be made to go fast. Because the rider sat lower and more securely, this design was far less likely to throw them off, and it became known as the safety bicycle. Soon afterwards, air-filled tyres made of rubber replaced the hard wheels of earlier machines, giving a far smoother and more comfortable ride.</p>
          <p>With these improvements the bicycle became enormously popular. It was cheaper than keeping a horse and needed no feeding or stabling, and for the first time many ordinary people could travel quickly and freely under their own power. The bicycle is often said to have had an especially great effect on the lives of women, giving them a new freedom to move about independently at a time when their lives were tightly restricted. It even influenced the clothes people wore, as the long, heavy garments of the day proved impractical for cycling.</p>
          <p>Today the bicycle remains one of the world's most widely used vehicles. In many countries it is the main means of transport for millions of people, while in wealthier nations it is valued for sport, for exercise and as a clean alternative to the car. As cities struggle with traffic and pollution, this simple, efficient machine — turning human effort directly into smooth movement — is enjoying a fresh wave of popularity, nearly two centuries after those first wobbling experiments on two wheels.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The earliest two-wheeled machine had no pedals.' },
              { number: 2, text: 'Machines with one huge front wheel were very safe to ride.' },
              { number: 3, text: 'The safety bicycle used a chain to drive the rear wheel.' },
              { number: 4, text: 'Air-filled rubber tyres made cycling more comfortable.' },
              { number: 5, text: 'Bicycles were more expensive than horses to buy.' },
              { number: 6, text: 'Cycling had little effect on the clothes people wore.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'The earliest machine proved that a rider could balance on two ___.' },
              { number: 8, text: 'A great step forward was adding ___ to turn a wheel.' },
              { number: 9, text: 'The modern design connected the pedals to the rear wheel with a ___.' },
              { number: 10, text: 'Air-filled tyres were made of ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'What name was given to the lower, more secure bicycle design?' },
              { number: 12, text: 'Whose lives is the bicycle said to have especially changed?' },
              { number: 13, text: 'Compared with keeping a horse, what was the bicycle?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Life in the desert',
        html: `
          <p><span class="passage-letter">A</span> A desert is defined not by heat or by sand but by a single thing: a lack of water. Scientists class a region as a desert when very little rain falls there over the course of a year, so little that few plants can grow and the ground is left bare. By this measure deserts cover roughly a third of the land surface of the Earth. Some receive a brief shower now and then; others may go for years on end without a single drop of rain, and are among the driest places known.</p>
          <p><span class="passage-letter">B</span> It is a common mistake to imagine that all deserts are hot. Many of the most famous ones are, baking under a fierce sun by day, yet even these can turn surprisingly cold at night, because the dry, cloudless air holds little of the day's warmth once the sun has set. Other deserts are cold by nature: vast regions in the heart of continents, and even the frozen wastes of the poles, count as deserts because so little moisture ever falls on them. What unites them all is dryness, not temperature.</p>
          <p><span class="passage-letter">C</span> The plants that manage to live in deserts are marvels of survival, each shaped by the struggle to find and keep water. Some, like the cactus, store water in thick, fleshy stems and are protected by sharp spines instead of thirsty leaves. Others send their roots far down to reach water deep underground, or spread them wide just beneath the surface to catch any rain that falls. A few survive the long dry spells as seeds, springing up and flowering with astonishing speed in the rare days after rain.</p>
          <p><span class="passage-letter">D</span> Desert animals face the same challenge and have found their own answers. Many avoid the worst of the heat by resting in burrows or shade during the day and coming out to feed in the cool of the night. Some can go for very long periods without drinking, getting most of the water they need from their food, and their bodies are remarkably good at wasting as little of it as possible. The camel, with its ability to endure long journeys between water sources, is only the most famous of a great many creatures superbly fitted to dry lands.</p>
          <p><span class="passage-letter">E</span> Far from being featureless, deserts contain some of the most dramatic scenery on Earth, and wind and the occasional rush of water are the sculptors. Where there is loose sand, the wind piles it into great dunes that slowly shift across the land. Elsewhere it strips the ground bare or carves the rock into strange shapes. The rare but violent downpours that do occur can tear sudden valleys through the dry ground, so that the very scarcity of water helps to shape the land it falls upon.</p>
          <p><span class="passage-letter">F</span> A growing concern is that the world's deserts are spreading. Around their edges, land that once supported crops or grazing is turning barren, a process driven partly by changes in climate and partly by human pressure — too many animals stripping the plants, and too much ploughing of fragile soil. Once the protecting plants are gone, the wind and sun can quickly turn productive land to desert, and millions of people who live on these margins find their livelihoods under threat.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F, from the list of headings below.',
            options: desertHeadings,
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
            id: 'r2b', type: 'matching', instructions: 'Match each survival strategy to the thing it describes. Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'a cactus' },
              { value: 'B', label: 'many desert animals' },
              { value: 'C', label: 'some desert plants' },
              { value: 'D', label: 'the camel' },
            ],
            questions: [
              { number: 20, text: 'feed at night and rest in shade or burrows by day' },
              { number: 21, text: 'can endure long journeys between water sources' },
              { number: 22, text: 'stores water in thick stems and is protected by spines' },
              { number: 23, text: 'survive dry spells as seeds and flower quickly after rain' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'A desert is defined by its lack of', options: [{ value: 'A', label: 'sand.' }, { value: 'B', label: 'heat.' }, { value: 'C', label: 'water.' }] },
              { number: 25, text: 'Hot deserts often become cold at night because the air is', options: [{ value: 'A', label: 'very dry.' }, { value: 'B', label: 'full of cloud.' }, { value: 'C', label: 'rich in moisture.' }] },
              { number: 26, text: 'Deserts are said to be spreading partly because of', options: [{ value: 'A', label: 'too much rainfall.' }, { value: 'B', label: 'human pressure on the land.' }, { value: 'C', label: 'the planting of too many trees.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'How we remember and forget',
        html: `
          <p>Memory feels to us like a simple thing — we either remember something or we do not — but it is in fact one of the most complex achievements of the human brain. Far from working like a camera that records the world exactly, memory is an active process in which the brain selects, stores and later rebuilds experiences. Understanding how it works, and why it so often fails, has been one of the great projects of psychology, and the findings have practical lessons for anyone who wishes to learn.</p>
          <p>It is useful to think of memory as having more than one store. Information first enters a short-term memory, which holds a small amount for only a few seconds — long enough, say, to keep a phone number in mind while we dial it. Most of what passes through this store is quickly lost. Only some of it is moved into long-term memory, the brain's vast and lasting record, where information can in principle remain for a lifetime. Much of the science of memory is concerned with how, and why, this transfer takes place.</p>
          <p>One factor that strengthens a memory is repetition: things we meet again and again are more likely to stick. But repetition alone is far less powerful than understanding. When we grasp the meaning of something and link it to what we already know, it is far better remembered than a string of facts learned by rote. This is why a story is easier to recall than a list of unconnected words, and why a learner who truly understands a subject will outperform one who has merely memorised it. Meaning, not mere repetition, is the key to lasting memory.</p>
          <p>Sleep, too, turns out to play a surprising part. Far from being wasted time, the hours we spend asleep are when the brain does much of the work of fixing the day's experiences into lasting memory. Studies show that people who sleep after learning something remember it better than those who stay awake, and that a tired brain both takes in and recalls information poorly. A good night's rest, it seems, is as much a part of learning as the studying itself.</p>
          <p>Why, then, do we forget? Forgetting is not simply a failure of the system but, in part, a useful feature of it; a mind that remembered every trivial detail would be cluttered and slow. Some memories fade through lack of use, growing weaker the longer they go unvisited. Others are not truly lost but merely hard to reach, waiting for the right reminder, or cue, to bring them back. We have all had the experience of a name that hovers just out of reach until some chance word suddenly restores it.</p>
          <p>This understanding points to better ways of learning. Because meaning aids memory, it pays to understand rather than merely repeat; because cues help us retrieve, it helps to practise recalling information rather than only re-reading it. Spreading study out over time, in gradual sessions rather than a single long cramming before an exam, produces far more durable memories. And because anxiety interferes with both storing and recalling, a calm and confident state of mind, supported by proper sleep, allows the memory to do its best work. The brain's memory may be imperfect, but it rewards those who learn to work with it.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Memory works much like a camera, recording the world exactly.' },
              { number: 28, text: 'Most information in short-term memory is quickly lost.' },
              { number: 29, text: 'Understanding the meaning of something aids memory more than repetition.' },
              { number: 30, text: 'Younger people forget more slowly than older people.' },
              { number: 31, text: 'Cramming the night before an exam produces the most durable memories.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO things does the passage say improve memory? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'getting enough sleep' },
              { value: 'B', label: 'feeling anxious' },
              { value: 'C', label: 'avoiding all repetition' },
              { value: 'D', label: 'spreading study over time' },
              { value: 'E', label: 'learning long lists by rote' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Memory can be improved in several ways. {{34}} after learning helps fix information in the brain.
              {{35}} helps, but understanding the {{36}} of something matters far more. Forgotten memories can
              often be brought back by the right {{37}}. Because {{38}} interferes with both storing and
              recalling, a calm and {{39}} state of mind helps. Study spread out in {{40}} sessions lasts longer
              than cramming.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
