import type { IeltsTest, Option } from '../../types'

// Original reading practice test 28 (Academic, harder / full-length). CC0. Not affiliated with Cambridge/IELTS.

const caffeineHeadings: Option[] = [
  { value: 'i', label: 'A substance that hides tiredness rather than curing it' },
  { value: 'ii', label: 'How quickly the body deals with a dose' },
  { value: 'iii', label: 'A familiar substance that is often misunderstood' },
  { value: 'iv', label: 'Effects that the drinker may fail to notice' },
  { value: 'v', label: 'Why the price of coffee keeps rising' },
  { value: 'vi', label: 'Is the morning boost really a boost?' },
  { value: 'vii', label: 'Uncertainty about how much is being consumed' },
  { value: 'viii', label: 'Using caffeine more wisely' },
  { value: 'ix', label: 'How plants defend themselves against insects' },
  { value: 'x', label: 'Caffeine as a treatment for illness' },
]

const backupParagraphs: Option[] = [
  { value: 'A', label: 'Paragraph A' },
  { value: 'B', label: 'Paragraph B' },
  { value: 'C', label: 'Paragraph C' },
  { value: 'D', label: 'Paragraph D' },
  { value: 'E', label: 'Paragraph E' },
  { value: 'F', label: 'Paragraph F' },
  { value: 'G', label: 'Paragraph G' },
]

export const practiceReading28: IeltsTest = {
  id: 'practice-reading-28',
  title: 'Practice Test 28 — Reading (Academic, full-length)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'iii', 2: 'i', 3: 'ii', 4: 'iv', 5: 'vi', 6: 'vii', 7: 'viii',
      8: 'FALSE', 9: 'NOT GIVEN', 10: 'FALSE',
      11: ['adenosine'], 12: ['pregnancy'], 13: ['headache'],
      14: 'NO', 15: 'YES', 16: 'YES', 17: 'NO', 18: 'NOT GIVEN',
      19: 'A', 20: 'C',
      21: 'B', 22: 'B', 23: 'B', 24: 'B',
      25: ['inflation-linked bonds', 'inflation linked bonds'], 26: ['electronics'],
      27: 'C', 28: 'A', 29: 'F', 30: 'B', 31: 'G',
      32: ['off-site', 'off site', 'offsite'], 33: ['identical'], 34: ['encrypted'], 35: ['week'],
      36: 'NO', 37: 'NOT GIVEN', 38: 'YES', 39: 'NO', 40: 'YES',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'Caffeine: what the morning cup really does',
        html: `
          <p><span class="passage-letter">A</span> Caffeine is the most widely consumed psychoactive substance in the world. It is found in coffee, tea and cocoa, as well as in many soft drinks and energy drinks, and it is produced naturally by the plants themselves, in which it appears to help deter insects. For most adults a daily coffee habit seems entirely unremarkable. Yet the way the substance acts on the body is often misunderstood, even by people who rely on it every single morning and could not imagine starting work without it.</p>
          <p><span class="passage-letter">B</span> Caffeine does not supply energy in the way that food does. Instead, it interferes with a signal of tiredness. Throughout the waking day, a compound called adenosine gradually accumulates in the brain, and as it attaches to particular receptors it produces a growing sensation of sleepiness. Caffeine molecules are similar enough in shape to adenosine to occupy the same receptors without activating them. The tiredness signal is therefore blocked rather than removed, which is why fatigue can return quite suddenly once the caffeine has been cleared from the body.</p>
          <p><span class="passage-letter">C</span> How long that clearing takes differs greatly from one person to another. The time required for the body to remove half of a dose, known as the half-life, is commonly estimated at around five hours in healthy adults, but individual figures can be considerably shorter or longer. Smokers tend to break caffeine down more quickly, while pregnancy slows the process markedly. Inherited differences in the liver enzymes responsible also play a part. Two colleagues who drink identical cups at lunchtime may therefore have very different amounts still circulating in their blood by bedtime.</p>
          <p><span class="passage-letter">D</span> This matters because caffeine can disturb sleep even in people who are convinced that it does not. Some coffee drinkers report that they can drink an espresso after dinner and fall asleep without any difficulty. Falling asleep, however, is only one aspect of sleep. Laboratory studies that monitor sleep through the night have found that caffeine taken in the afternoon or evening can reduce the amount of deep sleep, even when the sleeper notices no change. A person who then wakes up unrefreshed may reach for more coffee, beginning a cycle that is easy to miss.</p>
          <p><span class="passage-letter">E</span> Regular users also develop tolerance, so that a given dose has a smaller effect over time. If they then stop abruptly, many experience withdrawal symptoms, the most common of which is a headache, often accompanied by tiredness and difficulty concentrating. These symptoms usually begin within a day of the last dose and may continue for several days. Some researchers have argued that much of the alertness habitual drinkers feel after their first coffee is simply relief from these mild withdrawal effects. If so, they are returning to normal rather than rising above it. The idea remains debated, but it offers a sobering way to view the daily ritual.</p>
          <p><span class="passage-letter">F</span> None of this makes caffeine dangerous for most people. Food safety authorities in Europe and North America have concluded that intakes of up to about 400 milligrams a day are not associated with health risks for most healthy adults, while a lower limit of 200 milligrams is usually advised during pregnancy. The difficulty lies in knowing how much one has actually consumed. The caffeine content of a cup of coffee varies widely depending on the beans, the brewing method and the size of the cup, and even decaffeinated coffee still contains a small amount. Energy drinks and some medicines add further, less obvious sources.</p>
          <p><span class="passage-letter">G</span> For those who want the benefits without the costs, the advice that follows from the research is modest. Keeping caffeine to the earlier part of the day protects sleep. Reducing intake gradually rather than stopping overnight makes withdrawal far milder. And paying attention to the total from all sources, not just coffee, gives a more honest picture of consumption. Used in this way, caffeine is less a source of energy than a tool, and like any tool it works best when its user understands what it can and cannot do.</p>`,
        groups: [
          {
            id: 'r1a', type: 'matching-headings', instructions: 'Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.',
            options: caffeineHeadings,
            questions: [
              { number: 1, text: 'Paragraph A', evidence: 'Yet the way the substance acts on the body is often misunderstood' },
              { number: 2, text: 'Paragraph B', evidence: 'The tiredness signal is therefore blocked rather than removed' },
              { number: 3, text: 'Paragraph C', evidence: 'The time required for the body to remove half of a dose, known as the half-life' },
              { number: 4, text: 'Paragraph D', evidence: 'can reduce the amount of deep sleep, even when the sleeper notices no change' },
              { number: 5, text: 'Paragraph E', evidence: 'If so, they are returning to normal rather than rising above it.' },
              { number: 6, text: 'Paragraph F', evidence: 'The difficulty lies in knowing how much one has actually consumed.' },
              { number: 7, text: 'Paragraph G', evidence: 'For those who want the benefits without the costs, the advice that follows from the research is modest.' },
            ],
          },
          {
            id: 'r1b', type: 'tfng', instructions: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 8, text: 'Caffeine works by giving the brain an additional source of energy.', evidence: 'Caffeine does not supply energy in the way that food does.' },
              { number: 9, text: 'Coffee was first drunk for medical reasons.' },
              { number: 10, text: 'Two people who drink the same amount of coffee at the same time will have similar levels of caffeine in their blood that night.', evidence: 'Two colleagues who drink identical cups at lunchtime may therefore have very different amounts still circulating in their blood by bedtime.' },
            ],
          },
          {
            id: 'r1c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p><strong>How caffeine affects the body</strong></p>
              <p>During the waking day, a compound called {{11}} builds up in the brain and makes a person feel sleepy. Caffeine blocks this signal. The speed at which caffeine is cleared varies: smoking speeds it up, whereas {{12}} slows it down considerably. People who stop drinking coffee suddenly often suffer withdrawal, and the symptom reported most frequently is a {{13}}.</p>`,
            questions: [
              { number: 11, evidence: 'a compound called adenosine gradually accumulates in the brain' },
              { number: 12, evidence: 'while pregnancy slows the process markedly' },
              { number: 13, evidence: 'the most common of which is a headache' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Inflation and the money that stands still',
        html: `
          <p>Most people have a rough sense that prices go up over time. Fewer stop to consider what this means for money that is simply sitting still. Inflation is the rate at which the general level of prices rises, and it is usually measured by tracking the cost of a representative basket of goods and services, from bread and rent to bus fares and haircuts, that a typical household buys. When the cost of that basket rises by three per cent in a year, inflation is said to be three per cent, and every pound or dollar buys a little less than it did before.</p>
          <p>Many central banks, including the Bank of England, the European Central Bank and the US Federal Reserve, aim to keep inflation at around two per cent a year. A low, stable rate is generally regarded as healthier than zero. When prices are expected to fall, households and businesses may postpone spending in the hope of paying less later, and this hesitation can weaken an economy. A modest positive rate also gives central banks more room to cut interest rates when the economy slows. The aim, then, is not to stop prices rising, but to keep the increase small and predictable.</p>
          <p>Even a small rate has large effects over long periods, because it compounds. A useful shortcut is the rule of 72: dividing 72 by an annual rate gives the approximate number of years it takes for something growing at that rate to double. At three per cent inflation, prices double in roughly 24 years, which means that cash kept in a drawer over that period would lose about half of its purchasing power. Nothing is visibly taken away; the banknotes are all still there. What has changed is what they can buy.</p>
          <p>This is why economists distinguish between nominal and real returns. The nominal interest rate is the figure the bank advertises. The real rate is, approximately, the nominal rate minus inflation. A savings account paying four per cent when inflation is two per cent offers a real return of about two per cent. One paying two per cent when inflation is five per cent has a negative real return, so the saver ends the year able to buy less than at the start, despite having more money in the account. Tax on interest can push the real return lower still.</p>
          <p>People are not naturally good at thinking in real terms. Economists use the phrase money illusion for the tendency to judge sums of money by their face value rather than by what they will buy. A pay rise of three per cent tends to feel like good news even in a year when prices have risen by five per cent, although the employee is in fact worse off. In the same way, savers may feel reassured by a growing balance that is quietly shrinking in value.</p>
          <p>Official figures also conceal a great deal of variation. Because the inflation rate is an average across a whole basket, an individual household may experience something quite different. A household that spends a large share of its income on energy and food will feel sharp rises in those prices more than one that spends mostly on electronics, whose prices have tended to fall. Some statistical offices now publish online calculators that allow people to estimate a personal inflation rate based on their own spending.</p>
          <p>What, then, can savers do? Keeping an emergency fund in cash remains sensible, because its purpose is to be available immediately, not to grow. Beyond that, the main defences involve accepting some risk or some restriction. Some governments issue inflation-linked bonds, whose payments rise in line with an official price index. Shares in companies have historically outpaced inflation over long periods, though with considerable ups and downs along the way, which makes them unsuitable for money that may be needed soon. Perhaps the simplest step of all is to compare the interest rate on any savings account with the current rate of inflation, and to move money that has been left in an account paying almost nothing. Inflation punishes inattention more than anything else.</p>`,
        groups: [
          {
            id: 'r2a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 2? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 14, text: 'An inflation rate of zero is the ideal target for an economy.', evidence: 'A low, stable rate is generally regarded as healthier than zero.' },
              { number: 15, text: 'Cash kept at home for many years loses value even though the amount of money stays the same.', evidence: 'Nothing is visibly taken away; the banknotes are all still there. What has changed is what they can buy.' },
              { number: 16, text: 'A saver whose account balance has increased may nevertheless be worse off.', evidence: 'savers may feel reassured by a growing balance that is quietly shrinking in value' },
              { number: 17, text: 'Households that spend most of their income on food and energy are less affected by price rises than other households.', evidence: 'will feel sharp rises in those prices more than one that spends mostly on electronics' },
              { number: 18, text: 'Personal inflation calculators give more accurate results than official inflation figures.' },
            ],
          },
          {
            id: 'r2b', type: 'mcq-multi', instructions: 'Which TWO reasons does the writer give for preferring a low positive rate of inflation to a rate of zero? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'People may delay spending if they expect prices to fall.' },
              { value: 'B', label: 'It allows wages to rise faster than prices.' },
              { value: 'C', label: 'It gives central banks more scope to lower interest rates.' },
              { value: 'D', label: 'It reduces the tax that savers pay on interest.' },
              { value: 'E', label: 'It encourages households to keep savings in cash.' },
            ],
            questions: [
              { number: 19, evidence: 'households and businesses may postpone spending in the hope of paying less later' },
              { number: 20, evidence: 'A modest positive rate also gives central banks more room to cut interest rates when the economy slows.' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B, C or D.',
            questions: [
              { number: 21, text: 'Using the rule described in the passage, if inflation averaged six per cent a year, prices would double in approximately', evidence: 'dividing 72 by an annual rate gives the approximate number of years it takes for something growing at that rate to double', options: [{ value: 'A', label: '6 years.' }, { value: 'B', label: '12 years.' }, { value: 'C', label: '24 years.' }, { value: 'D', label: '72 years.' }] },
              { number: 22, text: 'A savings account paying two per cent when inflation is five per cent', evidence: 'so the saver ends the year able to buy less than at the start', options: [{ value: 'A', label: 'offers a real return of three per cent.' }, { value: 'B', label: 'leaves the saver able to buy less after a year.' }, { value: 'C', label: 'is still better than any other kind of saving.' }, { value: 'D', label: 'is not affected by tax on interest.' }] },
              { number: 23, text: 'The writer mentions a pay rise of three per cent in order to show that', evidence: 'the tendency to judge sums of money by their face value rather than by what they will buy', options: [{ value: 'A', label: 'wages rarely keep up with prices.' }, { value: 'B', label: 'people tend to judge money by the number rather than its value.' }, { value: 'C', label: 'employers take advantage of inflation.' }, { value: 'D', label: 'inflation is difficult to measure accurately.' }] },
              { number: 24, text: 'What does the writer say about an emergency fund?', evidence: 'because its purpose is to be available immediately, not to grow', options: [{ value: 'A', label: 'It should be invested in shares.' }, { value: 'B', label: 'It belongs in cash because it must be available at once.' }, { value: 'C', label: 'It should be held in inflation-linked bonds.' }, { value: 'D', label: 'It is unnecessary for most savers.' }] },
            ],
          },
          {
            id: 'r2d', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose NO MORE THAN THREE WORDS from the passage for each answer.',
            questions: [
              { number: 25, text: 'What do some governments issue whose payments rise with an official price index?', evidence: 'Some governments issue inflation-linked bonds' },
              { number: 26, text: 'What kind of goods does the writer give as an example of items whose prices have tended to fall?', evidence: 'spends mostly on electronics, whose prices have tended to fall' },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'Before it is too late: backing up your digital life',
        html: `
          <p><span class="passage-letter">A</span> Most people now keep their most precious records in digital form: photographs of children growing up, years of correspondence, financial documents, unfinished novels and coursework. Yet surveys regularly suggest that a large proportion of computer users either never back up their files or do so only occasionally. The reason is rarely ignorance. Almost everyone knows that they ought to make copies; what is missing is a reason to do it today rather than tomorrow, and that reason usually arrives only when it is too late.</p>
          <p><span class="passage-letter">B</span> Data can be lost in many ways. Every storage device eventually fails, whether it is a spinning hard disk with moving parts or a solid-state drive with none. Laptops and phones are dropped, stolen or left on trains. Files are deleted by mistake, or overwritten with an older version. And increasingly, data is lost through deliberate attack. Ransomware, a type of malicious software, encrypts the files on a computer and demands payment for the key needed to unlock them. Paying offers no guarantee that the files will be returned.</p>
          <p><span class="passage-letter">C</span> Against this range of threats, specialists commonly recommend the 3-2-1 rule. It calls for at least three copies of any important data, stored on at least two different types of media, with at least one copy kept off-site. The logic is that each condition addresses a different danger. Several copies protect against the failure of any single device; different media reduce the chance that one fault or flaw affects them all; and an off-site copy survives a fire, flood or burglary that destroys everything in the home or office.</p>
          <p><span class="passage-letter">D</span> Many people believe that they are already protected because their files are stored in the cloud. Often, however, what they are using is a synchronisation service, which keeps the same files identical across several devices. Synchronisation is extremely convenient, but it is not the same as a backup. If a file is deleted or damaged on one device, the deletion or damage is faithfully copied to all the others. A true backup, by contrast, preserves earlier states of the data, so that a user can go back to the version that existed before the mistake was made.</p>
          <p><span class="passage-letter">E</span> This ability to return to earlier versions is known as versioning, and it is especially valuable against ransomware. If a backup drive remains permanently plugged into a computer, malicious software may be able to encrypt the backup along with the originals. For that reason, an external drive used for backups is safer if it is disconnected when not in use, and cloud backup services that keep previous versions of files allow users to restore copies from before an infection. Some services keep these versions only for a limited period, however, so an attack that goes unnoticed for long enough may outlast them.</p>
          <p><span class="passage-letter">F</span> The most neglected step of all is testing. A backup that has never been restored is, in effect, a hope rather than a guarantee. Backup software can be misconfigured so that it silently skips certain folders, a drive can develop faults that nobody notices, and a password needed to open an encrypted archive can be forgotten. The only way to discover such problems before they matter is to try restoring a selection of files from time to time and to check that they open correctly.</p>
          <p><span class="passage-letter">G</span> None of these measures needs to be complicated or expensive. For a household, a reasonable arrangement might consist of the original files on a computer, an external drive that is connected once a week, and an automatic cloud backup service. Automation is important because any system that depends on remembering to do something will eventually be forgotten. The cost of such an arrangement is modest when set against the value of what it protects, much of which, unlike a stolen laptop, could never be bought again.</p>`,
        groups: [
          {
            id: 'r3a', type: 'matching', instructions: 'Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? Write the correct letter, A–G. You may use any letter more than once.',
            options: backupParagraphs,
            questions: [
              { number: 27, text: 'an explanation of why each part of a recommended approach is needed', evidence: 'The logic is that each condition addresses a different danger.' },
              { number: 28, text: 'a reason why people put off protecting their data', evidence: 'what is missing is a reason to do it today rather than tomorrow' },
              { number: 29, text: 'examples of faults that might stop a backup from working', evidence: 'Backup software can be misconfigured so that it silently skips certain folders' },
              { number: 30, text: 'a warning that giving criminals what they ask for may not solve the problem', evidence: 'Paying offers no guarantee that the files will be returned.' },
              { number: 31, text: 'a reference to things that money cannot replace', evidence: 'much of which, unlike a stolen laptop, could never be bought again' },
            ],
          },
          {
            id: 'r3b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            questions: [
              { number: 32, text: 'Under the 3-2-1 rule, at least one copy of important data should be kept ______.', evidence: 'with at least one copy kept off-site' },
              { number: 33, text: 'A synchronisation service keeps files ______ on several devices.', evidence: 'which keeps the same files identical across several devices' },
              { number: 34, text: 'A backup drive that is always connected to a computer may be ______ by ransomware together with the original files.', evidence: 'malicious software may be able to encrypt the backup along with the originals' },
              { number: 35, text: 'In the household arrangement suggested, an external drive is connected once a ______.', evidence: 'an external drive that is connected once a week' },
            ],
          },
          {
            id: 'r3c', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 36, text: 'Most people who do not back up their files are unaware that they should.', evidence: 'The reason is rarely ignorance.' },
              { number: 37, text: 'Cloud backup services are more reliable than external drives.' },
              { number: 38, text: 'A synchronisation service can spread a mistake made on one device to the user’s other devices.', evidence: 'the deletion or damage is faithfully copied to all the others' },
              { number: 39, text: 'Keeping earlier versions of files in the cloud protects users against every ransomware attack.', evidence: 'so an attack that goes unnoticed for long enough may outlast them' },
              { number: 40, text: 'A backup routine that relies on the user remembering to carry it out is likely to fail sooner or later.', evidence: 'any system that depends on remembering to do something will eventually be forgotten' },
            ],
          },
        ],
      },
    ],
  },
}
