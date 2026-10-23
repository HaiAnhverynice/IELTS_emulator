import type { IeltsTest, Option } from '../../types'

// Original reading practice test 28 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const carHeadings: Option[] = [
  { value: 'i', label: 'Doubts about the evidence of benefit' },
  { value: 'ii', label: 'Paying for a vehicle that is rarely used' },
  { value: 'iii', label: 'Different ways of organising a scheme' },
  { value: 'iv', label: 'How new technology revived an old idea' },
  { value: 'v', label: 'The difficulty of making schemes pay' },
  { value: 'vi', label: 'The conditions in which sharing works best' },
  { value: 'vii', label: 'Fewer cars and more careful use of them' },
  { value: 'viii', label: 'The environmental cost of manufacturing cars' },
  { value: 'ix', label: 'Government subsidies for car clubs' },
  { value: 'x', label: 'Why young people are delaying learning to drive' },
]

const paragraphOptions: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

export const practiceReading28: IeltsTest = {
  id: 'practice-reading-28',
  title: 'Practice Test 28 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'ii', 2: 'iv', 3: 'iii', 4: 'vii', 5: 'i', 6: 'v', 7: 'vi',
      8: 'FALSE', 9: 'TRUE', 10: 'NOT GIVEN',
      11: ['surveys'], 12: ['visible'], 13: ['weekends'],
      14: 'B', 15: 'C', 16: 'A', 17: 'D',
      18: 'YES', 19: 'NO', 20: 'NOT GIVEN', 21: 'NO', 22: 'YES',
      23: 'B', 24: 'D',
      25: ['moderate physical activity', 'moderate activity', 'moderate'],
      26: ['cycling and swimming', 'swimming and cycling', 'cycling, swimming', 'swimming, cycling'],
      27: 'D', 28: 'A', 29: 'F', 30: 'C', 31: 'E',
      32: ['to-do lists', 'to do lists'], 33: ['mood'], 34: ['retirement saving'], 35: ['distractions', 'easy distractions'],
      36: 'NO', 37: 'YES', 38: 'NO', 39: 'NOT GIVEN', 40: 'YES',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Sharing the car: can access replace ownership?',
        html: `
          <p><span class="passage-letter">A</span> For most households, a car is one of the largest purchases they will ever make, yet it spends the great majority of its life standing still, parked outside a home or an office. Owners pay for that idle time all the same. The value of the vehicle falls year by year whether it is driven or not, and insurance, tax and parking charges continue regardless of how many journeys are made. This simple observation lies behind car-sharing, in which members pay to use a vehicle for an hour or a day instead of owning one themselves.</p>
          <p><span class="passage-letter">B</span> The basic idea is not new. Cooperative schemes in which neighbours jointly owned a small number of cars appeared in Switzerland and elsewhere in Europe in the late twentieth century. What changed in the following decades was technology. Mobile phones made it possible to find and book a vehicle in seconds, and electronic locks meant that members could open a car with a card or an app, with no office visit or handover of keys required. As a result, schemes multiplied, especially in large cities.</p>
          <p><span class="passage-letter">C</span> Today, services fall into two broad types. In round-trip, or station-based, schemes, a member collects a car from a fixed bay and must return it to the same place. In free-floating schemes, cars can be picked up wherever they are found within a defined zone and left in any legal parking space inside it, with charges usually calculated by the minute. A third model, peer-to-peer sharing, allows private owners to rent out their own cars when they do not need them, with an online platform handling bookings and insurance.</p>
          <p><span class="passage-letter">D</span> Supporters argue that car-sharing reduces the number of cars on the road. The claim rests mainly on surveys in which members report selling a car, or deciding not to buy one, after joining. If each shared vehicle replaces several private ones, less space is needed for parking, and that space can be given over to housing, trees or cycle lanes. There is a second, less obvious effect. When a car is owned, most of its costs are paid in advance, so each extra trip seems almost free. When every hour is charged, the full price of a journey becomes visible, and members tend to walk, cycle or take public transport for trips they would previously have driven.</p>
          <p><span class="passage-letter">E</span> Critics are not convinced that these benefits apply to every scheme. People who join often already live in dense neighbourhoods with good public transport and may never have owned a car at all. For them, a shared car can add journeys rather than remove them. Free-floating schemes have attracted particular scepticism, since the ease of picking up a vehicle on the street can tempt people out of buses and trams for short trips. The surveys themselves also rely on what members say they would have done, which is difficult to check.</p>
          <p><span class="passage-letter">F</span> The economics are equally demanding. Cars must be cleaned, repaired and refuelled or recharged, and in free-floating schemes vehicles left in unpopular areas have to be moved back to where demand is higher. Several well-funded operators have withdrawn from cities after failing to make a profit, leaving members without a service they had come to depend on. Those that survive tend to rely on heavy use during evenings and at weekends, when people want a car for shopping or leisure rather than for commuting.</p>
          <p><span class="passage-letter">G</span> Car-sharing, then, is not a universal replacement for private ownership, and it was never likely to be. Its value depends on the setting. Where homes are close together, public transport is frequent and parking is scarce or expensive, a shared car can make giving up ownership practical for many households. Where people live far apart and buses are rare, the case is much weaker. The most promising results come where cities treat sharing as one part of a wider system, alongside good public transport, safe cycling routes and limits on parking, rather than as a solution in itself.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: carHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'Owners pay for that idle time all the same.' },
              { number: 2, text: 'Paragraph B', evidence: 'What changed in the following decades was technology.' },
              { number: 3, text: 'Paragraph C', evidence: 'Today, services fall into two broad types.' },
              { number: 4, text: 'Paragraph D', evidence: 'Supporters argue that car-sharing reduces the number of cars on the road.' },
              { number: 5, text: 'Paragraph E', evidence: 'The surveys themselves also rely on what members say they would have done, which is difficult to check.' },
              { number: 6, text: 'Paragraph F', evidence: 'Several well-funded operators have withdrawn from cities after failing to make a profit' },
              { number: 7, text: 'Paragraph G', evidence: 'Its value depends on the setting.' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 8, text: 'The earliest car-sharing schemes depended on mobile phone technology.', evidence: 'What changed in the following decades was technology.' },
              { number: 9, text: 'Users of free-floating schemes are normally charged according to how many minutes they use a car.', evidence: 'with charges usually calculated by the minute' },
              { number: 10, text: 'Peer-to-peer platforms require owners to have their cars professionally cleaned between rentals.' },
            ],
          },
          {
            id: 'r1c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>The case for and against car-sharing</strong></p>
              <p>The belief that car-sharing takes cars off the road is based largely on {{11}} of members. Sharing may also change behaviour because, when each hour is paid for, the true cost of a trip is made {{12}}. However, running a scheme is expensive, and the operators that remain in business depend on heavy use in the evenings and at {{13}}.</p>`,
            questions: [
              { number: 11, evidence: 'The claim rests mainly on surveys in which members report selling a car' },
              { number: 12, evidence: 'the full price of a journey becomes visible' },
              { number: 13, evidence: 'Those that survive tend to rely on heavy use during evenings and at weekends' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Ten thousand steps: a target worth keeping?',
        html: `
          <p>Few health targets are as widely known as ten thousand steps a day. It is the default goal on many fitness trackers and phone apps, and it is repeated so often that many people assume it was established by medical research. In fact, the number is generally traced to Japan in the 1960s, when a pedometer was marketed under a name that can be translated as 'ten-thousand-step meter'. The figure was round, memorable and ambitious, and it suited the device it was used to sell. Whether it was ever based on careful measurement of health outcomes is doubtful.</p>
          <p>That does not mean the target is useless. Scientists have since been able to test it, because modern devices record steps over long periods and large studies can follow participants for years. The general finding is that people who take more steps each day tend to have a lower risk of early death and of heart disease than those who take very few. However, the benefit does not rise steadily all the way to ten thousand. The greatest gains come at the lower end, when a largely inactive person begins to move more, and in several studies the curve flattens out at a total well below the famous figure, particularly among older adults.</p>
          <p>This pattern matters for how the message is presented. A person who currently walks very little may look at ten thousand steps, decide that it is out of reach and give up altogether. Yet adding even a modest number of steps would bring that person a larger improvement than an already active person would gain by adding the same amount. For public health purposes, then, the most important group is not those who are close to the target but those who are far from it.</p>
          <p>There is also debate about whether the speed of walking matters as much as the total. Brisk walking counts as moderate physical activity, the kind that raises the heart rate and makes conversation slightly harder, and official guidelines, including those of the World Health Organization, are expressed in minutes of such activity per week rather than in steps. Some researchers argue that a step count blurs the distinction between a slow stroll around a shop and a fast walk to work. Others reply that in large studies the number of steps predicts health outcomes reasonably well even after pace is taken into account, so the simpler measure is good enough for most people.</p>
          <p>Counting steps has practical weaknesses too. Devices worn on the wrist detect movement of the arm, so they may record steps while someone is gesturing during a conversation and miss them while the person is pushing a supermarket trolley. Phones count only when they are being carried, and many people leave them on a desk for much of the day. Cycling and swimming, both valuable forms of exercise, produce few or no steps at all. A low count on a particular day is therefore not proof of an inactive day.</p>
          <p>None of these problems has stopped step counting from being useful. Its great strength is that it turns a vague intention, such as 'be more active', into a number that can be checked at any moment, and research on behaviour change suggests that self-monitoring of this kind helps people to keep going. The risk is that a single figure comes to be treated as a pass mark. Walking eight thousand steps is not a failure, and for someone who used to walk three thousand it may be a considerable achievement. The more useful question is not whether a person has reached a particular total but whether he or she is moving more than before.</p>`,
        groups: [
          {
            id: 'r2a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 14, text: 'According to the writer, the ten-thousand-step target was originally', evidence: 'it suited the device it was used to sell', options: [{ value: 'A', label: 'chosen after doctors studied thousands of walkers.' }, { value: 'B', label: 'connected with the sale of a product.' }, { value: 'C', label: 'intended mainly for older adults.' }, { value: 'D', label: 'raised later by medical researchers.' }] },
              { number: 15, text: 'What have large studies found about the number of steps people take?', evidence: 'The greatest gains come at the lower end, when a largely inactive person begins to move more', options: [{ value: 'A', label: 'The benefits increase steadily up to ten thousand steps.' }, { value: 'B', label: 'The benefits appear only among older adults.' }, { value: 'C', label: 'The largest improvements occur when inactive people start moving more.' }, { value: 'D', label: 'Totals above ten thousand bring the greatest gains.' }] },
              { number: 16, text: 'The writer suggests that a fixed target of ten thousand steps may', evidence: 'decide that it is out of reach and give up altogether', options: [{ value: 'A', label: 'discourage people who currently walk very little.' }, { value: 'B', label: 'encourage active people to walk too much.' }, { value: 'C', label: 'be too low for most adults.' }, { value: 'D', label: 'be ignored by public health officials.' }] },
              { number: 17, text: 'According to the passage, official activity guidelines', evidence: 'are expressed in minutes of such activity per week rather than in steps', options: [{ value: 'A', label: 'recommend ten thousand steps a day.' }, { value: 'B', label: 'do not consider walking to be exercise.' }, { value: 'C', label: 'are based on data from wrist-worn devices.' }, { value: 'D', label: 'are stated in terms of time rather than steps.' }] },
            ],
          },
          {
            id: 'r2b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 18, text: 'Many people wrongly believe that the ten-thousand-step figure came from medical research.', evidence: 'many people assume it was established by medical research' },
              { number: 19, text: 'The ten-thousand-step target has no value at all.', evidence: 'That does not mean the target is useless.' },
              { number: 20, text: 'Manufacturers of fitness trackers should change the default goal on their devices.' },
              { number: 21, text: 'A low step count on a given day shows that the person was inactive that day.', evidence: 'A low count on a particular day is therefore not proof of an inactive day.' },
              { number: 22, text: 'Keeping track of one’s own activity can help people to continue being active.', evidence: 'self-monitoring of this kind helps people to keep going' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-multi', instructions: 'Which TWO situations does the writer give as reasons why a device may fail to record steps that were actually taken? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'gesturing during a conversation' },
              { value: 'B', label: 'pushing a supermarket trolley' },
              { value: 'C', label: 'walking very slowly' },
              { value: 'D', label: 'leaving a phone on a desk' },
              { value: 'E', label: 'a battery running low' },
            ],
            questions: [
              { number: 23, evidence: 'miss them while the person is pushing a supermarket trolley' },
              { number: 24, evidence: 'many people leave them on a desk for much of the day' },
            ],
          },
          {
            id: 'r2d', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 25, text: 'What type of activity does brisk walking count as?', evidence: 'Brisk walking counts as moderate physical activity' },
              { number: 26, text: 'Which two valuable forms of exercise produce few or no steps?', evidence: 'Cycling and swimming, both valuable forms of exercise, produce few or no steps at all.' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Why we put things off',
        html: `
          <p><span class="passage-letter">A</span> Almost everyone puts things off from time to time, but psychologists draw a careful line between ordinary delay and procrastination. Delay can be perfectly sensible: a person who waits for more information before making a decision, or who postpones a minor task in order to deal with an urgent one, is planning rather than procrastinating. Procrastination, in the sense researchers use, means voluntarily putting off something one intends to do, while expecting to be worse off as a result. It is the knowledge that delay is harmful, combined with delaying anyway, that makes it so puzzling.</p>
          <p><span class="passage-letter">B</span> The popular explanation is laziness or poor time management, and many self-help books respond by offering better diaries and to-do lists. Research suggests that this misses the central problem. Procrastinators are not, as a group, less willing to work hard on activities they enjoy, and many are perfectly able to plan. What they struggle with is the unpleasant feeling that a particular task produces. The task may be boring, confusing or frightening, or it may threaten a person's sense of competence, and avoiding it brings immediate relief.</p>
          <p><span class="passage-letter">C</span> Seen in this way, procrastination is less a failure of time management than a failure of emotional regulation. Turning to something more pleasant, such as checking messages, repairs the person's mood in the short term. Because that relief arrives at once, while the costs of delay lie in the future, the brain treats the exchange as a good deal. The same tendency to value the present over the future appears in many areas of life, from saving to diet, but procrastination adds a sting: the task does not go away, and the unpleasant feelings attached to it usually grow as the deadline approaches.</p>
          <p><span class="passage-letter">D</span> The consequences go beyond missed deadlines. Studies of students have linked chronic procrastination with lower marks and with higher stress, particularly towards the end of a term. Surveys of adults suggest that people who procrastinate a great deal are also more likely to delay matters such as medical check-ups and retirement saving. Researchers are cautious about cause and effect here, however, since the same underlying difficulty may lie behind both the procrastination and the poor outcomes.</p>
          <p><span class="passage-letter">E</span> If the root of the problem is emotional, then advice that ignores emotion is unlikely to work. One of the more effective techniques is to make the first step so small that it causes little discomfort: opening the document and writing a single sentence, for example, rather than 'starting the essay'. Once work has begun, the task often proves less unpleasant than expected. Another technique is to form a specific plan of the 'if-then' type, such as 'if it is nine o'clock on Monday, then I will go to the library and read chapter two'. Plans of this kind link the action to a situation, so that the decision about when to begin has already been taken.</p>
          <p><span class="passage-letter">F</span> A less obvious finding concerns how people treat themselves after procrastinating. It might be assumed that harsh self-criticism would prevent a repeat. In fact, it tends to add to the bad feelings that triggered avoidance in the first place. In one study, university students who reported forgiving themselves for procrastinating before a first examination procrastinated less when preparing for the next one. Self-forgiveness, in other words, is not the same as excusing the behaviour; it appears to make it easier to face the task again.</p>
          <p><span class="passage-letter">G</span> Surroundings matter as well. Because procrastination usually involves turning to an easier source of pleasure, reducing the number of easy distractions can help: putting a phone in another room, for example, or blocking certain websites during working hours. None of these strategies removes the difficulty entirely. They work by lowering the emotional cost of starting and raising the effort needed to escape, so that, at the moment of choice, the task in front of a person is no longer the least attractive option available.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? Choose the correct letter, A–G.',
            options: paragraphOptions,
            questions: [
              { number: 27, text: 'a warning that a link between two things may not show that one causes the other', evidence: 'Researchers are cautious about cause and effect here' },
              { number: 28, text: 'an example of a situation in which putting something off is reasonable', evidence: 'is planning rather than procrastinating' },
              { number: 29, text: 'a reason why being hard on oneself may be counterproductive', evidence: 'it tends to add to the bad feelings that triggered avoidance in the first place' },
              { number: 30, text: 'an explanation of why avoiding a task feels worthwhile at the time', evidence: 'the brain treats the exchange as a good deal' },
              { number: 31, text: 'a method that removes the need to decide when to start', evidence: 'so that the decision about when to begin has already been taken' },
            ],
          },
          {
            id: 'r3b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 32, text: 'Many self-help books try to solve procrastination by offering better diaries and ______.', evidence: 'many self-help books respond by offering better diaries and to-do lists' },
              { number: 33, text: 'Doing something more enjoyable instead of the task improves a person’s ______ for a short time.', evidence: "repairs the person's mood in the short term" },
              { number: 34, text: 'Adults who procrastinate a great deal may also put off medical check-ups and ______.', evidence: 'more likely to delay matters such as medical check-ups and retirement saving' },
              { number: 35, text: 'Moving a phone into another room is one way of reducing easy ______.', evidence: 'reducing the number of easy distractions can help: putting a phone in another room' },
            ],
          },
          {
            id: 'r3c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 36, text: 'Procrastinators are generally less hard-working than other people, even at activities they enjoy.', evidence: 'Procrastinators are not, as a group, less willing to work hard on activities they enjoy' },
              { number: 37, text: 'Better planning tools on their own are unlikely to solve the problem of procrastination.', evidence: 'Research suggests that this misses the central problem.' },
              { number: 38, text: 'The unpleasant feelings attached to a postponed task usually fade as time passes.', evidence: 'the unpleasant feelings attached to it usually grow as the deadline approaches' },
              { number: 39, text: 'Procrastination is more common among students than among working adults.' },
              { number: 40, text: 'Reducing distractions works partly by making it harder to escape from a task.', evidence: 'raising the effort needed to escape' },
            ],
          },
        ],
      },
    ],
  },
}
