/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, Check, BookOpen } from 'lucide-react';
import { SAMPLE_EXEMPLARS } from '../data/exemplarsData';
import { ExemplarPrompt } from '../types';
import { ReadAloudButton } from './ReadAloudButton';

interface ExemplarsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadExemplar: (exemplar: ExemplarPrompt) => void;
}

export const ExemplarsModal: React.FC<ExemplarsModalProps> = ({
  isOpen,
  onClose,
  onLoadExemplar,
}) => {
  const [selectedId, setSelectedId] = useState<string>(SAMPLE_EXEMPLARS[0].id);

  if (!isOpen) return null;

  const currentExemplar = SAMPLE_EXEMPLARS.find((e) => e.id === selectedId) || SAMPLE_EXEMPLARS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">Sample Introductions (Primary 6)</h2>
              <p className="text-xs text-slate-500">
                See how other students write their Background, Topic, and Stand
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prompt Selector Pills */}
        <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-2 overflow-x-auto bg-white">
          {SAMPLE_EXEMPLARS.map((ex) => (
            <button
              key={ex.id}
              type="button"
              onClick={() => setSelectedId(ex.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedId === ex.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Prompt Question */}
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
              Essay Prompt / Central Question:
            </span>
            <p className="text-sm font-semibold text-slate-900">
              "{currentExemplar.promptQuestion}"
            </p>
          </div>

          {/* Full Paragraph Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                <span>Full Assembled Introduction Paragraph:</span>
              </span>
              <ReadAloudButton text={currentExemplar.fullParagraph} label="Listen to Model" size="sm" />
            </div>
            <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-200 font-serif text-slate-900 leading-relaxed text-sm">
              "{currentExemplar.fullParagraph}"
            </div>
          </div>

          {/* Structural Breakdown */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
              Architectural Breakdown:
            </span>

            {/* 1. Background */}
            <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900">
                  1. Background (Overview of Topic)
                </span>
                <span className="text-[10px] text-emerald-700 font-mono">Panoramic</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed">
                "{currentExemplar.background}"
              </p>
              <p className="text-[11px] text-emerald-800 pt-1 italic">
                Why this works: {currentExemplar.analysis.backgroundWhy}
              </p>
            </div>

            {/* 2. Topic */}
            <div className="p-3.5 rounded-lg bg-sky-50/50 border border-sky-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900">
                  2. Topic (Problem & Controversy)
                </span>
                <span className="text-[10px] text-sky-700 font-mono">Friction</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed">
                "{currentExemplar.topic}"
              </p>
              <p className="text-[11px] text-sky-800 pt-1 italic">
                Why this works: {currentExemplar.analysis.topicWhy}
              </p>
            </div>

            {/* 3. Stand */}
            <div className="p-3.5 rounded-lg bg-violet-50/50 border border-violet-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-violet-900">
                  3. Stand (Claim & Thesis Roadmap)
                </span>
                <span className="text-[10px] text-violet-700 font-mono">Compass</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed">
                "{currentExemplar.stand}"
              </p>
              <p className="text-[11px] text-violet-800 pt-1 italic">
                Why this works: {currentExemplar.analysis.standWhy}
              </p>
            </div>
          </div>
        </div>

        {/* Footer with Load Action */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Category: <strong className="text-slate-700">{currentExemplar.topicCategory}</strong>
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onLoadExemplar(currentExemplar);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Use This Example</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
