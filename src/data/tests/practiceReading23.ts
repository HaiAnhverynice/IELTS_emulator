import type { IeltsTest, Option } from '../../types'

// Original reading practice test 23 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const trafficHeadings: Option[] = [
  { value: 'i', label: 'A familiar experience with a scientific explanation' },
  { value: 'ii', label: 'How a small reaction grows along a line of cars' },
  { value: 'iii', label: 'Recreating a jam without any obstacle' },
  { value: 'iv', label: 'Keeping traffic below the point of instability' },
  { value: 'v', label: 'What one driver, or one machine, can achieve' },
  { value: 'vi', label: 'Why extra road space may not bring lasting relief' },
  { value: 'vii', label: 'The rising cost of motorway accidents' },
  { value: 'viii', label: 'How navigation apps send drivers onto side roads' },
  { value: 'ix', label: 'Why drivers ignore speed limits' },
]

const bnplEndings: Option[] = [
  { value: 'A', label: 'tends to increase the number and value of completed sales.' },
  { value: 'B', label: 'a customer may hold several plans that no single provider can see.' },
  { value: 'C', label: 'can make the cost of a purchase feel less painful.' },
  { value: 'D', label: 'fell outside the existing rules on consumer credit.' },
  { value: 'E', label: 'are also what make it easy to overuse.' },
  { value: 'F', label: 'guarantees that a customer’s credit record will improve.' },
  { value: 'G', label: 'is paid by the shopper at the time of purchase.' },
  { value: 'H', label: 'are cheaper for retailers than card payments.' },
]

export const practiceReading23: IeltsTest = {
  id: 'practice-reading-23',
  title: 'Practice Test 23 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'FALSE', 3: 'TRUE', 4: 'FALSE', 5: 'FALSE', 6: 'NOT GIVEN',
      7: ['magnets'], 8: ['currents'], 9: ['sensors'], 10: ['air'],
      11: 'A', 12: 'C', 13: 'E',
      14: 'i', 15: 'ii', 16: 'iii', 17: 'iv', 18: 'v', 19: 'vi',
      20: 'B', 21: 'A', 22: 'C', 23: 'D',
      24: ['ramp metering'], 25: ['induced demand'], 26: ['automated car', 'automated', 'an automated car'],
      27: 'NO', 28: 'YES', 29: 'YES', 30: 'NO', 31: 'NOT GIVEN',
      32: 'A', 33: 'B', 34: 'C', 35: 'D', 36: 'E',
      37: ['six', '6'], 38: ['debit'], 39: ['soft'], 40: ['instalment', 'installment'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'What really happens to your recycling',
        html: `
          <p>For many households, sorting the recycling is the most visible thing they do for the environment. Yet waste specialists point out that recycling is not the first step in dealing with rubbish but one of the last. They describe a waste hierarchy in which the best option is to reduce the amount of material used in the first place, the next best is to reuse items as they are, and only after that comes recycling. Recovering energy by burning waste and, finally, sending it to landfill sit at the bottom. Recycling is valuable, but it is a way of handling waste that already exists rather than a way of avoiding it.</p>
          <p>Not all materials recycle equally well. Aluminium is the outstanding success: it can be melted down and reformed again and again without any loss of quality, and making a can from recycled metal requires only a small fraction of the energy needed to produce aluminium from its ore. Glass, too, can be recycled repeatedly, although it is heavy to transport and different colours often have to be kept apart. Paper is more limited. Each time it is pulped, its fibres become shorter and weaker, so it can pass through the process only a certain number of times, and manufacturers must keep adding fresh fibre to maintain the strength of the product.</p>
          <p>Plastics are the most complicated case. The small number printed inside a triangle of arrows on many plastic items is a resin identification code. It tells the reader which type of plastic the item is made from, not whether it can be recycled, yet many people assume that the symbol is a promise that the item belongs in the recycling bin. In practice, the plastic used for drinks bottles, marked 1, and the type used for milk bottles and detergent containers, marked 2, are widely recycled, while films, wrappers and packaging that combines several materials are recycled far less often. Even when plastic is recycled, its quality tends to decline, so it is usually turned into lower-grade products, such as fibres for clothing or carpets, rather than into new food packaging.</p>
          <p>A large part of the problem begins at home. Wishcycling is the habit of putting an item in the recycling bin in the hope that it can be recycled. The intention is good, but the result can be harmful. Plastic bags wrap around the rotating machinery in sorting plants and force it to stop, and food left in containers soaks into paper and card. A few contaminated items can reduce the value of an entire load, and a load that is badly contaminated may be burned or sent to landfill instead. Hence the advice often given by local councils: when in doubt, leave it out.</p>
          <p>Mixed recycling is separated at what is known as a materials recovery facility, using a combination of machines and human workers. Magnets lift out steel cans, while a device that generates eddy currents pushes aluminium cans away from the rest of the stream. Optical sensors identify different plastics by the way they reflect light, and precisely aimed jets of air then blow each item into the correct channel. Black plastic presents a particular difficulty, because the pigment that colours it absorbs the light on which the sensors depend, so many black trays cannot be identified and end up being rejected.</p>
          <p>Finally, recycling only works if someone will buy the sorted material. For many years, wealthy countries shipped large quantities of waste plastic and paper to China, until it banned imports of most of these materials from 2018. Exports were redirected to other countries in Southeast Asia, several of which then introduced restrictions of their own. The episode revealed an awkward truth: official recycling rates generally measure how much material is collected, not how much is actually made into new products.</p>
          <p>None of this means that recycling is pointless. The systems for metals, paper and glass are well established and save large amounts of energy and raw material. But the most effective steps come earlier in the chain, with buying less packaging, choosing refillable containers and repairing things rather than replacing them.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'In the waste hierarchy, recycling is preferred to reuse.', evidence: 'the next best is to reuse items as they are, and only after that comes recycling' },
              { number: 2, text: 'Aluminium becomes weaker each time it is recycled.', evidence: 'it can be melted down and reformed again and again without any loss of quality' },
              { number: 3, text: 'Paper products made from recycled material usually require the addition of new fibre.', evidence: 'manufacturers must keep adding fresh fibre to maintain the strength of the product' },
              { number: 4, text: 'The number inside the triangle of arrows indicates that an item is recyclable.', evidence: 'It tells the reader which type of plastic the item is made from, not whether it can be recycled' },
              { number: 5, text: 'Most recycled plastic is made into new containers for food.', evidence: 'it is usually turned into lower-grade products, such as fibres for clothing or carpets, rather than into new food packaging' },
              { number: 6, text: 'Recycling glass is more profitable for councils than recycling aluminium.' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Inside a materials recovery facility</strong></p>
              <ul>
                <li>steel cans: removed by {{7}}</li>
                <li>aluminium cans: pushed aside by a device that produces eddy {{8}}</li>
                <li>plastics: recognised by optical {{9}} from the way they reflect light</li>
                <li>each plastic item: directed into the right channel by jets of {{10}}</li>
              </ul>`,
            questions: [
              { number: 7, evidence: 'Magnets lift out steel cans' },
              { number: 8, evidence: 'a device that generates eddy currents pushes aluminium cans away from the rest of the stream' },
              { number: 9, evidence: 'Optical sensors identify different plastics by the way they reflect light' },
              { number: 10, evidence: 'precisely aimed jets of air then blow each item into the correct channel' },
            ],
          },
          {
            id: 'r1c', type: 'mcq-multi', instructions: 'Which THREE of the following are mentioned as reasons why material put out for recycling may not be recycled? Choose THREE letters, A–G.',
            options: [
              { value: 'A', label: 'contamination of a load by food or unsuitable items' },
              { value: 'B', label: 'households not being given enough bins' },
              { value: 'C', label: 'a pigment that prevents machines from identifying an item' },
              { value: 'D', label: 'a shortage of workers at sorting plants' },
              { value: 'E', label: 'restrictions on imports in countries that once bought waste' },
              { value: 'F', label: 'aluminium cans being too light to separate' },
              { value: 'G', label: 'the high cost of transporting paper' },
            ],
            questions: [
              { number: 11, evidence: 'a load that is badly contaminated may be burned or sent to landfill instead' },
              { number: 12, evidence: 'many black trays cannot be identified and end up being rejected' },
              { number: 13, evidence: 'several of which then introduced restrictions of their own' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Why traffic jams appear from nowhere',
        html: `
          <p><span class="passage-letter">A</span> Almost every driver knows the experience. Traffic on a busy road slows, then crawls, then stops altogether. A few minutes later it moves off again and gathers speed, yet there is no accident, no roadworks and no junction to explain the delay. Such phantom jams can seem like a mystery, or simply bad luck, but they are neither. Researchers who study traffic flow have shown that they arise from the way human drivers react to one another, and that they follow patterns that can be described mathematically.</p>
          <p><span class="passage-letter">B</span> The key lies in how small disturbances spread when vehicles are close together. Suppose one driver brakes slightly, perhaps to let another car merge or because their attention has wandered. The driver behind reacts a moment later and, to be safe, brakes a little harder. The next driver brakes harder still. Passed along the line in this way, a minor slowdown is amplified until, some distance back, vehicles come to a complete halt. The resulting band of stationary traffic then travels backwards along the road, against the direction in which the cars are moving, even as the vehicles at its front pull away. Specialists call these stop-and-go waves.</p>
          <p><span class="passage-letter">C</span> The clearest demonstration came from an experiment carried out in Japan in 2008. Researchers asked a group of drivers to travel around a circular track at a steady speed. There were no junctions, no lane changes and nothing to obstruct the road. Nevertheless, within a short time a jam formed and began to move backwards around the circle, exactly as the theory predicted. The experiment showed that a bottleneck is not necessary for a jam to occur: if there are enough vehicles on the road, ordinary driver behaviour is sufficient.</p>
          <p><span class="passage-letter">D</span> Density is therefore crucial. When vehicles are well spaced, a driver who brakes has room to slow gently, and a disturbance fades before it can grow. Above a certain density, however, the flow becomes unstable. Engineers also point out that the number of vehicles passing a given point each hour rises as density increases, but only up to a point, after which it falls sharply. A road moves the most traffic not when cars travel at top speed, nor when they crawl, but when they travel at a moderate, steady pace. This is why some motorways use variable speed limits, lowering the limit when traffic builds up in order to smooth the flow. A related technique, known as ramp metering, uses traffic lights on entrance roads to release vehicles one at a time, so that groups of cars do not force their way into a busy carriageway all at once.</p>
          <p><span class="passage-letter">E</span> Individual drivers can help too. Leaving a larger gap to the vehicle in front gives a driver time to absorb a disturbance instead of passing it on, and travelling at a steady, slightly lower speed is more effective than accelerating into every space and then braking. Machines may be able to do this more consistently than people. In a later experiment in the United States, a single automated car driving smoothly among human drivers on a ring track was able to dampen the waves that would otherwise have formed.</p>
          <p><span class="passage-letter">F</span> The instinctive response to congestion is to build more lanes, but the evidence suggests that this rarely provides a lasting cure. New road space tends to attract additional traffic, as people make journeys they would previously have avoided, switch from other routes or change the time at which they travel. Transport researchers call this induced demand, and it explains why congestion often returns within a few years of a road being widened. For this reason, many now argue that managing the way existing roads are used may achieve more than simply making them bigger.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: trafficHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'Such phantom jams can seem like a mystery, or simply bad luck, but they are neither.' },
              { number: 15, text: 'Paragraph B', evidence: 'Passed along the line in this way, a minor slowdown is amplified' },
              { number: 16, text: 'Paragraph C', evidence: 'The experiment showed that a bottleneck is not necessary for a jam to occur' },
              { number: 17, text: 'Paragraph D', evidence: 'Above a certain density, however, the flow becomes unstable.' },
              { number: 18, text: 'Paragraph E', evidence: 'Individual drivers can help too.' },
              { number: 19, text: 'Paragraph F', evidence: 'the evidence suggests that this rarely provides a lasting cure' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 20, text: 'In which direction does a stop-and-go wave travel?', evidence: 'The resulting band of stationary traffic then travels backwards along the road, against the direction in which the cars are moving',
                options: [
                  { value: 'A', label: 'in the same direction as the traffic, but more slowly' },
                  { value: 'B', label: 'in the opposite direction to the traffic' },
                  { value: 'C', label: 'it remains where the first driver braked' },
                  { value: 'D', label: 'in the same direction as the traffic, but faster' },
                ],
              },
              {
                number: 21, text: 'What did the experiment on the circular track demonstrate?', evidence: 'if there are enough vehicles on the road, ordinary driver behaviour is sufficient',
                options: [
                  { value: 'A', label: 'Jams can form from driver behaviour alone when traffic is dense enough.' },
                  { value: 'B', label: 'Drivers find it impossible to keep a steady speed on a curve.' },
                  { value: 'C', label: 'Jams only occur where lanes merge or roads narrow.' },
                  { value: 'D', label: 'Japanese drivers leave smaller gaps than drivers elsewhere.' },
                ],
              },
              {
                number: 22, text: 'According to paragraph D, a road carries the largest number of vehicles per hour when traffic', evidence: 'but when they travel at a moderate, steady pace',
                options: [
                  { value: 'A', label: 'travels at the highest speed allowed.' },
                  { value: 'B', label: 'is as dense as possible.' },
                  { value: 'C', label: 'moves at a moderate and even speed.' },
                  { value: 'D', label: 'is close to coming to a stop.' },
                ],
              },
              {
                number: 23, text: 'What is the writer’s view of widening roads to reduce congestion?', evidence: 'it explains why congestion often returns within a few years of a road being widened',
                options: [
                  { value: 'A', label: 'It is the most effective solution in the long term.' },
                  { value: 'B', label: 'It works only when combined with ramp metering.' },
                  { value: 'C', label: 'It has no effect on traffic at all.' },
                  { value: 'D', label: 'Its benefits are often only temporary.' },
                ],
              },
            ],
          },
          {
            id: 'r2c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 24, text: 'What is the name of the technique that uses traffic lights to let vehicles join a motorway one at a time?', evidence: 'known as ramp metering, uses traffic lights on entrance roads to release vehicles one at a time' },
              { number: 25, text: 'What term describes the tendency of new road space to generate extra traffic?', evidence: 'Transport researchers call this induced demand' },
              { number: 26, text: 'In the experiment in the United States, what reduced the waves on the ring track?', evidence: 'a single automated car driving smoothly among human drivers on a ring track was able to dampen the waves' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Buy now, pay later: convenience at a price?',
        html: `
          <p>At the online checkout of many shops, a new button now sits beside the familiar card payment option. It offers to split the purchase into several smaller payments, usually without interest. Buy now, pay later services have grown rapidly over the past decade and have become particularly popular with younger shoppers buying clothes, shoes and electronics. Their supporters present them as a cheaper and more transparent alternative to the credit card. Their critics argue that they encourage people to spend money they do not have.</p>
          <p>The basic arrangement is simple. The customer pays a first instalment at the time of purchase and the remainder in equal amounts every two weeks or every month; a common model involves four payments spread over six weeks. The provider pays the retailer the full price straight away, minus a fee. In the interest-free model, this fee is paid by the retailer, not the shopper, and it is the main way in which the provider earns money. Retailers are willing to pay because offering the service tends to increase both the number of shoppers who complete a purchase and the amount that each one spends.</p>
          <p>For a shopper who pays every instalment on time, the service can therefore cost nothing at all. Difficulties arise when a payment is missed. Some providers charge late fees, while others do not but may prevent the customer from making further purchases until the account is up to date. There is also a less obvious risk. Instalments are usually collected automatically from a debit card linked to the customer's bank account. If the account does not contain enough money on the day a payment is taken, the customer may be charged by their own bank as well.</p>
          <p>Another concern is the speed with which credit is granted. Many providers carry out only a soft credit check, or none at all, and approve a purchase within seconds. This speed is part of the appeal, but it also means that a customer can take out several plans with different providers, none of which may be aware of the others. For several years, such plans were not consistently reported to the agencies that compile credit records, so other lenders had little way of knowing about them either. Some providers have since begun to share this information, which means that missed payments may now affect a person's ability to borrow in future.</p>
          <p>The psychology of instalments also plays a part. Psychologists use the phrase the pain of paying to describe the discomfort people feel when they hand over money, and this discomfort appears to be greater when a price is seen in full. Dividing a price into four makes each payment look modest, and the reduced discomfort may encourage people to buy items they would otherwise have left in the basket. It is no accident that many retailers display the instalment amount more prominently than the full price.</p>
          <p>Regulators were slow to respond. In a number of countries, short-term credit that charged no interest fell outside the existing rules on consumer credit, which had been written with traditional loans in mind. As the services spread, several governments announced plans to bring them under consumer credit law, which would require providers to check more carefully whether customers could afford the repayments.</p>
          <p>None of this means that buy now, pay later is harmful in itself. For a disciplined user who pays on time, it may well be cheaper than a credit card balance carried from month to month. The difficulty is that the very features that make the service attractive, its speed, its simplicity and the absence of interest, are also what make it easy to overuse. The sensible approach is to treat every plan as a debt, to keep track of the total amount owed across all providers, and to use the service only for purchases that one could afford to pay for outright.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Buy now, pay later services are used only by younger shoppers.', evidence: 'have become particularly popular with younger shoppers' },
              { number: 28, text: 'In the interest-free model, providers earn most of their income from retailers.', evidence: 'this fee is paid by the retailer, not the shopper, and it is the main way in which the provider earns money' },
              { number: 29, text: 'A missed instalment can lead to charges from a source other than the provider.', evidence: 'the customer may be charged by their own bank as well' },
              { number: 30, text: 'All providers charge a fee when a payment is late.', evidence: 'Some providers charge late fees, while others do not' },
              { number: 31, text: 'Most users of these services miss at least one payment.' },
            ],
          },
          {
            id: 'r3b', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–H, from the list below.',
            options: bnplEndings,
            questions: [
              { number: 32, text: 'Retailers agree to pay a fee because offering the service', evidence: 'offering the service tends to increase both the number of shoppers who complete a purchase and the amount that each one spends' },
              { number: 33, text: 'Because approval is fast and checks are limited,', evidence: 'a customer can take out several plans with different providers, none of which may be aware of the others' },
              { number: 34, text: 'Dividing a price into several payments', evidence: 'Dividing a price into four makes each payment look modest, and the reduced discomfort may encourage people to buy items' },
              { number: 35, text: 'In some countries, interest-free short-term credit originally', evidence: 'short-term credit that charged no interest fell outside the existing rules on consumer credit' },
              { number: 36, text: 'The features that make the service attractive', evidence: 'are also what make it easy to overuse' },
            ],
          },
          {
            id: 'r3c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 37, text: 'A typical plan consists of four payments made over ___ weeks.', evidence: 'a common model involves four payments spread over six weeks' },
              { number: 38, text: 'Payments are normally taken automatically from a ___ card.', evidence: 'Instalments are usually collected automatically from a debit card' },
              { number: 39, text: 'Many providers carry out no more than a ___ credit check.', evidence: 'Many providers carry out only a soft credit check, or none at all' },
              { number: 40, text: 'Retailers often give more prominence to the ___ amount than to the full price.', evidence: 'many retailers display the instalment amount more prominently than the full price' },
            ],
          },
        ],
      },
    ],
  },
}
