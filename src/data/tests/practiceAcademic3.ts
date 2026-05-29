import type { IeltsTest, Option } from '../../types'

// Original practice test 3 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const map: Option[] = ['A', 'B', 'C', 'D', 'E', 'F'].map((v) => ({ value: v, label: '' }))

const headings: Option[] = [
  { value: 'i', label: 'Growing regions and varieties' },
  { value: 'ii', label: 'A legendary discovery' },
  { value: 'iii', label: 'Coffee and health' },
  { value: 'iv', label: 'From bean to cup: processing' },
  { value: 'v', label: 'The economics of coffee' },
  { value: 'vi', label: 'The spread of the coffee house' },
  { value: 'vii', label: 'The future of coffee' },
  { value: 'viii', label: 'Types of coffee drinks' },
  { value: 'ix', label: 'The environmental cost' },
]

const places: Option[] = [
  { value: 'A', label: 'Ethiopia' },
  { value: 'B', label: 'Arabia' },
  { value: 'C', label: 'Europe' },
  { value: 'D', label: 'the tropics' },
]

const who: Option[] = [
  { value: 'A', label: 'Sam' },
  { value: 'B', label: 'Ria' },
  { value: 'C', label: 'both students' },
]

export const practiceAcademic3: IeltsTest = {
  id: 'practice-academic-3',
  title: 'Practice Test 3 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  listening: {
    durationSec: 32 * 60,
    answerKey: {
      1: 'Patterson', 2: 'Italian', 3: 'Thursday', 4: '6.30', 5: '8', 6: '120', 7: 'apron', 8: '4', 9: 'Bianchi', 10: 'Friday',
      11: 'A', 12: 'B', 13: 'A', 14: 'B', 15: 'B', 16: 'B', 17: 'C', 18: 'F', 19: 'D', 20: 'A',
      21: 'A', 22: 'B', 23: 'C', 24: 'B', 25: 'B', 26: 'D', 27: 'C', 28: 'A', 29: 'B', 30: 'B',
      31: 'oil', 32: 'lightweight', 33: 'packaging', 34: 'oceans', 35: 'animals', 36: 'microplastics', 37: 'sorted', 38: 'melted', 39: 'quality', 40: 'reduce',
    },
    parts: [
      {
        number: 1,
        heading: 'Questions 1–10',
        context: 'A caller is enrolling in an evening cookery course.',
        transcript: [
          "Hello, Adult Learning Centre. How can I help? Hi, I'd like to enrol in an evening cookery course.",
          "Of course. Could I take your surname? It's Patterson — P, A, T, T, E, R, S, O, N.",
          "And which course would you like? The Italian cookery one, please.",
          "That course runs on Thursdays. What time does it start? At half past six — six thirty.",
          "How long does it last? It's an eight-week course. And how much does it cost? One hundred and twenty pounds.",
          "Do I need to bring anything? Just an apron. Which room is it in? Room four.",
          "And who teaches it? Chef Bianchi. When should I register by? Please register by Friday this week.",
        ],
        speakers: ['M', 'W'],
        groups: [
          {
            id: 'l1', type: 'inline-gap', instructions: 'Complete the form below.',
            wordLimit: 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
            bodyHtml: `
              <div style="border:1px solid var(--ielts-border);padding:1rem;max-width:30rem">
                <div style="font-weight:700;margin-bottom:.5rem">EVENING COURSE — Enrolment</div>
                <div style="display:grid;grid-template-columns:auto 1fr;gap:.5rem .75rem;align-items:center">
                  <div>Surname:</div><div>{{1}}</div>
                  <div>Course:</div><div>{{2}} cookery</div>
                  <div>Day:</div><div>{{3}}</div>
                  <div>Start time:</div><div>{{4}} pm</div>
                  <div>Length:</div><div>{{5}} weeks</div>
                  <div>Cost:</div><div>£{{6}}</div>
                  <div>Bring:</div><div>an {{7}}</div>
                  <div>Room:</div><div>{{8}}</div>
                  <div>Tutor:</div><div>Chef {{9}}</div>
                  <div>Register by:</div><div>{{10}}</div>
                </div>
              </div>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 1 })),
          },
        ],
      },
      {
        number: 2,
        heading: 'Questions 11–20',
        context: 'A guide describes Riverside Gardens.',
        transcript:
          "Welcome to Riverside Gardens. The gardens are at their best in spring, when the flowers bloom, so spring is the ideal time to visit. " +
          "Entry costs three pounds for adults. Our café is well known for its delicious cakes. " +
          "Dogs are welcome but must be kept on a lead. New this year is an exciting hedge maze near the river. " +
          "Let me help you find your way using the map. As you enter through the main gate at the bottom, the information desk is the building immediately on your right. " +
          "In the very centre of the gardens, beside the old oak, is our famous rose garden. " +
          "Up in the top corner, overlooking the lake, is the bird hide. " +
          "On your left, just past the pond, you'll find the children's play area. " +
          "And the tea room is in the bottom-left corner near the wall.",
        groups: [
          {
            id: 'l2a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 11, text: 'The best time to visit is', options: [{ value: 'A', label: 'spring.' }, { value: 'B', label: 'summer.' }, { value: 'C', label: 'autumn.' }] },
              { number: 12, text: 'Adult entry costs', options: [{ value: 'A', label: 'nothing.' }, { value: 'B', label: '£3.' }, { value: 'C', label: '£5.' }] },
              { number: 13, text: 'The café is known for its', options: [{ value: 'A', label: 'cakes.' }, { value: 'B', label: 'soups.' }, { value: 'C', label: 'ice cream.' }] },
              { number: 14, text: 'Dogs must be', options: [{ value: 'A', label: 'left outside.' }, { value: 'B', label: 'kept on a lead.' }, { value: 'C', label: 'carried.' }] },
              { number: 15, text: 'New this year is', options: [{ value: 'A', label: 'a glasshouse.' }, { value: 'B', label: 'a hedge maze.' }, { value: 'C', label: 'a fountain.' }] },
            ],
          },
          {
            id: 'l2b', type: 'map-labeling', instructions: 'Label the map below. Choose the correct letter, A–F.',
            imageUrl: 'sample/park-map.svg', options: map,
            questions: [
              { number: 16, text: 'Information desk' },
              { number: 17, text: 'Rose garden' },
              { number: 18, text: 'Bird hide' },
              { number: 19, text: "Children's play area" },
              { number: 20, text: 'Tea room' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Questions 21–30',
        context: 'Two students, Sam and Ria, plan a biology field trip.',
        transcript: [
          "Sam: Let's sort out our biology field trip. I'll bring the nets for catching insects.",
          "Ria: Great. I'll bring the notebooks for recording what we find.",
          "Sam: Good. What about a first-aid kit? Ria: Let's both bring one, just to be safe.",
          "Sam: Agreed, we'll both bring a first-aid kit. And the camera? Ria: I'll bring my camera as well.",
          "Sam: Now, which habitats should we study? Ria: I think the woodland and the river are the most interesting.",
          "Sam: Perfect — woodland and river it is. The trip is on Saturday, isn't it? Ria: Yes, Saturday.",
          "Sam: Where do we meet? Ria: At the school, then we travel together.",
          "Sam: And the main aim is to count the different species, right? Ria: Yes, to count species.",
          "Sam: When's the report due? Ria: In two weeks.",
        ],
        speakers: ['A', 'B'],
        groups: [
          {
            id: 'l3a', type: 'matching', instructions: 'Who will bring each item? Choose from the list.',
            options: who,
            questions: [
              { number: 21, text: 'Nets' },
              { number: 22, text: 'Notebooks' },
              { number: 23, text: 'First-aid kit' },
              { number: 24, text: 'Camera' },
            ],
          },
          {
            id: 'l3b', type: 'mcq-multi', instructions: 'Which TWO habitats will they study? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'pond' },
              { value: 'B', label: 'woodland' },
              { value: 'C', label: 'meadow' },
              { value: 'D', label: 'river' },
              { value: 'E', label: 'hedgerow' },
            ],
            questions: [{ number: 25 }, { number: 26 }],
          },
          {
            id: 'l3c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 27, text: 'The trip will take place on', options: [{ value: 'A', label: 'Monday.' }, { value: 'B', label: 'Wednesday.' }, { value: 'C', label: 'Saturday.' }] },
              { number: 28, text: 'They will meet at', options: [{ value: 'A', label: 'the school.' }, { value: 'B', label: 'the station.' }, { value: 'C', label: 'the car park.' }] },
              { number: 29, text: 'The main aim is to', options: [{ value: 'A', label: 'collect samples.' }, { value: 'B', label: 'count species.' }, { value: 'C', label: 'map the area.' }] },
              { number: 30, text: 'The report is due in', options: [{ value: 'A', label: 'one week.' }, { value: 'B', label: 'two weeks.' }, { value: 'C', label: 'a month.' }] },
            ],
          },
        ],
      },
      {
        number: 4,
        heading: 'Questions 31–40',
        context: 'Listen to part of a lecture about plastics and recycling.',
        transcript:
          "Today we'll look at plastics and recycling. Most plastics are made from oil, a fossil fuel. " +
          "They became hugely popular because they are cheap and lightweight. Their single biggest use is in packaging. " +
          "But plastics cause serious problems. A great deal of plastic waste ends up in the oceans. " +
          "There it harms marine animals, which swallow it or become tangled in it. Over time it breaks down into tiny fragments called microplastics. " +
          "How is plastic recycled? First the collected plastic is sorted by type. Then it is cleaned and melted down to be re-formed. " +
          "Unfortunately, recycled plastic is often of lower quality than new plastic. " +
          "That is why experts say the best solution is not to recycle more, but simply to reduce how much plastic we use in the first place.",
        groups: [
          {
            id: 'l4', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Write ONE WORD ONLY for each answer.',
            bodyHtml: `
              <div style="font-weight:700;margin-bottom:.4rem">Plastics and Recycling</div>
              <div style="font-weight:700;margin-top:.6rem">Background</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>most plastics are made from {{31}}</li>
                <li>popular because cheap and {{32}}</li>
                <li>biggest use is in {{33}}</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Problems</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>waste reaches the {{34}}</li>
                <li>harms marine {{35}}</li>
                <li>breaks into tiny {{36}}</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Recycling &amp; solution</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>plastic is collected and {{37}}</li>
                <li>then cleaned and {{38}}</li>
                <li>recycled plastic is lower {{39}}</li>
                <li>best to {{40}} how much we use</li>
              </ul>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 31 })),
          },
        ],
      },
    ],
  },

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'TRUE', 3: 'FALSE', 4: 'TRUE', 5: 'FALSE', 6: 'NOT GIVEN',
      7: 'Drais', 8: '1860s', 9: '1888',
      10: 'Germany', 11: 'boneshaker', 12: ['rear wheel', 'the rear wheel'], 13: 'freedom of movement',
      14: 'ii', 15: 'vi', 16: 'i', 17: 'iv', 18: 'v', 19: 'iii',
      20: 'A', 21: 'B', 22: 'C', 23: 'D', 24: 'A', 25: 'B', 26: 'B',
      27: 'YES', 28: 'NO', 29: 'NO', 30: 'YES', 31: 'NOT GIVEN',
      32: 'B', 33: 'D',
      34: 'cultures', 35: 'animals', 36: 'babies', 37: 'social', 38: 'others', 39: 'joke', 40: 'bonds',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'A short history of the bicycle',
        html: `
          <p><span class="passage-letter">A</span> The bicycle is barely two hundred years old. Its earliest ancestor, the "running machine" or draisine, was invented by Karl Drais in Germany in 1817. It had two wheels and a frame but no pedals; the rider simply pushed along the ground with their feet.</p>
          <p><span class="passage-letter">B</span> Pedals were added in the 1860s, creating the "velocipede", soon nicknamed the "boneshaker" because its iron-banded wheels made for a thoroughly uncomfortable ride on cobbled streets.</p>
          <p><span class="passage-letter">C</span> The 1870s brought the famous "penny-farthing", with its enormous front wheel. The large wheel allowed greater speed, but the high seat made falls genuinely dangerous.</p>
          <p><span class="passage-letter">D</span> The real breakthrough was the "safety bicycle" of the 1880s, with two wheels of equal size and a chain driving the rear wheel. Together with the air-filled tyre, patented by John Dunlop in 1888, it made cycling both comfortable and safe, and the bicycle's popularity exploded.</p>
          <p><span class="passage-letter">E</span> The bicycle had social effects too. It gave ordinary people cheap personal transport, and it is often credited with giving women, in particular, a new freedom of movement.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The first draisine had pedals.' },
              { number: 2, text: 'The "boneshaker" gave an uncomfortable ride.' },
              { number: 3, text: 'The penny-farthing was safer than earlier machines.' },
              { number: 4, text: 'The safety bicycle had two wheels of the same size.' },
              { number: 5, text: 'John Dunlop invented the chain drive.' },
              { number: 6, text: 'Bicycles were more popular with men than with women.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 7, text: 'The draisine was invented by Karl ___ in 1817.' },
              { number: 8, text: 'Pedals were first added in the ___.' },
              { number: 9, text: 'The air-filled tyre was patented in ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 10, text: 'In which country was the draisine invented?' },
              { number: 11, text: 'What was the velocipede nicknamed?' },
              { number: 12, text: 'Which wheel did the chain drive on the safety bicycle?' },
              { number: 13, text: 'What is the bicycle said to have given women?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The world of coffee',
        html: `
          <p><span class="passage-letter">A</span> The story of coffee begins with a legend. An Ethiopian goatherd named Kaldi, it is said, noticed that his goats became lively after eating the berries of a certain bush. Whatever the truth, coffee was first cultivated in the highlands of Ethiopia before spreading across the Red Sea to Arabia.</p>
          <p><span class="passage-letter">B</span> From Arabia the drink travelled widely. The first coffee houses opened in the cities of the Middle East, and by the seventeenth century they had reached Europe, where they quickly became lively centres of conversation, business and debate.</p>
          <p><span class="passage-letter">C</span> Coffee grows only in warm climates, in a band around the equator often called the "coffee belt". Two species dominate the trade: arabica, prized for its flavour, and robusta, which is hardier and higher in caffeine.</p>
          <p><span class="passage-letter">D</span> Turning the fruit into a drink takes several steps. The ripe red cherries are picked, the beans inside are dried, and only later are they roasted, which develops their familiar colour and aroma.</p>
          <p><span class="passage-letter">E</span> Coffee is also big business — one of the most heavily traded commodities in the world. Yet much of it is grown by small farmers who earn very little, which is why "fair trade" schemes have tried to return more of the price to them.</p>
          <p><span class="passage-letter">F</span> Finally, what of its effects on us? Research into caffeine is mixed: in moderation coffee appears largely harmless, and may even carry some benefits, though too much can disturb sleep.</p>`,
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
            id: 'r2b', type: 'matching', instructions: 'Match each fact with the correct place, A–D.',
            options: places,
            questions: [
              { number: 20, text: 'where the legend of Kaldi is set' },
              { number: 21, text: 'where the first coffee houses opened' },
              { number: 22, text: 'where coffee houses became centres of conversation in the 17th century' },
              { number: 23, text: 'where coffee is grown' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'The two main species of coffee are', options: [{ value: 'A', label: 'arabica and robusta.' }, { value: 'B', label: 'arabica and Kaldi.' }, { value: 'C', label: 'robusta and fair trade.' }] },
              { number: 25, text: 'During processing, after the cherries are picked, the beans are first', options: [{ value: 'A', label: 'roasted.' }, { value: 'B', label: 'dried.' }, { value: 'C', label: 'ground.' }] },
              { number: 26, text: 'The passage says most coffee is grown by', options: [{ value: 'A', label: 'large companies.' }, { value: 'B', label: 'small farmers.' }, { value: 'C', label: 'governments.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The science of laughter',
        html: `
          <p>Laughter feels trivial, yet it is one of the most universal of human behaviours. It is found in every culture ever studied, and it appears very early in life: babies begin to laugh long before they can speak, at around four months old.</p>
          <p>Nor is laughter unique to us. Researchers have recorded laughter-like sounds in chimpanzees and other apes when they play, and even rats appear to "chuckle" when they are tickled. This suggests that laughter is far older than human language.</p>
          <p>Perhaps the most surprising finding is how social laughter is. We laugh far more often in the company of other people than we do alone — by some estimates thirty times more. And, contrary to what you might expect, only a small fraction of everyday laughter actually follows a joke or anything obviously funny. Most of it simply oils the wheels of conversation.</p>
          <p>Why, then, do we do it? The leading view is that laughter evolved as a social signal. It tells others that we are relaxed and friendly, and it helps to build and strengthen the bonds between members of a group. Some researchers add that a good laugh may also help to relieve stress, though the evidence here is less settled.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Laughter is found in every culture that has been studied.' },
              { number: 28, text: 'Babies learn to laugh only after they can speak.' },
              { number: 29, text: 'Humans are the only animals capable of laughter.' },
              { number: 30, text: 'People laugh more in company than when they are alone.' },
              { number: 31, text: 'Laughter is an effective treatment for serious illness.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO statements about laughter does the passage make? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'It usually follows a joke.' },
              { value: 'B', label: 'It strengthens social bonds.' },
              { value: 'C', label: 'It happens mainly when alone.' },
              { value: 'D', label: 'It may help relieve stress.' },
              { value: 'E', label: 'It is learned from parents.' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>Laughter appears in all {{34}} and even in some {{35}}, such as apes and rats. It develops
              early: {{36}} laugh before they can speak. Above all, laughter is {{37}}; we laugh far more in
              the company of {{38}} than alone, and only a small part of it follows a {{39}}. Researchers
              believe it helps to strengthen social {{40}}.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },

  writing: {
    durationSec: 60 * 60,
    tasks: [
      {
        number: 1, minWords: 150,
        promptHtml: `
          <p>The table below shows the number of mobile phone subscriptions (in millions) in three
          countries in 2000 and 2020.</p>
          <p>Summarise the information by selecting and reporting the main features, and make comparisons
          where relevant.</p>
          <table style="border-collapse:collapse;margin-top:.75rem" border="1">
            <thead><tr><th style="padding:.4rem .8rem">Country</th><th style="padding:.4rem .8rem">2000</th><th style="padding:.4rem .8rem">2020</th></tr></thead>
            <tbody>
              <tr><td style="padding:.4rem .8rem">Japan</td><td style="padding:.4rem .8rem;text-align:center">60</td><td style="padding:.4rem .8rem;text-align:center">190</td></tr>
              <tr><td style="padding:.4rem .8rem">India</td><td style="padding:.4rem .8rem;text-align:center">3</td><td style="padding:.4rem .8rem;text-align:center">1150</td></tr>
              <tr><td style="padding:.4rem .8rem">Nigeria</td><td style="padding:.4rem .8rem;text-align:center">0.03</td><td style="padding:.4rem .8rem;text-align:center">200</td></tr>
            </tbody>
          </table>`,
      },
      {
        number: 2, minWords: 250,
        promptHtml: `
          <p>Write about the following topic:</p>
          <p style="font-weight:600">Some people prefer to study online, while others believe that
          traditional classroom learning is more effective.</p>
          <p>Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or
          experience.</p>`,
      },
    ],
  },
}
