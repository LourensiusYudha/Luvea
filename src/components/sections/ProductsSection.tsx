'use client';

import { products } from '@/data/products';
import { FEATURES } from '@/data/links';
import { useScarcityCounter } from '@/hooks/useScarcityCounter';
import ProductCard from '@/components/ui/ProductCard';
import styles from './ProductsSection.module.css';

export default function ProductsSection() {
  const orderCount = useScarcityCounter();

  return (
    <section className={styles.section} id="produk">
      <div className="section-label">Koleksi Unggulan</div>
      <h2 className="section-title reveal-up">Pilih Warna Favoritmu</h2>
      <p className="section-sub reveal-up">Satu bahan rayon grade A untuk semua warna: adem dipakai tidur, rapi saat menerima tamu.</p>

      <div className={styles.bestBadge}>TERLARIS</div>

      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.id} className="reveal-card">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {FEATURES.scarcityCounter && (
        <div className={`${styles.scarcity} reveal-up`}>
          <span className={styles.dot} />
          <p>⚡ Stok terbatas! <strong>Sudah <span id="lv4OrderCount">{orderCount ?? '...'}</span> pesanan</strong> masuk hari ini. Jangan sampai kehabisan.</p>
        </div>
      )}
    </section>
  );
}
