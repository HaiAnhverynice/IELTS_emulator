import type { IeltsTest, Option } from '../../types'

// Original reading practice test 18 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const savingHeadings: Option[] = [
  { value: 'i', label: 'Treating identical money differently' },
  { value: 'ii', label: 'How banks set interest rates' },
  { value: 'iii', label: 'Why losses loom larger than gains' },
  { value: 'iv', label: 'A puzzle that low incomes cannot fully explain' },
  { value: 'v', label: 'Practical steps for ordinary savers' },
  { value: 'vi', label: 'The influence of advertising on spending' },
  { value: 'vii', label: 'Changing the default to change behaviour' },
  { value: 'viii', label: 'Preferring a reward now to a better one later' },
  { value: 'ix', label: "Committing today to save from tomorrow's income" },
  { value: 'x', label: 'Governments that restrict credit cards' },
]

const studyEndings: Option[] = [
  { value: 'A', label: 'believed they would remember more than those who tested themselves.' },
  { value: 'B', label: 'produces results that fade quickly.' },
  { value: 'C', label: 'may succeed without deciding which method to use.' },
  { value: 'D', label: 'can fix mistakes firmly in memory.' },
  { value: 'E', label: 'may benefit from a short period of blocked practice.' },
  { value: 'F', label: 'usually score higher than students who use flashcards.' },
  { value: 'G', label: 'should avoid every form of testing.' },
]

export const practiceReading18: IeltsTest = {
  id: 'practice-reading-18',
  title: 'Practice Test 18 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'iv', 2: 'viii', 3: 'i', 4: 'iii', 5: 'vii', 6: 'ix', 7: 'v',
      8: 'A', 9: 'B', 10: 'C',
      11: 'FALSE', 12: 'TRUE', 13: 'NOT GIVEN',
      14: 'NO', 15: 'NO', 16: 'YES', 17: 'NOT GIVEN',
      18: ['other'], 19: ['different'], 20: ['encrypted'], 21: ['SIM'], 22: ['PIN'],
      23: 'B', 24: 'C', 25: 'A', 26: 'C',
      27: 'A', 28: 'B', 29: 'C', 30: 'D', 31: 'E',
      32: ['familiarity'], 33: ['expanding', 'expanding intervals'], 34: ['desirable difficulties'], 35: ['university students'],
      36: 'YES', 37: 'YES', 38: 'NOT GIVEN', 39: 'NO', 40: 'NO',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Why saving money is harder than it sounds',
        html: `
          <p><span class="passage-letter">A</span> Almost everyone agrees that saving is a good idea, yet surveys in many countries show that a large share of households could not cover an unexpected bill of a few hundred pounds without borrowing. For a long time economists explained this gap by pointing to low incomes, and that is certainly part of the story. But it cannot be the whole story, because people with comfortable salaries also save less than they say they intend to. A newer school of thought, known as behavioural economics, looks instead at the way human beings actually make decisions, which is often quite different from the way a perfectly rational calculator would.</p>
          <p><span class="passage-letter">B</span> The most important obstacle is probably what researchers call present bias: the tendency to give far more weight to rewards that arrive now than to rewards that arrive later. Offered a choice between a modest sum today and a somewhat larger sum in a year, many people take the money today, even when the implied rate of return would be far higher than anything a bank would pay. Crucially, the same people will often choose the larger, later sum when both options lie in the distant future. Present bias thus explains why we make sensible plans in January and abandon them in February.</p>
          <p><span class="passage-letter">C</span> A second obstacle is the way we mentally sort money into separate pots. Economists call this mental accounting. A person may keep a savings account earning almost no interest while carrying a credit card balance that charges a high rate, because the two feel like different kinds of money: one is for emergencies, the other is simply a debt to be paid off slowly. Likewise, a tax refund or a bonus tends to be treated as spare money and spent on treats, whereas the same sum earned through regular wages would have been set aside for bills. Since one pound is interchangeable with any other, these distinctions have no logic, but they exert a powerful influence on behaviour.</p>
          <p><span class="passage-letter">D</span> Third, the pain of losing something is felt more sharply than the pleasure of gaining the equivalent. This loss aversion makes it uncomfortable to reduce spending: a smaller restaurant budget feels like a loss, whereas the larger pension it might fund is an abstract future gain. It also helps to explain why many investors sell shares in a panic after prices fall, locking in losses that they might have recovered had they waited.</p>
          <p><span class="passage-letter">E</span> If willpower is unreliable, the most effective remedy may be to remove the need for it. Experiments with default options show that the choices people make depend heavily on what happens if they do nothing. When Britain introduced automatic enrolment into workplace pensions in 2012, employees were placed in a scheme unless they chose to leave. Participation rose sharply, even though workers remained free to opt out and the financial incentives were unchanged. Only the starting point had altered, but this was enough to bring millions of people into saving for the first time.</p>
          <p><span class="passage-letter">F</span> A related approach tackles present bias directly by making future commitments painless. In the Save More Tomorrow scheme designed by the economists Richard Thaler and Shlomo Benartzi, employees agree in advance to devote part of every future pay rise to their pension. Because the contributions come out of money they have not yet received, they never feel a reduction in take-home pay, and because they are enrolled automatically each time, they need no further effort. In the trials of the scheme, participants' saving rates rose steeply over several years.</p>
          <p><span class="passage-letter">G</span> None of this suggests that individuals are helpless. A few simple habits can bring the same effects within reach of anyone. Setting up a transfer to a separate account on the day wages arrive turns saving into the default and ensures that one is, in effect, paying oneself first. Giving the savings account a specific name or goal, such as a deposit for a flat, exploits mental accounting instead of fighting it. And reviewing spending only a few times a year, rather than obsessively, reduces the chance of the panicky decisions that loss aversion invites. The lesson is not that people are irrational, but that good financial behaviour is more likely when it is made easy.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: savingHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'But it cannot be the whole story, because people with comfortable salaries also save less than they say they intend to.' },
              { number: 2, text: 'Paragraph B', evidence: 'the tendency to give far more weight to rewards that arrive now than to rewards that arrive later' },
              { number: 3, text: 'Paragraph C', evidence: 'A second obstacle is the way we mentally sort money into separate pots.' },
              { number: 4, text: 'Paragraph D', evidence: 'the pain of losing something is felt more sharply than the pleasure of gaining the equivalent' },
              { number: 5, text: 'Paragraph E', evidence: 'the choices people make depend heavily on what happens if they do nothing' },
              { number: 6, text: 'Paragraph F', evidence: 'employees agree in advance to devote part of every future pay rise to their pension' },
              { number: 7, text: 'Paragraph G', evidence: 'A few simple habits can bring the same effects within reach of anyone.' },
            ],
          },
          {
            id: 'r1b', type: 'mcq-multi', instructions: 'Which THREE of the following does the writer present as practical habits for ordinary savers? Choose THREE letters, A–F.',
            options: [
              { value: 'A', label: 'moving money to a separate account as soon as wages are paid' },
              { value: 'B', label: 'giving a savings account a specific name or goal' },
              { value: 'C', label: 'checking spending only a few times a year' },
              { value: 'D', label: 'looking at account balances every day' },
              { value: 'E', label: 'closing all credit card accounts' },
              { value: 'F', label: 'asking an employer for a larger pay rise' },
            ],
            questions: [
              { number: 8, evidence: 'Setting up a transfer to a separate account on the day wages arrive turns saving into the default' },
              { number: 9, evidence: 'Giving the savings account a specific name or goal' },
              { number: 10, evidence: 'reviewing spending only a few times a year, rather than obsessively' },
            ],
          },
          {
            id: 'r1c', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 11, text: 'Economists have always believed that low saving is caused entirely by low incomes.', evidence: 'But it cannot be the whole story' },
              { number: 12, text: 'Some people turn down a return that is higher than a bank would offer.', evidence: 'even when the implied rate of return would be far higher than anything a bank would pay' },
              { number: 13, text: 'The Save More Tomorrow scheme was first tried in Britain.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Rethinking the password',
        html: `
          <p>For decades, the advice on passwords hardly varied: include a capital letter, a number and a symbol, and change it every ninety days. Many organisations still enforce such rules. Yet in 2017 Bill Burr, the official who had drafted the original recommendations at the US National Institute of Standards and Technology, admitted that much of his advice had been misguided. Revised guidance from the same institute now takes almost the opposite approach.</p>
          <p>The problem with complexity rules is that they target the wrong thing. People faced with them do not invent random strings; they take a familiar word and apply predictable tricks, capitalising the first letter, replacing an a with an @ sign and adding a 1 or an exclamation mark at the end. Attackers know these habits and build them into their software, so a password that looks complicated to a human may fall in seconds. Forced regular changes make matters worse: a person required to replace Summer2024! tends to choose Autumn2024!, a variation that any attacker who has seen the first one can guess easily.</p>
          <p>What actually makes a password hard to crack is not complexity but unpredictability, which in practice means length. Each extra character multiplies the number of possibilities an attacker must try. A passphrase of four or five unrelated words, such as copper ladder violin harbour, is both longer and easier to remember than a short string of symbols, and it is far harder to guess, provided that the words are chosen at random and not taken from a famous quotation or a well-known saying.</p>
          <p>Length does not help, however, if a password is reused. When a website suffers a data breach, the stolen details are often traded and then tried automatically on other services, a technique called credential stuffing. Someone who uses the same password for a hobby forum and for online banking is only as safe as the weakest site. For this reason security specialists regard reuse as a greater danger than a modest password, and they recommend a different credential for every account.</p>
          <p>Since nobody can memorise dozens of unique passphrases, password managers have become the standard solution. These programs generate long random passwords, store them in an encrypted vault and fill them in automatically, so the user needs to remember only one strong master passphrase. Critics point out that a manager concentrates risk in a single place, and that a poorly chosen master passphrase would expose everything. Defenders reply that the vault is encrypted and that the alternative, which is reuse across accounts, is demonstrably worse. A further benefit is that managers fill in details only on the genuine website address, which can protect users from phishing pages that imitate real ones.</p>
          <p>Even the best password can be stolen, so a second factor adds an essential layer. The most common forms are a code sent by text message, a code generated by an authentication app, and a physical security key. Text messages are better than nothing, but they can be intercepted if an attacker persuades a mobile operator to transfer a victim's number to a new SIM card. App-based codes avoid this weakness, and security keys, which cryptographically verify the site's address, are considered the strongest option for ordinary users because they cannot be fooled by a convincing fake.</p>
          <p>None of this means that passwords are about to disappear, although technology companies are promoting passkeys, which replace the password with a cryptographic key stored on the user's device and unlocked by a fingerprint, face scan or PIN. Because there is no secret to type, there is nothing for a phishing page to capture. Adoption is growing, but for the moment most people will continue to use a mix of passwords and second factors, and the sensible course is to make each as strong as possible.</p>`,
        groups: [
          {
            id: 'r2a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 14, text: 'Bill Burr still defends the rules he drafted for password creation.', evidence: 'admitted that much of his advice had been misguided' },
              { number: 15, text: 'Replacing letters with symbols makes a password significantly harder for attackers to guess.', evidence: 'Attackers know these habits and build them into their software' },
              { number: 16, text: 'A random four-word passphrase is harder to guess than a short string of symbols.', evidence: 'it is far harder to guess, provided that the words are chosen at random' },
              { number: 17, text: 'Most data breaches are caused by employees who reuse passwords.' },
            ],
          },
          {
            id: 'r2b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Passwords and second factors</strong></p>
              <ul>
                <li>Details stolen in a breach are often tried automatically on {{18}} services.</li>
                <li>Specialists recommend a {{19}} credential for every account.</li>
                <li>A password manager keeps passwords in an {{20}} vault.</li>
                <li>Text-message codes can be intercepted if a victim's number is moved to a new {{21}} card.</li>
                <li>Passkeys are unlocked by a fingerprint, face scan or {{22}}.</li>
              </ul>`,
            questions: [
              { number: 18, evidence: 'the stolen details are often traded and then tried automatically on other services' },
              { number: 19, evidence: 'they recommend a different credential for every account' },
              { number: 20, evidence: 'store them in an encrypted vault' },
              { number: 21, evidence: "transfer a victim's number to a new SIM card" },
              { number: 22, evidence: 'unlocked by a fingerprint, face scan or PIN' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 23, text: 'What does the writer suggest about password complexity rules?', evidence: 'they take a familiar word and apply predictable tricks', options: [{ value: 'A', label: 'They are too difficult for most people to follow.' }, { value: 'B', label: 'They lead people to choose predictable patterns.' }, { value: 'C', label: 'They are ignored by most organisations.' }] },
              { number: 24, text: 'Why do forced regular changes make matters worse?', evidence: 'a person required to replace Summer2024! tends to choose Autumn2024!', options: [{ value: 'A', label: 'People forget the new password.' }, { value: 'B', label: 'Attackers prefer recently changed passwords.' }, { value: 'C', label: 'New passwords are often slight variations of old ones.' }] },
              { number: 25, text: 'What is the writer\u2019s view of password reuse?', evidence: 'security specialists regard reuse as a greater danger than a modest password', options: [{ value: 'A', label: 'It is more dangerous than a fairly weak password.' }, { value: 'B', label: 'It is acceptable on unimportant sites.' }, { value: 'C', label: 'It is safe as long as the password is long.' }] },
              { number: 26, text: 'Security keys are considered the strongest option because they', evidence: 'they cannot be fooled by a convincing fake', options: [{ value: 'A', label: 'do not need a mobile network.' }, { value: 'B', label: 'are the easiest to set up.' }, { value: 'C', label: 'cannot be fooled by a convincing fake.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'How to study so that it sticks',
        html: `
          <p><span class="passage-letter">A</span> Students have always been advised to study harder, but cognitive psychologists have spent more than a century investigating something more useful: how to study better. Their findings are strikingly consistent and, in many cases, contradict what students actually do. Surveys indicate that the most popular techniques are re-reading notes and highlighting key passages. Both feel productive, yet experimental evidence suggests that they produce disappointing results compared with other methods.</p>
          <p><span class="passage-letter">B</span> The reason lies in what psychologists call the illusion of fluency. Text that has just been read feels familiar, and familiarity is easily mistaken for knowledge. A student who has read a chapter three times can recognise the content on the page, but recognition is a much easier task than recall, and an examination typically demands the latter. The feeling of understanding, in other words, is a poor guide to what has actually been learned.</p>
          <p><span class="passage-letter">C</span> A far more effective approach is retrieval practice, which means trying to recall information from memory without looking at the source. This can be done with flashcards, with blank-page summaries written after closing the book, or with practice questions. In a well-known experiment by Henry Roediger and Jeffrey Karpicke in 2006, students who studied a passage once and then took repeated recall tests remembered considerably more a week later than students who re-read the passage several times, even though the re-readers had predicted that they would do better. Retrieval, it appears, is not merely a way of measuring memory but a way of strengthening it.</p>
          <p><span class="passage-letter">D</span> The second powerful technique is spacing. Information reviewed in several short sessions spread over days or weeks is retained far longer than the same total time spent in one sitting, as in the familiar all-night cramming session. Cramming can produce a respectable result on the following morning, but the knowledge fades quickly, because memories that are revisited just as they begin to fade are strengthened more than those revisited while still fresh. Many learners now use software that schedules reviews at expanding intervals, so that an item answered correctly is shown again after a day, then a week, then a month, whereas one answered incorrectly returns sooner.</p>
          <p><span class="passage-letter">E</span> A third principle is interleaving, in which different topics or types of problem are mixed together instead of being practised in blocks. A mathematics student who does twenty problems of the same kind in a row can usually solve them by repeating a method without having to decide which method is appropriate. When problem types are mixed, the student must first identify what each question requires. Practice feels slower and more frustrating, and in studies learners often rate it as less effective, yet they perform better on later tests. Researchers describe such obstacles as desirable difficulties: struggles that make learning feel harder in the short term but that improve long-term retention.</p>
          <p><span class="passage-letter">F</span> These methods do have limits. Retrieval practice works best when learners get feedback, since recalling an error confidently can embed it. Spacing requires planning, and a student who begins revision a week before an examination has no time to space anything. Interleaving can overwhelm beginners who have not yet grasped the basics of each topic; for them, a short initial period of blocked practice is sensible. Moreover, most studies have been conducted with university students on tasks such as vocabulary and factual material, and it is less clear how far the results extend to complex skills.</p>
          <p><span class="passage-letter">G</span> For students who want to apply this research, the implications are simple, if uncomfortable. Replace some re-reading with self-testing; divide study into short sessions that are spread across weeks; and mix topics rather than finishing one before starting the next. All three feel less comfortable than conventional methods, and that discomfort is a sign not of failure but that the work is doing its job. Teachers can help by setting low-stakes quizzes, returning to older material in later lessons and explaining to students why struggle is useful.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: studyEndings,
            questions: [
              { number: 27, text: 'Students who re-read a passage several times', evidence: 'even though the re-readers had predicted that they would do better' },
              { number: 28, text: 'Studying through an all-night cramming session', evidence: 'Cramming can produce a respectable result on the following morning, but the knowledge fades quickly' },
              { number: 29, text: 'A student who solves twenty identical problems in a row', evidence: 'can usually solve them by repeating a method without having to decide which method is appropriate' },
              { number: 30, text: 'Retrieval practice carried out without feedback', evidence: 'recalling an error confidently can embed it' },
              { number: 31, text: 'Beginners who have not yet grasped the basics of a topic', evidence: 'for them, a short initial period of blocked practice is sensible' },
            ],
          },
          {
            id: 'r3b', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 32, text: 'What is easily mistaken for knowledge when text has just been read?', evidence: 'familiarity is easily mistaken for knowledge' },
              { number: 33, text: 'At what kind of intervals do some programs schedule reviews?', evidence: 'schedules reviews at expanding intervals' },
              { number: 34, text: 'What term do researchers use for struggles that improve long-term retention?', evidence: 'Researchers describe such obstacles as desirable difficulties' },
              { number: 35, text: 'With which group of people have most of the studies been carried out?', evidence: 'most studies have been conducted with university students' },
            ],
          },
          {
            id: 'r3c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 36, text: 'Re-reading and highlighting are the study methods that students most often use.', evidence: 'the most popular techniques are re-reading notes and highlighting key passages' },
              { number: 37, text: 'Testing oneself can strengthen memory as well as measure it.', evidence: 'Retrieval, it appears, is not merely a way of measuring memory but a way of strengthening it.' },
              { number: 38, text: 'Schools should ban all-night cramming sessions.' },
              { number: 39, text: 'Learners generally rate interleaved practice as more effective than blocked practice.', evidence: 'in studies learners often rate it as less effective, yet they perform better on later tests' },
              { number: 40, text: 'The research findings apply equally well to complex skills and to factual material.', evidence: 'it is less clear how far the results extend to complex skills' },
            ],
          },
        ],
      },
    ],
  },
}
