'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'luvea_promo_end';

function getTarget(days: number): Date {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = new Date(Number(stored));
      if (parsed.getTime() > Date.now()) return parsed;
    }
  }
  const target = new Date();
  target.setDate(target.getDate() + days);
  target.setHours(23, 59, 59, 0);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, String(target.getTime()));
  }
  return target;
}

export function useCountdown(days: number = 2) {
  const [time, setTime] = useState({ h: '00', m: '00', s: '00' });

  useEffect(() => {
    const target = getTarget(days);
    const pad = (n: number) => String(n).padStart(2, '0');

    function tick() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;

      setTime({
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [days]);

  return time;
}
