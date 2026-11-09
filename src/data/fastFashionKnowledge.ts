/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FastFashionQA {
  id: string;
  question: string;
  simpleAnswer: string;
}

export const FAST_FASHION_PRESET_QUESTIONS: FastFashionQA[] = [
  {
    id: 'what-is-it',
    question: 'What is fast fashion?',
    simpleAnswer:
      'Fast fashion means big clothing companies making cheap, trendy clothes very quickly so people can buy new styles every single week at super low prices. To keep prices so low, the clothes are often made with cheap plastic fabrics in crowded factories.'
  },
  {
    id: 'why-bad',
    question: 'Why is fast fashion bad for our world?',
    simpleAnswer:
      'Fast fashion is harmful for three big reasons: it wastes massive amounts of clean water and pollutes rivers with toxic dyes, it fills giant landfills with plastic-based clothes that take 200 years to break down, and it often pays factory workers unfair wages in unsafe conditions.'
  },
  {
    id: 'why-so-cheap',
    question: 'Why are fast fashion clothes so cheap to buy?',
    simpleAnswer:
      'Fast fashion clothes are cheap because companies use synthetic plastic materials like polyester instead of high-quality cotton, and they make clothes in factories where workers are paid very low wages. Companies also make huge amounts at once so each shirt costs only a few dollars to produce.'
  },
  {
    id: 'water-pollution',
    question: 'How does fast fashion pollute our water and rivers?',
    simpleAnswer:
      'Making and dyeing clothes uses huge amounts of clean water and toxic chemicals. For example, making just ONE cotton t-shirt takes about 2,700 liters of water—enough drinking water for one person for 2.5 years! Many factories dump leftover colored dye straight into rivers, turning the water bright blue or purple and harming fish.'
  },
  {
    id: 'landfills-waste',
    question: 'What happens when we throw away cheap clothes?',
    simpleAnswer:
      'Most thrown-away clothes do not get recycled. Every second, a full garbage truck of unwanted clothes is burned or dumped into giant landfills! Because cheap clothes contain plastic fibers, they do not rot naturally and can sit in landfills for over 200 years.'
  },
  {
    id: 'microplastics',
    question: 'Do clothes contain plastic?',
    simpleAnswer:
      'More than 60% of modern fast fashion clothes are made from polyester, nylon, and acrylic, which are actually types of plastic made from oil. Every time you wash a polyester shirt in the washing machine, thousands of tiny invisible plastic fibers wash down the drain and end up in the ocean.'
  },
  {
    id: 'workers-fairness',
    question: 'Are garment factory workers treated fairly?',
    simpleAnswer:
      'Many garment factory workers are not treated fairly. In fast fashion factories, workers—mostly young women and sometimes even underage teenagers—work 12 to 14 hours a day in hot, crowded, and unsafe buildings for only a few dollars a day, just so shops can sell cheap trendy clothes.'
  },
  {
    id: 'animals-wildlife',
    question: 'Does fast fashion hurt animals and wildlife?',
    simpleAnswer:
      'Fast fashion hurts animals and wildlife in several ways. Fish and sea turtles swallow tiny plastic microfibers washed out of synthetic clothes, poisoned river water harms wildlife habitats, and cutting down forests to grow cheap fabrics or raise animals destroys homes for wild birds and mammals.'
  },
  {
    id: 'pros-and-cons',
    question: 'Are there any good things about fast fashion?',
    simpleAnswer:
      'Some people argue that fast fashion helps families with less money afford warm or stylish clothes, and clothing factories provide millions of jobs around the world. However, even though cheap clothes save money today, the pollution and unfair treatment of workers hurt everyone in the long run.'
  },
  {
    id: 'what-can-kids-do',
    question: 'What can primary school students do to help?',
    simpleAnswer:
      'Primary school students can make a huge difference! You can wear your clothes until you outgrow them, swap or share outfits with siblings and friends, donate old clothes to charity, shop at second-hand thrift stores, and sew small holes instead of throwing shirts away.'
  }
];
