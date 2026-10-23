import type { IeltsTest, Option } from '../../types'

// Original reading practice test 28 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const waterHeadings: Option[] = [
  { value: 'i', label: 'A recommendation taken out of context' },
  { value: 'ii', label: 'Why one figure cannot suit everyone' },
  { value: 'iii', label: "The body's own warning system" },
  { value: 'iv', label: 'When drinking more becomes a danger' },
  { value: 'v', label: 'Sources of water that are often overlooked' },
  { value: 'vi', label: 'Why coffee should be avoided' },
  { value: 'vii', label: 'A group that may need reminding' },
  { value: 'viii', label: 'A useful habit, kept in proportion' },
  { value: 'ix', label: 'How regular exercise strengthens the kidneys' },
  { value: 'x', label: 'The rising cost of hydration products' },
]

const officeEndings: Option[] = [
  { value: 'A', label: 'may benefit from being able to contact one another easily.' },
  { value: 'B', label: 'is less disruptive than general background noise.' },
  { value: 'C', label: 'seemed to push communication towards email and messaging.' },
  { value: 'D', label: 'are always the cheapest way of using floor space.' },
  { value: 'E', label: 'reduces the attention available for writing or careful reading.' },
  { value: 'F', label: 'can leave people cut off from their colleagues.' },
  { value: 'G', label: 'have been proven to double sickness absence.' },
]

export const practiceReading28: IeltsTest = {
  id: 'practice-reading-28',
  title: 'Practice Test 28 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'i', 2: 'iii', 3: 'v', 4: 'ii', 5: 'vii', 6: 'iv', 7: 'viii',
      8: 'TRUE', 9: 'FALSE', 10: 'FALSE', 11: 'NOT GIVEN',
      12: ['thirst'], 13: ['vitamins'],
      14: 'F', 15: 'B', 16: 'A', 17: 'C', 18: 'D',
      19: 'B', 20: 'B', 21: 'B', 22: 'C',
      23: 'A', 24: 'C',
      25: ['inflation-linked', 'inflation-linked bonds'], 26: ['real return', 'the real return'],
      27: 'NO', 28: 'NOT GIVEN', 29: 'YES', 30: 'NO', 31: 'NO',
      32: ['sensors'], 33: ['desks'], 34: ['task'], 35: ['booths'], 36: ['scarce'],
      37: 'C', 38: 'E', 39: 'F', 40: 'A',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Do we really need eight glasses of water a day?',
        html: `
          <p><span class="passage-letter">A</span> The advice to drink eight glasses of water a day is repeated so often that many people assume it must rest on solid research. In fact, its origins are surprisingly hard to trace. One frequently cited source is a 1945 recommendation from a United States nutrition body, which suggested that adults needed roughly 2.5 litres of water daily. What is usually forgotten is the sentence that followed. Most of this quantity, the same document noted, is contained in prepared foods. Somewhere along the way, a figure that described total water intake from all sources was turned into an instruction to drink that amount on top of everything else.</p>
          <p><span class="passage-letter">B</span> Water does, of course, matter. It makes up more than half of the body's weight in most adults, and it is lost continuously through breathing, sweating and urine. Losing even a small proportion of it can cause headaches, tiredness and difficulty concentrating. But the body is far from helpless in the face of this loss. When the concentration of salts in the blood rises, sensors in the brain trigger thirst and, at the same time, a hormone signals the kidneys to hold on to water and produce darker, more concentrated urine. For a healthy adult with access to drinks, this system is remarkably precise.</p>
          <p><span class="passage-letter">C</span> The second misunderstanding concerns what counts as water. Fruit and vegetables such as cucumber, watermelon and lettuce are mostly water, and even foods that seem dry, such as bread, contain a considerable amount. Soups, milk, juice and tea all contribute too. Coffee has long been accused of dehydrating its drinkers because caffeine has a mild diuretic effect, increasing the production of urine. However, studies of regular coffee drinkers have found that the fluid in a cup more than makes up for this effect, so moderate amounts add to rather than subtract from the day's intake.</p>
          <p><span class="passage-letter">D</span> Needs also vary enormously from one person to another. Body size, physical activity, the temperature and humidity of the surroundings, and illnesses involving fever or diarrhoea all change how much water is lost. A construction worker in a hot climate may need several times as much as an office worker in a cool one, and pregnant and breastfeeding women require more than usual. A single figure applied to everyone is therefore of limited use, which is why health authorities increasingly describe adequate intakes as broad averages for a population rather than as daily targets for each individual.</p>
          <p><span class="passage-letter">E</span> There is, however, one group for whom thirst is a less reliable guide. As people age, the sense of thirst tends to weaken, and some older adults drink too little without noticing, particularly if they are unwell or find it difficult to reach a drink. Care homes and hospitals therefore often make a point of offering fluids at regular intervals. For this group, a deliberate routine can be sensible, even though it would be unnecessary for most younger adults.</p>
          <p><span class="passage-letter">F</span> Drinking far more than the body needs is not harmless either. In rare cases, consuming very large volumes in a short time dilutes the sodium in the blood, a condition known as hyponatraemia. It has occurred among endurance runners who, worried about dehydration, drank at every opportunity during long races while also losing salt in their sweat. Symptoms include nausea, confusion and, in severe cases, seizures. For this reason, many sports scientists now advise athletes to drink according to thirst rather than to a fixed schedule.</p>
          <p><span class="passage-letter">G</span> None of this means that drinking water is a bad habit. Choosing water instead of sugary drinks is a simple way to cut down on sugar, and keeping a bottle at hand may help people who forget to drink when they are busy. Pale yellow urine is often suggested as a practical sign that intake is adequate, although certain vitamins and foods can change its colour. The real lesson is that, for most healthy people, the body's own signals are a better guide than a number repeated without its context.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: waterHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'a figure that described total water intake from all sources was turned into an instruction to drink that amount on top of everything else' },
              { number: 2, text: 'Paragraph B', evidence: 'sensors in the brain trigger thirst' },
              { number: 3, text: 'Paragraph C', evidence: 'The second misunderstanding concerns what counts as water.' },
              { number: 4, text: 'Paragraph D', evidence: 'A single figure applied to everyone is therefore of limited use' },
              { number: 5, text: 'Paragraph E', evidence: 'Care homes and hospitals therefore often make a point of offering fluids at regular intervals.' },
              { number: 6, text: 'Paragraph F', evidence: 'Drinking far more than the body needs is not harmless either.' },
              { number: 7, text: 'Paragraph G', evidence: 'None of this means that drinking water is a bad habit.' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 8, text: 'According to the 1945 recommendation, food supplies most of the water that adults require.', evidence: 'Most of this quantity, the same document noted, is contained in prepared foods.' },
              { number: 9, text: 'When the body is short of water, the kidneys increase the amount of urine they produce.', evidence: 'a hormone signals the kidneys to hold on to water and produce darker, more concentrated urine' },
              { number: 10, text: 'Regular coffee drinkers lose more fluid as a result of each cup than the cup provides.', evidence: 'the fluid in a cup more than makes up for this effect' },
              { number: 11, text: 'Most cases of hyponatraemia among runners occur in races held in hot weather.' },
            ],
          },
          {
            id: 'r1c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 12, text: 'Rather than following a fixed schedule, athletes are increasingly told to drink according to ________.', evidence: 'advise athletes to drink according to thirst rather than to a fixed schedule' },
              { number: 13, text: 'Urine colour is not a perfect guide, because it can be altered by some foods and ________.', evidence: 'certain vitamins and foods can change its colour' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Inflation: what rising prices do to your money',
        html: `
          <p><span class="passage-letter">A</span> When people say that life is getting more expensive, economists translate the complaint into a single figure: the inflation rate, the percentage by which the general level of prices has risen over the previous twelve months. In most countries it is calculated by a national statistics office, which tracks the prices of a large and carefully chosen "basket" of goods and services, from bread and bus fares to rent and haircuts. Each item is given a weight according to how much a typical household spends on it, so that a rise in the cost of housing affects the index far more than an equal percentage rise in the price of matches.</p>
          <p><span class="passage-letter">B</span> Because the basket represents an average household, the official figure may differ considerably from any individual's experience. A retired person who spends a large share of their income on heating and food will feel a rise in energy prices more sharply than a young worker whose budget goes mainly on travel and entertainment. People also tend to notice the prices of things they buy often, such as milk or petrol, and to overlook the falling prices of items they buy rarely, such as televisions. As a result, surveys regularly find that members of the public believe inflation to be higher than the official measure.</p>
          <p><span class="passage-letter">C</span> The basket itself must change over time. Statistics offices review it regularly, adding items that have become common and removing ones that have fallen out of use. They must also deal with changes in quality. If a new phone costs the same as last year's model but has a better camera and more memory, its price has, in a sense, fallen. Adjusting for such improvements is one of the most difficult and debated parts of the process, and critics argue that it can make inflation appear lower than people feel it to be.</p>
          <p><span class="passage-letter">D</span> For savers, inflation is a quiet form of loss. Money kept in an account paying 2 per cent interest grows in nominal terms, but if prices are rising by 4 per cent a year, the same money buys less at the end of the year than at the start. Economists distinguish between this nominal return and the real return, which is roughly the interest rate minus the inflation rate. A real return can be negative even when the balance on a bank statement is growing, and over many years the effect accumulates: at an inflation rate of 3 per cent, prices roughly double in less than twenty-five years.</p>
          <p><span class="passage-letter">E</span> Borrowers, by contrast, can benefit. The debt on a fixed-rate loan stays the same in money terms while wages and prices rise around it, so the burden of repayment shrinks in real terms. This is one reason why people who bought homes with fixed-rate mortgages during periods of high inflation sometimes found their repayments becoming easier to manage over time. The benefit depends, however, on incomes keeping pace with prices. If wages rise more slowly than inflation, as they often do at first, households feel poorer even while their debts are shrinking in real terms.</p>
          <p><span class="passage-letter">F</span> Most central banks today aim to keep inflation low and stable rather than at zero, and a target of around 2 per cent is common. A small positive rate is preferred partly because the official measure may overstate true inflation slightly, and partly because falling prices, known as deflation, can be harmful. If people expect goods to be cheaper next month, they may postpone purchases, which reduces demand and can push businesses to cut jobs. The main tool for keeping inflation near the target is the interest rate. Raising rates makes borrowing more expensive and saving more attractive, which tends to slow spending and, eventually, price rises.</p>
          <p><span class="passage-letter">G</span> What can individuals do? No strategy offers complete protection, but some reduce the damage. Comparing savings accounts regularly, rather than leaving money in one that pays little, narrows the gap between interest and inflation. Some governments issue inflation-linked bonds, whose payments rise with the price index. Over long periods, a diversified investment in shares has historically outpaced inflation, although its value can fall sharply in the short term and it is unsuitable for money that may be needed soon. Above all, understanding the difference between nominal and real figures helps people judge whether a pay rise or an interest rate is as generous as it sounds.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching', instructions: 'Reading Passage 2 has seven paragraphs, A–G. Which paragraph contains the following information? NB You may use any letter more than once.',
            options: [
              { value: 'A', label: 'Paragraph A' },
              { value: 'B', label: 'Paragraph B' },
              { value: 'C', label: 'Paragraph C' },
              { value: 'D', label: 'Paragraph D' },
              { value: 'E', label: 'Paragraph E' },
              { value: 'F', label: 'Paragraph F' },
              { value: 'G', label: 'Paragraph G' },
            ],
            questions: [
              { number: 14, text: 'an explanation of why prices that fall are not always welcome', evidence: 'If people expect goods to be cheaper next month, they may postpone purchases' },
              { number: 15, text: "a reason why people's estimates of inflation are often too high", evidence: 'to overlook the falling prices of items they buy rarely, such as televisions' },
              { number: 16, text: 'a description of how the importance of each item in a price index is decided', evidence: 'Each item is given a weight according to how much a typical household spends on it' },
              { number: 17, text: 'an example of a product whose price may effectively drop without changing', evidence: 'its price has, in a sense, fallen' },
              { number: 18, text: 'a warning that a growing account balance can be misleading', evidence: 'A real return can be negative even when the balance on a bank statement is growing' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 19, text: 'According to the writer, people with fixed-rate loans gain from inflation only if', evidence: 'The benefit depends, however, on incomes keeping pace with prices.', options: [{ value: 'A', label: 'interest rates rise at the same time.' }, { value: 'B', label: 'their incomes rise roughly in line with prices.' }, { value: 'C', label: 'they repay the loan before it is due.' }, { value: 'D', label: 'they borrowed during a period of deflation.' }] },
              { number: 20, text: 'Which of the following is given as a reason for preferring a small positive inflation rate to zero?', evidence: 'the official measure may overstate true inflation slightly', options: [{ value: 'A', label: 'It encourages households to save more.' }, { value: 'B', label: 'The official figure may slightly exaggerate how fast prices are rising.' }, { value: 'C', label: 'It ensures that wages rise faster than prices.' }, { value: 'D', label: 'It makes fixed-rate mortgages cheaper to arrange.' }] },
              { number: 21, text: 'What does the writer say about adjusting prices for improvements in quality?', evidence: 'Adjusting for such improvements is one of the most difficult and debated parts of the process', options: [{ value: 'A', label: 'It is applied only to electronic goods.' }, { value: 'B', label: 'It is a matter of disagreement.' }, { value: 'C', label: 'It makes inflation appear higher than it really is.' }, { value: 'D', label: 'It has been abandoned by most statistics offices.' }] },
              { number: 22, text: 'According to the writer, a diversified investment in shares', evidence: 'a diversified investment in shares has historically outpaced inflation', options: [{ value: 'A', label: 'guarantees protection against rising prices.' }, { value: 'B', label: 'is a suitable place for emergency savings.' }, { value: 'C', label: 'has a record of beating inflation over long periods.' }, { value: 'D', label: 'carries less risk than a savings account.' }] },
            ],
          },
          {
            id: 'r2c', type: 'mcq-multi', instructions: 'Which TWO effects of raising interest rates are mentioned in the passage? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'Borrowing becomes more costly.' },
              { value: 'B', label: 'Wages begin to rise more quickly.' },
              { value: 'C', label: 'Saving becomes more appealing.' },
              { value: 'D', label: 'The basket of goods is revised.' },
              { value: 'E', label: 'Prices start to fall immediately.' },
            ],
            questions: [
              { number: 23, evidence: 'Raising rates makes borrowing more expensive and saving more attractive' },
              { number: 24, evidence: 'Raising rates makes borrowing more expensive and saving more attractive' },
            ],
          },
          {
            id: 'r2d', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 25, text: 'What kind of bonds make payments that rise with the price index?', evidence: 'Some governments issue inflation-linked bonds, whose payments rise with the price index.' },
              { number: 26, text: 'What term describes, approximately, the interest rate minus the inflation rate?', evidence: 'the real return, which is roughly the interest rate minus the inflation rate' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Open-plan offices: the collaboration that never came',
        html: `
          <p>Walk into almost any modern workplace and you are likely to find rows of desks with no walls between them. The open-plan office is usually justified on two grounds. The first is cost: removing private offices allows more people to be fitted into the same floor area, and rent is among the largest expenses a company faces. The second, and the one more often emphasised by managers and designers, is collaboration. If colleagues can see one another, the argument runs, they will talk more, share ideas freely and solve problems together. It is this second claim that has come under increasing scrutiny.</p>
          <p>Some of the most striking evidence comes from a study published in 2018 by researchers at Harvard Business School, who followed employees at two large companies before and after they moved from individual cubicles into open-plan spaces. Instead of relying on questionnaires, the researchers asked staff to wear sensors that recorded when they were speaking face to face with someone else, and they also collected data on emails and instant messages. After the move, face-to-face interaction fell sharply, while electronic communication rose. Far from bringing people together, removing the walls seemed to drive them into their inboxes.</p>
          <p>Why should this happen? One explanation is that people value privacy and, when it is taken away, they create it in other ways. Employees in open offices often wear headphones as a signal that they do not wish to be disturbed, and they may avoid conversations that could be overheard by a dozen colleagues. A quick question that might once have been asked across a desk is typed into a message instead. In this sense, the open-plan office can produce a crowded room full of people who are, in effect, working alone.</p>
          <p>Noise is the most common complaint. Surveys of office workers consistently place it at or near the top of their list of frustrations, and the most distracting sound is not general background noise but speech that can be understood. When we hear a conversation clearly, part of our attention is drawn to it whether we wish it or not, which makes tasks such as writing or careful reading more difficult. Ironically, the conversations that open plans are meant to encourage are precisely what make concentration hardest for everyone else.</p>
          <p>There are other costs as well. Some research has linked open-plan offices with higher rates of sickness absence. This is plausible, given that infections spread more easily when many people share the same air and surfaces, although such studies cannot always separate the effect of the layout from other differences between workplaces. Workers also report feeling observed, and a sense of being constantly watched can make some people reluctant to take breaks or to make phone calls about personal matters.</p>
          <p>None of this means that a return to corridors of closed offices is the answer. Private offices can isolate people, and some kinds of work genuinely do benefit from easy contact, particularly among small teams working on a shared project. Many organisations have therefore moved towards what is sometimes called activity-based working, in which staff do not have fixed desks but choose among different spaces according to the task: quiet rooms for concentrated work, booths for phone calls and open areas for discussion. The approach can work well, but only if there are enough quiet spaces. Where they are scarce, employees end up hunting for somewhere to sit, and the arrangement becomes little more than an open-plan office with fewer desks.</p>
          <p>The deeper lesson may be that interaction cannot simply be designed into a building. People talk to colleagues when they have a reason to, when they trust one another and when they can do so without disturbing others. A layout that ignores the need for concentration is likely to reduce the quality of work without delivering the collaboration it promised. The most effective offices are probably those that give people a real choice between being together and being left alone.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Saving money on floor space is the justification for open-plan offices that managers stress most.', evidence: 'The second, and the one more often emphasised by managers and designers, is collaboration.' },
              { number: 28, text: 'The Harvard researchers found that employees produced less work after the move to open-plan spaces.' },
              { number: 29, text: 'Wearing headphones is one way in which employees in open offices recover some privacy.', evidence: 'Employees in open offices often wear headphones as a signal that they do not wish to be disturbed' },
              { number: 30, text: 'General background noise is as distracting as speech that can be understood.', evidence: 'the most distracting sound is not general background noise but speech that can be understood' },
              { number: 31, text: 'It has been firmly established that open-plan layouts are the cause of higher sickness absence.', evidence: 'such studies cannot always separate the effect of the layout from other differences between workplaces' },
            ],
          },
          {
            id: 'r3b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Measuring and redesigning the office</strong></p>
              <p>In the 2018 study, employees wore {{32}} so that the researchers could record conversations held in person. Partly in response to findings like these, some employers have introduced activity-based working. Under this system, staff have no fixed {{33}}; instead, they select a space that suits the {{34}} they are doing, for example {{35}} when they need to make phone calls. The system fails, however, when quiet spaces are {{36}}.</p>`,
            questions: [
              { number: 32, evidence: 'the researchers asked staff to wear sensors that recorded when they were speaking face to face with someone else' },
              { number: 33, evidence: 'staff do not have fixed desks' },
              { number: 34, evidence: 'choose among different spaces according to the task' },
              { number: 35, evidence: 'booths for phone calls' },
              { number: 36, evidence: 'Where they are scarce, employees end up hunting for somewhere to sit' },
            ],
          },
          {
            id: 'r3c', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: officeEndings,
            questions: [
              { number: 37, text: 'In the Harvard study, removing the walls between desks', evidence: 'removing the walls seemed to drive them into their inboxes' },
              { number: 38, text: 'A conversation that can be heard clearly', evidence: 'part of our attention is drawn to it whether we wish it or not, which makes tasks such as writing or careful reading more difficult' },
              { number: 39, text: 'Private offices', evidence: 'Private offices can isolate people' },
              { number: 40, text: 'Small teams working on a shared project', evidence: 'some kinds of work genuinely do benefit from easy contact, particularly among small teams working on a shared project' },
            ],
          },
        ],
      },
    ],
  },
}
