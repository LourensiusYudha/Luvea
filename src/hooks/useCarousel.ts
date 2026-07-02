'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

const GAP = 16;

export function useCarousel(totalSlides: number, intervalMs: number = 4500) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, index: 1 });
  const indexRef = useRef(index);
  const dragOffsetRef = useRef(dragOffset);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    dragOffsetRef.current = dragOffset;
  }, [dragOffset]);

  const displayIndex =
    index === 0 ? totalSlides - 1 : index > totalSlides ? 0 : index - 1;

  const getCardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth : 0;
  }, []);

  const goTo = useCallback((realIdx: number) => {
    setEnableTransition(true);
    setDragOffset(0);
    setIndex(realIdx + 1);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (index === 0) {
      setEnableTransition(false);
      setIndex(totalSlides);
    } else if (index === totalSlides + 1) {
      setEnableTransition(false);
      setIndex(1);
    }
  }, [index, totalSlides]);

  useEffect(() => {
    if (!enableTransition) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [enableTransition]);

  useEffect(() => {
    const id = setInterval(() => {
      if (isPaused.current || isDragging.current) return;
      setEnableTransition(true);
      setDragOffset(0);
      setIndex((prev) => prev + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, totalSlides]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onStart = () => { isPaused.current = true; };
    const onEnd = () => { isPaused.current = false; };
    track.addEventListener('mouseenter', onStart);
    track.addEventListener('mouseleave', onEnd);
    return () => {
      track.removeEventListener('mouseenter', onStart);
      track.removeEventListener('mouseleave', onEnd);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function onDown(e: MouseEvent | TouchEvent) {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      isDragging.current = true;
      isPaused.current = true;
      dragStart.current = { x, index: indexRef.current };
      setEnableTransition(false);
      setDragOffset(0);
      if (!('touches' in e)) track!.style.cursor = 'grabbing';
    }

    function onUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      track!.style.cursor = '';

      const cw = getCardWidth() + GAP;
      if (cw === 0) {
        isPaused.current = false;
        return;
      }

      const threshold = cw * 0.2;
      const offset = dragOffsetRef.current;
      let newIndex = dragStart.current.index;

      if (offset < -threshold) newIndex = dragStart.current.index + 1;
      else if (offset > threshold) newIndex = dragStart.current.index - 1;

      setEnableTransition(true);
      setDragOffset(0);
      setIndex(newIndex);
      isPaused.current = false;
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if (!isDragging.current) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      setDragOffset(x - dragStart.current.x);
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
  }, [getCardWidth, totalSlides]);

  return {
    trackRef,
    index,
    displayIndex,
    goTo,
    enableTransition,
    dragOffset,
    handleTransitionEnd,
    gap: GAP,
  };
}
