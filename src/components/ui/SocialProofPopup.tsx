'use client';

import { useSocialProof } from '@/hooks/useSocialProof';
import styles from './SocialProofPopup.module.css';

export default function SocialProofPopup() {
  const { data, visible, dismiss } = useSocialProof();

  if (!data) return null;

  return (
    <div
      className={`${styles.popup} ${visible ? styles.show : ''}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className={styles.icon}>🛍️</div>
      <div className={styles.text}>
        <strong>{data.name}</strong> di <span>{data.city}</span>
        <br /><span>baru membeli {data.product}</span>
      </div>
      <button className={styles.close} onClick={dismiss} aria-label="Tutup">×</button>
    </div>
  );
}
