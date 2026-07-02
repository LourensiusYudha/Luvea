'use client';

import { useEffect, useState, useCallback } from 'react';

const MIN_DAILY = 11;
const MAX_DAILY = 41;
const SHOP_OPEN = 7 * 60;   // 07:00
const SHOP_CLOSE = 23 * 60; // 23:00
const TICK_MS = 90_000;     // refresh ~1.5 min so angka bisa naik saat user browsing

function daySeed(date: Date, salt = 0): number {
  const seed =
    date.getFullYear() * 10000 +
    (date.getMonth() + 1) * 100 +
    date.getDate() +
    salt;
  return ((seed * 9301 + 49297) % 233280) / 233280;
}

/** Target unik per hari, selalu 11–41 */
function getDailyMax(date: Date): number {
  return MIN_DAILY + Math.floor(daySeed(date) * (MAX_DAILY - MIN_DAILY + 1));
}

/** Kurva naik: pagi pelan, sore–malam lebih cepat (polanya mirip belanja online) */
function shoppingCurve(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  return clamped * clamped * (3 - 2 * clamped); // smoothstep
}

function computeCount(now = new Date()): number {
  const dailyMax = getDailyMax(now);
  const minutes = now.getHours() * 60 + now.getMinutes();

  if (minutes < SHOP_OPEN) {
    const overnight = 1 + Math.floor(daySeed(now, 7) * 4);
    return Math.min(overnight, dailyMax);
  }

  if (minutes >= SHOP_CLOSE) {
    return dailyMax;
  }

  const activeSpan = SHOP_CLOSE - SHOP_OPEN;
  const progress = (minutes - SHOP_OPEN) / activeSpan;
  const eased = shoppingCurve(progress);

  const floor = Math.max(2, Math.floor(dailyMax * 0.12));
  const raw = Math.floor(floor + (dailyMax - floor) * eased);

  return Math.min(Math.max(raw, floor), dailyMax);
}

export function useScarcityCounter(): number | null {
  const [count, setCount] = useState<number | null>(null);

  const refresh = useCallback(() => {
    setCount(computeCount());
  }, []);

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, TICK_MS);
    return () => clearInterval(id);
  }, [refresh]);

  return count;
}
