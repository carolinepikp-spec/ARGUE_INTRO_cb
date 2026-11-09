/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, HelpCircle, Compass, Layers, Target, Sparkles } from 'lucide-react';
import { TAB_PEDAGOGY } from '../data/exemplarsData';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-blue-100 text-blue-900">
              <HelpCircle className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                How to Write Your Introduction (Primary 6)
              </h2>
              <p className="text-xs text-slate-500">
                The 3 simple steps: Background, Topic, and Stand
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

        {/* Content in simple kids words */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* The 3 Steps Overview */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              The 3 Simple Building Blocks:
            </h3>

            <div className="space-y-2">
              <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs flex items-center justify-between">
                <span className="font-bold text-emerald-950 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-700" />
                  <span>1. Background: Tell readers what is happening in the world</span>
                </span>
                <span className="text-[11px] font-medium text-emerald-800">Step 1</span>
              </div>
              <div className="p-2.5 bg-sky-50 rounded-lg border border-sky-200 text-xs flex items-center justify-between">
                <span className="font-bold text-sky-950 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-700" />
                  <span>2. Topic: Explain what is wrong and why it is a big problem</span>
                </span>
                <span className="text-[11px] font-medium text-sky-800">Step 2</span>
              </div>
              <div className="p-2.5 bg-violet-50 rounded-lg border border-violet-200 text-xs flex items-center justify-between">
                <span className="font-bold text-violet-950 flex items-center gap-2">
                  <Target className="w-4 h-4 text-violet-700" />
                  <span>3. Stand: State your clear viewpoint and give your main reasons</span>
                </span>
                <span className="text-[11px] font-medium text-violet-800">Step 3</span>
              </div>
            </div>
          </div>

          {/* Cards for each tab */}
          <div className="space-y-3.5">
            {/* Background */}
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
                <Compass className="w-4 h-4" />
                <span>1. Background — "{TAB_PEDAGOGY.background.shortDefinition}"</span>
              </div>
              <p className="text-xs text-slate-700">Give readers an overview using:</p>
              <ul className="text-xs text-slate-700 list-disc list-inside space-y-1 pl-1">
                {TAB_PEDAGOGY.background.slidePointers.map((p, i) => (
                  <li key={i}><strong className="text-slate-900">{p}</strong></li>
                ))}
              </ul>
            </div>

            {/* Topic */}
            <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/30 space-y-2">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-xs">
                <Layers className="w-4 h-4" />
                <span>2. Topic — "{TAB_PEDAGOGY.topic.shortDefinition}"</span>
              </div>
              <ul className="text-xs text-slate-700 list-disc list-inside space-y-1 pl-1">
                {TAB_PEDAGOGY.topic.slidePointers.map((p, i) => (
                  <li key={i}><strong className="text-slate-900">{p}</strong></li>
                ))}
              </ul>
            </div>

            {/* Stand */}
            <div className="p-4 rounded-xl border border-violet-200 bg-violet-50/30 space-y-2">
              <div className="flex items-center gap-2 text-violet-900 font-bold text-xs">
                <Target className="w-4 h-4" />
                <span>3. Stand — "{TAB_PEDAGOGY.stand.shortDefinition}"</span>
              </div>
              <div className="p-2.5 bg-violet-100/70 rounded-lg text-xs text-violet-950 font-medium">
                {TAB_PEDAGOGY.stand.claimDefinition}
              </div>
              <p className="text-xs text-slate-700 font-bold pt-1">Your Slide Starters:</p>
              <div className="grid grid-cols-1 gap-1 text-xs text-slate-800">
                {TAB_PEDAGOGY.stand.slidePointers.map((p, i) => (
                  <div key={i} className="p-1.5 bg-white rounded-md border border-violet-200">
                    <code>{p}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            I'm Ready to Write!
          </button>
        </div>
      </div>
    </div>
  );
};
