/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, BookMarked, HelpCircle, RotateCcw } from 'lucide-react';

interface HeaderProps {
  activeTab: 'qa' | 'background' | 'topic' | 'stand' | 'generate';
  onSelectTab: (tab: 'qa' | 'background' | 'topic' | 'stand' | 'generate') => void;
  onOpenThesaurus: () => void;
  onOpenGuide: () => void;
  onReset: () => void;
  completedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenThesaurus,
  onOpenGuide,
  onReset,
  completedCount,
}) => {
  return (
    <header className="flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-30">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('background');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors flex items-center gap-2"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-900 text-white shadow-xs">
            <BookMarked className="w-4 h-4 text-blue-200" />
          </span>
          <span>ArgumentCraft</span>
        </a>
      </div>

      {/* Zone 2: clean navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <button
          type="button"
          onClick={() => onSelectTab('qa')}
          className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            activeTab === 'qa' ? 'text-teal-700 font-bold' : 'hover:text-blue-700'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-teal-600" />
          <span>Fast Fashion Q&amp;A</span>
        </button>
        <button
          type="button"
          onClick={onOpenThesaurus}
          className="flex items-center gap-1.5 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>Word Finder</span>
        </button>
        <button
          type="button"
          onClick={onOpenGuide}
          className="flex items-center gap-1.5 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 text-slate-500" />
          <span>Writing Tips</span>
        </button>
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 hover:text-rose-600 text-slate-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          title="Start fresh"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Start Over</span>
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={onReset}
          className="md:hidden p-2 text-slate-500 hover:text-rose-600 rounded-lg border border-slate-200 transition-colors cursor-pointer"
          title="Start Over"
          aria-label="Start Over"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => onSelectTab('generate')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
            activeTab === 'generate'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'bg-blue-800 hover:bg-blue-900 text-white shadow-xs'
          }`}
        >
          <span>Put Together</span>
          <span className="text-[11px] font-mono px-1.5 py-0.2 rounded-sm bg-white/20 text-white">
            {completedCount}/3 Ready
          </span>
        </button>
      </div>
    </header>
  );
};
