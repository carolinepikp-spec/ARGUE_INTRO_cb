/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useTransition } from 'react';
import { X, Search, Copy, Check, ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react';
import { CURATED_ACADEMIC_THESAURUS, WEAK_WORDS_MAP, queryThesaurus } from '../data/thesaurusData';
import { ThesaurusWord } from '../types';

interface ThesaurusDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertWord?: (word: string) => void;
  initialQuery?: string;
  activeTargetName?: string;
}

export const ThesaurusDrawer: React.FC<ThesaurusDrawerProps> = ({
  isOpen,
  onClose,
  onInsertWord,
  initialQuery = '',
  activeTargetName,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [results, setResults] = useState<ThesaurusWord[]>(CURATED_ACADEMIC_THESAURUS);
  const [copiedWord, setCopiedWord] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'thesaurus' | 'toneScanner'>('thesaurus');
  const [sampleScannerText, setSampleScannerText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (initialQuery) {
      setSearchTerm(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    let isCancelled = false;

    if (!searchTerm.trim()) {
      let filtered = CURATED_ACADEMIC_THESAURUS;
      if (selectedCategory !== 'all') {
        filtered = filtered.filter((item) => item.category === selectedCategory);
      }
      setResults(filtered);
      return;
    }

    setIsSearching(true);
    const delayDebounce = setTimeout(async () => {
      try {
        const words = await queryThesaurus(searchTerm);
        if (!isCancelled) {
          startTransition(() => {
            let finalWords = words;
            if (selectedCategory !== 'all') {
              finalWords = finalWords.filter((w) => w.category === selectedCategory);
            }
            setResults(finalWords);
            setIsSearching(false);
          });
        }
      } catch {
        if (!isCancelled) setIsSearching(false);
      }
    }, 250);

    return () => {
      isCancelled = true;
      clearTimeout(delayDebounce);
    };
  }, [searchTerm, selectedCategory]);

  const handleCopy = (word: string) => {
    navigator.clipboard.writeText(word);
    setCopiedWord(word);
    setTimeout(() => setCopiedWord(null), 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <aside className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-slate-200">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-blue-100 text-blue-800">
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Word Finder</h2>
              <p className="text-xs text-slate-500">Find cool synonyms to upgrade your sentences</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close Word Finder"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* View Switcher: Word Lookup vs Word Upgrader */}
        <div className="px-5 pt-3 pb-2 border-b border-slate-100 flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('thesaurus')}
            className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer ${
              activeTab === 'thesaurus'
                ? 'bg-blue-900 text-white'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Find Words
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('toneScanner')}
            className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === 'toneScanner'
                ? 'bg-blue-900 text-white'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Word Upgrader</span>
          </button>
        </div>

        {activeTab === 'thesaurus' ? (
          <>
            {/* Search and Category Filters */}
            <div className="p-4 border-b border-slate-100 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type a word (e.g. bad, good, big, hurt, think)..."
                  className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white text-slate-900 placeholder:text-slate-400"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Category selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] text-slate-600">
                <span className="flex items-center gap-1 shrink-0 text-slate-400 pr-1">
                  <Filter className="w-3 h-3" />
                </span>
                {[
                  { id: 'all', label: 'All Words' },
                  { id: 'verb', label: 'Action Words' },
                  { id: 'adjective', label: 'Describing Words' },
                  { id: 'noun', label: 'Problem Words' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white font-medium'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {activeTargetName && (
                <div className="text-[11px] text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded-md flex items-center justify-between font-medium">
                  <span>Adding into: <strong className="font-bold">{activeTargetName}</strong></span>
                  <span className="text-[10px] text-blue-600">Click a word to add it</span>
                </div>
              )}
            </div>

            {/* Word List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {isSearching && (
                <div className="text-center py-6 text-xs text-slate-400">
                  Searching lexical database...
                </div>
              )}

              {!isSearching && results.length === 0 && (
                <div className="text-center py-10 px-4">
                  <p className="text-sm font-medium text-slate-700">No direct synonyms found</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Try searching common argument verbs like <em>"contend"</em>, <em>"substantiate"</em>, or adjectives like <em>"pivotal"</em>.
                  </p>
                </div>
              )}

              {results.map((entry) => (
                <div
                  key={entry.word}
                  className="p-3.5 bg-slate-50/70 rounded-lg border border-slate-200 space-y-2.5 transition-shadow hover:shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-slate-900 capitalize">{entry.word}</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide">
                        {entry.category}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(entry.word)}
                      className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                      title="Copy root word"
                    >
                      {copiedWord === entry.word ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{entry.definition}</p>

                  {/* Synonyms Grid */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                      Scholarly Synonyms:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.synonyms.map((syn) => (
                        <button
                          key={syn}
                          type="button"
                          onClick={() => {
                            if (onInsertWord) {
                              onInsertWord(syn);
                            }
                            handleCopy(syn);
                          }}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-800 transition-colors flex items-center gap-1 cursor-pointer group"
                        >
                          <span>{syn}</span>
                          {copiedWord === syn ? (
                            <Check className="w-2.5 h-2.5 text-emerald-600" />
                          ) : (
                            <ArrowRight className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 opacity-60" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Example Context */}
                  {entry.exampleSentence && (
                    <div className="pt-1.5 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                      "{entry.exampleSentence}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Academic Upgrader View */
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong className="font-semibold block mb-0.5">Academic Voice Guide:</strong>
              Argumentative essays require formal precision. Avoid colloquialisms like <em>"I think"</em>, <em>"a lot"</em>, or <em>"very bad"</em>.
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 block">
                Quick Scanner & Substitutions
              </label>
              <textarea
                value={sampleScannerText}
                onChange={(e) => setSampleScannerText(e.target.value)}
                placeholder="Paste or type a sentence here to detect weak words (e.g. 'I think phones are very bad and create a lot of problems in schools')..."
                className="w-full h-24 p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-slate-900 placeholder:text-slate-400 resize-none"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                High-Frequency Informal Words to Replace:
              </span>
              <div className="space-y-2.5">
                {Object.entries(WEAK_WORDS_MAP).map(([weak, info]) => {
                  const appearsInSample = sampleScannerText.toLowerCase().includes(weak.toLowerCase());
                  return (
                    <div
                      key={weak}
                      className={`p-3 rounded-lg border transition-all ${
                        appearsInSample
                          ? 'bg-amber-50/80 border-amber-300 shadow-xs ring-1 ring-amber-300'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs line-through text-rose-600 font-semibold">
                          "{weak}"
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          Replace with:
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 mb-2">{info.explanation}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {info.alternatives.map((alt) => (
                          <button
                            key={alt}
                            type="button"
                            onClick={() => {
                              if (onInsertWord) onInsertWord(alt);
                              handleCopy(alt);
                            }}
                            className="px-2 py-0.5 text-xs font-medium bg-white border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 rounded-md text-slate-800 transition-colors cursor-pointer"
                          >
                            {alt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
