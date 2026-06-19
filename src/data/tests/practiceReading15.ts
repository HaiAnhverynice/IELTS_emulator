import type { IeltsTest, Option } from '../../types'

// Original reading practice test 15 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const migrationHeadings: Option[] = [
  { value: 'i', label: 'Why birds make the journey' },
  { value: 'ii', label: 'The dangers of the trip' },
  { value: 'iii', label: 'How far some birds travel' },
  { value: 'iv', label: 'Finding the way' },
  { value: 'v', label: 'Preparing the body for the flight' },
  { value: 'vi', label: 'How we know where birds go' },
  { value: 'vii', label: 'Birds that do not migrate' },
  { value: 'viii', label: 'A changing climate and its effects' },
  { value: 'ix', label: 'Travelling together' },
]

export const practiceReading15: IeltsTest = {
  id: 'practice-reading-15',
  title: 'Practice Test 15 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'TRUE', 3: 'FALSE', 4: 'NOT GIVEN', 5: 'TRUE', 6: 'FALSE',
      7: ['Egypt', 'Egyptians'], 8: 'flame', 9: 'oil', 10: 'electric',
      11: ['rocks', 'the rocks'], 12: ['lenses', 'lens'], 13: ['automatically'],
      14: 'i', 15: 'v', 16: 'iv', 17: 'iii', 18: 'ii', 19: 'viii',
      20: 'C', 21: 'A', 22: 'D', 23: 'B',
      24: 'B', 25: 'C', 26: 'A',
      27: 'NO', 28: 'YES', 29: 'NOT GIVEN', 30: 'YES', 31: 'NO',
      32: 'B', 33: 'C',
      34: 'routine', 35: 'creativity', 36: 'skills', 37: 'training', 38: 'judgement', 39: 'caring', 40: 'history',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'The lighthouse',
        html: `
          <p>For as long as people have gone to sea, the coast has been a place of danger as well as safety. Hidden rocks, shallow sandbanks and rocky headlands have wrecked countless ships over the centuries, often within sight of land. The lighthouse — a tall tower showing a bright light to warn sailors away from danger and to guide them safely into harbour — is one of humanity's oldest answers to this problem, and for hundreds of years it stood between sailors and disaster.</p>
          <p>The idea is an ancient one. In the old world, fires were lit on hilltops and headlands to guide ships home, and the greatest of all early lighthouses was a towering structure built at Alexandria in Egypt more than two thousand years ago. So famous was it that it was counted among the wonders of the ancient world, and its name has been borrowed for lighthouses ever since. At its top a fire blazed through the night, its light thrown out to sea so that sailors could find the harbour mouth.</p>
          <p>For many centuries the light itself remained a simple flame. A fire of wood or coal was burned at the top of the tower, and later oil-burning lamps gave a steadier and brighter glow. The great difficulty was always to make the light strong enough to be seen far out at sea. A weak light was almost useless, for it might not be spotted until a ship was already among the rocks, and so the search for a brighter, further-reaching beam went on for generations.</p>
          <p>The answer came not from a bigger flame but from cleverer use of the light. Engineers learned to place mirrors behind the lamp and, later, to surround it with specially shaped lenses that gathered the scattered light and bent it into a single powerful beam. With such a lens even a modest flame could be made to shine for many miles out to sea. By slowly rotating the lens, the keepers could also make the light appear to flash, and by giving each lighthouse its own pattern of flashes, sailors could tell one light from another and so know exactly where they were.</p>
          <p>Running a lighthouse was demanding work, often carried out in lonely and dangerous places. A keeper, sometimes with his family, lived in or beside the tower and tended the light every night, trimming the wick, refilling the oil and keeping the glass clean, whatever the weather. The most exposed lighthouses, built on bare rocks far out at sea, could be cut off by storms for weeks at a time, and the life of their keepers was one of hardship and isolation as well as duty.</p>
          <p>Today the old way of life has all but vanished. The oil lamp gave way to the electric light, and one by one the keepers were replaced by machines. Almost every lighthouse now works automatically, switching itself on at dusk and needing no one to tend it, while modern ships find their way by satellite navigation that does not depend on any light at all. Yet lighthouses have not been abandoned. They still stand guard along dangerous coasts, and many are now cherished landmarks, reminders of an age when a single faithful light was all that stood between a ship and the rocks.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Many ships were wrecked close to land.', evidence: 'have wrecked countless ships over the centuries, often within sight of land' },
              { number: 2, text: 'The lighthouse at Alexandria was counted among the wonders of the ancient world.', evidence: 'So famous was it that it was counted among the wonders of the ancient world' },
              { number: 3, text: 'A brighter beam was achieved mainly by building a bigger flame.', evidence: 'The answer came not from a bigger flame but from cleverer use of the light.' },
              { number: 4, text: 'Lighthouse keepers were usually well paid for their work.' },
              { number: 5, text: 'Each lighthouse was given its own pattern of flashes.', evidence: 'by giving each lighthouse its own pattern of flashes, sailors could tell one light from another' },
              { number: 6, text: 'Modern ships still depend mainly on lighthouse beams to navigate.', evidence: 'modern ships find their way by satellite navigation that does not depend on any light at all' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'The greatest early lighthouse was built at Alexandria in ___.', evidence: 'the greatest of all early lighthouses was a towering structure built at Alexandria in Egypt more than two thousand years ago' },
              { number: 8, text: 'For many centuries the light was a simple ___.', evidence: 'For many centuries the light itself remained a simple flame.' },
              { number: 9, text: 'Steadier, brighter light was later produced by lamps that burned ___.', evidence: 'later oil-burning lamps gave a steadier and brighter glow' },
              { number: 10, text: 'The oil lamp was eventually replaced by the ___ light.', evidence: 'The oil lamp gave way to the electric light' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'A lighthouse warns sailors away from danger such as hidden what?', evidence: 'Hidden rocks, shallow sandbanks and rocky headlands have wrecked countless ships' },
              { number: 12, text: 'What were placed around the lamp to bend the light into a single beam?', evidence: 'to surround it with specially shaped lenses that gathered the scattered light and bent it into a single powerful beam' },
              { number: 13, text: 'How do almost all lighthouses now work, needing no keeper?', evidence: 'Almost every lighthouse now works automatically, switching itself on at dusk and needing no one to tend it' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The great bird migrations',
        html: `
          <p><span class="passage-letter">A</span> Twice a year, across the whole of the globe, billions of birds take to the air and travel enormous distances between one part of the world and another. This movement, known as migration, is one of the great spectacles of nature. The reason behind it is, at heart, a search for food and good breeding conditions. Many birds breed in the far north in summer, when the long days bring a sudden abundance of insects and other food, then fly south to escape the bitter northern winter, returning the following spring to breed again.</p>
          <p><span class="passage-letter">B</span> Such journeys demand enormous effort, and birds prepare their bodies carefully beforehand. In the weeks before they set out, migrating birds eat far more than usual and lay down thick stores of fat, which serve as the fuel for the flight ahead. Some small birds nearly double their weight before departing. So efficient is this fuel that certain birds can fly for several days and nights without stopping, crossing wide oceans or deserts where there is nowhere to land and nothing to eat.</p>
          <p><span class="passage-letter">C</span> One of the deepest puzzles of migration is how the birds find their way across thousands of miles, often to the very same nesting site they used the year before. Scientists believe birds use several methods together. By day they can take their bearings from the position of the sun, and by night from the patterns of the stars. Remarkably, many birds also seem able to sense the magnetic field of the Earth, using it as a kind of inner compass, and older birds appear to learn and remember the landmarks along their route.</p>
          <p><span class="passage-letter">D</span> The distances some birds cover are almost beyond belief. While many travel a few hundred or a few thousand miles, a few make journeys that span the entire planet. One small seabird breeds in the far north and then flies all the way to the far south and back each year, chasing the summer from one end of the Earth to the other and seeing more daylight in a year than any other creature. Over a long life such a bird may travel a distance equal to several journeys to the moon and back.</p>
          <p><span class="passage-letter">E</span> Migration is also fraught with danger, and many birds do not survive the trip. The sheer effort of the flight exhausts the weak, and storms can blow exhausted birds off course or out to sea. Along the way predators gather where migrating flocks must pass, and in modern times new hazards have appeared: tall buildings and other structures into which night-flying birds may crash, and the steady loss of the marshes and forests where they have always stopped to rest and feed.</p>
          <p><span class="passage-letter">F</span> Today migration is being disturbed in a new way, by the warming of the world's climate. Spring now arrives earlier in many places, and the insects on which birds feed their young are appearing sooner than before. Birds that time their journeys by the changing length of the day may arrive at their breeding grounds to find that the peak of food has already passed. Scientists worry that species unable to adjust their timetables fast enough may struggle to raise their young, and that the ancient rhythms of migration are being thrown out of step.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F, from the list of headings below.',
            options: migrationHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'The reason behind it is, at heart, a search for food and good breeding conditions.' },
              { number: 15, text: 'Paragraph B', evidence: 'Such journeys demand enormous effort, and birds prepare their bodies carefully beforehand.' },
              { number: 16, text: 'Paragraph C', evidence: 'One of the deepest puzzles of migration is how the birds find their way across thousands of miles' },
              { number: 17, text: 'Paragraph D', evidence: 'The distances some birds cover are almost beyond belief.' },
              { number: 18, text: 'Paragraph E', evidence: 'Migration is also fraught with danger, and many birds do not survive the trip.' },
              { number: 19, text: 'Paragraph F', evidence: "Today migration is being disturbed in a new way, by the warming of the world's climate." },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Match each method of navigation to what the bird uses. Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'the stars' },
              { value: 'B', label: 'remembered landmarks' },
              { value: 'C', label: 'the sun' },
              { value: 'D', label: 'the Earth’s magnetic field' },
            ],
            questions: [
              { number: 20, text: 'taking bearings during the day', evidence: 'By day they can take their bearings from the position of the sun' },
              { number: 21, text: 'finding direction at night', evidence: 'and by night from the patterns of the stars' },
              { number: 22, text: 'an inner sense acting like a compass', evidence: 'many birds also seem able to sense the magnetic field of the Earth, using it as a kind of inner compass' },
              { number: 23, text: 'a skill that older birds learn over time', evidence: 'older birds appear to learn and remember the landmarks along their route' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'Before migrating, birds prepare by', evidence: 'migrating birds eat far more than usual and lay down thick stores of fat, which serve as the fuel for the flight ahead', options: [{ value: 'A', label: 'growing new feathers.' }, { value: 'B', label: 'storing fat as fuel.' }, { value: 'C', label: 'learning to swim.' }] },
              { number: 25, text: 'The bird that flies from the far north to the far south each year sees', evidence: 'chasing the summer from one end of the Earth to the other and seeing more daylight in a year than any other creature', options: [{ value: 'A', label: 'the fewest predators.' }, { value: 'B', label: 'the warmest seas.' }, { value: 'C', label: 'more daylight than any other creature.' }] },
              { number: 26, text: 'A warming climate threatens migrating birds because', evidence: 'Birds that time their journeys by the changing length of the day may arrive at their breeding grounds to find that the peak of food has already passed', options: [{ value: 'A', label: 'their food appears before they arrive.' }, { value: 'B', label: 'the nights become too long.' }, { value: 'C', label: 'the oceans grow too narrow.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Automation and the future of work',
        html: `
          <p>Every age of invention has brought with it a familiar fear: that machines will take away people's work and leave them with nothing to do. Two hundred years ago it was the new machines of the factories; today it is computers, robots and the rapid advance of artificial intelligence. As machines grow capable of tasks that once seemed safely human, the question returns with fresh force. Will the latest wave of automation throw great numbers of people out of work, or will it, like earlier waves, change the nature of work rather than abolish it?</p>
          <p>History offers some reassurance. Again and again, machines that destroyed certain jobs have created others, often in numbers no one foresaw. The same technologies that put some workers out of a job have made goods cheaper and opened up entirely new industries, employing millions in roles that had not previously existed. Each great wave of automation has, in the end, left more people in work than before, even as it transformed what that work was. Optimists argue that there is no reason to think the present wave will prove any different.</p>
          <p>Yet there are reasons to think this time may not be quite the same. Earlier machines mostly took over routine physical labour, the repetitive tasks of farm and factory, while leaving thinking and decision-making to people. The newest machines are different: they can increasingly handle routine mental work as well, from sorting documents to answering customer questions, and so they reach into office jobs that once seemed secure. The range of tasks that machines can do is widening fast, and it is no longer only manual workers who feel the pressure.</p>
          <p>Still, there are kinds of work that machines find very hard, and these point to where human workers are likely to remain valuable. Tasks that call for genuine creativity — inventing, designing, telling a story, solving a problem no one has met before — are far beyond what today's machines can manage. So too are tasks that depend on dealing sensitively with other people: caring for the sick, teaching the young, leading a team, persuading a doubtful customer. Jobs that combine human judgement with a personal touch are the least easily replaced of all.</p>
          <p>What seems most likely, then, is not the disappearance of work but its steady reshaping. In many jobs, machines will take over the dull and repetitive parts while leaving the more interesting and human parts to people, so that the worker and the machine end up doing the job together. A doctor may let a computer sift through scans while keeping for herself the work of judging the case and comforting the patient. In countless fields the result will be not replacement but partnership, with each side doing what it does best.</p>
          <p>The real challenge, most experts agree, is not whether there will be work but whether people will be ready for the work there is. As old jobs fade and new ones appear, workers will need to learn fresh skills, often more than once in a working life, and the new jobs may call for quite different abilities from the old. This places a heavy responsibility on education and training, which must help people adapt rather than be left behind. Managed wisely, automation could free people from drudgery and raise the comfort of all; managed badly, it could leave many stranded. The machines themselves will not decide which it is to be.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Fear that machines will destroy work is a brand-new concern.', evidence: "Every age of invention has brought with it a familiar fear: that machines will take away people's work and leave them with nothing to do." },
              { number: 28, text: 'Past waves of automation created new jobs as well as destroying old ones.', evidence: 'machines that destroyed certain jobs have created others, often in numbers no one foresaw' },
              { number: 29, text: 'Governments should pay people who lose their jobs to machines.' },
              { number: 30, text: 'Newer machines can take over some routine mental tasks.', evidence: 'they can increasingly handle routine mental work as well, from sorting documents to answering customer questions' },
              { number: 31, text: 'Creative work is easily done by today’s machines.', evidence: "Tasks that call for genuine creativity — inventing, designing, telling a story, solving a problem no one has met before — are far beyond what today's machines can manage." },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO kinds of work does the passage say machines find hard? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'sorting documents' },
              { value: 'B', label: 'creative problem-solving' },
              { value: 'C', label: 'caring for the sick' },
              { value: 'D', label: 'repetitive factory work' },
              { value: 'E', label: 'answering routine questions' },
            ],
            questions: [
              { number: 32, evidence: "Tasks that call for genuine creativity — inventing, designing, telling a story, solving a problem no one has met before — are far beyond what today's machines can manage." },
              { number: 33, evidence: 'caring for the sick, teaching the young, leading a team, persuading a doubtful customer' },
            ],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Machines are now able to do many {{34}} tasks, both physical and mental. But they are weak at
              tasks needing {{35}} and at work needing human {{38}} or a personal touch, such as {{39}} for people.
              Likely, machines and people will work in partnership, each doing what it does best. The main
              challenge is helping workers learn new {{36}} through education and {{37}}, since refusing to adapt
              could leave many behind, as past waves of automation in {{40}} have shown.</p>`,
            questions: [
              { number: 34, evidence: 'Earlier machines mostly took over routine physical labour, the repetitive tasks of farm and factory' },
              { number: 35, evidence: 'Tasks that call for genuine creativity — inventing, designing, telling a story' },
              { number: 36, evidence: 'workers will need to learn fresh skills, often more than once in a working life' },
              { number: 37, evidence: 'This places a heavy responsibility on education and training' },
              { number: 38, evidence: 'Jobs that combine human judgement with a personal touch are the least easily replaced of all.' },
              { number: 39, evidence: 'caring for the sick, teaching the young, leading a team' },
              { number: 40, evidence: 'History offers some reassurance.' },
            ],
          },
        ],
      },
    ],
  },
}
