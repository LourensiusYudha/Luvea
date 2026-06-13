import Image from 'next/image';
import styles from './StickyCta.module.css';

export default function StickyCta() {
  return (
    <div className={styles.sticky} id="stickyCta">
      <a href="https://shopee.co.id/luvea.official" target="_blank" rel="noopener" className={`${styles.btn} ${styles.shopee}`}>
        <Image src="/images/shopee.png" alt="Shopee" width={18} height={18} /> Shopee
      </a>
      <a href="https://wa.me/6281234567890?text=Halo%20kak%2C%20mau%20order%20piyama%20Luvea" target="_blank" rel="noopener" className={`${styles.btn} ${styles.wa}`}>
        <Image src="/images/whatsapp.png" alt="WA" width={18} height={18} /> WhatsApp
      </a>
    </div>
  );
}
