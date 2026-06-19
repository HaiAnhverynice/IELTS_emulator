import type { IeltsTest, Option } from '../../types'

// Original reading practice test 13 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const beeHeadings: Option[] = [
  { value: 'i', label: 'How bees turn nectar into honey' },
  { value: 'ii', label: 'The threats bees now face' },
  { value: 'iii', label: 'Bees and the food we eat' },
  { value: 'iv', label: 'Inside the life of a colony' },
  { value: 'v', label: 'How a bee finds its way' },
  { value: 'vi', label: 'Communicating the location of food' },
  { value: 'vii', label: 'What can be done to help' },
  { value: 'viii', label: 'Bees and other insects compared' },
  { value: 'ix', label: 'The many kinds of bee' },
]

export const practiceReading13: IeltsTest = {
  id: 'practice-reading-13',
  title: 'Practice Test 13 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'TRUE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'TRUE', 6: 'FALSE',
      7: ['China', 'Chinese'], 8: ['Gutenberg'], 9: 'metal', 10: 'Bible',
      11: ['books'], 12: ['Latin'], 13: ['cheaper'],
      14: 'iv', 15: 'i', 16: 'vi', 17: 'iii', 18: 'ii', 19: 'vii',
      20: 'C', 21: 'A', 22: 'D', 23: 'B',
      24: 'B', 25: 'C', 26: 'A',
      27: 'YES', 28: 'NO', 29: 'YES', 30: 'NOT GIVEN', 31: 'NO',
      32: 'B', 33: 'E',
      34: 'temperature', 35: 'rain', 36: 'pollution', 37: 'active', 38: 'stress', 39: 'wildlife', 40: 'flooding',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The printing revolution',
        html: `
          <p>It is hard for us, surrounded by printed and digital words, to imagine a world in which every book had to be copied out by hand. Yet for most of history that is exactly how books were made. A single copy of a long work might take a scribe months or even years to complete, and mistakes crept in with every copying. Books were therefore rare and extremely costly, owned only by the wealthy, by churches and by the few universities that existed. Knowledge spread slowly, and most people never held a book at all.</p>
          <p>The first steps towards printing were taken not in Europe but in East Asia. In China, craftsmen learned to carve a whole page of text into a block of wood, ink it, and press it onto paper, so that many copies of the same page could be made. Movable type — separate pieces for each character that could be arranged and reused — was also invented in Asia. But the Chinese script contains thousands of different characters, which made movable type awkward to use there, and the technique did not transform society as it later would in the West.</p>
          <p>The decisive breakthrough came in fifteenth-century Europe and is usually credited to a German craftsman named Johannes Gutenberg. His genius lay in combining several ideas into a single working system. He cast individual letters in metal, which were hard-wearing and could be set into words, lines and pages, then printed and broken up and used again. He also devised an oily ink that clung to metal and adapted the kind of screw press already used for making wine, so that a page could be printed with a firm, even pressure.</p>
          <p>Gutenberg's most famous product was a printed edition of the Bible, produced around the middle of the century, whose quality astonished those who saw it. More importantly, his methods spread with remarkable speed. Within a few decades printing presses had been set up in cities all across Europe, and they were pouring out not only religious works but books on law, medicine, science and travel, as well as cheap pamphlets that ordinary people could afford.</p>
          <p>The effects of all this were enormous. Because printed books were so much cheaper than handwritten ones, far more people could own them, and the number of people who could read began to rise. Ideas could now travel faster and further than ever before, and a discovery made in one country could be read about in another within months. At first most books were printed in Latin, the language of scholars, but printers soon found a larger market in books written in the everyday languages that ordinary people actually spoke.</p>
          <p>Historians often rank the printing press among the most important inventions ever made. By making the written word cheap and plentiful, it helped to spread learning, to fuel new movements in religion and science, and to standardise the languages in which people read and wrote. The handwritten book did not vanish overnight, but its days as the main carrier of knowledge were over. In a very real sense, the modern world of mass communication begins with the click and rattle of those first printing presses.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Before printing, books were cheap and widely owned.' },
              { number: 2, text: 'Movable type was first invented in Asia.' },
              { number: 3, text: 'The large number of Chinese characters made movable type awkward in China.' },
              { number: 4, text: 'Gutenberg was wealthy before he built his press.' },
              { number: 5, text: 'Printing presses spread across Europe within a few decades.' },
              { number: 6, text: 'Most early printed books were written in everyday languages.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'Printing from carved wooden blocks was first developed in ___.' },
              { number: 8, text: 'The decisive breakthrough in Europe is credited to ___.' },
              { number: 9, text: 'Gutenberg cast his individual letters in ___.' },
              { number: 10, text: 'His most famous printed work was an edition of the ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'Before printing, what had to be copied out by hand?' },
              { number: 12, text: 'In which language were most books first printed?' },
              { number: 13, text: 'Compared with handwritten books, what were printed books?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The world of bees',
        html: `
          <p><span class="passage-letter">A</span> A honeybee colony is one of the most highly organised societies in nature. A single hive may contain tens of thousands of bees, almost all of them workers — females that do not breed but carry out every task the colony needs. At the centre of it all is a single queen, whose role is to lay eggs, while a small number of males exist only to mate. The workers divide the labour among themselves, building the comb, cleaning the hive, guarding the entrance, caring for the young and gathering food, and an individual bee will move through several of these jobs during its short life.</p>
          <p><span class="passage-letter">B</span> The food that fuels the colony is, of course, honey, and making it is a long process. Foraging bees suck up a sugary liquid called nectar from flowers and carry it back to the hive in a special stomach. There the nectar is passed from bee to bee and the watery part is gradually driven off, until what remains is the thick, sweet substance we know as honey. Stored in the wax cells of the comb, it provides the colony with food through times when no flowers are in bloom, above all through the winter.</p>
          <p><span class="passage-letter">C</span> One of the most astonishing things bees do is tell one another where food is to be found. A worker that has discovered a rich patch of flowers returns to the hive and performs a kind of dance on the surface of the comb. The direction and length of her movements signal the direction and distance of the flowers, so that her sisters can fly straight to the spot. This "language" of movement, worked out by patient observation, allows a colony to gather food with remarkable efficiency.</p>
          <p><span class="passage-letter">D</span> Bees matter to people far beyond the honey they make. As they move from flower to flower in search of nectar, they carry pollen with them, and in doing so they fertilise the plants and allow them to produce seeds and fruit. A great many of the crops that feed the world depend on this service, from apples and almonds to many vegetables. Without the pollination carried out by bees and other insects, the variety and quantity of our food would shrink dramatically.</p>
          <p><span class="passage-letter">E</span> For all their importance, bees are now in trouble. In many parts of the world their numbers have been falling, and scientists point to several causes acting together. The spread of farmland and cities has destroyed many of the wild flowers bees depend on; certain chemical sprays used on crops can harm or confuse them; and diseases and pests have spread among hives. No single cause explains the decline, which is part of what makes it so worrying.</p>
          <p><span class="passage-letter">F</span> The good news is that ordinary people can do a great deal to help. Planting gardens with flowers that bloom across the seasons gives bees the food they need, and avoiding harmful sprays protects them directly. Leaving wild corners where flowers and nesting places can survive is valuable too. Such small actions, repeated in millions of gardens and parks, could make a real difference to creatures on which so much of our own food quietly depends.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F, from the list of headings below.',
            options: beeHeadings,
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
            id: 'r2b', type: 'matching', instructions: 'Match each role to the correct member of the colony. Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'the queen' },
              { value: 'B', label: 'the males' },
              { value: 'C', label: 'the workers' },
              { value: 'D', label: 'foraging bees' },
            ],
            questions: [
              { number: 20, text: 'build the comb, guard the hive and care for the young' },
              { number: 21, text: 'lays the eggs for the whole colony' },
              { number: 22, text: 'collect nectar from flowers and carry it home' },
              { number: 23, text: 'exist only to mate' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'Honey is made by removing from nectar most of its', options: [{ value: 'A', label: 'sugar.' }, { value: 'B', label: 'water.' }, { value: 'C', label: 'colour.' }] },
              { number: 25, text: 'A bee tells others where food is by means of', options: [{ value: 'A', label: 'a loud sound.' }, { value: 'B', label: 'a scent trail.' }, { value: 'C', label: 'a dance.' }] },
              { number: 26, text: 'Bees help to produce much of our food by', options: [{ value: 'A', label: 'pollinating crops.' }, { value: 'B', label: 'eating harmful pests.' }, { value: 'C', label: 'enriching the soil.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Green spaces in the city',
        html: `
          <p>More than half of the world's people now live in cities, and that share is still rising. As towns grow denser and buildings crowd out open ground, the parks, gardens and tree-lined streets that survive among them have come to be seen as something more than pleasant scenery. A growing body of research suggests that these green spaces are quietly doing important work for the health of city dwellers and for the cities themselves, and that protecting them is a matter of practical good sense rather than mere decoration.</p>
          <p>One of the clearest benefits is for the body. Parks and open spaces give people somewhere to walk, run, cycle and play, and studies repeatedly find that those who live close to good green space tend to be more physically active and, on average, healthier than those who do not. The effect is not only physical, however. Spending time among trees and grass appears to calm the mind: people who spend time in natural surroundings report lower levels of stress and better moods, and even a short walk in a park can leave a person feeling refreshed.</p>
          <p>Green spaces work on the city itself as much as on its people. Trees and plants help to clean the air, trapping some of the dust and pollution that traffic and industry pour out. They also cool their surroundings, which matters greatly in modern cities. Densely built areas of concrete and brick soak up the sun's heat and grow noticeably hotter than the countryside around them, but a generous cover of trees can lower the temperature of a neighbourhood and make hot summers more bearable. The shade of a single large tree can cool a street corner by several degrees.</p>
          <p>Parks and gardens help to manage water too. When rain falls on a city of hard surfaces, it cannot soak into the ground and instead rushes across roads and pavements, sometimes overwhelming the drains and causing flooding. Soil and plants, by contrast, soak up rainfall like a sponge and release it slowly, easing the strain on the drains and reducing the risk of floods. In this quiet way a stretch of parkland can protect the streets and homes around it from the damage that a sudden downpour might otherwise bring.</p>
          <p>There is a further benefit that is easy to overlook. Even in the heart of a busy city, parks, gardens and ponds provide a refuge for wildlife. Birds, insects and small animals find food and shelter among the trees and flowers, and a well-planted park can support a surprising variety of living things. For many city children, such places offer one of the few chances they have to see wild creatures at all, and a connection with nature that might otherwise be entirely missing from an urban childhood.</p>
          <p>For all these reasons, planners increasingly treat green space not as a luxury to be added if money allows, but as an essential part of a healthy city. Some cities now set targets for the share of land kept green, plant trees along their streets by the thousand, and turn unused ground into community gardens and small parks. The challenge is real, for land in cities is scarce and valuable, and there is always pressure to build on every spare patch. Yet the evidence is mounting that the green spaces a city keeps may be among the most valuable land of all.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'People who live near good green space tend to be more active.' },
              { number: 28, text: 'Densely built city areas are cooler than the surrounding countryside.' },
              { number: 29, text: 'Plants and soil can reduce the risk of flooding in cities.' },
              { number: 30, text: 'City parks are more popular with adults than with children.' },
              { number: 31, text: 'Planners now regard green space as an unnecessary luxury.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO benefits of city green spaces for the environment are mentioned? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'producing food for sale' },
              { value: 'B', label: 'cleaning pollution from the air' },
              { value: 'C', label: 'generating electricity' },
              { value: 'D', label: 'reducing traffic noise' },
              { value: 'E', label: 'providing a home for wildlife' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Green spaces benefit both people and cities. They help make people more physically {{37}}, and
              time among trees lowers {{38}} and improves mood. Trees clean the air of {{36}} and lower the {{34}} of hot
              neighbourhoods. Soil and plants soak up {{35}} and so reduce {{40}}. Parks also shelter {{39}}.
              For these reasons planners now treat green space as essential.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
