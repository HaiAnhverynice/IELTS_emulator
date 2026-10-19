import type { IeltsTest, Option } from '../../types'

// Original reading practice test 25 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const reviewHeadings: Option[] = [
  { value: 'i', label: 'The narrow band in which most scores now fall' },
  { value: 'ii', label: 'Who speaks up and who stays silent' },
  { value: 'iii', label: 'An influential but misleading number' },
  { value: 'iv', label: 'Clues in the wording and timing of reviews' },
  { value: 'v', label: 'How to get value from a large number of reviews' },
  { value: 'vi', label: 'Dishonest attempts to influence ratings' },
  { value: 'vii', label: 'Why sellers should reply to complaints' },
  { value: 'viii', label: 'A brief history of customer feedback' },
  { value: 'ix', label: 'Laws that have put an end to fake reviews' },
]

const sittingEndings: Option[] = [
  { value: 'A', label: 'has been linked with back pain and varicose veins.' },
  { value: 'B', label: 'uses only a little more energy than sitting.' },
  { value: 'C', label: 'has been shown to prevent type 2 diabetes.' },
  { value: 'D', label: 'has improved the body’s handling of sugar in laboratory tests.' },
  { value: 'E', label: 'is likely to be useful if it leads its user to move often.' },
  { value: 'F', label: 'removes all the risks of an inactive lifestyle.' },
  { value: 'G', label: 'is now required by law in many offices.' },
]

export const practiceReading25: IeltsTest = {
  id: 'practice-reading-25',
  title: 'Practice Test 25 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'FALSE', 2: 'TRUE', 3: 'FALSE', 4: 'FALSE', 5: 'TRUE', 6: 'NOT GIVEN',
      7: ['weaker'], 8: ['oil', 'grease'], 9: ['screens'], 10: ['wishcycling'], 11: ['buyer'], 12: ['China'], 13: ['reducing'],
      14: 'iii', 15: 'ii', 16: 'i', 17: 'vi', 18: 'v', 19: 'iv',
      20: 'B', 21: 'A', 22: 'B', 23: 'B',
      24: ['automated systems'], 25: ['damaged box', 'a damaged box'], 26: ['light sleeper', 'a light sleeper'],
      27: 'A', 28: 'B', 29: 'C',
      30: 'YES', 31: 'YES', 32: 'NO', 33: 'NO', 34: 'NOT GIVEN',
      35: 'A', 36: 'B', 37: 'D', 38: 'E',
      39: ['million'], 40: ['novelty'],
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'What really happens to your recycling',
        html: `
          <p>Sorting waste for recycling has become a daily routine in many households, and most people assume that once an item has been placed in the right bin, it will become something new. The reality is more complicated. Whether an object is actually recycled depends on what it is made of, how clean it is, what else it has been mixed with and whether anyone is willing to buy the material that can be recovered from it. Understanding these factors helps to explain why some items are recycled again and again while others, despite carrying a recycling symbol, rarely are.</p>
          <p>Metals are among the most successful materials. Aluminium can be melted down and reformed repeatedly without losing its quality, and recycling it requires only a small fraction of the energy needed to produce new aluminium from bauxite ore. Because recycled aluminium is so valuable, drinks cans are collected and reprocessed efficiently in many countries, and a can that is returned for recycling may be back on a shop shelf within a few months. Steel, which can be separated from other waste with magnets, is also widely recycled.</p>
          <p>Glass, too, can in principle be recycled indefinitely. However, it is heavy to transport, and different colours of glass usually have to be kept apart, because a small amount of coloured glass can spoil a batch of clear glass. Where glass is collected together with other materials, it often breaks into fragments that are difficult to separate, and these may end up being used as a low-value material in construction instead of becoming new bottles.</p>
          <p>Paper and cardboard are recycled on a large scale, but not endlessly. Each time paper is reprocessed, its fibres become shorter and weaker, so that after several cycles they can no longer bind together, and new fibres must constantly be added. Paper is also particularly vulnerable to contamination. A pizza box soaked in grease, for example, may be rejected, because oil interferes with the process, in which the fibres are separated in water.</p>
          <p>Plastics present the greatest difficulty. The word covers many different materials with different chemical properties, and they generally cannot be melted down together. The numbers printed inside the triangular symbol on plastic items identify the type of resin; they do not indicate that the item will be recycled. Bottles made from PET, the clear plastic used for drinks, and HDPE, used for milk and detergent bottles, have established markets and are widely recycled. Many other plastics, including films, multi-layer food pouches and small items, often are not, either because they are hard to sort or because the recovered material is worth less than the cost of processing it. Moreover, most plastic loses quality each time it is mechanically recycled, so it is frequently turned into lower-grade products, such as fibres for clothing, which are rarely recycled again.</p>
          <p>Contamination is a problem for every material. When people put items in a recycling bin in the hope that they might be recyclable, a habit sometimes called wishcycling, they can do more harm than good. A plastic bag can wrap itself around the rotating screens used in sorting facilities, forcing the machinery to be stopped and cleaned. Food residue and non-recyclable items lower the quality of an entire load, and if contamination is too high, a buyer may reject it, sending material that was correctly sorted to landfill or incineration along with everything else.</p>
          <p>Markets matter as much as technology. For many years, wealthy countries exported large quantities of mixed plastic and paper waste to China for sorting and reprocessing. When China sharply restricted these imports from 2018, exporting countries discovered how much of their collected material had depended on a single buyer, and some local authorities struggled to find anyone willing to take it.</p>
          <p>None of this means that recycling is pointless; for metals, glass and paper in particular, the benefits are substantial. But recycling sits fairly low in what waste specialists call the waste hierarchy, which ranks the options in order of preference. At the top is reducing the amount of material used in the first place, followed by reusing items and only then by recycling, while disposal comes last. A refillable bottle that is used many times avoids the energy needed both to make a new bottle and to recycle it.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'The quality of aluminium falls slightly each time it is recycled.', evidence: 'Aluminium can be melted down and reformed repeatedly without losing its quality' },
              { number: 2, text: 'A batch of clear glass can be spoiled by a small quantity of coloured glass.', evidence: 'a small amount of coloured glass can spoil a batch of clear glass' },
              { number: 3, text: 'Glass collected together with other materials is always sent to landfill.', evidence: 'these may end up being used as a low-value material in construction instead of becoming new bottles' },
              { number: 4, text: 'The number inside the symbol on a plastic item shows that it will be recycled.', evidence: 'they do not indicate that the item will be recycled' },
              { number: 5, text: 'Some plastics are not recycled because processing them costs more than the material is worth.', evidence: 'because the recovered material is worth less than the cost of processing it' },
              { number: 6, text: 'Most households in wealthy countries now sort their recycling correctly.' },
            ],
          },
          {
            id: 'r1b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Why recycling is not always simple</strong></p>
              <p>Paper cannot be recycled for ever, because its fibres become shorter and {{7}} with each cycle. A greasy pizza box may be refused, since {{8}} disrupts the process. Putting doubtful items in the recycling bin can cause problems: plastic bags, for instance, become caught in the rotating {{9}} at sorting plants. This habit is known as {{10}}. If a load is too contaminated, a {{11}} may turn it down. The market for collected material was disrupted when {{12}} limited the waste it would import. In the waste hierarchy, the most preferred option is {{13}} the amount of material used.</p>`,
            questions: [
              { number: 7, evidence: 'its fibres become shorter and weaker' },
              { number: 8, evidence: 'because oil interferes with the process' },
              { number: 9, evidence: 'A plastic bag can wrap itself around the rotating screens used in sorting facilities' },
              { number: 10, evidence: 'a habit sometimes called wishcycling' },
              { number: 11, evidence: 'if contamination is too high, a buyer may reject it' },
              { number: 12, evidence: 'When China sharply restricted these imports from 2018' },
              { number: 13, evidence: 'At the top is reducing the amount of material used in the first place' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Can you trust the stars? Reading online reviews',
        html: `
          <p><span class="passage-letter">A</span> Before buying almost anything online, from a toaster to a hotel room, most shoppers now check what other customers have said. Reviews have become one of the most influential sources of information in modern consumer life, and for good reason: they offer the experience of many buyers instead of the claims of a seller. Yet the average star rating, the figure most shoppers glance at first, is a far less reliable guide than it appears, and understanding why can make the difference between an informed purchase and a disappointing one.</p>
          <p><span class="passage-letter">B</span> The first problem is who chooses to write a review. Only a minority of buyers ever do so, and they are not a random sample. People are most likely to share their opinion when they are either delighted or furious; those whose experience was moderate and unremarkable usually stay silent. As a result, ratings on many platforms show a characteristic J-shaped pattern, with a large number of five-star reviews, a smaller cluster of one-star reviews and relatively few in between. An average calculated from such a distribution conceals almost as much as it reveals.</p>
          <p><span class="passage-letter">C</span> A second problem is that ratings tend to drift upwards. On many platforms the typical score is now so high that anything below four stars is treated by shoppers as a warning sign, even though, on a five-point scale, three ought to mean average. Several forces push ratings up. Some customers are reluctant to harm a small business or an individual seller, especially on platforms where the seller can also rate the buyer. Others, having already paid, prefer to believe that they made a good choice. The effect is that the scale becomes compressed, and the real differences between products are squeezed into the narrow band between four and five stars.</p>
          <p><span class="passage-letter">D</span> Then there is deliberate manipulation. Some businesses post flattering reviews of their own products or unfavourable ones of their competitors', and an industry has emerged that sells reviews in bulk. Others offer free products or refunds in return for five-star ratings, a practice that may not feel like cheating to the reviewer but distorts the picture just as effectively. Platforms use automated systems to detect suspicious patterns, such as a large number of reviews posted within a short period, and several governments have made fake reviews explicitly illegal. Detection remains imperfect, however, and those who write fake reviews adapt quickly to the methods used to catch them.</p>
          <p><span class="passage-letter">E</span> None of this means that reviews are worthless. A large number of reviews, considered together, generally does carry useful information, and the written content of reviews is often more informative than the score. The key is to read them in the right way. A product with a slightly lower average but hundreds of reviews may be a safer choice than one with a perfect score based on a handful. Reading the most critical reviews is particularly revealing: if they complain about slow delivery or a damaged box, the product itself may be perfectly good, whereas repeated complaints about the same fault are a clear signal.</p>
          <p><span class="passage-letter">F</span> Shoppers can also look closely at the language. Genuine reviews tend to mention specific features, situations and drawbacks, while suspicious ones are often vague, full of extravagant praise and inclined to repeat the product's full name, as if they had been written for a search engine. A sudden burst of five-star reviews after a long period of mixed ones, or a reviewer who has praised dozens of unrelated products in a single week, should also raise doubts. Above all, it helps to remember that every review describes one person's experience, shaped by expectations that may be quite different from one's own. A hotel described as noisy by a light sleeper may suit a traveller who plans to be out every evening.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Reading Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph from the list of headings below.',
            options: reviewHeadings,
            questions: [
              { number: 14, text: 'Paragraph A', evidence: 'is a far less reliable guide than it appears' },
              { number: 15, text: 'Paragraph B', evidence: 'those whose experience was moderate and unremarkable usually stay silent' },
              { number: 16, text: 'Paragraph C', evidence: 'the real differences between products are squeezed into the narrow band between four and five stars' },
              { number: 17, text: 'Paragraph D', evidence: 'Then there is deliberate manipulation.' },
              { number: 18, text: 'Paragraph E', evidence: 'The key is to read them in the right way.' },
              { number: 19, text: 'Paragraph F', evidence: 'A sudden burst of five-star reviews after a long period of mixed ones' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 20, text: 'According to the writer, the J-shaped pattern of ratings is caused by', evidence: 'People are most likely to share their opinion when they are either delighted or furious', options: [{ value: 'A', label: 'the high quality of most products sold online.' }, { value: 'B', label: 'the kind of customer who decides to write a review.' }, { value: 'C', label: 'platforms removing reviews of three stars.' }, { value: 'D', label: 'sellers paying for one-star reviews of competitors.' }] },
              { number: 21, text: 'Which reason for over-generous ratings does the writer give?', evidence: 'Others, having already paid, prefer to believe that they made a good choice.', options: [{ value: 'A', label: 'Buyers want to feel that their purchase was a wise one.' }, { value: 'B', label: 'Buyers do not understand how the five-point scale works.' }, { value: 'C', label: 'Platforms reward customers who give high scores.' }, { value: 'D', label: 'Most reviews are written before the product arrives.' }] },
              { number: 22, text: 'What is the writer’s view of offering free products in exchange for five-star ratings?', evidence: 'distorts the picture just as effectively', options: [{ value: 'A', label: 'It is harmless because reviewers do not see it as cheating.' }, { value: 'B', label: 'It is as misleading as other forms of manipulation.' }, { value: 'C', label: 'It has been made illegal in every country.' }, { value: 'D', label: 'It is easily detected by automated systems.' }] },
              { number: 23, text: 'According to paragraph E, a product with a slightly lower average but many reviews', evidence: 'may be a safer choice than one with a perfect score based on a handful', options: [{ value: 'A', label: 'is probably being sold at a lower price.' }, { value: 'B', label: 'may be more dependable than one with a perfect score from a few reviewers.' }, { value: 'C', label: 'has probably been the target of fake negative reviews.' }, { value: 'D', label: 'should be avoided unless the critical reviews are read.' }] },
            ],
          },
          {
            id: 'r2c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 24, text: 'What do platforms use to identify suspicious patterns of reviews?', evidence: 'Platforms use automated systems to detect suspicious patterns' },
              { number: 25, text: 'Apart from slow delivery, what complaint in a critical review may not reflect on the product itself?', evidence: 'if they complain about slow delivery or a damaged box, the product itself may be perfectly good' },
              { number: 26, text: 'What kind of person might describe a hotel as noisy when other guests would not mind?', evidence: 'A hotel described as noisy by a light sleeper may suit a traveller who plans to be out every evening.' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Sitting at work: is standing the answer?',
        html: `
          <p>Many office workers spend most of their working day sitting down, and a good deal of their leisure time as well, in front of televisions, computers and phones. Over the past two decades, a large body of research has linked long periods of sitting with a higher risk of type 2 diabetes, heart disease and early death. These findings attracted wide attention, and the phrase 'sitting is the new smoking' circulated in newspapers and on social media. The comparison was memorable, but most researchers regard it as a considerable exaggeration: the risks associated with smoking are far greater, and much of the evidence on sitting comes from observational studies, which cannot by themselves prove cause and effect.</p>
          <p>Observational studies follow large groups of people over many years and compare the health of those who sit a great deal with that of those who sit less. Their weakness is that people who sit for long periods may differ in other ways, for example in their income, diet or existing health, and although researchers attempt to adjust for such factors, they can never be certain that they have accounted for all of them. It is possible, for instance, that some people sit more because they are already unwell, rather than becoming unwell because they sit.</p>
          <p>One of the most important findings of recent years concerns the interaction between sitting and exercise. A large analysis combining data from around a million adults, published in 2016, found that the higher risk of death linked with prolonged sitting was largely eliminated among people who did roughly sixty to seventy-five minutes of moderate physical activity, such as brisk walking, each day. For those who were less active, however, long hours of sitting remained associated with a higher risk. This suggests that the problem may lie less in sitting itself than in the lack of movement that usually accompanies it.</p>
          <p>Many employers responded to the publicity by buying sit-stand desks, which can be raised so that the user works on their feet. Trials show that these desks do reduce sitting time, often by an hour or more a day in the first months. In some studies, however, the reduction became smaller over time, as the novelty wore off. More importantly, standing is not the same as exercise. Standing burns only slightly more energy than sitting, and standing still for long periods carries problems of its own: jobs that involve prolonged standing have been associated with back pain, aching legs and varicose veins.</p>
          <p>What appears to matter more is breaking up sitting with movement. Laboratory experiments in which volunteers interrupt their sitting with a few minutes of light walking every twenty or thirty minutes have found improvements in the way the body handles sugar after a meal, compared with sitting continuously. These studies are small and short, and it is not yet known whether such benefits translate into fewer cases of disease over decades. Even so, the advice that follows from them is cheap and easy to apply: walk to a colleague's desk instead of sending an email, take phone calls standing or walking, and use the stairs where possible.</p>
          <p>In my view, the most useful message from this research is not that chairs are dangerous but that the human body is designed to move regularly. A sit-stand desk can be a helpful tool if it prompts its user to change position frequently, but it is unlikely to make much difference to someone who simply exchanges eight hours of sitting for several hours of standing still. Organisations that want healthier staff would probably achieve more by changing working habits, such as allowing walking meetings and discouraging long unbroken sessions at the screen, than by investing in new furniture alone. The chair, in other words, is not the enemy; staying in it for hours without a break may be.</p>`,
        groups: [
          {
            id: 'r3a', type: 'mcq-multi', instructions: 'Which THREE limitations of the research does the writer mention? Choose THREE letters, A–G.',
            options: [
              { value: 'A', label: 'Observational studies alone cannot show that sitting causes disease.' },
              { value: 'B', label: 'People who sit a lot may differ from others in ways that affect their health.' },
              { value: 'C', label: 'Experiments on breaking up sitting have been small and short.' },
              { value: 'D', label: 'Most studies have included only men.' },
              { value: 'E', label: 'Sit-stand desk trials were paid for by manufacturers.' },
              { value: 'F', label: 'The 2016 analysis included only office workers.' },
              { value: 'G', label: 'Researchers did not record how much exercise people took.' },
            ],
            questions: [
              { number: 27, evidence: 'observational studies, which cannot by themselves prove cause and effect' },
              { number: 28, evidence: 'people who sit for long periods may differ in other ways' },
              { number: 29, evidence: 'These studies are small and short' },
            ],
          },
          {
            id: 'r3b', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 30, text: "The phrase 'sitting is the new smoking' overstates the danger of sitting.", evidence: 'most researchers regard it as a considerable exaggeration' },
              { number: 31, text: 'Poor health may be a cause of long periods of sitting as well as a result of them.', evidence: 'It is possible, for instance, that some people sit more because they are already unwell' },
              { number: 32, text: 'Regular exercise makes no difference to the risks associated with sitting.', evidence: 'the higher risk of death linked with prolonged sitting was largely eliminated among people who did roughly sixty to seventy-five minutes of moderate physical activity' },
              { number: 33, text: 'Buying sit-stand desks is the most effective step an employer can take to improve staff health.', evidence: 'would probably achieve more by changing working habits' },
              { number: 34, text: 'Walking meetings make staff more productive as well as healthier.' },
            ],
          },
          {
            id: 'r3c', type: 'matching', instructions: 'Complete each sentence with the correct ending, A–G, from the list below.',
            options: sittingEndings,
            questions: [
              { number: 35, text: 'Standing still for long periods at work', evidence: 'jobs that involve prolonged standing have been associated with back pain, aching legs and varicose veins' },
              { number: 36, text: 'Standing instead of sitting', evidence: 'Standing burns only slightly more energy than sitting' },
              { number: 37, text: 'Interrupting sitting with a few minutes of light walking', evidence: 'have found improvements in the way the body handles sugar after a meal' },
              { number: 38, text: 'A sit-stand desk', evidence: 'A sit-stand desk can be a helpful tool if it prompts its user to change position frequently' },
            ],
          },
          {
            id: 'r3d', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 39, text: 'The analysis published in 2016 combined data from around a ___ adults.', evidence: 'A large analysis combining data from around a million adults' },
              { number: 40, text: 'In some studies, sit-stand desks reduced sitting less over time as their ___ wore off.', evidence: 'the reduction became smaller over time, as the novelty wore off' },
            ],
          },
        ],
      },
    ],
  },
}
