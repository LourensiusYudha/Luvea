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

  const show = useCallback(() => {
    if (dismissedRef.current) return;
    setData({
      name: rand(names),
      city: rand(cities),
      product: rand(products),
    });
    setVisible(true);

    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      schedule();
    }, 5000);
  }, []);

  const schedule = useCallback(() => {
    if (dismissedRef.current) return;
    const delay = 8000 + Math.random() * 7000;
    showTimerRef.current = setTimeout(show, delay);
  }, [show]);

  const dismiss = useCallback(() => {
    dismissedRef.current = true;
    clearTimeout(hideTimerRef.current);
    clearTimeout(showTimerRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    showTimerRef.current = setTimeout(show, 6000);
    return () => {
      clearTimeout(showTimerRef.current);
      clearTimeout(hideTimerRef.current);
    };
  }, [show]);

  return { data, visible, dismiss };
}
