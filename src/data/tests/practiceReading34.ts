import type { IeltsTest, Option } from '../../types'

// Original reading practice test 34 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const delayEndings: Option[] = [
  { value: 'A', label: 'brings relief that makes further delay more likely.' },
  { value: 'B', label: 'performed better than every other group.' },
  { value: 'C', label: 'combines several features that make a task unattractive.' },
  { value: 'D', label: 'procrastinated less before the following examination.' },
  { value: 'E', label: 'should be avoided by students with heavy workloads.' },
  { value: 'F', label: 'remove the need to make a decision when motivation is low.' },
  { value: 'G', label: 'often set dates too late to be of much help.' },
  { value: 'H', label: 'usually take more time than they save.' },
]

const cloudHeadings: Option[] = [
  { value: 'i', label: 'The environmental cost of data centres' },
  { value: 'ii', label: 'Losing access to files that still exist' },
  { value: 'iii', label: 'What the cloud actually is' },
  { value: 'iv', label: 'Why storage prices keep falling' },
  { value: 'v', label: 'When copying spreads the damage' },
  { value: 'vi', label: 'A rule for never relying on one copy' },
  { value: 'vii', label: 'Strong protection against broken machines' },
  { value: 'viii', label: 'How to choose a strong password' },
  { value: 'ix', label: 'Who else may be able to see your files' },
]

const compostGroups: Option[] = [
  { value: 'A', label: 'greens' },
  { value: 'B', label: 'browns' },
  { value: 'C', label: 'materials best kept out of a home heap' },
]

export const practiceReading34: IeltsTest = {
  id: 'practice-reading-34',
  title: 'Practice Test 34 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'NO', 2: 'YES', 3: 'NOT GIVEN', 4: 'NO', 5: 'YES',
      6: 'A', 7: 'C', 8: 'D', 9: 'F', 10: 'G',
      11: ['five minutes', '5 minutes'], 12: ['if-then format', 'if-then', 'an if-then format'], 13: ['another room', 'in another room'],
      14: 'iii', 15: 'vii', 16: 'v', 17: 'ii', 18: 'vi', 19: 'ix',
      20: 'FALSE', 21: 'TRUE', 22: 'FALSE', 23: 'NOT GIVEN',
      24: ['ransomware'], 25: ['off-site', 'offsite'], 26: ['key'],
      27: 'B', 28: 'A', 29: 'D',
      30: 'A', 31: 'D',
      32: ['sponge'], 33: ['60', 'sixty'], 34: ['diseases'], 35: ['weeds'], 36: ['industrial'],
      37: 'A', 38: 'B', 39: 'C', 40: 'B',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Why we put things off',
        html: `
          <p>Almost everyone procrastinates sometimes, and surveys suggest that a sizeable minority of adults, and a much larger share of students, regard themselves as chronic procrastinators. The usual explanations are laziness and poor time management. Psychologists who study the problem increasingly argue that both explanations miss the point. Procrastinators are often busy people, and many of them know exactly how much time a task will take. What they struggle with is not time but feelings, and techniques that ignore this tend to fail.</p>
          <p>On this view, procrastination is a way of managing emotions. Certain tasks provoke unpleasant feelings: boredom, frustration, anxiety about failure or a sense of not knowing where to begin. Putting the task off brings immediate relief, and that relief is itself a reward, which makes delay more likely the next time. The cost is paid later, often with interest, in the form of rushed work and stress, but because it lies in the future it weighs less heavily than the discomfort of the present. Seen in this way, procrastination is less a failure of planning than a short-term victory of mood over intention.</p>
          <p>Some tasks are especially likely to be avoided. Research has identified several characteristics that make a task aversive, including being boring, difficult, ambiguous or lacking in structure, and having little personal meaning. A vague instruction such as "work on the essay" combines several of these at once, which is one reason why large, open-ended projects are notorious for being postponed. A specific first step, such as writing the opening paragraph, removes much of the ambiguity.</p>
          <p>Because the problem is emotional, harsh self-criticism tends to make it worse. Feeling guilty about delay adds to the unpleasant feelings associated with a task, and so increases the temptation to avoid it. In one study of university students, those who reported forgiving themselves for having procrastinated before a first examination procrastinated less when preparing for the next one. Self-forgiveness in this sense does not mean excusing the behaviour, but letting go of the negative feelings that would otherwise become attached to the task.</p>
          <p>Several practical techniques follow from this research. One is to make the first step so small that it provokes little resistance: agreeing to work for only five minutes is often enough to start, and once started, people frequently continue. Another is to form what psychologists call implementation intentions, plans that specify when and where an action will happen in an if-then format, such as "if it is nine o'clock on Tuesday, I will open the report at my desk". Such plans hand the decision over to the situation, so that it does not have to be made again at the moment when motivation is low.</p>
          <p>Deadlines also matter, though not quite in the way many people expect. In a well-known experiment, students who were given evenly spaced deadlines for a series of assignments performed better than those allowed to set their own deadlines, and both groups did better than students who had a single deadline at the end of the course. Students who chose their own deadlines often set them too late to be useful, suggesting that people recognise their tendency to delay but underestimate how strong it is.</p>
          <p>Finally, the environment can be arranged to make avoidance harder. Leaving a phone in another room, blocking distracting websites during working hours or working alongside other people reduces the number of easy escapes. None of these methods will eliminate procrastination entirely, and occasional delay is harmless. The point is to recognise procrastination for what it usually is, a way of escaping discomfort, and to make the task a little less uncomfortable to begin.</p>`,
        groups: [
          {
            id: 'r1a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 1? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Procrastination is mainly the result of laziness.', evidence: 'Psychologists who study the problem increasingly argue that both explanations miss the point.' },
              { number: 2, text: 'Many procrastinators can judge accurately how long a task will take.', evidence: 'many of them know exactly how much time a task will take' },
              { number: 3, text: 'Procrastination is more common today than it was in the past.' },
              { number: 4, text: 'Being hard on oneself is an effective way to stop procrastinating.', evidence: 'Because the problem is emotional, harsh self-criticism tends to make it worse.' },
              { number: 5, text: 'Putting things off now and then is not a cause for concern.', evidence: 'occasional delay is harmless' },
            ],
          },
          {
            id: 'r1b', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–H, from the list below.',
            options: delayEndings,
            questions: [
              { number: 6, text: 'Putting off an unpleasant task', evidence: 'Putting the task off brings immediate relief, and that relief is itself a reward, which makes delay more likely the next time.' },
              { number: 7, text: 'An instruction such as "work on the essay"', evidence: 'combines several of these at once' },
              { number: 8, text: 'Students who forgave themselves for procrastinating', evidence: 'procrastinated less when preparing for the next one' },
              { number: 9, text: 'Implementation intentions', evidence: 'so that it does not have to be made again at the moment when motivation is low' },
              { number: 10, text: 'Students who were allowed to choose their own deadlines', evidence: 'Students who chose their own deadlines often set them too late to be useful' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
            questions: [
              { number: 11, text: 'For how long might a person agree to work in order to get started?', evidence: 'agreeing to work for only five minutes is often enough to start' },
              { number: 12, text: 'In what format are implementation intentions written?', evidence: 'in an if-then format' },
              { number: 13, text: 'Where might a phone be left to make avoidance harder?', evidence: 'Leaving a phone in another room' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Your files in the cloud',
        html: `
          <p><span class="passage-letter">A</span> Few phrases in modern technology are as misleading as "the cloud". Photographs, documents and emails stored in the cloud do not float in the air; they sit on hard drives and other storage devices in large buildings called data centres, which are owned by technology companies and located all over the world. To store something in the cloud is, quite simply, to keep it on someone else's computer and to reach it over the internet.</p>
          <p><span class="passage-letter">B</span> Large providers protect data against hardware failure with considerable care. Files are typically copied onto several separate devices, often in different buildings, so that the failure of a single drive, or even of a whole site, does not cause them to be lost. Data centres also have backup power supplies, cooling systems and security staff, and drives that show signs of wear are usually replaced before they fail. Judged purely on the risk of mechanical failure, a file held by a major provider is usually far safer than one kept only on a laptop, whose drive may fail, or which may be dropped, stolen or left on a train.</p>
          <p><span class="passage-letter">C</span> Yet copying is not the same as backing up. Many cloud services synchronise files between devices, so that a change made on one appears on all the others. That is convenient, but it also means that if a file is accidentally deleted or overwritten, the deletion or the error is faithfully copied everywhere. The same applies to ransomware, malicious software that encrypts files and demands payment to release them: a synchronised folder may simply spread the encrypted versions. Some services keep earlier versions of files, or a recycle bin, for a limited period, but these protections have time limits and are not always switched on.</p>
          <p><span class="passage-letter">D</span> There are other risks that duplicated hardware cannot address. An account may be locked if a password is forgotten and the recovery details are out of date, or it may be taken over by someone who has stolen the password. Providers occasionally close services, change their terms or suspend accounts that they believe have broken their rules, and users have limited power to object. A business that depends on a single account can find its work halted overnight. In each case, the files may survive perfectly on the provider's machines while being out of reach of their owner.</p>
          <p><span class="passage-letter">E</span> For this reason, specialists often recommend a simple guideline known as the 3-2-1 rule. It suggests keeping at least three copies of important data, on at least two different types of storage, with at least one copy kept off-site, away from the home or office. In practice, a household might keep its files on a computer, back them up regularly to an external drive, and also keep a copy with a cloud service. The aim is that no single event, whether a fire, a theft, a hacked account or a mistaken deletion, can destroy every copy at once.</p>
          <p><span class="passage-letter">F</span> Privacy is a separate question. Files held by a provider can, in principle, be accessed by that provider, and may be disclosed to authorities under the laws of the country in which they are stored. Some services offer end-to-end encryption, in which files are encrypted on the user's own device before upload and the provider does not hold the key, so that even its own staff cannot read them. The trade-off is that if the user loses the key or password, nobody, including the provider, can recover the files. Every storage choice, in short, involves balancing convenience, security and control, and the safest arrangement is rarely the most convenient.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: cloudHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: "To store something in the cloud is, quite simply, to keep it on someone else's computer and to reach it over the internet." },
              { number: 15, text: 'Paragraph B', evidence: 'Large providers protect data against hardware failure with considerable care.' },
              { number: 16, text: 'Paragraph C', evidence: 'the deletion or the error is faithfully copied everywhere' },
              { number: 17, text: 'Paragraph D', evidence: "the files may survive perfectly on the provider's machines while being out of reach of their owner" },
              { number: 18, text: 'Paragraph E', evidence: 'no single event, whether a fire, a theft, a hacked account or a mistaken deletion, can destroy every copy at once' },
              { number: 19, text: 'Paragraph F', evidence: 'Files held by a provider can, in principle, be accessed by that provider' },
            ],
          },
          {
            id: 'r2b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 2? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 20, text: 'Data centres are found in only a small number of countries.', evidence: 'located all over the world' },
              { number: 21, text: 'A file kept only on a laptop is usually more likely to be lost through hardware problems than one held by a major provider.', evidence: 'a file held by a major provider is usually far safer than one kept only on a laptop' },
              { number: 22, text: 'Cloud services keep earlier versions of files for as long as the user wishes.', evidence: 'these protections have time limits and are not always switched on' },
              { number: 23, text: 'Most people who use cloud storage follow the 3-2-1 rule.' },
            ],
          },
          {
            id: 'r2c', type: 'inline-gap', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <ul>
                <li>Malicious software called {{24}} can encrypt files and demand payment.</li>
                <li>The 3-2-1 rule recommends keeping at least one copy {{25}}.</li>
                <li>With end-to-end encryption, the provider does not have the {{26}}.</li>
              </ul>`,
            questions: [
              { number: 24, evidence: 'ransomware, malicious software that encrypts files and demands payment to release them' },
              { number: 25, evidence: 'with at least one copy kept off-site' },
              { number: 26, evidence: 'the provider does not hold the key' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Turning waste into soil: the science of composting',
        html: `
          <p>A large share of what many households throw away is organic: vegetable peelings, coffee grounds, tea leaves, garden trimmings and leftover food. Sent to landfill, this material is buried and compressed, and without access to oxygen it decomposes slowly, producing methane, a greenhouse gas far more potent than carbon dioxide. Composting offers an alternative. Given the right conditions, the same material can be turned within months into a dark, crumbly substance that improves the soil.</p>
          <p>Composting is carried out by living organisms. Bacteria and fungi do most of the chemical work of breaking down plant material, while larger creatures such as worms, woodlice and beetles shred and mix it. Crucially, the organisms involved need oxygen. This is what distinguishes a compost heap from a landfill site, and it explains why a well-managed heap smells earthy rather than foul. When oxygen runs short, different microbes take over, and the heap begins to give off the sour smells of rotten eggs or ammonia.</p>
          <p>The organisms also need a balanced diet. Gardeners divide compost materials into two broad groups. So-called greens, such as grass cuttings, vegetable scraps and coffee grounds, are moist and rich in nitrogen, which the microbes use to grow and multiply. So-called browns, including dry leaves, straw, shredded cardboard and paper, are rich in carbon, which supplies energy, and they also create air spaces within the heap. A heap made mostly of greens tends to become wet, compact and smelly, while one made mostly of browns stays dry and breaks down very slowly. A mixture of roughly equal volumes is a common recommendation.</p>
          <p>Moisture and air must be balanced too. The material should be about as damp as a wrung-out sponge: if it is too dry, microbial activity slows to a crawl, and if it is too wet, water fills the spaces that air would otherwise occupy. Turning the heap with a fork every few weeks introduces fresh oxygen and moves material from the cooler edges into the centre. Doing so speeds up the process considerably. A heap that is simply left alone, however, will still turn into compost eventually.</p>
          <p>When conditions are right and the heap is large enough, it heats up, sometimes reaching 60 degrees Celsius or more at its centre. This heat is a by-product of microbial activity, and it has a useful effect: sustained high temperatures kill many weed seeds and the organisms that cause plant diseases. Most small garden heaps, however, never become hot enough for long enough to be relied on for this, which is why diseased plants and the roots of persistent weeds are best kept out.</p>
          <p>Some materials should be excluded for other reasons. Meat, fish and dairy products are generally unsuitable for a home heap because they attract rats and other pests and can produce strong odours, although some enclosed systems are designed to handle them. Dog and cat faeces can carry organisms that are harmful to people. Products labelled compostable deserve caution: many are designed to break down in industrial composting facilities, which reach higher temperatures than garden heaps, and may persist for a long time in a home bin.</p>
          <p>Finished compost is dark, crumbly and pleasantly earthy, and most of the original materials can no longer be recognised. Spread on beds or dug into the ground, it improves the structure of the soil, helps sandy soils hold water and heavy clay soils drain, and feeds the organisms that keep soil healthy. A household that composts its kitchen and garden waste therefore gains twice over: it sends less to landfill, and it produces, at no cost, a material that gardeners would otherwise have to buy.</p>`,
        groups: [
          {
            id: 'r3a', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 27, text: 'Why does organic waste in landfill produce methane?', evidence: 'without access to oxygen it decomposes slowly, producing methane', options: [{ value: 'A', label: 'It is mixed with plastic waste.' }, { value: 'B', label: 'It breaks down without oxygen.' }, { value: 'C', label: 'It is heated by the sun.' }, { value: 'D', label: 'It contains too many browns.' }] },
              { number: 28, text: 'A heap that smells of rotten eggs is most likely to', evidence: 'When oxygen runs short, different microbes take over, and the heap begins to give off the sour smells of rotten eggs or ammonia.', options: [{ value: 'A', label: 'be short of oxygen.' }, { value: 'B', label: 'contain too much cardboard.' }, { value: 'C', label: 'be ready to use.' }, { value: 'D', label: 'have reached a very high temperature.' }] },
              { number: 29, text: 'What does the writer say about turning a compost heap?', evidence: 'A heap that is simply left alone, however, will still turn into compost eventually.', options: [{ value: 'A', label: 'It should be done every day.' }, { value: 'B', label: 'It makes the heap too cold.' }, { value: 'C', label: 'It is the only way to produce compost.' }, { value: 'D', label: 'It is helpful but not essential.' }] },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO of the following are given as benefits of adding browns to a heap? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'They provide a source of energy for microbes.' },
              { value: 'B', label: 'They supply the nitrogen that microbes need to multiply.' },
              { value: 'C', label: 'They keep the heap moist.' },
              { value: 'D', label: 'They make spaces for air within the heap.' },
              { value: 'E', label: 'They kill weed seeds.' },
            ],
            questions: [
              { number: 30, evidence: 'are rich in carbon, which supplies energy' },
              { number: 31, evidence: 'they also create air spaces within the heap' },
            ],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
            bodyHtml: `
              <p><strong>Managing a heap</strong></p>
              <p>Compost should be roughly as damp as a wrung-out {{32}}. In a large heap the centre may reach {{33}} degrees Celsius, and such heat kills many weed seeds and organisms that cause plant {{34}}. Because small heaps rarely stay this hot, diseased plants and the roots of persistent {{35}} should not be added. Many products labelled compostable are designed for {{36}} facilities and may last a long time in a garden bin.</p>`,
            questions: [
              { number: 32, evidence: 'The material should be about as damp as a wrung-out sponge' },
              { number: 33, evidence: 'sometimes reaching 60 degrees Celsius or more at its centre' },
              { number: 34, evidence: 'the organisms that cause plant diseases' },
              { number: 35, evidence: 'diseased plants and the roots of persistent weeds are best kept out' },
              { number: 36, evidence: 'many are designed to break down in industrial composting facilities' },
            ],
          },
          {
            id: 'r3d', type: 'matching', instructions: 'Classify the following materials as belonging to A, B or C. NB You may use any letter more than once.',
            options: compostGroups,
            questions: [
              { number: 37, text: 'coffee grounds', evidence: 'So-called greens, such as grass cuttings, vegetable scraps and coffee grounds' },
              { number: 38, text: 'shredded cardboard', evidence: 'So-called browns, including dry leaves, straw, shredded cardboard and paper' },
              { number: 39, text: 'dairy products', evidence: 'Meat, fish and dairy products are generally unsuitable for a home heap' },
              { number: 40, text: 'dry leaves', evidence: 'So-called browns, including dry leaves' },
            ],
          },
        ],
      },
    ],
  },
}
