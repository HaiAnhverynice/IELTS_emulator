import type { IeltsTest, Option } from '../../types'

// ---------------------------------------------------------------------------
// Original practice test (Academic). Written from scratch for this project so
// the simulator is usable without any copyrighted material. Released CC0.
// ---------------------------------------------------------------------------

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
              { number: 1, text: 'The earliest umbrellas were used mainly for protection from the sun.' },
              { number: 2, text: 'Umbrellas were first made waterproof in China.' },
              { number: 3, text: 'Jonas Hanway was the first person to manufacture umbrellas in large numbers.' },
              { number: 4, text: 'Hanway carried an umbrella in public for more than twenty years.' },
              { number: 5, text: "Samuel Fox's frame was made of whalebone." },
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
            questions: [{ number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }],
          },
          {
            id: 'r1c',
            type: 'short-answer',
            instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'In which year did Samuel Fox patent his frame?' },
              { number: 12, text: 'Which heavy material was used for umbrella ribs before steel?' },
              { number: 13, text: 'Which two modern materials have made umbrellas lighter and stronger?' },
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
              { number: 14, text: 'Paragraph A' },
              { number: 15, text: 'Paragraph B' },
              { number: 16, text: 'Paragraph C' },
              { number: 17, text: 'Paragraph D' },
              { number: 18, text: 'Paragraph E' },
              { number: 19, text: 'Paragraph F' },
            ],
          },
          {
            id: 'r2b',
            type: 'matching',
            instructions:
              'Match each description with the correct city, A–D. You may use any letter more than once.',
            options: cityOptions,
            questions: [
              { number: 20, text: 'requires new buildings to replace lost greenery higher up' },
              { number: 21, text: 'supports community gardens on unused land' },
              { number: 22, text: "linked street trees to residents' health" },
              { number: 23, text: 'has given individual trees their own identities' },
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
                options: [
                  { value: 'A', label: 'its economic value.' },
                  { value: 'B', label: 'its environmental function.' },
                  { value: 'C', label: 'its beauty.' },
                ],
              },
              {
                number: 25,
                text: 'The passage states that the poorest neighbourhoods generally have',
                options: [
                  { value: 'A', label: 'newer parks.' },
                  { value: 'B', label: 'less green space.' },
                  { value: 'C', label: 'more community gardens.' },
                ],
              },
              {
                number: 26,
                text: 'The writer concludes that, in future cities, greenery will',
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
              { number: 27, text: 'Sleep plays an active role in forming memories.' },
              { number: 28, text: 'All types of memory are strengthened during the same stage of sleep.' },
              { number: 29, text: 'A short nap can improve learning.' },
              { number: 30, text: 'Naps can fully replace a night of sleep for students.' },
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
                options: [
                  { value: 'A', label: 'emotions.' },
                  { value: 'B', label: 'facts and events.' },
                  { value: 'C', label: 'physical skills.' },
                ],
              },
              {
                number: 33,
                text: 'REM sleep is associated with',
                options: [
                  { value: 'A', label: 'factual recall only.' },
                  { value: 'B', label: 'emotional and procedural memory.' },
                  { value: 'C', label: 'a complete shutdown of the brain.' },
                ],
              },
              {
                number: 34,
                text: 'In the word-pair experiment, the group that slept',
                options: [
                  { value: 'A', label: 'forgot more pairs.' },
                  { value: 'B', label: 'recalled more pairs.' },
                  { value: 'C', label: 'performed the same as the others.' },
                ],
              },
              {
                number: 35,
                text: 'Sleep deprivation mainly damages',
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
            questions: [{ number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
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
