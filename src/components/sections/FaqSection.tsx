'use client';

import { useState } from 'react';
import { faqItems } from '@/data/faq';
import FaqItem from '@/components/ui/FaqItem';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  function toggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className="section-label">— Pertanyaan Umum —</div>
        <h2 className="section-title reveal-up">Ada yang Ingin<br /><em>Kamu Tanyakan?</em></h2>

        <div className={`${styles.list} reveal-up`}>
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
