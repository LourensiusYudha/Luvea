'use client';

import type { FaqItem as FaqItemType } from '@/data/faq';
import styles from './FaqItem.module.css';

interface FaqItemProps {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.q}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <svg
          className={styles.arrow}
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.a}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
