import type { IeltsTest, Option } from '../../types'

// Original reading practice test 33 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const saltHeadings: Option[] = [
  { value: 'i', label: 'The history of taxes on salt' },
  { value: 'ii', label: 'Salt that consumers do not see' },
  { value: 'iii', label: 'A valuable substance that is now too plentiful' },
  { value: 'iv', label: 'Why athletes may need extra salt' },
  { value: 'v', label: 'The gap between advice and actual intake' },
  { value: 'vi', label: 'Changing food without anyone noticing' },
  { value: 'vii', label: 'A silent effect on the blood' },
  { value: 'viii', label: 'Using salt to preserve fish and meat' },
  { value: 'ix', label: 'Special salts, substitutes and simple changes' },
]

const moneyOptions: Option[] = [
  { value: 'A', label: 'exchange counters at airports and stations' },
  { value: 'B', label: 'cards with no foreign transaction fees' },
  { value: 'C', label: 'dynamic currency conversion' },
  { value: 'D', label: 'prepaid travel cards' },
  { value: 'E', label: 'fixed fees for cash withdrawals' },
]

export const practiceReading33: IeltsTest = {
  id: 'practice-reading-33',
  title: 'Practice Test 33 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'iii', 2: 'vii', 3: 'v', 4: 'ii', 5: 'vi', 6: 'ix',
      7: 'FALSE', 8: 'FALSE', 9: 'TRUE', 10: 'NOT GIVEN',
      11: ['2.5', 'two and a half'], 12: ['crystals'], 13: ['kidney'],
      14: 'NO', 15: 'YES', 16: 'NOT GIVEN', 17: 'NO', 18: 'YES',
      19: 'D', 20: 'A', 21: 'C', 22: 'B', 23: 'E',
      24: 'C', 25: 'B', 26: 'D',
      27: ['smooth'], 28: ['brake'], 29: ['1.6'], 30: ['twice'], 31: ['fuel'],
      32: 'A', 33: 'C', 34: 'F',
      35: ['fine cracks', 'cracks'], 36: ['the week', 'week'], 37: ['gauge', 'a gauge'],
      38: 'YES', 39: 'NO', 40: 'NOT GIVEN',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Salt: a necessary nutrient, taken to excess',
        html: `
          <p><span class="passage-letter">A</span> Salt has been prized for thousands of years. Long before refrigeration it was used to preserve meat and fish through the winter, it was carried across deserts by traders, and governments from ancient times onwards found it a convenient thing to tax. In many cultures it also carried symbolic value as a sign of hospitality. Today it is cheap and available everywhere, and the concern of health authorities is no longer that people might have too little of it, but that most of them have far too much.</p>
          <p><span class="passage-letter">B</span> Salt is sodium chloride, and it is the sodium that matters to health. The body needs sodium to transmit nerve signals, to make muscles contract and to control the balance of fluids, and the kidneys normally regulate its level with great precision, excreting any surplus. Excess sodium, however, causes the body to hold on to extra water, which increases the volume of blood and the pressure it exerts on the walls of the blood vessels. In many people, a high intake of salt therefore raises blood pressure. High blood pressure is one of the leading risk factors for strokes and heart disease, and because it usually causes no symptoms, many people who have it are unaware of the fact.</p>
          <p><span class="passage-letter">C</span> The World Health Organization recommends that adults consume less than five grams of salt a day, roughly a level teaspoon. Average intakes in many countries are about twice that amount. Part of the difficulty is that labels do not always make the quantity clear. Some give the amount of salt, but others give the amount of sodium, which is a smaller figure because sodium makes up only part of the weight of salt. To convert the sodium figure into salt, it must be multiplied by 2.5, a calculation that few shoppers perform.</p>
          <p><span class="passage-letter">D</span> The more important difficulty is that most of the salt people eat does not come from the salt shaker. In many diets, the great majority is already present in food when it is bought: in bread and breakfast cereals, cheese, processed meats, sauces, ready meals and food from restaurants and takeaways. Bread is a good example. It does not taste particularly salty, but because it is eaten in large quantities, it can be one of the largest single sources of salt in the diet. For this reason, people who simply stop adding salt at the table may make far less difference to their intake than they imagine.</p>
          <p><span class="passage-letter">E</span> Since so much salt is hidden in processed food, the most effective changes have come from manufacturers. In the early 2000s the United Kingdom began working with the food industry to set targets for gradually reducing the salt content of everyday products. The reductions were made in small steps, each too small for most consumers to notice, and over the following years the average intake of salt in the population fell. The approach works partly because taste adapts. People who switch to a lower-salt diet usually find, after several weeks, that food they previously enjoyed now tastes unpleasantly salty.</p>
          <p><span class="passage-letter">F</span> Some popular alternatives are less useful than they appear. Sea salt, rock salt and pink salt are sometimes promoted as healthier, but they consist almost entirely of sodium chloride, just as table salt does. Flakes have larger crystals, so a pinch may contain slightly less salt by volume, but weight for weight the sodium content is essentially the same. Substitutes in which part of the sodium is replaced by potassium can genuinely reduce sodium intake, but they are not suitable for people with kidney disease or those taking certain medicines. For most people, the practical steps are simpler: comparing labels when shopping, cooking from fresh ingredients more often, flavouring food with herbs, spices or lemon, and tasting before reaching for the salt.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: saltHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'the concern of health authorities is no longer that people might have too little of it, but that most of them have far too much' },
              { number: 2, text: 'Paragraph B', evidence: 'because it usually causes no symptoms, many people who have it are unaware of the fact' },
              { number: 3, text: 'Paragraph C', evidence: 'Average intakes in many countries are about twice that amount.' },
              { number: 4, text: 'Paragraph D', evidence: 'most of the salt people eat does not come from the salt shaker' },
              { number: 5, text: 'Paragraph E', evidence: 'The reductions were made in small steps, each too small for most consumers to notice' },
              { number: 6, text: 'Paragraph F', evidence: 'Some popular alternatives are less useful than they appear.' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 7, text: 'High blood pressure normally causes symptoms that people notice.', evidence: 'because it usually causes no symptoms' },
              { number: 8, text: 'Most adults in many countries eat less salt than the World Health Organization recommends.', evidence: 'Average intakes in many countries are about twice that amount.' },
              { number: 9, text: 'Bread can be a major source of salt even though it does not taste very salty.', evidence: 'It does not taste particularly salty, but because it is eaten in large quantities, it can be one of the largest single sources of salt in the diet.' },
              { number: 10, text: 'The UK programme was started as a result of pressure from doctors.' },
            ],
          },
          {
            id: 'r1c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'To work out the amount of salt from a sodium figure, multiply it by ________.', evidence: 'it must be multiplied by 2.5' },
              { number: 12, text: 'A pinch of salt flakes may hold slightly less salt because the ________ are larger.', evidence: 'Flakes have larger crystals' },
              { number: 13, text: 'Potassium-based substitutes are unsuitable for people with ________ disease.', evidence: 'they are not suitable for people with kidney disease' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The real cost of money abroad',
        html: `
          <p>For many travellers, changing money is an afterthought, something done hurriedly at the airport or at the first cash machine after arrival. Yet the way in which money is exchanged can make a noticeable difference to the cost of a trip, and the most expensive options are often the most convenient. Understanding why requires a little knowledge of how exchange rates are set and of where the charges are hidden.</p>
          <p>The rate quoted on news websites is usually the mid-market rate, the point halfway between the prices at which banks buy and sell a currency from one another on the wholesale market. Ordinary customers almost never receive it. Instead, a provider sells currency at a less favourable rate and keeps the difference, known as the spread. Because this margin is built into the rate itself, it is easy to overlook. A booth advertising commission-free exchange may simply have a wider spread than one that charges a fee, so the only reliable comparison is the total amount of foreign currency received for a given sum.</p>
          <p>Exchange counters at airports and stations generally offer some of the least favourable rates, since travellers there have few alternatives and little time to look for them. Ordering currency in advance from a bank or specialist provider, or comparing rates online before setting off, usually gives a better deal. Carrying large amounts of cash, however, has its own risks, and many travellers now rely mainly on cards.</p>
          <p>Cards bring different charges. Many banks add a foreign transaction fee, a percentage of each purchase made in another currency, and some also charge a fixed fee for every cash withdrawal abroad. The local operator of a cash machine may add a further charge, which should be displayed on the screen before the transaction is completed. Because fixed fees apply to every withdrawal regardless of its size, taking out a few larger sums is usually cheaper than making many small withdrawals. A number of banks and newer financial companies offer cards that charge no foreign transaction fees at all, and for frequent travellers these can save a considerable amount.</p>
          <p>The most avoidable cost is a practice called dynamic currency conversion. When paying by card abroad, a customer may be asked whether to pay in the local currency or in his or her home currency. The second option appears helpful, because it shows the price in familiar terms, but the conversion is then carried out by the shop's payment provider rather than by the customer's own bank, usually at a markedly worse rate. The same question often appears at cash machines, sometimes worded to suggest that accepting the conversion is the safer choice. In almost all cases, choosing to pay in the local currency is cheaper.</p>
          <p>Prepaid travel cards offer another approach. They are loaded with money before departure, sometimes allowing the traveller to fix an exchange rate in advance, and because they are not linked directly to a bank account, a stolen card exposes only the amount loaded onto it. Against this, some charge fees for loading money, for inactivity or for withdrawing unused funds, and the rate offered when the card is loaded may not be competitive.</p>
          <p>None of these charges is large on its own, which is why they are so easily ignored. Over a fortnight's holiday, however, a poor exchange rate at the airport, a fee on every card payment and a few conversions accepted at the till can add up to a sum that would have paid for a good meal. A few minutes spent checking the terms of a card before travelling, together with the habit of always choosing the local currency, will eliminate most of them.</p>`,
        groups: [
          {
            id: 'r2a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 14, text: 'Travellers usually receive the mid-market rate when they change money.', evidence: 'Ordinary customers almost never receive it.' },
              { number: 15, text: 'A commission-free exchange service is not necessarily the cheapest option.', evidence: 'A booth advertising commission-free exchange may simply have a wider spread than one that charges a fee' },
              { number: 16, text: 'Carrying cash abroad has become more dangerous in recent years.' },
              { number: 17, text: 'Paying in one’s home currency is generally in the customer’s interest.', evidence: 'In almost all cases, choosing to pay in the local currency is cheaper.' },
              { number: 18, text: 'Charges that are small on their own can add up to a significant sum during a holiday.', evidence: 'can add up to a sum that would have paid for a good meal' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Look at the following statements and the list of options below. Match each statement with the correct option, A–E.',
            options: moneyOptions,
            questions: [
              { number: 19, text: 'limit the amount a traveller can lose if they are stolen', evidence: 'a stolen card exposes only the amount loaded onto it' },
              { number: 20, text: 'tend to offer poor rates because customers have little choice', evidence: 'since travellers there have few alternatives and little time to look for them' },
              { number: 21, text: 'is carried out by a shop’s payment provider', evidence: "the conversion is then carried out by the shop's payment provider rather than by the customer's own bank" },
              { number: 22, text: 'may be particularly worthwhile for people who travel often', evidence: 'for frequent travellers these can save a considerable amount' },
              { number: 23, text: 'make many small withdrawals more expensive than a few large ones', evidence: 'Because fixed fees apply to every withdrawal regardless of its size, taking out a few larger sums is usually cheaper than making many small withdrawals.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 24, text: 'Why is the spread easy to overlook?', evidence: 'Because this margin is built into the rate itself, it is easy to overlook.', options: [{ value: 'A', label: 'It is only charged at airports.' }, { value: 'B', label: 'It is shown in very small print.' }, { value: 'C', label: 'It is included in the exchange rate.' }, { value: 'D', label: 'It is charged after the traveller returns home.' }] },
              { number: 25, text: 'What does the writer say about the question asked at some cash machines?', evidence: 'sometimes worded to suggest that accepting the conversion is the safer choice', options: [{ value: 'A', label: 'It is usually asked only in the local language.' }, { value: 'B', label: 'It may be phrased to make the more expensive option seem safer.' }, { value: 'C', label: 'It is required by law in most countries.' }, { value: 'D', label: 'It allows customers to avoid all fees.' }] },
              { number: 26, text: 'Which of the following is mentioned as a drawback of prepaid travel cards?', evidence: 'some charge fees for loading money, for inactivity or for withdrawing unused funds', options: [{ value: 'A', label: 'They cannot be used at cash machines.' }, { value: 'B', label: 'They are linked directly to a bank account.' }, { value: 'C', label: 'They must be ordered several weeks in advance.' }, { value: 'D', label: 'Some charge a fee if they are not used.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Where the car meets the road',
        html: `
          <p>For all the sophistication of modern cars, everything they do depends in the end on four patches of rubber, each roughly the size of an adult's hand, where the tyres touch the road. Through these small areas pass all the forces involved in accelerating, braking and steering. It is therefore surprising how little attention many drivers give to their tyres, often checking them only when a warning light appears or a mechanic points out a problem.</p>
          <p>On a dry road, a smooth tyre would actually grip well, which is why racing cars use completely smooth tyres in dry conditions. The purpose of the grooved pattern on an ordinary tyre, the tread, is to deal with water. As the tyre rolls, the grooves channel water out from beneath the contact patch so that the rubber can stay in touch with the road surface. If the water cannot escape quickly enough, as can happen at speed on standing water, a thin film builds up under the tyre and lifts it off the road. This is called aquaplaning, and while it lasts the driver may have little or no ability to steer or brake.</p>
          <p>As tyres wear, the grooves become shallower and can remove less water. In the United Kingdom and across the European Union, the legal minimum depth of tread for cars is 1.6 millimetres across the central three-quarters of the tyre. This is a minimum, not a recommendation. Tests have consistently shown that stopping distances on wet roads increase as tread approaches the limit, and many safety organisations advise replacing tyres well before they reach it. Even with good tyres, stopping distances in the wet are around twice those on a dry road.</p>
          <p>Pressure matters as much as tread. A tyre that is under-inflated flexes more as it rolls, which increases rolling resistance and therefore fuel consumption, generates extra heat and causes the outer edges to wear more quickly. In extreme cases, the heat can lead to sudden failure. An over-inflated tyre, by contrast, has a smaller contact patch and wears faster in the centre, reducing grip. The correct pressure is given in the vehicle's handbook and often on a label inside the door frame or fuel flap. It is not the figure moulded into the side of the tyre, which is the maximum the tyre can safely hold. Pressure should be checked when the tyres are cold, because it rises as they warm up during driving.</p>
          <p>Tyres also age. Rubber gradually hardens and develops fine cracks over time, even when a tyre is rarely used, so a spare or a tyre on a little-used vehicle may be unsafe despite having plenty of tread. The date of manufacture is shown on the side of the tyre as a four-digit code, in which the first two digits give the week and the last two the year.</p>
          <p>In regions with cold winters, the type of tyre also makes a difference. Winter tyres are made from a softer rubber compound that remains flexible at low temperatures, together with a tread pattern designed to grip snow and slush. Below about seven degrees Celsius they generally provide better grip than ordinary tyres, which become harder in the cold. Some countries require them by law during the winter months, while in others they are a matter of choice.</p>
          <p>Looking after tyres takes little time. A monthly check of pressure and a glance at the tread, which can be measured with an inexpensive gauge, will catch most problems. Given that tyres are the only part of the car in contact with the road, it is difficult to think of a few minutes better spent. Drivers who pay heavily for advanced safety features while neglecting their tyres have got their priorities the wrong way round.</p>`,
        groups: [
          {
            id: 'r3a', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>Tyres: key facts</strong></p>
              <ul>
                <li>In dry conditions, racing cars use tyres that are completely {{27}}.</li>
                <li>During aquaplaning, a driver may be unable to steer or {{28}}.</li>
                <li>Legal minimum tread in the UK and EU: {{29}} millimetres.</li>
                <li>Even with good tyres, stopping distances in the wet are about {{30}} those in the dry.</li>
                <li>The correct pressure may be shown on a label inside the door frame or {{31}} flap.</li>
              </ul>`,
            questions: [
              { number: 27, evidence: 'racing cars use completely smooth tyres in dry conditions' },
              { number: 28, evidence: 'the driver may have little or no ability to steer or brake' },
              { number: 29, evidence: 'the legal minimum depth of tread for cars is 1.6 millimetres' },
              { number: 30, evidence: 'stopping distances in the wet are around twice those on a dry road' },
              { number: 31, evidence: 'often on a label inside the door frame or fuel flap' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which THREE of the following are described as effects of under-inflated tyres? Choose THREE letters, A–F.',
            options: [
              { value: 'A', label: 'higher fuel consumption' },
              { value: 'B', label: 'faster wear in the centre of the tyre' },
              { value: 'C', label: 'additional heat' },
              { value: 'D', label: 'a smaller contact patch' },
              { value: 'E', label: 'better grip on wet roads' },
              { value: 'F', label: 'faster wear at the outer edges' },
            ],
            questions: [
              { number: 32, evidence: 'which increases rolling resistance and therefore fuel consumption' },
              { number: 33, evidence: 'generates extra heat' },
              { number: 34, evidence: 'causes the outer edges to wear more quickly' },
            ],
          },
          {
            id: 'r3c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 35, text: 'Apart from hardening, what develops in rubber as it ages?', evidence: 'Rubber gradually hardens and develops fine cracks over time' },
              { number: 36, text: 'What do the first two digits of the date code show?', evidence: 'the first two digits give the week' },
              { number: 37, text: 'What inexpensive tool can be used to measure tread depth?', evidence: 'which can be measured with an inexpensive gauge' },
            ],
          },
          {
            id: 'r3d', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 38, text: 'Many drivers pay too little attention to the condition of their tyres.', evidence: 'It is therefore surprising how little attention many drivers give to their tyres' },
              { number: 39, text: 'Drivers need to replace their tyres only when the tread reaches the legal minimum.', evidence: 'This is a minimum, not a recommendation.' },
              { number: 40, text: 'Winter tyres should be compulsory in every country with cold winters.' },
            ],
          },
        ],
      },
    ],
  },
}
