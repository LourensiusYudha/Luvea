'use client';

import Image from 'next/image';
import { SwatchSelector } from './SwatchSelector';
import { CountdownTimer } from './CountdownTimer';
import { Product, formatPrice, getDiscount } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const gradientMap: Record<string, string> = {
  pink: 'linear-gradient(135deg, #F9C6D0 0%, #FFE8EF 100%)',
  blue: 'linear-gradient(135deg, #C6D4F9 0%, #EEF0FF 100%)',
  mint: 'linear-gradient(135deg, #D4F9C6 0%, #EDFAF2 100%)',
};

const badgeClassMap: Record<string, string> = {
  pink: '',
  blue: styles.badgeBlue,
  mint: styles.badgeMint,
};

export default function ProductCard({ product }: ProductCardProps) {
  const cardClass = `${styles.card} ${product.featured ? styles.featured : ''}`;
  const badgeClass = `${styles.badge} ${badgeClassMap[product.color] || ''}`;

  return (
    <article className={cardClass} data-color={product.color} id={product.id}>
      <div className={badgeClass}>{product.badge}</div>
      <div className={styles.imgWrap} style={{ background: gradientMap[product.color] }}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p className={styles.series}>{product.series}</p>
        <div className={styles.price}>
          <span className={styles.sale}>{formatPrice(product.price)}</span>
          <span className={styles.ori}>{formatPrice(product.originalPrice)}</span>
          <span className={styles.disc}>{getDiscount(product.originalPrice, product.price)}</span>
        </div>
        <div className={styles.material}>🌿 Cotton-Rayon Premium</div>
        {product.featured && <CountdownTimer />}
        <SwatchSelector swatches={product.swatches} />
        <a
          href="https://shopee.co.id/luvea.official"
          target="_blank"
          rel="noopener"
          className={`${styles.btn} ${product.featured ? styles.btnFeatured : ''}`}
        >
          {product.featured ? 'Ambil Promo Sekarang →' : 'Beli di Shopee →'}
        </a>
        <div className={styles.altChannels}>
          <span className={styles.altLabel}>Juga tersedia di</span>
          <a href="https://tiktok.com/@luvea.official" target="_blank" className={styles.altLink} aria-label="TikTok Shop">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.27 8.27 0 004.84 1.55V7.07a4.85 4.85 0 01-1.07-.38z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/6281234567890?text=Halo%20kak%2C%20saya%20mau%20pesan%20piyama%20Luvea%20%F0%9F%98%8A"
            target="_blank"
            className={styles.altLink}
            aria-label="WhatsApp"
          >
            <Image src="/images/whatsapp.png" alt="WA" width={14} height={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
