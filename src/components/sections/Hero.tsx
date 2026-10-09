import Image from 'next/image';
import { tiktokLink, waLink, WA_MESSAGES } from '@/data/links';
import { IMAGES } from '@/data/images';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <span className={styles.watermark} aria-hidden="true">LUVEA</span>

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`eyebrow ${styles.reveal}`}>Piyama Rayon Grade A</span>

          <h1 className={`${styles.title} ${styles.reveal}`}>
            Adem sepanjang hari,<br />
            <em>anggun</em> setiap saat.
          </h1>

          <p className={`${styles.tagline} ${styles.reveal}`}>
            Rayon grade A yang lembut dan adem, cukup elegan dipakai dari kamar
            sampai menyambut tamu di depan pintu.
          </p>

          <a
            href="#produk"
            className={`${styles.exploreLink} ${styles.reveal}`}
          >
            Lihat Semua Koleksi Piyama
          </a>

          <div className={`${styles.ctas} ${styles.reveal}`}>
            <a
              href={tiktokLink({ medium: 'hero', campaign: 'tiktok' })}
              target="_blank"
              rel="noopener"
              className={`${styles.cta} ${styles.ctaPrimary}`}
              aria-label="Lihat Koleksi di TikTok"
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                <Image src="/images/tiktok.png" alt="" width={18} height={18} />
              </span>
              <span className={styles.ctaText}>Lihat Koleksi di TikTok</span>
            </a>
            <a
              href={waLink(WA_MESSAGES.order)}
              target="_blank"
              rel="noopener"
              className={`${styles.cta} ${styles.ctaSecondary}`}
              aria-label="Pesan via WhatsApp"
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
              </span>
              <span className={styles.ctaText}>Tanya via WhatsApp</span>
            </a>
          </div>

          <p className={`${styles.trustStrip} ${styles.reveal}`}>
            Bahan rayon grade A · Jahitan flatlock · Belanja di TikTok Shop · Tanya via WhatsApp
          </p>
        </div>

        <div className={styles.visual}>
          <Image
            src={IMAGES.hero}
            alt="Piyama Luvea rayon grade A"
            width={1100}
            height={1424}
            priority
            sizes="(max-width: 900px) 560px, (max-width: 1200px) 640px, 760px"
            className={styles.heroImg}
          />

          <div className={`${styles.shippingBadge} ${styles.pillIn}`}>
            Gratis Ongkir
          </div>
        </div>
      </div>
    </section>
  );
}
