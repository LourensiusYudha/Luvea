'use client';

import { useRef, useEffect, useState } from 'react';

export function useCarousel(totalSlides: number, intervalMs: number = 3000) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const isPaused = useRef(false);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);
  const drag = useRef({ active: false, startX: 0, startIdx: 0 });

  const gap = 16;

  function getCardWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth : 0;
  }

  function goTo(idx: number) {
    const clamped = Math.max(0, Math.min(idx, totalSlides - 1));
    setCurrentIndex(clamped);
  }

  // auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      if (isPaused.current) return;
      setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [totalSlides, intervalMs]);

  // pause on hover / touch
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onStart = () => { isPaused.current = true; };
    const onEnd = () => { isPaused.current = false; };
    track.addEventListener('mouseenter', onStart);
    track.addEventListener('mouseleave', onEnd);
    track.addEventListener('touchstart', onStart, { passive: true });
    track.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      track.removeEventListener('mouseenter', onStart);
      track.removeEventListener('mouseleave', onEnd);
      track.removeEventListener('touchstart', onStart);
      track.removeEventListener('touchend', onEnd);
    };
  }, []);

  // drag/swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const el = track;

    function onDown(e: MouseEvent | TouchEvent) {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      drag.current = { active: true, startX: x, startIdx: currentIndexRef.current };
      isPaused.current = true;
      if ('touches' in e) return;
      el.style.cursor = 'grabbing';
    }

    function onUp() {
      if (!drag.current.active) return;
      drag.current.active = false;
      el.style.cursor = '';
      isPaused.current = false;
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if (!drag.current.active) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const dx = drag.current.startX - x;
      const cw = getCardWidth() + gap;
      if (cw === 0) return;
      const delta = Math.round(dx / cw);
      if (delta !== 0) {
        const newIdx = Math.max(0, Math.min(drag.current.startIdx + delta, totalSlides - 1));
        setCurrentIndex(newIdx);
        drag.current.startIdx = newIdx;
        drag.current.startX = x;
      }
    }

    track.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    track.addEventListener('mousemove', onMove);
    track.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchend', onUp, { passive: true });
    track.addEventListener('touchmove', onMove, { passive: true });
    return () => {
      track.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      track.removeEventListener('mousemove', onMove);
      track.removeEventListener('touchstart', onDown);
      window.removeEventListener('touchend', onUp);
      track.removeEventListener('touchmove', onMove);
    };
  }, [totalSlides]);

  return { trackRef, currentIndex, goTo };
}
