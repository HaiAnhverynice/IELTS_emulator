import type { IeltsTest, Option } from '../../types'

// Original reading practice test 24 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const hearingHeadings: Option[] = [
  { value: 'i', label: 'Damage that ordinary tests can miss' },
  { value: 'ii', label: 'How the inner ear turns movement into signals' },
  { value: 'iii', label: 'A gradual injury that is mistaken for ageing' },
  { value: 'iv', label: 'Why small differences in numbers matter' },
  { value: 'v', label: 'A shift in where harmful noise is encountered' },
  { value: 'vi', label: 'Inexpensive ways of reducing the risk' },
  { value: 'vii', label: 'Medical treatments that restore lost hearing' },
  { value: 'viii', label: 'Laws that limit the volume of personal devices' },
  { value: 'ix', label: 'Why some animals recover from hearing damage' },
]

const roadParagraphs: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

export const practiceReading24: IeltsTest = {
  id: 'practice-reading-24',
  title: 'Practice Test 24 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'iii', 2: 'ii', 3: 'iv', 4: 'v', 5: 'i', 6: 'vi',
      7: 'FALSE', 8: 'TRUE', 9: 'FALSE', 10: 'NOT GIVEN',
      11: ['cochlea'], 12: ['time'], 13: ['volume'],
      14: 'C', 15: 'B', 16: 'B', 17: 'B',
      18: 'NO', 19: 'YES', 20: 'NOT GIVEN', 21: 'NO', 22: 'YES',
      23: 'A', 24: 'C', 25: 'E',
      26: ['agencies'],
      27: 'D', 28: 'F', 29: 'B', 30: 'C', 31: 'G',
      32: ['time'], 33: ['traffic evaporation'], 34: ['Stockholm'], 35: ['deliveries'],
      36: 'YES', 37: 'NO', 38: 'NO', 39: 'NOT GIVEN', 40: 'YES',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Protecting your hearing in a noisy world',
        html: `
          <p><span class="passage-letter">A</span> Hearing loss is often thought of as a natural part of growing old, and age certainly plays a part. But a considerable share of the damage that people carry into later life is caused not by the passing of years but by noise. Unlike a broken bone, this kind of injury is usually painless, and it develops so gradually that it can go unnoticed for years. By the time someone realises that conversations in busy restaurants have become a strain, the harm has typically been accumulating for a long time, and it cannot be undone.</p>
          <p><span class="passage-letter">B</span> To understand why, it helps to know what happens inside the ear. Sound waves travel down the ear canal and make the eardrum vibrate. Three tiny bones in the middle ear pass these vibrations on to the cochlea, a fluid-filled, snail-shaped structure in the inner ear. Inside the cochlea are thousands of sensory hair cells, each tuned to a particular range of pitches, which convert the movement of the fluid into electrical signals that the brain interprets as sound. Very loud sound can bend and break these delicate cells. In humans, hair cells that are destroyed do not grow back.</p>
          <p><span class="passage-letter">C</span> Loudness is measured in decibels, a scale that misleads many people because it is logarithmic rather than linear. An increase of ten decibels represents a tenfold increase in sound energy, and an increase of only three decibels roughly doubles it. A sound at 88 decibels therefore carries about twice the energy of one at 85, even though the two numbers look almost identical. For this reason, safe listening guidelines are expressed as a trade-off between level and time: each time the level rises by three decibels, the period for which it can safely be tolerated is halved. Many occupational guidelines treat about 85 decibels for eight hours as a reasonable upper limit for a working day. On that basis, a noise of 100 decibels, which is typical of a loud concert or a nightclub, reaches the same dose in about fifteen minutes.</p>
          <p><span class="passage-letter">D</span> Workplaces were the first places where noise was taken seriously, and in many countries employers are now legally required to assess noise and to provide hearing protection above certain levels. Today, however, much of the exposure that worries specialists happens in leisure time. Personal audio devices allow people to listen for hours at a stretch, and in noisy surroundings such as a train or a busy street, listeners tend to turn up the volume to drown out the background, sometimes to levels well above what would be acceptable in a factory. Because this exposure is voluntary and enjoyable, it is rarely perceived as a risk at all.</p>
          <p><span class="passage-letter">E</span> The early warning signs are easy to dismiss. After a loud event, many people notice that sounds seem dull or muffled, or they hear a ringing in the ears known as tinnitus. These effects usually fade within a day or two, which encourages the belief that no harm has been done. Research on animals, however, suggests that this reassurance may be misplaced. Even when the ability to detect quiet sounds returns to normal, some of the connections between the hair cells and the auditory nerve can be permanently lost. This is sometimes called hidden hearing loss, because a standard hearing test does not detect it. How far the animal findings apply to people is still being investigated, but it may help to explain why some listeners pass a hearing test yet struggle to follow speech against background noise.</p>
          <p><span class="passage-letter">F</span> The encouraging news is that noise-induced hearing loss is almost entirely preventable. Simple foam earplugs, when they are inserted correctly, reduce sound levels considerably, and so-called musicians' earplugs are designed to lower the volume evenly across different pitches, so that music sounds less distorted. Noise-cancelling headphones can help indirectly: by reducing background noise, they allow people to listen at a lower volume. Many smartphones can now show how much sound a user has received through headphones over the past week. Perhaps the simplest rule is also the most useful one: if you have to raise your voice to be heard by someone an arm's length away, the surroundings are probably loud enough to cause damage over time.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: hearingHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'it develops so gradually that it can go unnoticed for years' },
              { number: 2, text: 'Paragraph B', evidence: 'which convert the movement of the fluid into electrical signals that the brain interprets as sound' },
              { number: 3, text: 'Paragraph C', evidence: 'A sound at 88 decibels therefore carries about twice the energy of one at 85, even though the two numbers look almost identical.' },
              { number: 4, text: 'Paragraph D', evidence: 'Today, however, much of the exposure that worries specialists happens in leisure time.' },
              { number: 5, text: 'Paragraph E', evidence: 'because a standard hearing test does not detect it' },
              { number: 6, text: 'Paragraph F', evidence: 'noise-induced hearing loss is almost entirely preventable' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 7, text: 'Each hair cell in the cochlea responds equally to all pitches.', evidence: 'each tuned to a particular range of pitches' },
              { number: 8, text: 'Fifteen minutes at a typical nightclub gives roughly the same noise dose as a full working day at 85 decibels.', evidence: 'a noise of 100 decibels, which is typical of a loud concert or a nightclub, reaches the same dose in about fifteen minutes' },
              { number: 9, text: 'Tinnitus after a loud event normally lasts for several weeks.', evidence: 'These effects usually fade within a day or two' },
              { number: 10, text: "Musicians' earplugs cost more than ordinary foam earplugs." },
            ],
          },
          {
            id: 'r1c', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Noise and the ear</strong></p>
              <ul>
                <li>Three small bones carry vibrations from the eardrum to the {{11}}.</li>
                <li>Safe listening guidelines balance sound level against {{12}}.</li>
                <li>Noise-cancelling headphones help because users can choose a lower {{13}}.</li>
              </ul>`,
            questions: [
              { number: 11, evidence: 'Three tiny bones in the middle ear pass these vibrations on to the cochlea' },
              { number: 12, evidence: 'a trade-off between level and time' },
              { number: 13, evidence: 'they allow people to listen at a lower volume' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Buy now, pay later: convenience at a price?',
        html: `
          <p>Over the past decade, a form of credit that barely existed in its modern shape has become a familiar sight at online checkouts. Buy now, pay later services, usually known by their initials BNPL, allow shoppers to split the cost of a purchase into a small number of instalments, commonly four payments spread over about six weeks, without paying interest. The idea of paying in instalments is far from new; what is new is the speed and ease with which the arrangement is offered. A shopper can be approved in seconds, often after only limited checks, and the option is displayed beside the card payment button as though it were simply another way to pay.</p>
          <p>If customers pay no interest, it is reasonable to ask how the providers make money. The answer is that most of their income comes from retailers, not shoppers. Merchants pay the provider a fee on each sale, generally higher than the fee they would pay on an ordinary card transaction. They are willing to do so because offering instalments tends to increase both the number of shoppers who complete a purchase and the amount that each of them spends. In other words, the service is valuable to retailers precisely because it encourages people to buy more than they otherwise would. For some providers, a second source of income is the fee charged when a customer misses a payment.</p>
          <p>Supporters argue that, for a disciplined user, BNPL is cheaper than the alternatives. A shopper who would otherwise put a purchase on a credit card and pay it off over several months will be charged interest; the same shopper using an interest-free instalment plan, and paying every instalment on time, pays nothing extra. For young people with no credit history, who may be unable to obtain a card, it can also offer a way to spread the cost of an essential item such as a laptop for study. These are real advantages, and it would be unfair to dismiss the product as nothing more than a trap.</p>
          <p>The difficulty is that the conditions under which BNPL is cheap are precisely those that are hardest to meet. Because each instalment is small, a purchase feels more affordable than it really is, and a shopper may take out several plans with different providers at the same time. In many countries these arrangements have often not been reported to credit reference agencies in the way that loans are, so neither the shopper nor a new lender necessarily has a complete picture of what is owed. A person who looks at one plan sees a manageable payment; the true burden becomes clear only when several payments fall due in the same week.</p>
          <p>The consequences of a missed payment vary between providers. Some charge a fixed late fee, others prevent the customer from using the service until the debt is cleared, and some pass unpaid debts to collection agencies. Because payments are usually taken automatically from a debit or credit card, a missed instalment can also lead to charges from the customer's own bank, for example if the account becomes overdrawn. Paying an instalment with a credit card, which some services permit, is particularly risky, since it converts interest-free borrowing into the expensive kind that the user was trying to avoid.</p>
          <p>Regulators in several countries have responded by bringing BNPL closer to the rules that govern other consumer credit, for instance by requiring affordability checks and clearer information about the consequences of late payment. Such measures are sensible, but I would argue that the most important protection is a change in the way the product is presented. At present the instalment option tends to appear at the very moment of purchase, when the shopper's attention is on the item rather than on the debt. A brief, plain statement that this is a loan would do more to prompt reflection than pages of terms and conditions that almost nobody reads.</p>
          <p>For the individual, a few questions provide a useful test. Would I buy this item if I had to pay the full price today? Do I know exactly when each payment will be taken, and will the money be in my account? How many other plans am I already paying? If the answer to the first question is no, then the attraction of the plan lies not in its convenience but in its ability to make an unaffordable purchase feel affordable, which is exactly the effect that retailers are paying for.</p>`,
        groups: [
          {
            id: 'r2a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 14, text: 'According to the writer, what is new about BNPL?', evidence: 'what is new is the speed and ease with which the arrangement is offered', options: [{ value: 'A', label: 'the idea of paying for goods in instalments' }, { value: 'B', label: 'the low rate of interest it charges' }, { value: 'C', label: 'how quickly and easily it is made available' }, { value: 'D', label: 'its use for expensive items such as laptops' }] },
              { number: 15, text: 'Why are retailers prepared to pay fees to BNPL providers?', evidence: 'They are willing to do so because offering instalments tends to increase both the number of shoppers who complete a purchase and the amount that each of them spends.', options: [{ value: 'A', label: 'The fees are lower than those charged on card payments.' }, { value: 'B', label: 'Customers buy more when instalments are offered.' }, { value: 'C', label: 'The provider pays the retailer when a customer misses a payment.' }, { value: 'D', label: 'It allows them to stop accepting credit cards.' }] },
              { number: 16, text: 'What does the writer say about paying an instalment with a credit card?', evidence: 'it converts interest-free borrowing into the expensive kind that the user was trying to avoid', options: [{ value: 'A', label: 'No provider allows it.' }, { value: 'B', label: 'It can cancel out the main financial benefit of BNPL.' }, { value: 'C', label: 'It protects the shopper from bank charges.' }, { value: 'D', label: 'It is the safest way to avoid a late fee.' }] },
              { number: 17, text: 'What is the writer’s main purpose in the final paragraph?', evidence: 'For the individual, a few questions provide a useful test.', options: [{ value: 'A', label: 'to explain how providers decide on spending limits' }, { value: 'B', label: 'to give shoppers a way of judging whether a plan is sensible' }, { value: 'C', label: 'to argue that BNPL should be banned' }, { value: 'D', label: 'to compare BNPL with store loyalty cards' }] },
            ],
          },
          {
            id: 'r2b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 18, text: 'BNPL should be regarded as a trap with no real benefits.', evidence: 'it would be unfair to dismiss the product as nothing more than a trap' },
              { number: 19, text: 'BNPL can cost less than a credit card for a shopper who always pays on time.', evidence: 'and paying every instalment on time, pays nothing extra' },
              { number: 20, text: 'Most BNPL users have plans with more than one provider.' },
              { number: 21, text: 'Recent regulation of BNPL has gone further than necessary.', evidence: 'Such measures are sensible' },
              { number: 22, text: 'A short statement that the plan is a loan would be more effective than detailed terms and conditions.', evidence: 'A brief, plain statement that this is a loan would do more to prompt reflection than pages of terms and conditions that almost nobody reads.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-multi', instructions: 'Which THREE possible consequences of a missed payment are mentioned in the passage? Choose THREE letters, A–G.',
            options: [
              { value: 'A', label: 'a fixed late fee' },
              { value: 'B', label: 'an immediate court summons' },
              { value: 'C', label: 'being unable to use the service until the debt is paid' },
              { value: 'D', label: 'a permanent ban from all BNPL providers' },
              { value: 'E', label: 'charges from the shopper’s own bank' },
              { value: 'F', label: 'a rise in the interest rate on the plan' },
              { value: 'G', label: 'cancellation of the original purchase' },
            ],
            questions: [
              { number: 23, evidence: 'Some charge a fixed late fee' },
              { number: 24, evidence: 'others prevent the customer from using the service until the debt is cleared' },
              { number: 25, evidence: "a missed instalment can also lead to charges from the customer's own bank" },
            ],
          },
          {
            id: 'r2d', type: 'gap-fill', instructions: 'Complete the sentence below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for your answer.',
            questions: [
              { number: 26, text: 'In many countries, BNPL plans have often not been reported to credit reference ___ in the same way as loans.', evidence: 'have often not been reported to credit reference agencies in the way that loans are' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Why new roads rarely end traffic jams',
        html: `
          <p><span class="passage-letter">A</span> For most of the twentieth century, the response to traffic congestion seemed obvious. If the roads were full, more roads were needed: wider motorways, new bypasses, extra lanes at busy junctions. The logic appeared unanswerable, and politicians of every kind found that promising to relieve congestion was a reliable way of winning support. Yet many transport researchers now believe that this approach, pursued on its own, is largely self-defeating, and that in busy urban areas a new road often becomes almost as congested as the old one within a few years of opening.</p>
          <p><span class="passage-letter">B</span> The central idea behind this view is known as induced demand. It rests on a principle familiar from the rest of economics: when something becomes cheaper, people use more of it. For a car journey, the most important cost is often not fuel but time. When a new road reduces travel times, it lowers the price of driving, and drivers respond. Some who previously travelled at quieter times switch to the peak; some who used buses or trains return to their cars; some choose more distant destinations for shopping or leisure; and over a longer period, people may decide to live farther from their workplace because the commute now seems tolerable. Each decision is sensible for the individual, but together they fill the new space.</p>
          <p><span class="passage-letter">C</span> The effect is not merely theoretical. Studies comparing road building and traffic levels across many cities have found that the amount of driving tends to rise roughly in proportion to the road space that is added. In other words, increasing lane capacity by a certain percentage is followed, over a period of years, by a similar percentage increase in the distance driven. This does not mean that new roads achieve nothing: they may allow more people to make the journeys they want. But it does mean that a promise to end congestion by building is unlikely to be kept.</p>
          <p><span class="passage-letter">D</span> The principle also works in reverse, a phenomenon sometimes called traffic evaporation. When road space is removed, whether by a planned closure, a conversion to a pedestrian area or an unexpected event such as the collapse of a bridge, the predicted gridlock frequently fails to appear. Some traffic moves to other routes, but a proportion simply disappears as people combine trips, travel at different times, change their means of transport or decide that a journey is not worth making. Reviews of such cases have found that total traffic in the affected area often falls, although the size of the effect varies considerably from place to place.</p>
          <p><span class="passage-letter">E</span> If building cannot remove congestion, what can? Many economists argue that the most effective tool is to charge for the use of roads at busy times. Cities including Singapore, London and Stockholm have introduced congestion charges or other forms of road pricing, and in each case traffic in the charged area fell when the scheme began. In Stockholm, where the charge began as a trial, public support grew once residents had experienced its effects. Pricing works because it tackles the cause identified by induced demand. When road space is free at the point of use, it is consumed until delays themselves act as the price; a charge replaces that time cost with a financial one, and the space released can be used by buses, deliveries and others whose journeys are most valuable.</p>
          <p><span class="passage-letter">F</span> Critics raise reasonable objections. A flat charge takes a larger share of a poor driver's income than of a rich one's, and people who work irregular hours or live where public transport is limited may have no realistic alternative to driving. Supporters respond that the revenue can be spent on improving buses, and that lower-income households are, on average, less likely to drive into city centres at peak times in the first place. Whether pricing is fair therefore depends heavily on local circumstances and on how the money is used.</p>
          <p><span class="passage-letter">G</span> None of this implies that road building is always a mistake. A new link may be justified to connect a poorly served area, to remove heavy traffic from a residential street or to improve safety. The lesson of induced demand is narrower: congestion relief alone is a weak argument for a new road in a growing city, because the relief tends to be temporary. Planners who accept this are increasingly judging schemes not by how fast they will make cars move but by how many people, using any means of transport, they will enable to reach their destinations.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? NB You may use any letter more than once.',
            options: roadParagraphs,
            questions: [
              { number: 27, text: 'an example of road space being reduced without the expected result', evidence: 'the predicted gridlock frequently fails to appear' },
              { number: 28, text: 'reasons why a road charge might be considered unfair', evidence: "A flat charge takes a larger share of a poor driver's income than of a rich one's" },
              { number: 29, text: 'a list of ways in which people change their behaviour when journeys become quicker', evidence: 'Some who previously travelled at quieter times switch to the peak' },
              { number: 30, text: 'evidence that traffic grows in line with the amount of new road space', evidence: 'the amount of driving tends to rise roughly in proportion to the road space that is added' },
              { number: 31, text: 'a change in the way road projects are assessed', evidence: 'Planners who accept this are increasingly judging schemes not by how fast they will make cars move' },
            ],
          },
          {
            id: 'r3b', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 32, text: 'According to the passage, what is often the most important cost of a car journey?', evidence: 'the most important cost is often not fuel but time' },
              { number: 33, text: 'What name is given to the disappearance of traffic when road space is removed?', evidence: 'a phenomenon sometimes called traffic evaporation' },
              { number: 34, text: 'In which city did a charge become more popular after people had experienced it?', evidence: 'In Stockholm, where the charge began as a trial, public support grew once residents had experienced its effects.' },
              { number: 35, text: 'Apart from buses, what is mentioned as making use of the space released by pricing?', evidence: 'the space released can be used by buses, deliveries and others' },
            ],
          },
          {
            id: 'r3c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 36, text: 'Promising to reduce congestion has helped politicians gain support.', evidence: 'promising to relieve congestion was a reliable way of winning support' },
              { number: 37, text: 'New roads in busy cities bring no benefit to anyone.', evidence: 'This does not mean that new roads achieve nothing' },
              { number: 38, text: 'Closing a road always reduces the total traffic in the surrounding area.', evidence: 'although the size of the effect varies considerably from place to place' },
              { number: 39, text: 'Congestion charges have been more successful in Asian cities than in European ones.' },
              { number: 40, text: 'A road may be worth building for reasons other than reducing congestion.', evidence: 'A new link may be justified to connect a poorly served area' },
            ],
          },
        ],
      },
    ],
  },
}
