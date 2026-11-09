/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThesaurusWord } from '../types';

export const CURATED_ACADEMIC_THESAURUS: ThesaurusWord[] = [
  // VERBS OF ARGUMENTATION & CLAIM
  {
    word: 'argue',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['contend', 'assert', 'maintain', 'posit', 'propose', 'advocate', 'reason'],
    antonyms: ['concede', 'waver', 'yield'],
    definition: 'To present reasons or evidence in support of an idea, theory, or action.',
    exampleSentence: 'Scholars contend that unmonitored artificial intelligence poses systemic risks to classroom integrity.'
  },
  {
    word: 'show',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['demonstrate', 'illustrate', 'substantiate', 'exemplify', 'illuminate', 'reveal', 'manifest'],
    antonyms: ['obscure', 'conceal', 'disguise'],
    definition: 'To make an idea, evidence, or consequence clear and perceptible.',
    exampleSentence: 'Recent empirical studies demonstrate a measurable decline in cognitive stamina among chronic multitaskers.'
  },
  {
    word: 'prove',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['verify', 'corroborate', 'validate', 'authenticate', 'substantiate', 'establish'],
    antonyms: ['refute', 'disprove', 'invalidate'],
    definition: 'To demonstrate the truth or validity of a claim through rigorous evidence.',
    exampleSentence: 'The gathered data validates the hypothesis that early intervention mitigates long-term learning deficits.'
  },
  {
    word: 'disagree',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['refute', 'contest', 'dispute', 'challenge', 'dissent', 'counter', 'controvert'],
    antonyms: ['concur', 'endorse', 'assent'],
    definition: 'To actively challenge or contest a prevailing hypothesis or counter-argument.',
    exampleSentence: 'Prominent educational psychologists contest the assumption that screen-free classrooms yield superior outcomes.'
  },
  {
    word: 'support',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['buttress', 'reinforce', 'bolster', 'underpin', 'champion', 'substantiate', 'uphold'],
    antonyms: ['undermine', 'weaken', 'sabotage'],
    definition: 'To provide structural evidence or philosophical grounds for a position.',
    exampleSentence: 'Sociological surveys bolster the claim that civic engagement flourishes when curricula incorporate active debate.'
  },
  {
    word: 'weaken',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['undermine', 'compromise', 'erode', 'diminish', 'debilitate', 'subvert'],
    antonyms: ['strengthen', 'reinforce', 'fortify'],
    definition: 'To lessen the effectiveness, credibility, or strength of an argument or system.',
    exampleSentence: 'Relying exclusively on anecdotal accounts compromises the scientific validity of the research.'
  },
  {
    word: 'cause',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['precipitate', 'instigate', 'induce', 'engender', 'foster', 'catalyze', 'trigger'],
    antonyms: ['prevent', 'stifle', 'impede'],
    definition: 'To act as the direct origin or catalyst that brings about a specific effect.',
    exampleSentence: 'Uncontrolled algorithmic polarization engenders deep divisions across contemporary democratic discourse.'
  },
  {
    word: 'make worse',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['exacerbate', 'compound', 'aggravate', 'intensify', 'magnify'],
    antonyms: ['alleviate', 'mitigate', 'ameliorate'],
    definition: 'To increase the severity, harm, or difficulty of an existing condition.',
    exampleSentence: 'Punitive disciplinary policies often exacerbate chronic absenteeism rather than correcting it.'
  },
  {
    word: 'reduce',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['mitigate', 'alleviate', 'attenuate', 'diminish', 'curtail', 'abate'],
    antonyms: ['escalate', 'compound', 'amplify'],
    definition: 'To lessen the degree, severity, or extent of an undesirable consequence.',
    exampleSentence: 'Universal access to public transit directly mitigates socioeconomic inequality in urban centers.'
  },
  {
    word: 'emphasize',
    category: 'verb',
    academicLevel: 'scholarly',
    synonyms: ['underscore', 'accentuate', 'spotlight', 'illuminate', 'foreground', 'reiterate'],
    antonyms: ['downplay', 'minimize', 'obscure'],
    definition: 'To draw deliberate focus and analytical weight toward a pivotal factor.',
    exampleSentence: 'Modern educators underscore the indispensability of computational literacy in secondary education.'
  },

  // ADJECTIVES & EVALUATIVES
  {
    word: 'important',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['paramount', 'pivotal', 'crucial', 'imperative', 'indispensable', 'consequential', 'salient'],
    antonyms: ['trivial', 'negligible', 'incidental'],
    definition: 'Of supreme significance or possessing direct bearing upon an outcome.',
    exampleSentence: 'Maintaining academic honesty is of paramount importance in an era dominated by generative neural networks.'
  },
  {
    word: 'harmful',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['detrimental', 'deleterious', 'pernicious', 'adverse', 'corrosive', 'hazardous'],
    antonyms: ['beneficial', 'advantageous', 'salutary'],
    definition: 'Causing damage, sustained injury, or systemic degradation.',
    exampleSentence: 'Prolonged social media exposure exerts a deleterious influence on adolescent sleep hygiene and self-esteem.'
  },
  {
    word: 'good',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['advantageous', 'salutary', 'favorable', 'constructive', 'meritorious', 'beneficial'],
    antonyms: ['detrimental', 'unfavorable', 'regressive'],
    definition: 'Fostering welfare, productive progress, or positive consequence.',
    exampleSentence: 'Integrating collaborative workshops produces advantageous developments in peer-to-peer accountability.'
  },
  {
    word: 'bad',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['deficient', 'inadvisable', 'suboptimal', 'pernicious', 'reprehensible', 'flawed'],
    antonyms: ['exemplary', 'commendable', 'optimal'],
    definition: 'Lacking quality, morally untenable, or structurally deficient.',
    exampleSentence: 'A blanket prohibition on classroom technology represents a flawed and shortsighted instructional paradigm.'
  },
  {
    word: 'big',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['monumental', 'substantial', 'profound', 'formidable', 'extensive', 'immeasurable'],
    antonyms: ['diminutive', 'trivial', 'nominal'],
    definition: 'Extensive in scale, scope, depth, or socio-historical consequence.',
    exampleSentence: 'The transition toward automated labor forces represents a monumental realignment of modern economic structures.'
  },
  {
    word: 'clear',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['unequivocal', 'unambiguous', 'lucid', 'manifest', 'palpable', 'distinct'],
    antonyms: ['equivocal', 'ambiguous', 'opaque'],
    definition: 'Easily perceived or understood; leaving no room for legitimate doubt.',
    exampleSentence: 'The empirical metrics offer unequivocal evidence that physical exercise enhances neural plasticity.'
  },
  {
    word: 'difficult',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['arduous', 'formidable', 'laborious', 'exacting', 'contentious', 'intricate'],
    antonyms: ['facile', 'elementary', 'straightforward'],
    definition: 'Presenting substantial challenges, structural complications, or rigorous obstacles.',
    exampleSentence: 'Balancing intellectual property rights against algorithmic accessibility remains an intricate legal puzzle.'
  },
  {
    word: 'widespread',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['ubiquitous', 'pervasive', 'prevalent', 'endemic', 'universal'],
    antonyms: ['isolated', 'sporadic', 'scarce'],
    definition: 'Existing or occurring across a broad spectrum of domains or demographics.',
    exampleSentence: 'The pervasive adoption of smartphones has fundamentally altered interpersonal communications.'
  },
  {
    word: 'debatable',
    category: 'adjective',
    academicLevel: 'scholarly',
    synonyms: ['contentious', 'disputed', 'polemical', 'controversial', 'moot', 'equivocal'],
    antonyms: ['incontrovertible', 'indisputable', 'settled'],
    definition: 'Open to questioning, active disagreement, or multiple contrasting interpretations.',
    exampleSentence: 'Whether standardised testing accurately reflects cognitive aptitude remains a highly contentious question.'
  },

  // NOUNS OF CONFLICT & IMPACT
  {
    word: 'problem',
    category: 'noun',
    academicLevel: 'scholarly',
    synonyms: ['dilemma', 'quandary', 'impediment', 'predicament', 'conundrum', 'crisis'],
    antonyms: ['panacea', 'resolution', 'advantage'],
    definition: 'A matter or situation regarded as unwelcome, harmful, or requiring deliberate intervention.',
    exampleSentence: 'Rising tuition costs have precipitated a profound economic dilemma for aspiring university scholars.'
  },
  {
    word: 'difference',
    category: 'noun',
    academicLevel: 'scholarly',
    synonyms: ['discrepancy', 'disparity', 'divergence', 'dichotomy', 'incongruity'],
    antonyms: ['congruence', 'uniformity', 'parallel'],
    definition: 'A distinct lack of similarity or notable point of separation between two perspectives or entities.',
    exampleSentence: 'The sharp disparity in funding between municipal school districts undermines the promise of equitable education.'
  },
  {
    word: 'result',
    category: 'noun',
    academicLevel: 'scholarly',
    synonyms: ['consequence', 'ramification', 'corollary', 'aftermath', 'byproduct', 'implication'],
    antonyms: ['precursor', 'catalyst', 'origin'],
    definition: 'An outcome or secondary effect that ensues from an action, policy, or phenomenon.',
    exampleSentence: 'A pervasive loss of consumer privacy is an unintended ramification of pervasive behavioral tracking.'
  },
  {
    word: 'reason',
    category: 'noun',
    academicLevel: 'scholarly',
    synonyms: ['rationale', 'justification', 'catalyst', 'foundation', 'premise', 'incentive'],
    antonyms: ['arbitrariness', 'whim'],
    definition: 'The intellectual justification or causal motive behind a policy, perspective, or phenomenon.',
    exampleSentence: 'The primary rationale for implementing universal school lunch programs rests on nutritional equity.'
  },

  // TRANSITIONS & RHETORICAL CONNECTORS
  {
    word: 'however',
    category: 'transition',
    academicLevel: 'scholarly',
    synonyms: ['nevertheless', 'conversely', 'notwithstanding', 'in contrast', 'yet', 'on the other hand'],
    definition: 'Used to introduce a statement that contrasts with or seems to contradict something already stated.',
    exampleSentence: 'The tool provides immense convenience; nevertheless, ethical safeguards must remain non-negotiable.'
  },
  {
    word: 'therefore',
    category: 'transition',
    academicLevel: 'scholarly',
    synonyms: ['consequently', 'hence', 'thus', 'accordingly', 'ergo', 'as a result'],
    definition: 'For that reason; consequently establishing a deductive or causal link.',
    exampleSentence: 'The system perpetuates systemic bias; accordingly, immediate institutional reforms are required.'
  },
  {
    word: 'furthermore',
    category: 'transition',
    academicLevel: 'scholarly',
    synonyms: ['moreover', 'additionally', 'in tandem with this', 'further', 'what is more'],
    definition: 'In addition to what has been previously established or argued.',
    exampleSentence: 'Moreover, implementing environmental quotas stimulates green entrepreneurship across regional economies.'
  },
  {
    word: 'although',
    category: 'transition',
    academicLevel: 'scholarly',
    synonyms: ['albeit', 'even though', 'notwithstanding that', 'granted that', 'while'],
    definition: 'Introducing a subordinate clause that qualifies or concedes an opposing claim.',
    exampleSentence: 'Although detractors express concern over initial expenditures, the longitudinal savings are undeniable.'
  }
];

// Academic replacement suggestions for common weak student words
export const WEAK_WORDS_MAP: Record<string, { replacement: string; alternatives: string[]; explanation: string }> = {
  'very': {
    replacement: 'profoundly',
    alternatives: ['exceptionally', 'exceedingly', 'substantially', 'markedly'],
    explanation: 'Avoid "very"; use an exact intensifier or stronger root adjective.'
  },
  'a lot': {
    replacement: 'substantially',
    alternatives: ['significantly', 'considerably', 'extensively', 'a myriad of'],
    explanation: '"A lot" is colloquial; use precise quantitative or qualitative terminology.'
  },
  'good': {
    replacement: 'beneficial',
    alternatives: ['advantageous', 'salutary', 'constructive', 'effective'],
    explanation: '"Good" is vague and moralistic; specify how the subject benefits society.'
  },
  'bad': {
    replacement: 'detrimental',
    alternatives: ['deleterious', 'pernicious', 'suboptimal', 'adverse'],
    explanation: '"Bad" is imprecise; articulate the exact harm or flaw.'
  },
  'i think': {
    replacement: 'the evidence suggests',
    alternatives: ['scholarly consensus indicates', 'it is apparent that', 'an objective analysis reveals'],
    explanation: 'First-person disclaimers weaken authorial authority in argumentative writing.'
  },
  'in my opinion': {
    replacement: 'evidence demonstrates that',
    alternatives: ['upon closer inspection', 'critics and advocates alike must recognize that'],
    explanation: 'Your thesis statement implicitly represents your stance—stating "in my opinion" diminishes its weight.'
  },
  'big': {
    replacement: 'monumental',
    alternatives: ['substantial', 'extensive', 'profound', 'consequential'],
    explanation: '"Big" lacks formal academic weight; specify scope, scale, or impact.'
  },
  'stuff': {
    replacement: 'elements',
    alternatives: ['factors', 'variables', 'phenomena', 'considerations'],
    explanation: '"Stuff" is conversational slang; replace with concrete nouns.'
  },
  'things': {
    replacement: 'components',
    alternatives: ['factors', 'dynamics', 'implications', 'aspects'],
    explanation: '"Things" obscures what specific variables or phenomena are being discussed.'
  },
  'huge': {
    replacement: 'monumental',
    alternatives: ['formidable', 'immense', 'pervasive', 'extensive'],
    explanation: 'Replace hyperbolic words with measured academic descriptors.'
  },
  'crazy': {
    replacement: 'unprecedented',
    alternatives: ['anomalous', 'drastic', 'radical', 'extraordinary'],
    explanation: 'Avoid informal idioms; state the objective rarity or impact.'
  }
};

/**
 * Async query for Datamuse API with offline fallback to our curated academic library
 */
export async function queryThesaurus(term: string): Promise<ThesaurusWord[]> {
  const cleanTerm = term.trim().toLowerCase();
  if (!cleanTerm) return [];

  // Check exact or partial local matches first
  const localMatches = CURATED_ACADEMIC_THESAURUS.filter(
    (item) => item.word.toLowerCase() === cleanTerm || item.synonyms.some((s) => s.toLowerCase() === cleanTerm)
  );

  try {
    // Attempt Datamuse live API lookup for infinite English lexical breadth
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2800);

    const [synRes, mlRes] = await Promise.all([
      fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(cleanTerm)}&max=10`, { signal: controller.signal }),
      fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(cleanTerm)}&max=10`, { signal: controller.signal })
    ]);

    clearTimeout(timeoutId);

    if (synRes.ok) {
      const synData = await synRes.json();
      const mlData = mlRes.ok ? await mlRes.json() : [];

      const rawSynonyms: string[] = Array.from(
        new Set([
          ...synData.map((item: { word: string }) => item.word),
          ...mlData.map((item: { word: string }) => item.word)
        ])
      ).filter((w) => w.toLowerCase() !== cleanTerm && !w.includes(' '));

      if (rawSynonyms.length > 0) {
        // If we found local matches, merge them. Otherwise synthesize a rich Datamuse entry.
        if (localMatches.length > 0) {
          return localMatches.map((local) => ({
            ...local,
            synonyms: Array.from(new Set([...local.synonyms, ...rawSynonyms.slice(0, 10)]))
          }));
        }

        return [
          {
            word: cleanTerm,
            category: 'verb',
            academicLevel: 'advanced',
            synonyms: rawSynonyms.slice(0, 12),
            definition: `Synonyms and related conceptual vocabulary for "${cleanTerm}".`,
            exampleSentence: `In argumentative discourse, replacing "${cleanTerm}" with "${rawSynonyms[0] || 'an academic term'}" elevates register.`
          }
        ];
      }
    }
  } catch {
    // Network unavailable or timed out; fall back entirely to local database
  }

  // Fallback to fuzzy substring or semantic matches from local bank
  if (localMatches.length > 0) {
    return localMatches;
  }

  const fuzzyMatches = CURATED_ACADEMIC_THESAURUS.filter(
    (item) => item.word.toLowerCase().includes(cleanTerm) || item.synonyms.some((s) => s.toLowerCase().includes(cleanTerm))
  );

  return fuzzyMatches;
}
