import type { IeltsTest, Option } from '../../types'

// Original reading practice test 10 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const headings: Option[] = [
  { value: 'i', label: 'Glass made by people for the first time' },
  { value: 'ii', label: 'A material found in nature' },
  { value: 'iii', label: 'The art of glass-blowing' },
  { value: 'iv', label: 'Glass in windows and buildings' },
  { value: 'v', label: 'Glass and the growth of science' },
  { value: 'vi', label: 'Glass in the modern world' },
  { value: 'vii', label: 'Recycling glass' },
  { value: 'viii', label: 'The colours of glass' },
  { value: 'ix', label: 'Glass as an art form' },
]

export const practiceReading10: IeltsTest = {
  id: 'practice-reading-10',
  title: 'Practice Test 10 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'FALSE', 5: 'FALSE', 6: 'NOT GIVEN',
      7: 'Olympia', 8: '1896', 9: 'Athens', 10: 'four',
      11: ['Coubertin', 'de Coubertin', 'Pierre de Coubertin'], 12: '1900', 13: ['winter', 'Winter Games'],
      14: 'ii', 15: 'i', 16: 'iii', 17: 'iv', 18: 'v', 19: 'vi',
      20: 'A', 21: 'B', 22: 'C', 23: 'D',
      24: 'B', 25: 'A', 26: 'B',
      27: 'YES', 28: 'NO', 29: 'YES', 30: 'NO', 31: 'NOT GIVEN',
      32: 'A', 33: 'C',
      34: 'territory', 35: 'mate', 36: 'male', 37: 'learn', 38: 'dawn', 39: 'noise', 40: 'pitch',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The Olympic Games, old and new',
        html: `
          <p>The Olympic Games are among the oldest sporting events in the world. The ancient Games were held in Greece, at the sacred site of Olympia, where athletes from across the Greek world gathered to compete. They were not an annual event but were staged once every four years, a span the Greeks called an Olympiad.</p>
          <p>After many centuries the ancient Games came to an end, and for some fifteen hundred years they were not held at all. Their revival was largely the work of one man, a French educator named Pierre de Coubertin, who believed that international sport could bring nations together. Thanks to his efforts the first modern Olympic Games opened in Athens in 1896.</p>
          <p>The early modern Games were modest by today’s standards, and at first only men took part. Women competed for the first time at the following Games, held in 1900, though in just a handful of events. From these small beginnings the Olympics grew steadily, adding new sports and welcoming more nations at each celebration.</p>
          <p>The Games have since become the largest sporting event on Earth. A separate Winter Games, for sports played on snow and ice, was added in the twentieth century, and today thousands of athletes from almost every country take part. Yet the basic pattern set in ancient Greece remains: the world’s finest athletes, gathered in one place, once every four years.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The ancient Olympic Games were held in Greece.' },
              { number: 2, text: 'The ancient Games were held every year.' },
              { number: 3, text: 'The modern Games were revived by Pierre de Coubertin.' },
              { number: 4, text: 'The first modern Games were held in Paris.' },
              { number: 5, text: 'Women competed at the first modern Games in 1896.' },
              { number: 6, text: 'Hosting the Games is profitable for every city.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 7, text: 'The ancient Games were held at the site of ___.' },
              { number: 8, text: 'The first modern Games opened in the year ___.' },
              { number: 9, text: 'The first modern Games were held in ___.' },
              { number: 10, text: 'The Games are staged once every ___ years.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'Who was mainly responsible for reviving the modern Games?' },
              { number: 12, text: 'In which year did women first take part?' },
              { number: 13, text: 'Besides the summer Games, what other Games now exist?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The many uses of glass',
        html: `
          <p><span class="passage-letter">A</span> Long before anyone learned to make it, glass already existed in nature. When a volcano erupts, some of the molten rock can cool so quickly that it hardens into a natural glass called obsidian, prized by early peoples for its razor-sharp edges. Lightning striking sand can produce glass too.</p>
          <p><span class="passage-letter">B</span> The first glass made by human hands appeared in the ancient Near East, where craftsmen learned to melt sand with other minerals to form small beads and ornaments. For a long time glass was a rare and precious material, worked slowly and by hand into tiny objects.</p>
          <p><span class="passage-letter">C</span> Everything changed with the invention of glass-blowing. By gathering molten glass on the end of a hollow rod and blowing air into it, a worker could shape a hollow vessel in seconds. This made glass containers cheap and common for the first time, and bottles and cups spread across the ancient world.</p>
          <p><span class="passage-letter">D</span> Later, flat glass transformed buildings. Windows let in light while keeping out the weather, and as the craft improved, larger and clearer panes became possible. Whole walls of glass are now a familiar feature of modern architecture.</p>
          <p><span class="passage-letter">E</span> Glass also opened up the universe. Because it can be shaped into lenses that bend light, glass made possible the telescope and the microscope, instruments that revealed worlds too distant or too small for the naked eye and helped science advance.</p>
          <p><span class="passage-letter">F</span> Glass is still being reinvented. Today, fine threads of ultra-pure glass — optical fibres — carry vast amounts of information across the world as flashes of light, so that much of the modern internet travels, in effect, through glass.</p>`,
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
            id: 'r2b', type: 'matching', instructions: 'Which type of glass does each statement describe? Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'natural glass (obsidian)' },
              { value: 'B', label: 'blown glass' },
              { value: 'C', label: 'glass lenses' },
              { value: 'D', label: 'optical fibres' },
            ],
            questions: [
              { number: 20, text: 'forms naturally where volcanoes erupt' },
              { number: 21, text: 'is shaped cheaply by blowing air into molten glass' },
              { number: 22, text: 'bends light in order to magnify objects' },
              { number: 23, text: 'carries information across the world as light' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'Natural glass such as obsidian is formed by', options: [{ value: 'A', label: 'rivers.' }, { value: 'B', label: 'volcanoes.' }, { value: 'C', label: 'wind.' }] },
              { number: 25, text: 'Glass-blowing made glass containers', options: [{ value: 'A', label: 'cheaper and more common.' }, { value: 'B', label: 'rarer and dearer.' }, { value: 'C', label: 'much heavier.' }] },
              { number: 26, text: 'Glass lenses were especially important for', options: [{ value: 'A', label: 'farming.' }, { value: 'B', label: 'science.' }, { value: 'C', label: 'cooking.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Why birds sing',
        html: `
          <p>To human ears birdsong is one of the pleasures of a spring morning, but for the birds themselves it is serious business. Song is a tool of survival, used above all to defend a territory against rivals and to attract a mate. The cheerful sound we enjoy is, in fact, a contest and a courtship.</p>
          <p>In most species it is the male that sings, advertising his fitness and his ownership of a patch of ground. A strong, complex song tells other males to keep away and tells females that here is a healthy partner. Singing is hard work and signals that the bird is well fed and in good condition.</p>
          <p>Birds are not simply born knowing their songs. Like human children learning to speak, many young birds learn their songs by listening to the adults around them, and a bird raised in silence will never sing properly. This is why the songs of one species can differ slightly from one region to another, almost like a local accent.</p>
          <p>Anyone who has woken early in spring knows the dawn chorus, when birds sing most intensely. One reason is simply that the still morning air carries sound farthest, so a bird singing at dawn can be heard over the greatest distance for the least effort.</p>
          <p>Modern life has made singing harder. In towns and cities the constant noise of traffic can drown out a bird’s song, and studies show that some city birds now sing at a higher pitch, or more loudly, to be heard above the din. How well birds can adapt to our noisy world may decide which species thrive in the cities of the future.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'In most bird species, it is the male that sings.' },
              { number: 28, text: 'All birds are born already knowing their songs.' },
              { number: 29, text: 'Birds sing at dawn partly because the still air carries sound well.' },
              { number: 30, text: 'City birds tend to sing more quietly than country birds.' },
              { number: 31, text: 'Female birds of every species are completely silent.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO reasons for birdsong does the passage give? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'to defend a territory' },
              { value: 'B', label: 'to find food' },
              { value: 'C', label: 'to attract a mate' },
              { value: 'D', label: 'to navigate while flying' },
              { value: 'E', label: 'to keep warm' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Birdsong has two main purposes: defending a {{34}} and attracting a {{35}}. In most species it
              is the {{36}} that sings. Young birds {{37}} their songs from the adults around them. Birds sing
              most at {{38}}, when the still air carries sound farthest. In cities, traffic {{39}} can drown
              out their song, so some birds sing at a higher {{40}} to be heard.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
