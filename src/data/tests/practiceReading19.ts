import type { IeltsTest, Option } from '../../types'

// Original reading practice test 19 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const paragraphAG: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

const sunHeadings: Option[] = [
  { value: 'i', label: 'The history of sun protection' },
  { value: 'ii', label: 'A label that promises more than it delivers' },
  { value: 'iii', label: 'Treating burns once they have happened' },
  { value: 'iv', label: 'The invisible nature of the risk' },
  { value: 'v', label: 'Protection that does not come in a bottle' },
  { value: 'vi', label: 'How to apply sunscreen properly' },
  { value: 'vii', label: 'A balance between benefit and harm' },
  { value: 'viii', label: 'Why skin cancer rates are rising' },
]

export const practiceReading19: IeltsTest = {
  id: 'practice-reading-19',
  title: 'Practice Test 19 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'D', 2: 'C', 3: 'E', 4: 'G', 5: 'F',
      6: ['double'], 7: ['75'], 8: ['hands'], 9: ['boiling'],
      10: 'FALSE', 11: 'TRUE', 12: 'FALSE', 13: 'NOT GIVEN',
      14: ['breaks'], 15: ['groups'], 16: ['junior', 'Junior'], 17: ['proximity'], 18: ['output'],
      19: 'B', 20: 'C', 21: 'A', 22: 'C',
      23: 'NOT GIVEN', 24: 'YES', 25: 'YES', 26: 'NO',
      27: 'iv', 28: 'ii', 29: 'vi', 30: 'v', 31: 'vii',
      32: 'B', 33: 'A', 34: 'C', 35: 'B',
      36: 'FALSE', 37: 'FALSE', 38: 'TRUE', 39: 'NOT GIVEN', 40: 'TRUE',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Keeping food safe: the science behind kitchen rules',
        html: `
          <p><span class="passage-letter">A</span> Food poisoning is rarely dramatic enough to make the news, yet health agencies estimate that hundreds of millions of people fall ill each year from contaminated food. For most healthy adults the result is a miserable day or two; for infants, older people, pregnant women and those with weakened immune systems, it can be far more serious. The reassuring fact is that a large proportion of cases could be prevented by habits that cost almost nothing.</p>
          <p><span class="passage-letter">B</span> The most important single idea is that bacteria multiply at a rate that depends on temperature. Between roughly 5°C and 60°C, which food-safety authorities call the danger zone, some species can double in number every twenty minutes or so. A refrigerator set at 5°C or below slows growth sharply, and cooking food until its centre reaches about 75°C kills most harmful bacteria. Between those extremes, time is the enemy: guidelines generally advise discarding perishable food that has been left at room temperature for more than two hours.</p>
          <p><span class="passage-letter">C</span> Cooking is not the only point at which food can become dangerous. Cross-contamination occurs when bacteria are transferred from raw foods, especially meat, poultry and eggs, to food that will be eaten without further cooking, such as salad. The transfer may happen via a chopping board, a knife, a cloth or hands. Using separate boards for raw meat and ready-to-eat food, and washing hands thoroughly after handling raw items, breaks the chain. Surprisingly, many agencies also advise against rinsing raw chicken, since the splashing water can carry bacteria onto surrounding surfaces while adding nothing to safety, because cooking will destroy the bacteria anyway.</p>
          <p><span class="passage-letter">D</span> Some risks are counter-intuitive, and rice is a well-known example. Its raw grains can carry the spores of a bacterium, Bacillus cereus, which survive boiling. If cooked rice is left standing at room temperature, the spores germinate and the bacteria multiply, producing a toxin that is not destroyed by reheating. For this reason cooked rice should be cooled quickly, ideally within an hour, and refrigerated, then reheated only until piping hot throughout. The same principle, that cooking does not make a food permanently safe, applies to many dishes prepared in bulk, such as stews and curries.</p>
          <p><span class="passage-letter">E</span> Date labels cause widespread confusion. A use-by date relates to safety and should be obeyed, particularly for foods such as smoked fish and cooked meats; food past that date should not be eaten even if it looks and smells normal. A best-before date, by contrast, concerns quality: food may be eaten after it, provided it has been stored properly, although texture or flavour may have declined. Confusing the two is a significant cause of avoidable waste, with perfectly good food thrown away.</p>
          <p><span class="passage-letter">F</span> Several popular beliefs do not stand up to scrutiny. The five-second rule, the idea that food dropped on the floor is safe if picked up quickly, is contradicted by laboratory studies showing that bacteria can transfer almost instantly, although the amount transferred varies with the moisture of the food and the type of surface. Nor is smell a reliable test: the bacteria that make food rot are usually different from those that cause illness, so food contaminated with Salmonella may look and smell perfectly normal. Even the colour of cooked meat can mislead, since burgers may turn brown before they reach a safe temperature. The only dependable check is a probe thermometer.</p>
          <p><span class="passage-letter">G</span> Some groups need extra care. Listeria, a bacterium found in soft cheeses, pâté, smoked fish and pre-packed sandwiches, is unusual because it can grow even at refrigerator temperatures. It is rarely harmful to healthy adults but can cause miscarriage in pregnant women and severe illness in the elderly, which is why such women are commonly advised to avoid the foods concerned. For these groups the margin for error is smaller, and following the basic rules consistently matters more than ever.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Which paragraph contains the following information? Choose the correct letter, A–G.',
            options: paragraphAG,
            questions: [
              { number: 1, text: 'a warning that heating food again may not remove a danger', evidence: 'a toxin that is not destroyed by reheating' },
              { number: 2, text: 'an explanation of why a common kitchen habit is discouraged', evidence: 'many agencies also advise against rinsing raw chicken' },
              { number: 3, text: 'a distinction between a safety rule and a guide to quality', evidence: 'relates to safety and should be obeyed' },
              { number: 4, text: 'mention of a bacterium that is not stopped by refrigeration', evidence: 'it can grow even at refrigerator temperatures' },
              { number: 5, text: 'the only reliable way of checking that meat is cooked safely', evidence: 'The only dependable check is a probe thermometer.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 6, text: 'In the danger zone, some bacteria can ___ in number every twenty minutes or so.', evidence: 'some species can double in number every twenty minutes or so' },
              { number: 7, text: 'Cooking food until its centre reaches about ___°C kills most harmful bacteria.', evidence: 'cooking food until its centre reaches about 75°C kills most harmful bacteria' },
              { number: 8, text: 'Bacteria can pass from raw food to salad via a chopping board, a knife, a cloth or ___.', evidence: 'a chopping board, a knife, a cloth or hands' },
              { number: 9, text: 'The spores of Bacillus cereus are able to survive ___.', evidence: 'which survive boiling' },
            ],
          },
          {
            id: 'r1c', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 10, text: 'Food poisoning in healthy adults usually lasts longer than a week.', evidence: 'For most healthy adults the result is a miserable day or two' },
              { number: 11, text: 'Cooked rice should ideally be cooled within about an hour.', evidence: 'cooked rice should be cooled quickly, ideally within an hour, and refrigerated' },
              { number: 12, text: 'Food that is past its best-before date must always be thrown away.', evidence: 'food may be eaten after it, provided it has been stored properly' },
              { number: 13, text: 'Supermarkets now print warnings on raw chicken telling shoppers not to wash it.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The office after the pandemic: how well does remote work work?',
        html: `
          <p>Before 2020, working from home was a privilege granted to a minority of employees, mostly in technology or consulting. Within weeks of the pandemic's arrival it became the norm for millions, and when restrictions eased, many organisations found that they could not simply return to the old pattern. Surveys in several countries suggest that the share of office-based working days spent at home has settled well above its pre-2020 level, though below its peak. The commonest arrangement is the hybrid model, in which staff attend the workplace on some days and work remotely on others.</p>
          <p>The effect on productivity has proved harder to establish than commentators assumed. A widely cited experiment at a large Chinese travel agency found that call-centre staff who were allowed to work from home were around 13 per cent more productive than colleagues in the office, partly because they took fewer breaks and sick days and worked in a quieter environment. However, that job consisted of clearly measurable, individual tasks. Where work depends on the spontaneous exchange of ideas, such as designing a new product, the evidence is much less favourable, and some studies suggest that purely remote teams generate fewer innovative ideas than those who meet in person.</p>
          <p>One reason may be the way that working relationships form. Research on large companies that moved to remote work found that fully remote teams tend to communicate mainly within established groups, with fewer new connections across departments, which are often the source of unexpected ideas. Junior employees may be at a particular disadvantage, since much of what they learn comes from observing more experienced colleagues rather than from formal training. Managers, too, may be affected by what researchers call proximity bias: an unconscious tendency to favour staff whom they see every day when deciding on promotions.</p>
          <p>For employees, the attractions are obvious. Removing the commute saves money and, for many people, an hour or more each day. Parents and carers gain flexibility, and people with disabilities may find a home environment easier to manage than a crowded office. Some economists have estimated that workers value the option of working from home as highly as a pay rise of several per cent. Against this, a number of remote workers report isolation, difficulty in separating work from home life, and a sense that they are expected to be available at all hours.</p>
          <p>Employers had hoped that smaller offices would cut their costs, but the savings have been slower to arrive than expected because many are bound by long leases and cannot shrink their space quickly. The consequences also extend beyond individual companies. Cafés, shops and sandwich bars that once depended on office workers have lost trade in many city centres, and some owners of office buildings have seen the value of their property fall.</p>
          <p>Organisations that handle hybrid work well tend to share a few habits. They agree which days the whole team will be present, so that office time is used for collaboration rather than for solitary work that could be done anywhere. They record decisions in writing, so that those who are absent are not excluded. And they judge people on output rather than on hours of visible presence. There is probably no single best model: the right balance depends on the nature of the work, the experience of the staff and the culture of the organisation.</p>`,
        groups: [
          {
            id: 'r2a', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Findings on remote and hybrid work</strong></p>
              <ul>
                <li>Call-centre staff working at home took fewer {{14}} and sick days.</li>
                <li>Fully remote teams tend to communicate mainly within established {{15}}.</li>
                <li>{{16}} employees may be disadvantaged because they learn by watching experienced colleagues.</li>
                <li>Managers may show {{17}} bias, favouring the staff they see every day.</li>
                <li>Well-run hybrid organisations judge people on {{18}}, not on hours of visible presence.</li>
              </ul>`,
            questions: [
              { number: 14, evidence: 'they took fewer breaks and sick days' },
              { number: 15, evidence: 'fully remote teams tend to communicate mainly within established groups' },
              { number: 16, evidence: 'Junior employees may be at a particular disadvantage' },
              { number: 17, evidence: 'what researchers call proximity bias' },
              { number: 18, evidence: 'they judge people on output rather than on hours of visible presence' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 19, text: 'What does the writer say about the evidence on productivity?', evidence: 'The effect on productivity has proved harder to establish than commentators assumed.', options: [{ value: 'A', label: 'It clearly favours working from home.' }, { value: 'B', label: 'It has been harder to establish than expected.' }, { value: 'C', label: 'It has been collected mainly in technology companies.' }] },
              { number: 20, text: 'Why does the writer qualify the call-centre findings?', evidence: 'that job consisted of clearly measurable, individual tasks', options: [{ value: 'A', label: 'The sample of staff was very small.' }, { value: 'B', label: 'The staff were paid more when at home.' }, { value: 'C', label: 'The work involved clearly measurable, individual tasks.' }] },
              { number: 21, text: 'According to the writer, successful organisations agree on days when the whole team is present so that', evidence: 'so that office time is used for collaboration rather than for solitary work', options: [{ value: 'A', label: 'time in the office is used for collaboration.' }, { value: 'B', label: 'the rent paid for offices can be reduced.' }, { value: 'C', label: 'managers can monitor working hours.' }] },
              { number: 22, text: 'What is the writer’s overall conclusion?', evidence: 'the right balance depends on the nature of the work, the experience of the staff and the culture of the organisation', options: [{ value: 'A', label: 'Hybrid working is only a temporary arrangement.' }, { value: 'B', label: 'Fully remote work is the most productive model.' }, { value: 'C', label: 'The best arrangement varies with the circumstances.' }] },
            ],
          },
          {
            id: 'r2c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 23, text: 'Most employees prefer fully remote work to hybrid arrangements.' },
              { number: 24, text: 'The commute is a significant cost of office work for many employees.', evidence: 'Removing the commute saves money and, for many people, an hour or more each day.' },
              { number: 25, text: 'Some city-centre businesses have been harmed by lower office attendance.', evidence: 'have lost trade in many city centres' },
              { number: 26, text: 'Smaller offices have already produced large savings for most employers.', evidence: 'the savings have been slower to arrive than expected' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Sun protection: what the label does not tell you',
        html: `
          <p><span class="passage-letter">A</span> Ultraviolet radiation reaches the Earth in two forms that matter to human health. UVB, which is strongest around midday and in summer, is the main cause of sunburn. UVA penetrates more deeply into the skin and is chiefly responsible for premature ageing, though both types contribute to skin cancer. Because UV cannot be seen or felt, people often judge the danger by temperature, which is misleading: a cool, breezy day can carry as much UV as a hot one, and thin cloud blocks only a small part of it. The UV index, published in many weather forecasts, is a far better guide, and protection is generally advised whenever it reaches three or above.</p>
          <p><span class="passage-letter">B</span> The number on a bottle of sunscreen, the sun protection factor or SPF, is widely misunderstood. It describes protection against UVB alone, so a product must also be labelled broad-spectrum to show that it filters UVA. The difference between high factors is also smaller than most people suppose: SPF 30 filters about 97 per cent of UVB, while SPF 50 filters about 98 per cent. More significant is the way sunscreen is used. The SPF is measured in laboratories using a thick layer, yet studies suggest that people typically apply a quarter to a half of that amount, with the result that the protection they actually receive is much lower than the label implies.</p>
          <p><span class="passage-letter">C</span> Using sunscreen properly therefore matters more than choosing the highest factor. Around a teaspoon is needed for the face and neck, and roughly six teaspoons for the whole body of an average adult. It should be applied about twenty minutes before going outdoors, so that it can form an even film on the skin, and reapplied at least every two hours, as well as after swimming, sweating or towelling. Water-resistant products are tested to remain effective for a limited time in water, but none is waterproof. Nor does reapplying extend the total time that one can safely stay in the sun; it merely maintains the protection already given.</p>
          <p><span class="passage-letter">D</span> Sunscreen is best seen as the last line of defence, not the first. Staying in the shade during the middle of the day, when UV is strongest, reduces exposure far more reliably than any lotion. Clothing is the second element: tightly woven fabrics block more radiation than loosely woven ones, and many manufacturers now label garments with a UV protection factor. A wide-brimmed hat protects the face, ears and neck, where skin cancers are common, and sunglasses that block UV protect the eyes from damage that accumulates over years. Together, these measures offer an alternative for those who dislike the feel of lotion on their skin.</p>
          <p><span class="passage-letter">E</span> Sunlight is not purely an enemy, however. Exposure triggers the production of vitamin D, which is needed for healthy bones and muscles, and in northern regions with long, dark winters deficiency is common. Health agencies generally advise that a few minutes of exposure on the face and arms, a couple of times a week in summer, is enough for most people, and that deliberate sunbathing to raise vitamin D is unnecessary and unwise, since a tan is itself a sign of skin damage. Where deficiency is a concern, supplements are a safer solution. The aim is therefore a balance: enough light to benefit, without the repeated burning that is most strongly linked to melanoma, the most dangerous form of skin cancer.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching-headings', instructions: 'Reading Passage 3 has five paragraphs, A–E. Choose the correct heading for each paragraph from the list of headings below.',
            options: sunHeadings,
            questions: [
              { number: 27, text: 'Paragraph A', evidence: 'Because UV cannot be seen or felt, people often judge the danger by temperature, which is misleading' },
              { number: 28, text: 'Paragraph B', evidence: 'The number on a bottle of sunscreen, the sun protection factor or SPF, is widely misunderstood.' },
              { number: 29, text: 'Paragraph C', evidence: 'Using sunscreen properly therefore matters more than choosing the highest factor.' },
              { number: 30, text: 'Paragraph D', evidence: 'Sunscreen is best seen as the last line of defence, not the first.' },
              { number: 31, text: 'Paragraph E', evidence: 'The aim is therefore a balance: enough light to benefit' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 32, text: 'What does the writer say about judging UV danger by temperature?', evidence: 'a cool, breezy day can carry as much UV as a hot one', options: [{ value: 'A', label: 'It is reasonable on hot days.' }, { value: 'B', label: 'It is misleading, because cool days can carry strong UV.' }, { value: 'C', label: 'It is the method recommended by forecasters.' }] },
              { number: 33, text: 'Why is the protection people receive often lower than the SPF suggests?', evidence: 'people typically apply a quarter to a half of that amount', options: [{ value: 'A', label: 'They apply less than the amount used in testing.' }, { value: 'B', label: 'Laboratory tests use weaker products.' }, { value: 'C', label: 'The SPF applies only in water.' }] },
              { number: 34, text: 'What does the writer say about water-resistant sunscreens?', evidence: 'Water-resistant products are tested to remain effective for a limited time in water, but none is waterproof.', options: [{ value: 'A', label: 'They stay effective for an unlimited time.' }, { value: 'B', label: 'They are waterproof if applied thickly.' }, { value: 'C', label: 'They remain effective only for a limited time in water.' }] },
              { number: 35, text: 'What is the writer’s main point in paragraph D?', evidence: 'Sunscreen is best seen as the last line of defence, not the first.', options: [{ value: 'A', label: 'Sunscreen is unnecessary if clothing is worn.' }, { value: 'B', label: 'Sunscreen should be used alongside other protection.' }, { value: 'C', label: 'Hats are more effective than shade.' }] },
            ],
          },
          {
            id: 'r3c', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 36, text: 'Thin cloud removes most UV radiation.', evidence: 'thin cloud blocks only a small part of it' },
              { number: 37, text: 'SPF 50 gives much greater protection against UVB than SPF 30.', evidence: 'SPF 30 filters about 97 per cent of UVB, while SPF 50 filters about 98 per cent' },
              { number: 38, text: 'Sunscreen should be applied before going outdoors.', evidence: 'applied about twenty minutes before going outdoors' },
              { number: 39, text: 'Sunbeds are a safe way to obtain vitamin D.' },
              { number: 40, text: 'Tightly woven fabrics generally block more UV than loosely woven ones.', evidence: 'tightly woven fabrics block more radiation than loosely woven ones' },
            ],
          },
        ],
      },
    ],
  },
}
