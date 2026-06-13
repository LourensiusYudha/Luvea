'use client';

import { useEffect, useState } from 'react';

export function useScarcityCounter(): number {
  const [count, setCount] = useState(127);

  useEffect(() => {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const storageKey = `luvea_order_count_${dateKey}`;

    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setCount(parseInt(stored, 10));
      } else {

        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('luvea_order_count_') && k !== storageKey) {
            localStorage.removeItem(k);
          }
        }

        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        const dayRand = ((seed * 9301 + 49297) % 233280) / 233280;
        const val = 120 + Math.round(dayRand * 7) + 3;
        setCount(val);
        localStorage.setItem(storageKey, String(val));
      }
    } catch {
      setCount(127);
    }
  }, []);

  return count;
}
