'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import { GALLERY_BY_TAB, GALLERY_TABS, type GalleryTabId } from '@/data/gallery';
import { FEATURES, tiktokLink } from '@/data/links';
import { useScarcityCounter } from '@/hooks/useScarcityCounter';
import ProductCard from '@/components/ui/ProductCard';
import styles from './ProductsSection.module.css';

export default function ProductsSection() {
  const orderCount = useScarcityCounter();
  const [tab, setTab] = useState<GalleryTabId>('semua');

  const gallery = useMemo(() => GALLERY_BY_TAB[tab], [tab]);
  const tabIndex = GALLERY_TABS.findIndex((t) => t.id === tab);

  function goTab(delta: number) {
    const next = (tabIndex + delta + GALLERY_TABS.length) % GALLERY_TABS.length;
    setTab(GALLERY_TABS[next].id);
  }

  return (
    <section className={styles.section} id="produk">
      <div className={styles.ornament} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 3l2.2 6.8H21l-5.6 4.1 2.1 6.8L12 16.6 6.4 20.7l2.1-6.8L3 9.8h6.8z" />
        </svg>
      </div>
      <div className="section-label">Koleksi Unggulan</div>
      <h2 className="section-title reveal-up">Pilih Warna Favoritmu</h2>
      <p className="section-sub reveal-up">
        Satu bahan rayon grade A untuk semua warna: adem dipakai tidur, rapi saat menerima tamu.
      </p>

      <div className={styles.tabs} role="tablist" aria-label="Galeri inspirasi">
        {GALLERY_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`${styles.tab} ${tab === t.id ? styles.tabActive : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.visualGrid} key={tab}>
        {gallery.map((item) => (
          <a
            key={item.id}
            href={tiktokLink({ medium: 'gallery', campaign: `${tab}-${item.id}` })}
            target="_blank"
            rel="noopener"
            className={styles.visualTile}
            aria-label={`Lihat ${item.label} di TikTok`}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes="(max-width: 640px) 50vw, 280px"
              className={styles.visualImg}
            />
            <div className={styles.visualOverlay}>
              <span className={styles.visualName}>{item.label}</span>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.pager}>
        <button type="button" className={styles.pagerBtn} onClick={() => goTab(-1)} aria-label="Galeri sebelumnya">
          <span aria-hidden="true">‹</span> Sebelumnya
        </button>
        <button type="button" className={styles.pagerBtn} onClick={() => goTab(1)} aria-label="Galeri berikutnya">
          Berikutnya <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className={styles.catalogHead}>
        <h3 className={styles.catalogTitle}>Katalog Produk</h3>
        <p className={styles.catalogSub}>Pilih seri, warna, dan belanja langsung di TikTok Shop.</p>
      </div>

      <div className={styles.detailGrid}>
        {products.map((p) => (
          <div key={p.id} className="reveal-card">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {FEATURES.scarcityCounter && (
        <div className={`${styles.scarcity} reveal-up`}>
          <span className={styles.dot} />
          <p>
            Stok terbatas — <strong>sudah <span id="lv4OrderCount">{orderCount ?? '...'}</span> pesanan</strong>{' '}
            masuk hari ini. Jangan sampai kehabisan.
          </p>
        </div>
      )}
    </section>
  );
}
