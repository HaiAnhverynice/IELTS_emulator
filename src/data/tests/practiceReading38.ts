import type { IeltsTest, Option } from '../../types'

// Original reading practice test 38 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const gpsHeadings: Option[] = [
  { value: 'i', label: 'Measuring distance by timing a signal' },
  { value: 'ii', label: 'Why an extra satellite solves a timing problem' },
  { value: 'iii', label: 'An everyday technology with military origins' },
  { value: 'iv', label: 'Correcting for the strange behaviour of time' },
  { value: 'v', label: 'Other sources of help when signals fail' },
  { value: 'vi', label: 'Degrees of precision, and new threats' },
  { value: 'vii', label: 'How satellites keep track of individual users' },
  { value: 'viii', label: 'The rising cost of launching satellites' },
  { value: 'ix', label: 'Why atomic clocks are now fitted in phones' },
]

const attentionEndings: Option[] = [
  { value: 'A', label: 'can still impair performance on a task requiring attention.' },
  { value: 'B', label: "increases the brain's overall capacity for attention." },
  { value: 'C', label: 'tend to rate their own ability too highly.' },
  { value: 'D', label: 'lowers the number of times attention has to shift.' },
  { value: 'E', label: 'were quicker at switching than those who rarely multitask.' },
  { value: 'F', label: 'weakens performance on the task a person has just turned to.' },
  { value: 'G', label: 'has no effect unless the message is actually read.' },
]

export const practiceReading38: IeltsTest = {
  id: 'practice-reading-38',
  title: 'Practice Test 38 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'TRUE', 3: 'NOT GIVEN', 4: 'FALSE', 5: 'TRUE',
      6: ['40'], 7: ['2.5'], 8: ['half'], 9: ['often'],
      10: 'A', 11: 'C',
      12: ['water', 'extra water'], 13: ['lemon'],
      14: 'iii', 15: 'i', 16: 'ii', 17: 'iv', 18: 'v', 19: 'vi',
      20: 'B', 21: 'C', 22: 'B', 23: 'B',
      24: ['network'], 25: ['stations'], 26: ['spoofing'],
      27: 'YES', 28: 'NO', 29: 'NO', 30: 'YES', 31: 'NO', 32: 'NOT GIVEN',
      33: 'C', 34: 'F', 35: 'A', 36: 'D',
      37: ['letters'], 38: ['walking'],
      39: 'B', 40: 'C',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Salt: the ingredient we rarely see',
        html: `
          <p>Salt has been valued for thousands of years, both for its taste and for its ability to preserve food. The body needs sodium, one of the two elements that make up common salt, to keep its fluid levels balanced and to allow nerves and muscles to work. But the amount required is small, and in most countries people eat far more than they need. The World Health Organization recommends that adults consume less than 5 grams of salt a day, which is roughly a level teaspoon. Average intakes in many countries are well above this, in some cases close to double.</p>
          <p>The main concern is blood pressure. A diet high in sodium causes the body to retain extra water, which increases the volume of blood and the pressure on the walls of the blood vessels. High blood pressure, in turn, is a major risk factor for strokes and heart disease, and it often produces no symptoms until damage has already been done. Trials in which participants reduced their salt intake have generally shown falls in blood pressure, with larger falls among people whose pressure was already high.</p>
          <p>Part of the difficulty for consumers lies in the labels. Food packaging in some countries lists sodium, while in others it lists salt, and the two figures are easily confused. Salt is about 40 per cent sodium by weight, so to convert a sodium figure into its salt equivalent it must be multiplied by roughly 2.5. A product listing 1 gram of sodium therefore contains about 2.5 grams of salt, or half the recommended daily maximum. A shopper who mistakes one figure for the other may believe that a product contains less than half as much salt as it actually does.</p>
          <p>Many people assume that cutting down on salt simply means using the salt shaker less. In fact, in countries such as the United Kingdom and the United States, most of the salt people eat is already in food when they buy it. Bread, breakfast cereals, processed meats, cheese, ready meals, sauces and soups are among the major sources. Bread is a good example of why salt is easy to overlook. A single slice does not taste particularly salty, but because bread is eaten so often, it adds up to a substantial share of many people's intake.</p>
          <p>Because so much salt is added by manufacturers, some governments have tried to reduce it at source. In the United Kingdom, a programme begun in the early 2000s set voluntary targets for the salt content of many categories of food, and manufacturers gradually reduced the salt in their products, often in small steps that consumers did not notice. Such changes are made easier by the fact that taste preferences adapt. People who reduce their salt intake over a period of weeks typically find that food they once enjoyed begins to taste too salty.</p>
          <p>Salt is not the only factor that matters. Potassium, found in fruit, vegetables, beans and nuts, helps the body to get rid of sodium and tends to lower blood pressure, so a diet rich in these foods can partly offset the effect of salt. Salt substitutes, which replace some of the sodium chloride with potassium chloride, have been shown in a large trial to reduce the number of strokes. They are not suitable for everyone, however. People with kidney disease, or those taking certain medicines, can be harmed by too much potassium and should seek medical advice before using them.</p>
          <p>Some researchers have questioned whether very low intakes are beneficial for everyone, and the ideal amount remains a subject of debate. Yet there is little disagreement that most people eat more salt than they need, and the practical steps are simple. Compare labels when shopping, taste food before adding salt to it, use herbs, spices or lemon for flavour, and cook from fresh ingredients when possible.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'People with high blood pressure usually become aware of it at an early stage.', evidence: 'it often produces no symptoms until damage has already been done' },
              { number: 2, text: 'Reducing salt tends to have a greater effect on blood pressure in people whose blood pressure is high.', evidence: 'with larger falls among people whose pressure was already high' },
              { number: 3, text: 'Food labels in the United Kingdom are legally required to show salt rather than sodium.' },
              { number: 4, text: 'The salt targets set in the United Kingdom were compulsory for manufacturers.', evidence: 'set voluntary targets for the salt content of many categories of food' },
              { number: 5, text: 'Manufacturers often reduced salt gradually enough for the change to go unnoticed by shoppers.', evidence: 'often in small steps that consumers did not notice' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the notes below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>Hidden salt: points for shoppers</strong></p>
              <ul>
                <li>Sodium makes up about {{6}} per cent of the weight of salt.</li>
                <li>To find the salt content, multiply the sodium figure by about {{7}}.</li>
                <li>1 gram of sodium is equivalent to {{8}} of the recommended daily maximum of salt.</li>
                <li>Bread is a major source of salt, not because it tastes salty, but because it is eaten so {{9}}.</li>
              </ul>`,
            questions: [
              { number: 6, evidence: 'Salt is about 40 per cent sodium by weight' },
              { number: 7, evidence: 'it must be multiplied by roughly 2.5' },
              { number: 8, evidence: 'or half the recommended daily maximum' },
              { number: 9, evidence: 'because bread is eaten so often' },
            ],
          },
          {
            id: 'r1c', type: 'mcq-multi', instructions: 'Which TWO of the following statements about potassium are made in the passage? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'It helps the body to remove sodium.' },
              { value: 'B', label: 'It is found mainly in processed foods.' },
              { value: 'C', label: 'Too much of it can harm some people.' },
              { value: 'D', label: 'It makes food taste saltier.' },
              { value: 'E', label: 'It has replaced salt in most bread.' },
            ],
            questions: [
              { number: 10, evidence: 'helps the body to get rid of sodium' },
              { number: 11, evidence: 'can be harmed by too much potassium' },
            ],
          },
          {
            id: 'r1d', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 12, text: 'What does a diet high in sodium cause the body to hold on to?', evidence: 'A diet high in sodium causes the body to retain extra water' },
              { number: 13, text: 'Apart from herbs and spices, what does the writer suggest using to give food flavour?', evidence: 'use herbs, spices or lemon for flavour' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'How your phone knows where you are',
        html: `
          <p><span class="passage-letter">A</span> Few technologies have become ordinary as quickly as satellite navigation. A phone can show its owner's position on a map within seconds, almost anywhere on Earth, and few users stop to think about how this is done. Behind the small dot on the screen lies a combination of precise physics and careful engineering, and the principle on which it rests is simpler than many people imagine. The best-known system, the Global Positioning System or GPS, was developed by the United States military and became fully operational in the mid-1990s. Russia, the European Union and China now operate similar systems, and most modern phones can receive signals from several of them at once.</p>
          <p><span class="passage-letter">B</span> Surprisingly, the satellites do not know where your phone is, and your phone sends nothing to them. Each satellite simply broadcasts a continuous signal stating which satellite it is and exactly when the signal was sent. A receiver on the ground compares the time of sending with the time of arrival. Because radio signals travel at the speed of light, this tiny difference reveals how far away the satellite is. Knowing its distance from several satellites whose positions are known, the receiver can then work out where it must be.</p>
          <p><span class="passage-letter">C</span> This method depends on extraordinarily accurate timing. Light travels about 300,000 kilometres in a second, so an error of just one millionth of a second in measuring the travel time would put the calculated position out by roughly 300 metres. The satellites therefore carry atomic clocks. Phones cannot carry such clocks, so they solve the problem with geometry instead. By using the signal from a fourth satellite, the receiver can calculate its own clock error as well as its three-dimensional position. This is why at least four satellites must be in view for a reliable fix.</p>
          <p><span class="passage-letter">D</span> The precision demanded is so great that even the effects described by Einstein's theories of relativity must be taken into account. Because the satellites move fast, their clocks run slightly slow when compared with clocks on the ground. Because they are further from the Earth, where gravity is weaker, they also run slightly fast. The second effect is the larger of the two, and the combined difference, if it were not corrected, would cause positions to drift by several kilometres a day. The satellite clocks are therefore adjusted to compensate.</p>
          <p><span class="passage-letter">E</span> Satellite signals are weak by the time they reach the ground, and they are easily blocked. Indoors, in tunnels or between tall buildings, a receiver may lose sight of too many satellites. Signals that bounce off walls before arriving travel further than a direct signal would, which makes the calculated distance too long and can place the user on the wrong side of a street. To fill these gaps, phones combine satellite data with other information: the known locations of nearby mobile phone masts and Wi-Fi networks, and motion sensors that detect steps and changes in direction. They may also download details of the satellites' positions through the mobile network, which allows a first position to be found far more quickly than from the satellite signal alone.</p>
          <p><span class="passage-letter">F</span> The result, for an ordinary phone in open areas, is accuracy of a few metres. This is enough for navigation but not for every purpose. Surveyors, and farmers whose machinery steers itself, use correction signals from fixed reference stations whose positions are known precisely, achieving accuracy of a few centimetres. Because so many services, from aviation to the time-stamping of financial transactions, now depend on satellite signals, governments have become concerned about deliberate interference. Jamming, which drowns out the weak signals, and spoofing, which transmits false ones, have both been reported, and engineers are developing receivers that can detect them. For most users, though, the system remains one of the quiet successes of modern technology: free to use, available everywhere and almost entirely invisible.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: gpsHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'was developed by the United States military' },
              { number: 15, text: 'Paragraph B', evidence: 'this tiny difference reveals how far away the satellite is' },
              { number: 16, text: 'Paragraph C', evidence: 'By using the signal from a fourth satellite, the receiver can calculate its own clock error as well as its three-dimensional position.' },
              { number: 17, text: 'Paragraph D', evidence: "even the effects described by Einstein's theories of relativity must be taken into account" },
              { number: 18, text: 'Paragraph E', evidence: 'To fill these gaps, phones combine satellite data with other information' },
              { number: 19, text: 'Paragraph F', evidence: 'governments have become concerned about deliberate interference' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 20, text: 'According to paragraph B, the signal broadcast by each satellite contains', evidence: 'stating which satellite it is and exactly when the signal was sent', options: [{ value: 'A', label: 'the position of the receiver.' }, { value: 'B', label: 'the identity of the satellite and the time the signal left it.' }, { value: 'C', label: "a request for the phone's location." }, { value: 'D', label: 'the distance between the satellite and the receiver.' }] },
              { number: 21, text: 'A timing error of one millionth of a second would cause a position error of about', evidence: 'would put the calculated position out by roughly 300 metres', options: [{ value: 'A', label: '3 metres.' }, { value: 'B', label: '30 metres.' }, { value: 'C', label: '300 metres.' }, { value: 'D', label: '300 kilometres.' }] },
              { number: 22, text: 'Which effect on satellite clocks does the writer describe as the greater one?', evidence: 'The second effect is the larger of the two', options: [{ value: 'A', label: 'the slowing caused by the speed of the satellites' }, { value: 'B', label: 'the speeding up caused by weaker gravity' }, { value: 'C', label: 'the drift caused by the atomic clocks themselves' }, { value: 'D', label: 'neither, because the two effects cancel out' }] },
              { number: 23, text: 'Why might a phone place its user on the wrong side of a street?', evidence: 'which makes the calculated distance too long and can place the user on the wrong side of a street', options: [{ value: 'A', label: 'Too many satellites are in view at the same time.' }, { value: 'B', label: 'Signals reflected from walls make a satellite seem further away.' }, { value: 'C', label: 'Wi-Fi networks provide inaccurate positions.' }, { value: 'D', label: 'Motion sensors miscount the number of steps taken.' }] },
            ],
          },
          {
            id: 'r2c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 24, text: 'A first position can be found faster if details of satellite positions are downloaded through the mobile ________.', evidence: "They may also download details of the satellites' positions through the mobile network" },
              { number: 25, text: 'Accuracy of a few centimetres is possible with correction signals from fixed reference ________.', evidence: 'use correction signals from fixed reference stations whose positions are known precisely' },
              { number: 26, text: 'The deliberate transmission of false satellite signals is known as ________.', evidence: 'spoofing, which transmits false ones' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The myth of multitasking',
        html: `
          <p>Many people describe themselves as good at multitasking, and job advertisements sometimes list it as a desirable skill. Yet research in cognitive psychology suggests that, for most tasks that demand attention, what we call multitasking is not really doing two things at once. It is switching rapidly between them, and each switch has a cost.</p>
          <p>The basic finding is easy to demonstrate. In laboratory experiments, participants who must alternate between two simple tasks, such as classifying numbers as odd or even and classifying letters as vowels or consonants, respond more slowly and make more errors than when they perform one task repeatedly. These switch costs may amount to only a fraction of a second each time. In daily life, however, where a worker may move between email, documents and messages many times an hour, they accumulate. In addition, when people switch, part of their attention tends to remain on the previous task, a phenomenon that researchers have called attention residue, which further reduces performance on the new one.</p>
          <p>There are exceptions. Activities that have become automatic through long practice, such as walking, can usually be combined with a conversation without much difficulty. The problem arises when both activities draw on the same mental resources. Listening to a podcast while washing dishes is easy; following a podcast while reading a report is not, because both require the processing of language. Driving is a revealing case. An experienced driver on an empty road may manage a conversation, but when traffic becomes complex, the demands of the conversation and of the road compete. Studies have found that drivers talking on mobile phones react more slowly to hazards, and that hands-free phones offer little advantage over hand-held ones, because the distraction lies in the conversation rather than in holding the device. Talking to a passenger appears to be less risky, partly because a passenger can see the road and tends to stop talking when conditions become difficult.</p>
          <p>Perhaps the most surprising research concerns people who multitask a great deal. In a study published in 2009, researchers at Stanford University compared students who reported heavy use of several media at once, such as television, messaging and web browsing, with students who rarely did so. The heavy multitaskers performed worse on tests that required them to ignore irrelevant information, and, contrary to what one might expect, they were also slower at switching between tasks. The study could not show whether multitasking had caused these differences or whether people who are more easily distracted are drawn to multitasking in the first place, and later studies have produced mixed results.</p>
          <p>Another consistent finding is that people are poor judges of their own multitasking. In surveys, those who multitask most often tend to rate their ability highly, yet their performance in tests is frequently no better, and sometimes worse, than average. One reason may be that multitasking feels productive. The constant activity of responding to messages provides a sense of progress, even when the important task is advancing slowly.</p>
          <p>Interruptions from outside cause similar problems. Office workers are often interrupted by colleagues, phone calls and notifications, and studies of workplaces have found that after an interruption, people may take a considerable time to return fully to their original task. Even the knowledge that a message has arrived can be distracting. In experiments, a phone notification that participants did not answer still reduced their performance on an attention task.</p>
          <p>Practical advice follows naturally from this research. Grouping similar tasks together, such as answering emails at set times rather than continuously, reduces the number of switches. Turning off notifications, or placing a phone out of sight, removes a source of distraction. Some people work in fixed blocks of focused time followed by short breaks. None of these techniques increases the brain's capacity, but they can help people use the attention they have more effectively, which, for most demanding work, means doing one thing at a time.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'When people believe they are doing two demanding tasks at once, they are actually moving back and forth between them.', evidence: 'It is switching rapidly between them, and each switch has a cost.' },
              { number: 28, text: 'Switch costs are too small to matter in ordinary working life.', evidence: 'In daily life, however, where a worker may move between email, documents and messages many times an hour, they accumulate.' },
              { number: 29, text: 'Using a hands-free phone while driving is considerably safer than holding the phone.', evidence: 'hands-free phones offer little advantage over hand-held ones' },
              { number: 30, text: 'One reason conversations with passengers are less dangerous is that passengers react to what is happening on the road.', evidence: 'a passenger can see the road and tends to stop talking when conditions become difficult' },
              { number: 31, text: 'The Stanford study proved that heavy multitasking damages the ability to concentrate.', evidence: 'The study could not show whether multitasking had caused these differences' },
              { number: 32, text: 'Younger people are better at multitasking than older people.' },
            ],
          },
          {
            id: 'r3b', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: attentionEndings,
            questions: [
              { number: 33, text: 'People who multitask most often', evidence: 'those who multitask most often tend to rate their ability highly, yet their performance in tests is frequently no better' },
              { number: 34, text: 'Attention residue', evidence: 'which further reduces performance on the new one' },
              { number: 35, text: 'A phone notification that is ignored', evidence: 'a phone notification that participants did not answer still reduced their performance on an attention task' },
              { number: 36, text: 'Answering emails at set times', evidence: 'reduces the number of switches' },
            ],
          },
          {
            id: 'r3c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 37, text: 'In the laboratory experiments described, what did participants classify as vowels or consonants?', evidence: 'classifying letters as vowels or consonants' },
              { number: 38, text: 'Which everyday activity is given as an example of one made automatic by long practice?', evidence: 'Activities that have become automatic through long practice, such as walking' },
            ],
          },
          {
            id: 'r3d', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 39, text: 'According to the writer, multitasking may feel productive because', evidence: 'The constant activity of responding to messages provides a sense of progress', options: [{ value: 'A', label: 'people do in fact complete more tasks.' }, { value: 'B', label: 'constant activity gives an impression of progress.' }, { value: 'C', label: 'employers tend to reward it.' }, { value: 'D', label: 'it reduces the time spent on difficult tasks.' }] },
              { number: 40, text: 'What is the main point of the final paragraph?', evidence: "None of these techniques increases the brain's capacity, but they can help people use the attention they have more effectively", options: [{ value: 'A', label: 'With practice, people can increase their capacity for attention.' }, { value: 'B', label: 'Notifications should be banned in the workplace.' }, { value: 'C', label: 'Simple strategies help people make better use of limited attention.' }, { value: 'D', label: 'Short breaks reduce the amount of work people complete.' }] },
            ],
          },
        ],
      },
    ],
  },
}
