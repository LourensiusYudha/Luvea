'use client';

import { useEffect, useState } from 'react';

export function useScarcityCounter(): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const storageKey = `luvea_order_count_${dateKey}`;

    function compute() {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) return parseInt(stored, 10);

        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('luvea_order_count_') && k !== storageKey) {
            localStorage.removeItem(k);
          }
        }

        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        const dayRand = ((seed * 9301 + 49297) % 233280) / 233280;
        const val = 120 + Math.round(dayRand * 7) + 3;
        localStorage.setItem(storageKey, String(val));
        return val;
      } catch {
        return 127;
      }
    }

    const id = setTimeout(() => setCount(compute()), 0);
    return () => clearTimeout(id);
  }, []);

  return count;
}
