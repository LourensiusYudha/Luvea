'use client';

import Image from 'next/image';
import { SwatchSelector } from './SwatchSelector';
import { CountdownTimer } from './CountdownTimer';
import ChannelIcon from './ChannelIcon';
import { Product, formatPrice, getDiscount } from '@/data/products';
import { productOrderLink, tiktokLink, FEATURES } from '@/data/links';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

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
      <div className={styles.imgWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          loading={product.featured ? 'eager' : 'lazy'}
          className={styles.productImg}
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
        <div className={styles.material}>Rayon Grade A</div>
        {product.featured && FEATURES.promoCountdown && <CountdownTimer />}
        <SwatchSelector swatches={product.swatches} productName={product.name} />
        <a
          href={tiktokLink({ medium: 'product-card', campaign: product.id })}
          target="_blank"
          rel="noopener"
          className={`btn btn-tiktok ${styles.btn} ${product.featured ? styles.btnFeatured : ''}`}
          aria-label={`Belanja ${product.name} di TikTok Shop`}
        >
          <ChannelIcon src="/images/tiktok.png" />
          Belanja di TikTok Shop
        </a>
        <div className={styles.altChannels}>
          <a
            href={productOrderLink(product.name)}
            target="_blank"
            rel="noopener"
            className={styles.waLink}
            aria-label={`Tanya ${product.name} via WhatsApp`}
          >
            <ChannelIcon src="/images/whatsapp.png" size={14} />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
