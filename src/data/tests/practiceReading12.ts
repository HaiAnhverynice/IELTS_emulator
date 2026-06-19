import type { IeltsTest, Option } from '../../types'

// Original reading practice test 12 (Academic). CC0. Not affiliated with Cambridge/IELTS.

const volcanoHeadings: Option[] = [
  { value: 'i', label: 'What lies beneath a volcano' },
  { value: 'ii', label: 'Different shapes of volcano' },
  { value: 'iii', label: 'Where volcanoes occur' },
  { value: 'iv', label: 'Predicting an eruption' },
  { value: 'v', label: 'The dangers an eruption brings' },
  { value: 'vi', label: 'How an eruption can benefit people' },
  { value: 'vii', label: 'The largest eruptions in history' },
  { value: 'viii', label: 'Volcanoes on other planets' },
  { value: 'ix', label: 'Living in the shadow of a volcano' },
]

export const practiceReading12: IeltsTest = {
  id: 'practice-reading-12',
  title: 'Practice Test 12 — Reading (Academic)',
  category: 'academic',
  source: 'Original CC0 material created for this simulator. Not affiliated with Cambridge/IELTS.',

  reading: {
    durationSec: 60 * 60,
    answerKey: {
      1: 'TRUE', 2: 'FALSE', 3: 'TRUE', 4: 'NOT GIVEN', 5: 'FALSE', 6: 'TRUE',
      7: ['Maya', 'Mayan'], 8: 'bitter', 9: 'sugar', 10: 'Switzerland',
      11: ['beans'], 12: ['Spain'], 13: ['solid'],
      14: 'iii', 15: 'i', 16: 'ii', 17: 'iv', 18: 'v', 19: 'vi',
      20: 'B', 21: 'D', 22: 'A', 23: 'C',
      24: 'B', 25: 'A', 26: 'C',
      27: 'YES', 28: 'NO', 29: 'YES', 30: 'NOT GIVEN', 31: 'NO',
      32: 'A', 33: 'C',
      34: 'attention', 35: 'cool', 36: 'appetite', 37: 'culture', 38: 'safety', 39: 'mood', 40: 'brands',
    },
    passages: [
      {
        number: 1,
        heading: 'Reading Passage 1',
        title: 'A history of chocolate',
        html: `
          <p>Few foods are loved as widely as chocolate, yet the sweet bar we know today is a fairly recent invention. Chocolate is made from the seeds of the cacao tree, a small evergreen that grows only in the hot, wet forests near the equator. The tree produces large pods, and inside each pod sit dozens of seeds, usually called beans, surrounded by a soft white pulp. For most of its history chocolate was not eaten at all but drunk, and it was valued less as a treat than as a precious and even sacred substance.</p>
          <p>The peoples of ancient Central America were the first to make use of cacao. The Maya, and later the Aztecs, roasted and ground the beans and mixed them with water and spices to make a dark, frothy drink. This drink was nothing like modern chocolate: it contained no sugar and was usually flavoured with chilli, which made it sharp and bitter rather than sweet. So highly was cacao prized that the beans were used as a form of money, and the drink was reserved for rulers, priests and warriors on important occasions.</p>
          <p>When European explorers reached the Americas, they carried cacao home across the ocean. At first the bitter drink did not appeal to European tastes, but once people began to sweeten it with sugar and to warm it, it became hugely fashionable. The new drink reached Spain before any other European country, and for a time the Spanish managed to keep the secret of its preparation to themselves. Eventually, though, the habit spread, and fashionable chocolate houses opened in many cities, where the wealthy gathered to drink it.</p>
          <p>For a long time chocolate remained a drink, because no one had found a way to turn it into a solid food that was pleasant to eat. The breakthroughs came during the nineteenth century, a period of rapid invention. First a method was found to press much of the fat, known as cocoa butter, out of the beans, which made a smoother powder. Later, manufacturers learned to add this fat back in along with sugar, and so produced the first true eating chocolate, a solid bar rather than a drink.</p>
          <p>Two further inventions gave us the chocolate we recognise today. In Switzerland, one maker discovered that adding milk produced a paler, creamier and far gentler chocolate, and milk chocolate quickly became the most popular kind of all. Another Swiss inventor developed a process of long, slow mixing that removed the last graininess and gave the chocolate its smooth, melting texture. From then on chocolate could be made on a large scale and sold cheaply, and it changed from a luxury of the rich into a treat that almost anyone could afford.</p>
          <p>Today chocolate is a vast global industry. The cacao tree still grows only in a narrow tropical band, and most of the world's beans now come from West Africa, far from the forests of the Americas where the story began. Modern science has even suggested that chocolate, eaten in moderation, may carry certain health benefits. Yet for most people its appeal is simpler than that. From a sacred drink of ancient kings to a bar on a shop shelf, chocolate has travelled a remarkable road to become one of the world's favourite pleasures.</p>`,
        groups: [
          {
            id: 'r1a', type: 'tfng', instructions: 'Do the following statements agree with the information in the passage? Choose TRUE, FALSE or NOT GIVEN.',
            questions: [
              { number: 1, text: 'Chocolate was originally consumed as a drink rather than a solid food.' },
              { number: 2, text: 'The ancient drink made from cacao was sweetened with sugar.' },
              { number: 3, text: 'Cacao beans were once used as money.' },
              { number: 4, text: 'Chocolate houses were more popular than coffee houses in Europe.' },
              { number: 5, text: 'Milk chocolate was invented before solid eating chocolate.' },
              { number: 6, text: 'Most cacao beans today come from West Africa.' },
            ],
          },
          {
            id: 'r1b', type: 'gap-fill', instructions: 'Complete the sentences below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 7, text: 'The first people to use cacao were the ___ and, later, the Aztecs.' },
              { number: 8, text: 'The ancient cacao drink tasted sharp and ___.' },
              { number: 9, text: 'Europeans made chocolate popular by adding ___.' },
              { number: 10, text: 'Milk chocolate was first developed in ___.' },
            ],
          },
          {
            id: 'r1c', type: 'short-answer', instructions: 'Answer the questions below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            questions: [
              { number: 11, text: 'What are the seeds of the cacao tree usually called?' },
              { number: 12, text: 'Which European country received cacao first?' },
              { number: 13, text: 'What form of chocolate did nineteenth-century inventors finally manage to make?' },
            ],
          },
        ],
      },
      {
        number: 2,
        heading: 'Reading Passage 2',
        title: 'Volcanoes',
        html: `
          <p><span class="passage-letter">A</span> Volcanoes are not scattered randomly across the globe but are concentrated along certain lines on the Earth's surface. The outer shell of the planet is broken into a number of vast slabs of rock, called plates, which drift very slowly over the hotter material beneath. Most volcanoes occur where two of these plates meet — either where they pull apart, allowing molten rock to rise into the gap, or where one plate is forced down beneath another. A great ring of volcanoes encircles the Pacific Ocean for exactly this reason, tracing the edges of the plates that surround it.</p>
          <p><span class="passage-letter">B</span> Beneath every volcano lies a store of molten rock. Deep inside the Earth the temperature is so high that rock melts into a thick, fiery liquid called magma. Being lighter than the solid rock around it, this magma slowly rises and collects in a chamber below the surface. When the pressure becomes great enough, the magma forces its way upward through cracks and bursts out at the surface, where it is known as lava. The gases trapped within the magma play a large part in how violent this escape will be.</p>
          <p><span class="passage-letter">C</span> Not all volcanoes look the same, because the lava that builds them behaves in different ways. Where the lava is thin and runny, it flows easily and spreads out over great distances, building a broad, gently sloping mountain. Where the lava is thick and sticky, it cannot flow far and instead piles up steeply, and gas trapped inside it tends to escape in sudden, explosive bursts. The shape of a volcano therefore offers a clue to the kind of eruptions it produces.</p>
          <p><span class="passage-letter">D</span> One of the great aims of modern volcano science is to give warning before an eruption. A volcano about to erupt often shows signs: small earthquakes shake the ground as magma forces its way upward, the surface may bulge outward as the magma chamber fills, and gases may begin to leak from the summit. By watching closely for these clues, scientists can sometimes tell when an eruption is near and advise people living nearby to leave in good time. The warnings are far from perfect, but they have already saved many lives.</p>
          <p><span class="passage-letter">E</span> Eruptions can be enormously destructive. Streams of lava can bury fields and villages, while clouds of hot ash can blanket whole regions, collapsing roofs and ruining crops. Most dangerous of all are the fast-moving avalanches of scorching gas and ash that can race down a mountainside far quicker than anyone can run. Large eruptions can even throw so much dust into the upper air that they dim the sunlight and cool the climate of the whole planet for a year or more.</p>
          <p><span class="passage-letter">F</span> Yet volcanoes are not only a threat, and this helps explain why people continue to live near them. Over long periods of time, the ash and lava from past eruptions break down into some of the richest soils on Earth, ideal for farming. Volcanic regions are also valued for the heat they provide: in some countries the natural warmth of the ground is tapped to produce clean electricity and to heat homes. For many communities, the dangers of living beside a volcano are balanced by these real and lasting rewards.</p>`,
        groups: [
          {
            id: 'r2a', type: 'matching-headings', instructions: 'Choose the correct heading for each paragraph, A–F, from the list of headings below.',
            options: volcanoHeadings,
            questions: [
              { number: 14, text: 'Paragraph A' },
              { number: 15, text: 'Paragraph B' },
              { number: 16, text: 'Paragraph C' },
              { number: 17, text: 'Paragraph D' },
              { number: 18, text: 'Paragraph E' },
              { number: 19, text: 'Paragraph F' },
            ],
          },
          {
            id: 'r2b', type: 'matching', instructions: 'Match each description to the correct term. Choose from the list, A–D.',
            options: [
              { value: 'A', label: 'magma' },
              { value: 'B', label: 'plates' },
              { value: 'C', label: 'lava' },
              { value: 'D', label: 'ash' },
            ],
            questions: [
              { number: 20, text: 'the giant slabs of rock that make up the Earth’s outer shell' },
              { number: 21, text: 'fine material that can blanket a region and dim sunlight' },
              { number: 22, text: 'molten rock while it is still below the surface' },
              { number: 23, text: 'molten rock once it has burst out at the surface' },
            ],
          },
          {
            id: 'r2c', type: 'mcq-single', instructions: 'Choose the correct letter, A, B or C.',
            questions: [
              { number: 24, text: 'Most volcanoes are found', options: [{ value: 'A', label: 'in the middle of continents.' }, { value: 'B', label: 'where two plates meet.' }, { value: 'C', label: 'far from any ocean.' }] },
              { number: 25, text: 'A broad, gently sloping volcano is built by lava that is', options: [{ value: 'A', label: 'thin and runny.' }, { value: 'B', label: 'thick and sticky.' }, { value: 'C', label: 'cold and solid.' }] },
              { number: 26, text: 'One benefit of living near a volcano is', options: [{ value: 'A', label: 'protection from earthquakes.' }, { value: 'B', label: 'cooler summers.' }, { value: 'C', label: 'very fertile soil.' }] },
            ],
          },
        ],
      },
      {
        number: 3,
        heading: 'Reading Passage 3',
        title: 'The psychology of colour',
        html: `
          <p>Colour surrounds us at every moment, and although we rarely stop to think about it, the colours we see can quietly shape how we feel and behave. The study of these effects, sometimes called colour psychology, has interested scientists, designers and advertisers alike. Some of its claims are well supported by evidence, while others rest on little more than tradition; sorting the one from the other is not always easy, but the subject is a genuine field of research rather than mere superstition.</p>
          <p>Part of the power of colour lies in the way the eye and brain handle it. Warm colours such as red and orange are highly visible and tend to draw the eye, which is one reason they are chosen for warning signs and safety equipment. Red in particular seems to attract attention more strongly than any other colour, and a single red object in a dull setting will be noticed at once. Cool colours such as blue and green, by contrast, are restful to look at and are often described as calming, which may be why hospitals and offices so frequently use them.</p>
          <p>Some reactions to colour may run deeper than mere visibility and seem to be shared widely among people. Blue, for example, is consistently named as the world's most popular colour in surveys carried out in many different countries, a striking degree of agreement. Researchers suspect that such preferences are partly rooted in nature: blue is the colour of clear skies and clean water, both reassuring sights, while a murky brown might once have signalled dirt or danger. Colour can affect the body as well as the mind, and there is some evidence that certain shades can even influence appetite, which is of great interest to those who sell food.</p>
          <p>Yet it would be a mistake to think that colours carry fixed and universal meanings. The associations a colour calls up depend heavily on culture and on personal experience. White, for instance, is linked with weddings and purity in many Western countries but is a colour of mourning in parts of Asia. Because the meaning of a colour can vary so much from one place to another, a design that feels cheerful in one country may seem quite wrong in another, a fact that companies selling goods around the world must keep firmly in mind.</p>
          <p>Advertisers and businesses have been quick to make use of all this. The choice of colour for a product, a package or a company's logo is rarely an accident; it is the result of careful thought about the feelings the colour is meant to stir. Fast-food chains often favour bright reds and yellows, colours thought to catch the eye and encourage hunger, while banks and technology firms lean towards blue to suggest calm, trust and reliability. Across an entire market, the colours of rival brands are chosen as deliberately as their names.</p>
          <p>For all this interest, scientists urge caution. Many popular claims about colour — that a particular shade will calm an angry crowd, say, or boost a worker's output — turn out to be weakly supported or to vanish when tested carefully. The effect of any colour also depends on its context: the same red can mean danger on a sign, love on a greetings card, or simple appetite on a menu. What does seem clear is that colour is never quite neutral. It nudges our mood and our choices in small ways we seldom notice, and understanding those nudges is the real task of colour psychology.</p>`,
        groups: [
          {
            id: 'r3a', type: 'ynng', instructions: 'Do the following statements agree with the claims of the writer? Choose YES, NO or NOT GIVEN.',
            questions: [
              { number: 27, text: 'Red attracts the eye more strongly than other colours.' },
              { number: 28, text: 'The meaning of a colour is the same in every culture.' },
              { number: 29, text: 'Blue is the most popular colour in surveys around the world.' },
              { number: 30, text: 'Children prefer brighter colours than adults do.' },
              { number: 31, text: 'All popular claims about colour are well supported by evidence.' },
            ],
          },
          {
            id: 'r3b', type: 'mcq-multi', instructions: 'Which TWO uses of warm colours are mentioned in the passage? Choose TWO letters, A–E.',
            options: [
              { value: 'A', label: 'on warning signs' },
              { value: 'B', label: 'to help people sleep' },
              { value: 'C', label: 'to encourage hunger in advertising' },
              { value: 'D', label: 'to cool a room' },
              { value: 'E', label: 'to measure temperature' },
            ],
            questions: [{ number: 32 }, { number: 33 }],
          },
          {
            id: 'r3c', type: 'inline-gap', instructions: 'Complete the summary below.',
            wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
            bodyHtml: `
              <p>Colour affects how we feel and act. Warm colours such as red draw {{34}} and are used on
              warning signs and {{38}} equipment, while {{35}} colours like blue are calming and can even
              affect {{36}}. The meaning of a colour depends on {{37}}, so white means purity in some places
              but mourning in others. Because colour can shift our {{39}}, advertisers choose it carefully for
              their {{40}}.</p>`,
            questions: [{ number: 34 }, { number: 35 }, { number: 36 }, { number: 37 }, { number: 38 }, { number: 39 }, { number: 40 }],
          },
        ],
      },
    ],
  },
}
