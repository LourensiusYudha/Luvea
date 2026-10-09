import Image from 'next/image';
import { IMAGES } from '@/data/images';
import { TIKTOK_URL, WHATSAPP_NUMBER, waLink, WA_MESSAGES } from '@/data/links';
import styles from './Footer.module.css';

function formatPhone(num: string): string {
  const local = num.replace(/^62/, '0');
  return `${local.slice(0, 4)}-${local.slice(4, 8)}-${local.slice(8)}`;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <div className={styles.brand}>
            <Image src={IMAGES.logo} alt="Luvea Logo" width={28} height={28} className={styles.logo} />
            <span className={styles.brandName}>Luvea</span>
          </div>
          <p className={styles.tagline}>Sleep in Comfort, Wake in Beauty</p>
          <div className={styles.social}>
            <a href={TIKTOK_URL} target="_blank" rel="noopener" aria-label="TikTok" className={`${styles.socialLink} ${styles.tiktok}`} title="TikTok @heyluvea">
              <Image src="/images/tiktok.png" alt="" width={18} height={18} />
            </a>
            <a href={waLink(WA_MESSAGES.ask)} target="_blank" rel="noopener" aria-label="WhatsApp" className={`${styles.socialLink} ${styles.wa}`} title="WhatsApp">
              <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Shop</p>
          <nav className={styles.colLinks} aria-label="Shop links">
            <a href="#produk">Koleksi</a>
            <a href="#ukuran">Panduan Ukuran</a>
            <a href="#keunggulan">Keunggulan</a>
          </nav>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Informasi</p>
          <nav className={styles.colLinks} aria-label="Informasi">
            <a href="#faq">FAQ</a>
            <a href="#faq">Kebijakan Retur</a>
            <a href="#testimoni">Ulasan Pelanggan</a>
          </nav>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Kontak Kami</p>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">☎</span>
              <a href={`tel:+${WHATSAPP_NUMBER}`}>{formatPhone(WHATSAPP_NUMBER)}</a>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">✉</span>
              <a href={waLink(WA_MESSAGES.ask)} target="_blank" rel="noopener">WhatsApp Admin</a>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">◎</span>
              <a href={TIKTOK_URL} target="_blank" rel="noopener">@heyluvea</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Luvea. All rights reserved.</p>
      </div>
    </footer>
  );
}
