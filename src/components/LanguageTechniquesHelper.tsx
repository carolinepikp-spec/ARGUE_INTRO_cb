/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, HelpCircle, Heart, ShieldCheck, Plus, Check } from 'lucide-react';
import { LANGUAGE_TECHNIQUES } from '../data/exemplarsData';

interface LanguageTechniquesHelperProps {
  onInsertText: (text: string) => void;
  activeTabName?: string;
}

export const LanguageTechniquesHelper: React.FC<LanguageTechniquesHelperProps> = ({
  onInsertText,
  activeTabName,
}) => {
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<'rq' | 'emotive' | 'authoritative'>('rq');
  const [insertedText, setInsertedText] = useState<string | null>(null);

  const currentTechnique = LANGUAGE_TECHNIQUES.find((t) => t.id === selectedTechniqueId) || LANGUAGE_TECHNIQUES[0];

  const handleInsert = (text: string) => {
    onInsertText(text);
    setInsertedText(text);
    setTimeout(() => setInsertedText(null), 1800);
  };

  return (
    <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-200 text-amber-900">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
              Primary 6 Language Styles & Techniques
            </h3>
            <p className="text-[11px] text-amber-800">
              Boost your introduction with Rhetorical Questions, Emotive words, or Authoritative tone
            </p>
          </div>
        </div>

        {activeTabName && (
          <span className="text-[10px] font-semibold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md">
            Click to add into {activeTabName}
          </span>
        )}
      </div>

      {/* Technique Switcher Buttons */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-amber-100/60 rounded-lg">
        <button
          type="button"
          onClick={() => setSelectedTechniqueId('rq')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            selectedTechniqueId === 'rq'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-amber-800 hover:text-amber-950'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          <span>1. RQ (Question)</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedTechniqueId('emotive')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            selectedTechniqueId === 'emotive'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-amber-800 hover:text-amber-950'
          }`}
        >
          <Heart className="w-3.5 h-3.5 text-rose-600" />
          <span>2. Emotive</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedTechniqueId('authoritative')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            selectedTechniqueId === 'authoritative'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-amber-800 hover:text-amber-950'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>3. Authoritative</span>
        </button>
      </div>

      {/* Description of Selected Technique */}
      <div className="p-3 bg-white/90 rounded-lg border border-amber-200/80 text-xs text-slate-800 space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">
            {currentTechnique.name}
          </span>
          <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-sm">
            {currentTechnique.tag}
          </span>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          {currentTechnique.simpleMeaning}
        </p>
      </div>

      {/* Simple P6 Examples (Click to Insert) */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold text-amber-900 block">
          Simple Examples for Fast Fashion & School Topics (Click to add):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {currentTechnique.p6Examples.map((ex, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleInsert(ex.text)}
              className="p-2.5 text-left bg-white hover:bg-amber-100/70 border border-amber-200/80 hover:border-amber-400 rounded-lg transition-all text-xs group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-[11px] text-slate-800 block mb-1 group-hover:text-amber-950">
                  {ex.label}
                </span>
                <p className="text-[11px] text-slate-600 italic leading-snug">
                  "{ex.text}"
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between text-[10px] text-amber-800 font-medium">
                <span>{insertedText === ex.text ? 'Added to text!' : 'Click to insert'}</span>
                {insertedText === ex.text ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : (
                  <Plus className="w-3 h-3 text-amber-700" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
