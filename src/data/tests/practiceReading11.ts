import type { IeltsTest, Option } from '../../types'

// Original reading practice test 11 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const reefHeadings: Option[] = [
  { value: 'i', label: 'How a reef is built over time' },
  { value: 'ii', label: 'The wealth of life a reef supports' },
  { value: 'iii', label: 'A partnership at the heart of the reef' },
  { value: 'iv', label: 'The threat of a warming ocean' },
  { value: 'v', label: 'Where reefs are found' },
  { value: 'vi', label: 'Reefs and the people who depend on them' },
  { value: 'vii', label: 'Efforts to repair damaged reefs' },
  { value: 'viii', label: 'The first scientific studies of reefs' },
  { value: 'ix', label: 'How reefs protect the coast' },
]

export const practiceReading11: IeltsTest = {
  id: 'practice-reading-11',
  title: 'Practice Test 11 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'TRUE', 6: 'FALSE',
      7: 'China', 8: ['Buddhist', 'Buddhist monks', 'monks'], 9: ['silk', 'Silk Road'], 10: 'porcelain',
      11: ['Japan'], 12: ['clipper', 'clippers', 'clipper ships'], 13: ['India'],
      14: 'v', 15: 'i', 16: 'iii', 17: 'ii', 18: 'ix', 19: 'iv',
      20: 'C', 21: 'A', 22: 'D', 23: 'B',
      24: 'B', 25: 'C', 26: 'A',
      27: 'YES', 28: 'NO', 29: 'NOT GIVEN', 30: 'YES', 31: 'NO',
      32: 'B', 33: 'D',
      34: 'temperature', 35: 'light', 36: 'hormone', 37: 'memories', 38: 'screens', 39: 'routine', 40: 'caffeine',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The story of tea',
        html: `
          <p>Tea is the most widely drunk beverage in the world after water, yet its origins lie in a single corner of Asia. The plant from which all true tea is made, <em>Camellia sinensis</em>, is native to the borderlands of southern China and is thought to have been used there for thousands of years. According to a much-repeated legend, the drink was discovered by chance when leaves blew into a pot of boiling water belonging to a Chinese emperor. Whether or not the tale is true, it is in China that the long history of tea begins.</p>
          <p>For many centuries tea remained an almost entirely Chinese pleasure. At first the leaves were valued chiefly as a medicine, taken to aid digestion or to drive away tiredness, and only later did tea become an everyday drink enjoyed for its taste. As its popularity spread, the growing and processing of the leaf developed into a refined craft, and elaborate rituals grew up around its preparation. Tea even acquired a literature of its own, with scholars writing at length about the best ways to grow, pick and brew it.</p>
          <p>From China the habit travelled outward. Buddhist monks, who valued tea because it helped them stay awake during long hours of meditation, are believed to have carried both the plant and the custom of drinking it across the sea to other lands. In this way tea reached Japan, where it was woven into a famous and highly formal ceremony that survives to this day. Along the overland trade routes, meanwhile, bricks of pressed tea were exchanged for horses and other goods, and in some regions blocks of tea were even used as a form of money.</p>
          <p>Tea was slower to reach the West. For a long time Europe knew nothing of it, and when the first leaves finally arrived by ship in the seventeenth century they were a costly novelty. The same vessels that brought tea from the East also carried silk and fine porcelain, all of which had travelled for centuries along the great trading networks that linked China with the wider world. The most famous of these networks, the Silk Road, gave its name to an entire age of exchange between East and West. Among the luxuries that reached Europe by sea, delicate porcelain cups proved the ideal vessel from which to drink the new and fashionable beverage.</p>
          <p>In Britain tea quickly became more than a passing fashion. Within a few generations it had grown into a national drink, taken by rich and poor alike and surrounded by customs of its own. So great was the demand that merchants competed fiercely to bring the new season's leaves home as quickly as possible. In the nineteenth century this competition gave rise to the famous tea races, in which fast sailing ships known as clippers raced one another across the oceans, their captains driving the vessels hard in the hope of landing the first cargo of the year and winning the highest price.</p>
          <p>As demand grew, Britain looked for places where tea could be grown within its own empire rather than bought from China alone. The hills of India proved well suited to the plant, and vast plantations were established there, soon followed by others on the island then known as Ceylon. Within a few decades these new gardens were producing enormous quantities of tea, and India in particular became one of the largest producers in the world. The drink that had begun as a Chinese secret had become a truly global commodity, grown on several continents and sold in almost every country on Earth.</p>
          <p>Today tea is woven into the daily life of billions of people, and the manner of drinking it varies enormously from one culture to the next. It may be served plain or sweetened, with milk or with spices, poured from a pot or whisked into a froth. Yet for all these differences, every cup can be traced back to the same modest evergreen shrub and to the long journey that carried it out of the hills of Asia and around the world.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Tea is the second most popular drink in the world after water.' },
              { number: 2, text: 'Tea was first used in China as an everyday drink rather than as a medicine.' },
              { number: 3, text: 'In some regions blocks of tea were used in place of money.' },
              { number: 4, text: 'The first tea to reach Europe was cheaper than coffee.' },
              { number: 5, text: 'Britain set up tea plantations within its own empire.' },
              { number: 6, text: 'India produced less tea than China by the end of the nineteenth century.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'The tea plant is native to the borderlands of southern ___.' },
              { number: 8, text: 'Tea is thought to have been carried to other lands by ___ monks.' },
              { number: 9, text: 'The most famous trade network linking China with the West was the ___ Road.' },
              { number: 10, text: 'Europeans drank their tea from cups made of ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'In which country did tea become part of a formal ceremony?' },
              { number: 12, text: 'What type of fast sailing ship took part in the nineteenth-century tea races?' },
              { number: 13, text: 'Which country became one of the largest producers of tea under British rule?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Life on the coral reef',
        html: `
          <p><span class="passage-letter">A</span> Coral reefs are among the most spectacular of all natural features, yet they are confined to a surprisingly narrow band of the planet. The reef-building corals that create them can grow only in warm, clear and shallow seawater, and so reefs are found almost entirely in the tropics, in a belt that circles the Earth on either side of the equator. They prefer water that is clean and free of sediment, which is why the largest reefs lie off coasts where rivers do not pour mud into the sea. Within these limits, however, reefs flourish on a grand scale: the largest of them all, the Great Barrier Reef off the coast of Australia, stretches for more than two thousand kilometres and is the biggest structure ever built by living things.</p>
          <p><span class="passage-letter">B</span> A reef may look like a single mass of rock, but it is in fact the work of countless tiny animals over immense spans of time. Each coral is made up of small soft-bodied creatures called polyps, and each polyp draws minerals from the seawater to build a hard cup of limestone around itself for protection. When a polyp dies its stony skeleton remains, and new polyps grow upon the old. Layer is added to layer in this way, so slowly that a large reef may take many thousands of years to form. The living coral is therefore only a thin skin of colour over a vast foundation built by earlier generations.</p>
          <p><span class="passage-letter">C</span> What makes this growth possible is one of the most remarkable partnerships in nature. Living inside the tissues of the coral are enormous numbers of microscopic algae. These tiny plants capture the energy of sunlight and, in doing so, produce food which they share with their coral hosts; in return the coral gives the algae a safe place to live and the raw materials they need. It is this partnership that allows corals to grow fast enough to build a reef, and it also explains why reefs need clear, shallow water, for the algae cannot work without plenty of light. The brilliant colours of a healthy reef come largely from these hidden partners.</p>
          <p><span class="passage-letter">D</span> The reef that the corals build becomes a home for an astonishing variety of other creatures. Although reefs cover only a tiny fraction of the ocean floor, they are thought to shelter a quarter of all the species in the sea. Fish of every shape and colour dart among the coral; eels and octopuses lurk in its crevices; and crabs, sea urchins, sponges and starfish crowd every surface. The reef offers food and hiding places in endless variety, and this richness has earned coral reefs the nickname of the rainforests of the sea, for they rival even the tropical forests in the sheer number of living things they support.</p>
          <p><span class="passage-letter">E</span> Reefs are valuable to people as well as to wildlife. Many coastal communities depend on the fish that live among the coral for their food and their living, and reefs draw great numbers of tourists whose spending supports whole local economies. Perhaps most importantly of all, a reef acts as a natural breakwater. By absorbing the force of the waves before they reach the shore, it shields the coast behind it from storms and erosion, protecting beaches, farmland and even towns that might otherwise be battered by the open sea.</p>
          <p><span class="passage-letter">F</span> Yet reefs everywhere are now in danger, and the gravest threat comes from the warming of the oceans. When the water grows too hot, the coral expels the algae that live within it, and without its partners the coral loses both its colour and its main source of food. This is the process known as bleaching, in which whole reefs turn a ghostly white. If the heat passes quickly the coral may recover, but if it lasts too long the coral dies. As the world's seas grow steadily warmer, episodes of bleaching have become more frequent and more severe, and scientists warn that without urgent action many of the world's reefs may not survive the present century.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F, from the list of headings below.',
            options: reefHeadings,
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
            id: 'r2b', type: 'matching', instructions: 'Which paragraph contains the following information? Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'how a single coral polyp protects itself' },
              { value: 'B', label: 'the loss of colour when water becomes too warm' },
              { value: 'C', label: 'the conditions corals need in order to grow' },
              { value: 'D', label: 'the role of a reef in defending the coast' },
            ],
            questions: [
              { number: 20, text: 'Corals grow only in warm, clear, shallow water.' },
              { number: 21, text: 'Each polyp builds a cup of limestone around itself.' },
              { number: 22, text: 'A reef absorbs the force of the waves before they reach land.' },
              { number: 23, text: 'Coral turns white when it expels its algae.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'The largest reef on Earth is found off the coast of', options: [{ value: 'A', label: 'Africa.' }, { value: 'B', label: 'Australia.' }, { value: 'C', label: 'South America.' }] },
              { number: 25, text: 'The algae living inside coral provide the coral with', options: [{ value: 'A', label: 'protection from predators.' }, { value: 'B', label: 'a hard skeleton.' }, { value: 'C', label: 'food made from sunlight.' }] },
              { number: 26, text: 'Coral bleaching is mainly caused by', options: [{ value: 'A', label: 'water that is too warm.' }, { value: 'B', label: 'too little salt in the sea.' }, { value: 'C', label: 'overfishing of the reef.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The science of sleep',
        html: `
          <p>We spend roughly a third of our lives asleep, and for most of human history that fact was something of a mystery. Sleep looked, from the outside, like a simple switching-off of the body, a passive state in which nothing much happened until morning. Modern research has overturned that idea completely. Far from being idle, the sleeping brain is intensely busy, and the hours we spend unconscious turn out to be essential to almost everything the waking mind can do.</p>
          <p>Sleep is governed by an internal clock. Deep within the brain lies a tiny cluster of cells that acts as a master timekeeper, setting the rhythm of sleeping and waking across roughly a twenty-four-hour cycle. This internal clock does not run on its own but is constantly reset by signals from the outside world, of which the most powerful is light. When light fades in the evening, the brain begins to release a hormone that makes us feel drowsy and prepares the body for rest; in the morning, bright light shuts this signal off and helps us wake. The clock also drives a fall in body temperature at night, a drop that is itself part of the body's preparation for sleep.</p>
          <p>A night's sleep is not uniform but moves through a series of distinct stages, repeated several times before dawn. In the deepest stages the body is at its most still and the brain produces slow, rolling waves of electrical activity; this is the phase thought to be most important for physical rest and repair. At intervals the sleeper passes into a quite different state in which the brain becomes almost as active as it is when awake, the eyes dart rapidly beneath their closed lids, and most vivid dreaming takes place. The two kinds of sleep appear to serve different purposes, and a healthy night requires a proper balance of both.</p>
          <p>One of the most important discoveries of recent decades is the part that sleep plays in learning. While we sleep, the brain appears to sort through the experiences of the day, strengthening the connections that store useful information and discarding what is not needed. In effect, fresh memories are reviewed and filed away during the night, which is why a good night's rest after studying can do as much for the memory as the studying itself. People deprived of sleep, by contrast, struggle to concentrate and to recall what they have recently learned. Sleep has also been linked to the clearing away of waste products that build up in the brain during the day.</p>
          <p>Given all this, it is worrying that so many people in the modern world do not get enough sleep. The reasons are many. Artificial lighting allows us to stay active long after dark, and the bright screens of phones and computers are especially troublesome, since the light they give off can fool the brain into thinking it is still daytime and delay the signal to sleep. Irregular working hours, stress and the simple habit of staying up late all play their part as well. The result is that a large share of adults regularly sleep less than their bodies need, often without realising the cost.</p>
          <p>The effects of this shortfall reach well beyond feeling tired. Long-term lack of sleep has been linked to a range of serious health problems, and even in the short term a poorly rested person reacts more slowly and makes more mistakes, which is one reason why tiredness is a major cause of road accidents. The good news is that sleep can usually be improved by sensible habits. Experts advise keeping to a regular routine, going to bed and getting up at the same times each day so that the internal clock is not confused. They suggest a cool, dark and quiet bedroom, avoiding bright screens in the hour before bed, and steering clear of caffeine in the afternoon and evening, since this stimulant can linger in the body for many hours and keep the brain alert long after it is wanted. Such measures will not cure every sleeping problem, but for most people they make a real difference, and they cost nothing at all.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'The sleeping brain is far more active than people once believed.' },
              { number: 28, text: 'Light has little effect on the body’s internal clock.' },
              { number: 29, text: 'Most people need exactly eight hours of sleep each night.' },
              { number: 30, text: 'Sleep helps the brain to store useful memories.' },
              { number: 31, text: 'Caffeine leaves the body within an hour of being consumed.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO of the following are mentioned in the passage as benefits of sleep? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'improving eyesight' },
              { value: 'B', label: 'physical rest and repair' },
              { value: 'C', label: 'increasing height' },
              { value: 'D', label: 'clearing waste from the brain' },
              { value: 'E', label: 'strengthening the bones' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Sleep is controlled by an internal clock that is reset mainly by {{35}}. As evening comes, the brain
              releases a {{36}} that makes us drowsy, and body {{34}} falls in preparation for rest. During sleep
              the brain files away fresh {{37}} from the day. Many people sleep too little because bright {{38}}
              on phones and computers delay sleep. To sleep better, experts advise keeping a regular {{39}} and
              avoiding {{40}} late in the day.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
