/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SentenceStem } from '../types';

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
