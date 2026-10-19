import type { IeltsTest, Option } from '../../types'

// Original reading practice test 26 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const deskHeadings: Option[] = [
  { value: 'i', label: 'The cost of equipping an office' },
  { value: 'ii', label: 'An early clue from public transport' },
  { value: 'iii', label: 'A memorable comparison that goes too far' },
  { value: 'iv', label: 'Why a link is not the same as a cause' },
  { value: 'v', label: 'Exercise guidelines around the world' },
  { value: 'vi', label: 'The limits of simply getting to your feet' },
  { value: 'vii', label: 'An initial effect that may not last' },
  { value: 'viii', label: 'Employers who resist change' },
  { value: 'ix', label: 'Movement rather than posture' },
]

const paragraphOptions: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

export const practiceReading26: IeltsTest = {
  id: 'practice-reading-26',
  title: 'Practice Test 26 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'iii', 2: 'ii', 3: 'iv', 4: 'vi', 5: 'vii', 6: 'ix',
      7: 'TRUE', 8: 'FALSE', 9: 'FALSE', 10: 'NOT GIVEN',
      11: ['sugar'], 12: ['height'], 13: ['back'],
      14: 'YES', 15: 'NO', 16: 'NOT GIVEN', 17: 'NO', 18: 'YES',
      19: 'B', 20: 'B', 21: 'C', 22: 'B',
      23: ['persistent'], 24: ['withdrawal'], 25: ['percentage'], 26: ['contract'],
      27: 'B', 28: 'C', 29: 'F', 30: 'E', 31: 'D',
      32: 'A', 33: 'B',
      34: ['A-weighting', 'A weighting'], 35: ['tinnitus', 'ringing', 'a ringing'], 36: ['tyres', 'the tyres', 'tires'], 37: ['quiet side', 'the quiet side'],
      38: 'YES', 39: 'NO', 40: 'NOT GIVEN',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Standing desks: does sitting less make us healthier?',
        html: `
          <p><span class="passage-letter">A</span> Over the past two decades the idea that sitting is bad for us has moved out of research journals and into the design of ordinary offices. Height-adjustable desks, once found only in the rooms of employees with back problems, are now offered to entire departments, and smartwatches remind their wearers to stand up every hour. Along the way the message has often been simplified into the slogan that sitting is the new smoking. Researchers who study physical activity have repeatedly objected to this phrase. Long periods of sitting are associated with poorer health, they agree, but the risks linked to smoking are far greater, and the comparison may encourage people to worry about the wrong thing.</p>
          <p><span class="passage-letter">B</span> Interest in the subject is older than the slogan. In the early 1950s the epidemiologist Jeremy Morris compared the drivers of London's double-decker buses with the conductors who worked on the same vehicles. The drivers sat for almost the whole of each shift, while the conductors climbed up and down the stairs collecting fares, and the conductors had lower rates of heart disease. For many years such findings were taken simply as evidence for the value of exercise. Only later did researchers begin to treat sitting as a separate issue, recognising that a person may meet the official exercise guidelines with a daily run and yet spend most of their remaining waking hours in a chair.</p>
          <p><span class="passage-letter">C</span> Most of the evidence that sitting is harmful comes from observational studies, which follow large groups of people and record their habits and their health. Those who sit the most tend to have higher rates of heart disease, type 2 diabetes and early death. However, such studies show an association, not necessarily a cause. People who are already unwell may sit more because they are unwell, and long hours at a desk often go together with other features of a person's life, such as diet and income, that are difficult to separate from sitting itself. Moreover, one large analysis that combined the results of many studies suggested that an hour or more of moderate activity a day appeared to remove much of the extra risk linked to long periods of sitting.</p>
          <p><span class="passage-letter">D</span> Standing up, though, is not the same as moving. A person standing still uses only slightly more energy than a person sitting, and over a working day the difference amounts to little more than a small snack. Standing for long periods also brings problems of its own. Shop assistants, factory workers and others whose jobs keep them on their feet commonly report discomfort in the legs and feet and pain in the lower back. Replacing eight hours of sitting with eight hours of standing would therefore exchange one set of difficulties for another.</p>
          <p><span class="passage-letter">E</span> When sit-stand desks have been tested in workplaces, they have generally reduced the time employees spend sitting at work, in some trials by an hour or more a day. Yet the change is often largest in the first weeks. As the novelty fades, many users raise their desks less often, and in some offices the expensive new furniture ends up permanently at sitting height. Reviews of the research have also judged the evidence on health outcomes, such as body weight or blood pressure, to be limited and of low quality, so it remains uncertain whether the reduction in sitting translates into measurable benefits.</p>
          <p><span class="passage-letter">F</span> What seems to matter more than posture is movement, and in particular the breaking up of long periods of stillness. In laboratory studies, volunteers who interrupted prolonged sitting with brief bouts of light walking showed a smaller rise in blood sugar after meals than when they sat without a break. In an office this might mean walking to speak to a colleague instead of sending a message, holding some meetings on foot, or placing the printer at the far end of the room. Ergonomists like to say that the best posture is the next one. A height-adjustable desk can make such variety easier, but it is a tool for changing position, not a cure in itself.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: deskHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'Researchers who study physical activity have repeatedly objected to this phrase.' },
              { number: 2, text: 'Paragraph B', evidence: "compared the drivers of London's double-decker buses with the conductors who worked on the same vehicles" },
              { number: 3, text: 'Paragraph C', evidence: 'such studies show an association, not necessarily a cause' },
              { number: 4, text: 'Paragraph D', evidence: 'Standing up, though, is not the same as moving.' },
              { number: 5, text: 'Paragraph E', evidence: 'As the novelty fades, many users raise their desks less often' },
              { number: 6, text: 'Paragraph F', evidence: 'What seems to matter more than posture is movement' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 7, text: 'In Morris’s study, the bus workers who moved around more had less heart disease.', evidence: 'the conductors climbed up and down the stairs collecting fares, and the conductors had lower rates of heart disease' },
              { number: 8, text: 'A person who runs every day cannot be described as spending too much time sitting.', evidence: 'a person may meet the official exercise guidelines with a daily run and yet spend most of their remaining waking hours in a chair' },
              { number: 9, text: 'Standing instead of sitting for a whole working day burns a large amount of extra energy.', evidence: 'over a working day the difference amounts to little more than a small snack' },
              { number: 10, text: 'Sit-stand desks are more widely used in northern Europe than in other regions.' },
            ],
          },
          {
            id: 'r1c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Sitting, standing and moving</strong></p>
              <p>In laboratory experiments, breaking up long periods of sitting with short walks led to a smaller increase in blood {{11}} after eating. Sit-stand desks reduce sitting at first, but in some workplaces they are eventually left at sitting {{12}} all the time. Standing for many hours is not a perfect alternative either: people whose jobs require it often suffer pain in the lower {{13}}.</p>`,
            questions: [
              { number: 11, evidence: 'showed a smaller rise in blood sugar after meals' },
              { number: 12, evidence: 'the expensive new furniture ends up permanently at sitting height' },
              { number: 13, evidence: 'pain in the lower back' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The minimum payment trap: how credit card debt grows',
        html: `
          <p>A credit card is one of the most convenient ways to borrow, and for people who clear their balance in full every month it can cost nothing at all. Most cards offer an interest-free period on purchases, typically of up to around eight weeks, provided that the whole statement balance is paid by the due date. The difficulty begins when it is not. Interest is then charged, frequently at a rate well above that of a personal loan, and the arithmetic of repayment starts to work against the borrower.</p>
          <p>Every monthly statement shows a minimum payment. It is usually calculated as a small percentage of the balance, or as the interest due plus a small part of the debt, with a fixed lower amount for small balances. Paying this figure keeps the account in good standing, and many borrowers take it as a guide to what they ought to pay. That is a mistake. Because the minimum shrinks as the balance shrinks, a borrower who pays only the minimum each month repays less and less, and clearing even a moderate debt can take many years, with total interest that may exceed the sum originally borrowed. The minimum is best understood as the lowest figure the lender will accept, not as a recommendation.</p>
          <p>Some research suggests that the figure itself shapes behaviour. When a minimum is printed on a statement, it can act as an anchor: people who might otherwise have paid a larger, rounder sum are drawn towards the lower number. Findings of this kind help to explain why regulators in several countries now require statements to show how long repayment would take at the minimum and how much interest would be paid in total. In the UK, card providers must also take action when a customer has, over an extended period, paid more in interest, fees and charges than towards the borrowing itself, a situation the regulator calls persistent debt.</p>
          <p>Comparing cards requires attention to the annual percentage rate, or APR. Because it includes certain fees as well as interest, the APR is intended to allow like-for-like comparison between products. Yet the figure in an advertisement is only a representative rate, which in the UK need only be given to a majority of successful applicants; others, particularly those with weaker credit histories, may be offered a higher one. Nor are all transactions treated alike. Using a card to withdraw cash usually incurs a fee, and interest is normally charged from the day of the withdrawal, with no interest-free period at all. A card that is cheap for shopping can therefore be an expensive source of cash.</p>
          <p>Borrowers who already owe money can often move the debt to a new card that charges no interest for a promotional period. Used carefully, such balance transfers can save large sums, because every payment goes towards the debt itself rather than towards interest. But there are conditions. A transfer fee, usually a percentage of the amount moved, is normally charged at the outset; new purchases on the card may attract interest at the standard rate; and on many cards a single missed payment can bring the offer to an early end. When the promotional period finishes, any remaining balance begins to accrue interest at the standard rate, which is often high. A borrower who treats the offer as a breathing space rather than a deadline may simply postpone the problem.</p>
          <p>Card debt also leaves a record. Lenders share information with credit reference agencies, and late or missed payments appear on a borrower's file, where they can affect later applications for a mortgage or a mobile phone contract for several years. The proportion of available credit in use matters as well. A person who regularly uses almost all of their limit may look riskier to lenders than one who uses only a small part of it, even if both always pay on time. The single most effective habit is to arrange an automatic payment of the full balance each month or, where that is impossible, of a fixed sum well above the minimum. A credit card is a useful servant but, left to its own logic, an expensive master.</p>`,
        groups: [
          {
            id: 'r2a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 14, text: 'Someone who always pays off the whole balance on time may pay no interest on card purchases.', evidence: 'for people who clear their balance in full every month it can cost nothing at all' },
              { number: 15, text: 'The minimum payment is a sensible indication of how much a borrower should repay.', evidence: 'many borrowers take it as a guide to what they ought to pay. That is a mistake.' },
              { number: 16, text: 'Credit card interest rates have risen steadily over the last decade.' },
              { number: 17, text: 'A card with a low cost for purchases will also be good value for withdrawing cash.', evidence: 'A card that is cheap for shopping can therefore be an expensive source of cash.' },
              { number: 18, text: 'Using most of one’s credit limit can count against a borrower even if every payment is made on time.', evidence: 'may look riskier to lenders than one who uses only a small part of it, even if both always pay on time' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 19, text: 'Why does paying only the minimum take so long to clear a debt?', evidence: 'Because the minimum shrinks as the balance shrinks, a borrower who pays only the minimum each month repays less and less', options: [{ value: 'A', label: 'The interest rate increases each year the debt remains.' }, { value: 'B', label: 'Each payment becomes smaller as the debt is reduced.' }, { value: 'C', label: 'Lenders add a fee to every minimum payment.' }, { value: 'D', label: 'The minimum covers only the interest and none of the debt.' }] },
              { number: 20, text: 'What does the research on anchoring suggest?', evidence: 'people who might otherwise have paid a larger, rounder sum are drawn towards the lower number', options: [{ value: 'A', label: 'Borrowers usually round their payments up.' }, { value: 'B', label: 'Showing a minimum can lead people to repay less than they would have done.' }, { value: 'C', label: 'Regulators were wrong to change the information on statements.' }, { value: 'D', label: 'Borrowers ignore most of the figures on their statements.' }] },
              { number: 21, text: 'What does the writer say about the representative APR in an advertisement?', evidence: 'which in the UK need only be given to a majority of successful applicants', options: [{ value: 'A', label: 'It is guaranteed to every applicant.' }, { value: 'B', label: 'It includes interest but no fees.' }, { value: 'C', label: 'Some successful applicants may not receive it.' }, { value: 'D', label: 'It applies to cash withdrawals as well as purchases.' }] },
              { number: 22, text: 'What is the writer’s main warning about balance transfers?', evidence: 'A borrower who treats the offer as a breathing space rather than a deadline may simply postpone the problem.', options: [{ value: 'A', label: 'The fees usually cancel out any savings.' }, { value: 'B', label: 'Borrowers may fail to clear the debt before the offer ends.' }, { value: 'C', label: 'They always damage a borrower’s credit record.' }, { value: 'D', label: 'They are available only to people without existing debt.' }] },
            ],
          },
          {
            id: 'r2c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 23, text: 'Paying more in interest and charges than towards the borrowing over a long period is known in the UK as ___ debt.', evidence: 'a situation the regulator calls persistent debt' },
              { number: 24, text: 'Interest on cash taken out with a card is normally charged from the day of the ___.', evidence: 'interest is normally charged from the day of the withdrawal' },
              { number: 25, text: 'The fee for a balance transfer is usually a ___ of the amount moved.', evidence: 'A transfer fee, usually a percentage of the amount moved' },
              { number: 26, text: 'Missed payments can affect later applications for a mortgage or a mobile phone ___.', evidence: 'can affect later applications for a mortgage or a mobile phone contract' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Noise: the pollutant we learn to ignore',
        html: `
          <p><span class="passage-letter">A</span> Unlike polluted air or water, noise leaves no residue. It stops the moment its source stops, and it cannot be seen, collected or stored. Perhaps for this reason it was long regarded as a nuisance rather than as a threat to health, a matter for complaints between neighbours rather than for medical research. That view has changed. The World Health Organization now counts environmental noise among the most significant environmental threats to health in Europe, and the source that affects by far the largest number of people is not aircraft or industry but road traffic.</p>
          <p><span class="passage-letter">B</span> Part of the difficulty in discussing noise lies in the way it is measured. Sound levels are expressed in decibels, a logarithmic scale on which an increase of ten decibels represents a tenfold increase in sound energy, yet is perceived by most listeners as only about a doubling of loudness. An increase of three decibels corresponds to a doubling of sound energy but is barely noticeable. One consequence surprises many people: halving the volume of traffic on a road lowers the noise level by only around three decibels, a change that most residents would hardly detect. Measurements are usually adjusted by a method called A-weighting, which reduces the contribution of very low and very high frequencies to reflect the sensitivity of human hearing.</p>
          <p><span class="passage-letter">C</span> The most familiar harm is to hearing itself. Prolonged exposure to loud sound damages the delicate hair cells of the inner ear, and in humans these cells do not grow back. The damage usually builds up gradually and without pain, which is why it so often goes unnoticed. The first signs may be a ringing in the ears, known as tinnitus, or difficulty following a conversation in a noisy restaurant. Concern has grown in recent years about young people listening to music through headphones at high volume for long periods.</p>
          <p><span class="passage-letter">D</span> Yet most people exposed to environmental noise never hear sounds loud enough to damage the ear, and the greater concern lies elsewhere. During sleep, noise can raise the heart rate and cause brief awakenings that the sleeper does not remember in the morning. It also triggers the body's stress response. Over many years, exposure to road and aircraft noise has been associated with a higher risk of high blood pressure and heart disease. Studies of schools near busy airports have found that children exposed to aircraft noise tended to perform less well in tests of reading comprehension than similar children in quieter schools.</p>
          <p><span class="passage-letter">E</span> Many people insist that they have got used to the noise around them, and in one sense they have: after a while they no longer consciously notice it. However, measurements taken during sleep show that the heart continues to respond to passing vehicles and aircraft even in people who report that the noise does not disturb them. Adaptation, it seems, is partly an illusion. How annoying a sound is depends not only on its level but on whether listeners regard it as unnecessary and whether they feel they have any control over it.</p>
          <p><span class="passage-letter">F</span> Noise can be tackled at its source, along its path, or where it is received. At source, quieter road surfaces and lower speed limits can make a real difference, because at all but low speeds most of the noise from a car comes from its tyres rather than its engine. For the same reason, electric vehicles are much quieter than petrol cars in slow urban traffic, but the advantage shrinks on faster roads; indeed, in the European Union new electric cars must emit an artificial sound at low speeds so that pedestrians can hear them approach. Along the path, roadside barriers can shield nearby houses, but they offer little protection to the upper floors of tall buildings.</p>
          <p><span class="passage-letter">G</span> At the receiving end, insulation and well-sealed windows help, though only while the windows are closed. Planners increasingly favour homes with a quiet side, so that at least the bedrooms can face away from the street. Such measures are useful, but they treat the symptoms. Noise policy has too often consisted of setting limits that are rarely enforced. A more promising approach would treat quiet as a resource to be protected, in the same way that cities protect their parks.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? Write the correct letter, A–G.',
            options: paragraphOptions,
            questions: [
              { number: 27, text: 'an explanation of why reducing traffic by half may make little audible difference', evidence: 'halving the volume of traffic on a road lowers the noise level by only around three decibels' },
              { number: 28, text: 'a reference to a kind of damage that the human body cannot repair', evidence: 'in humans these cells do not grow back' },
              { number: 29, text: 'a reason why a change in vehicle technology may help less on fast roads', evidence: 'electric vehicles are much quieter than petrol cars in slow urban traffic, but the advantage shrinks on faster roads' },
              { number: 30, text: 'evidence that the body keeps reacting to noise that people say they no longer notice', evidence: 'the heart continues to respond to passing vehicles and aircraft even in people who report that the noise does not disturb them' },
              { number: 31, text: 'a mention of an effect of noise on children’s learning', evidence: 'children exposed to aircraft noise tended to perform less well in tests of reading comprehension' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO factors does the writer say affect how annoying a sound is, apart from its level? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'whether the listener thinks the sound is unnecessary' },
              { value: 'B', label: 'whether the listener feels able to control it' },
              { value: 'C', label: 'whether the sound is high or low in pitch' },
              { value: 'D', label: 'the age of the listener' },
              { value: 'E', label: 'the time of day when the sound occurs' },
            ],
            questions: [
              { number: 32, evidence: 'whether listeners regard it as unnecessary' },
              { number: 33, evidence: 'whether they feel they have any control over it' },
            ],
          },
          {
            id: 'r3c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 34, text: 'What method adjusts noise measurements to match the sensitivity of human hearing?', evidence: 'Measurements are usually adjusted by a method called A-weighting' },
              { number: 35, text: 'What may be one of the first signs of damage to hearing?', evidence: 'The first signs may be a ringing in the ears, known as tinnitus' },
              { number: 36, text: 'Except at low speeds, which part of a car produces most of its noise?', evidence: 'most of the noise from a car comes from its tyres rather than its engine' },
              { number: 37, text: 'What feature of a home allows bedrooms to face away from the street?', evidence: 'Planners increasingly favour homes with a quiet side' },
            ],
          },
          {
            id: 'r3d', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 38, text: 'For a long time, noise was not treated as a serious health issue.', evidence: 'it was long regarded as a nuisance rather than as a threat to health' },
              { number: 39, text: 'Roadside barriers protect all the floors of a tall building equally well.', evidence: 'they offer little protection to the upper floors of tall buildings' },
              { number: 40, text: 'Aircraft noise is more damaging to health than road noise of the same level.' },
            ],
          },
        ],
      },
    ],
  },
}
