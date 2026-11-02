'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // 是否已发生过首次用户交互（页面加载时静默，首次交互后自动开始播放）
  const startedRef = useRef(false);
  // 用户是否主动暂停过（尊重用户意愿，之后不再自动恢复）
  const userPausedRef = useRef(false);

  useEffect(() => {
    // 创建音频元素
    const audio = new Audio('/audio/bgm.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // 首次用户交互（点击 / 按键 / 触摸）后自动开始播放 BGM，
    // 规避浏览器自动播放限制，同时避免页面加载即出声的打扰。
    const handleFirstInteraction = () => {
      if (startedRef.current || userPausedRef.current || !audioRef.current) return;
      startedRef.current = true;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        console.log('BGM 自动播放被拦截，等待用户手动触发');
      });
    };

    window.addEventListener('pointerdown', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        userPausedRef.current = true;
      } else {
        userPausedRef.current = false;
        audioRef.current.play().catch((error) => {
          console.log('音频播放失败:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="p5r-bgm"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="p5r-bgm__panel"
          >
            <span className="p5r-bgm__label">VOLUME</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(event) => setVolume(parseFloat(event.target.value))}
              aria-label="背景音乐音量"
              className="p5r-bgm__range"
            />
            <span className="p5r-bgm__value">{Math.round(volume * 100)}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={togglePlay}
        className="p5r-bgm__btn"
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '暂停背景音乐' : '播放背景音乐'}
      >
        <span>{isPlaying ? '❚❚' : '▶'}</span>
        <span>BGM</span>
      </button>
    </div>
  );
}
