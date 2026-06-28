'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { names, cities, products } from '@/data/socialProof';

interface PopupData {
  name: string;
  city: string;
  product: string;
}

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function useSocialProof() {
  const [data, setData] = useState<PopupData | null>(null);
  const [visible, setVisible] = useState(false);
  const dismissedRef = useRef(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const showTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const scheduleShowRef = useRef<((delay: number) => void) | undefined>(undefined);

  const scheduleShow = useCallback((delay: number) => {
    if (dismissedRef.current) return;
    showTimerRef.current = setTimeout(() => {
      if (dismissedRef.current) return;
      setData({
        name: rand(names),
        city: rand(cities),
        product: rand(products),
      });
      setVisible(true);
      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
        scheduleShowRef.current?.(8000 + Math.random() * 7000);
      }, 5000);
    }, delay);
  }, []);

  useEffect(() => {
    scheduleShowRef.current = scheduleShow;
  }, [scheduleShow]);

  const dismiss = useCallback(() => {
    dismissedRef.current = true;
    clearTimeout(hideTimerRef.current);
    clearTimeout(showTimerRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    scheduleShow(6000);
    return () => {
      clearTimeout(showTimerRef.current);
      clearTimeout(hideTimerRef.current);
    };
  }, [scheduleShow]);

  return { data, visible, dismiss };
}
