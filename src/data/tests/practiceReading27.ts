import type { IeltsTest, Option } from '../../types'

// Original reading practice test 27 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const labelOptions: Option[] = [
  { value: 'A', label: 'a use-by date' },
  { value: 'B', label: 'a best-before date' },
  { value: 'C', label: 'a display-until date' },
  { value: 'D', label: 'a packed-on date' },
  { value: 'E', label: 'a freeze-by date' },
]

const roadHeadings: Option[] = [
  { value: 'i', label: 'How engineers predict traffic flows' },
  { value: 'ii', label: 'An apparently obvious remedy' },
  { value: 'iii', label: 'How shorter journey times bring travellers back' },
  { value: 'iv', label: 'The environmental cost of construction' },
  { value: 'v', label: 'Measuring the link between road space and driving' },
  { value: 'vi', label: 'When less road does not mean more jams' },
  { value: 'vii', label: 'Drivers who refuse to change their habits' },
  { value: 'viii', label: 'A case for building that survives the criticism' },
  { value: 'ix', label: 'Putting a price on busy roads' },
  { value: 'x', label: 'Why better trains can mean faster roads' },
]

const batteryEndings: Option[] = [
  { value: 'A', label: 'can cause the memory effect.' },
  { value: 'B', label: 'loses capacity faster than one kept half charged in a cool place.' },
  { value: 'C', label: 'add up to a single charge cycle.' },
  { value: 'D', label: 'keep the battery below full until shortly before it is usually unplugged.' },
  { value: 'E', label: 'may reduce the available capacity only temporarily.' },
  { value: 'F', label: 'double the number of charge cycles used.' },
  { value: 'G', label: 'prevent the phone from ever becoming warm.' },
]

export const practiceReading27: IeltsTest = {
  id: 'practice-reading-27',
  title: 'Practice Test 27 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'FALSE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'TRUE',
      6: ['5', 'five'], 7: ['24', 'twenty-four'], 8: ['sniff'], 9: ['quality'],
      10: 'A', 11: 'B', 12: 'B', 13: 'C',
      14: 'ii', 15: 'iii', 16: 'v', 17: 'vi', 18: 'viii', 19: 'ix', 20: 'x',
      21: 'C', 22: 'B', 23: 'B',
      24: ['trial'], 25: ['1975'], 26: ['public transport'],
      27: 'YES', 28: 'NO', 29: 'NO', 30: 'NOT GIVEN', 31: 'NO',
      32: 'B', 33: 'C', 34: 'D', 35: 'E',
      36: 'A', 37: 'B',
      38: ['permanent damage'], 39: ['estimate', 'an estimate'], 40: ['2027'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Use by or best before? What food dates really mean',
        html: `
          <p>Households in wealthy countries throw away a considerable amount of food that could have been eaten, and studies of household waste have repeatedly found that confusion over date labels is part of the reason. Many people treat every date on a package as a deadline after which the contents become dangerous. In fact the different labels serve quite different purposes, and only one of them is concerned with safety.</p>
          <p>That label is the use-by date. It appears on foods that go off quickly and could cause illness if eaten too late, such as fresh meat and fish, ready meals and some dairy products. After the use-by date, food should not be eaten, cooked or frozen, even if it looks and smells perfectly normal. This advice can seem overcautious, but it reflects an important fact about food poisoning: the bacteria responsible for it, such as Listeria, do not necessarily change the appearance, smell or taste of food. The bacteria that make food smell unpleasant are mostly different organisms, so the senses are an unreliable guide to safety.</p>
          <p>A use-by date also depends on the food being stored as the label instructs. A chilled product that has been left out of the fridge on a warm day may become unsafe well before its date, and once a package has been opened, an instruction such as eat within two days of opening takes priority over the printed date. Temperature matters a great deal. In the UK, official advice is that fridges should be kept at 5 degrees Celsius or below, yet surveys have found that many household fridges run warmer than this, which shortens the safe life of chilled food.</p>
          <p>Freezing offers a way to extend the life of food with a use-by date, provided that it is done before the date has passed. Freezing does not kill bacteria, but it stops them from multiplying, which is why it is sometimes described as pressing a pause button. Once the food has been defrosted, the pause ends: the official advice is to keep it in the fridge and eat it within 24 hours.</p>
          <p>The best-before date is quite different. It relates to quality rather than safety, and it appears on foods with a longer life, such as dried pasta, rice, biscuits, tinned goods and frozen foods. After the best-before date the food is generally still safe to eat, although it may have lost some of its flavour or texture, provided that it has been stored correctly and the packaging is undamaged. Here, looking at and smelling the food is a reasonable way to judge whether it is still worth eating.</p>
          <p>A third kind of date, often marked display until or sell by, is not meant for shoppers at all. It is used by shop staff to manage stock on the shelves, and many retailers have stopped printing it on packaging. In recent years several large supermarkets in the UK have gone further, removing best-before dates from many fresh fruits and vegetables altogether, on the grounds that customers can judge the condition of an apple or a cabbage for themselves. At least one retailer has also changed some of its milk from a use-by to a best-before date and invited customers to use a sniff test to decide whether it is still good.</p>
          <p>Such changes have been welcomed by groups campaigning against waste, but labels alone are unlikely to solve the problem. Much food is thrown away because too much was bought or cooked, or because it was stored badly and spoiled before anyone remembered it. Planning meals before shopping, checking the fridge temperature and moving older items to the front can make as much difference as understanding the dates. Still, knowing which date is which allows people to waste less without taking risks: a best-before date is an invitation to use one's judgement, whereas a use-by date is not.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Food that has passed its use-by date is safe to eat as long as it smells normal.', evidence: 'even if it looks and smells perfectly normal' },
              { number: 2, text: 'Putting food in the freezer destroys the bacteria that cause food poisoning.', evidence: 'Freezing does not kill bacteria, but it stops them from multiplying' },
              { number: 3, text: 'Display-until dates are intended for people who work in shops.', evidence: 'It is used by shop staff to manage stock on the shelves' },
              { number: 4, text: 'Removing best-before dates from fresh produce has measurably reduced the amount of food wasted.' },
              { number: 5, text: 'A use-by date may become unreliable if a product is not kept as the label instructs.', evidence: 'A use-by date also depends on the food being stored as the label instructs.' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>Storing food safely</strong></p>
              <ul>
                <li>UK advice: fridges should run at {{6}} degrees Celsius or lower.</li>
                <li>Defrosted food should be eaten within {{7}} hours.</li>
                <li>One retailer suggests a {{8}} test to check some milk.</li>
                <li>A best-before date is concerned with {{9}}, not safety.</li>
              </ul>`,
            questions: [
              { number: 6, evidence: 'fridges should be kept at 5 degrees Celsius or below' },
              { number: 7, evidence: 'keep it in the fridge and eat it within 24 hours' },
              { number: 8, evidence: 'invited customers to use a sniff test' },
              { number: 9, evidence: 'It relates to quality rather than safety' },
            ],
          },
          {
            id: 'r1c', type: 'matching', instructions: 'Classify the following statements as referring to one type of date label, A–E. You may use any letter more than once.',
            options: labelOptions,
            questions: [
              { number: 10, text: 'It is found on products that spoil quickly.', evidence: 'It appears on foods that go off quickly and could cause illness if eaten too late' },
              { number: 11, text: 'Food may taste less good after this date.', evidence: 'it may have lost some of its flavour or texture' },
              { number: 12, text: 'Some supermarkets no longer put it on many fresh fruits and vegetables.', evidence: 'removing best-before dates from many fresh fruits and vegetables altogether' },
              { number: 13, text: 'Many shops have stopped printing it on their packaging.', evidence: 'many retailers have stopped printing it on packaging' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Why wider roads rarely cure congestion',
        html: `
          <p><span class="passage-letter">A</span> When a road is regularly jammed, the obvious solution seems to be to make it bigger. For much of the twentieth century this was the guiding principle of transport policy in many countries: forecast how much traffic there would be, then build enough road space to carry it. Yet transport researchers have found again and again that within a few years of a road being widened, it is often as congested as before. The explanation they offer is known as induced demand.</p>
          <p><span class="passage-letter">B</span> The idea rests on the fact that travel has a cost, and that for car journeys much of that cost is time. When a road is congested, some potential users respond by travelling at a different hour, taking another route, using a train or bus, or not making the trip at all. Widening the road reduces the time cost, and these people return. Commuters who had left home early to avoid the rush begin to travel at the peak again; some who had taken the train start to drive; trips that had seemed not worth the trouble are now made. Over a longer period, people may choose to live further from their work, and shops and offices may be built beside the improved road, adding traffic of their own.</p>
          <p><span class="passage-letter">C</span> Economists have tried to measure the effect. One widely cited study of American cities found that the distance driven rose roughly in proportion to the length of road lanes added, so that a city which increased its road network by a tenth could expect about a tenth more driving. The authors called this result the fundamental law of road congestion. Building more roads, on this evidence, does not so much relieve traffic as create more of it.</p>
          <p><span class="passage-letter">D</span> The process can also work in reverse. When road space is removed, traffic engineers often predict chaos on neighbouring streets, but the chaos frequently fails to arrive. Some of the traffic diverts, but some simply disappears as people change their routines, an effect sometimes called traffic evaporation. A well-known example is Seoul, where an elevated motorway built over a buried stream was demolished in the early 2000s and the stream was restored as a public park. The city did not grind to a halt.</p>
          <p><span class="passage-letter">E</span> None of this means that new roads are always pointless. The extra trips they allow are made because people value them, and that is a genuine benefit. A bypass that takes heavy through-traffic away from a town centre may greatly improve the town, even if the bypass itself soon becomes busy. The lesson of induced demand is rather that roads should be judged by the access they provide to jobs, services and other people, not by whether they keep traffic moving at a particular speed, because that speed is unlikely to last.</p>
          <p><span class="passage-letter">F</span> If time is the price that rations road space, an alternative is to charge money instead. Singapore introduced a charge for driving into its centre in 1975 and later replaced it with an electronic system; London began charging in 2003. Stockholm introduced its charge first as a trial, followed by a public vote, and the scheme was made permanent in 2007. In each case traffic in the charged area fell. In Stockholm, public opinion was hostile before the trial but became more favourable once residents had experienced the quieter streets.</p>
          <p><span class="passage-letter">G</span> A further insight concerns the link between roads and public transport. According to a principle sometimes called the Downs-Thomson paradox, in a congested city the speed of car travel tends towards the speed of the equivalent journey by public transport, because drivers keep switching between the two until neither offers a clear advantage. If this is correct, the most effective way to speed up the roads may be to improve the trains and buses. It is not the conclusion that road users expect, but the evidence suggests that the traffic jam is less a shortage of space than a market finding its own level.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: roadHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'When a road is regularly jammed, the obvious solution seems to be to make it bigger.' },
              { number: 15, text: 'Paragraph B', evidence: 'Widening the road reduces the time cost, and these people return.' },
              { number: 16, text: 'Paragraph C', evidence: 'the distance driven rose roughly in proportion to the length of road lanes added' },
              { number: 17, text: 'Paragraph D', evidence: 'When road space is removed, traffic engineers often predict chaos on neighbouring streets, but the chaos frequently fails to arrive.' },
              { number: 18, text: 'Paragraph E', evidence: 'None of this means that new roads are always pointless.' },
              { number: 19, text: 'Paragraph F', evidence: 'an alternative is to charge money instead' },
              { number: 20, text: 'Paragraph G', evidence: 'the most effective way to speed up the roads may be to improve the trains and buses' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 21, text: 'Which group is NOT mentioned as returning to a road after it is widened?', evidence: 'Commuters who had left home early to avoid the rush begin to travel at the peak again; some who had taken the train start to drive; trips that had seemed not worth the trouble are now made.', options: [{ value: 'A', label: 'people who had been travelling at a different time' }, { value: 'B', label: 'people who had been using public transport' }, { value: 'C', label: 'people who had been working from home' }, { value: 'D', label: 'people who had not been making the journey at all' }] },
              { number: 22, text: 'What does the example of Seoul show?', evidence: 'The city did not grind to a halt.', options: [{ value: 'A', label: 'All the traffic from a removed road moves to nearby streets.' }, { value: 'B', label: 'Removing a major road need not cause serious congestion.' }, { value: 'C', label: 'Parks attract more visitors than motorways.' }, { value: 'D', label: 'Engineers can accurately predict the effects of road closures.' }] },
              { number: 23, text: 'According to the writer, how should new roads be judged?', evidence: 'roads should be judged by the access they provide to jobs, services and other people, not by whether they keep traffic moving at a particular speed', options: [{ value: 'A', label: 'by how much they reduce journey times' }, { value: 'B', label: 'by how well they connect people to places and activities' }, { value: 'C', label: 'by how little traffic they attract' }, { value: 'D', label: 'by whether they take traffic away from town centres' }] },
            ],
          },
          {
            id: 'r2c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 24, text: 'Before its charge became permanent, Stockholm ran it as a ___.', evidence: 'Stockholm introduced its charge first as a trial' },
              { number: 25, text: 'Singapore first charged drivers to enter its centre in ___.', evidence: 'Singapore introduced a charge for driving into its centre in 1975' },
              { number: 26, text: 'The Downs-Thomson paradox links the speed of car travel to the speed of journeys by ___.', evidence: 'the speed of car travel tends towards the speed of the equivalent journey by public transport' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'What really wears out a phone battery',
        html: `
          <p>Almost everyone who owns a smartphone has noticed that, after a year or two, the battery no longer lasts as long as it did. Owners respond with a variety of rituals: letting the battery run completely flat, never charging it overnight, or closing every app after use. Much of this folk wisdom is out of date. It was formed in an era of nickel-based batteries, whereas the phones of today use lithium-ion cells, which behave quite differently.</p>
          <p>The older advice to drain a battery fully before recharging it comes from the so-called memory effect. Nickel-cadmium batteries that were repeatedly recharged after being only partly used could appear to lose some of their usable capacity, as if they remembered the shorter cycle. Lithium-ion batteries do not suffer from this problem to any practical degree. On the contrary, running them down to zero places them under additional strain, so the old ritual now does more harm than good.</p>
          <p>Lithium-ion batteries age in two ways. Cycle ageing results from the process of charging and discharging, while calendar ageing takes place simply with the passage of time, even when the battery is not being used. Both are accelerated by the same two conditions: high temperature and a high state of charge. A battery left fully charged in a hot place loses capacity faster than one kept half charged in a cool place. This is why manufacturers advise that a phone which is to be put away for several months should be stored at around half charge rather than full or empty.</p>
          <p>It also helps to understand what a charge cycle actually is. One cycle means using an amount of energy equal to the battery's full capacity, but it need not happen all at once. Using half the battery one day, recharging, and using half again the next day adds up to a single cycle, not two. Manufacturers usually describe battery life in terms of the number of full cycles after which the battery should still hold around 80 per cent of its original capacity. Topping up a phone during the day is therefore not wasteful, and in moderation it is gentler than repeatedly emptying it.</p>
          <p>Of the factors that owners can control, heat is the most important. Leaving a phone on the dashboard of a car in summer, or playing demanding games while it is charging, can raise the battery's temperature considerably and shorten its life. Cold has a different effect. In freezing weather a battery may appear to lose much of its charge, and a phone may even switch itself off, but the capacity largely returns once the battery warms up. Charging a lithium-ion battery below freezing, however, can cause permanent damage, which is why devices generally limit charging in such conditions.</p>
          <p>Leaving a phone plugged in overnight is not the danger it is often said to be. Modern phones contain management systems that stop charging when the battery is full, so overcharging in the old sense does not occur. Keeping the battery at full charge for many hours does add some stress, however, and many phones now offer an optimised charging feature that learns the owner's routine, holds the charge at around 80 per cent, and completes it shortly before the phone is usually unplugged. Fast charging produces more heat, but phones reduce the charging speed as the battery fills, and in phones with good thermal management the extra wear appears to be modest.</p>
          <p>Finally, it is worth remembering that the battery health figure shown in a phone's settings is an estimate, not an exact measurement. When capacity does decline, replacing the battery is usually far cheaper than replacing the phone, and regulation is moving in the same direction: under a law adopted by the European Union, batteries in portable devices such as phones will in general have to be removable and replaceable by the user from 2027. Until then, the most useful advice is short. Avoid heat, avoid keeping the battery at either extreme for long periods, and otherwise use the phone without worrying.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Much popular advice about phone batteries was developed for a different type of battery.', evidence: 'It was formed in an era of nickel-based batteries, whereas the phones of today use lithium-ion cells' },
              { number: 28, text: 'Letting a lithium-ion battery run flat before recharging helps it to stay healthy.', evidence: 'running them down to zero places them under additional strain' },
              { number: 29, text: 'A battery that is never used will keep all of its original capacity.', evidence: 'calendar ageing takes place simply with the passage of time, even when the battery is not being used' },
              { number: 30, text: 'More expensive phones generally have batteries that last longer than those in cheaper phones.' },
              { number: 31, text: 'Charging a phone overnight is a serious threat to its battery.', evidence: 'Leaving a phone plugged in overnight is not the danger it is often said to be.' },
            ],
          },
          {
            id: 'r3b', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: batteryEndings,
            questions: [
              { number: 32, text: 'A battery that is left fully charged in a hot place', evidence: 'A battery left fully charged in a hot place loses capacity faster than one kept half charged in a cool place.' },
              { number: 33, text: 'Using half the battery on each of two days and recharging in between will', evidence: 'adds up to a single cycle, not two' },
              { number: 34, text: 'Optimised charging features', evidence: 'holds the charge at around 80 per cent, and completes it shortly before the phone is usually unplugged' },
              { number: 35, text: 'Freezing weather', evidence: 'the capacity largely returns once the battery warms up' },
            ],
          },
          {
            id: 'r3c', type: 'mcq-multi', instructions: 'Which TWO situations does the writer mention as raising a battery’s temperature? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'leaving the phone on a car dashboard in summer' },
              { value: 'B', label: 'playing demanding games while the phone is charging' },
              { value: 'C', label: 'leaving the phone on charge overnight' },
              { value: 'D', label: 'keeping many apps open at the same time' },
              { value: 'E', label: 'using the phone in freezing weather' },
            ],
            questions: [
              { number: 36, evidence: 'Leaving a phone on the dashboard of a car in summer' },
              { number: 37, evidence: 'playing demanding games while it is charging' },
            ],
          },
          {
            id: 'r3d', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 38, text: 'What can result from charging a lithium-ion battery below freezing?', evidence: 'Charging a lithium-ion battery below freezing, however, can cause permanent damage' },
              { number: 39, text: 'According to the writer, what is the battery health figure in a phone’s settings?', evidence: "the battery health figure shown in a phone's settings is an estimate, not an exact measurement" },
              { number: 40, text: 'From what year will EU law generally require phone batteries to be replaceable by users?', evidence: 'will in general have to be removable and replaceable by the user from 2027' },
            ],
          },
        ],
      },
    ],
  },
}
