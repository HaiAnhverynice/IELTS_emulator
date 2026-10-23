import type { IeltsTest, Option } from '../../types'

// Original reading practice test 29 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const cleaningMethods: Option[] = [
  { value: 'A', label: 'soap and water' },
  { value: 'B', label: 'alcohol-based hand sanitiser' },
  { value: 'C', label: 'antibacterial soap' },
  { value: 'D', label: 'electric hand dryers' },
]

const transportHeadings: Option[] = [
  { value: 'i', label: 'Who the new passengers turn out to be' },
  { value: 'ii', label: 'A scheme that failed because nobody used it' },
  { value: 'iii', label: 'An idea with wide appeal and unexpected results' },
  { value: 'iv', label: 'Arguments about money on both sides' },
  { value: 'v', label: 'Why drivers refuse to give up their cars entirely' },
  { value: 'vi', label: 'What really discourages people from taking the bus' },
  { value: 'vii', label: 'Three different approaches in Europe' },
  { value: 'viii', label: 'The environmental benefits of electric buses' },
  { value: 'ix', label: 'Local successes and a better question to ask' },
]

const notesEndings: Option[] = [
  { value: 'A', label: 'may learn more than one who copies slides by hand.' },
  { value: 'B', label: 'is most easily produced with a laptop.' },
  { value: 'C', label: 'has been proven to raise exam results.' },
  { value: 'D', label: 'removes a distraction but disadvantages some students.' },
  { value: 'E', label: 'may be made to stand out if they alone are allowed laptops.' },
  { value: 'F', label: 'forms part of an approach the writer prefers to a ban.' },
  { value: 'G', label: 'is the only reliable way to prevent distraction.' },
  { value: 'H', label: 'should be required of all students.' },
]

export const practiceReading29: IeltsTest = {
  id: 'practice-reading-29',
  title: 'Practice Test 29 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'FALSE', 3: 'TRUE', 4: 'FALSE', 5: 'NOT GIVEN', 6: 'TRUE',
      7: 'B', 8: 'A', 9: 'C', 10: 'B',
      11: ['chlorinated lime'], 12: ['fingertips', 'the fingertips'], 13: ['damp skin', 'damp'],
      14: 'iii', 15: 'vii', 16: 'i', 17: 'vi', 18: 'iv', 19: 'ix',
      20: 'B', 21: 'D',
      22: ['registered'], 23: ['first-class', 'first class'], 24: ['nine', '9'], 25: ['traffic'], 26: ['register'],
      27: 'YES', 28: 'NO', 29: 'NO', 30: 'NOT GIVEN', 31: 'YES',
      32: 'B', 33: 'D', 34: 'A', 35: 'C',
      36: 'B', 37: 'A', 38: 'D', 39: 'E', 40: 'F',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Clean hands: what soap, sanitiser and towels really do',
        html: `
          <p>In 1847, a young doctor working in a maternity hospital in Vienna noticed something disturbing. Women who gave birth on the ward staffed by doctors and medical students were dying of fever far more often than those on a ward run by midwives. Ignaz Semmelweis suspected that the doctors, who often came straight from performing post-mortem examinations, were carrying something on their hands. When he required staff to wash their hands in a solution of chlorinated lime, deaths on the ward fell dramatically. Many of his colleagues rejected his conclusions, and the importance of handwashing was not widely accepted until after his death, when the work of later scientists showed that diseases could be spread by microorganisms.</p>
          <p>Today the principle is taught to every schoolchild, but the details are less well understood. Soap does not work mainly by killing germs. Its molecules have one end that is attracted to water and another that is attracted to oils and fats. When hands are rubbed with soap and water, these molecules surround the greasy dirt to which microbes cling and allow it to be carried away by the water. Some viruses, including those that cause influenza, are enclosed in a fatty outer layer, and soap can break this layer apart, destroying the virus. For other germs, the main effect is simple removal.</p>
          <p>Because removal depends on friction, the length and thoroughness of washing matter more than many people assume. Health bodies commonly recommend rubbing the hands together with soap for at least 20 seconds, and the World Health Organization describes a full procedure, including rinsing and drying, lasting 40 to 60 seconds. The areas most often missed are the thumbs, the fingertips and the backs of the hands. By contrast, the temperature of the water makes surprisingly little difference. Water hot enough to kill bacteria would scald the skin, and studies comparing warm and cold water have found little difference in the number of germs removed, so comfortable water is perfectly adequate.</p>
          <p>Drying is the step most often treated as optional, yet it is part of the process. Damp skin transfers microorganisms far more readily than dry skin, so hands that are washed but left wet may pick up and pass on germs from the next surface they touch. Whether paper towels or electric dryers are better has been the subject of considerable research, much of it funded by manufacturers of one or the other, and the results are not easy to compare. What is clear is that hands should be dried completely.</p>
          <p>Alcohol-based hand sanitiser has become a familiar sight in hospitals, offices and shops. Products containing at least 60 per cent alcohol are effective against many bacteria and viruses and are convenient where there is no sink. However, they have important limitations. They work poorly on hands that are visibly dirty or greasy, because they cannot remove the dirt itself. They are also less effective against certain germs, including norovirus, a common cause of vomiting outbreaks, and the spores of some bacteria. In those situations, washing with soap and water remains the better choice.</p>
          <p>Finally, there is the question of antibacterial soap. It might seem logical that a soap designed to kill bacteria would be superior to an ordinary one. In 2016, however, the United States Food and Drug Administration banned a number of antibacterial ingredients, including triclosan, from washes sold to consumers, because manufacturers had not shown that their products prevented illness better than plain soap and water. There were also concerns about whether their widespread use might contribute to bacterial resistance. For everyday purposes, the cheapest bar of soap, used properly, does the job.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Semmelweis observed that more women died on the ward run by midwives.', evidence: 'were dying of fever far more often than those on a ward run by midwives' },
              { number: 2, text: "Semmelweis's ideas were quickly adopted by other doctors.", evidence: 'Many of his colleagues rejected his conclusions, and the importance of handwashing was not widely accepted until after his death' },
              { number: 3, text: 'Soap is capable of destroying some kinds of virus.', evidence: 'soap can break this layer apart, destroying the virus' },
              { number: 4, text: 'Washing in hot water removes significantly more germs than washing in cold water.', evidence: 'studies comparing warm and cold water have found little difference in the number of germs removed' },
              { number: 5, text: 'Most people wash their hands for less than the recommended time.' },
              { number: 6, text: 'Some research into hand-drying methods was paid for by companies with an interest in the results.', evidence: 'much of it funded by manufacturers of one or the other' },
            ],
          },
          {
            id: 'r1b', type: 'matching', instructions: 'Classify the following statements as referring to A, B, C or D. You may use any letter more than once.',
            options: cleaningMethods,
            questions: [
              { number: 7, text: 'It is useful in places where no sink is available.', evidence: 'are convenient where there is no sink' },
              { number: 8, text: 'It is the better option when dealing with norovirus.', evidence: 'In those situations, washing with soap and water remains the better choice.' },
              { number: 9, text: 'Some of its ingredients were banned from consumer products in one country.', evidence: 'banned a number of antibacterial ingredients, including triclosan, from washes sold to consumers' },
              { number: 10, text: 'It is unable to take dirt off the skin.', evidence: 'because they cannot remove the dirt itself' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 11, text: 'What did Semmelweis require hospital staff to wash their hands in?', evidence: 'wash their hands in a solution of chlorinated lime' },
              { number: 12, text: 'Apart from the thumbs and the backs of the hands, which part of the hands is often missed?', evidence: 'The areas most often missed are the thumbs, the fingertips and the backs of the hands.' },
              { number: 13, text: 'What transfers microorganisms far more readily than dry skin?', evidence: 'Damp skin transfers microorganisms far more readily than dry skin' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Is free public transport worth the price?',
        html: `
          <p><span class="passage-letter">A</span> Few transport policies sound as appealing as abolishing fares altogether. Free buses and trams, supporters argue, would help households with the cost of living, persuade drivers to leave their cars at home, cut congestion and pollution, and make cities fairer. A growing number of places have tried the idea, from small towns to entire countries, and their experience suggests that the results are real but rather different from what many campaigners expect.</p>
          <p><span class="passage-letter">B</span> The largest experiments so far are in Europe. In 2013, Tallinn, the capital of Estonia, made public transport free for its registered residents, although visitors still have to buy tickets. In 2020, Luxembourg became the first country to make all public transport free nationwide, with the exception of first-class rail travel. Germany took a different route: in the summer of 2022 it offered a monthly ticket valid on local and regional transport throughout the country for nine euros, and later introduced a permanent national ticket at a higher, but still low, monthly price.</p>
          <p><span class="passage-letter">C</span> These schemes did attract more passengers, but the details matter. Studies of fare-free systems have repeatedly found that a considerable share of the new journeys are made by people who would otherwise have walked or cycled, or who would not have travelled at all. Fewer come from people who would have driven. From a social point of view, the extra trips are not worthless, since they may allow people on low incomes to reach work, education or friends more easily. But a policy justified mainly as a way of reducing car traffic may find that its effect on traffic is modest.</p>
          <p><span class="passage-letter">D</span> The reason is that, for most drivers, the fare is not the main obstacle. A person deciding whether to take the bus is more likely to be put off by a service that runs only twice an hour, takes much longer than driving, or does not go where they need to go. Surveys and transport models generally suggest that passengers respond more strongly to improvements in frequency, speed and reliability than to cuts in price. A driver who already pays for fuel, insurance and parking may hardly notice the saving from a free ticket, whereas a bus every five minutes changes the whole calculation.</p>
          <p><span class="passage-letter">E</span> There is also the matter of cost. Fares rarely cover the full cost of running a network, but in many cities they still provide a substantial part of its income. When they are removed, that money must come from taxes or other sources, and if it is not replaced, the service may deteriorate. The Belgian town of Hasselt offered free buses for many years before reintroducing fares because the scheme had become too expensive. Free travel can also lead to crowding, which makes the service less attractive to the very passengers it was meant to win. Supporters reply that collecting fares is itself costly, requiring ticket machines, staff and inspections, and that boarding is faster when no one needs to pay.</p>
          <p><span class="passage-letter">F</span> None of this means that free transport is a mistake. In Tallinn, the city's finances benefited because many people who had lived there without registering chose to register in order to travel free, and part of their income tax then went to the city. In a small, wealthy country like Luxembourg, fares had covered only a small fraction of the cost, so abolishing them was relatively affordable. The question, however, should perhaps be framed differently: not whether transport should be free, but what a given sum of public money would achieve. In a city where buses are infrequent and slow, spending it on better services may do more to reduce car use than spending it on removing fares. Where the service is already good, cheaper or free tickets may be the most effective way to fill it.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: transportHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'the results are real but rather different from what many campaigners expect' },
              { number: 15, text: 'Paragraph B', evidence: 'The largest experiments so far are in Europe.' },
              { number: 16, text: 'Paragraph C', evidence: 'a considerable share of the new journeys are made by people who would otherwise have walked or cycled' },
              { number: 17, text: 'Paragraph D', evidence: 'for most drivers, the fare is not the main obstacle' },
              { number: 18, text: 'Paragraph E', evidence: 'Supporters reply that collecting fares is itself costly' },
              { number: 19, text: 'Paragraph F', evidence: 'not whether transport should be free, but what a given sum of public money would achieve' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-multi', instructions: 'Which TWO points do supporters of free transport make in reply to concerns about cost? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'Free travel reduces crowding on buses.' },
              { value: 'B', label: 'Collecting fares has costs of its own.' },
              { value: 'C', label: 'Fares already cover the full cost of most networks.' },
              { value: 'D', label: 'Passengers can get on buses more quickly.' },
              { value: 'E', label: 'Free buses produce less pollution.' },
            ],
            questions: [
              { number: 20, evidence: 'collecting fares is itself costly, requiring ticket machines, staff and inspections' },
              { number: 21, evidence: 'boarding is faster when no one needs to pay' },
            ],
          },
          {
            id: 'r2c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p>In Tallinn, only {{22}} residents can travel without paying. Luxembourg's scheme covers all public transport except {{23}} rail travel. In 2022 Germany sold a monthly ticket for {{24}} euros. Because many new passengers would otherwise have walked, cycled or stayed at home, free fares often have only a small effect on {{25}}. Tallinn's finances improved because more people chose to {{26}} with the city.</p>`,
            questions: [
              { number: 22, evidence: 'made public transport free for its registered residents' },
              { number: 23, evidence: 'with the exception of first-class rail travel' },
              { number: 24, evidence: 'for nine euros' },
              { number: 25, evidence: 'its effect on traffic is modest' },
              { number: 26, evidence: 'chose to register in order to travel free' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Laptop or notebook? The debate over how students take notes',
        html: `
          <p>Walk into a university lecture theatre today and you will see rows of open laptops. Typing is faster than handwriting for most people, notes can be searched and shared, and nothing is lost when a page goes missing. It might seem obvious that the keyboard is the better tool. Yet for more than a decade, a lively debate has surrounded the question of whether students who write by hand actually learn more.</p>
          <p>Much of the debate began with a study published in 2014. Students watched short recorded talks and took notes either on a laptop or with pen and paper, and were then tested on what they had heard. Those using laptops wrote considerably more words, and a larger proportion of what they wrote repeated the speaker's words exactly. On factual questions the two groups performed similarly, but on questions that required them to understand and apply ideas, the handwriters did better. The researchers' explanation was that because handwriting is slow, it forces the note-taker to select, summarise and rephrase, and this processing helps learning. Typing, by contrast, allows students to record a lecture almost word for word without thinking much about it. Strikingly, telling laptop users not to copy word for word made little difference to how they behaved.</p>
          <p>The study attracted enormous attention, and it is easy to see why. It seemed to offer a simple rule that teachers could apply, and it confirmed a suspicion that many already held. But simple rules drawn from single studies deserve caution. When other researchers repeated the experiments, including in a large replication involving several universities, they generally confirmed that laptop users take longer and more word-for-word notes. The difference in test performance, however, was smaller than originally reported, and in some cases it could not be detected at all. The honest conclusion is that the advantage of handwriting, if it exists, is probably modest.</p>
          <p>A clearer case against laptops concerns not the method of note-taking but distraction. A computer connected to the internet offers messages, social media and shopping, all within a click of the lecture notes. In one experiment, students who were asked to carry out unrelated online tasks during a lecture scored lower on a later test than those who were not, which is perhaps unsurprising. More strikingly, students who simply sat where they could see a classmate's multitasking screen also scored lower, even though they had been using pen and paper themselves. A laptop, in other words, can affect people other than its owner.</p>
          <p>I would draw from this a lesson about what notes are for. If the aim is to produce a complete record, the laptop wins easily. If the aim is to understand the material, then what matters is the mental work done while taking notes, and that work can be done with either tool. A student who types a summary in their own words, pausing to connect new ideas with earlier ones, is probably doing better than one who copies slides by hand without thought. Some teachers deliberately leave gaps in printed handouts so that students must listen and complete them, which encourages exactly this kind of engagement.</p>
          <p>Banning laptops from lectures, as some teachers have done, is therefore a blunt instrument. It removes a source of distraction, but it also takes away a tool that some students depend on, including those who write slowly or find handwriting physically difficult, and it may single them out if exceptions are made. A better approach is to explain the evidence and let students choose, while asking those who use laptops to sit towards the back or to switch off their internet connection. In the end, the tool matters less than the habits of the person using it.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Notes typed on a laptop have some practical advantages over handwritten notes.', evidence: 'notes can be searched and shared, and nothing is lost when a page goes missing' },
              { number: 28, text: 'Instructing laptop users not to copy word for word changed their behaviour considerably.', evidence: 'telling laptop users not to copy word for word made little difference to how they behaved' },
              { number: 29, text: 'Later research showed that handwriting gives students a large advantage.', evidence: 'The honest conclusion is that the advantage of handwriting, if it exists, is probably modest.' },
              { number: 30, text: 'Students who take notes by hand are generally more motivated than those who type.' },
              { number: 31, text: "One student's use of a laptop can harm the learning of the people around them.", evidence: 'A laptop, in other words, can affect people other than its owner.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 32, text: 'According to the researchers in the 2014 study, why did handwriters perform better on some questions?',
                evidence: 'it forces the note-taker to select, summarise and rephrase, and this processing helps learning',
                options: [
                  { value: 'A', label: 'They wrote down more of what the speaker said.' },
                  { value: 'B', label: 'Writing slowly made them process the information.' },
                  { value: 'C', label: 'They were not distracted by the internet.' },
                  { value: 'D', label: 'They spent more time reviewing their notes.' },
                ],
              },
              {
                number: 33, text: 'Why, according to the writer, did the 2014 study become so well known?',
                evidence: 'It seemed to offer a simple rule that teachers could apply, and it confirmed a suspicion that many already held.',
                options: [
                  { value: 'A', label: 'It used an unusually large number of students.' },
                  { value: 'B', label: 'It was repeated successfully at several universities.' },
                  { value: 'C', label: 'It was the first study to test students on recorded talks.' },
                  { value: 'D', label: 'It gave an easy guideline and supported existing beliefs.' },
                ],
              },
              {
                number: 34, text: 'Which finding of the original study did later replications generally support?',
                evidence: 'they generally confirmed that laptop users take longer and more word-for-word notes',
                options: [
                  { value: 'A', label: 'Laptop users record more of a lecture word for word.' },
                  { value: 'B', label: 'Laptop users perform much worse on every kind of test.' },
                  { value: 'C', label: 'Handwriters remember more factual details.' },
                  { value: 'D', label: 'Instructions improve the quality of typed notes.' },
                ],
              },
              {
                number: 35, text: 'What point does the writer make about printed handouts with gaps?',
                evidence: 'which encourages exactly this kind of engagement',
                options: [
                  { value: 'A', label: 'They make note-taking unnecessary.' },
                  { value: 'B', label: 'They are more suitable for laptop users.' },
                  { value: 'C', label: 'They encourage the mental effort that supports understanding.' },
                  { value: 'D', label: 'They are less effective than complete handouts.' },
                ],
              },
            ],
          },
          {
            id: 'r3c', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–H, from the list below.',
            options: notesEndings,
            questions: [
              { number: 36, text: 'A complete record of a lecture', evidence: 'If the aim is to produce a complete record, the laptop wins easily.' },
              { number: 37, text: 'A student who types a summary in their own words', evidence: 'is probably doing better than one who copies slides by hand without thought' },
              { number: 38, text: 'Banning laptops from lectures', evidence: 'It removes a source of distraction, but it also takes away a tool that some students depend on' },
              { number: 39, text: 'Students who find handwriting physically difficult', evidence: 'it may single them out if exceptions are made' },
              { number: 40, text: 'Asking laptop users to sit towards the back', evidence: 'A better approach is to explain the evidence and let students choose, while asking those who use laptops to sit towards the back or to switch off their internet connection.' },
            ],
          },
        ],
      },
    ],
  },
}
