import type { IeltsTest, Option } from '../../types'

// Original reading practice test 20 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const antibioticHeadings: Option[] = [
  { value: 'i', label: 'An accidental observation that took years to become a medicine' },
  { value: 'ii', label: 'The search for a vaccine against every bacterium' },
  { value: 'iii', label: 'How the drugs themselves select stronger microbes' },
  { value: 'iv', label: 'Prescriptions for illnesses the drugs cannot treat' },
  { value: 'v', label: 'Hospitals as the main source of resistant infections' },
  { value: 'vi', label: 'The use of medicines on farms' },
  { value: 'vii', label: 'Doubts about a long-established piece of advice' },
  { value: 'viii', label: 'A market that rewards the wrong kind of product' },
  { value: 'ix', label: 'A new drug that defeats viruses and bacteria alike' },
  { value: 'x', label: 'Ordinary actions that reduce the need for treatment' },
]

const paragraphLetters: Option[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => ({ value: l, label: `Paragraph ${l}` }))

export const practiceReading20: IeltsTest = {
  id: 'practice-reading-20',
  title: 'Practice Test 20 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'i', 2: 'iii', 3: 'iv', 4: 'vi', 5: 'vii', 6: 'viii', 7: 'x',
      8: 'FALSE', 9: 'FALSE', 10: 'NOT GIVEN', 11: 'FALSE', 12: 'TRUE', 13: 'NOT GIVEN',
      14: 'NO', 15: 'YES', 16: 'NOT GIVEN', 17: 'NO', 18: 'NO',
      19: ['beat'], 20: ['grown'], 21: ['largest'], 22: ['charge'],
      23: 'C', 24: 'B', 25: 'D', 26: 'A',
      27: 'B', 28: 'G', 29: 'E', 30: 'F',
      31: 'A', 32: 'C',
      33: ['output'], 34: ['law'], 35: ['self-reported', 'self reported'], 36: ['factories'],
      37: 'NOT GIVEN', 38: 'NO', 39: 'NO', 40: 'YES',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Antibiotics and the rise of resistance',
        html: `
          <p><span class="passage-letter">A</span> In 1928 the Scottish scientist Alexander Fleming returned from a holiday to find that a mould had contaminated one of his dishes of bacteria, and that the bacteria around it had died. He named the active substance penicillin, but he was unable to purify it in useful amounts. It was more than a decade later that a team at Oxford led by Howard Florey and Ernst Chain turned it into a practical treatment, and large-scale production followed during the Second World War. The consequences were enormous. Infections of wounds, lungs and blood that had often been fatal became treatable within days, and many later advances, from routine surgery to cancer chemotherapy, depend on the ability to prevent or cure infection.</p>
          <p><span class="passage-letter">B</span> Almost from the beginning, however, it was clear that bacteria could fight back. Bacteria reproduce very quickly, and each division carries a small chance of a random genetic change. Most such changes are useless, but occasionally one allows a bacterium to survive a drug that would normally kill it. When an antibiotic is taken, the vulnerable bacteria die and the resistant ones are left with less competition, so they multiply. The antibiotic does not create the resistance; it selects it. Worse still, bacteria can pass genes directly to one another, sometimes even between different species, so a resistance trait that appears in one place can spread far beyond it. It is important to note that it is the bacteria, not the patient, that become resistant.</p>
          <p><span class="passage-letter">C</span> Every use of an antibiotic therefore carries a cost, and much of that cost is paid for no benefit at all. Antibiotics act on bacteria and have no effect on viruses, which cause the common cold, influenza and most sore throats. Yet patients with such illnesses frequently ask for antibiotics, and doctors with only a few minutes for each appointment may find it quicker to write a prescription than to explain why one is unnecessary. The patient recovers anyway, as they would have done without treatment, and may conclude that the drug worked, which makes them more likely to ask for it again.</p>
          <p><span class="passage-letter">D</span> Human medicine is not the only source of the problem. In many countries large quantities of antibiotics are given to farm animals, not only to treat sick animals but also to prevent disease where many are kept close together and, historically, to make them grow faster. The European Union banned the use of antibiotics for promoting growth in 2006, although rules elsewhere vary. Resistant bacteria that develop on farms can reach people through food, through water and soil, and through direct contact with the animals.</p>
          <p><span class="passage-letter">E</span> For generations, patients have been told to finish every course of antibiotics, even after they feel better, on the grounds that stopping early encourages resistance. In 2017 a group of researchers argued that the evidence for this rule was surprisingly weak. They pointed out that the bacteria causing an infection may already be dealt with before the course ends, while the extra days of treatment continue to expose the harmless bacteria living in the gut and on the skin, giving resistant strains among them an advantage. This does not mean that patients should simply stop taking tablets when they choose. The sensible conclusion is that the ideal length of treatment for many infections may be shorter than tradition suggests, and that the question should be settled by trials and decided by doctors.</p>
          <p><span class="passage-letter">F</span> One obvious answer to resistance would be a steady supply of new antibiotics, but very few entirely new classes have reached patients in recent decades. Part of the difficulty is scientific, since the easiest discoveries were made long ago. But economics plays a large part too. A valuable new antibiotic would be kept in reserve and used only when older drugs had failed, so its sales would be small. A company can expect a far better return from a medicine for a long-term condition that patients take every day for years.</p>
          <p><span class="passage-letter">G</span> Individuals cannot solve the problem alone, but they can avoid making it worse. Not asking for antibiotics when an illness is probably viral, never taking tablets left over from an earlier illness or prescribed to someone else, and returning unused medicine to a pharmacy all reduce unnecessary exposure. Just as important are measures that prevent infection in the first place. Careful handwashing and keeping vaccinations up to date mean fewer infections, and every infection that does not happen is one that does not need to be treated.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: antibioticHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'He named the active substance penicillin, but he was unable to purify it in useful amounts.' },
              { number: 2, text: 'Paragraph B', evidence: 'The antibiotic does not create the resistance; it selects it.' },
              { number: 3, text: 'Paragraph C', evidence: 'Antibiotics act on bacteria and have no effect on viruses' },
              { number: 4, text: 'Paragraph D', evidence: 'In many countries large quantities of antibiotics are given to farm animals' },
              { number: 5, text: 'Paragraph E', evidence: 'In 2017 a group of researchers argued that the evidence for this rule was surprisingly weak.' },
              { number: 6, text: 'Paragraph F', evidence: 'A valuable new antibiotic would be kept in reserve and used only when older drugs had failed, so its sales would be small.' },
              { number: 7, text: 'Paragraph G', evidence: 'Just as important are measures that prevent infection in the first place.' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 8, text: 'Fleming himself developed penicillin into a treatment that could be given to patients.', evidence: 'It was more than a decade later that a team at Oxford led by Howard Florey and Ernst Chain turned it into a practical treatment' },
              { number: 9, text: 'Bacteria can only acquire resistance genes from the cell they divided from.', evidence: 'bacteria can pass genes directly to one another, sometimes even between different species' },
              { number: 10, text: 'Most doctors who prescribe antibiotics for colds do not know that the drugs fail to act on viruses.' },
              { number: 11, text: 'Farmers in the European Union may still give antibiotics to animals to increase their growth.', evidence: 'The European Union banned the use of antibiotics for promoting growth in 2006' },
              { number: 12, text: 'Continuing a course of antibiotics may help resistant strains among harmless bacteria.', evidence: 'the extra days of treatment continue to expose the harmless bacteria living in the gut and on the skin, giving resistant strains among them an advantage' },
              { number: 13, text: 'Developing a new antibiotic costs more than developing a drug for a long-term condition.' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'The hidden cost of investing',
        html: `
          <p>People who put money into shares through a fund face a basic choice. An actively managed fund employs professionals who research companies and buy those they expect to perform well, in the hope of beating the market as a whole. An index fund, by contrast, makes no attempt to beat the market. It simply buys all, or almost all, of the shares in a chosen index, which is a list designed to represent a market, and so delivers roughly the market's return minus a small fee. Because it needs no team of analysts and trades rarely, its running costs are typically much lower.</p>
          <p>The first index fund aimed at ordinary investors was launched in 1976 by John Bogle, who had founded the investment company Vanguard the year before. The idea was widely ridiculed at the time. Critics in the industry described it as a recipe for accepting mediocrity, since by design it could never do better than average. Over the following decades, however, index funds grew from a curiosity into one of the most popular ways to invest, and the criticism has come to look badly mistaken.</p>
          <p>The reason is a piece of arithmetic set out by the economist William Sharpe in 1991. Taken together, all investors in a market own the whole market. Before costs, therefore, the average pound invested by active managers must earn the market return, because active and passive investors between them make up the entire market, and the passive investors earn exactly that return. Active management, however, is more expensive. After costs, the average actively managed pound must therefore do worse than the average passive one. This does not depend on any claim that fund managers lack skill. It follows simply from the fact that, as a group, they cannot all be above average, while they all have to be paid.</p>
          <p>Fees matter more than most investors realise, because their effect compounds. A charge that seems trivial when expressed as a percentage is deducted not once but every year, and the money removed would otherwise have stayed invested and grown. Over a working lifetime, a difference that looks too small to notice in any single year can amount to a substantial share of the final value of the investment.</p>
          <p>Some active managers do outperform the market, sometimes for several years in a row. The difficulty is identifying them in advance. Studies of fund performance repeatedly find that a strong record in one period is a weak guide to results in the next, partly because a run of success can arise from luck as easily as from skill. An investor who moves money into whichever fund topped last year's tables is therefore often buying past performance at a high price.</p>
          <p>Index funds are not without drawbacks. Because they hold the market, they fall with it, and they offer no protection in a crash; an investor who needs money at short notice may be forced to sell at a bad moment. Many popular indices also give more weight to the largest companies, so an index fund can be heavily concentrated in a small number of firms. Some commentators worry that if almost everyone invested passively, nobody would be left to study companies and set sensible prices. That is a reasonable concern in theory, but active traders still account for a great deal of market activity, so it is not an immediate danger.</p>
          <p>For those deciding where to invest, the lesson is not that every active fund is a poor choice, but that costs are one of the few things an investor can control. Before choosing any fund, it is worth finding out the total annual charge, checking how many different companies and countries it covers, and being honest about how long the money can be left untouched. Shares are generally suitable only for money that will not be needed for many years.</p>`,
        groups: [
          {
            id: 'r2a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 14, text: "The industry critics of Bogle's fund have been proved right.", evidence: 'the criticism has come to look badly mistaken' },
              { number: 15, text: 'Once costs are included, the typical actively managed pound must earn less than the typical passive one.', evidence: 'After costs, the average actively managed pound must therefore do worse than the average passive one.' },
              { number: 16, text: 'Most active fund managers have less training than they claim to have.' },
              { number: 17, text: 'A fund that performed best last year is likely to do well again this year.', evidence: 'a strong record in one period is a weak guide to results in the next' },
              { number: 18, text: 'The possibility that passive investing will soon stop markets setting sensible prices is a serious current threat.', evidence: 'That is a reasonable concern in theory, but active traders still account for a great deal of market activity, so it is not an immediate danger.' },
            ],
          },
          {
            id: 'r2b', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>Index funds in brief</strong></p>
              <p>An index fund does not try to {{19}} the market; instead it holds the shares in an index and earns about the market's return. Its fees are low, but even low fees compound, because the money they remove would otherwise have {{20}}. One weakness is that many indices favour the {{21}} companies, so a fund may depend on a few firms. Anyone choosing a fund should first find out the total annual {{22}}.</p>`,
            questions: [
              { number: 19, evidence: 'makes no attempt to beat the market' },
              { number: 20, evidence: 'the money removed would otherwise have stayed invested and grown' },
              { number: 21, evidence: 'Many popular indices also give more weight to the largest companies' },
              { number: 22, evidence: 'it is worth finding out the total annual charge' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              {
                number: 23, text: "According to the writer, Sharpe's argument shows that active managers as a group must lag behind passive investors because",
                evidence: 'This does not depend on any claim that fund managers lack skill. It follows simply from the fact that, as a group, they cannot all be above average, while they all have to be paid.',
                options: [
                  { value: 'A', label: 'most of them lack the skill to choose good companies.' },
                  { value: 'B', label: 'they trade too rarely to take advantage of price changes.' },
                  { value: 'C', label: 'they share the market return but carry higher costs.' },
                  { value: 'D', label: 'passive investors receive a larger share of the market.' },
                ],
              },
              {
                number: 24, text: 'Why does the writer say a small annual fee can have a large effect?',
                evidence: 'A charge that seems trivial when expressed as a percentage is deducted not once but every year, and the money removed would otherwise have stayed invested and grown.',
                options: [
                  { value: 'A', label: 'Fees usually rise as the value of an investment grows.' },
                  { value: 'B', label: 'Its effect accumulates as lost growth is repeated year after year.' },
                  { value: 'C', label: 'It is often hidden from investors until they sell.' },
                  { value: 'D', label: 'It is charged on the original sum rather than the current value.' },
                ],
              },
              {
                number: 25, text: 'What point does the writer make about active managers who outperform the market?',
                evidence: 'The difficulty is identifying them in advance.',
                options: [
                  { value: 'A', label: 'They never succeed for more than one year.' },
                  { value: 'B', label: 'Their success is always the result of luck.' },
                  { value: 'C', label: 'They tend to charge lower fees than other managers.' },
                  { value: 'D', label: 'It is hard to know beforehand which ones they will be.' },
                ],
              },
              {
                number: 26, text: 'What is the main purpose of the final paragraph?',
                evidence: 'the lesson is not that every active fund is a poor choice, but that costs are one of the few things an investor can control',
                options: [
                  { value: 'A', label: 'to stress a factor that investors are able to influence' },
                  { value: 'B', label: 'to recommend that readers avoid all active funds' },
                  { value: 'C', label: 'to warn that shares are too risky for most people' },
                  { value: 'D', label: 'to explain how to calculate the total annual charge' },
                ],
              },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The four-day week: promise and practice',
        html: `
          <p><span class="passage-letter">A</span> The idea is easily summarised. Employees work four days instead of five, receive the same pay as before and are expected to produce the same amount of work. Supporters often call this the 100-80-100 model: full pay for eighty per cent of the time, in return for a commitment to maintain one hundred per cent of the output. The proposal is not new, but interest in it grew sharply after the pandemic, when many organisations discovered that working arrangements they had considered fixed could be changed almost overnight.</p>
          <p><span class="passage-letter">B</span> Since then, a number of countries have hosted organised trials, many of them coordinated by a non-profit campaign group. One of the largest took place in Britain in 2022, when dozens of companies of different sizes tried a shorter week for six months. A clear majority of the participating firms decided to continue with it after the trial ended, which supporters presented as strong evidence of success. Such results need careful interpretation, however. The companies had volunteered to take part. Firms that expect a shorter week to suit them are more likely to sign up than those that expect it to fail, so the participants were unlikely to be typical of employers as a whole.</p>
          <p><span class="passage-letter">C</span> Even so, there are plausible reasons why output might not fall as much as working time. Firms in trials commonly cut the number and length of meetings, reduced interruptions and set aside periods for concentrated work. There is also good evidence that tired people make more mistakes and work more slowly, and that the value of each additional hour falls as the working day grows longer. Some observers also point to an idea that the historian C. Northcote Parkinson expressed in 1955 and that has since become known as Parkinson's law: that work tends to expand to fill whatever time is available for it. If that is true, reducing the time available may simply remove some of the padding.</p>
          <p><span class="passage-letter">D</span> The most consistent findings concern wellbeing. Participants in trials have generally reported lower stress, less exhaustion and more time for family, exercise and rest. These outcomes matter to employers, since staff who are exhausted are more likely to fall ill or leave. Yet most of the evidence here is self-reported, gathered through questionnaires completed by employees who knew they were part of a closely watched experiment and who had an obvious interest in its continuation.</p>
          <p><span class="passage-letter">E</span> The model is far harder to apply in some sectors than in others. Hospitals, care homes, shops and call centres cannot simply close for a day, so they must either employ more staff to cover the extra shifts or arrange rotas in which different people take different days off. Some employers have instead introduced compressed hours, in which staff work the same total number of hours over four longer days. Although it is often described in the same terms, this is a quite different arrangement, and some workers find that the longer days leave them more tired, not less.</p>
          <p><span class="passage-letter">F</span> There is also a risk that the same work is merely squeezed into less time. In some trials employees reported taking fewer breaks and spending less time in casual conversation with colleagues. That may raise output in the short term, but informal contact is one of the main ways in which relationships are built and knowledge is shared. It matters most for junior staff, who often learn their jobs by watching and asking more experienced colleagues, and who may have fewer chances to do so in a tightly packed day.</p>
          <p><span class="passage-letter">G</span> None of this proves that the four-day week either works or fails. It suggests that it is more likely to succeed where output can be measured clearly and where managers are prepared to rethink how work is organised, rather than simply demanding the same effort in less time. It is worth remembering that the five-day week once seemed radical too. When Henry Ford introduced a five-day, forty-hour week for workers in his factories in 1926, many business leaders thought the change was reckless. Today it is so familiar that few people imagine it was ever a choice.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? Choose the correct letter, A–G. NB You may use any letter more than once.',
            options: paragraphLetters,
            questions: [
              { number: 27, text: 'a reason why the results of a trial may not apply to all companies', evidence: 'The companies had volunteered to take part. Firms that expect a shorter week to suit them are more likely to sign up than those that expect it to fail' },
              { number: 28, text: 'an earlier change to working time that met with opposition', evidence: 'When Henry Ford introduced a five-day, forty-hour week for workers in his factories in 1926, many business leaders thought the change was reckless.' },
              { number: 29, text: 'an arrangement that is sometimes confused with the four-day week', evidence: 'Although it is often described in the same terms, this is a quite different arrangement' },
              { number: 30, text: 'a possible disadvantage for less experienced employees', evidence: 'It matters most for junior staff, who often learn their jobs by watching and asking more experienced colleagues' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO of the following does the writer give as reasons why output might be maintained in a shorter week? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'Firms reduce the time spent in meetings.' },
              { value: 'B', label: 'Staff are given new technology to work faster.' },
              { value: 'C', label: 'Workers who are less tired perform better.' },
              { value: 'D', label: 'Employees are paid a bonus for meeting targets.' },
              { value: 'E', label: 'Managers supervise employees more closely.' },
            ],
            questions: [
              { number: 31, evidence: 'Firms in trials commonly cut the number and length of meetings' },
              { number: 32, evidence: 'tired people make more mistakes and work more slowly' },
            ],
          },
          {
            id: 'r3c', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 33, text: 'In the 100-80-100 model, the final figure refers to the level of ___ that employees promise to keep.', evidence: 'in return for a commitment to maintain one hundred per cent of the output' },
              { number: 34, text: 'The claim that work grows to fill the available time is called Parkinson’s ___.', evidence: "has since become known as Parkinson's law" },
              { number: 35, text: 'Evidence about wellbeing is weakened because most of it is ___.', evidence: 'Yet most of the evidence here is self-reported' },
              { number: 36, text: 'Henry Ford introduced a five-day week for people working in his ___.', evidence: 'for workers in his factories in 1926' },
            ],
          },
          {
            id: 'r3d', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 37, text: 'Governments should require employers to offer a four-day week.' },
              { number: 38, text: 'The firms in the 2022 British trial were a fair sample of employers in general.', evidence: 'so the participants were unlikely to be typical of employers as a whole' },
              { number: 39, text: 'Working compressed hours is essentially the same as working a four-day week.', evidence: 'this is a quite different arrangement' },
              { number: 40, text: 'A shorter week is more likely to work when managers change the way tasks are organised.', evidence: 'where managers are prepared to rethink how work is organised, rather than simply demanding the same effort in less time' },
            ],
          },
        ],
      },
    ],
  },
}
