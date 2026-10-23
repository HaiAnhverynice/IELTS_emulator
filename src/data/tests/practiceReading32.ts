import type { IeltsTest, Option } from '../../types'

// Original reading practice test 32 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const pollutants: Option[] = [
  { value: 'A', label: 'nitrogen dioxide' },
  { value: 'B', label: 'radon' },
  { value: 'C', label: 'formaldehyde' },
  { value: 'D', label: 'carbon monoxide' },
  { value: 'E', label: 'carbon dioxide' },
  { value: 'F', label: 'fine particles' },
]

const paymentHeadings: Option[] = [
  { value: 'i', label: 'Why shops prefer customers to pay in cash' },
  { value: 'ii', label: 'Hiding the real number' },
  { value: 'iii', label: 'A habit acquired almost overnight' },
  { value: 'iv', label: 'The early history of the credit card' },
  { value: 'v', label: 'Why copied details are of little use' },
  { value: 'vi', label: 'Power without a battery' },
  { value: 'vii', label: 'How banks charge retailers for each payment' },
  { value: 'viii', label: 'The hidden costs of effortless paying' },
  { value: 'ix', label: 'Limits that cap the damage' },
]

export const practiceReading32: IeltsTest = {
  id: 'practice-reading-32',
  title: 'Practice Test 32 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'FALSE', 5: 'NOT GIVEN', 6: 'FALSE',
      7: ['young'], 8: ['chemotherapy'], 9: ['clusters'], 10: ['1980'],
      11: 'C', 12: 'A', 13: 'D',
      14: 'B', 15: 'A', 16: 'C', 17: 'D', 18: 'E',
      19: 'NO', 20: 'YES', 21: 'NOT GIVEN', 22: 'NO', 23: 'YES',
      24: ['outside', 'outdoors'], 25: ['HEPA filter', 'HEPA', 'a HEPA filter'], 26: ['sealed chambers', 'small sealed chambers'],
      27: 'iii', 28: 'vi', 29: 'v', 30: 'ix', 31: 'ii', 32: 'viii',
      33: 'A', 34: 'C', 35: 'F',
      36: ['near-field', 'near field'], 37: ['electromagnetic'], 38: ['token'], 39: ['paying'], 40: ['bank account'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Herd immunity: protection in numbers',
        html: `
          <p>When enough people in a community are immune to an infectious disease, the disease struggles to spread, and even those who are not immune become less likely to catch it. This indirect protection is known as herd immunity, or community immunity. It is one of the most important ideas in public health, and also one of the most frequently misunderstood.</p>
          <p>The key concept is the basic reproduction number, usually written R0, which is the average number of people that one infected person would go on to infect in a population where nobody is immune. If R0 is three, each case leads to three more, those three lead to nine, and so on. Immunity changes the arithmetic. If two-thirds of the population are immune, only one of the three people that a case would have infected is actually susceptible. Each case then produces, on average, just one new case, and the outbreak stops growing. Once the proportion of immune people rises above this threshold, outbreaks shrink and eventually die out. The same reasoning explains why reducing contact between people can slow an epidemic even before many are immune, since it lowers the number of new infections that each case causes.</p>
          <p>The threshold depends on how contagious a disease is: the more easily it spreads, the higher the proportion of the population that must be immune. Measles is among the most contagious diseases known, and in a population with no immunity one case can lead to a dozen or more others. For this reason, around 95 per cent of a population needs to be immune to prevent measles from spreading, a far higher figure than for many other infections. Since no vaccine is perfect, the proportion of people vaccinated has to be somewhat higher still. Two doses of the measles vaccine give very good protection, but a small number of people who receive them do not become immune.</p>
          <p>Herd immunity matters most for those who cannot protect themselves. Babies are too young to receive some vaccines, and people whose immune systems have been weakened by illness or by treatments such as chemotherapy may be unable to receive certain vaccines or may not respond to them. These people depend on the immunity of those around them, and when vaccination rates fall, they are often among the first to be harmed.</p>
          <p>National figures can be misleading. A country in which 95 per cent of children are vaccinated may still experience outbreaks if unvaccinated children are concentrated in particular schools or neighbourhoods, since diseases spread through actual contacts rather than through national averages. Many measles outbreaks in countries with high overall coverage have begun in just such local clusters.</p>
          <p>It is also important to recognise where herd immunity does not apply. Tetanus is caused by bacteria found in soil and is not passed from person to person, so vaccinating other people offers no protection at all: each person is protected only by his or her own vaccination. For herd immunity to occur, a vaccine must reduce the spread of infection as well as protect the individual from illness. Some vaccines are much better at preventing serious disease than at stopping infection altogether, and for these the indirect benefit to others may be smaller.</p>
          <p>The most striking demonstration of what widespread immunity can achieve is the eradication of smallpox, which the World Health Organization declared in 1980 after a global campaign of vaccination and careful tracing of cases. The wider lesson of herd immunity is that vaccination is not only a personal decision about one's own health but also a contribution to the protection of others, including people one will never meet.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Herd immunity can protect people who are not immune themselves.', evidence: 'even those who are not immune become less likely to catch it' },
              { number: 2, text: 'Where R0 is three and two-thirds of people are immune, an outbreak will continue to grow quickly.', evidence: 'Each case then produces, on average, just one new case, and the outbreak stops growing.' },
              { number: 3, text: 'A higher level of immunity is needed to control measles than many other infections.', evidence: 'a far higher figure than for many other infections' },
              { number: 4, text: 'Everyone who receives two doses of the measles vaccine becomes immune.', evidence: 'a small number of people who receive them do not become immune' },
              { number: 5, text: 'Unvaccinated children are more likely to live in large cities.' },
              { number: 6, text: 'Vaccinating other people helps to protect a person from tetanus.', evidence: 'so vaccinating other people offers no protection at all' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>Who benefits, and where it fails</strong></p>
              <ul>
                <li>People who rely on herd immunity include babies who are too {{7}} for some vaccines and patients receiving treatments such as {{8}}.</li>
                <li>Outbreaks can start in local {{9}} even where national coverage is high.</li>
                <li>Smallpox was declared eradicated in {{10}}.</li>
              </ul>`,
            questions: [
              { number: 7, evidence: 'Babies are too young to receive some vaccines' },
              { number: 8, evidence: 'treatments such as chemotherapy' },
              { number: 9, evidence: 'have begun in just such local clusters' },
              { number: 10, evidence: 'which the World Health Organization declared in 1980' },
            ],
          },
          {
            id: 'r1c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 11, text: 'The basic reproduction number refers to the average number of people infected by one case', evidence: 'the average number of people that one infected person would go on to infect in a population where nobody is immune', options: [{ value: 'A', label: 'during a single day.' }, { value: 'B', label: 'after a vaccination campaign.' }, { value: 'C', label: 'when no one in the population is immune.' }, { value: 'D', label: 'once herd immunity has been reached.' }] },
              { number: 12, text: 'Why must the proportion of people vaccinated be higher than the proportion who need to be immune?', evidence: 'Since no vaccine is perfect, the proportion of people vaccinated has to be somewhat higher still.', options: [{ value: 'A', label: 'Some vaccinated people do not develop immunity.' }, { value: 'B', label: 'Immunity always fades after a few years.' }, { value: 'C', label: 'Babies cannot receive any vaccines.' }, { value: 'D', label: 'Diseases change faster than vaccines.' }] },
              { number: 13, text: 'What is the writer’s main point in the final paragraph?', evidence: "vaccination is not only a personal decision about one's own health but also a contribution to the protection of others", options: [{ value: 'A', label: 'Smallpox could not have been defeated without tracing cases.' }, { value: 'B', label: 'Other diseases will soon be eradicated.' }, { value: 'C', label: 'Vaccination should be a purely personal decision.' }, { value: 'D', label: 'Being vaccinated benefits other people as well as oneself.' }] },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The air we breathe indoors',
        html: `
          <p>Discussions of air pollution usually focus on traffic fumes and factory chimneys, yet most people in industrialised countries spend the great majority of their time indoors, at home, at work or at school. The air inside buildings has its own pollutants, and for several of them concentrations indoors are often higher than those outside. Indoor air has nevertheless received far less attention than outdoor pollution, partly because it is harder to measure and partly because it depends on private behaviour in millions of separate homes.</p>
          <p>Cooking is one of the largest sources. Frying and grilling release fine particles small enough to penetrate deep into the lungs, and gas hobs also produce nitrogen dioxide, a gas that irritates the airways and has been linked to asthma symptoms in children. Wood-burning stoves and open fires, which have become fashionable in some countries, can raise levels of fine particles both indoors and in the surrounding streets. Other pollutants come from the materials and products a home contains. New furniture, carpets and fresh paint can give off formaldehyde and other chemicals for weeks or months, while cleaning products and air fresheners add further compounds to the air.</p>
          <p>Some dangers cannot be seen or smelt. Carbon monoxide, produced when fuel burns without enough oxygen, can escape from a faulty boiler, heater or cooker and is poisonous even at fairly low concentrations; an inexpensive alarm is the only reliable way to detect it. Radon, a radioactive gas, seeps into buildings from the ground below in areas with certain kinds of rock, and after smoking it is one of the leading causes of lung cancer. Its level varies greatly from one house to the next, so the only way to know whether a home is affected is to test it.</p>
          <p>Carbon dioxide deserves a special mention, because it is often misunderstood. The levels normally found indoors are not poisonous, but because every person breathes it out, its concentration rises steadily in a crowded room with poor ventilation. It is therefore useful mainly as an indicator: a high reading suggests that stale air, along with whatever else it contains, is not being replaced. Some studies have found that people perform less well on tasks requiring concentration when levels are high, though it is not clear how far this is due to the carbon dioxide itself.</p>
          <p>The central remedy is ventilation, and here modern building practice presents a dilemma. To save energy, new and renovated homes are made increasingly airtight, which reduces heat loss but also traps pollutants and moisture inside unless ventilation is deliberately provided. Damp air in turn encourages mould, which can aggravate breathing problems. Well-designed buildings solve this with mechanical ventilation systems, some of which recover heat from the outgoing air, but many ordinary homes rely on their occupants to open windows.</p>
          <p>Air purifiers can help with particles, provided they use a genuine HEPA filter and are large enough for the room, but they do nothing for most gases. Houseplants, widely claimed to clean the air, are a weaker option than their reputation suggests. The claim stems largely from experiments carried out by NASA in 1989, in which plants removed chemicals from small sealed chambers. Later analysis concluded that, in a real home, the number of plants required to match even modest ventilation would be impractically large.</p>
          <p>Fortunately, the most effective measures are also the cheapest. Using a cooker hood that sends air outside, rather than one that merely recirculates it, removes much of the pollution from cooking at its source. Opening windows briefly but fully, especially after cooking or showering, replaces stale air more effectively than leaving a window slightly open all day. Avoiding unnecessary sprays, fitting a carbon monoxide alarm and, where relevant, testing for radon complete a short list of habits that will do more for most households than any gadget.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching', instructions: 'Look at the following statements and the list of pollutants below. Match each statement with the correct pollutant, A–F.',
            options: pollutants,
            questions: [
              { number: 14, text: 'enters homes from the ground beneath them', evidence: 'seeps into buildings from the ground below in areas with certain kinds of rock' },
              { number: 15, text: 'is produced by gas hobs and may worsen asthma symptoms in children', evidence: 'gas hobs also produce nitrogen dioxide, a gas that irritates the airways and has been linked to asthma symptoms in children' },
              { number: 16, text: 'can be released by new furniture and fresh paint', evidence: 'New furniture, carpets and fresh paint can give off formaldehyde' },
              { number: 17, text: 'can only be reliably detected with an alarm', evidence: 'an inexpensive alarm is the only reliable way to detect it' },
              { number: 18, text: 'is valuable chiefly as a sign of poor ventilation', evidence: 'It is therefore useful mainly as an indicator' },
            ],
          },
          {
            id: 'r2b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 19, text: 'The air inside buildings is generally cleaner than the air outside.', evidence: 'for several of them concentrations indoors are often higher than those outside' },
              { number: 20, text: 'Making homes more airtight can have disadvantages for the air inside them.', evidence: 'which reduces heat loss but also traps pollutants and moisture inside unless ventilation is deliberately provided' },
              { number: 21, text: 'Air purifiers are usually too noisy to be used in bedrooms.' },
              { number: 22, text: 'Houseplants are an effective way of cleaning the air in a typical home.', evidence: 'the number of plants required to match even modest ventilation would be impractically large' },
              { number: 23, text: 'Inexpensive habits can achieve more than costly equipment.', evidence: 'Fortunately, the most effective measures are also the cheapest.' },
            ],
          },
          {
            id: 'r2c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 24, text: 'Where should a cooker hood send the air it removes?', evidence: 'Using a cooker hood that sends air outside' },
              { number: 25, text: 'What must an air purifier contain in order to deal with particles?', evidence: 'provided they use a genuine HEPA filter' },
              { number: 26, text: 'In what kind of space were plants tested in the 1989 experiments?', evidence: 'in which plants removed chemicals from small sealed chambers' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Tap to pay: inside the contactless transaction',
        html: `
          <p><span class="passage-letter">A</span> Within little more than a decade, tapping a card or phone against a reader has become, in many countries, the normal way to pay for everyday purchases. The change was accelerated by the pandemic, when shops and customers alike preferred to avoid handling cash and pressing buttons. Yet most people who pay this way dozens of times a month have little idea of what happens in the second or so between the tap and the beep, or why, given how easy it is, the system is not abused more often.</p>
          <p><span class="passage-letter">B</span> The technology involved is called near-field communication. A contactless card contains, in addition to its chip, a thin antenna running around the edge of the card. The card has no battery. Instead, when it is brought close to a reader, the reader's electromagnetic field induces a small current in the antenna, which powers the chip just long enough for the two to exchange information. The field is deliberately weak and works only over a few centimetres, which is why the card must be held almost against the reader.</p>
          <p><span class="passage-letter">C</span> The exchange itself is designed so that intercepted information is of little value. Older cards with a magnetic stripe sent the same details every time they were used, so anyone who copied them could create a duplicate card. A contactless chip, by contrast, generates a unique code for each transaction, calculated using a secret key that is stored inside the chip and never leaves it. The bank checks the code and rejects any attempt to use it a second time. Someone who managed to record the exchange would therefore obtain a code that had already been spent. Fears that criminals might read cards through people's pockets have been widespread, but there is little evidence that this has led to significant fraud.</p>
          <p><span class="passage-letter">D</span> A second layer of protection limits what a thief can do with a stolen card. Each country sets a maximum value for a single contactless payment made without a PIN, and from time to time the card asks for the PIN even for small sums, typically after a number of consecutive contactless payments. In addition, most banks refund fraudulent contactless transactions provided the customer reports the loss promptly. The arrangement accepts a small risk in exchange for convenience, while placing a ceiling on the potential loss.</p>
          <p><span class="passage-letter">E</span> Paying with a phone or watch adds further safeguards. When a card is added to a phone wallet, the real card number is replaced by a substitute, known as a token, which is stored on the device and used for payments. The shop therefore never receives the actual card number, and if its systems are hacked, the stolen tokens are of little use elsewhere. Because the phone also requires the owner's fingerprint, face or passcode before it will pay, a stolen phone is generally harder to misuse than a stolen card, and for this reason the usual limit often does not apply to phone payments.</p>
          <p><span class="passage-letter">F</span> If contactless payment is reasonably secure, its costs lie elsewhere. Psychologists have long argued that handing over cash produces a kind of pain of paying that makes people think twice, and several studies suggest that people spend more when paying requires less effort. A tap leaves no visible gap in the wallet. There are also concerns about those left behind as cash disappears. Older people, people without a bank account and those who manage a tight budget by keeping physical money in envelopes may find it harder to take part in an economy where some shops no longer accept coins and notes. Convenience, in other words, is not quite the same as progress for everyone.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching-headings', instructions: 'Reading Passage 3 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: paymentHeadings,
            questions: [
              { number: 27, text: 'Paragraph A', evidence: 'tapping a card or phone against a reader has become, in many countries, the normal way to pay for everyday purchases' },
              { number: 28, text: 'Paragraph B', evidence: 'The card has no battery.' },
              { number: 29, text: 'Paragraph C', evidence: 'The exchange itself is designed so that intercepted information is of little value.' },
              { number: 30, text: 'Paragraph D', evidence: 'while placing a ceiling on the potential loss' },
              { number: 31, text: 'Paragraph E', evidence: 'the real card number is replaced by a substitute, known as a token' },
              { number: 32, text: 'Paragraph F', evidence: 'If contactless payment is reasonably secure, its costs lie elsewhere.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which THREE of the following are described as features that protect contactless users against fraud? Choose THREE letters, A–G.',
            options: [
              { value: 'A', label: 'a different code generated for every payment' },
              { value: 'B', label: 'a battery that switches the card off when not in use' },
              { value: 'C', label: 'a maximum value for payments made without a PIN' },
              { value: 'D', label: 'a photograph of the customer taken by the reader' },
              { value: 'E', label: 'a magnetic stripe that cannot be copied' },
              { value: 'F', label: 'a substitute number used in place of the real card number' },
              { value: 'G', label: 'a reader that works from several metres away' },
            ],
            questions: [
              { number: 33, evidence: 'generates a unique code for each transaction' },
              { number: 34, evidence: 'Each country sets a maximum value for a single contactless payment made without a PIN' },
              { number: 35, evidence: 'The shop therefore never receives the actual card number' },
            ],
          },
          {
            id: 'r3c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 36, text: 'Contactless payment depends on a technology known as ________ communication.', evidence: 'The technology involved is called near-field communication.' },
              { number: 37, text: 'The chip in the card is powered by the reader’s ________ field.', evidence: "the reader's electromagnetic field induces a small current in the antenna" },
              { number: 38, text: 'A phone wallet pays using a substitute number called a ________.', evidence: 'known as a token' },
              { number: 39, text: 'Handing over cash is said to produce the pain of ________.', evidence: 'handing over cash produces a kind of pain of paying' },
              { number: 40, text: 'People without a ________ may struggle as cash disappears.', evidence: 'Older people, people without a bank account' },
            ],
          },
        ],
      },
    ],
  },
}
