/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExemplarPrompt, SentenceStem } from '../types';

export interface LanguageTechnique {
  id: 'rq' | 'emotive' | 'authoritative';
  name: string;
  tag: string;
  simpleMeaning: string;
  p6Examples: {
    label: string;
    text: string;
  }[];
}

export const LANGUAGE_TECHNIQUES: LanguageTechnique[] = [
  {
    id: 'rq',
    name: 'Rhetorical Question (RQ)',
    tag: 'Make Readers Think',
    simpleMeaning: 'A question you ask to hook readers and make them think deeply, without expecting an answer.',
    p6Examples: [
      {
        label: 'Cheap Clothes vs Planet',
        text: 'Have you ever wondered where our cheap trendy clothes go once we throw them away?'
      },
      {
        label: 'True Cost of Fashion',
        text: 'Is a five-dollar t-shirt really worth poisoning our planet’s rivers and oceans?'
      },
      {
        label: 'Future Generations',
        text: 'Can we truly stand by and watch mountains of discarded clothes choke our Earth?'
      }
    ]
  },
  {
    id: 'emotive',
    name: 'Emotive Language',
    tag: 'Appeal to Feelings',
    simpleMeaning: 'Words that make the reader feel strong emotions like worry, care, anger, or urgency.',
    p6Examples: [
      {
        label: 'Heartbreaking Waste',
        text: 'It is heartbreaking to witness mountains of barely-worn clothes rotting in overflowing landfills.'
      },
      {
        label: 'Poisoning Nature',
        text: 'Toxic chemicals from textile factories are quietly poisoning our precious waterways and harming innocent animals.'
      },
      {
        label: 'Worker Suffering',
        text: 'Underpaid factory workers suffer long, exhausting hours in unsafe conditions just to make cheap clothes.'
      }
    ]
  },
  {
    id: 'authoritative',
    name: 'Authoritative Language',
    tag: 'Sound Confident & Factual',
    simpleMeaning: 'Strong, confident words that show certainty and prove your argument with clear authority.',
    p6Examples: [
      {
        label: 'Undeniable Fact',
        text: 'It is undeniable that the fast fashion industry produces millions of tonnes of harmful waste each year.'
      },
      {
        label: 'Scientist Warnings',
        text: 'Environmental experts warn that our planet cannot sustain this rapid cycle of buying and dumping clothes.'
      },
      {
        label: 'Proven Evidence',
        text: 'Studies clearly demonstrate that throwing away cheap garments directly accelerates global pollution.'
      }
    ]
  }
];

export interface TabPedagogy {
  title: string;
  shortDefinition: string;
  slidePointers: string[];
  claimDefinition?: string;
  claimNote?: string;
  questionNote?: string;
  stems: SentenceStem[];
}

export const TAB_PEDAGOGY: Record<'background' | 'topic' | 'stand' | 'generate', TabPedagogy> = {
  background: {
    title: 'Background',
    shortDefinition: 'Give readers an overview of the topic',
    slidePointers: [
      'SCENARIO - REAL WORLD CONTEXT',
      'HISTORY',
      'STRONG STATEMENT / FACT',
    ],
    stems: [
      {
        id: 'bg-1',
        label: 'Real World Context',
        text: 'In today’s world, [topic] has become a major part of everyday life.',
        category: 'formal'
      },
      {
        id: 'bg-2',
        label: 'History',
        text: 'For many years, people have always [historical habit/practice], but recently [new change] has transformed this.',
        category: 'formal'
      },
      {
        id: 'bg-3',
        label: 'Strong Statement / Fact',
        text: 'Recent studies show that [fact or strong statement about topic].',
        category: 'formal'
      }
    ]
  },

  topic: {
    title: 'Topic',
    shortDefinition: 'What is the problem related to this topic? What is the argument being discussed?',
    slidePointers: [
      'This is where you introduce the problem or state the issue.',
      'Highlight what is wrong, and why the current situation cannot continue.',
    ],
    stems: [
      {
        id: 'top-1',
        label: 'Introducing the Problem',
        text: 'The main problem with [topic] is that [explain what is wrong].',
        category: 'contrast'
      },
      {
        id: 'top-2',
        label: 'Why Situation Cannot Continue',
        text: 'This situation cannot continue because it leads to [harmful effect or risk].',
        category: 'urgent'
      },
      {
        id: 'top-3',
        label: 'The Debate / Conflict',
        text: 'While some people argue that [side A], others believe that [side B].',
        category: 'formal'
      }
    ]
  },

  stand: {
    title: 'Stand',
    shortDefinition: 'What is your viewpoint on this issue? Claim?',
    slidePointers: [
      'I strongly believe that ...........',
      'It is clear that ...........',
      'In my opinion...',
      'Many people claim that..., however, I believe......',
      'Start by asking a question about the big problem, then immediately give your claim as the answer.',
    ],
    claimDefinition: 'Claim: the position taken by the writer; what the writer is trying to prove or argue.',
    claimNote: 'The claim makes a logical argument.',
    questionNote: 'What do I think?',
    stems: [
      {
        id: 'st-1',
        label: 'I strongly believe that...',
        text: 'I strongly believe that [your claim] because [reason 1] and [reason 2].',
        category: 'formal'
      },
      {
        id: 'st-2',
        label: 'It is clear that...',
        text: 'It is clear that [your claim] because [reason 1] and [reason 2].',
        category: 'formal'
      },
      {
        id: 'st-3',
        label: 'In my opinion...',
        text: 'In my opinion, [your claim] because [reason 1] and [reason 2].',
        category: 'formal'
      },
      {
        id: 'st-4',
        label: 'Many people claim that..., however, I believe...',
        text: 'Many people claim that [opposing point], however, I believe [your claim] because [reason].',
        category: 'nuanced'
      },
      {
        id: 'st-5',
        label: 'Question + Answer Claim',
        text: 'Should society allow [problem]? The answer is clear: [your claim] because [reason].',
        category: 'urgent'
      }
    ]
  },

  generate: {
    title: 'Generate',
    shortDefinition: 'Put them together into a complete introduction paragraph',
    slidePointers: [
      'Connect your Background, Topic, and Stand smoothly.',
      'Check that your introduction flows clearly from overview to problem to your viewpoint.',
    ],
    stems: []
  }
};

export const TRANSITION_PRESETS = {
  bgToTopic: [
    {
      id: 'bt-1',
      label: 'However (Problem)',
      phrase: 'However, the main problem is that'
    },
    {
      id: 'bt-2',
      label: 'Unfortunately (Harm)',
      phrase: 'Unfortunately, this has created a serious issue because'
    },
    {
      id: 'bt-3',
      label: 'The Challenge',
      phrase: 'The major concern with this situation is that'
    },
    {
      id: 'bt-4',
      label: 'Despite this (Conflict)',
      phrase: 'Despite its popularity, a big problem has emerged:'
    }
  ],
  topicToStand: [
    {
      id: 'ts-1',
      label: 'Therefore',
      phrase: 'Therefore,'
    },
    {
      id: 'ts-2',
      label: 'For these reasons',
      phrase: 'For these important reasons,'
    },
    {
      id: 'ts-3',
      label: 'Because of this issue',
      phrase: 'Because of this growing issue,'
    },
    {
      id: 'ts-4',
      label: 'In conclusion to this debate',
      phrase: 'Looking at both sides,'
    }
  ]
};

export const SAMPLE_EXEMPLARS: ExemplarPrompt[] = [
  {
    id: 'fast-fashion',
    title: 'Is It Time to Put an End to Fast Fashion?',
    topicCategory: 'Environment & Shopping (Primary 6 Main Topic)',
    promptQuestion: 'Is it time to put an end to fast fashion?',
    background:
      'In today’s world, buying trendy new clothes has become faster and cheaper than ever before. For many decades, people bought durable clothes that lasted for years, but recently "fast fashion" brands produce millions of cheap shirts and dresses every single week. In fact, studies show that many young shoppers wear an outfit only once or twice before throwing it away into the trash.',
    topic:
      'the serious problem is that fast fashion creates mountains of toxic textile waste and poisons our rivers with harmful chemical dyes. This situation cannot continue because landfills are overflowing with discarded clothes and poor garment workers are forced to work long hours in unsafe factories.',
    stand:
      'I strongly believe that society must put an end to fast fashion, because buying fewer durable clothes protects our planet from severe pollution and supports fair treatment for factory workers.',
    transitionBgToTopic: 'However, the main problem is that',
    transitionTopicToStand: 'Therefore,',
    fullParagraph:
      'In today’s world, buying trendy new clothes has become faster and cheaper than ever before. For many decades, people bought durable clothes that lasted for years, but recently "fast fashion" brands produce millions of cheap shirts and dresses every single week. In fact, studies show that many young shoppers wear an outfit only once or twice before throwing it away into the trash. However, the main problem is that fast fashion creates mountains of toxic textile waste and poisons our rivers with harmful chemical dyes. This situation cannot continue because landfills are overflowing with discarded clothes and poor garment workers are forced to work long hours in unsafe factories. Therefore, I strongly believe that society must put an end to fast fashion, because buying fewer durable clothes protects our planet from severe pollution and supports fair treatment for factory workers.',
    analysis: {
      backgroundWhy: 'Scenario & History: Explains how shopping changed from long-lasting clothes to cheap weekly trends.',
      topicWhy: 'States the issue clearly: landfill waste, water pollution, and unfair working conditions that cannot continue.',
      standWhy: 'Uses slide starter "I strongly believe that" with 2 clear reasons (protects planet + fair worker treatment).'
    }
  },
  {
    id: 'weekend-homework',
    title: 'Should Teachers Give Homework on Weekends?',
    topicCategory: 'School Life (Primary 6)',
    promptQuestion: 'Should teachers give homework to primary students on weekends?',
    background:
      'In today’s world, primary school students already spend five long days studying hard in class. For many years, teachers have also given stacks of homework worksheets for children to complete every Saturday and Sunday.',
    topic:
      'the main problem is that heavy weekend homework leaves children exhausted and robs them of family time. This situation cannot continue because young students need proper rest and sleep to stay healthy and ready for Monday.',
    stand:
      'I strongly believe that teachers should stop giving homework on weekends, because weekends are meant for family bonding and resting our minds.',
    transitionBgToTopic: 'However, the main problem is that',
    transitionTopicToStand: 'Therefore,',
    fullParagraph:
      'In today’s world, primary school students already spend five long days studying hard in class. For many years, teachers have also given stacks of homework worksheets for children to complete every Saturday and Sunday. However, the main problem is that heavy weekend homework leaves children exhausted and robs them of family time. This situation cannot continue because young students need proper rest and sleep to stay healthy and ready for Monday. Therefore, I strongly believe that teachers should stop giving homework on weekends, because weekends are meant for family bonding and resting our minds.',
    analysis: {
      backgroundWhy: 'Gives a clear real-world scenario of school days and weekend homework habits.',
      topicWhy: 'Introduces the problem clearly: exhaustion, lack of family time, and why it cannot continue.',
      standWhy: 'Uses the slide starter "I strongly believe that" and gives 2 simple, clear reasons.'
    }
  },
  {
    id: 'mobile-phones',
    title: 'Phones in Primary School',
    topicCategory: 'Technology & Kids (Primary 6)',
    promptQuestion: 'Should primary school students be allowed to bring mobile phones to school?',
    background:
      'In today’s world, mobile phones are used by almost everyone, including primary school children. Many parents buy smartphones for their children so they can call home after school activities or track their location for safety.',
    topic:
      'the main problem with bringing phones to school is that they cause huge distractions during lessons. This situation cannot continue because students secretly play games and message friends instead of listening to their teachers.',
    stand:
      'In my opinion, primary school students should not be allowed to bring mobile phones into classrooms, because phones disrupt learning and stop students from talking and playing with friends.',
    transitionBgToTopic: 'However, the main problem is that',
    transitionTopicToStand: 'For these important reasons,',
    fullParagraph:
      'In today’s world, mobile phones are used by almost everyone, including primary school children. Many parents buy smartphones for their children so they can call home after school activities or track their location for safety. However, the main problem is that they cause huge distractions during lessons. This situation cannot continue because students secretly play games and message friends instead of listening to their teachers. For these important reasons, In my opinion, primary school students should not be allowed to bring mobile phones into classrooms, because phones disrupt learning and stop students from talking and playing with friends.',
    analysis: {
      backgroundWhy: 'Explains real-world context of why students have phones for communication.',
      topicWhy: 'Highlights what is wrong: secret gaming and lost attention during class.',
      standWhy: 'Uses the slide starter "In my opinion" and states clear reasons about focus and friendships.'
    }
  },
  {
    id: 'canteen-fast-food',
    title: 'Fast Food in School Canteen',
    topicCategory: 'Health & Canteen (Primary 6)',
    promptQuestion: 'Should school canteens stop selling fast food like fried chicken and french fries?',
    background:
      'In recent years, fast food like chicken nuggets, hot dogs, and crispy french fries has become extremely popular among primary school students. Many school canteens sell these items daily because pupils eagerly line up to buy them.',
    topic:
      'the serious problem is that fast food contains unhealthy amounts of oil, salt, and sugar. This situation cannot continue because eating greasy food daily harms children’s health and makes students feel sluggish during afternoon lessons.',
    stand:
      'It is clear that school canteens should replace fast food with fresh fruits and balanced meals, because healthy food protects children from illness and helps students concentrate better in class.',
    transitionBgToTopic: 'Unfortunately, this has created a serious issue because',
    transitionTopicToStand: 'Therefore,',
    fullParagraph:
      'In recent years, fast food like chicken nuggets, hot dogs, and crispy french fries has become extremely popular among primary school students. Many school canteens sell these items daily because pupils eagerly line up to buy them. Unfortunately, this has created a serious issue because fast food contains unhealthy amounts of oil, salt, and sugar. This situation cannot continue because eating greasy food daily harms children’s health and makes students feel sluggish during afternoon lessons. Therefore, It is clear that school canteens should replace fast food with fresh fruits and balanced meals, because healthy food protects children from illness and helps students concentrate better in class.',
    analysis: {
      backgroundWhy: 'Sets up the familiar canteen scenario that every primary student knows.',
      topicWhy: 'Explains what is wrong with greasy food and why the canteen situation cannot continue.',
      standWhy: 'Uses the slide starter "It is clear that" with 2 practical health reasons.'
    }
  }
];
