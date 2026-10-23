import type { IeltsTest, Option } from '../../types'

// Original reading practice test 31 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const housingHeadings: Option[] = [
  { value: 'i', label: 'Government schemes for first-time buyers' },
  { value: 'ii', label: 'What else the money could have done' },
  { value: 'iii', label: 'A slogan that does not survive scrutiny' },
  { value: 'iv', label: 'Ownership as a form of enforced saving' },
  { value: 'v', label: 'How mortgage interest rates are set' },
  { value: 'vi', label: 'Why the length of stay changes the answer' },
  { value: 'vii', label: 'The true expenses of owning' },
  { value: 'viii', label: 'Freedom versus stability' },
  { value: 'ix', label: 'The rising cost of renting in cities' },
]

const noteParagraphs: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

export const practiceReading31: IeltsTest = {
  id: 'practice-reading-31',
  title: 'Practice Test 31 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'B', 2: 'C', 3: 'B', 4: 'A',
      5: ['absorb'], 6: ['reflects', 'reflect'], 7: ['water'], 8: ['mirrors', 'mirror'], 9: ['appliances'],
      10: 'FALSE', 11: 'TRUE', 12: 'FALSE', 13: 'NOT GIVEN',
      14: 'iii', 15: 'vii', 16: 'ii', 17: 'vi', 18: 'viii', 19: 'iv',
      20: 'NO', 21: 'YES', 22: 'YES', 23: 'NOT GIVEN', 24: 'NO',
      25: 'A', 26: 'D',
      27: 'D', 28: 'C', 29: 'G', 30: 'E', 31: 'F',
      32: ['verbatim'], 33: ['facts'], 34: ['apply'], 35: ['reproduce'], 36: ['modest'],
      37: ['unrelated online tasks', 'online tasks'], 38: ['Cornell University', 'Cornell'], 39: ['key questions', 'questions'], 40: ['the internet', 'internet'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Why the Wi-Fi is slow',
        html: `
          <p>Few things provoke as much domestic frustration as a slow internet connection. A video freezes, a call drops, and the usual response is to blame the internet provider. Sometimes that is correct. Very often, however, the problem lies not in the connection that enters the home but in the wireless network that distributes it from room to room, and that is something householders can usually improve themselves.</p>
          <p>Wi-Fi works by sending data as radio waves between a router and the devices around it. For many years most home networks used a band of frequencies around 2.4 gigahertz, and most routers now also offer a second band around 5 gigahertz; the newest equipment can use a third band at 6 gigahertz. The bands behave differently. Lower frequencies travel further and pass through walls and floors more easily, so a 2.4 gigahertz signal reaches distant rooms that a 5 gigahertz signal may not. Higher frequencies, on the other hand, can carry data much faster and are usually far less crowded.</p>
          <p>Crowding is a serious problem in the lower band. It is divided into channels, but these overlap, and in most countries only three can be used without interfering with one another. In a block of flats where dozens of neighbouring networks share those three channels, each one has to wait for the others, much as cars do on a congested road. The band is also shared with other equipment. Bluetooth devices use it, and microwave ovens operate at almost exactly the same frequency, which is why a video call may stutter whenever someone heats up their lunch.</p>
          <p>Obstacles matter as much as distance. Radio waves are weakened by dense materials, so brick and concrete walls absorb a good deal of the signal, while metal reflects it. Less obviously, water also absorbs these frequencies well, which means that a large fish tank, or even a crowd of people, can reduce signal strength. Mirrors, which have a thin metal backing, and large appliances such as refrigerators can create areas of particularly poor reception behind them.</p>
          <p>Where the router is placed is therefore critical, and the most common location is usually the worst. Routers are typically installed wherever the line enters the house, often at floor level in a hallway or hidden inside a cupboard. Because the signal spreads outwards in all directions, a router placed near the centre of the home and raised off the floor will serve far more of it. Keeping it away from thick walls, metal objects and the microwave oven helps further.</p>
          <p>It also helps to understand that a wireless network is a shared resource. Devices on the same network take turns to transmit, so every phone, tablet, television and smart speaker competes for the same airtime. An older device that can only communicate slowly takes longer to send each piece of data, and while it is doing so the others must wait. For this reason, adding more devices may slow the whole network even if none of them appears to be doing very much.</p>
          <p>For large or awkwardly shaped homes, a single router may not be enough. Simple range extenders repeat the signal further, but many of them must receive and retransmit on the same channel, which can roughly halve the speed available to devices connected through them. Mesh systems, which use several units that communicate with one another, generally perform better, though they are more expensive. Before buying anything, however, it is worth carrying out a simple test: measure the speed with a device connected directly to the router by a cable. If that is also slow, the fault lies with the connection itself, and no amount of wireless equipment will cure it.</p>`,
        groups: [
          {
            id: 'r1a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 1, text: 'According to the writer, a slow connection is frequently caused by', evidence: 'the problem lies not in the connection that enters the home but in the wireless network that distributes it from room to room', options: [{ value: 'A', label: 'the company that provides the internet service.' }, { value: 'B', label: 'the network that carries the signal around the home.' }, { value: 'C', label: 'the use of out-of-date devices.' }, { value: 'D', label: 'interference from neighbouring flats.' }] },
              { number: 2, text: 'What is the main advantage of the 2.4 gigahertz band?', evidence: 'Lower frequencies travel further and pass through walls and floors more easily', options: [{ value: 'A', label: 'It carries data more quickly.' }, { value: 'B', label: 'It is used by fewer networks.' }, { value: 'C', label: 'It reaches rooms further from the router.' }, { value: 'D', label: 'It is available on the newest equipment only.' }] },
              { number: 3, text: 'Why can a microwave oven disrupt a video call?', evidence: 'microwave ovens operate at almost exactly the same frequency', options: [{ value: 'A', label: 'Its metal case reflects the signal.' }, { value: 'B', label: 'It uses nearly the same frequency as the lower Wi-Fi band.' }, { value: 'C', label: 'It heats the water that absorbs the signal.' }, { value: 'D', label: 'It contains a Bluetooth transmitter.' }] },
              { number: 4, text: 'Why might adding devices slow down a network?', evidence: 'Devices on the same network take turns to transmit, so every phone, tablet, television and smart speaker competes for the same airtime.', options: [{ value: 'A', label: 'Devices compete for the time available to send data.' }, { value: 'B', label: 'Each device weakens the signal of the router.' }, { value: 'C', label: 'Routers can only connect to a fixed number of devices.' }, { value: 'D', label: 'New devices use a different frequency band.' }] },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the table below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>How obstacles affect Wi-Fi signals</strong></p>
              <table>
                <tr><th>Obstacle</th><th>Effect</th></tr>
                <tr><td>brick and concrete walls</td><td>{{5}} a large part of the signal</td></tr>
                <tr><td>metal</td><td>{{6}} the signal</td></tr>
                <tr><td>{{7}}, for example in a fish tank or a crowd</td><td>absorbs the signal</td></tr>
                <tr><td>{{8}}, because of their thin metal backing</td><td>create areas of poor reception</td></tr>
                <tr><td>large {{9}}, such as refrigerators</td><td>create areas of poor reception</td></tr>
              </table>`,
            questions: [
              { number: 5, evidence: 'brick and concrete walls absorb a good deal of the signal' },
              { number: 6, evidence: 'while metal reflects it' },
              { number: 7, evidence: 'water also absorbs these frequencies well' },
              { number: 8, evidence: 'Mirrors, which have a thin metal backing' },
              { number: 9, evidence: 'large appliances such as refrigerators can create areas of particularly poor reception' },
            ],
          },
          {
            id: 'r1c', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 10, text: 'In most countries, the 2.4 gigahertz band is divided into only three channels.', evidence: 'It is divided into channels, but these overlap, and in most countries only three can be used without interfering with one another.' },
              { number: 11, text: 'Routers are often installed in locations where they perform badly.', evidence: 'the most common location is usually the worst' },
              { number: 12, text: 'Mesh systems are generally cheaper than range extenders.', evidence: 'generally perform better, though they are more expensive' },
              { number: 13, text: 'Most range extenders sold today can be combined with mesh systems.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Renting or buying: a question of more than money',
        html: `
          <p><span class="passage-letter">A</span> In many countries, owning a home is regarded as a sign of adulthood and financial success, and renting as something to be endured until a deposit can be saved. The phrase most often heard is that renting is throwing money away. It is a powerful slogan, but as a piece of financial analysis it is misleading, because it compares the whole of a tenant's rent with only part of what an owner pays.</p>
          <p><span class="passage-letter">B</span> An owner's costs are easy to underestimate. The largest is usually the interest on a mortgage, which, like rent, is paid to someone else and buys nothing permanent. Then there are the costs that tenants normally do not bear directly: repairs and maintenance, property taxes in many places, building insurance and, for owners of flats, service charges. A new roof or a broken boiler can cost a substantial sum without warning. None of this money builds up as wealth; only the part of each mortgage payment that reduces the loan itself does that.</p>
          <p><span class="passage-letter">C</span> There is also a hidden cost that economists call opportunity cost. The money tied up in a deposit could otherwise have been invested elsewhere and earned a return. A fair comparison therefore asks not only what a home costs to own but what the buyer gives up by putting savings into it. If property prices rise faster than other investments, owners do well; if they rise more slowly, or fall, a tenant who invested the same sum may end up better off. The comparison is complicated further by borrowing: because most buyers use a mortgage, a modest rise in house prices can produce a large gain relative to the deposit, while a fall of the same size can wipe the deposit out entirely. Neither outcome is guaranteed, and the history of housing markets includes long periods of falling prices as well as spectacular booms.</p>
          <p><span class="passage-letter">D</span> Time is perhaps the most important factor of all. Buying and selling a home involves large one-off expenses, including legal fees, surveys, agents' commission and, in many countries, a tax on the purchase. These costs are paid however long the owner stays. Spread over twenty years they are modest, but for someone who sells after two or three years they can easily outweigh any rise in value. As a broad rule, the shorter the period a person expects to stay in one place, the stronger the case for renting.</p>
          <p><span class="passage-letter">E</span> Money is not the only consideration. Renting offers flexibility: a tenant can move for a new job, a relationship or a better school with relatively little cost or delay. Owning offers security and control. An owner cannot be asked to leave at the end of a tenancy and is free to redecorate, keep pets or alter the building. Depending on the strength of tenants' rights where they live, renters may face rent increases or the sale of the property they live in. Many people also value the sense of belonging that comes from staying in one neighbourhood for years. How these advantages are weighed is a matter of personal circumstances and preference, not arithmetic.</p>
          <p><span class="passage-letter">F</span> There is one financial argument for ownership that deserves more attention than it usually receives. A mortgage obliges the owner to save: each month, part of the payment reduces the debt, and the owner cannot easily decide to spend it instead. Tenants who intend to invest the difference between renting and owning frequently fail to do so. For people who find saving difficult, this compulsion may be worth more than any calculation suggests. The decision, in short, is less about whether renting wastes money than about how long one plans to stay, how one would otherwise use one's savings and which kind of security one values more.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: housingHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'It is a powerful slogan, but as a piece of financial analysis it is misleading' },
              { number: 15, text: 'Paragraph B', evidence: "An owner's costs are easy to underestimate." },
              { number: 16, text: 'Paragraph C', evidence: 'The money tied up in a deposit could otherwise have been invested elsewhere and earned a return.' },
              { number: 17, text: 'Paragraph D', evidence: 'the shorter the period a person expects to stay in one place, the stronger the case for renting' },
              { number: 18, text: 'Paragraph E', evidence: 'Renting offers flexibility' },
              { number: 19, text: 'Paragraph F', evidence: 'A mortgage obliges the owner to save' },
            ],
          },
          {
            id: 'r2b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 20, text: 'The saying that renting is throwing money away accurately describes the finances involved.', evidence: 'as a piece of financial analysis it is misleading' },
              { number: 21, text: 'Mortgage interest, like rent, does not create lasting wealth.', evidence: 'which, like rent, is paid to someone else and buys nothing permanent' },
              { number: 22, text: 'Home owners can sometimes end up worse off than tenants who invested their savings.', evidence: 'a tenant who invested the same sum may end up better off' },
              { number: 23, text: 'The costs of buying and selling a home are higher in Europe than in other regions.' },
              { number: 24, text: 'Most tenants who plan to invest the money they save by renting succeed in doing so.', evidence: 'Tenants who intend to invest the difference between renting and owning frequently fail to do so.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-multi', instructions: 'Which TWO of the following are mentioned as advantages of owning a home? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'not having to leave when an agreement ends' },
              { value: 'B', label: 'lower monthly payments than renting' },
              { value: 'C', label: 'freedom from the cost of repairs' },
              { value: 'D', label: 'being able to make changes to the property' },
              { value: 'E', label: 'being able to move easily for work' },
            ],
            questions: [
              { number: 25, evidence: 'An owner cannot be asked to leave at the end of a tenancy' },
              { number: 26, evidence: 'is free to redecorate, keep pets or alter the building' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Pen or keyboard? The science of taking notes',
        html: `
          <p><span class="passage-letter">A</span> For generations, students took notes with pen and paper. In many lecture halls today, the view from the back row is a sea of laptop screens. Since typing is faster than handwriting for most people, and typed notes are neat, searchable and easy to share, the change might seem an obvious improvement. A widely publicised study in 2014 suggested otherwise, and the debate it started has continued ever since.</p>
          <p><span class="passage-letter">B</span> In the study, university students watched short recorded talks and took notes either on laptops or by hand, and were then tested on what they had learned. Those using laptops wrote considerably more, and much of what they wrote copied the speaker's words exactly. On questions asking them to recall facts, the two groups performed similarly, but on questions requiring them to understand and apply ideas, students who had written by hand did better. Even when laptop users were explicitly told not to copy the talk word for word, their notes remained largely verbatim.</p>
          <p><span class="passage-letter">C</span> The researchers' explanation concerned the process of writing rather than the tool itself. Because handwriting is slow, a student writing by hand cannot record everything and must decide what matters, putting ideas into his or her own words. This selection and rephrasing, they argued, forces the student to think about the material while listening. A fast typist, by contrast, can transcribe without much thought, so that the words may pass from the ears to the fingers without being understood on the way.</p>
          <p><span class="passage-letter">D</span> The finding was widely reported, and some teachers banned laptops from their classes as a result. Science, however, depends on results being repeated. Later attempts to reproduce the experiments, including a substantial replication published several years afterwards, found differences between the two groups that were smaller and less consistent than the original study had suggested. This does not show that the original researchers were wrong, but it suggests that the advantage of handwriting, if it exists, is more modest than the headlines implied.</p>
          <p><span class="passage-letter">E</span> A much clearer case can be made against laptops on a different ground: distraction. A laptop connected to the internet offers messages, social media and shopping alongside the lecture, and students who switch between them learn less. In one experiment, students who were asked to perform unrelated online tasks during a lecture scored lower on a later test, and so did students who were not using laptops themselves but could see the screen of someone who was. The cost of a laptop, in other words, may fall partly on the neighbours.</p>
          <p><span class="passage-letter">F</span> Psychologists have long distinguished between two ways in which notes help. The first is that the act of taking notes encourages a student to process information while hearing it. The second is that the notes provide a record which can be reviewed later. The second function is easily neglected, yet research suggests it is at least as important as the first: notes that are never looked at again do relatively little. Typed notes, being complete and legible, may in fact be the better resource for later revision, provided the student actually uses them.</p>
          <p><span class="passage-letter">G</span> The practical conclusion is less about the choice of tool than about how it is used. Whether writing or typing, students benefit from summarising in their own words rather than copying, from leaving space to add questions and connections afterwards, and from returning to their notes soon after the class. One long-established method, developed at Cornell University in the 1950s, divides each page into a column for notes, a narrower column for key questions written afterwards and a space at the bottom for a short summary. Students who prefer a laptop are best advised to disconnect from the internet during class.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information?',
            options: noteParagraphs,
            questions: [
              { number: 27, text: 'a reference to action taken by some teachers in response to research', evidence: 'some teachers banned laptops from their classes as a result' },
              { number: 28, text: 'an explanation of why slower writing might help understanding', evidence: 'This selection and rephrasing, they argued, forces the student to think about the material while listening.' },
              { number: 29, text: 'a description of a way of organising the page', evidence: 'divides each page into a column for notes, a narrower column for key questions written afterwards and a space at the bottom for a short summary' },
              { number: 30, text: 'evidence that one person’s activity can harm the learning of others', evidence: 'and so did students who were not using laptops themselves but could see the screen of someone who was' },
              { number: 31, text: 'a claim that reviewing notes matters as much as making them', evidence: 'research suggests it is at least as important as the first' },
            ],
          },
          {
            id: 'r3b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>The 2014 study and what followed</strong></p>
              <p>Students who typed their notes wrote more than those writing by hand, and even when warned against copying, their notes stayed largely {{32}}. The groups did equally well on questions about {{33}}, but handwriting students were better when they had to understand and {{34}} ideas. When other researchers tried to {{35}} the experiments, the differences they found were smaller, which suggests that any benefit of handwriting is {{36}}.</p>`,
            questions: [
              { number: 32, evidence: 'their notes remained largely verbatim' },
              { number: 33, evidence: 'On questions asking them to recall facts, the two groups performed similarly' },
              { number: 34, evidence: 'on questions requiring them to understand and apply ideas, students who had written by hand did better' },
              { number: 35, evidence: 'Later attempts to reproduce the experiments' },
              { number: 36, evidence: 'the advantage of handwriting, if it exists, is more modest than the headlines implied' },
            ],
          },
          {
            id: 'r3c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 37, text: 'What were students asked to do during the lecture in the experiment on distraction?', evidence: 'students who were asked to perform unrelated online tasks during a lecture scored lower on a later test' },
              { number: 38, text: 'Where was the method of dividing the page into columns developed?', evidence: 'developed at Cornell University in the 1950s' },
              { number: 39, text: 'What is written in the narrower column of the page?', evidence: 'a narrower column for key questions written afterwards' },
              { number: 40, text: 'What should students who use a laptop disconnect from during class?', evidence: 'Students who prefer a laptop are best advised to disconnect from the internet during class.' },
            ],
          },
        ],
      },
    ],
  },
}
