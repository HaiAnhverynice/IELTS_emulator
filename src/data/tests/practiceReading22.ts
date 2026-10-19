import type { IeltsTest, Option } from '../../types'

// Original reading practice test 22 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const dateHeadings: Option[] = [
  { value: 'i', label: 'The one date that concerns health' },
  { value: 'ii', label: 'A date that is mainly about taste and texture' },
  { value: 'iii', label: 'Dates that were never meant for shoppers' },
  { value: 'iv', label: 'Why the home matters as much as the label' },
  { value: 'v', label: 'Retailers experiment with fewer labels' },
  { value: 'vi', label: 'An overlooked cause of household waste' },
  { value: 'vii', label: 'Why households buy more food than they need' },
  { value: 'viii', label: 'How manufacturers calculate a date' },
  { value: 'ix', label: 'New laws to standardise labels worldwide' },
]

const paragraphOptions: Option[] = [
  { value: 'A', label: 'Paragraph A' },
  { value: 'B', label: 'Paragraph B' },
  { value: 'C', label: 'Paragraph C' },
  { value: 'D', label: 'Paragraph D' },
  { value: 'E', label: 'Paragraph E' },
  { value: 'F', label: 'Paragraph F' },
  { value: 'G', label: 'Paragraph G' },
]

export const practiceReading22: IeltsTest = {
  id: 'practice-reading-22',
  title: 'Practice Test 22 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'vi', 2: 'i', 3: 'ii', 4: 'iii', 5: 'iv', 6: 'v',
      7: 'FALSE', 8: 'FALSE', 9: 'NOT GIVEN', 10: 'TRUE',
      11: ['control'], 12: ['5', 'five'], 13: ['24', 'twenty-four'],
      14: 'B', 15: 'C', 16: 'B', 17: 'D',
      18: ['fluid'], 19: ['nerve'], 20: ['85', 'eighty-five'], 21: ['3', 'three'], 22: ['tinnitus'],
      23: 'YES', 24: 'NO', 25: 'NOT GIVEN', 26: 'YES',
      27: 'D', 28: 'C', 29: 'F', 30: 'G', 31: 'B',
      32: 'A', 33: 'C',
      34: ['behavioural', 'behavioural questions', 'behavioral', 'behavioral questions'],
      35: ['situational', 'situational questions'],
      36: ['names', 'their names'],
      37: 'NO', 38: 'NOT GIVEN', 39: 'YES', 40: 'NO',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Reading the date on food',
        html: `
          <p><span class="passage-letter">A</span> Walk past the bins of almost any residential street and you will find food that could have been eaten. Households in wealthy countries discard a considerable share of the food they buy, and studies of what is thrown away regularly find unopened packets alongside the peelings and leftovers. There are many reasons for this, from buying too much to cooking portions that are too large, but one cause that researchers keep returning to is confusion about the dates printed on packaging. Many shoppers treat any date as a deadline, after which the product must go in the bin. In fact, the different dates mean quite different things, and only one of them is a matter of safety.</p>
          <p><span class="passage-letter">B</span> In Britain and the European Union, the date that matters for health is the use by date. It appears on foods that spoil quickly and could make people ill if kept too long: fresh meat and fish, ready meals, smoked salmon and many dairy products. Food should not be eaten after its use by date, even if it looks and smells perfectly normal. This point is frequently misunderstood. Many people rely on their noses, but the bacteria responsible for food poisoning usually do not change the appearance or smell of food. A yoghurt that smells fine may still be unsafe, while one that smells sour may be harmless.</p>
          <p><span class="passage-letter">C</span> The best before date, by contrast, concerns quality rather than safety. It is used on foods with a longer life, such as dried pasta, rice, tinned vegetables, biscuits and frozen products. After the date has passed, crisps may be less crunchy and spices less fragrant, but the food is generally still safe to eat, provided it has been stored as the packet instructs and the packaging is undamaged. For these products, the senses are a reasonable guide: if a biscuit tastes stale, the only risk in eating it is disappointment.</p>
          <p><span class="passage-letter">D</span> Shoppers may also see dates marked sell by or display until. These are not intended for consumers at all. They help shop staff with stock control, telling them when to move products off the shelves, and several retailers have dropped them precisely because customers mistook them for safety warnings. The picture is more confusing still in the United States, where, apart from infant formula, federal rules do not require foods to carry a date at all. Manufacturers there use a variety of phrases, including best if used by, which leaves consumers to guess what each one means.</p>
          <p><span class="passage-letter">E</span> A date is only as reliable as the conditions in which the food is kept. A use by date assumes that the instructions on the pack have been followed, and these often contain a second deadline, such as eat within two days of opening, which overrides the printed date once the packet has been broken. Temperature matters too. Food safety authorities in Britain advise keeping fridges at 5 degrees Celsius or below, yet surveys suggest that many domestic fridges run warmer than this. Freezing offers a way out: food can be frozen at any point up to its use by date, because freezing pauses the growth of bacteria. It does not kill them, however, so once defrosted the food should be eaten within 24 hours.</p>
          <p><span class="passage-letter">F</span> Recognising that labels themselves can cause waste, several large British supermarkets have recently removed best before dates from many fresh fruits and vegetables, leaving customers to judge for themselves whether an apple or a carrot is still worth eating. One chain went further and replaced the use by date on its own-brand milk with a best before date, inviting customers to smell it before pouring it away. Supporters argue that such changes put trust back in the shopper. Sceptics reply that habits are hard to break and that the effect on waste has yet to be properly measured. What is clear is that the sniff test belongs only with best before products; for anything carrying a use by date, the printed date remains the only safe guide.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: dateHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'one cause that researchers keep returning to is confusion about the dates printed on packaging' },
              { number: 2, text: 'Paragraph B', evidence: 'the date that matters for health is the use by date' },
              { number: 3, text: 'Paragraph C', evidence: 'The best before date, by contrast, concerns quality rather than safety.' },
              { number: 4, text: 'Paragraph D', evidence: 'These are not intended for consumers at all.' },
              { number: 5, text: 'Paragraph E', evidence: 'A date is only as reliable as the conditions in which the food is kept.' },
              { number: 6, text: 'Paragraph F', evidence: 'several large British supermarkets have recently removed best before dates from many fresh fruits and vegetables' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 7, text: 'Food that has become dangerous to eat can usually be identified by its smell.', evidence: 'the bacteria responsible for food poisoning usually do not change the appearance or smell of food' },
              { number: 8, text: 'In the United States, most packaged foods are legally required to display a date.', evidence: 'apart from infant formula, federal rules do not require foods to carry a date at all' },
              { number: 9, text: 'Fruit and vegetables make up the largest share of the food that households throw away.' },
              { number: 10, text: 'Unopened pasta that is past its best before date may still be safe to eat.', evidence: 'the food is generally still safe to eat, provided it has been stored as the packet instructs and the packaging is undamaged' },
            ],
          },
          {
            id: 'r1c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'Sell by and display until dates are intended to help shops with stock ___.', evidence: 'They help shop staff with stock control' },
              { number: 12, text: 'British authorities recommend that fridges should be no warmer than ___ degrees Celsius.', evidence: 'advise keeping fridges at 5 degrees Celsius or below' },
              { number: 13, text: 'Because freezing does not kill bacteria, defrosted food should be eaten within ___ hours.', evidence: 'once defrosted the food should be eaten within 24 hours' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Turn it down: headphones and the ear',
        html: `
          <p>Personal audio has transformed the way people listen. Earphones that once came out for a train journey now stay in for much of the day, at the desk, in the gym and on the walk home. Health organisations have warned that a large number of young people are putting their hearing at risk through unsafe listening habits. Part of the difficulty is that the danger is easy to ignore. Noise damage rarely hurts, and it builds up so gradually that most people do not notice it until it is well advanced.</p>
          <p>To understand the risk, it helps to know how hearing works. Sound waves travel down the ear canal and make the eardrum vibrate. Three tiny bones in the middle ear pass these vibrations to the cochlea, a fluid-filled, spiral-shaped structure in the inner ear. Inside the cochlea, thousands of hair cells turn the vibrations into electrical signals, which travel to the brain along the auditory nerve. Very loud sound can damage or destroy these cells. Birds are able to grow replacements, but humans are not. In people, a hair cell that has died is gone for good, which is why hearing loss caused by noise is permanent.</p>
          <p>Whether a sound is harmful depends on two things: how loud it is and how long a person is exposed to it. Loudness is measured in decibels, which form a logarithmic scale, so a rise of ten decibels represents a tenfold increase in sound energy, even though the ear perceives it as only about twice as loud. Many workplace safety rules take 85 decibels over an eight-hour day as the point at which protection is needed. Above that level, the safe listening time falls quickly: under a widely used guideline, it is roughly halved with every increase of 3 decibels. A sound that is only a little louder may therefore be safe for a much shorter time.</p>
          <p>The first signs of overexposure are often temporary. After a loud concert, many people notice that sounds seem muffled or that they hear a ringing known as tinnitus, and both usually fade within a day or so. For a long time, this kind of recovery was taken as proof that no lasting harm had been done. Research on animals has challenged that assumption. It suggests that even when hearing appears to return to normal, some of the connections between hair cells and the nerve fibres that serve them may be lost. This so-called hidden hearing loss would not show up in a standard hearing test, but it might make it harder to follow a conversation in a noisy room. Research in people is still at an early stage, and scientists disagree about how common the problem is.</p>
          <p>Headphones carry a particular risk because they deliver sound directly into the ear canal, and because of the places in which they are used. On a crowded train or a busy street, listeners tend to raise the volume to drown out the noise around them, so the highest levels are often reached in the noisiest settings. Noise-cancelling headphones can help here, since by reducing background sound they allow the listener to keep the volume lower. Many smartphones can now also measure how much sound a user has been exposed to and display a warning when a weekly limit is approached.</p>
          <p>A popular rule of thumb, known as the 60/60 rule, suggests listening at no more than sixty per cent of maximum volume for no more than sixty minutes at a time. It is a useful reminder, but a crude one, because maximum volume varies widely from one device and pair of headphones to another, so sixty per cent on one combination may be considerably louder than on another. A more practical test is social. If someone an arm's length away has to shout to be heard, the music is too loud; and if other people can hear what you are listening to, it is probably too loud as well. Regular breaks also give the ears a chance to recover. Since noise damage accumulates over a lifetime, the habits people form when they are young may matter most of all.</p>`,
        groups: [
          {
            id: 'r2a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 14, text: 'According to the writer, why do many people ignore the risk of noise damage?', evidence: 'it builds up so gradually that most people do not notice it until it is well advanced',
                options: [
                  { value: 'A', label: 'Hearing tests are rarely offered to young people.' },
                  { value: 'B', label: 'The damage is painless and develops slowly.' },
                  { value: 'C', label: 'Health organisations have given conflicting advice.' },
                  { value: 'D', label: 'Most earphones are not loud enough to cause harm.' },
                ],
              },
              {
                number: 15, text: 'What does the writer say about hair cells in the cochlea?', evidence: 'Birds are able to grow replacements, but humans are not.',
                options: [
                  { value: 'A', label: 'They pass vibrations from the eardrum to the middle ear.' },
                  { value: 'B', label: 'Humans can replace them if the ears are rested.' },
                  { value: 'C', label: 'Some animals can replace them but humans cannot.' },
                  { value: 'D', label: 'They turn electrical signals into vibrations.' },
                ],
              },
              {
                number: 16, text: 'What is the significance of the research on hidden hearing loss?', evidence: 'even when hearing appears to return to normal, some of the connections between hair cells and the nerve fibres that serve them may be lost',
                options: [
                  { value: 'A', label: 'It shows that tinnitus always leads to permanent deafness.' },
                  { value: 'B', label: 'It suggests that apparent recovery may hide lasting damage.' },
                  { value: 'C', label: 'It proves that standard hearing tests are usually inaccurate.' },
                  { value: 'D', label: 'It confirms that the problem is common among concert-goers.' },
                ],
              },
              {
                number: 17, text: 'What is the writer’s opinion of the 60/60 rule?', evidence: 'It is a useful reminder, but a crude one',
                options: [
                  { value: 'A', label: 'It is too cautious for most listeners.' },
                  { value: 'B', label: 'It works well with noise-cancelling headphones.' },
                  { value: 'C', label: 'It should be replaced by smartphone warnings.' },
                  { value: 'D', label: 'It is helpful but imprecise.' },
                ],
              },
            ],
          },
          {
            id: 'r2b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>How noise damages hearing</strong></p>
              <p>Vibrations from the eardrum reach the cochlea, which is shaped like a spiral and filled with {{18}}. Hair cells there produce electrical signals that are carried to the brain by the auditory {{19}}. The risk of harm depends on both loudness and duration. Many workplaces require protection once exposure reaches {{20}} decibels over a working day, and the safe time is approximately halved for every {{21}} decibels above this. An early warning sign may be a ringing in the ears, called {{22}}, which usually disappears within a day.</p>`,
            questions: [
              { number: 18, evidence: 'a fluid-filled, spiral-shaped structure in the inner ear' },
              { number: 19, evidence: 'which travel to the brain along the auditory nerve' },
              { number: 20, evidence: 'Many workplace safety rules take 85 decibels over an eight-hour day as the point at which protection is needed.' },
              { number: 21, evidence: 'it is roughly halved with every increase of 3 decibels' },
              { number: 22, evidence: 'they hear a ringing known as tinnitus' },
            ],
          },
          {
            id: 'r2c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 23, text: 'Noise-cancelling headphones can make listening safer in noisy places.', evidence: 'by reducing background sound they allow the listener to keep the volume lower' },
              { number: 24, text: 'It is now well established how common hidden hearing loss is among adults.', evidence: 'Research in people is still at an early stage, and scientists disagree about how common the problem is.' },
              { number: 25, text: 'Manufacturers should be legally required to limit the maximum volume of smartphones.' },
              { number: 26, text: 'Music that can be heard by people nearby is likely to be at a harmful level.', evidence: 'if other people can hear what you are listening to, it is probably too loud as well' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The trouble with job interviews',
        html: `
          <p><span class="passage-letter">A</span> Few rituals of working life are as widespread as the job interview. Employers regard it as the moment when they finally discover what a candidate is really like, and candidates prepare for it more carefully than for almost any other part of the application. Yet decades of research in occupational psychology have reached an uncomfortable conclusion. The traditional interview, in which a manager chats with a candidate and then forms an overall impression, is a considerably weaker predictor of how well someone will do the job than most interviewers believe.</p>
          <p><span class="passage-letter">B</span> Much of the problem lies in the speed with which people judge one another. Interviewers frequently form a view of a candidate within the first few minutes, sometimes before any serious question has been asked. The rest of the conversation is then spent, often unconsciously, looking for information that supports that early view, a tendency known as confirmation bias. A confident manner, a firm handshake or a smart appearance can raise a candidate's rating considerably, even though such qualities may have little connection with the ability to do the work.</p>
          <p><span class="passage-letter">C</span> Interviewers are also drawn to people who resemble themselves. Candidates who share an interviewer's background, interests or style of speaking tend to be rated more highly, an effect sometimes described as similar-to-me bias. Over time, this can make a workforce less varied and cause organisations to overlook able people who simply seem unfamiliar. A related distortion is the halo effect, in which one impressive feature, such as a degree from a famous university, colours the interviewer's judgement of qualities that have nothing to do with it.</p>
          <p><span class="passage-letter">D</span> Perhaps the most stubborn difficulty is that interviewers rarely find out whether they were right. They never learn how the rejected candidates would have performed, and when a new employee does badly, the failure is usually blamed on other causes, such as poor training or a difficult team. Without accurate feedback, there is no way for a skill to improve, and interviewers can remain confident in their judgement for an entire career without that confidence ever being tested.</p>
          <p><span class="passage-letter">E</span> The research does not suggest that interviews are useless, only that the unstructured kind is unreliable. In a structured interview, every candidate is asked the same questions in the same order, and the answers are scored against a scale agreed in advance, ideally by more than one interviewer. The questions relate directly to the demands of the job. Behavioural questions ask candidates to describe how they dealt with particular situations in the past, while situational questions ask what they would do in a hypothetical case. Large reviews of the research have repeatedly found that structured interviews predict job performance considerably better than unstructured ones.</p>
          <p><span class="passage-letter">F</span> Interviews are not the only tool available. In a work sample test, candidates carry out a task that closely resembles the job itself: a programmer might be asked to write a short piece of code, or an editor to correct a page of text. Tests of general mental ability have also been found to predict performance in a wide range of jobs, although their use raises concerns about fairness. At an earlier stage, some organisations remove names and other identifying details from applications before they are read, in an attempt to reduce bias when the shortlist is drawn up.</p>
          <p><span class="passage-letter">G</span> Why, then, does the unstructured interview survive? One reason is that candidates themselves often prefer it, feeling that a relaxed conversation gives them a better chance to show their personality. Interviewers, for their part, enjoy the freedom to follow their curiosity and tend to find a fixed list of questions mechanical. The interview also serves purposes beyond selection: it allows candidates to assess the employer, and it gives the employer a chance to persuade a strong candidate to accept an offer. The answer, therefore, is not to abandon the interview but to discipline it, and to base the final decision on several sources of evidence rather than on a feeling formed in the first few minutes.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.',
            options: paragraphOptions,
            questions: [
              { number: 27, text: 'a reason why interviewers do not become better at judging candidates', evidence: 'Without accurate feedback, there is no way for a skill to improve' },
              { number: 28, text: 'an example of one quality affecting the assessment of unrelated qualities', evidence: 'one impressive feature, such as a degree from a famous university, colours the interviewer\'s judgement of qualities that have nothing to do with it' },
              { number: 29, text: 'examples of tasks that are similar to the job being applied for', evidence: 'a programmer might be asked to write a short piece of code, or an editor to correct a page of text' },
              { number: 30, text: 'a reason why applicants may favour a less reliable format', evidence: 'candidates themselves often prefer it, feeling that a relaxed conversation gives them a better chance to show their personality' },
              { number: 31, text: 'a reference to the way an early opinion shapes the rest of an interview', evidence: 'The rest of the conversation is then spent, often unconsciously, looking for information that supports that early view' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO of the following are described as features of a structured interview? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'All candidates answer identical questions in a fixed sequence.' },
              { value: 'B', label: 'Candidates may choose which questions to answer.' },
              { value: 'C', label: 'Answers are judged against a scale set beforehand.' },
              { value: 'D', label: 'At least three interviewers must be present.' },
              { value: 'E', label: 'Questions about personal interests are avoided.' },
            ],
            questions: [
              { number: 32, evidence: 'every candidate is asked the same questions in the same order' },
              { number: 33, evidence: 'the answers are scored against a scale agreed in advance, ideally by more than one interviewer' },
            ],
          },
          {
            id: 'r3c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 34, text: 'What kind of questions ask candidates how they handled specific situations in the past?', evidence: 'Behavioural questions ask candidates to describe how they dealt with particular situations in the past' },
              { number: 35, text: 'What kind of questions ask candidates how they would respond to an imagined case?', evidence: 'situational questions ask what they would do in a hypothetical case' },
              { number: 36, text: 'Apart from other identifying details, what do some organisations remove from applications?', evidence: 'some organisations remove names and other identifying details from applications' },
            ],
          },
          {
            id: 'r3d', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 37, text: 'Most interviewers underestimate how well a conversational interview predicts performance.', evidence: 'is a considerably weaker predictor of how well someone will do the job than most interviewers believe' },
              { number: 38, text: 'Work sample tests are more expensive for employers to run than interviews.' },
              { number: 39, text: 'Interviews have useful functions besides choosing between candidates.', evidence: 'The interview also serves purposes beyond selection' },
              { number: 40, text: 'Employers would make better decisions if they stopped interviewing candidates altogether.', evidence: 'The answer, therefore, is not to abandon the interview but to discipline it' },
            ],
          },
        ],
      },
    ],
  },
}
