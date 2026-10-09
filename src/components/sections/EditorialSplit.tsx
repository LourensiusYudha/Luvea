import Image from 'next/image';
import type { Testimonial } from '@/data/testimonials';
import styles from './EditorialSplit.module.css';

function SizeChartLogo() {
  return (
    <svg
      className={styles.sizeChartLogo}
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="110" height="110" rx="4" stroke="currentColor" strokeWidth="1" />
      <path d="M18 28h76M18 44h76M18 60h76M18 76h76" stroke="currentColor" strokeWidth=".8" opacity=".35" />
      <path d="M42 28v48M62 28v48M82 28v48" stroke="currentColor" strokeWidth=".8" opacity=".35" />
      <text x="28" y="40" fill="currentColor" fontSize="7" fontWeight="700" letterSpacing=".08em">LD</text>
      <text x="46" y="40" fill="currentColor" fontSize="7" fontWeight="600">110</text>
      <text x="66" y="40" fill="currentColor" fontSize="7" fontWeight="600">115</text>
      <text x="86" y="40" fill="currentColor" fontSize="7" fontWeight="600">120</text>
      <path d="M24 52h12M24 58h12M24 64h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M30 46v24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 46h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 70h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <text x="56" y="98" fill="currentColor" fontSize="8.5" fontWeight="700" letterSpacing=".22em" textAnchor="middle">SIZE CHART</text>
    </svg>
  );
}

interface EditorialSplitProps {
  featured: Testimonial;
}

export default function EditorialSplit({ featured }: EditorialSplitProps) {
  return (
    <section className={styles.section} aria-label="Panduan dan ulasan">
      <div className={styles.grid}>
        <article className={`${styles.news} reveal-card`}>
          <div className={styles.newsHead}>
            <span className={styles.newsIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M4 5h16v14H4z" />
                <path d="M8 9h8M8 13h5" />
              </svg>
            </span>
            <h2 className={styles.newsTitle}>Panduan Ukuran</h2>
          </div>

          <div className={styles.newsBody}>
            <div className={styles.thumb} aria-label="Size chart">
              <SizeChartLogo />
            </div>
            <div className={styles.newsCopy}>
              <h3>Cari ukuran yang tepat untukmu</h3>
              <p>
                Pilih ukuran berdasarkan lingkar dada (LD). Masih ragu? Hubungi admin via
                WhatsApp untuk rekomendasi ukuran yang pas.
              </p>
              <a href="#ukuran" className={styles.readMore}>
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </article>

        <aside className={`${styles.testimonial} reveal-card`}>
          <div className={styles.testiHead}>
            <Image
              src={featured.avatarUrl}
              alt={featured.name}
              width={72}
              height={72}
              className={styles.avatar}
            />
            <strong className={styles.name}>{featured.name}</strong>
          </div>
          <blockquote className={styles.quote}>
            <p>&ldquo;{featured.text}&rdquo;</p>
          </blockquote>
          <p className={styles.meta}>
            {featured.variant} · {featured.location}
          </p>
          <a href="#testimoni" className={styles.moreLink}>
            Lihat semua ulasan
          </a>
        </aside>
      </div>
    </section>
  );
}
