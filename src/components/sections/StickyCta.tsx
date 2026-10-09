'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { tiktokLink, waLink, WA_MESSAGES } from '@/data/links';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './StickyCta.module.css';

export default function StickyCta() {
  // Muncul setelah hero (yang sudah punya CTA sendiri) keluar dari layar
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.sticky} ${visible ? styles.visible : ''}`}
      id="stickyCta"
      aria-hidden={!visible}
    >
      <a
        href={tiktokLink({ medium: 'sticky-cta', campaign: 'tiktok' })}
        target="_blank"
        rel="noopener"
        className={`${styles.btn} ${styles.tiktok} ${styles.primary}`}
        aria-label="Belanja di TikTok Shop"
        tabIndex={visible ? undefined : -1}
      >
        <ChannelIcon src="/images/tiktok.png" />
        TikTok Shop
      </a>
      <a
        href={waLink(WA_MESSAGES.orderShort)}
        target="_blank"
        rel="noopener"
        className={`${styles.btn} ${styles.wa}`}
        aria-label="Tanya via WhatsApp"
        tabIndex={visible ? undefined : -1}
      >
        <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
        WhatsApp
      </a>
    </div>
  );
}
