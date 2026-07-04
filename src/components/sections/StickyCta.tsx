import Image from 'next/image';
import { shopeeLink, waLink, WA_MESSAGES } from '@/data/links';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './StickyCta.module.css';

export default function StickyCta() {
  return (
    <div className={styles.sticky} id="stickyCta">
      <a href={shopeeLink({ medium: 'sticky-cta', campaign: 'shopee' })} target="_blank" rel="noopener" className={`${styles.btn} ${styles.shopee}`} aria-label="Beli di Shopee - sticky bar">
        <ChannelIcon src="/images/shopee.png" />
        Shopee
      </a>
      <a href={waLink(WA_MESSAGES.orderShort)} target="_blank" rel="noopener" className={`${styles.btn} ${styles.wa}`}>
        <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
        WhatsApp
      </a>
    </div>
  );
}
