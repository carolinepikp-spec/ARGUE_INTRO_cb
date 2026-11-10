/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Sparkles, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { TAB_PEDAGOGY } from '../data/exemplarsData';
import { ReadAloudButton } from './ReadAloudButton';
import { LanguageTechniquesHelper } from './LanguageTechniquesHelper';

interface TabStandProps {
  value: string;
  onChange: (val: string) => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenThesaurus: (initialWord?: string) => void;
}

export const TabStand: React.FC<TabStandProps> = ({
  value,
  onChange,
  onPrev,
  onNext,
  onOpenThesaurus,
}) => {
  const [showTechniques, setShowTechniques] = useState(false);
  const pedagogy = TAB_PEDAGOGY.stand;
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
  const charCount = value.length;

  const handleApplyStem = (stemText: string) => {
    if (!value.trim()) {
      onChange(stemText);
    } else {
      onChange(`${value.trim()} ${stemText}`);
    }
  };

  return (
    <div className="space-y-5">
      {/* 1. Header Card with Slide Pointers & Definitions */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-800 flex items-center justify-center shrink-0 border border-violet-100">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-violet-800 uppercase tracking-wider">
                  3rd Tab
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500">Your Viewpoint & Claim</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {pedagogy.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ReadAloudButton text={value} label="Listen to Stand" />
            <button
              type="button"
              onClick={() => setShowTechniques(!showTechniques)}
              className="px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{showTechniques ? 'Hide Techniques' : 'Styles (RQ, Emotive, Auth)'}</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenThesaurus('fashion')}
              className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Find Synonyms</span>
            </button>
          </div>
        </div>

        {/* Meaning definition */}
        <div className="p-3 bg-violet-50/70 rounded-lg border border-violet-100">
          <span className="text-xs font-semibold text-violet-900 block mb-0.5">
            Meaning:
          </span>
          <p className="text-sm font-medium text-violet-950">
            {pedagogy.shortDefinition}
          </p>
        </div>

        {/* Language Techniques Drawer if toggled */}
        {showTechniques && (
          <LanguageTechniquesHelper
            onInsertText={(text) => handleApplyStem(text)}
            activeTabName="Stand"
          />
        )}

        {/* Slide Definition & Clarification Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-blue-950">
            <span className="font-bold block mb-1">Claim:</span>
            <p className="italic">
              The position taken by the writer; what the writer is trying to prove or argue.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-purple-50/80 border border-purple-200 text-purple-950 flex flex-col justify-center">
            <span className="font-bold text-purple-900 block mb-0.5">Key Principle:</span>
            <p>The claim makes a logical argument.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 flex flex-col justify-center">
            <span className="font-bold text-slate-700 block mb-0.5">Core Question:</span>
            <p className="font-semibold text-slate-900">What do I think?</p>
          </div>
        </div>
      </div>

      {/* 2. Writing Canvas */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div>
          <label htmlFor="stand-input" className="text-sm font-bold text-slate-900 block">
            Write Your Stand (Your Claim & Position)
          </label>
          <p className="text-xs text-slate-500">
            State your viewpoint clearly and give the main reason for your claim.
          </p>
        </div>

        <div className="space-y-2">
          <textarea
            id="stand-input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={5}
            placeholder="Write 1–2 sentences here stating your viewpoint (claim) and your main reasons..."
            className="w-full p-4 text-sm text-slate-900 bg-slate-50/40 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:bg-white placeholder:text-slate-400 transition-all leading-relaxed"
          />

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-3">
              <span className="font-mono font-medium text-slate-700">{wordCount} words</span>
              <span>·</span>
              <span className="font-mono">{charCount} characters</span>
            </div>
            {value.trim() && (
              <ReadAloudButton text={value} label="Listen" size="sm" />
            )}
          </div>
        </div>

        {/* 3. Slide Sentence Starters */}
        <div className="pt-2">
          <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Slide Sentence Starters (Click to insert):</span>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pedagogy.stems.map((stem) => (
              <button
                key={stem.id}
                type="button"
                onClick={() => handleApplyStem(stem.text)}
                className="p-2.5 text-left bg-slate-50 hover:bg-violet-50/70 border border-slate-200 hover:border-violet-300 rounded-lg text-xs text-slate-800 transition-colors group cursor-pointer"
              >
                <div className="font-semibold text-violet-900 text-[11px] mb-0.5 group-hover:text-violet-950">
                  {stem.label}
                </div>
                <p className="text-slate-600 line-clamp-2 text-[11px]">
                  "{stem.text}"
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Topic</span>
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Generate: Put Them Together</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
