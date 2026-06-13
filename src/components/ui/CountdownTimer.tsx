'use client';

import { useCountdown } from '@/hooks/useCountdown';
import styles from './CountdownTimer.module.css';

export function CountdownTimer() {
  const time = useCountdown(2);

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>⏱ Promo berakhir dalam</span>
      <div className={styles.timer}>
        <div className={styles.unit}><span>{time.h}</span><small>Jam</small></div>
        <span className={styles.sep}>:</span>
        <div className={styles.unit}><span>{time.m}</span><small>Menit</small></div>
        <span className={styles.sep}>:</span>
        <div className={styles.unit}><span>{time.s}</span><small>Detik</small></div>
      </div>
    </div>
  );
}
