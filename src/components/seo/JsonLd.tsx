import { SITE_URL, SHOPEE_STORE_URL, TIKTOK_URL, STATS } from '@/data/links';
import { products } from '@/data/products';

export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Luvea',
    url: SITE_URL,
    logo: `${SITE_URL}/images/Luvea.png`,
    description:
      'Luvea — piyama wanita berbahan rayon grade A yang adem, lembut, dan elegan.',
    sameAs: [SHOPEE_STORE_URL, TIKTOK_URL],
  };

  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: STATS.rating,
    reviewCount: STATS.reviews.replace(/[^\d]/g, ''),
    bestRating: '5',
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        image: `${SITE_URL}${p.image}`,
        description: `${p.series} — Piyama rayon grade A, adem dan elegan.`,
        brand: { '@type': 'Brand', name: 'Luvea' },
        aggregateRating,
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'IDR',
          availability: 'https://schema.org/InStock',
          url: p.shopeeUrl,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}
