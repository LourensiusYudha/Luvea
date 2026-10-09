import Image from 'next/image';
import { tiktokLink, waLink, WA_MESSAGES } from '@/data/links';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './StickyCta.module.css';

export default function StickyCta() {
  return (
    <div className={styles.sticky} id="stickyCta">
      <a
        href={tiktokLink({ medium: 'sticky-cta', campaign: 'tiktok' })}
        target="_blank"
        rel="noopener"
        className={`${styles.btn} ${styles.tiktok} ${styles.primary}`}
        aria-label="Belanja di TikTok Shop"
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
      >
        <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
        WhatsApp
      </a>
    </div>
  );
}
