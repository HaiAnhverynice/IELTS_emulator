import type { IeltsTest, Option } from '../../types'

// ---------------------------------------------------------------------------
// Original practice test (Academic). Written from scratch for this project so
// the simulator is usable without any copyrighted material. Released CC0.
// Listening audio is generated from the transcripts via the browser's speech
// synthesis (no audio files needed).
// ---------------------------------------------------------------------------

// Map markers A–F (labels live on the SVG, so the option labels are blank).
const mapOptions: Option[] = ['A', 'B', 'C', 'D', 'E', 'F'].map((v) => ({ value: v, label: '' }))

const headingOptions: Option[] = [
  { value: 'i', label: 'The cost of building new parks' },
  { value: 'ii', label: 'How green space affects physical and mental health' },
  { value: 'iii', label: 'Unequal access across neighbourhoods' },
  { value: 'iv', label: 'The spread of cities and why parks matter' },
  { value: 'v', label: 'Plant species found in urban parks' },
  { value: 'vi', label: 'Green space and the local economy' },
  { value: 'vii', label: 'Designing the cities of the future' },
  { value: 'viii', label: 'The environmental functions of urban greenery' },
  { value: 'ix', label: 'Problems with maintaining old parks' },
]

const cityOptions: Option[] = [
  { value: 'A', label: 'Singapore' },
  { value: 'B', label: 'Berlin' },
  { value: 'C', label: 'Toronto' },
  { value: 'D', label: 'Melbourne' },
]

export const practiceAcademic1: IeltsTest = {
  id: 'practice-academic-1',
  title: 'Practice Test 1 — Academic',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with or endorsed by Cambridge/IELTS.',

  // =========================================================================
  // LISTENING
  // =========================================================================
  listening: {
    durationSec: 32 * 60,
    answerKey: {
      1: 'Marsden',
      2: ['12 March', '12th March'],
      3: 'Brookfield',
      4: 'LS6 4QP',
      5: 'badminton',
      6: 'off-peak',
      7: '29.50',
      8: ['3 May', '3rd May'],
      9: 'leaflet',
      10: 'parking',
      11: 'B',
      12: 'C',
      13: 'B',
      14: 'B',
      15: 'B',
      16: 'D',
      17: 'F',
      18: 'C',
      19: 'A',
      20: 'A',
      21: 'C',
      22: 'A',
      23: 'A',
      24: 'C',
      25: 'B',
      26: 'D',
      27: 'B',
      28: 'A',
      29: 'C',
      30: 'A',
      31: 'concrete',
      32: 'vegetation',
      33: 'buildings',
      34: 'night',
      35: 'health',
      36: 'elderly',
      37: 'reflective',
      38: 'trees',
      39: 'water',
      40: 'transport',
    },
    parts: [
      {
        number: 1,
        heading: 'Questions 1–10',
        context: 'Listen and complete the membership form below.',
        transcript: [
          "Good morning, Brookfield Community Sports Centre, how can I help?",
          "Hi, I'd like to join as a member.",
          "Of course. Can I take your full name?",
          "Yes, it's Helen Marsden. That's M, A, R, S, D, E, N.",
          "Thank you. And your date of birth?",
          "The twelfth of March, nineteen ninety-six.",
          "Lovely. What's your address?",
          "It's fourteen Brookfield Road, the same Brookfield as the centre.",
          "Great, and the postcode?",
          "It's L S six, four Q P.",
          "Which sport are you mainly interested in?",
          "Mainly badminton.",
          "We offer peak and off-peak memberships. Which would you like?",
          "Off-peak, please, as I can come during the day.",
          "That will be twenty-nine pounds fifty a month.",
          "That's fine.",
          "When would you like to start?",
          "The third of May, please.",
          "And how did you hear about us?",
          "I picked up a leaflet at the library.",
          "Do you have any special requirements?",
          "Just parking — I'll be driving in.",
          "No problem, members can use our car park.",
        ],
        speakers: ['M', 'W'],
        groups: [
          {
            id: 'l1',
            type: 'inline-gap',
            instructions: 'Complete the form below.',
            wordLimit: 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
            bodyHtml: `
              <div style="border:1px solid var(--ielts-border);padding:1rem;max-width:30rem">
                <div style="font-weight:700;margin-bottom:.5rem">BROOKFIELD SPORTS CENTRE — Membership form</div>
                <div style="display:grid;grid-template-columns:auto 1fr;gap:.5rem .75rem;align-items:center">
                  <div>Name:</div><div>Helen {{1}}</div>
                  <div>Date of birth:</div><div>{{2}}</div>
                  <div>Address:</div><div>14 {{3}} Road</div>
                  <div>Postcode:</div><div>{{4}}</div>
                  <div>Main sport:</div><div>{{5}}</div>
                  <div>Membership type:</div><div>{{6}}</div>
                  <div>Monthly fee:</div><div>£{{7}}</div>
                  <div>Start date:</div><div>{{8}}</div>
                  <div>Heard about us from:</div><div>a {{9}}</div>
                  <div>Special requirement:</div><div>{{10}}</div>
                </div>
              </div>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 1 })),
          },
        ],
      },
      {
        number: 2,
        heading: 'Questions 11–20',
        context: 'A guide is giving information about Brookfield Country Park.',
        transcript:
          "Welcome to Brookfield Country Park. The park is open all year round. " +
          "It is quietest on weekday mornings, but it gets very busy on weekend afternoons, " +
          "so do come early if you want a peaceful walk. " +
          "Our café serves hot food until five o'clock, and stays open for drinks until six. " +
          "Dogs are very welcome, but they must be kept on a lead at all times. " +
          "This year we are proud to have opened an exciting new tree-top walk. " +
          "Now, let me help you find your way around using the map. " +
          "As you come in through the main gate at the bottom, the visitor centre is the building " +
          "immediately on your right. Follow the main path north, and the children's playground is on " +
          "your left, just past the pond. Continue right to the top corner, where the bird hide looks out " +
          "over the lake. And the picnic area is in the centre of the park, beside the old oak tree. " +
          "If you would like a group tour, these must be booked online at least a week in advance. " +
          "Finally, the park is free to enter; we raise most of our funds through parking charges rather than from the café.",
        groups: [
          {
            id: 'l2a',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              {
                number: 11,
                text: 'The park is busiest on',
                options: [
                  { value: 'A', label: 'weekday mornings.' },
                  { value: 'B', label: 'weekend afternoons.' },
                  { value: 'C', label: 'public holidays.' },
                ],
              },
              {
                number: 12,
                text: 'The café stays open until',
                options: [
                  { value: 'A', label: '4 pm.' },
                  { value: 'B', label: '5 pm.' },
                  { value: 'C', label: '6 pm.' },
                ],
              },
              {
                number: 13,
                text: 'In the park, dogs must',
                options: [
                  { value: 'A', label: 'be left at the entrance.' },
                  { value: 'B', label: 'be kept on a lead.' },
                  { value: 'C', label: 'stay in the car park.' },
                ],
              },
              {
                number: 14,
                text: 'The new attraction this year is',
                options: [
                  { value: 'A', label: 'a boating lake.' },
                  { value: 'B', label: 'a tree-top walk.' },
                  { value: 'C', label: 'a butterfly house.' },
                ],
              },
            ],
          },
          {
            id: 'l2b',
            type: 'map-labeling',
            instructions: 'Label the map below. Choose the correct letter, A–F.',
            imageUrl: 'sample/park-map.svg',
            options: mapOptions,
            questions: [
              { number: 15, text: 'Visitor centre' },
              { number: 16, text: "Children's playground" },
              { number: 17, text: 'Bird hide' },
              { number: 18, text: 'Picnic area' },
            ],
          },
          {
            id: 'l2c',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              {
                number: 19,
                text: 'Group tours must be booked',
                options: [
                  { value: 'A', label: 'online.' },
                  { value: 'B', label: 'by phone.' },
                  { value: 'C', label: 'in person.' },
                ],
              },
              {
                number: 20,
                text: 'The park raises most of its money from',
                options: [
                  { value: 'A', label: 'parking charges.' },
                  { value: 'B', label: 'the café.' },
                  { value: 'C', label: 'entrance fees.' },
                ],
              },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Questions 21–30',
        context: 'Two students, Mei and Tom, are planning a geography project.',
        transcript: [
          "Mei: So, our geography project — we agreed it's on urban flooding, right?",
          "Tom: Yes, urban flooding. There's so much we could cover.",
          "Mei: I think we should focus on just one neighbourhood, rather than the whole city.",
          "Tom: Agreed — one neighbourhood is far more manageable. My main worry is time; we've only got three weeks.",
          "Mei: True, time is really tight. Did you see what our tutor suggested?",
          "Tom: She said we should use the council's flood maps.",
          "Mei: Good idea — the council maps will save us a lot of effort. Now, for collecting data, which methods shall we use?",
          "Tom: Let's use rainfall records and satellite images. I think those two are the most reliable.",
          "Mei: Perfect — rainfall records and satellite images it is. So who does what?",
          "Tom: I'll contact the council for the maps.",
          "Mei: Great, and I'll analyse the rainfall data.",
          "Tom: We should write the introduction together.",
          "Mei: Yes, let's both do the introduction. And I'll prepare the presentation afterwards.",
          "Tom: Thanks — that's the presentation sorted, then.",
        ],
        speakers: ['A', 'B'],
        groups: [
          {
            id: 'l3a',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              {
                number: 21,
                text: 'Their project is about',
                options: [
                  { value: 'A', label: 'river pollution.' },
                  { value: 'B', label: 'coastal erosion.' },
                  { value: 'C', label: 'urban flooding.' },
                ],
              },
              {
                number: 22,
                text: 'They decide to focus on',
                options: [
                  { value: 'A', label: 'one neighbourhood.' },
                  { value: 'B', label: 'the whole city.' },
                  { value: 'C', label: 'three rivers.' },
                ],
              },
              {
                number: 23,
                text: 'Tom is mainly worried about',
                options: [
                  { value: 'A', label: 'time.' },
                  { value: 'B', label: 'cost.' },
                  { value: 'C', label: 'access to data.' },
                ],
              },
              {
                number: 24,
                text: 'Their tutor suggested using',
                options: [
                  { value: 'A', label: 'more interviews.' },
                  { value: 'B', label: 'a questionnaire.' },
                  { value: 'C', label: 'council maps.' },
                ],
              },
            ],
          },
          {
            id: 'l3b',
            type: 'mcq-multi',
            instructions: 'Which TWO methods will the students use to collect data? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'questionnaires' },
              { value: 'B', label: 'rainfall records' },
              { value: 'C', label: 'interviews with residents' },
              { value: 'D', label: 'satellite images' },
              { value: 'E', label: 'soil samples' },
            ],
            questions: [{ number: 25 }, { number: 26 }],
          },
          {
            id: 'l3c',
            type: 'matching',
            instructions: 'Who will do each task? Choose your answer from the list.',
            options: [
              { value: 'A', label: 'Mei' },
              { value: 'B', label: 'Tom' },
              { value: 'C', label: 'both students' },
            ],
            questions: [
              { number: 27, text: 'Contact the council' },
              { number: 28, text: 'Analyse the rainfall data' },
              { number: 29, text: 'Write the introduction' },
              { number: 30, text: 'Prepare the presentation' },
            ],
          },
        ],
      },
      {
        number: 4,
        heading: 'Questions 31–40',
        context: 'Listen to part of a lecture on urban heat islands.',
        transcript:
          "Today we look at the urban heat island effect — why cities are warmer than the surrounding countryside. " +
          "The first cause is the materials we build with. Dark surfaces, especially concrete, absorb the sun's heat during the day and store it. " +
          "Secondly, when we build, we remove vegetation; plants cool the air through shade and evaporation, so losing them removes that natural cooling. " +
          "A third source is waste heat — the heat that pours out from traffic and from buildings, particularly their cooling systems. " +
          "The effects are significant. Unlike rural areas, cities stay warm at night, because the stored heat is released only slowly. " +
          "This has real consequences for human health; during heatwaves, hospital admissions rise. The groups most at risk are the elderly and young children. " +
          "Fortunately, there are solutions. Painting roofs in pale, reflective colours bounces sunlight away. " +
          "Planting more trees provides shade and cooling. Adding water features, such as fountains and ponds, lowers local temperatures. " +
          "And by improving public transport, we cut the number of cars, and with them the traffic heat.",
        groups: [
          {
            id: 'l4',
            type: 'inline-gap',
            instructions: 'Complete the notes below.',
            wordLimit: 'Write ONE WORD ONLY for each answer.',
            bodyHtml: `
              <div style="font-weight:700;margin-bottom:.4rem">Urban Heat Islands</div>
              <div style="font-weight:700;margin-top:.6rem">Causes</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>dark materials, especially {{31}}, absorb and store heat</li>
                <li>removing {{32}} reduces natural cooling</li>
                <li>waste heat comes from traffic and from {{33}}</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Effects</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>cities stay warm at {{34}}</li>
                <li>consequences for human {{35}}</li>
                <li>greatest risk to the {{36}} and young children</li>
              </ul>
              <div style="font-weight:700;margin-top:.6rem">Solutions</div>
              <ul style="margin:.2rem 0 .2rem 1.1rem;list-style:disc">
                <li>paint roofs with pale, {{37}} colours</li>
                <li>plant more {{38}}</li>
                <li>add {{39}} features such as fountains</li>
                <li>improve public {{40}}</li>
              </ul>`,
            questions: Array.from({ length: 10 }, (_, i) => ({ number: i + 31 })),
          },
        ],
      },
    ],
  },

  // =========================================================================
  // READING
  // =========================================================================
  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE',
      2: 'TRUE',
      3: 'FALSE',
      4: 'TRUE',
      5: 'FALSE',
      6: 'NOT GIVEN',
      7: 'China',
      8: 'lacquer',
      9: 'women',
      10: 'coachmen',
      11: '1852',
      12: 'whalebone',
      13: ['nylon and fibreglass', 'fibreglass and nylon'],
      14: 'iv',
      15: 'ii',
      16: 'vi',
      17: 'viii',
      18: 'iii',
      19: 'vii',
      20: 'A',
      21: 'B',
      22: 'C',
      23: 'D',
      24: 'B',
      25: 'B',
      26: 'B',
      27: 'YES',
      28: 'NO',
      29: 'YES',
      30: 'NO',
      31: 'NOT GIVEN',
      32: 'B',
      33: 'B',
      34: 'B',
      35: 'B',
      36: 'slow-wave',
      37: ['cortex', 'neocortex'],
      38: 'REM',
      39: 'emotional',
      40: 'nap',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'A short history of the umbrella',
        html: `
          <p><span class="passage-letter">A</span> The umbrella, now such a common object, has a history stretching back more than three thousand years. The earliest examples appear in the art of ancient Egypt, Assyria and China, where they were used not against the rain but against the sun. In these hot climates a shaded canopy carried above an important person was a mark of rank, not a practical tool for everyone.</p>
          <p><span class="passage-letter">B</span> It was in China that the umbrella was first made waterproof. Craftsmen coated paper canopies with wax and lacquer so that they would shed water. From China the collapsible frame spread along trade routes — first to Korea, then to Japan, and eventually to the Middle East and Europe.</p>
          <p><span class="passage-letter">C</span> In Europe the umbrella was at first regarded as an item for women only. A man who carried one in eighteenth-century London risked ridicule. The traveller and writer Jonas Hanway is usually credited with making the umbrella acceptable for men: he carried one in public for some thirty years, until his death in 1786, enduring the mockery of coachmen, who feared losing business on rainy days.</p>
          <p><span class="passage-letter">D</span> The nineteenth century brought rapid technical change. In 1852 Samuel Fox patented a lightweight steel frame that replaced the heavy whalebone ribs used until then. Mass production followed, and the umbrella soon became cheap enough for ordinary people to own.</p>
          <p><span class="passage-letter">E</span> Today the basic design has changed little since Fox's frame, although new materials such as nylon and fibreglass have made umbrellas lighter and stronger. Despite many attempts to invent a completely new form, the folding umbrella of the twentieth century remains the only truly significant modern innovation.</p>`,
        groups: [
          {
            id: 'r1a',
            type: 'tfng',
            instructions:
              'Do the following statements agree with the information in Reading Passage 1? Choose TRUE if the statement agrees, FALSE if it contradicts, or NOT GIVEN if there is no information.',
            questions: [
              { number: 1, text: 'The earliest umbrellas were used mainly for protection from the sun.', evidence: 'The earliest examples appear in the art of ancient Egypt, Assyria and China, where they were used not against the rain but against the sun.' },
              { number: 2, text: 'Umbrellas were first made waterproof in China.', evidence: 'It was in China that the umbrella was first made waterproof.' },
              { number: 3, text: 'Jonas Hanway was the first person to manufacture umbrellas in large numbers.', evidence: 'The traveller and writer Jonas Hanway is usually credited with making the umbrella acceptable for men' },
              { number: 4, text: 'Hanway carried an umbrella in public for more than twenty years.', evidence: 'he carried one in public for some thirty years, until his death in 1786' },
              { number: 5, text: "Samuel Fox's frame was made of whalebone.", evidence: 'In 1852 Samuel Fox patented a lightweight steel frame that replaced the heavy whalebone ribs used until then.' },
              { number: 6, text: 'Modern nylon umbrellas are more popular than folding umbrellas.' },
            ],
          },
          {
            id: 'r1b',
            type: 'inline-gap',
            instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>The umbrella is over three thousand years old, first appearing in the art of ancient Egypt,
              Assyria and {{7}}. Chinese craftsmen made their canopies waterproof by adding wax and
              {{8}}. In Europe the umbrella was for a long time considered suitable only for
              {{9}}. The mockery that Jonas Hanway received came mainly from {{10}}, who worried about
              their trade in wet weather.</p>`,
            questions: [
              { number: 7, evidence: 'The earliest examples appear in the art of ancient Egypt, Assyria and China' },
              { number: 8, evidence: 'Craftsmen coated paper canopies with wax and lacquer so that they would shed water.' },
              { number: 9, evidence: 'In Europe the umbrella was at first regarded as an item for women only.' },
              { number: 10, evidence: 'enduring the mockery of coachmen, who feared losing business on rainy days.' },
            ],
          },
          {
            id: 'r1c',
            type: 'short-answer',
            instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'In which year did Samuel Fox patent his frame?', evidence: 'In 1852 Samuel Fox patented a lightweight steel frame' },
              { number: 12, text: 'Which heavy material was used for umbrella ribs before steel?', evidence: 'replaced the heavy whalebone ribs used until then' },
              { number: 13, text: 'Which two modern materials have made umbrellas lighter and stronger?', evidence: 'new materials such as nylon and fibreglass have made umbrellas lighter and stronger' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Green spaces in the modern city',
        html: `
          <p><span class="passage-letter">A</span> For the first time in history, more than half the world's people live in cities, and the proportion is rising fast. As built-up areas expand, the patches of greenery within them — parks, gardens, tree-lined streets — are no longer seen as luxuries but as essential infrastructure. Understanding what they do, and for whom, has become an urgent task for planners.</p>
          <p><span class="passage-letter">B</span> Much recent research has focused on well-being. Controlled studies have found that people who can see or walk among trees report lower levels of stress, and recover faster from illness. A study in Toronto found that residents of tree-lined streets reported better physical health than those living on bare ones, even after income was taken into account.</p>
          <p><span class="passage-letter">C</span> Green space also has measurable economic value. Homes near a well-kept park command higher prices, and attractive public gardens draw tourists and shoppers into city centres. Berlin, for instance, funds community gardens on disused land, partly to revive struggling districts.</p>
          <p><span class="passage-letter">D</span> The environmental functions of urban greenery are perhaps the most important of all. Trees and grass cool the air, filter pollutants, and absorb rainwater that would otherwise overwhelm drains. In Singapore, planners now require new buildings to replace any greenery lost at ground level with planting on roofs and walls.</p>
          <p><span class="passage-letter">E</span> Yet access to these benefits is far from equal. Across many cities, the poorest neighbourhoods have the least green space, the fewest trees and the smallest parks. Correcting this imbalance, researchers argue, is a matter of fairness as much as of ecology.</p>
          <p><span class="passage-letter">F</span> What might the green city of the future look like? Some designers imagine towers wrapped in vegetation and streets that double as gardens. Melbourne has even given individual trees their own identities, mapping and naming them so that residents feel responsible for their care. Whatever form it takes, the trend is clear: greenery is moving from the edges of the city to its very centre.</p>`,
        groups: [
          {
            id: 'r2a',
            type: 'matching-headings',
            instructions:
              'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings.',
            options: headingOptions,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: "For the first time in history, more than half the world's people live in cities, and the proportion is rising fast." },
              { number: 15, text: 'Paragraph B', evidence: 'people who can see or walk among trees report lower levels of stress, and recover faster from illness' },
              { number: 16, text: 'Paragraph C', evidence: 'Green space also has measurable economic value.' },
              { number: 17, text: 'Paragraph D', evidence: 'The environmental functions of urban greenery are perhaps the most important of all.' },
              { number: 18, text: 'Paragraph E', evidence: 'Yet access to these benefits is far from equal.' },
              { number: 19, text: 'Paragraph F', evidence: 'What might the green city of the future look like?' },
            ],
          },
          {
            id: 'r2b',
            type: 'matching',
            instructions:
              'Match each description with the correct city, A–D. You may use any letter more than once.',
            options: cityOptions,
            questions: [
              { number: 20, text: 'requires new buildings to replace lost greenery higher up', evidence: 'In Singapore, planners now require new buildings to replace any greenery lost at ground level with planting on roofs and walls.' },
              { number: 21, text: 'supports community gardens on unused land', evidence: 'Berlin, for instance, funds community gardens on disused land, partly to revive struggling districts.' },
              { number: 22, text: "linked street trees to residents' health", evidence: 'A study in Toronto found that residents of tree-lined streets reported better physical health than those living on bare ones' },
              { number: 23, text: 'has given individual trees their own identities', evidence: 'Melbourne has even given individual trees their own identities, mapping and naming them' },
            ],
          },
          {
            id: 'r2c',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              {
                number: 24,
                text: 'According to the passage, the most important benefit of urban greenery is',
                evidence: 'The environmental functions of urban greenery are perhaps the most important of all.',
                options: [
                  { value: 'A', label: 'its economic value.' },
                  { value: 'B', label: 'its environmental function.' },
                  { value: 'C', label: 'its beauty.' },
                ],
              },
              {
                number: 25,
                text: 'The passage states that the poorest neighbourhoods generally have',
                evidence: 'the poorest neighbourhoods have the least green space, the fewest trees and the smallest parks',
                options: [
                  { value: 'A', label: 'newer parks.' },
                  { value: 'B', label: 'less green space.' },
                  { value: 'C', label: 'more community gardens.' },
                ],
              },
              {
                number: 26,
                text: 'The writer concludes that, in future cities, greenery will',
                evidence: 'greenery is moving from the edges of the city to its very centre',
                options: [
                  { value: 'A', label: 'disappear from the centre.' },
                  { value: 'B', label: 'become more central.' },
                  { value: 'C', label: 'be limited to rooftops.' },
                ],
              },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Sleep and the making of memory',
        html: `
          <p>For most of the twentieth century, sleep was treated as a passive state — a nightly shutdown during which little of interest happened. That view has been overturned. We now know that sleep is an active process, and that one of its central jobs is to consolidate memory: to take the fragile traces of the day's experiences and turn them into durable knowledge.</p>
          <p>The brain does not do this in a single way. Sleep unfolds in cycles, and different stages serve different kinds of memory. During deep, slow-wave sleep, the brain appears to replay the day's events, gradually transferring them from the hippocampus, a temporary store, to the cortex, where they are held for the long term. This stage is especially important for memory of facts and events. Rapid-eye-movement, or REM, sleep, when most dreaming occurs, plays a different role: it is linked to emotional memory and to the procedural memory that underlies newly learned skills.</p>
          <p>Striking evidence comes from the laboratory. In one classic experiment, two groups learned a list of paired words. One group then slept; the other stayed awake. When both were tested later, the group that had slept recalled markedly more word pairs than the group that had not. Sleep, it seems, does not merely protect memories from interference — it actively strengthens them.</p>
          <p>The reverse is also revealing. Losing sleep harms memory, but not in the way many assume. Sleep deprivation has surprisingly little effect on memories that are already firmly stored; its main damage is to the forming of new memories. A tired brain struggles to lay down fresh traces in the first place.</p>
          <p>These findings carry a practical message, particularly for students. Pulling an all-nighter before an exam is doubly counter-productive, since it sacrifices exactly the sleep that would have secured the day's learning. Even short rest helps: researchers have found that a brief nap taken soon after studying can improve later recall. Naps, however, are a useful supplement; they cannot substitute for a full night's sleep.</p>`,
        groups: [
          {
            id: 'r3a',
            type: 'ynng',
            instructions:
              "Do the following statements agree with the claims of the writer? Choose YES, NO, or NOT GIVEN.",
            questions: [
              { number: 27, text: 'Sleep plays an active role in forming memories.', evidence: 'We now know that sleep is an active process, and that one of its central jobs is to consolidate memory' },
              { number: 28, text: 'All types of memory are strengthened during the same stage of sleep.', evidence: 'Sleep unfolds in cycles, and different stages serve different kinds of memory.' },
              { number: 29, text: 'A short nap can improve learning.', evidence: 'a brief nap taken soon after studying can improve later recall' },
              { number: 30, text: 'Naps can fully replace a night of sleep for students.', evidence: 'Naps, however, are a useful supplement; they cannot substitute for a full night\'s sleep.' },
              { number: 31, text: 'Sleeping pills improve memory consolidation.' },
            ],
          },
          {
            id: 'r3b',
            type: 'mcq-single',
            instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              {
                number: 32,
                text: 'Slow-wave sleep is most important for memory of',
                evidence: 'This stage is especially important for memory of facts and events.',
                options: [
                  { value: 'A', label: 'emotions.' },
                  { value: 'B', label: 'facts and events.' },
                  { value: 'C', label: 'physical skills.' },
                ],
              },
              {
                number: 33,
                text: 'REM sleep is associated with',
                evidence: 'it is linked to emotional memory and to the procedural memory that underlies newly learned skills',
                options: [
                  { value: 'A', label: 'factual recall only.' },
                  { value: 'B', label: 'emotional and procedural memory.' },
                  { value: 'C', label: 'a complete shutdown of the brain.' },
                ],
              },
              {
                number: 34,
                text: 'In the word-pair experiment, the group that slept',
                evidence: 'the group that had slept recalled markedly more word pairs than the group that had not',
                options: [
                  { value: 'A', label: 'forgot more pairs.' },
                  { value: 'B', label: 'recalled more pairs.' },
                  { value: 'C', label: 'performed the same as the others.' },
                ],
              },
              {
                number: 35,
                text: 'Sleep deprivation mainly damages',
                evidence: 'its main damage is to the forming of new memories',
                options: [
                  { value: 'A', label: 'memories that are already stored.' },
                  { value: 'B', label: 'the forming of new memories.' },
                  { value: 'C', label: 'emotional stability.' },
                ],
              },
            ],
          },
          {
            id: 'r3c',
            type: 'inline-gap',
            instructions: 'Complete the summary below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            bodyHtml: `
              <p>During deep, {{36}} sleep, the brain replays the day's experiences, transferring them from
              the hippocampus to the {{37}} for long-term storage. {{38}} sleep, when most dreaming occurs,
              helps to process {{39}} memories and newly learned skills. Researchers also found that a short
              {{40}} taken soon after studying improved later recall.</p>`,
            questions: [
              { number: 36, evidence: "During deep, slow-wave sleep, the brain appears to replay the day's events" },
              { number: 37, evidence: 'transferring them from the hippocampus, a temporary store, to the cortex' },
              { number: 38, evidence: 'Rapid-eye-movement, or REM, sleep, when most dreaming occurs' },
              { number: 39, evidence: 'it is linked to emotional memory and to the procedural memory' },
              { number: 40, evidence: 'a brief nap taken soon after studying can improve later recall' },
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // WRITING
  // =========================================================================
  writing: {
    durationSec: 60 * 60,
    tasks: [
      {
        number: 1,
        minWords: 150,
        promptHtml: `
          <p>The table below shows the number of visitors (in thousands) to four types of tourist
          attraction in one European country in 2010 and 2020.</p>
          <p>Summarise the information by selecting and reporting the main features, and make comparisons
          where relevant.</p>
          <table style="border-collapse:collapse;margin-top:.75rem" border="1">
            <thead>
              <tr><th style="padding:.4rem .8rem">Attraction</th><th style="padding:.4rem .8rem">2010</th><th style="padding:.4rem .8rem">2020</th></tr>
            </thead>
            <tbody>
              <tr><td style="padding:.4rem .8rem">Museums</td><td style="padding:.4rem .8rem;text-align:center">120</td><td style="padding:.4rem .8rem;text-align:center">180</td></tr>
              <tr><td style="padding:.4rem .8rem">Theme parks</td><td style="padding:.4rem .8rem;text-align:center">200</td><td style="padding:.4rem .8rem;text-align:center">240</td></tr>
              <tr><td style="padding:.4rem .8rem">Historic sites</td><td style="padding:.4rem .8rem;text-align:center">95</td><td style="padding:.4rem .8rem;text-align:center">90</td></tr>
              <tr><td style="padding:.4rem .8rem">Zoos</td><td style="padding:.4rem .8rem;text-align:center">150</td><td style="padding:.4rem .8rem;text-align:center">130</td></tr>
            </tbody>
          </table>`,
      },
      {
        number: 2,
        minWords: 250,
        promptHtml: `
          <p>Write about the following topic:</p>
          <p style="font-weight:600">Some people believe that the main purpose of universities should be to
          provide students with the skills they need for the workplace. Others think universities should
          focus on pursuing knowledge for its own sake.</p>
          <p>Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or
          experience.</p>`,
      },
    ],
  },
}
