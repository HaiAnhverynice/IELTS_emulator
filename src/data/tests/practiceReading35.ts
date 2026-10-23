import type { IeltsTest, Option } from '../../types'

// Original reading practice test 35 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const caffeineHeadings: Option[] = [
  { value: 'i', label: 'Official figures and their limitations' },
  { value: 'ii', label: 'The history of coffee drinking' },
  { value: 'iii', label: 'Hiding tiredness rather than ending it' },
  { value: 'iv', label: 'A risk that is smaller than often believed' },
  { value: 'v', label: 'Why some people stay awake after a single cup' },
  { value: 'vi', label: 'Ways of removing caffeine from coffee beans' },
  { value: 'vii', label: 'A substance whose effects vary from person to person' },
  { value: 'viii', label: 'The body adjusts to a regular habit' },
  { value: 'ix', label: 'Not knowing how much is in the cup' },
  { value: 'x', label: 'Why children should avoid energy drinks' },
]

const subscriptionEndings: Option[] = [
  { value: 'A', label: 'removes the need to rely on memory.' },
  { value: 'B', label: 'has prompted action by regulators in some countries.' },
  { value: 'C', label: 'can make a task faster but cannot decide for you.' },
  { value: 'D', label: 'is now banned in every country.' },
  { value: 'E', label: 'is a way to test whether a subscription is still worth having.' },
  { value: 'F', label: 'is the most common reason people cancel.' },
  { value: 'G', label: 'may cut costs with little loss of enjoyment.' },
  { value: 'H', label: 'usually raises the total cost to the household.' },
]

const gpsParagraphs: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

export const practiceReading35: IeltsTest = {
  id: 'practice-reading-35',
  title: 'Practice Test 35 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'vii', 2: 'iii', 3: 'v', 4: 'viii', 5: 'i', 6: 'ix', 7: 'iv',
      8: 'FALSE', 9: 'FALSE', 10: 'NOT GIVEN', 11: 'TRUE',
      12: ['150'], 13: ['withdrawal'],
      14: 'NO', 15: 'YES', 16: 'YES', 17: 'NO', 18: 'NOT GIVEN',
      19: 'B', 20: 'C', 21: 'D',
      22: 'C', 23: 'E', 24: 'A', 25: 'G', 26: 'B',
      27: 'C', 28: 'G', 29: 'E', 30: 'B',
      31: 'B', 32: 'D',
      33: ['20,000', '20000'], 34: ['30 centimetres', '30 cm', '30 centimeters'], 35: ['38', 'thirty-eight'], 36: ['received'],
      37: ['US Space Force', 'the US Space Force', 'Space Force'], 38: ['reflect', 'reflect them', 'reflect others'], 39: ['Galileo'], 40: ['electricity grids', 'electricity grid'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Caffeine: how much is too much?',
        html: `
          <p><span class="passage-letter">A</span> Caffeine is the most widely consumed psychoactive substance in the world. It is found naturally in coffee beans, tea leaves and cocoa, and it is added to soft drinks, energy drinks and some painkillers. For most adults, a moderate daily intake appears to be harmless, and it may even be pleasant and useful. Yet the question of how much is too much has no single answer, because the same dose can affect two people in very different ways.</p>
          <p><span class="passage-letter">B</span> To understand why, it helps to know how caffeine works. Throughout the waking day, a chemical called adenosine gradually builds up in the brain, and as it attaches to receptors on nerve cells it produces a growing feeling of sleepiness. Caffeine does not reduce the amount of adenosine. Instead, it has a similar shape and can occupy the same receptors without activating them. In effect, it blocks the signal that tells the brain it is tired. It does not remove the tiredness itself, which is why people who rely on coffee to get through a short night often feel a heavy slump when the effect wears off.</p>
          <p><span class="passage-letter">C</span> How long that effect lasts depends on how quickly the body clears the drug. In healthy adults the half-life of caffeine, the time taken for the level in the blood to fall by half, is typically around five hours, but it can be much shorter or much longer. Smoking speeds up the process, while pregnancy and some medicines slow it considerably. Genetic differences in the liver enzymes that break caffeine down also play a part. This explains why one person can drink an espresso after dinner and sleep soundly, while another lies awake after a cup of tea at lunchtime. Even those who fall asleep easily are not necessarily unaffected: in one laboratory study, a dose taken six hours before bedtime still reduced the amount of sleep participants had.</p>
          <p><span class="passage-letter">D</span> Regular consumers also adapt. The brain responds to repeated blocking by making more adenosine receptors, so that the same cup produces a smaller lift than it once did. Much of the alertness a habitual coffee drinker feels in the morning may simply be relief from mild withdrawal. When such people stop suddenly, they commonly report headaches, tiredness and difficulty concentrating, usually starting within a day of the last dose. These symptoms are temporary, and cutting down gradually tends to make them milder.</p>
          <p><span class="passage-letter">E</span> For guidance on limits, many health authorities refer to an assessment published by the European Food Safety Authority in 2015. It concluded that, for healthy adults, a daily intake of up to 400 milligrams, spread through the day, does not give rise to safety concerns, and that single doses of up to 200 milligrams are also unlikely to cause problems. For women who are pregnant, the suggested limit is 200 milligrams a day. These figures are not targets, and they say nothing about how a particular person will feel; someone who is sensitive may experience a racing heart or anxiety at far lower amounts.</p>
          <p><span class="passage-letter">F</span> The practical difficulty is that few people know how much caffeine they actually consume. A cup of coffee can contain several times as much as another of the same size, depending on the type of bean, the way it is brewed and how much is served. Robusta beans contain roughly twice as much caffeine as arabica beans, and a large takeaway coffee may hold more than a home-made one. Decaffeinated coffee is not entirely free of caffeine either, although the amount is small. In the European Union and the UK, drinks containing more than 150 milligrams per litre must be labelled as having a high caffeine content and as not recommended for children, but coffee and tea are exempt from this rule.</p>
          <p><span class="passage-letter">G</span> Finally, some popular worries appear to be exaggerated. Caffeine does have a mild diuretic effect, but research suggests that, for people used to it, moderate amounts of coffee and tea contribute to daily fluid intake rather than causing dehydration. The more realistic risk for most people is not to their health in the long term but to their sleep tonight, and the simplest remedy is to notice when the last cup of the day is drunk.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: caffeineHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'because the same dose can affect two people in very different ways' },
              { number: 2, text: 'Paragraph B', evidence: 'It does not remove the tiredness itself' },
              { number: 3, text: 'Paragraph C', evidence: 'This explains why one person can drink an espresso after dinner and sleep soundly, while another lies awake after a cup of tea at lunchtime.' },
              { number: 4, text: 'Paragraph D', evidence: 'The brain responds to repeated blocking by making more adenosine receptors' },
              { number: 5, text: 'Paragraph E', evidence: 'These figures are not targets, and they say nothing about how a particular person will feel' },
              { number: 6, text: 'Paragraph F', evidence: 'few people know how much caffeine they actually consume' },
              { number: 7, text: 'Paragraph G', evidence: 'some popular worries appear to be exaggerated' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 8, text: 'Caffeine works by lowering the level of adenosine in the brain.', evidence: 'Caffeine does not reduce the amount of adenosine.' },
              { number: 9, text: 'People who have no difficulty falling asleep after caffeine can be sure that their sleep has not been affected.', evidence: 'a dose taken six hours before bedtime still reduced the amount of sleep participants had' },
              { number: 10, text: 'Withdrawal symptoms are usually more severe in people who give up tea than in those who give up coffee.' },
              { number: 11, text: 'Coffee and tea do not have to carry the high-caffeine warning that applies to some other drinks.', evidence: 'but coffee and tea are exempt from this rule' },
            ],
          },
          {
            id: 'r1c', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <ul>
                <li>In the EU and UK, drinks with over {{12}} milligrams of caffeine per litre need a warning label.</li>
                <li>For habitual coffee drinkers, morning alertness may partly be relief from {{13}}.</li>
              </ul>`,
            questions: [
              { number: 12, evidence: 'drinks containing more than 150 milligrams per litre must be labelled as having a high caffeine content' },
              { number: 13, evidence: 'Much of the alertness a habitual coffee drinker feels in the morning may simply be relief from mild withdrawal.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The subscription habit: paying for what we do not use',
        html: `
          <p>Not long ago, most people paid for things once. A film was bought on a disc, software came in a box, and a newspaper was paid for at the counter. Today an increasing share of household spending takes the form of regular payments: for streaming services, music, cloud storage, mobile apps, meal kits, gyms and even razors. For businesses, the attraction is obvious. A subscriber provides a predictable income, and a customer who has to make no decision each month is a customer who is less likely to leave. For consumers the picture is more mixed, and I would argue that the model works rather better for the seller than for the buyer.</p>
          <p>The central problem is not that subscriptions are expensive. Many of them are good value for people who use them heavily. The problem is that the cost of a subscription is easy to stop noticing. A single payment of a modest amount each month rarely prompts a second thought. And because it is taken automatically, there is no moment at which the customer must consciously agree to pay again. Several small sums, each one unremarkable on its own, can add up to a considerable amount over a year, yet surveys regularly find that people underestimate how much they spend in this way.</p>
          <p>Our forecasts about our own behaviour make matters worse. When people sign up, they tend to imagine the version of themselves who will use the service often: the person who will go to the gym three times a week or finally learn a language through an app. A well-known study of American gyms found that many members who chose a monthly contract would have paid less if they had simply paid for each visit separately. They were not foolish; they were optimistic, and the contract that suited their intentions did not suit their actual habits.</p>
          <p>Free trials exploit the same tendency. A trial that converts automatically into a paid subscription relies on the fact that a proportion of users will forget to cancel. Companies are well aware of this. The trial is not necessarily dishonest, since its terms are usually stated, but its profitability often depends less on persuading customers that the product is worth paying for than on the customers' failure to act before the deadline. Some services have also made cancelling much harder than joining, requiring a phone call or several screens of special offers before the account is finally closed. Regulators in a number of countries have begun to respond, for example by requiring that leaving be as simple as signing up, although the rules differ widely from place to place.</p>
          <p>It would be wrong, however, to treat every subscription as a trap. For a household that watches a great deal of television, a streaming service may cost far less than buying or renting films individually, and some subscriptions bundle services that would be more expensive separately. A fixed monthly fee can also make budgeting easier, because the cost is known in advance. The point is not that subscriptions should be avoided, but that each one should be judged by how it is actually used rather than by how the subscriber hoped to use it.</p>
          <p>In practice, that means looking. Going through a bank statement line by line, at least once or twice a year, reveals payments that would otherwise pass unseen. A useful test for each one is to ask whether you would sign up again today, at today's price, if you were not already a customer. Setting a reminder a few days before a free trial ends removes the reliance on memory. Some banking apps now list recurring payments in one place, which makes the task quicker, but they cannot make the decision for you.</p>
          <p>There is also a case for rotating subscriptions rather than accumulating them. Someone who likes two or three streaming services, but subscribes to only one at a time and switches when they have watched what they wanted, may lose little in enjoyment while paying considerably less. The companies would prefer us not to behave in this way, which is perhaps the strongest sign that it works.</p>`,
        groups: [
          {
            id: 'r2a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 14, text: 'Subscriptions generally benefit consumers more than the companies that sell them.', evidence: 'I would argue that the model works rather better for the seller than for the buyer' },
              { number: 15, text: 'Some subscriptions represent good value for people who use them frequently.', evidence: 'Many of them are good value for people who use them heavily.' },
              { number: 16, text: "The gym members' choices reflected unrealistic expectations about their own behaviour.", evidence: 'they were optimistic, and the contract that suited their intentions did not suit their actual habits' },
              { number: 17, text: 'Free trials that turn into paid subscriptions are, by their nature, dishonest.', evidence: 'The trial is not necessarily dishonest, since its terms are usually stated' },
              { number: 18, text: 'Subscription prices have risen faster than other prices in recent years.' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 19, text: 'According to the writer, why do people tend to underestimate what they spend on subscriptions?',
                evidence: 'And because it is taken automatically, there is no moment at which the customer must consciously agree to pay again.',
                options: [
                  { value: 'A', label: 'Prices are not displayed clearly when people sign up.' },
                  { value: 'B', label: 'The payments are small and are taken without any action by the customer.' },
                  { value: 'C', label: 'Banks do not show recurring payments on statements.' },
                  { value: 'D', label: 'Companies raise their prices without warning.' },
                ],
              },
              {
                number: 20, text: 'What does the writer say about the profitability of free trials?',
                evidence: "its profitability often depends less on persuading customers that the product is worth paying for than on the customers' failure to act before the deadline",
                options: [
                  { value: 'A', label: 'It depends mainly on the quality of the product.' },
                  { value: 'B', label: 'It has fallen since regulators intervened.' },
                  { value: 'C', label: 'It often depends on customers not cancelling in time.' },
                  { value: 'D', label: 'It is higher for streaming than for other services.' },
                ],
              },
              {
                number: 21, text: 'Which advantage of subscriptions does the writer mention?',
                evidence: 'A fixed monthly fee can also make budgeting easier, because the cost is known in advance.',
                options: [
                  { value: 'A', label: 'They give customers a wider choice of products.' },
                  { value: 'B', label: 'They usually begin with a free trial.' },
                  { value: 'C', label: 'They are easy to cancel at any time.' },
                  { value: 'D', label: 'They make costs predictable.' },
                ],
              },
            ],
          },
          {
            id: 'r2c', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–H, from the list below.',
            options: subscriptionEndings,
            questions: [
              { number: 22, text: 'Banking apps that list recurring payments', evidence: 'which makes the task quicker, but they cannot make the decision for you' },
              { number: 23, text: "Asking whether you would sign up again at today's price", evidence: "A useful test for each one is to ask whether you would sign up again today, at today's price, if you were not already a customer." },
              { number: 24, text: 'A reminder set shortly before a free trial ends', evidence: 'Setting a reminder a few days before a free trial ends removes the reliance on memory.' },
              { number: 25, text: 'Subscribing to only one streaming service at a time', evidence: 'may lose little in enjoyment while paying considerably less' },
              { number: 26, text: 'Making cancellation harder than joining', evidence: 'Regulators in a number of countries have begun to respond' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'How a phone knows where it is',
        html: `
          <p><span class="passage-letter">A</span> For most people, satellite navigation is something that simply works. A phone shows a blue dot on a map, and the dot moves as its owner walks down the street. Behind this everyday convenience lies a remarkable combination of physics and engineering, and an understanding of how it works also explains why it sometimes fails. The best-known system is the Global Positioning System, or GPS, which was developed by the United States military and is now operated by the US Space Force, although it is free for anyone in the world to use.</p>
          <p><span class="passage-letter">B</span> GPS relies on a constellation of at least 24 satellites orbiting about 20,000 kilometres above the Earth, arranged so that several are above the horizon from almost any point at any time. Each satellite carries highly accurate atomic clocks and continuously broadcasts a signal stating, in effect, what time it is on board and where the satellite is. A common misunderstanding is that a phone communicates with the satellites. In fact, the process is entirely one-way: the receiver listens, but it never transmits anything back, which is why the system can serve an unlimited number of users at once.</p>
          <p><span class="passage-letter">C</span> The receiver works out its position from timing. Because the signal travels at the speed of light, the delay between the moment it was sent and the moment it arrives reveals how far away the satellite is. Knowing its distance from one satellite places the receiver somewhere on an imaginary sphere around it; distances from three satellites narrow this down to a single point. There is a complication, however. The clock in a phone is cheap and nowhere near as precise as those in the satellites, and the margin for error is tiny: a timing mistake of one billionth of a second corresponds to roughly 30 centimetres. A fourth satellite is therefore needed, so that the receiver can calculate the error in its own clock as well as its position.</p>
          <p><span class="passage-letter">D</span> Even the satellites' clocks require correction, and for an unexpected reason. According to Einstein's theories of relativity, a clock moving at high speed runs slightly slow, while a clock in weaker gravity runs slightly fast. For GPS satellites the second effect is the larger one, and the net result is that their clocks gain about 38 millionths of a second each day compared with clocks on the ground. This sounds trivial, but if it were ignored, calculated positions would drift by around ten kilometres in a single day. The clocks are adjusted to allow for it, making satellite navigation one of the few everyday technologies that depends on relativity.</p>
          <p><span class="passage-letter">E</span> Under an open sky, a modern smartphone can usually locate itself to within about five metres. In a city centre, though, accuracy can fall sharply. Tall buildings block some signals and reflect others, so that a signal may reach the receiver by an indirect route, making the satellite seem further away than it is. This is why the blue dot sometimes appears on the wrong side of a street, or jumps from one block to another. Indoors and in tunnels, the signals, which are already very weak by the time they reach the ground, may not be received at all.</p>
          <p><span class="passage-letter">F</span> Phones overcome some of these limitations by not relying on satellites alone. A receiver starting from nothing may take a minute or more to find the satellites and download the information it needs about their orbits. Assisted GPS shortens this by obtaining that information through the mobile network instead. Phones also estimate their position from nearby Wi-Fi networks and mobile phone masts, which can help where satellite signals are poor. In addition, most now receive signals from other satellite systems as well as GPS, including Europe's Galileo, Russia's GLONASS and China's BeiDou. With more satellites in view, the chance of receiving enough clear signals increases.</p>
          <p><span class="passage-letter">G</span> Perhaps the least appreciated role of satellite navigation has nothing to do with finding the way. Because every GPS receiver effectively has access to an atomic clock, the system has become a cheap and accurate source of time. Mobile phone networks, electricity grids and financial systems use it to keep their equipment synchronised. This dependence worries some engineers, since the signals are weak enough to be disrupted by deliberate interference, and for that reason backup sources of accurate timing are increasingly being discussed.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.',
            options: gpsParagraphs,
            questions: [
              { number: 27, text: 'the reason why one additional satellite is required', evidence: 'A fourth satellite is therefore needed, so that the receiver can calculate the error in its own clock as well as its position.' },
              { number: 28, text: 'a use of the system that is unrelated to navigation', evidence: 'Perhaps the least appreciated role of satellite navigation has nothing to do with finding the way.' },
              { number: 29, text: 'an explanation of why positions may be wrong in built-up areas', evidence: 'making the satellite seem further away than it is' },
              { number: 30, text: 'the correction of a mistaken belief about how phones use satellites', evidence: 'A common misunderstanding is that a phone communicates with the satellites.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO of the following does the writer mention as ways in which phones find their position more quickly or more reliably? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'sending signals back to the satellites' },
              { value: 'B', label: 'obtaining orbit information through the mobile network' },
              { value: 'C', label: 'carrying their own atomic clock' },
              { value: 'D', label: 'using nearby Wi-Fi networks' },
              { value: 'E', label: 'ignoring signals that have been reflected' },
            ],
            questions: [
              { number: 31, evidence: 'Assisted GPS shortens this by obtaining that information through the mobile network instead.' },
              { number: 32, evidence: 'Phones also estimate their position from nearby Wi-Fi networks and mobile phone masts' },
            ],
          },
          {
            id: 'r3c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 33, text: 'GPS satellites orbit at a height of about ___ kilometres.', evidence: 'orbiting about 20,000 kilometres above the Earth' },
              { number: 34, text: 'A timing error of one billionth of a second leads to a distance error of roughly ___.', evidence: 'a timing mistake of one billionth of a second corresponds to roughly 30 centimetres' },
              { number: 35, text: 'Without correction, satellite clocks would gain about ___ millionths of a second per day.', evidence: 'their clocks gain about 38 millionths of a second each day' },
              { number: 36, text: 'In tunnels, the weak satellite signals may not be ___ at all.', evidence: 'may not be received at all' },
            ],
          },
          {
            id: 'r3d', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 37, text: 'Which organisation operates GPS today?', evidence: 'is now operated by the US Space Force' },
              { number: 38, text: 'Apart from blocking signals, what do tall buildings do to some of them?', evidence: 'Tall buildings block some signals and reflect others' },
              { number: 39, text: 'Which European satellite system do many phones use in addition to GPS?', evidence: "including Europe's Galileo" },
              { number: 40, text: 'Apart from phone networks and financial systems, what uses GPS time to keep equipment synchronised?', evidence: 'Mobile phone networks, electricity grids and financial systems use it to keep their equipment synchronised.' },
            ],
          },
        ],
      },
    ],
  },
}
