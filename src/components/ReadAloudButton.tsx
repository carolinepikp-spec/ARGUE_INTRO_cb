/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, Pause, Play, Square, VolumeX } from 'lucide-react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface ReadAloudButtonProps {
  text: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const ReadAloudButton: React.FC<ReadAloudButtonProps> = ({
  text,
  label = 'Read Aloud',
  className = '',
  size = 'sm',
  fullWidth = false,
}) => {
  const [showEmptyHint, setShowEmptyHint] = React.useState(false);
  const { speak, pause, resume, stop, isPlaying, isPaused, supported } = useSpeechSynthesis();

  if (!supported) return null;

  const handleToggle = () => {
    if (!text.trim()) {
      setShowEmptyHint(true);
      setTimeout(() => setShowEmptyHint(false), 2200);
      return;
    }

    if (isPlaying) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else {
      speak(text);
    }
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    stop();
  };

  const isEmpty = !text.trim();

  // Size styling classes
  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3.5 py-2 text-sm',
    lg: 'px-5 py-3 text-base font-bold shadow-md',
  }[size];

  return (
    <div className={`inline-flex items-center gap-1.5 ${fullWidth ? 'w-full' : ''} ${className}`}>
      <button
        type="button"
        onClick={handleToggle}
        title={isEmpty ? 'Add text to listen' : isPlaying ? (isPaused ? 'Resume reading' : 'Pause reading') : 'Listen to text read aloud'}
        className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all cursor-pointer ${
          fullWidth ? 'w-full' : ''
        } ${sizeClasses} ${
          isPlaying
            ? isPaused
              ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md ring-2 ring-emerald-300'
            : isEmpty
            ? 'bg-slate-200 text-slate-500 border border-slate-300 hover:bg-slate-300'
            : size === 'lg'
            ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-md hover:scale-[1.01]'
            : 'bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200'
        }`}
      >
        {isPlaying ? (
          isPaused ? (
            <>
              <Play className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
              <span>Resume Reading</span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-4 bg-white animate-pulse rounded-full"></span>
                <span className="w-1.5 h-6 bg-white animate-pulse rounded-full delay-75"></span>
                <span className="w-1.5 h-3 bg-white animate-pulse rounded-full delay-150"></span>
              </span>
              <span>Pause Reading</span>
            </>
          )
        ) : (
          <>
            <Volume2 className={size === 'lg' ? 'w-5 h-5 text-amber-300' : 'w-4 h-4 text-blue-600'} />
            <span>{showEmptyHint ? 'Write some text first!' : label}</span>
          </>
        )}
      </button>

      {isPlaying && (
        <button
          type="button"
          onClick={handleStop}
          className={`rounded-xl text-rose-700 bg-rose-100 hover:bg-rose-200 border border-rose-300 transition-colors flex items-center justify-center cursor-pointer ${
            size === 'lg' ? 'p-3' : 'p-2'
          }`}
          title="Stop reading completely"
        >
          <Square className="w-4 h-4 fill-current" />
        </button>
      )}
    </div>
  );
};
