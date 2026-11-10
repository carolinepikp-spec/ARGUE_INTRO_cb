/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface IntroductionDraft {
  id: string;
  title: string;
  background: string;
  topic: string;
  stand: string;
  transitionBgToTopic: string;
  transitionTopicToStand: string;
  hookType: string;
  stylePreset: 'standard' | 'concession_first' | 'urgent_stakes' | 'custom';
  createdAt: number;
  updatedAt: number;
}

export interface ThesaurusWord {
  word: string;
  category: 'verb' | 'adjective' | 'noun' | 'transition';
  academicLevel: 'fundamental' | 'advanced' | 'scholarly';
  synonyms: string[];
  antonyms?: string[];
  definition: string;
  exampleSentence: string;
}

export interface SentenceStem {
  id: string;
  label: string;
  text: string;
  category: 'formal' | 'nuanced' | 'urgent' | 'contrast';
}
