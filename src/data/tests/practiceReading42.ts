import type { IeltsTest, Option } from '../../types'

// Original reading practice test 42 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const subscriptionHeadings: Option[] = [
  { value: 'i', label: 'Obstacles placed in the way of leaving' },
  { value: 'ii', label: 'Taking stock of what one pays for' },
  { value: 'iii', label: 'The legal right to a refund' },
  { value: 'iv', label: 'From paying once to paying regularly' },
  { value: 'v', label: 'Costs that rise without a decision' },
  { value: 'vi', label: 'How doing nothing keeps payments going' },
  { value: 'vii', label: 'Why streaming services make fewer films' },
  { value: 'viii', label: 'Real advantages weakened by ordinary behaviour' },
  { value: 'ix', label: 'The disappearance of physical shops' },
]

const navEndings: Option[] = [
  { value: 'A', label: 'run at a slightly different rate from clocks on the ground.' },
  { value: 'B', label: 'use an atomic clock of its own.' },
  { value: 'C', label: 'sends nothing back to the satellites.' },
  { value: 'D', label: 'make the receiver seem to be somewhere it is not.' },
  { value: 'E', label: 'work out the error in its own clock.' },
  { value: 'F', label: 'receive signals through roofs and walls.' },
  { value: 'G', label: 'estimate how much the signal has been slowed.' },
  { value: 'H', label: 'slow down as they approach the Earth.' },
]

export const practiceReading42: IeltsTest = {
  id: 'practice-reading-42',
  title: 'Practice Test 42 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'TRUE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'FALSE',
      6: 'A', 7: 'C', 8: 'B', 9: 'D',
      10: ['catalysts'], 11: ['microfibres', 'microfibers'], 12: ['sludge'], 13: ['ventilated'],
      14: 'iv', 15: 'viii', 16: 'vi', 17: 'i', 18: 'v', 19: 'ii',
      20: 'NO', 21: 'NO', 22: 'YES', 23: 'NOT GIVEN',
      24: 'B', 25: 'D', 26: 'E',
      27: 'C', 28: 'E', 29: 'A', 30: 'G', 31: 'D',
      32: ['20,000 kilometres', '20000 kilometres', '20,000 km', '20000 km', '20,000', '20000', '20,000 kilometers', '20000 kilometers'],
      33: ['atomic clocks', 'atomic'], 34: ['assisted GPS'], 35: ['motion sensors', 'internal motion sensors'],
      36: 'B', 37: 'D', 38: 'A',
      39: 'B', 40: 'D',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Washing clothes: cooler, fuller, less often',
        html: `
          <p>Washing clothes is one of the most routine of household tasks, and for that reason it rarely receives much thought. Yet the choices made each time a machine is loaded have consequences for energy bills, for the life of the clothes themselves and for the wider environment. Many of the habits people follow were formed when machines and detergents worked very differently, and some of them no longer make much sense. Small adjustments, repeated week after week over the life of a machine, can add up to a considerable difference.</p>
          <p>The single largest use of energy in a typical wash is not turning the drum but heating the water. A machine that draws in cold water must warm it with an electric element, and the hotter the setting, the more electricity this takes. Lowering the temperature therefore produces a much larger saving than most other changes. This has become practical because modern detergents contain enzymes, biological catalysts that break down particular kinds of stain, such as those caused by proteins or fats. Many of these enzymes are designed to work at relatively low temperatures, and some would be damaged by very hot water.</p>
          <p>Shoppers are sometimes surprised to find that the 'eco' programme on a new machine takes considerably longer than a standard one. The explanation is that the programme heats the water less and makes up for the lower temperature by soaking and moving the clothes for longer. Time, in this case, is cheaper than heat: the machine uses less energy overall despite running for longer, so the longest programme is frequently the most efficient one.</p>
          <p>Lower temperatures are not suitable for everything. Health advice commonly recommends hotter washes for items such as kitchen cloths, towels and bedding when someone in the household is ill, since some micro-organisms survive cooler cycles. For everyday clothes that are only lightly soiled, however, a cool wash is usually enough, and many garments need washing less often than their owners assume. Jeans, jumpers and coats that have been worn for a few hours often need nothing more than airing.</p>
          <p>Frequency matters for another reason. Each wash causes some wear, as fibres rub against each other and against the drum, and colours fade gradually. Clothes made from synthetic materials such as polyester also release tiny fibres, known as microfibres, which are carried away with the waste water. Treatment plants capture a large proportion of them, but some pass into rivers and the sea, and many of those that are caught end up in sewage sludge, which in some countries is spread on farmland. Fuller loads and shorter, cooler washes are thought to reduce shedding, and filters and special laundry bags designed to trap fibres are now on sale, though their effectiveness varies.</p>
          <p>Drying can use even more energy than washing. A tumble dryer that heats air to evaporate water is one of the most power-hungry appliances in many homes, whereas a washing line uses none at all. Heat-pump dryers, which recycle warm air rather than releasing it, use considerably less electricity than conventional models, but they cost more to buy. Where outdoor drying is impossible, clothes dried indoors on a rack add moisture to the air, so the room should be ventilated to avoid problems with damp and mould.</p>
          <p>Most of these changes cost nothing and require no new equipment. Choosing a lower temperature, washing full loads, washing less often and drying on a line together reduce bills, keep clothes in good condition for longer and limit the release of fibres. The difficulty is less technical than habitual: people tend to wash at the temperature their parents used, and to judge an item dirty because it has been worn rather than because it actually needs cleaning.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Turning the drum accounts for most of the energy used in a typical wash.', evidence: 'The single largest use of energy in a typical wash is not turning the drum but heating the water.' },
              { number: 2, text: 'Very hot water can harm some of the enzymes found in detergents.', evidence: 'some would be damaged by very hot water' },
              { number: 3, text: 'A longer washing programme can use less energy than a shorter one.', evidence: 'the machine uses less energy overall despite running for longer' },
              { number: 4, text: 'Most new washing machines are now sold with a built-in filter for microfibres.' },
              { number: 5, text: 'Microfibres captured at treatment plants are prevented from reaching the land.', evidence: 'many of those that are caught end up in sewage sludge, which in some countries is spread on farmland' },
            ],
          },
          {
            id: 'r1b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 6, text: 'Why does the writer refer to health advice in the fourth paragraph?', evidence: 'Lower temperatures are not suitable for everything.', options: [{ value: 'A', label: 'to show that cool washes are not always appropriate' }, { value: 'B', label: 'to argue that all clothes should be washed hot' }, { value: 'C', label: 'to criticise the makers of detergents' }, { value: 'D', label: "to explain why 'eco' programmes take longer" }] },
              { number: 7, text: 'According to the writer, clothes wear out partly because', evidence: 'as fibres rub against each other and against the drum', options: [{ value: 'A', label: 'enzymes attack the fibres.' }, { value: 'B', label: 'dryers overheat them.' }, { value: 'C', label: 'the fibres rub against each other and the machine.' }, { value: 'D', label: 'detergents remove the dyes.' }] },
              { number: 8, text: 'What does the writer say about heat-pump dryers?', evidence: 'use considerably less electricity than conventional models, but they cost more to buy', options: [{ value: 'A', label: 'They use no electricity.' }, { value: 'B', label: 'They are cheaper to run but dearer to buy.' }, { value: 'C', label: 'They dry clothes faster than a washing line.' }, { value: 'D', label: 'They add moisture to the air.' }] },
              { number: 9, text: 'What does the writer see as the main obstacle to change?', evidence: 'The difficulty is less technical than habitual', options: [{ value: 'A', label: 'the cost of new equipment' }, { value: 'B', label: 'a lack of technical knowledge' }, { value: 'C', label: 'a shortage of space for drying' }, { value: 'D', label: 'the force of habit' }] },
            ],
          },
          {
            id: 'r1c', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Laundry: key facts</strong></p>
              <ul>
                <li>Enzymes in detergents are biological {{10}} that break down certain stains.</li>
                <li>Synthetic clothes shed {{11}} into the waste water.</li>
                <li>Fibres caught at treatment plants may end up in sewage {{12}}.</li>
                <li>Rooms where clothes are dried indoors should be {{13}} to prevent damp.</li>
              </ul>`,
            questions: [
              { number: 10, evidence: 'biological catalysts that break down particular kinds of stain' },
              { number: 11, evidence: 'known as microfibres, which are carried away with the waste water' },
              { number: 12, evidence: 'end up in sewage sludge' },
              { number: 13, evidence: 'the room should be ventilated to avoid problems with damp and mould' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The subscription habit',
        html: `
          <p><span class="passage-letter">A</span> A generation ago, most people paid for things once. A record, a piece of software or a newspaper was bought, and that was the end of the transaction. Today an increasing share of household spending takes the form of regular payments for continuing access: films and music, software, cloud storage, meal kits, gym memberships, even razors and pet food delivered on a schedule. For businesses, the attraction is obvious. A subscription turns a single sale into a predictable stream of income, and a customer who signs up once may keep paying for years.</p>
          <p><span class="passage-letter">B</span> For consumers, the model has real advantages. Paying a modest monthly fee for access to a vast library of music is far cheaper than buying each album, and software that is updated continually avoids the expense of buying a new version every few years. The difficulty lies not in the idea itself but in the way it interacts with ordinary human behaviour. A one-off purchase requires a decision each time. A subscription requires a decision only once, and after that it continues unless the customer acts.</p>
          <p><span class="passage-letter">C</span> This reversal of the default is the source of most of the problems. People are often slow to take action that requires effort, even when the benefit is clear, and a small monthly charge is easy to overlook. Many subscribers therefore continue paying for services they rarely or never use. Free trials exploit the same tendency. Customers are typically asked for card details at the start, and unless they remember to cancel before the trial ends, payments begin automatically. Some businesses are open about this; others rely on it.</p>
          <p><span class="passage-letter">D</span> Cancellation itself can be made deliberately difficult. Signing up may take a single click, while leaving requires finding a hidden page, telephoning during office hours or working through a series of screens offering discounts and warnings about lost benefits. Designers have a name for interfaces of this kind: dark patterns, meaning features that steer users towards choices they might not otherwise make. Several governments have responded with rules requiring that cancelling a contract be no harder than entering it, though how firmly these rules are enforced varies.</p>
          <p><span class="passage-letter">E</span> Prices are a further concern. Once a customer is subscribed, increases tend to be applied automatically, often with only an email to announce them. Each rise may seem small, but because several subscriptions may be rising at different times of year, the total can grow considerably without the subscriber ever making a conscious choice to spend more. The effect is magnified when charges are spread across several cards and accounts, so that no single statement shows the full picture. Annual plans complicate matters further: a charge that arrives only once a year is easily forgotten in the months between payments, and it may come as an unwelcome surprise when it does.</p>
          <p><span class="passage-letter">F</span> A few habits can restore control. The simplest is to list every regular payment, using bank and card statements from the past year, since some subscriptions are charged annually and would not appear in a single month. Many banking apps now group recurring payments together, which makes the task easier. Each service can then be judged by asking whether one would sign up for it today at the current price. A reminder set for a few days before a free trial ends prevents an unwanted payment, and some people choose to pay for a service for a single month whenever they actually want it, and then cancel, rather than paying for it all year round. None of this requires giving up subscriptions altogether. The aim is simply to turn a payment that continues by default back into one that continues by choice, which is what a subscription was supposed to be in the first place.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: subscriptionHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'A generation ago, most people paid for things once.' },
              { number: 15, text: 'Paragraph B', evidence: 'The difficulty lies not in the idea itself but in the way it interacts with ordinary human behaviour.' },
              { number: 16, text: 'Paragraph C', evidence: 'Many subscribers therefore continue paying for services they rarely or never use.' },
              { number: 17, text: 'Paragraph D', evidence: 'Cancellation itself can be made deliberately difficult.' },
              { number: 18, text: 'Paragraph E', evidence: 'the total can grow considerably without the subscriber ever making a conscious choice to spend more' },
              { number: 19, text: 'Paragraph F', evidence: 'The simplest is to list every regular payment' },
            ],
          },
          {
            id: 'r2b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 20, text: 'Subscriptions offer consumers no genuine benefits.', evidence: 'For consumers, the model has real advantages.' },
              { number: 21, text: 'All businesses that offer free trials depend on customers forgetting to cancel.', evidence: 'Some businesses are open about this; others rely on it.' },
              { number: 22, text: 'A person with several subscriptions may end up spending more without ever deciding to.', evidence: 'the total can grow considerably without the subscriber ever making a conscious choice to spend more' },
              { number: 23, text: 'Paying annually for a subscription is usually better value than paying monthly.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-multi', instructions: 'Which THREE pieces of advice does the writer give to subscribers? Choose THREE letters, A–F.',
            options: [
              { value: 'A', label: 'use a single card for every subscription' },
              { value: 'B', label: 'check statements covering a whole year' },
              { value: 'C', label: 'telephone each company to ask for a lower price' },
              { value: 'D', label: 'set a reminder shortly before a free trial ends' },
              { value: 'E', label: 'pay for one month only when the service is actually wanted' },
              { value: 'F', label: 'avoid free trials altogether' },
            ],
            questions: [
              { number: 24, evidence: 'using bank and card statements from the past year' },
              { number: 25, evidence: 'A reminder set for a few days before a free trial ends prevents an unwanted payment' },
              { number: 26, evidence: 'pay for a service for a single month whenever they actually want it' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'How satellite navigation finds you',
        html: `
          <p>Satellite navigation has become so ordinary that it is easy to forget how remarkable it is. A phone in a pocket can establish its position to within a few metres almost anywhere on Earth, at no direct cost to the user. The best-known system, the Global Positioning System, or GPS, is operated by the United States, but it is no longer the only one: Russia, the European Union and China run their own global systems, and many modern receivers use signals from several of them at once.</p>
          <p>The principle is surprisingly simple. Each satellite, orbiting at an altitude of around 20,000 kilometres, continually broadcasts a signal stating where it is and the exact time at which the signal was sent. A receiver on the ground notes when the signal arrives. Because radio waves travel at the speed of light, the delay reveals the distance to the satellite. Knowing its distance from several satellites whose positions are known, the receiver can work out where it must be. Importantly, the receiver sends nothing back. The system works in one direction only, which is why any number of people can use it at the same time without overloading it.</p>
          <p>The difficulty lies in the timing. Light covers about 300 metres in a millionth of a second, so a clock error of that tiny size would produce a position error of the same order. The satellites therefore carry atomic clocks of extraordinary precision. A phone could not contain such a clock, and its own is far less accurate. The solution is to use one more satellite than geometry alone would require. Three distances would be enough to fix a position if the receiver's clock were perfect; a fourth allows the receiver to calculate its own clock error and remove it. In effect, the receiver solves for time as well as for place.</p>
          <p>Even the satellites' clocks need correcting, for a reason that has nothing to do with engineering. Both of Einstein's theories of relativity predict that a clock moving fast and high above the Earth will run at a slightly different rate from one on the ground. The difference amounts to only millionths of a second each day, but if it were left uncorrected it would cause positions to drift by several kilometres daily. The adjustment is built into the system, which makes satellite navigation one of the few everyday technologies that depend directly on relativity.</p>
          <p>Accuracy is also limited by the journey the signal makes. Passing through the upper atmosphere slows it slightly, and by an amount that varies, so receivers that pick up two different frequencies compare them to estimate this delay. Near the ground, the signals are very weak, and they are easily blocked by roofs and walls, which is why navigation often fails indoors. In city centres, tall buildings cause a further problem: signals reflect off glass and concrete before reaching the receiver, so they travel further than the direct path and make the receiver appear to be somewhere it is not.</p>
          <p>Phones use several methods to overcome these weaknesses. Rather than waiting to receive all the information it needs from the satellites themselves, which can take some time, a phone can download details of the satellites' orbits through the mobile network, a technique known as assisted GPS. Phones also estimate their position from nearby Wi-Fi networks and mobile phone masts, and they use internal motion sensors to keep track of movement for a short time when the satellite signal is lost, for instance in a tunnel.</p>
          <p>The very weakness of the signals is also a vulnerability. A transmitter on the ground can drown them out, a practice known as jamming, or broadcast false signals that persuade a receiver it is somewhere else, which is called spoofing. Because so much now relies on satellite timing as well as position, including telecommunications networks and financial systems, governments increasingly regard dependence on a single source as a risk and encourage the development of back-up systems on the ground.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–H, from the list below.',
            options: navEndings,
            questions: [
              { number: 27, text: 'Any number of people can use satellite navigation at once because a receiver', evidence: 'Importantly, the receiver sends nothing back.' },
              { number: 28, text: 'A signal from a fourth satellite allows a receiver to', evidence: 'a fourth allows the receiver to calculate its own clock error and remove it' },
              { number: 29, text: 'Corrections for relativity are needed because the satellites’ clocks', evidence: 'will run at a slightly different rate from one on the ground' },
              { number: 30, text: 'Receivers that pick up two different frequencies can', evidence: 'receivers that pick up two different frequencies compare them to estimate this delay' },
              { number: 31, text: 'In city centres, signals reflected by buildings', evidence: 'make the receiver appear to be somewhere it is not' },
            ],
          },
          {
            id: 'r3b', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 32, text: 'At approximately what altitude do the satellites orbit?', evidence: 'orbiting at an altitude of around 20,000 kilometres' },
              { number: 33, text: 'What kind of clocks do the satellites carry?', evidence: 'The satellites therefore carry atomic clocks of extraordinary precision.' },
              { number: 34, text: 'What is the name of the technique in which a phone downloads orbit details through the mobile network?', evidence: 'a technique known as assisted GPS' },
              { number: 35, text: 'What does a phone use to follow its movement when the satellite signal is lost in a tunnel?', evidence: 'they use internal motion sensors to keep track of movement for a short time when the satellite signal is lost' },
            ],
          },
          {
            id: 'r3c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 36, text: 'What point does the writer make in the third paragraph?', evidence: 'so a clock error of that tiny size would produce a position error of the same order', options: [{ value: 'A', label: 'Phones contain atomic clocks.' }, { value: 'B', label: 'A very small timing error leads to a large error in position.' }, { value: 'C', label: 'Three satellites are always enough to fix a position.' }, { value: 'D', label: 'Satellite clocks are less accurate than those in phones.' }] },
              { number: 37, text: 'The writer describes satellite navigation as unusual among everyday technologies because it', evidence: 'one of the few everyday technologies that depend directly on relativity', options: [{ value: 'A', label: 'is free to use.' }, { value: 'B', label: 'is run by several different powers.' }, { value: 'C', label: 'works only outdoors.' }, { value: 'D', label: 'relies directly on relativity.' }] },
              { number: 38, text: 'According to the writer, navigation often fails indoors because', evidence: 'they are easily blocked by roofs and walls, which is why navigation often fails indoors', options: [{ value: 'A', label: 'weak signals are easily blocked by the building.' }, { value: 'B', label: 'signals reflect off glass and concrete.' }, { value: 'C', label: 'the upper atmosphere delays the signal.' }, { value: 'D', label: 'phones switch off satellite reception inside.' }] },
            ],
          },
          {
            id: 'r3d', type: 'mcq-multi', instructions: 'Which TWO does the writer mention as depending on satellite timing? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'electricity grids' },
              { value: 'B', label: 'financial systems' },
              { value: 'C', label: 'weather forecasting' },
              { value: 'D', label: 'telecommunications networks' },
              { value: 'E', label: 'air traffic control' },
            ],
            questions: [
              { number: 39, evidence: 'including telecommunications networks and financial systems' },
              { number: 40, evidence: 'including telecommunications networks and financial systems' },
            ],
          },
        ],
      },
    ],
  },
}
