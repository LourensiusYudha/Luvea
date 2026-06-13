import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className="eyebrow">New Arrival — Limited Stock</span>

          <h1 className={styles.title}>
            Tidur Lebih Nyaman<br />dengan{' '}
            <Image src="/images/Luvea.png" alt="Luvea" width={310} height={120} priority className={styles.heroLogo} />
          </h1>

          <p className={styles.tagline}>
            Bahan Rayon premium yang adem, lembut & breathable —
            cocok untuk tidur, menyusui, hingga morning routine aesthetic-mu.
          </p>

          <div className={styles.badges}>
            {['Breathable', 'Nursing Friendly', 'Banyak Motif', 'Gratis Ongkir'].map((b) => (
              <div key={b} className={styles.microBadge}>{b}</div>
            ))}
          </div>

          <div className={styles.ctas}>
            <a href="https://shopee.co.id/luvea.official" target="_blank" rel="noopener" className="btn btn-shopee btn--xl">
              <Image src="/images/shopee.png" alt="Shopee" width={18} height={18} />
              Beli di Shopee
            </a>
            <a href="https://tiktok.com/@luvea.official" target="_blank" rel="noopener" className={styles.heroTiktok}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.27 8.27 0 004.84 1.55V7.07a4.85 4.85 0 01-1.07-.38z"/>
              </svg>
              TikTok Shop
            </a>
          </div>

          <div className={styles.proof}>
            <div className={styles.avatars}>
              {['M', 'N', 'S', 'A'].map((l, i) => (
                <div
                  key={l}
                  className={styles.av}
                  style={{ background: ['#F9C6D0', '#C6D4F9', '#D4F9C6', '#E6C6F9'][i] }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div className={styles.proofText}>
              <span className={styles.proofStars}>★★★★★</span>
              <span>Dipercaya <strong>12.000+</strong> pelanggan</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imgFrame}>
            <Image src="/images/sekar.png" alt="Piyama Luvea Premium" width={400} height={500} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
