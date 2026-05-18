'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const tracks = [
  {
    id: 1,
    title: 'THE LAZY SONG',
    artist: 'BRUNO MARS',
    src: '/audio/lazy-song.mp3'
  }
];

export function CinematicPlayer() {
  const { lang } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);

  // Formatting time
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
    
    // Toggle global CSS class for audio-reactive environment
    if (isPlaying) {
      document.documentElement.classList.add('audio-playing');
    } else {
      document.documentElement.classList.remove('audio-playing');
    }
  }, [currentTrack, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => {
          console.error("Playback failed", e);
          setIsPlaying(false);
        });
      }
    }
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = pos * audioRef.current.duration;
    }
  };

  const handleEnded = () => {
    handleNext();
  };

  const track = tracks[currentTrack];

  return (
    <div className="group relative flex h-full w-full items-center justify-between pl-3 pr-4 sm:pl-6 sm:pr-12 font-display md:pl-12 md:pr-[12vw]">
      {/* Background Ambience & Glitch */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_0%,rgba(229,9,20,0.05)_50%,transparent_100%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Left: Controls Array (Moved from right) */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-4">
        {/* Playback Controls */}
        <div className="flex items-center gap-1 border-r border-bone/20 pr-2 sm:gap-2 sm:pr-4">
          <button onClick={handlePrev} className="text-bone/50 transition-colors hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            onClick={togglePlay}
            className="relative grid h-10 w-10 place-items-center border border-blood/50 bg-ink text-blood transition-all hover:border-blood hover:bg-blood/10 hover:shadow-[0_0_15px_rgba(229,9,20,0.3)]"
          >
            {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 ml-1 fill-current" />}
            {/* Corner tactical accents */}
            <div className="absolute -left-1 -top-1 h-1.5 w-1.5 border-l border-t border-bone/50" />
            <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 border-b border-r border-bone/50" />
          </button>
          <button onClick={handleNext} className="text-bone/50 transition-colors hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        {/* Volume */}
        <div className="hidden items-center gap-2 sm:flex">
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            className="text-bone/50 transition-colors hover:text-white"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          {/* Minimal volume bar */}
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className={`h-3 w-1.5 transition-colors ${
                  !isMuted && i < (volume * 5) ? 'bg-blood/80 shadow-[0_0_5px_rgba(229,9,20,0.4)]' : 'bg-bone/10'
                }`}
                onClick={() => {
                  setIsMuted(false);
                  setVolume((i + 1) / 5);
                }}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center: Main Controls & Track Info */}
      <div className="flex w-full flex-col items-center justify-center px-2 sm:px-4 md:px-8 overflow-hidden">
        <div className="flex w-full items-end justify-between px-1">
          {/* Track Info */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3"
              >
                <div className={`h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full ${isPlaying ? 'bg-blood animate-pulse shadow-[0_0_8px_rgba(229,9,20,0.8)]' : 'bg-bone/30'}`} />
                <span className="text-xs xs:text-sm sm:text-2xl uppercase tracking-widest text-bone truncate max-w-[90px] xs:max-w-[140px] sm:max-w-none">{track.title}</span>
              </motion.div>
            </AnimatePresence>
            <span className="text-[8px] xs:text-[10px] uppercase tracking-[0.4em] text-bone/40 truncate max-w-[95px] xs:max-w-[145px] sm:max-w-none">{track.artist}</span>
          </div>

          {/* Equalizer Waveform (Visual only) */}
          <div className="hidden h-6 items-end gap-1 sm:flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-blood/80"
                animate={isPlaying ? {
                  height: ['20%', '80%', '40%', '100%', '30%']
                } : { height: '10%' }}
                transition={isPlaying ? {
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut'
                } : { duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar & Controls */}
        <div className="mt-3 flex w-full items-center gap-4">
          <span className="w-8 shrink-0 text-right font-mono text-[10px] text-bone/60">
            {formatTime(progress)}
          </span>
          
          <div 
            className="group/progress relative h-2 flex-grow cursor-pointer bg-bone/10"
            onClick={handleProgressClick}
          >
            <motion.div 
              className="absolute inset-y-0 left-0 bg-blood"
              style={{ width: `${(progress / (duration || 1)) * 100}%` }}
              layout
            >
              {/* Scanline glow head */}
              <div className="absolute right-0 top-0 h-full w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
            {/* Hover preview line */}
            <div className="absolute inset-0 bg-bone/20 opacity-0 transition-opacity group-hover/progress:opacity-100" />
          </div>

          <span className="w-8 shrink-0 font-mono text-[10px] text-bone/60">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Right: Tactical Labeling (Moved from left) */}
      <div className="hidden shrink-0 flex-col border-l border-bone/20 pl-4 uppercase xl:flex">
        <span className="text-[10px] tracking-[0.3em] text-blood">OST_CHANNEL</span>
        <span className="text-xs tracking-widest text-bone/50">SYSTEM_SOUNDTRACK</span>
      </div>
    </div>
  );
}
