import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <div className={styles.brand}>
            <Image src="/images/Luvea.png" alt="Luvea Logo" width={28} height={28} className={styles.logo} />
            <span className={styles.brandName}>Luvea</span>
          </div>
          <p className={styles.tagline}>Sleep in Comfort, Wake in Beauty</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Shop</h4>
          <nav className={styles.colLinks} aria-label="Shop links">
            <a href="#produk">Koleksi</a>
            <a href="#ukuran">Panduan Ukuran</a>
            <a href="#keunggulan">Keunggulan</a>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Help</h4>
          <nav className={styles.colLinks} aria-label="Help links">
            <a href="#faq">FAQ</a>
            <a href="#faq">Kebijakan Retur</a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener">Kontak Kami</a>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Ikuti Kami</h4>
          <div className={styles.social}>
            <a href="https://shopee.co.id/luvea.official" target="_blank" rel="noopener" aria-label="Shopee" className={`${styles.socialLink} ${styles.shopee}`} title="Shopee">
              <Image src="/images/shopee.png" alt="Shopee" width={18} height={18} />
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" aria-label="WhatsApp" className={`${styles.socialLink} ${styles.wa}`} title="WhatsApp">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={18} height={18} />
            </a>
            <a href="https://tiktok.com/@luvea" target="_blank" rel="noopener" aria-label="TikTok" className={`${styles.socialLink} ${styles.tiktok}`} title="TikTok @luvea">
              <Image src="/images/tiktok.png" alt="TikTok" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Luvea. All rights reserved.</p>
      </div>
    </footer>
  );
}
