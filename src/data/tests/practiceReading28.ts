import type { IeltsTest, Option } from '../../types'

// Original reading practice test 28 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const caffeineHeadings: Option[] = [
  { value: 'i', label: 'Why identical drinks have unequal effects' },
  { value: 'ii', label: 'The global trade in coffee beans' },
  { value: 'iii', label: 'Concealing the body’s need for rest' },
  { value: 'iv', label: 'A benefit that may be largely illusory' },
  { value: 'v', label: 'From plant protection to daily ritual' },
  { value: 'vi', label: 'How caffeine improves physical performance' },
  { value: 'vii', label: 'Disturbance that users fail to notice' },
  { value: 'viii', label: 'Using a stimulant wisely' },
  { value: 'ix', label: 'Why some people cannot tolerate caffeine at all' },
  { value: 'x', label: 'The problem of knowing how much we take' },
]

const inflationParagraphs: Option[] = [
  { value: 'A', label: 'Paragraph A' },
  { value: 'B', label: 'Paragraph B' },
  { value: 'C', label: 'Paragraph C' },
  { value: 'D', label: 'Paragraph D' },
  { value: 'E', label: 'Paragraph E' },
  { value: 'F', label: 'Paragraph F' },
]

export const practiceReading28: IeltsTest = {
  id: 'practice-reading-28',
  title: 'Practice Test 28 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'v', 2: 'iii', 3: 'i', 4: 'vii', 5: 'iv', 6: 'x', 7: 'viii',
      8: 'FALSE', 9: 'FALSE', 10: 'TRUE', 11: 'FALSE', 12: 'TRUE', 13: 'NOT GIVEN',
      14: 'C', 15: 'E', 16: 'D', 17: 'A', 18: 'F',
      19: ['switch'], 20: ['quality'], 21: ['shrinkflation'], 22: ['energy'], 23: ['overstate'],
      24: 'B', 25: 'D', 26: 'E',
      27: 'B', 28: 'C', 29: 'A', 30: 'D',
      31: 'NO', 32: 'YES', 33: 'NOT GIVEN', 34: 'NO', 35: 'YES',
      36: ['atomic'], 37: ['trilateration'], 38: ['quartz'], 39: ['motion'], 40: ['assisted GPS', 'assisted-GPS'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Caffeine: what the morning cup really does',
        html: `
          <p><span class="passage-letter">A</span> Caffeine is the most widely consumed psychoactive substance in the world. It is present in coffee, tea, cola, energy drinks and chocolate, and many people take it daily without a second thought. In the plant, caffeine acts as a natural pesticide, being toxic to many of the insects that would otherwise feed on its leaves and seeds. That a chemical defence should have become a morning ritual for billions of people is curious enough, but what is more surprising is how little most of its users know about what it does to them.</p>
          <p><span class="passage-letter">B</span> The explanation begins with a molecule called adenosine. Throughout the waking day, adenosine builds up in the brain, and as it binds to its receptors it gradually dampens nerve activity, producing the growing pressure to sleep that most people feel by the evening. Caffeine has a shape similar enough to adenosine to occupy the same receptors, but it does not activate them. It therefore provides no actual energy; instead it hides a signal of tiredness. The adenosine is still there, which is why some people experience a sudden slump when the caffeine wears off and the accumulated adenosine is finally able to act.</p>
          <p><span class="passage-letter">C</span> Caffeine is absorbed quickly, and its level in the blood usually peaks within an hour of drinking. It is then broken down by the liver at a rate that varies considerably from one person to another. In healthy adults the half-life, meaning the time taken for the body to remove half of the dose, is commonly around five hours, but it can be much shorter or longer. Smoking speeds up the process, while pregnancy and some oral contraceptives slow it down, and inherited differences in liver enzymes mean that two people drinking identical cups may feel the effects for very different lengths of time.</p>
          <p><span class="passage-letter">D</span> These differences matter most for sleep. With a half-life of five hours, a quarter of a dose is still circulating ten hours after it was taken, so a coffee drunk in the middle of the afternoon may still be active at bedtime. Laboratory studies have found that even a dose taken six hours before bed can reduce the total amount of sleep, and participants do not always notice the difference. Caffeine is also known to reduce the amount of deep sleep. People who insist that coffee never keeps them awake may therefore be quite right that they fall asleep easily, and still wake less refreshed than they would otherwise have done.</p>
          <p><span class="passage-letter">E</span> Regular users soon develop tolerance. The brain is thought to respond to the constant blocking of its receptors by producing more of them, so that the same dose has a smaller effect. If a habitual user suddenly stops, the extra receptors are left exposed to adenosine, and the result is the familiar withdrawal pattern of headache, tiredness and low mood, which typically begins within a day and may last for several days. Some researchers argue that this has an uncomfortable implication. Since regular drinkers begin each morning in a mild state of withdrawal, much of the alertness they feel after the first cup may simply return them to the level that a non-user enjoys without any coffee at all.</p>
          <p><span class="passage-letter">F</span> How much caffeine is too much? Several food-safety authorities consider a daily intake of up to about 400 milligrams to be unlikely to cause harm in most healthy adults, with a lower limit advised during pregnancy. The difficulty is that few people know how much they actually consume. The caffeine content of coffee depends on the bean, the method of brewing and above all the size of the cup, so that a large takeaway coffee may contain several times as much as a small cup made at home. Tea, soft drinks and some painkillers add further amounts, and even decaffeinated coffee is not entirely free of the substance.</p>
          <p><span class="passage-letter">G</span> None of this means that caffeine is dangerous; for most healthy adults, moderate consumption appears to be safe. The sensible approach is to treat it as a tool rather than as a habit. Setting a cut-off time in the early afternoon protects sleep. Those who wish to cut down should reduce gradually, since stopping abruptly almost guarantees withdrawal symptoms. Above all, it is worth remembering that the tiredness caffeine masks is a genuine signal, and no drink can replace the sleep that the body is asking for.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: caffeineHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'That a chemical defence should have become a morning ritual for billions of people is curious enough' },
              { number: 2, text: 'Paragraph B', evidence: 'It therefore provides no actual energy; instead it hides a signal of tiredness.' },
              { number: 3, text: 'Paragraph C', evidence: 'two people drinking identical cups may feel the effects for very different lengths of time' },
              { number: 4, text: 'Paragraph D', evidence: 'participants do not always notice the difference' },
              { number: 5, text: 'Paragraph E', evidence: 'much of the alertness they feel after the first cup may simply return them to the level that a non-user enjoys without any coffee at all' },
              { number: 6, text: 'Paragraph F', evidence: 'The difficulty is that few people know how much they actually consume.' },
              { number: 7, text: 'Paragraph G', evidence: 'The sensible approach is to treat it as a tool rather than as a habit.' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 8, text: 'Caffeine gives the brain an additional supply of energy.', evidence: 'It therefore provides no actual energy; instead it hides a signal of tiredness.' },
              { number: 9, text: 'A smoker and a pregnant woman who drink identical coffees are likely to feel the effects for the same length of time.', evidence: 'Smoking speeds up the process, while pregnancy and some oral contraceptives slow it down' },
              { number: 10, text: 'Caffeine can lower the quality of sleep even in people who fall asleep without difficulty.', evidence: 'may therefore be quite right that they fall asleep easily, and still wake less refreshed than they would otherwise have done' },
              { number: 11, text: 'Caffeine withdrawal symptoms usually continue for several weeks.', evidence: 'which typically begins within a day and may last for several days' },
              { number: 12, text: 'Caffeine is an ingredient in certain medicines.', evidence: 'Tea, soft drinks and some painkillers add further amounts' },
              { number: 13, text: 'Decaffeinated tea contains more caffeine than decaffeinated coffee.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Inflation: why money buys less than it used to',
        html: `
          <p><span class="passage-letter">A</span> When people complain that a loaf of bread or a bus fare costs more than it used to, they are describing inflation, the general rise in prices across an economy over time. Because some prices rise while others fall, statisticians measure inflation with a price index. They track the cost of a large basket of goods and services that a typical household buys, from rent and electricity to haircuts and holidays, and weight each item by its share of household spending, so that a rise in the price of fuel counts for more than a rise in the price of matches. The contents of the basket are revised regularly to reflect changing habits: products that few people still buy drop out, while new ones, such as streaming subscriptions, are added.</p>
          <p><span class="passage-letter">B</span> Measuring inflation is less straightforward than it sounds. When the price of one product rises, many shoppers switch to a cheaper alternative, so an index that assumes unchanged purchases may exaggerate the true increase in the cost of living. Improvements in quality cause similar difficulties: a new phone that costs more than last year's model but does far more has not necessarily become more expensive in any meaningful sense. In the opposite direction, manufacturers sometimes reduce the size of a product while keeping its price unchanged, a practice nicknamed shrinkflation, which statisticians must detect and record. Above all, no single figure describes everyone's experience. A household that spends a large share of its income on energy and food will face a higher personal rate of inflation than the official average whenever those prices rise fastest.</p>
          <p><span class="passage-letter">C</span> Economists usually distinguish between several causes. Prices may be pulled upwards when demand grows faster than the economy's ability to produce goods, as when consumers spend heavily after a period of saving. They may be pushed upwards when the cost of production rises, as happens when oil and gas become more expensive, since energy feeds into the price of almost everything else. Expectations also play a part. If workers expect prices to rise, they ask for higher wages, and if firms expect their costs to rise, they increase their prices in advance; in this way a belief about inflation can help to bring it about.</p>
          <p><span class="passage-letter">D</span> Inflation does not harm everyone equally. Savers lose out whenever the interest they receive is lower than the rate of inflation. Economists therefore distinguish between the nominal interest rate printed on a bank statement and the real interest rate, which is the nominal rate minus inflation. A savings account paying two per cent when prices are rising by five per cent has a real rate of minus three per cent: the balance grows, but it buys less each year. Borrowers, on the other hand, can benefit. If incomes rise with prices, a fixed debt becomes smaller relative to earnings, which is one reason why unexpectedly high inflation tends to transfer wealth from lenders to borrowers.</p>
          <p><span class="passage-letter">E</span> Given these costs, it might seem that the ideal rate of inflation is zero. Yet many central banks aim to keep it at around two per cent. One reason is that price indices tend to overstate inflation slightly, so a measured rate of zero might conceal prices that are in fact falling. A more important reason is that falling prices, known as deflation, can be damaging in their own right. If people expect goods to be cheaper next year, they may postpone purchases, which reduces demand and, in turn, employment, while the real burden of existing debts grows heavier. Japan's long period of very low inflation and occasionally falling prices from the 1990s onwards is often cited as a warning. A modest positive target also leaves central banks room to cut interest rates when the economy weakens.</p>
          <p><span class="passage-letter">F</span> The main tool for controlling inflation is the interest rate set by the central bank. Raising it makes borrowing more expensive and saving more attractive, which tends to reduce spending and, eventually, the pace of price rises. The word eventually is important, because the full effect of a change in interest rates may take a year or more to appear, so central banks must act on forecasts rather than on current figures. For individuals, the lessons are practical. Comparing the rate on a savings account with the current rate of inflation shows whether money is really growing, and checking the price per kilogram or per litre, rather than the price of the pack, is the simplest defence against goods that quietly become smaller.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching', instructions: 'Reading Passage 2 has six paragraphs, A–F. Which paragraph contains the following information? NB You may use any letter more than once.',
            options: inflationParagraphs,
            questions: [
              { number: 14, text: 'an example of how an opinion about the future can push prices up', evidence: 'in this way a belief about inflation can help to bring it about' },
              { number: 15, text: "a reference to one country's experience being used as a warning", evidence: "Japan's long period of very low inflation and occasionally falling prices from the 1990s onwards is often cited as a warning" },
              { number: 16, text: 'a calculation showing that money can lose value while appearing to grow', evidence: 'has a real rate of minus three per cent: the balance grows, but it buys less each year' },
              { number: 17, text: 'an explanation of why the measuring method has to change over time', evidence: 'The contents of the basket are revised regularly to reflect changing habits' },
              { number: 18, text: 'a reason why policy decisions must be based on predictions', evidence: 'so central banks must act on forecasts rather than on current figures' },
            ],
          },
          {
            id: 'r2b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Problems in measuring inflation</strong></p>
              <p>An index may exaggerate the rise in the cost of living because, when one price goes up, shoppers often {{19}} to a cheaper product. A higher price may also reflect an improvement in {{20}} rather than a genuine increase. Prices can also rise without any change on the label, through a practice known as {{21}}. Households that spend heavily on food and {{22}} may experience inflation above the official average. Because indices tend to {{23}} inflation, a target of zero could hide falling prices.</p>`,
            questions: [
              { number: 19, evidence: 'many shoppers switch to a cheaper alternative' },
              { number: 20, evidence: 'Improvements in quality cause similar difficulties' },
              { number: 21, evidence: 'a practice nicknamed shrinkflation' },
              { number: 22, evidence: 'A household that spends a large share of its income on energy and food will face a higher personal rate of inflation than the official average' },
              { number: 23, evidence: 'price indices tend to overstate inflation slightly' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-multi', instructions: 'Which THREE of the following does the writer mention as harmful effects of deflation? Choose THREE letters, A–F.',
            options: [
              { value: 'A', label: 'savers losing money in real terms' },
              { value: 'B', label: 'people putting off buying things' },
              { value: 'C', label: 'a rise in the cost of imported goods' },
              { value: 'D', label: 'a fall in employment' },
              { value: 'E', label: 'debts becoming more burdensome' },
              { value: 'F', label: 'banks becoming unwilling to lend' },
            ],
            questions: [
              { number: 24, evidence: 'they may postpone purchases' },
              { number: 25, evidence: 'which reduces demand and, in turn, employment' },
              { number: 26, evidence: 'the real burden of existing debts grows heavier' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Finding the way: how satellite positioning works',
        html: `
          <p>Few technologies have become ordinary so quickly. A generation ago, finding the way in an unfamiliar city meant unfolding a paper map; today most people simply follow a moving dot on a phone screen. That dot depends on the Global Positioning System, a network of satellites operated by the United States, and on similar systems built by other countries. Yet the principle that makes it work is not really about maps at all. At heart, satellite positioning is a method of measuring time with extraordinary precision.</p>
          <p>The American system relies on a constellation of at least twenty-four satellites orbiting about 20,000 kilometres above the Earth, arranged so that several are above the horizon from almost any point on the planet. Each satellite carries atomic clocks and continuously broadcasts a signal stating, in effect, which satellite it is, where it is and exactly when the signal was sent. A receiver on the ground notes the moment at which the signal arrives, and the delay reveals the distance to the satellite. Since radio waves travel at the speed of light, roughly 300,000 kilometres per second, an error of just one millionth of a second in timing would place the receiver about 300 metres from its true position.</p>
          <p>Knowing its distance from one satellite tells the receiver only that it lies somewhere on the surface of an imaginary sphere centred on that satellite. Distances from three satellites narrow this down to two possible points, one of which can usually be rejected because it lies far out in space. Finding a position in this way is known as trilateration. In practice, however, a fourth satellite is needed. The clock in a phone is an inexpensive quartz device, nowhere near accurate enough for the calculation. The receiver therefore treats its own clock error as an additional unknown and solves for it alongside its position, and a measurement from a fourth satellite provides the extra information required. As a result, every phone that uses satellite positioning also obtains a highly accurate time signal.</p>
          <p>Precision on this scale requires some unexpected physics. According to Einstein's theories of relativity, clocks moving at high speed run slightly slow, while clocks in a weaker gravitational field run slightly fast. For the satellites the second effect is larger, and the net result is that their clocks gain about 38 microseconds each day compared with clocks on the ground. This sounds trivial, but if it were ignored the calculated positions would drift by several kilometres every day. The satellite clocks are therefore deliberately adjusted to compensate.</p>
          <p>Under an open sky, a modern smartphone can usually locate itself to within about five metres. Conditions are rarely ideal, though. In city centres, tall buildings block some satellites and reflect the signals of others, so that a signal may arrive by an indirect route and appear to have travelled further than it really did. Indoors, the signals, which are extremely weak by the time they reach the ground, may not be detectable at all. To cope, phones combine satellite measurements with other clues, including the known locations of nearby Wi-Fi networks and mobile phone masts and data from motion sensors. Most phones also receive signals from several systems at once, including Europe's Galileo, Russia's GLONASS and China's BeiDou, which increases the number of satellites in view.</p>
          <p>Speed is a further problem. The satellites broadcast details of their orbits very slowly, so a receiver starting from nothing may need several minutes to collect them. Phones avoid this delay by downloading the same information over the mobile network, a technique known as assisted GPS, which is why a location usually appears within seconds.</p>
          <p>Two misunderstandings about the system are common. The first is that satellites track the people who use them. In fact the system is entirely one-way: receivers listen but transmit nothing, so the satellites have no knowledge of who is using them. Where location data are collected, it is because an app or service on the phone sends them elsewhere, and controlling those permissions is therefore what really matters for privacy. The second misunderstanding is that navigation is the system's main purpose. Telecommunications networks, power grids and financial systems all rely on the time signals to synchronise their operations, and a prolonged failure would disrupt far more than car journeys. Because the signals are so weak, they can be drowned out by deliberate interference, and it is surely unwise for so much to depend on a signal that can be blocked so easily.</p>`,
        groups: [
          {
            id: 'r3a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 27, text: 'According to the writer, satellite positioning is essentially a way of', evidence: 'At heart, satellite positioning is a method of measuring time with extraordinary precision.', options: [{ value: 'A', label: 'producing more accurate maps.' }, { value: 'B', label: 'measuring time very precisely.' }, { value: 'C', label: 'tracking the movement of vehicles.' }, { value: 'D', label: 'sending messages to satellites.' }] },
              { number: 28, text: 'Why does a receiver need a signal from a fourth satellite?', evidence: 'The receiver therefore treats its own clock error as an additional unknown and solves for it alongside its position' , options: [{ value: 'A', label: 'to reject a point that lies far out in space' }, { value: 'B', label: 'to correct for the effects of relativity' }, { value: 'C', label: 'to make up for the limited accuracy of its own clock' }, { value: 'D', label: 'to download orbital details more quickly' }] },
              { number: 29, text: 'What would happen if the effects of relativity were not corrected?', evidence: 'if it were ignored the calculated positions would drift by several kilometres every day', options: [{ value: 'A', label: 'Calculated positions would become steadily less accurate.' }, { value: 'B', label: 'The satellite clocks would gradually stop working.' }, { value: 'C', label: 'Signals would take longer to reach the ground.' }, { value: 'D', label: 'Phones would lose about 38 microseconds a day.' }] },
              { number: 30, text: 'Positions calculated in city centres may be wrong because', evidence: 'so that a signal may arrive by an indirect route and appear to have travelled further than it really did', options: [{ value: 'A', label: 'Wi-Fi networks interfere with satellite signals.' }, { value: 'B', label: 'fewer satellites orbit above large cities.' }, { value: 'C', label: 'tall buildings slow down radio waves.' }, { value: 'D', label: 'reflected signals seem to have travelled further than they did.' }] },
            ],
          },
          {
            id: 'r3b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 31, text: 'Positioning satellites are able to record which phones are using their signals.', evidence: 'receivers listen but transmit nothing, so the satellites have no knowledge of who is using them' },
              { number: 32, text: 'Privacy depends mainly on how apps on a phone handle location data.', evidence: 'controlling those permissions is therefore what really matters for privacy' },
              { number: 33, text: 'Galileo gives more accurate positions than the American system.' },
              { number: 34, text: 'Helping people to navigate is the most important use of the satellite signals.', evidence: "The second misunderstanding is that navigation is the system's main purpose." },
              { number: 35, text: 'Too much now depends on signals that are easy to block.', evidence: 'it is surely unwise for so much to depend on a signal that can be blocked so easily' },
            ],
          },
          {
            id: 'r3c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 36, text: 'Each satellite carries ________ clocks.', evidence: 'Each satellite carries atomic clocks' },
              { number: 37, text: 'Calculating a position from distances to several satellites is called ________.', evidence: 'Finding a position in this way is known as trilateration.' },
              { number: 38, text: 'The clock inside a phone is a cheap ________ device.', evidence: 'The clock in a phone is an inexpensive quartz device' },
              { number: 39, text: 'Indoors, phones may also rely on information from ________ sensors.', evidence: 'data from motion sensors' },
              { number: 40, text: 'Downloading orbital details over the mobile network is known as ________.', evidence: 'a technique known as assisted GPS' },
            ],
          },
        ],
      },
    ],
  },
}
