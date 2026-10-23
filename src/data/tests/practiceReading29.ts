import type { IeltsTest, Option } from '../../types'

// Original reading practice test 29 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const insuranceHeadings: Option[] = [
  { value: 'i', label: 'Behaviour that changes once a person is protected' },
  { value: 'ii', label: 'The origins of insurance in sea trade' },
  { value: 'iii', label: 'Turning an unaffordable risk into a manageable cost' },
  { value: 'iv', label: 'Reasons why payments may fall short of expectations' },
  { value: 'v', label: 'How governments regulate insurance companies' },
  { value: 'vi', label: 'Why large numbers make the future predictable' },
  { value: 'vii', label: 'A product that loses money for the average buyer' },
  { value: 'viii', label: 'Why premiums rise after a claim' },
  { value: 'ix', label: 'The danger of attracting the wrong customers' },
  { value: 'x', label: 'A more sensible way to choose a policy' },
]

const junctionTypes: Option[] = [
  { value: 'A', label: 'early circular junctions' },
  { value: 'B', label: 'modern roundabouts' },
  { value: 'C', label: 'junctions controlled by traffic signals' },
]

export const practiceReading29: IeltsTest = {
  id: 'practice-reading-29',
  title: 'Practice Test 29 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: ['maternity'], 2: ['post-mortem', 'postmortem'], 3: ['chlorine'], 4: ['germ'],
      5: 'FALSE', 6: 'TRUE', 7: 'TRUE', 8: 'FALSE', 9: 'NOT GIVEN', 10: 'FALSE',
      11: ['hot water'], 12: ['60 per cent', '60%', '60', 'sixty per cent', '60 percent'], 13: ['damp skin', 'damp'],
      14: 'iii', 15: 'vi', 16: 'vii', 17: 'ix', 18: 'i', 19: 'iv', 20: 'x',
      21: 'NO', 22: 'YES', 23: 'NOT GIVEN', 24: 'NO', 25: 'YES', 26: 'YES',
      27: 'A', 28: 'A', 29: 'C', 30: 'B', 31: 'B', 32: 'C',
      33: ['32', 'thirty-two'], 34: ['shallow'], 35: ['refuge'], 36: ['land'],
      37: 'B', 38: 'E',
      39: 'B', 40: 'A',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Soap, water and the science of clean hands',
        html: `
          <p><span class="passage-letter">A</span> In the 1840s, a young doctor named Ignaz Semmelweis was working in a maternity hospital in Vienna that had two clinics. In one, staffed by doctors and medical students, a far higher proportion of new mothers died of a fever after giving birth than in the other, which was staffed by midwives. Semmelweis noticed that the doctors often came to the wards directly from performing post-mortem examinations, and he concluded that they were carrying some kind of material from the dead bodies on their hands. When he required staff to wash their hands in a chlorine solution before examining patients, the death rate in the doctors' clinic fell sharply. Yet many of his colleagues rejected the idea, partly because it implied that doctors themselves were causing harm, and it was only after his death, as the germ theory of disease gained acceptance, that his work was widely recognised.</p>
          <p><span class="passage-letter">B</span> Today the value of handwashing is not in doubt, but the reasons it works are less widely understood. Soap does not mainly work by killing microbes. Its molecules have two ends with opposite properties: one is attracted to water, while the other avoids water and is attracted to oils and fats. When hands are lathered, the fat-loving ends attach to the oily film on the skin, in which dirt and microbes are trapped, and surround it in tiny clusters that can be carried away by running water. Some viruses, including those that cause influenza, are also wrapped in a fatty outer layer, which soap can break apart, destroying the virus.</p>
          <p><span class="passage-letter">C</span> This explains why the way hands are washed matters as much as the product. The rubbing action is what loosens the oily film and spreads the soap into every crease, which is why public health agencies typically recommend scrubbing for at least twenty seconds. Studies of how people actually wash have found that certain areas are frequently missed, in particular the thumbs, the fingertips and the backs of the hands. Many people also wash for only a few seconds. This may remove visible dirt, but it leaves many microbes behind.</p>
          <p><span class="passage-letter">D</span> Some popular beliefs turn out to be unfounded. Hot water is often assumed to be more effective than cold, but water hot enough to kill bacteria would scald the skin, and at comfortable temperatures there is little difference in how many microbes are removed. Similarly, antibacterial soaps have not been shown to prevent illness better than ordinary soap in everyday use. In 2016 the United States Food and Drug Administration banned a number of antibacterial ingredients from consumer hand washes, because manufacturers had failed to demonstrate that they offered any additional benefit or that long-term use was safe.</p>
          <p><span class="passage-letter">E</span> Alcohol-based hand gels have become a convenient alternative when soap and water are unavailable. Those containing at least 60 per cent alcohol are effective against many bacteria and viruses, and because they act within seconds they are widely used in hospitals between contacts with patients. They have important limitations, however. They work poorly on hands that are visibly dirty or greasy, since the alcohol cannot reach microbes buried in the dirt, and some germs, including the norovirus that causes vomiting illness, are relatively resistant to them. In these situations, washing remains the better option.</p>
          <p><span class="passage-letter">F</span> The final step is often neglected. Damp skin transfers microbes far more readily than dry skin, so hands that are washed carefully but left wet can quickly become contaminated again. Drying them thoroughly with a clean towel or paper towel completes the process. Semmelweis would no doubt be pleased that his advice is now followed throughout the world, but he might be surprised to learn how often it is followed only halfway.</p>`,
        groups: [
          {
            id: 'r1a', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Semmelweis in Vienna</strong></p>
              <ul>
                <li>worked in a {{1}} hospital with two separate clinics</li>
                <li>observed that doctors arrived on the wards straight from {{2}} examinations</li>
                <li>introduced handwashing in a {{3}} solution, and deaths fell</li>
                <li>his work was recognised only after the {{4}} theory of disease became accepted</li>
              </ul>`,
            questions: [
              { number: 1, evidence: 'was working in a maternity hospital in Vienna that had two clinics' },
              { number: 2, evidence: 'the doctors often came to the wards directly from performing post-mortem examinations' },
              { number: 3, evidence: 'wash their hands in a chlorine solution before examining patients' },
              { number: 4, evidence: 'as the germ theory of disease gained acceptance, that his work was widely recognised' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 5, text: 'Soap cleans hands chiefly by killing the microbes on them.', evidence: 'Soap does not mainly work by killing microbes.' },
              { number: 6, text: 'Soap is capable of destroying certain viruses.', evidence: 'are also wrapped in a fatty outer layer, which soap can break apart, destroying the virus' },
              { number: 7, text: 'Hands washed very briefly can look clean while still carrying many microbes.', evidence: 'This may remove visible dirt, but it leaves many microbes behind.' },
              { number: 8, text: 'Washing in hot water removes considerably more microbes than washing in comfortably warm water.', evidence: 'at comfortable temperatures there is little difference in how many microbes are removed' },
              { number: 9, text: 'The 2016 ban also applied to hand washes used in hospitals.' },
              { number: 10, text: 'Alcohol-based gels have little effect on viruses.', evidence: 'are effective against many bacteria and viruses' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'What is often wrongly thought to make handwashing more effective?', evidence: 'Hot water is often assumed to be more effective than cold' },
              { number: 12, text: 'What is the minimum alcohol content of an effective hand gel?', evidence: 'Those containing at least 60 per cent alcohol are effective' },
              { number: 13, text: 'What passes microbes on far more easily than dry skin?', evidence: 'Damp skin transfers microbes far more readily than dry skin' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Insurance: paying for what may never happen',
        html: `
          <p><span class="passage-letter">A</span> Insurance is an unusual product. Customers pay for it in the hope that they will never need to use it, and in most years most of them do not. It nevertheless performs an essential function, because it converts a small chance of a large loss into the certainty of a small, regular cost. A household that could never afford to rebuild a home destroyed by fire can easily afford an annual premium, and by paying it the household exchanges a risk it cannot bear for one that it can.</p>
          <p><span class="passage-letter">B</span> The mechanism that makes this possible is pooling. No insurer can predict whether a particular house will catch fire, but across hundreds of thousands of houses the number of fires each year is fairly stable. This is an application of what statisticians call the law of large numbers: the larger the group, the more closely the actual losses tend to match the expected ones. Because the premiums of the many pay for the losses of the few, an insurer can make reliable plans even though every individual policy is a gamble.</p>
          <p><span class="passage-letter">C</span> It follows that, on average, customers must lose money. Premiums have to cover not only the expected cost of claims but also the insurer's administration, marketing and profit, so the typical policyholder pays in more than he or she receives. This is not a reason to avoid insurance, but it is a reason to be selective. The guiding principle is to insure against losses that would be genuinely damaging and to carry small risks oneself. Extended warranties on inexpensive electrical goods, for example, are frequently poor value: the cost of replacing a kettle is unpleasant but hardly ruinous, and a modest emergency fund does the same job without contributing to anyone's profit margin.</p>
          <p><span class="passage-letter">D</span> Insurers face two characteristic problems, both arising from the fact that customers know things about themselves that the company does not. The first, known as adverse selection, is that people who expect to make a claim are the most eager to buy cover. If an insurer charged everyone the same price, careful customers would find it expensive and leave, while risky ones would stay, pushing up costs and therefore prices still further. To prevent this, insurers ask detailed questions and set prices according to risk, and in some markets the government makes cover compulsory, so that low-risk people remain in the pool.</p>
          <p><span class="passage-letter">E</span> The second problem is moral hazard: once insured, people may take less care. A driver whose repairs will be paid for may park less carefully, and a homeowner with full cover may not bother to fit a better lock. Insurers respond partly with the excess, the portion of each claim that the customer must pay. Because the customer bears the first part of any loss, he or she retains a reason to avoid it. Choosing a higher excess usually reduces the premium, which can be sensible for those with savings to absorb it, provided they are honest with themselves about what they could really afford.</p>
          <p><span class="passage-letter">F</span> The commonest disappointments occur when a claim is made. Policies contain exclusions, circumstances in which no payment will be made, and these are often found in the small print that few customers read. A claim may also be reduced or refused if the customer gave inaccurate information when buying the policy, even by mistake, or if the property was insured for less than its real value. In the latter case, known as underinsurance, many policies pay only a proportion of the loss.</p>
          <p><span class="passage-letter">G</span> None of these complications undermines the basic case for insurance, but they do suggest a different way of shopping for it. Comparing policies on price alone encourages a race to the bottom in which cover is quietly reduced. A better approach is to begin with the risks that would cause real hardship, check precisely what each policy excludes, and only then look for the best price among the policies that provide the protection needed.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: insuranceHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'it converts a small chance of a large loss into the certainty of a small, regular cost' },
              { number: 15, text: 'Paragraph B', evidence: 'the larger the group, the more closely the actual losses tend to match the expected ones' },
              { number: 16, text: 'Paragraph C', evidence: 'It follows that, on average, customers must lose money.' },
              { number: 17, text: 'Paragraph D', evidence: 'people who expect to make a claim are the most eager to buy cover' },
              { number: 18, text: 'Paragraph E', evidence: 'once insured, people may take less care' },
              { number: 19, text: 'Paragraph F', evidence: 'The commonest disappointments occur when a claim is made.' },
              { number: 20, text: 'Paragraph G', evidence: 'A better approach is to begin with the risks that would cause real hardship' },
            ],
          },
          {
            id: 'r2b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 21, text: 'People who pay for insurance but never claim have wasted their money.', evidence: 'It nevertheless performs an essential function' },
              { number: 22, text: 'Extended warranties on cheap appliances are usually a bad deal.', evidence: 'Extended warranties on inexpensive electrical goods, for example, are frequently poor value' },
              { number: 23, text: 'Compulsory insurance schemes are less efficient than voluntary ones.' },
              { number: 24, text: 'Choosing a higher excess is a wise decision for every customer.', evidence: 'which can be sensible for those with savings to absorb it, provided they are honest with themselves about what they could really afford' },
              { number: 25, text: 'An honest error made when buying a policy may affect a later claim.', evidence: 'if the customer gave inaccurate information when buying the policy, even by mistake' },
              { number: 26, text: 'Choosing a policy purely on price may lead people to accept less protection.', evidence: 'Comparing policies on price alone encourages a race to the bottom in which cover is quietly reduced.' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Going round in circles: the case for the roundabout',
        html: `
          <p>To many drivers, the roundabout is a minor irritation, a place to slow down for no obvious reason. To traffic engineers, it is one of the most effective safety measures available, and one that has spread from Britain and France across much of the world. Its success, however, depends on a rule that the earliest circular junctions did not follow.</p>
          <p>Large circular junctions were built in several cities in the early twentieth century, but in many of them traffic entering the circle had priority over traffic already on it. As more vehicles poured in, the circle filled up until nobody could leave, and at busy times these junctions could lock solid. The modern roundabout reverses this arrangement: drivers arriving at the junction must give way to vehicles already circulating. Britain made this the standard rule in 1966, and the change allowed roundabouts to be smaller and to carry more traffic. Modern designs also use curved approaches that force drivers to slow down before they enter.</p>
          <p>The safety benefits come from two sources. The first is geometry. At a conventional crossroads where two roads meet, there are 32 points at which the paths of vehicles can cross or merge, including the dangerous points where a turning car must cut across oncoming traffic. A single-lane roundabout reduces this to eight, and none of them involves vehicles meeting head-on or at right angles. The second source is speed. Because drivers must slow down to travel around the central island, the collisions that still occur tend to happen at low speed and at shallow angles, so that they are more likely to cause damage than serious injury. Studies of junctions converted from traffic signals or stop signs have recorded large falls in crashes causing injury, with the greatest reductions in the most serious collisions.</p>
          <p>There are other advantages. A roundabout lets traffic move whenever there is a gap, whereas signals hold vehicles at a red light even when the junction is empty, so delays and the fuel wasted by idling engines are often reduced. Roundabouts need no electricity, so they continue to work during power cuts, and they require less maintenance than signals. For pedestrians, a well-designed roundabout offers crossings set back from the junction with a refuge in the middle, so that people need to cross only one direction of traffic at a time.</p>
          <p>The design is not a universal solution. Roundabouts generally require more land than a simple crossroads, which can make them difficult to fit into dense city centres. Larger roundabouts with two or more lanes are considerably more complicated, since drivers must choose the correct lane and may change lanes while circulating, and they lose part of the safety advantage of single-lane designs. The evidence for cyclists is also more mixed: on busy multi-lane roundabouts cyclists can be at greater risk, as drivers leaving the junction may fail to see them. Finally, when traffic on one road heavily outnumbers traffic on the others, the dominant flow can leave few gaps, causing long queues on the quieter approaches. At such junctions, engineers sometimes add traffic signals to the roundabout itself.</p>
          <p>Perhaps the most stubborn obstacle has been public opinion. In places where roundabouts are unfamiliar, proposals to build them are often opposed, and residents predict confusion and accidents. Yet surveys in several communities have found that opposition tends to fall considerably once a roundabout has been in use for some time. Familiarity, it seems, is a large part of the argument. And a junction that asks drivers to slow down, look carefully and fit in with others is perhaps no bad model for the use of roads in general.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Look at the following statements and the list of junction types below. Match each statement with the correct junction type, A, B or C. NB You may use any letter more than once.',
            options: junctionTypes,
            questions: [
              { number: 27, text: 'gave priority to vehicles entering the junction', evidence: 'traffic entering the circle had priority over traffic already on it' },
              { number: 28, text: 'could become completely blocked at busy times', evidence: 'at busy times these junctions could lock solid' },
              { number: 29, text: 'make vehicles wait even when there is no other traffic', evidence: 'signals hold vehicles at a red light even when the junction is empty' },
              { number: 30, text: 'keep working when the electricity supply fails', evidence: 'Roundabouts need no electricity, so they continue to work during power cuts' },
              { number: 31, text: 'are designed to make drivers reduce speed before entering', evidence: 'Modern designs also use curved approaches that force drivers to slow down before they enter.' },
              { number: 32, text: 'were the starting point in studies that recorded fewer injury crashes', evidence: 'Studies of junctions converted from traffic signals or stop signs have recorded large falls in crashes causing injury' },
            ],
          },
          {
            id: 'r3b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>Why roundabouts are safer</strong></p>
              <p>A conventional crossroads has {{33}} points where vehicle paths can cross or merge, while a single-lane roundabout has only eight. Because drivers are forced to slow down, crashes tend to happen at low speed and at {{34}} angles. Pedestrians can cross in two stages, using a {{35}} in the middle. However, roundabouts take up more {{36}} than a simple crossroads, which limits their use in dense city centres.</p>`,
            questions: [
              { number: 33, evidence: 'there are 32 points at which the paths of vehicles can cross or merge' },
              { number: 34, evidence: 'the collisions that still occur tend to happen at low speed and at shallow angles' },
              { number: 35, evidence: 'crossings set back from the junction with a refuge in the middle' },
              { number: 36, evidence: 'Roundabouts generally require more land than a simple crossroads' },
            ],
          },
          {
            id: 'r3c', type: 'mcq-multi', instructions: 'Which TWO of the following are mentioned as difficulties for drivers on roundabouts with two or more lanes? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'They are usually controlled by traffic signals.' },
              { value: 'B', label: 'Drivers have to select the right lane.' },
              { value: 'C', label: 'Drivers cannot see pedestrian crossings.' },
              { value: 'D', label: 'They need more electricity than single-lane designs.' },
              { value: 'E', label: 'Drivers may move from one lane to another while going round.' },
            ],
            questions: [
              { number: 37, evidence: 'drivers must choose the correct lane' },
              { number: 38, evidence: 'may change lanes while circulating' },
            ],
          },
          {
            id: 'r3d', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 39, text: 'What does the writer say about public opposition to roundabouts?', evidence: 'opposition tends to fall considerably once a roundabout has been in use for some time', options: [{ value: 'A', label: 'It is usually based on accident statistics.' }, { value: 'B', label: 'It tends to weaken once people are used to them.' }, { value: 'C', label: 'It is strongest among cyclists.' }, { value: 'D', label: 'It has stopped roundabouts being built in Britain.' }] },
              { number: 40, text: 'Which best describes the writer’s overall attitude to roundabouts?', evidence: 'The design is not a universal solution.', options: [{ value: 'A', label: 'favourable, while recognising their limitations' }, { value: 'B', label: 'enthusiastic, believing they suit every junction' }, { value: 'C', label: 'doubtful about the claimed safety benefits' }, { value: 'D', label: 'mainly concerned with their cost' }] },
            ],
          },
        ],
      },
    ],
  },
}
