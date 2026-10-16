import type { IeltsTest, Option } from '../../types'

// Original reading practice test 21 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const foodHeadings: Option[] = [
  { value: 'i', label: 'Sorting food by what has been done to it' },
  { value: 'ii', label: 'The rising price of fresh produce' },
  { value: 'iii', label: 'An experiment in which nobody was told to eat less' },
  { value: 'iv', label: 'A label that groups very different products together' },
  { value: 'v', label: 'Why links found in large surveys are hard to interpret' },
  { value: 'vi', label: 'Government plans to tax unhealthy snacks' },
  { value: 'vii', label: 'Processing that brings real benefits' },
  { value: 'viii', label: 'How advertising targets young children' },
  { value: 'ix', label: 'A simple check for the shopper' },
]

const foodEndings: Option[] = [
  { value: 'A', label: 'were matched for key nutrients when they were offered.' },
  { value: 'B', label: 'ate their meals more quickly.' },
  { value: 'C', label: 'can make a food last longer and reduce waste.' },
  { value: 'D', label: 'are usually free of added sugar and salt.' },
  { value: 'E', label: 'cannot on their own show that one thing causes another.' },
  { value: 'F', label: 'is often a sign that a product is ultra-processed.' },
  { value: 'G', label: 'were told to restrict the number of calories they consumed.' },
]

export const practiceReading21: IeltsTest = {
  id: 'practice-reading-21',
  title: 'Practice Test 21 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'NOT GIVEN', 4: 'FALSE', 5: 'TRUE', 6: 'NOT GIVEN',
      7: ['heat'], 8: ['eight years', '8 years'], 9: ['carbon debt'], 10: ['tyres', 'tires'],
      11: 'B', 12: 'D', 13: 'F',
      14: 'i', 15: 'iii', 16: 'iv', 17: 'v', 18: 'vii', 19: 'ix',
      20: 'A', 21: 'B', 22: 'E', 23: 'F',
      24: 'C', 25: 'A', 26: 'D',
      27: 'YES', 28: 'NO', 29: 'NOT GIVEN', 30: 'YES', 31: 'NO',
      32: ['evaporates'], 33: ['compressor'], 34: ['radiators'], 35: ['pressure'], 36: ['cycle'],
      37: 'B', 38: 'D', 39: 'A', 40: 'C',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Electric cars: what the arguments leave out',
        html: `
          <p>Few consumer products attract arguments as heated as the electric car. Enthusiasts present it as a simple solution to traffic pollution, while sceptics dismiss it as an expensive fashion that merely moves emissions from the exhaust pipe to the power station. Both positions contain some truth, and both leave out important details.</p>
          <p>The basic case for electric motors rests on efficiency. A petrol or diesel engine turns only a modest share of the energy in its fuel into movement; most of the rest is lost as heat. An electric motor converts a much larger share of the energy stored in its battery into motion. Electric cars also recover some energy that conventional cars waste. When the driver slows down, the motor can run in reverse as a generator, a process called regenerative braking, which turns the car's movement back into electricity and returns it to the battery. In a conventional car that energy simply warms the brakes.</p>
          <p>The sceptics are right that an electric car is not free of emissions. Manufacturing the battery requires mining, refining and a great deal of energy, so an electric car usually begins its life responsible for more emissions than a comparable petrol car. Engineers sometimes describe this as a carbon debt, which is repaid gradually as the car is driven, because each kilometre produces fewer emissions than it would in a petrol car. How quickly the debt is cleared depends heavily on how the electricity is generated. Where power comes mainly from wind, sunlight, water or nuclear plants, it is repaid relatively fast. Where it comes mainly from coal, the advantage is much smaller and takes far longer to appear.</p>
          <p>Many potential buyers worry about range, the distance a car can travel on a single charge. This anxiety is understandable, but it often reflects occasional long journeys rather than everyday use, and most daily trips are much shorter than the range of a modern electric car. A more practical question is where the car will be charged. Drivers who can plug in at home overnight usually pay the least, whereas those who rely on public rapid chargers generally pay considerably more per unit of energy and may spend time waiting. For people who live in flats without off-street parking, this difference can decide whether an electric car makes financial sense.</p>
          <p>Cold weather affects electric cars more noticeably than petrol ones. The chemical reactions inside a battery slow down at low temperatures, and heating the cabin draws energy from the same battery that drives the wheels, whereas a petrol car heats its interior with waste heat from the engine. Some models now include a heat pump, which warms the cabin using far less energy than a simple electric heater, reducing the loss of range in winter.</p>
          <p>The battery itself is the most expensive part of the car, and fears that it will need to be replaced after a few years are common. In practice, batteries lose capacity gradually rather than failing suddenly, and the decline is faster when they are often charged to the maximum, frequently rapid-charged or kept in great heat. Manufacturers commonly guarantee the battery for eight years. When a battery is no longer good enough for driving, it may still be useful for storing electricity in buildings, and the metals it contains can be recovered by recycling.</p>
          <p>Electric cars do not solve every problem. Because batteries are heavy, these cars tend to weigh more than equivalent petrol models, and heavier vehicles wear their tyres faster, releasing tiny particles into the air and onto roads. Brake dust, on the other hand, is reduced, since regenerative braking means the brakes are used less. And an electric car occupies just as much road space as any other, so it does nothing to relieve congestion. Supporters and critics alike would do well to treat it as an improvement rather than a cure.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'In a conventional car, the energy lost when braking is turned into heat.', evidence: 'In a conventional car that energy simply warms the brakes.' },
              { number: 2, text: 'An electric car is responsible for fewer emissions than a petrol car from the moment it is built.', evidence: 'an electric car usually begins its life responsible for more emissions than a comparable petrol car' },
              { number: 3, text: 'Most electric car owners eventually make a long journey that exceeds the range of their car.' },
              { number: 4, text: 'Public rapid chargers are usually the cheapest way to charge an electric car.', evidence: 'Drivers who can plug in at home overnight usually pay the least, whereas those who rely on public rapid chargers generally pay considerably more per unit of energy' },
              { number: 5, text: 'A heat pump uses less energy than a simple electric heater to warm a car.', evidence: 'which warms the cabin using far less energy than a simple electric heater' },
              { number: 6, text: 'Recycled battery metals are cheaper than newly mined ones.' },
            ],
          },
          {
            id: 'r1b', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 7, text: 'In what form is most of the energy in petrol lost by a conventional engine?', evidence: 'most of the rest is lost as heat' },
              { number: 8, text: 'For how long do manufacturers commonly guarantee a battery?', evidence: 'Manufacturers commonly guarantee the battery for eight years.' },
              { number: 9, text: 'What term do engineers use for the extra emissions produced when an electric car is made?', evidence: 'Engineers sometimes describe this as a carbon debt' },
              { number: 10, text: 'Which parts of an electric car wear faster because of its extra weight?', evidence: 'heavier vehicles wear their tyres faster' },
            ],
          },
          {
            id: 'r1c', type: 'mcq-multi', instructions: 'Which THREE of the following are mentioned in the passage as making a battery lose capacity faster? Choose THREE letters, A–G.',
            options: [
              { value: 'A', label: 'driving mainly in cities' },
              { value: 'B', label: 'regularly charging it to the maximum' },
              { value: 'C', label: 'using regenerative braking' },
              { value: 'D', label: 'charging it rapidly on a frequent basis' },
              { value: 'E', label: 'leaving it unused for long periods' },
              { value: 'F', label: 'storing it in very hot conditions' },
              { value: 'G', label: 'driving in cold weather' },
            ],
            questions: [
              { number: 11, evidence: 'the decline is faster when they are often charged to the maximum, frequently rapid-charged or kept in great heat' },
              { number: 12, evidence: 'the decline is faster when they are often charged to the maximum, frequently rapid-charged or kept in great heat' },
              { number: 13, evidence: 'the decline is faster when they are often charged to the maximum, frequently rapid-charged or kept in great heat' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'What counts as ultra-processed food?',
        html: `
          <p><span class="passage-letter">A</span> Almost everything we eat has been processed in some way, whether washed, cut, cooked, frozen or packed. Researchers at the University of São Paulo in Brazil, led by Carlos Monteiro, argued that what matters for health is not whether food is processed but how, and for what purpose. Their NOVA system divides foods into four groups. The first contains unprocessed or minimally processed foods such as fruit, vegetables, eggs, milk and plain meat. The second contains ingredients used in cooking, such as oil, butter, sugar and salt. The third covers processed foods made by combining the first two, such as cheese, canned vegetables and simple bread. The fourth, ultra-processed foods, consists of industrial products made largely from substances extracted from foods or created in laboratories, often including ingredients rarely found in home kitchens, such as emulsifiers, flavourings and modified starches.</p>
          <p><span class="passage-letter">B</span> The most influential evidence that this category matters came from a small but carefully controlled study at the National Institutes of Health in the United States, published in 2019. Volunteers lived in a research clinic and spent two weeks on a diet based on ultra-processed foods and two weeks on a diet based on minimally processed foods. The meals offered were matched for calories, sugar, fat, salt and fibre, and participants could eat as much or as little as they wished. Nobody instructed them to limit what they ate. Even so, on the ultra-processed diet they consumed noticeably more energy each day and gained weight, while on the other diet they lost weight. They also ate faster when the food was ultra-processed, which may have given their bodies less time to signal that they were full.</p>
          <p><span class="passage-letter">C</span> Critics accept that the study was well designed, but they question the category itself. The fourth NOVA group places sweets and fizzy drinks alongside wholemeal sliced bread, unsweetened plant milks and some breakfast cereals that contain a good deal of fibre. Treating all of these as equally harmful, they argue, could lead people to avoid products that are nutritionally reasonable and that many families rely on because they are cheap and convenient. In their view, the amount of sugar, salt, fat and fibre in a food is a more useful guide than the number of steps used to make it.</p>
          <p><span class="passage-letter">D</span> Much of the remaining evidence comes from observational studies, which follow large numbers of people and compare their diets with their health. Many such studies have found that people who eat more ultra-processed food tend to have poorer health. The difficulty is that people who eat a great deal of these products may also differ in other ways, for example in income, working hours, physical activity or smoking. Researchers try to adjust for such factors, but they can never be certain that they have accounted for all of them, so these findings show an association rather than proof.</p>
          <p><span class="passage-letter">E</span> It would be a mistake to treat processing as harmful in itself. Pasteurisation, which heats milk to kill dangerous bacteria, has prevented a great deal of illness. Freezing preserves vitamins in vegetables picked at their best, and canning allows food to be stored safely for long periods. Such methods make food safer, cheaper and available all year round, and they help to reduce the amount that is thrown away before it can be eaten.</p>
          <p><span class="passage-letter">F</span> For shoppers who want to act on this debate without waiting for it to be settled, one practical step is to read the list of ingredients rather than only the nutrition panel. A long list that includes several substances one would not normally keep at home is a reasonable indication that a product belongs in the ultra-processed group. Cooking more meals from basic ingredients is another, although it requires time and equipment that not every household has.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: foodHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'Their NOVA system divides foods into four groups.' },
              { number: 15, text: 'Paragraph B', evidence: 'Nobody instructed them to limit what they ate.' },
              { number: 16, text: 'Paragraph C', evidence: 'The fourth NOVA group places sweets and fizzy drinks alongside wholemeal sliced bread' },
              { number: 17, text: 'Paragraph D', evidence: 'so these findings show an association rather than proof' },
              { number: 18, text: 'Paragraph E', evidence: 'It would be a mistake to treat processing as harmful in itself.' },
              { number: 19, text: 'Paragraph F', evidence: 'one practical step is to read the list of ingredients rather than only the nutrition panel' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: foodEndings,
            questions: [
              { number: 20, text: 'In the 2019 study, the two diets', evidence: 'The meals offered were matched for calories, sugar, fat, salt and fibre' },
              { number: 21, text: 'On the ultra-processed diet, the volunteers', evidence: 'They also ate faster when the food was ultra-processed' },
              { number: 22, text: 'Observational studies', evidence: 'so these findings show an association rather than proof' },
              { number: 23, text: 'A long list of unfamiliar ingredients', evidence: 'is a reasonable indication that a product belongs in the ultra-processed group' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 24, text: 'According to the passage, the NOVA system classifies foods mainly by',
                evidence: 'what matters for health is not whether food is processed but how, and for what purpose',
                options: [
                  { value: 'A', label: 'the amount of sugar, salt and fat they contain.' },
                  { value: 'B', label: 'whether they have been processed at all.' },
                  { value: 'C', label: 'the nature and aim of the processing involved.' },
                  { value: 'D', label: 'the country in which they were produced.' },
                ],
              },
              {
                number: 25, text: 'What is the critics’ main objection to the NOVA approach?',
                evidence: 'In their view, the amount of sugar, salt, fat and fibre in a food is a more useful guide than the number of steps used to make it.',
                options: [
                  { value: 'A', label: 'Nutrient content says more about a food than how it was made.' },
                  { value: 'B', label: 'The 2019 study was too small to be trusted.' },
                  { value: 'C', label: 'Wholemeal bread should be placed in the first group.' },
                  { value: 'D', label: 'Cheap and convenient foods are always unhealthy.' },
                ],
              },
              {
                number: 26, text: 'Why are researchers unable to be certain about the results of observational studies?',
                evidence: 'Researchers try to adjust for such factors, but they can never be certain that they have accounted for all of them',
                options: [
                  { value: 'A', label: 'The people studied often give false information about their diets.' },
                  { value: 'B', label: 'The studies do not include enough participants.' },
                  { value: 'C', label: 'Ultra-processed foods are difficult to identify.' },
                  { value: 'D', label: 'Other differences between people may not be fully allowed for.' },
                ],
              },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Heat pumps: heating by moving heat',
        html: `
          <p>For most of history, keeping warm has meant burning something, whether wood, coal, oil or gas. A heat pump works on a different principle. Instead of generating heat by combustion, it uses electricity to collect heat that already exists in the outside air, the ground or a body of water, and to move it indoors. This can seem unlikely on a freezing day, but even cold air contains a considerable amount of heat energy, and a heat pump is designed to extract it.</p>
          <p>The principle is familiar from the kitchen, because a refrigerator is itself a heat pump. It removes heat from the food inside and releases it through the coils at the back, which is why they feel warm. A heat pump used for heating does the same job in the opposite direction, taking heat from outdoors and releasing it inside the home. The key ingredient is a fluid called a refrigerant, which boils at a very low temperature. In the outdoor unit, the refrigerant passes through a heat exchanger, where it absorbs heat from the air and evaporates, even when the air is well below freezing. The vapour then enters a compressor, which raises its pressure and, with it, its temperature. The hot vapour flows to a second heat exchanger, where it gives up its heat to the water in the radiators or to the air inside the building, and condenses back into a liquid. Finally, it passes through an expansion valve, which lowers its pressure and temperature so that the cycle can begin again.</p>
          <p>The attraction of this arrangement is its efficiency. The electricity is used mainly to drive the compressor and fans rather than to produce heat directly, so a heat pump can deliver several units of heat for every unit of electricity it consumes. The ratio between the two is called the coefficient of performance. An ordinary electric heater, by comparison, can never deliver more heat than the electricity it uses. Efficiency does fall as the outside temperature drops, because the pump must work harder when the gap between outdoor and indoor temperatures is wider. Nevertheless, heat pumps are widely used in some of Europe's coldest countries, including Norway and Sweden, which suggests that a cold climate is not in itself an obstacle.</p>
          <p>Heat pumps perform best in buildings that hold heat well. They usually supply water to radiators at a lower temperature than a gas boiler does, and they work most efficiently when they run steadily for long periods rather than in short bursts. A poorly insulated house may therefore need improvements, larger radiators or underfloor heating before a heat pump can keep it comfortable. Ground source systems, which collect heat through pipes buried in a garden, benefit from the fact that the temperature underground stays fairly stable through the year. They are generally more efficient than air source models, but they cost considerably more to install and need space for digging.</p>
          <p>Cost is the main obstacle for many households. Buying and installing a heat pump is usually more expensive than replacing a gas boiler, although several governments offer grants to narrow the gap. Whether running costs are lower depends largely on the relative prices of electricity and gas, which vary greatly between countries. The environmental benefit also depends on the electricity supply, and it grows as more power comes from low-carbon sources. Other concerns include the noise of the outdoor unit and the refrigerants themselves, some of which are powerful greenhouse gases if they leak. Newer units increasingly use refrigerants with a much smaller warming effect.</p>
          <p>Heat pumps are not a universal answer, and in some homes they may be impractical. But the idea behind them deserves to be better understood. They do not make heat out of nothing; they simply move it from where it is not wanted to where it is, and many models can reverse the process to cool a building in summer.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'A heat pump can collect heat from outside air that is below freezing.', evidence: 'where it absorbs heat from the air and evaporates, even when the air is well below freezing' },
              { number: 28, text: 'An ordinary electric heater can be as efficient as a heat pump if it is well designed.', evidence: 'An ordinary electric heater, by comparison, can never deliver more heat than the electricity it uses.' },
              { number: 29, text: 'Heat pumps are cheaper to run than gas boilers in Norway and Sweden.' },
              { number: 30, text: 'The use of heat pumps in cold countries shows that low temperatures do not rule them out.', evidence: 'which suggests that a cold climate is not in itself an obstacle' },
              { number: 31, text: 'Ground source heat pumps are cheaper to install than air source models.', evidence: 'They are generally more efficient than air source models, but they cost considerably more to install' },
            ],
          },
          {
            id: 'r3b', type: 'inline-gap', instructions: 'Complete the flow-chart below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>How a heat pump heats a home</strong></p>
              <p>In the outdoor heat exchanger, the refrigerant takes in heat from the air and {{32}}.</p>
              <p>&darr;</p>
              <p>A {{33}} increases the pressure and temperature of the vapour.</p>
              <p>&darr;</p>
              <p>In a second heat exchanger, the vapour releases heat to the water in the {{34}} or to the indoor air, and becomes liquid again.</p>
              <p>&darr;</p>
              <p>An expansion valve reduces the {{35}} and temperature of the refrigerant.</p>
              <p>&darr;</p>
              <p>The {{36}} starts again.</p>`,
            questions: [
              { number: 32, evidence: 'where it absorbs heat from the air and evaporates' },
              { number: 33, evidence: 'The vapour then enters a compressor, which raises its pressure and, with it, its temperature.' },
              { number: 34, evidence: 'where it gives up its heat to the water in the radiators or to the air inside the building' },
              { number: 35, evidence: 'which lowers its pressure and temperature so that the cycle can begin again' },
              { number: 36, evidence: 'so that the cycle can begin again' },
            ],
          },
          {
            id: 'r3c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 37, text: 'The writer mentions the refrigerator in order to',
                evidence: 'A heat pump used for heating does the same job in the opposite direction, taking heat from outdoors and releasing it inside the home.',
                options: [
                  { value: 'A', label: 'show that heat pumps were invented for cooling food.' },
                  { value: 'B', label: 'explain a heat pump by comparison with a familiar device.' },
                  { value: 'C', label: 'warn that heat pumps use the same harmful gases.' },
                  { value: 'D', label: 'suggest that a refrigerator can be used to heat a room.' },
                ],
              },
              {
                number: 38, text: 'Why can a heat pump deliver more heat than the electricity it consumes?',
                evidence: 'The electricity is used mainly to drive the compressor and fans rather than to produce heat directly',
                options: [
                  { value: 'A', label: 'It burns a small amount of gas as well as using electricity.' },
                  { value: 'B', label: 'It stores heat during the day and releases it at night.' },
                  { value: 'C', label: 'Its coefficient of performance rises as the weather gets colder.' },
                  { value: 'D', label: 'Its electricity is used to move heat rather than to create it.' },
                ],
              },
              {
                number: 39, text: 'According to the passage, a poorly insulated house may need changes before a heat pump is installed because heat pumps',
                evidence: 'They usually supply water to radiators at a lower temperature than a gas boiler does, and they work most efficiently when they run steadily for long periods rather than in short bursts.',
                options: [
                  { value: 'A', label: 'supply water at a lower temperature and work best when running steadily.' },
                  { value: 'B', label: 'produce too much heat for small radiators.' },
                  { value: 'C', label: 'cannot operate at all in cold weather.' },
                  { value: 'D', label: 'need to be connected to a gas supply.' },
                ],
              },
              {
                number: 40, text: 'What does the writer say about the environmental benefit of heat pumps?',
                evidence: 'The environmental benefit also depends on the electricity supply, and it grows as more power comes from low-carbon sources.',
                options: [
                  { value: 'A', label: 'It is the same in every country.' },
                  { value: 'B', label: 'It is cancelled out by the noise of the outdoor unit.' },
                  { value: 'C', label: 'It increases as electricity generation becomes cleaner.' },
                  { value: 'D', label: 'It is greater for older units than for newer ones.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}
