/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  Download,
  Printer,
  Edit3,
  Layers,
  BookOpen,
  AlertTriangle,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import { ReadAloudButton } from './ReadAloudButton';

interface TabGenerateProps {
  background: string;
  topic: string;
  stand: string;
  onJumpToTab: (tab: 'background' | 'topic' | 'stand') => void;
}

export const TabGenerate: React.FC<TabGenerateProps> = ({
  background,
  topic,
  stand,
  onJumpToTab,
}) => {
  const [viewMode, setViewMode] = useState<'annotated' | 'essay'>('annotated');
  const [isCopied, setIsCopied] = useState(false);
  const [customEdits, setCustomEdits] = useState<string | null>(null);
  const [isEditingPlain, setIsEditingPlain] = useState(false);

  // Helper to ensure each section ends with a period, question mark, or exclamation mark
  const ensurePunctuation = (text: string) => {
    let t = text.trim();
    if (!t) return '';
    if (!/[.!?]$/.test(t)) {
      t += '.';
    }
    return t;
  };

  // Assembled full introduction paragraph WITHOUT ANY TRANSITION PHRASES
  // Simply combines: Background + Topic + Stand
  const assembledParagraph = useMemo(() => {
    if (customEdits !== null) return customEdits;

    const parts: string[] = [];

    // 1. Background
    if (background.trim()) {
      parts.push(ensurePunctuation(background));
    }

    // 2. Topic
    if (topic.trim()) {
      parts.push(ensurePunctuation(topic));
    }

    // 3. Stand
    if (stand.trim()) {
      parts.push(ensurePunctuation(stand));
    }

    return parts.join(' ');
  }, [background, topic, stand, customEdits]);

  const wordCount = assembledParagraph.trim() ? assembledParagraph.trim().split(/\s+/).length : 0;
  const sentenceCount = (assembledParagraph.match(/[.!?]+(\s+|$)/g) || []).length;

  const handleCopy = (withLabels = false) => {
    let textToCopy = assembledParagraph;
    if (withLabels) {
      textToCopy = `=== MY ARGUMENTATIVE INTRODUCTION ===\n\n` +
        `[1. BACKGROUND - Overview]:\n${background.trim() || '(Not written yet)'}\n\n` +
        `[2. TOPIC - The Problem]:\n${topic.trim() || '(Not written yet)'}\n\n` +
        `[3. STAND - What I Think / Claim]:\n${stand.trim() || '(Not written yet)'}\n\n` +
        `=== FULL INTRODUCTION PARAGRAPH ===\n` +
        `${assembledParagraph}\n\n` +
        `Total: ${wordCount} words`;
    }

    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([assembledParagraph], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `My_Introduction_P6.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const isComplete = background.trim() && topic.trim() && stand.trim();

  return (
    <div className="space-y-6">
      {/* 1. Simple Kid-Friendly Header Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block">
              Step 4: The Final Step
            </span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Put Them Together
            </h2>
          </div>
        </div>

        {/* Meaning definition in kids words */}
        <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-100 text-xs text-blue-950 font-medium">
          Here is your full introduction paragraph! It joins your <strong>Background</strong>, your <strong>Topic</strong>, and your <strong>Stand</strong> together in one smooth paragraph.
        </div>

        {/* Check if anything is missing */}
        {!isComplete && (
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>You still need to write:</span>
            </div>
            <div className="flex items-center gap-3 font-bold">
              {!background.trim() && (
                <button
                  type="button"
                  onClick={() => onJumpToTab('background')}
                  className="underline hover:text-amber-950 cursor-pointer"
                >
                  Write Background
                </button>
              )}
              {!topic.trim() && (
                <button
                  type="button"
                  onClick={() => onJumpToTab('topic')}
                  className="underline hover:text-amber-950 cursor-pointer"
                >
                  Write Topic
                </button>
              )}
              {!stand.trim() && (
                <button
                  type="button"
                  onClick={() => onJumpToTab('stand')}
                  className="underline hover:text-amber-950 cursor-pointer"
                >
                  Write Stand
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 2. BIG AUDIO READ-OUT BAR (Very easy for kids to see!) */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-2xl shadow-md border-2 border-blue-300 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Volume2 className="w-6 h-6 fill-current text-slate-950" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
                Listen & Check
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Read Out My Introduction
              </h3>
              <p className="text-xs text-blue-100">
                Click the button to hear the computer read your words aloud!
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <ReadAloudButton
              text={assembledParagraph}
              label="🔊 Listen to My Draft Now"
              size="lg"
              fullWidth
            />
          </div>
        </div>
      </div>

      {/* 3. The Combined Paragraph Box */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* View Toggles */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              type="button"
              onClick={() => setViewMode('annotated')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'annotated'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Color Highlights</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('essay')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'essay'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Plain Paragraph</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {customEdits !== null && (
              <button
                type="button"
                onClick={() => setCustomEdits(null)}
                className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                title="Reset edits"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => handleCopy(false)}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-300"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied!' : 'Copy Paragraph'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleCopy(true)}
              className="px-3 py-1.5 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy with parts labeled"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy with Labels</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadTxt}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer border border-slate-200"
              title="Download text file"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer border border-slate-200"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Display Area */}
        {viewMode === 'annotated' ? (
          <div className="space-y-3">
            {/* Simple Color Legend */}
            <div className="flex items-center gap-4 text-xs text-slate-700 flex-wrap p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold">What the colors mean:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-emerald-100 border border-emerald-400"></span>
                <span>Green = 1. Background</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-sky-100 border border-sky-400"></span>
                <span>Blue = 2. Topic (The Problem)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-violet-100 border border-violet-400"></span>
                <span>Purple = 3. Stand (My Viewpoint)</span>
              </span>
            </div>

            {/* Combined Paragraph with simple highlights */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 leading-relaxed text-slate-900 text-base space-y-3 font-serif">
              <p>
                {background ? (
                  <span
                    onClick={() => onJumpToTab('background')}
                    className="bg-emerald-100/80 border-b-2 border-emerald-500 px-1 py-0.5 rounded-xs hover:bg-emerald-200 transition-colors cursor-pointer"
                    title="Click to edit Background"
                  >
                    {ensurePunctuation(background)}{' '}
                  </span>
                ) : (
                  <span
                    onClick={() => onJumpToTab('background')}
                    className="text-slate-400 italic underline cursor-pointer"
                  >
                    [Click to write 1. Background]{' '}
                  </span>
                )}

                {topic ? (
                  <span
                    onClick={() => onJumpToTab('topic')}
                    className="bg-sky-100/80 border-b-2 border-sky-500 px-1 py-0.5 rounded-xs hover:bg-sky-200 transition-colors cursor-pointer"
                    title="Click to edit Topic"
                  >
                    {ensurePunctuation(topic)}{' '}
                  </span>
                ) : (
                  <span
                    onClick={() => onJumpToTab('topic')}
                    className="text-slate-400 italic underline cursor-pointer"
                  >
                    [Click to write 2. Topic]{' '}
                  </span>
                )}

                {stand ? (
                  <span
                    onClick={() => onJumpToTab('stand')}
                    className="bg-violet-100/80 border-b-2 border-violet-500 px-1 py-0.5 rounded-xs hover:bg-violet-200 transition-colors cursor-pointer"
                    title="Click to edit Stand"
                  >
                    {ensurePunctuation(stand)}
                  </span>
                ) : (
                  <span
                    onClick={() => onJumpToTab('stand')}
                    className="text-slate-400 italic underline cursor-pointer"
                  >
                    [Click to write 3. Stand]
                  </span>
                )}
              </p>
            </div>
          </div>
        ) : (
          /* Plain Essay View */
          <div className="space-y-3">
            {isEditingPlain ? (
              <textarea
                value={assembledParagraph}
                onChange={(e) => setCustomEdits(e.target.value)}
                rows={6}
                placeholder="Write or polish your introduction paragraph here..."
                className="w-full p-6 bg-white rounded-xl border-2 border-blue-600 font-serif text-slate-900 text-lg leading-loose focus:outline-none"
              />
            ) : (
              <div className="p-8 bg-white rounded-xl border border-slate-300 shadow-inner font-serif text-slate-900 text-lg leading-loose indent-8 selection:bg-blue-100">
                {assembledParagraph || (
                  <span className="text-slate-400 italic">
                    Your complete introduction paragraph will appear here once you write your 3 parts.
                  </span>
                )}
              </div>
            )}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Ready for your essay!</span>
              <button
                type="button"
                onClick={() => setIsEditingPlain((prev) => !prev)}
                className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer"
              >
                {isEditingPlain ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingPlain ? 'Done Editing' : 'Edit Paragraph Directly'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Word Count */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900">{wordCount} words</span>
            <span>·</span>
            <span>{sentenceCount} sentences</span>
          </div>
          <span className="text-slate-500">
            Good length for Primary 6: 40 to 80 words
          </span>
        </div>
      </div>
    </div>
  );
};
