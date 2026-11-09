/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  FAST_FASHION_PRESET_QUESTIONS,
  FastFashionQA,
} from '../data/fastFashionKnowledge';
import { ReadAloudButton } from './ReadAloudButton';

interface TabFastFashionQAProps {
  onGoToBackground: () => void;
}

export const TabFastFashionQA: React.FC<TabFastFashionQAProps> = ({
  onGoToBackground,
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<FastFashionQA>(
    FAST_FASHION_PRESET_QUESTIONS[0]
  );
  const [justUpdated, setJustUpdated] = useState(false);
  const answerCardRef = useRef<HTMLDivElement>(null);

  const handleSelectPreset = (preset: FastFashionQA) => {
    setSelectedQuestion(preset);
    setJustUpdated(true);
    setTimeout(() => setJustUpdated(false), 1200);
    answerCardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <HelpCircle className="w-5 h-5 text-teal-100" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">
              Fast Fashion Q&amp;A
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Learn About Fast Fashion
            </h2>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Pick a question below to learn simple facts about fast fashion and why it is harmful before you write your essay!
        </p>
      </div>

      {/* 2. Pick a Question Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
          Pick a question to learn about:
        </span>
        <div className="flex flex-wrap gap-2">
          {FAST_FASHION_PRESET_QUESTIONS.map((item) => {
            const isSelected = selectedQuestion.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPreset(item)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-xs ring-2 ring-teal-500/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {item.question}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. The Answer Display Card */}
      <div
        ref={answerCardRef}
        className={`bg-white rounded-xl border p-6 shadow-xs space-y-5 transition-all duration-300 ${
          justUpdated
            ? 'border-teal-500 ring-2 ring-teal-500/30'
            : 'border-slate-200'
        }`}
      >
        <div className="flex items-start justify-between flex-wrap gap-3 pb-3 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                Question:
              </span>
              {justUpdated && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Updated</span>
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              "{selectedQuestion.question}"
            </h3>
          </div>

          <ReadAloudButton
            key={selectedQuestion.id}
            text={selectedQuestion.simpleAnswer}
            label="Listen to Answer"
            size="sm"
          />
        </div>

        {/* Kid-friendly answer */}
        <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200 space-y-1">
          <span className="text-xs font-bold text-teal-900 block">
            Simple Answer (Primary 6):
          </span>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            {selectedQuestion.simpleAnswer}
          </p>
        </div>

        {/* Navigation to Background */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-xs text-slate-500">
            Learned enough? Ready to write your introduction!
          </span>
          <button
            type="button"
            onClick={onGoToBackground}
            className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Start Writing Step 1: Background</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
