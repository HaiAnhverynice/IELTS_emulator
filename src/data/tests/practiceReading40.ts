import type { IeltsTest, Option } from '../../types'

// Original reading practice test 40 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const compostHeadings: Option[] = [
  { value: 'i', label: 'Why the rubbish bin is the wrong destination' },
  { value: 'ii', label: 'Balancing two kinds of material' },
  { value: 'iii', label: 'The history of composting in agriculture' },
  { value: 'iv', label: 'A quicker method and a slower one' },
  { value: 'v', label: 'Living workers that need the right conditions' },
  { value: 'vi', label: 'Items that are likely to cause trouble' },
  { value: 'vii', label: 'Choices for households with little space' },
  { value: 'viii', label: 'What the finished product offers the soil' },
  { value: 'ix', label: 'Government rules on garden waste' },
  { value: 'x', label: 'Why a healthy heap has a strong smell' },
]

const compostEndings: Option[] = [
  { value: 'A', label: 'is probably short of air.' },
  { value: 'B', label: 'will change only very slowly.' },
  { value: 'C', label: 'may spread weeds around the garden.' },
  { value: 'D', label: 'should be turned every day.' },
  { value: 'E', label: 'is a complete fertiliser for all plants.' },
  { value: 'F', label: 'needs more nitrogen-rich material than any other heap.' },
  { value: 'G', label: 'will attract rats whatever is added to it.' },
]

const insuranceTerms: Option[] = [
  { value: 'A', label: 'the law of large numbers' },
  { value: 'B', label: 'adverse selection' },
  { value: 'C', label: 'moral hazard' },
  { value: 'D', label: 'the average clause' },
  { value: 'E', label: 'an extended warranty' },
  { value: 'F', label: 'self-insurance' },
]

export const practiceReading40: IeltsTest = {
  id: 'practice-reading-40',
  title: 'Practice Test 40 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'FALSE', 3: 'NOT GIVEN', 4: 'TRUE',
      5: ['hour'], 6: ['advancing'], 7: ['milder'], 8: ['fatigue'], 9: ['hormone'],
      10: 'B', 11: 'B', 12: 'C', 13: 'B',
      14: 'i', 15: 'v', 16: 'ii', 17: 'iv', 18: 'vi', 19: 'vii', 20: 'viii',
      21: 'A', 22: 'B', 23: 'C',
      24: ['methane'], 25: ['sponge', 'wrung-out sponge', 'a wrung-out sponge'], 26: ['energy'],
      27: 'NO', 28: 'YES', 29: 'NOT GIVEN', 30: 'YES', 31: 'NO',
      32: 'A', 33: 'B', 34: 'C',
      35: ['excess'], 36: ['invest'], 37: ['disclose'],
      38: 'C', 39: 'B', 40: 'D',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Jet lag: resetting the body clock',
        html: `
          <p><span class="passage-letter">A</span> Anyone who has flown across several time zones knows the symptoms: waking at three in the morning, feeling drowsy in the middle of the afternoon, having no appetite at mealtimes and finding it hard to concentrate. Jet lag is often treated as a minor inconvenience, but for business travellers, athletes and flight crews it can have real consequences for performance. Understanding its cause makes it possible to reduce its effects, although not to eliminate them entirely.</p>
          <p><span class="passage-letter">B</span> The root of the problem is the body's internal clock. Almost every tissue in the body follows a daily cycle, and these cycles are coordinated by a small region of the brain known as the suprachiasmatic nucleus, located in the hypothalamus. This master clock keeps time on its own, but not perfectly: in most people it runs slightly longer than 24 hours, and it must be reset each day by signals from the environment. By far the most powerful of these signals is light entering the eyes. Meal times, exercise and social activity also have an influence, though a weaker one.</p>
          <p><span class="passage-letter">C</span> After a long flight, the internal clock is still set to the time at home, while the local clock and the daylight say something quite different. The body does not jump to the new time; it shifts gradually. A common rule of thumb is that it adjusts by roughly one hour per day, so a traveller who crosses six time zones may take most of a week to recover fully. During that period, different body systems may adjust at different speeds, so that, for example, the digestive system and the sleep cycle are temporarily out of step with each other.</p>
          <p><span class="passage-letter">D</span> The direction of travel matters. Flying east, the traveller must go to bed and get up earlier than the body expects, which means advancing the clock. Flying west requires delaying it. Because the natural cycle of most people is slightly longer than a day, delaying it comes more easily, and most travellers find that westward journeys produce milder jet lag than eastward ones of the same length. It is also worth separating jet lag from travel fatigue, the tiredness caused by long journeys, poor sleep on board and the dry air of the cabin. A flight from northern Europe to southern Africa can be exhausting, but because it crosses few time zones, the traveller recovers after a single good night's sleep.</p>
          <p><span class="passage-letter">E</span> Since light is the strongest signal, the timing of exposure to it is the most effective tool available. Bright light in the morning tends to move the clock earlier, while bright light in the evening tends to move it later. A traveller who has flown east should therefore seek out morning daylight at the destination, and one who has flown west should try to stay outdoors in the late afternoon and evening. Getting this wrong can make matters worse, because light at the wrong point in the body's cycle pushes the clock in the opposite direction from the one intended.</p>
          <p><span class="passage-letter">F</span> Melatonin, a hormone that the body releases in the evening as darkness falls, has also been studied as a treatment. Taken at the appropriate time at the destination, supplements may help some travellers to fall asleep and adjust more quickly, although results vary, and the rules on buying it differ between countries: in some it is sold freely, while in others it requires a prescription. For very short trips of two or three days, many specialists suggest that it is better not to adjust at all, and instead to keep as close as possible to home time, arranging important meetings for hours when the body is naturally alert.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'With the right approach, travellers can avoid the effects of jet lag completely.', evidence: 'Understanding its cause makes it possible to reduce its effects, although not to eliminate them entirely.' },
              { number: 2, text: 'Without signals from the environment, the internal clock of most people would keep exactly 24 hours.', evidence: 'in most people it runs slightly longer than 24 hours' },
              { number: 3, text: 'The suprachiasmatic nucleus was first identified in studies of airline pilots.' },
              { number: 4, text: 'For a time after a long flight, a traveller’s digestion may follow a different schedule from his or her sleep.', evidence: 'the digestive system and the sleep cycle are temporarily out of step with each other' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Adjusting to a new time zone</strong></p>
              <ul>
                <li>The body clock usually shifts by about one {{5}} each day.</li>
                <li>Eastward travel means {{6}} the clock; westward travel means delaying it.</li>
                <li>Westward journeys usually cause {{7}} jet lag than eastward ones.</li>
                <li>Tiredness caused by long journeys and dry cabin air is called travel {{8}}.</li>
                <li>Melatonin is a {{9}} released in the evening.</li>
              </ul>`,
            questions: [
              { number: 5, evidence: 'it adjusts by roughly one hour per day' },
              { number: 6, evidence: 'which means advancing the clock' },
              { number: 7, evidence: 'westward journeys produce milder jet lag than eastward ones of the same length' },
              { number: 8, evidence: 'travel fatigue, the tiredness caused by long journeys, poor sleep on board and the dry air of the cabin' },
              { number: 9, evidence: 'Melatonin, a hormone that the body releases in the evening as darkness falls' },
            ],
          },
          {
            id: 'r1c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 10, text: 'Why does the writer mention a flight from northern Europe to southern Africa?', evidence: "because it crosses few time zones, the traveller recovers after a single good night's sleep", options: [{ value: 'A', label: 'to show that all long flights cause jet lag' }, { value: 'B', label: 'to illustrate the difference between travel fatigue and jet lag' }, { value: 'C', label: 'to compare eastward and westward travel' }, { value: 'D', label: 'to explain the effect of dry cabin air on sleep' }] },
              { number: 11, text: 'According to the writer, westward travel is generally easier because', evidence: 'Because the natural cycle of most people is slightly longer than a day, delaying it comes more easily', options: [{ value: 'A', label: 'there are more hours of daylight on arrival.' }, { value: 'B', label: 'most people’s natural cycle is a little longer than a day.' }, { value: 'C', label: 'westward flights tend to be shorter.' }, { value: 'D', label: 'travellers sleep better on westward flights.' }] },
              { number: 12, text: 'A traveller who has just flown west should', evidence: 'one who has flown west should try to stay outdoors in the late afternoon and evening', options: [{ value: 'A', label: 'look for daylight early in the morning.' }, { value: 'B', label: 'avoid daylight completely for the first day.' }, { value: 'C', label: 'spend time outside later in the day.' }, { value: 'D', label: 'take melatonin as soon as he or she wakes up.' }] },
              { number: 13, text: 'For a trip lasting two or three days, many specialists recommend', evidence: 'it is better not to adjust at all, and instead to keep as close as possible to home time', options: [{ value: 'A', label: 'taking melatonin every night.' }, { value: 'B', label: 'staying as close as possible to home time.' }, { value: 'C', label: 'seeking bright light at every opportunity.' }, { value: 'D', label: 'arriving a day before any important meeting.' }] },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Composting: turning kitchen waste into soil',
        html: `
          <p><span class="passage-letter">A</span> In many households, a large part of what goes into the kitchen bin is organic material: vegetable peelings, coffee grounds, tea leaves, eggshells and garden waste. When this material is sent to landfill, it is buried under layers of other rubbish where little oxygen can reach it. There it decomposes in the absence of air and gives off methane, a greenhouse gas that is far more powerful than carbon dioxide over the short term. Composting the same material at home, or through a municipal collection, avoids most of this and turns waste into something useful.</p>
          <p><span class="passage-letter">B</span> Composting is not simply a matter of letting things rot. It is the controlled breakdown of organic matter by bacteria, fungi and small creatures such as worms and woodlice, which need air, moisture and food in reasonable balance. A well-managed heap decomposes aerobically, that is, with oxygen present. A heap that becomes compacted and waterlogged turns anaerobic, and the rotten smell that many people associate with compost is in fact a sign that something has gone wrong.</p>
          <p><span class="passage-letter">C</span> The food that these organisms need is usually described in two categories. So-called greens, such as grass clippings and raw vegetable scraps, are rich in nitrogen and moist. Browns, such as dry leaves, straw, shredded paper and cardboard, are rich in carbon and relatively dry. Too many greens produce a wet, smelly heap; too many browns produce one that is dry and barely changes for months. Gardeners often aim for roughly equal volumes of the two, or somewhat more browns than greens, but exact ratios matter less than the overall texture, which should be damp but not dripping, like a wrung-out sponge.</p>
          <p><span class="passage-letter">D</span> There are two broad approaches. In hot composting, a large quantity of material is assembled at once and turned regularly to let in air. The activity of the microorganisms then raises the temperature in the centre of the heap, sometimes above 55 degrees Celsius, which speeds up decomposition and kills many weed seeds and disease-causing organisms. Cold composting simply involves adding material as it becomes available and leaving it. It requires far less effort but can take a year or more, and because the heap never becomes very hot, weed seeds may survive and sprout wherever the compost is spread.</p>
          <p><span class="passage-letter">E</span> Not everything belongs in a home heap. Meat, fish and dairy products are generally excluded because they can attract rats and other pests, and cooked food can cause the same problem. Diseased plants and the roots of persistent weeds are also best kept out unless the heap reliably becomes hot. Some packaging is labelled as compostable, but many such products are designed to break down under the controlled conditions of an industrial facility and may persist for a long time in a garden heap.</p>
          <p><span class="passage-letter">F</span> People without gardens are not entirely excluded. A wormery, in which special composting worms process kitchen scraps in a closed container, can be kept on a balcony or even indoors, and it produces both a rich solid material and a liquid that can be diluted and used to feed plants. Many local authorities also collect food waste separately and process it on a large scale, either at industrial composting sites or in anaerobic digesters, which capture the methane and use it to generate energy.</p>
          <p><span class="passage-letter">G</span> Finished compost is dark and crumbly and smells of earth rather than of rot. Dug into the ground or spread on its surface, it improves the structure of both heavy clay and light sandy soils, helps them hold water and supplies nutrients slowly as it continues to break down. It is not a complete fertiliser for every purpose, but it allows a household to return to the soil much of what it took out, closing a loop that the rubbish bin leaves open.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: compostHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'When this material is sent to landfill, it is buried under layers of other rubbish where little oxygen can reach it.' },
              { number: 15, text: 'Paragraph B', evidence: 'which need air, moisture and food in reasonable balance' },
              { number: 16, text: 'Paragraph C', evidence: 'The food that these organisms need is usually described in two categories.' },
              { number: 17, text: 'Paragraph D', evidence: 'There are two broad approaches.' },
              { number: 18, text: 'Paragraph E', evidence: 'Not everything belongs in a home heap.' },
              { number: 19, text: 'Paragraph F', evidence: 'People without gardens are not entirely excluded.' },
              { number: 20, text: 'Paragraph G', evidence: 'it improves the structure of both heavy clay and light sandy soils' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: compostEndings,
            questions: [
              { number: 21, text: 'A compost heap with a rotten smell', evidence: 'A heap that becomes compacted and waterlogged turns anaerobic' },
              { number: 22, text: 'A heap made mainly of dry leaves, straw and cardboard', evidence: 'too many browns produce one that is dry and barely changes for months' },
              { number: 23, text: 'Compost produced by the cold method', evidence: 'weed seeds may survive and sprout wherever the compost is spread' },
            ],
          },
          {
            id: 'r2c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 24, text: 'Which gas is given off when food waste decomposes without air in landfill?', evidence: 'gives off methane, a greenhouse gas' },
              { number: 25, text: 'What household object is the ideal texture of a compost heap compared to?', evidence: 'damp but not dripping, like a wrung-out sponge' },
              { number: 26, text: 'What do anaerobic digesters produce from the methane they capture?', evidence: 'which capture the methane and use it to generate energy' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Paying to share the risk: how insurance works',
        html: `
          <p>Insurance is one of the oldest financial ideas, and one of the least understood. At its heart is a simple bargain. A large number of people each pay a relatively small, certain amount, the premium, into a common fund. A few of them will suffer a loss in any given year, and the fund pays for it. Nobody knows in advance whose house will burn down or whose car will be stolen, but across many thousands of customers the total number of such events is surprisingly predictable. This is the law of large numbers at work: the larger the group, the more closely its actual losses tend to match the expected figure, which allows an insurer to set premiums with some confidence.</p>
          <p>An insurer's income does not come only from the difference between premiums and claims. Because premiums are paid in advance and claims are settled later, the company holds a large sum of money in the meantime, which it can invest. In some years insurers pay out more in claims than they receive in premiums and still make a profit from these investments. For the customer, however, the arithmetic is different. Since the insurer must cover its claims, its running costs and its profit from what it collects, the average customer pays in more than he or she gets back. Insurance is, on average, a losing bet.</p>
          <p>Why, then, is it rational to buy it? The answer lies in the difference between losses that are inconvenient and losses that are ruinous. Losing a few hundred pounds is unpleasant but survivable; losing a house without the means to rebuild it, or facing a large legal claim, could change the course of a life. Paying a small certain cost to avoid a small chance of catastrophe is a sensible exchange, even if the expected value is negative. The same reasoning suggests that insuring small, affordable losses is usually poor value. Consumer organisations have often argued, for example, that extended warranties on household electrical goods cost more than the likely repairs.</p>
          <p>A practical consequence concerns the choice of excess, the part of each claim that the policyholder agrees to pay before the insurer contributes. Choosing a higher excess reduces the premium, because the insurer no longer pays for minor losses and avoids the administrative cost of handling small claims. For a person with savings that could absorb the larger excess, this is often a good trade. In effect, such a person is self-insuring against small losses while keeping protection against large ones.</p>
          <p>Insurers, for their part, face two well-known problems. The first is adverse selection: the people most eager to buy insurance are often those who know they are most likely to claim. If an insurer charged everyone the same price, the lowest-risk customers might decide that the cover was not worth it and leave, pushing up the average risk of those who remained. This is why insurers ask detailed questions and charge different prices to different customers, and why failing to disclose relevant information can allow an insurer to reduce or refuse a claim. The second problem is moral hazard: once insured, people may take less care, since part of the cost of any loss will fall on someone else. Excesses, which leave the policyholder with some of the cost, are partly a response to this.</p>
          <p>Customers can also undermine their own cover through underinsurance. Many home insurance policies contain what is known as an average clause. If a property or its contents are insured for less than their full value, the insurer may reduce any payment in the same proportion, even for a partial loss. Someone whose belongings are worth twice the amount stated on the policy might therefore receive only half the cost of repairing the damage from a burst pipe, rather than the full cost up to the policy limit.</p>
          <p>None of this makes insurance the scam that it is sometimes said to be. It is a tool for sharing risks that individuals cannot bear alone, and it works best when buyers understand what they are paying for: protection against the losses they could not afford, rather than reimbursement for every small misfortune.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'It is impossible for an insurer to estimate how many claims it will receive.', evidence: 'the total number of such events is surprisingly predictable' },
              { number: 28, text: 'An insurer can make a profit in a year in which it pays out more in claims than it receives in premiums.', evidence: 'In some years insurers pay out more in claims than they receive in premiums and still make a profit from these investments.' },
              { number: 29, text: 'Most people buy insurance because they overestimate the chance of a disaster.' },
              { number: 30, text: 'Buying insurance can be a sensible decision even though customers lose money on average.', evidence: 'Paying a small certain cost to avoid a small chance of catastrophe is a sensible exchange, even if the expected value is negative.' },
              { number: 31, text: 'Extended warranties on household electrical goods are generally good value.', evidence: 'The same reasoning suggests that insuring small, affordable losses is usually poor value.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which THREE of the following does the writer mention as ways in which insurers respond to the problems they face? Choose THREE letters, A–F.',
            options: [
              { value: 'A', label: 'asking customers detailed questions' },
              { value: 'B', label: 'charging different customers different prices' },
              { value: 'C', label: 'making policyholders pay part of each claim' },
              { value: 'D', label: 'refusing to insure homes in high-risk areas' },
              { value: 'E', label: 'sharing large risks with other insurers' },
              { value: 'F', label: 'limiting the number of claims allowed each year' },
            ],
            questions: [
              { number: 32, evidence: 'This is why insurers ask detailed questions' },
              { number: 33, evidence: 'charge different prices to different customers' },
              { number: 34, evidence: 'Excesses, which leave the policyholder with some of the cost, are partly a response to this.' },
            ],
          },
          {
            id: 'r3c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 35, text: 'The part of each claim that the policyholder pays before the insurer contributes is called the ______.', evidence: 'the choice of excess, the part of each claim that the policyholder agrees to pay before the insurer contributes' },
              { number: 36, text: 'Because premiums arrive before claims are paid, an insurer is able to ______ the money in the meantime.', evidence: 'the company holds a large sum of money in the meantime, which it can invest' },
              { number: 37, text: 'An insurer may refuse a claim if a customer failed to ______ relevant information.', evidence: 'failing to disclose relevant information can allow an insurer to reduce or refuse a claim' },
            ],
          },
          {
            id: 'r3d', type: 'matching', instructions: 'Match each situation with the correct term, A–F, from the list below.',
            options: insuranceTerms,
            questions: [
              { number: 38, text: 'A driver becomes less careful after buying comprehensive cover.', evidence: 'once insured, people may take less care' },
              { number: 39, text: 'Low-risk customers stop buying cover because everyone is charged the same price.', evidence: 'the lowest-risk customers might decide that the cover was not worth it and leave' },
              { number: 40, text: 'A payment for a burst pipe is cut because the contents of a home were insured for too little.', evidence: 'the insurer may reduce any payment in the same proportion, even for a partial loss' },
            ],
          },
        ],
      },
    ],
  },
}
