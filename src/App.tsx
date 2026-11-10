/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  Compass,
  Layers,
  Target,
  Sparkles,
  BookOpen,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

import { Header } from './components/Header';
import { TabFastFashionQA } from './components/TabFastFashionQA';
import { TabBackground } from './components/TabBackground';
import { TabTopic } from './components/TabTopic';
import { TabStand } from './components/TabStand';
import { TabGenerate } from './components/TabGenerate';
import { ThesaurusDrawer } from './components/ThesaurusDrawer';
import { GuideModal } from './components/GuideModal';

const STORAGE_KEY = 'argumentcraft_student_draft_v2';

export default function App() {
  const [activeTab, setActiveTab] = useState<'qa' | 'background' | 'topic' | 'stand' | 'generate'>('background');

  // Core Student Essay Draft State (always starts blank for students' own work)
  const [background, setBackground] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [stand, setStand] = useState<string>('');

  // Modals & Panels
  const [isThesaurusOpen, setIsThesaurusOpen] = useState(false);
  const [thesaurusQuery, setThesaurusQuery] = useState('');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load only the student's own saved work from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.background === 'string') setBackground(parsed.background);
        if (typeof parsed.topic === 'string') setTopic(parsed.topic);
        if (typeof parsed.stand === 'string') setStand(parsed.stand);
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save student draft to local storage on change
  useEffect(() => {
    try {
      const payload = {
        background,
        topic,
        stand,
        updatedAt: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage errors
    }
  }, [background, topic, stand]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleOpenThesaurus = (initialWord?: string) => {
    if (initialWord) setThesaurusQuery(initialWord);
    setIsThesaurusOpen(true);
  };

  const handleInsertThesaurusWord = (word: string) => {
    if (activeTab === 'background') {
      setBackground((prev) => (prev ? `${prev} ${word}` : word));
      showToast(`Added "${word}" to Background`);
    } else if (activeTab === 'topic') {
      setTopic((prev) => (prev ? `${prev} ${word}` : word));
      showToast(`Added "${word}" to Topic`);
    } else if (activeTab === 'stand') {
      setStand((prev) => (prev ? `${prev} ${word}` : word));
      showToast(`Added "${word}" to Stand`);
    } else {
      showToast(`Copied "${word}"!`);
    }
  };

  const handleConfirmReset = () => {
    setBackground('');
    setTopic('');
    setStand('');
    setActiveTab('background');
    setIsResetConfirmOpen(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    showToast('Draft cleared! Ready for your own sentences.');
  };

  const completedCount = [
    background.trim().length > 10,
    topic.trim().length > 10,
    stand.trim().length > 10,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* 1. Top Bar */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenThesaurus={() => handleOpenThesaurus()}
        onOpenGuide={() => setIsGuideOpen(true)}
        onReset={() => setIsResetConfirmOpen(true)}
        completedCount={completedCount}
      />

      {/* 2. Main Content Canvas */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 space-y-5">
        {/* Main Topic Banner: "Is It Time to Put an End to Fast Fashion?" */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-5 rounded-2xl shadow-sm border border-emerald-700/40 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block">
                Primary 6 Argumentative Essay
              </span>
              <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Topic: Is It Time to Put an End to Fast Fashion?
              </h1>
              <p className="text-xs text-emerald-100/90 pt-0.5">
                Write your own introduction step-by-step: <strong>1. Background</strong> (Overview) → <strong>2. Topic</strong> (Problem) → <strong>3. Stand</strong> (Your Claim)
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveTab('qa')}
                className="px-3.5 py-1.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer border border-teal-400/40"
              >
                <HelpCircle className="w-3.5 h-3.5 text-teal-100" />
                <span>Fast Fashion Q&amp;A</span>
              </button>
              <button
                type="button"
                onClick={() => setIsGuideOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Writing Tips</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. The 5 Interactive Workflow Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-200/60 p-1.5 rounded-xl border border-slate-300">
          {/* Tab 0: Fast Fashion Q&A */}
          <button
            type="button"
            onClick={() => setActiveTab('qa')}
            className={`p-3 rounded-lg text-left transition-all duration-150 flex flex-col gap-1 cursor-pointer col-span-2 sm:col-span-1 ${
              activeTab === 'qa'
                ? 'bg-teal-700 text-white shadow-sm ring-1 ring-teal-700'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60 bg-teal-50/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                activeTab === 'qa' ? 'text-teal-100' : 'text-teal-800'
              }`}>
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Topic Facts</span>
              </span>
              <span className={`text-[9px] font-bold px-1 rounded-sm ${
                activeTab === 'qa' ? 'bg-white/20 text-white' : 'bg-teal-200/70 text-teal-900'
              }`}>
                Q&amp;A
              </span>
            </div>
            <span className={`text-xs font-medium truncate ${
              activeTab === 'qa' ? 'text-white' : 'text-slate-700'
            }`}>
              Pick a Question
            </span>
          </button>

          {/* Tab 1: Background */}
          <button
            type="button"
            onClick={() => setActiveTab('background')}
            className={`p-3 rounded-lg text-left transition-all duration-150 flex flex-col gap-1 cursor-pointer ${
              activeTab === 'background'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                <span>1. Background</span>
              </span>
              {background.trim().length > 10 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              )}
            </div>
            <span className="text-xs font-medium truncate">
              Overview of Topic
            </span>
          </button>

          {/* Tab 2: Topic */}
          <button
            type="button"
            onClick={() => setActiveTab('topic')}
            className={`p-3 rounded-lg text-left transition-all duration-150 flex flex-col gap-1 cursor-pointer ${
              activeTab === 'topic'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                <span>2. Topic</span>
              </span>
              {topic.trim().length > 10 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              )}
            </div>
            <span className="text-xs font-medium truncate">
              Problem &amp; Debate
            </span>
          </button>

          {/* Tab 3: Stand */}
          <button
            type="button"
            onClick={() => setActiveTab('stand')}
            className={`p-3 rounded-lg text-left transition-all duration-150 flex flex-col gap-1 cursor-pointer ${
              activeTab === 'stand'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-violet-700 flex items-center gap-1">
                <Target className="w-3.5 h-3.5" />
                <span>3. Stand</span>
              </span>
              {stand.trim().length > 10 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
              )}
            </div>
            <span className="text-xs font-medium truncate">
              Viewpoint &amp; Claim
            </span>
          </button>

          {/* Tab 4: Generate */}
          <button
            type="button"
            onClick={() => setActiveTab('generate')}
            className={`p-3 rounded-lg text-left transition-all duration-150 flex flex-col gap-1 cursor-pointer ${
              activeTab === 'generate'
                ? 'bg-blue-900 text-white shadow-sm ring-1 ring-blue-900'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                activeTab === 'generate' ? 'text-blue-200' : 'text-blue-900'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate</span>
              </span>
              <span className={`text-[10px] font-mono px-1 rounded-sm ${
                activeTab === 'generate' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {completedCount}/3
              </span>
            </div>
            <span className={`text-xs font-medium truncate ${
              activeTab === 'generate' ? 'text-white' : 'text-slate-700'
            }`}>
              Put Together
            </span>
          </button>
        </div>

        {/* 4. Tab Panels */}
        {activeTab === 'qa' && (
          <TabFastFashionQA
            onGoToBackground={() => setActiveTab('background')}
          />
        )}

        {activeTab === 'background' && (
          <TabBackground
            value={background}
            onChange={setBackground}
            onNext={() => setActiveTab('topic')}
            onOpenThesaurus={handleOpenThesaurus}
          />
        )}

        {activeTab === 'topic' && (
          <TabTopic
            value={topic}
            onChange={setTopic}
            onPrev={() => setActiveTab('background')}
            onNext={() => setActiveTab('stand')}
            onOpenThesaurus={handleOpenThesaurus}
          />
        )}

        {activeTab === 'stand' && (
          <TabStand
            value={stand}
            onChange={setStand}
            onPrev={() => setActiveTab('topic')}
            onNext={() => setActiveTab('generate')}
            onOpenThesaurus={handleOpenThesaurus}
          />
        )}

        {activeTab === 'generate' && (
          <TabGenerate
            background={background}
            topic={topic}
            stand={stand}
            onJumpToTab={(tab) => setActiveTab(tab)}
          />
        )}
      </main>

      {/* 5. Persistent Floating Thesaurus Pill for Fast Access */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => handleOpenThesaurus()}
          className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold transition-all hover:scale-105 cursor-pointer border border-blue-700/60"
        >
          <BookOpen className="w-4 h-4 text-blue-200" />
          <span>Word Finder</span>
        </button>
      </div>

      {/* 6. Thesaurus Drawer */}
      <ThesaurusDrawer
        isOpen={isThesaurusOpen}
        onClose={() => setIsThesaurusOpen(false)}
        onInsertWord={handleInsertThesaurusWord}
        initialQuery={thesaurusQuery}
        activeTargetName={
          activeTab === 'background'
            ? 'Background'
            : activeTab === 'topic'
            ? 'Topic'
            : activeTab === 'stand'
            ? 'Stand'
            : undefined
        }
      />

      {/* 7. Guide Modal */}
      <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />

      {/* 8. Clear Draft Confirmation Modal (avoids window.confirm in iframe) */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Start Over?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              This will clear your Background, Topic, and Stand sentences so you can start writing a brand new draft.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                Keep My Work
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg cursor-pointer"
              >
                Clear Everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-xl flex items-center gap-2 border border-slate-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
