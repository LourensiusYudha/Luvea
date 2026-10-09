import Image from 'next/image';
import { tiktokLink } from '@/data/links';
import { IMAGES } from '@/data/images';
import styles from './PromoBanners.module.css';

export default function PromoBanners() {
  return (
    <section className={styles.section} aria-label="Penawaran Luvea">
      <div className={styles.grid}>
        <a
          href={tiktokLink({ medium: 'promo', campaign: 'koleksi' })}
          target="_blank"
          rel="noopener"
          className={`${styles.plain} reveal-card`}
        >
          <span className={styles.eyebrow}>Koleksi Rumah</span>
          <h3 className={styles.plainTitle}>
            Diskon Launching<br /><em>Terbatas</em>
          </h3>
          <p className={styles.plainSub}>Untuk santai di rumah sampai menyambut tamu.</p>
          <span className={styles.plainCta}>Belanja di TikTok Shop</span>
        </a>

        <a
          href={tiktokLink({ medium: 'promo', campaign: 'midnight-bloom' })}
          target="_blank"
          rel="noopener"
          className={`${styles.dotted} reveal-card`}
        >
          <div className={styles.dottedCopy}>
            <span className={styles.eyebrow}>Koleksi Terbaru</span>
            <h3 className={styles.dottedTitle}>Midnight Bloom</h3>
            <p className={styles.dottedSub}>Gratis ongkir ke seluruh Indonesia lewat TikTok Shop.</p>
            <span className={styles.plainCta}>Belanja Midnight Bloom</span>
          </div>
          <div className={styles.dottedVisual}>
            <Image
              src={IMAGES.products.midnight}
              alt="Piyama Luvea Midnight Bloom"
              width={588}
              height={762}
              loading="lazy"
              sizes="(max-width: 900px) 50vw, 320px"
              className={styles.dottedImg}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
