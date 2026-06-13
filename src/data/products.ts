export interface Swatch {
  color: string;
  label: string;
  targetId: string;
  shopeeUrl: string;
}

export interface Product {
  id: string;
  name: string;
  series: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string;
  color: 'pink' | 'blue' | 'mint';
  swatchColor: string;
  swatches: Swatch[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'product-pink',
    name: 'Luvea Blossom Pink',
    series: 'Soft & Dreamy Series',
    price: 119000,
    originalPrice: 149000,
    image: '/images/luvea_piyama_1.png',
    badge: 'Terlaris ✦',
    color: 'pink',
    swatchColor: '#F9C6D0',
    swatches: [
      { color: '#F4A6A0', label: 'Coral', targetId: 'product-pink', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#A8C8A1', label: 'Sage', targetId: 'product-pink', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#E8C96A', label: 'Mustard', targetId: 'product-pink', shopeeUrl: 'https://shopee.co.id/luvea.official' },
    ],
  },
  {
    id: 'product-blue',
    name: 'Luvea Sky Blue',
    series: 'Cool & Cozy Series',
    price: 120000,
    originalPrice: 152000,
    image: '/images/luvea_piyama_2.png',
    badge: '🔥 New',
    color: 'blue',
    swatchColor: '#C6D4F9',
    featured: true,
    swatches: [
      { color: '#7EC8C8', label: 'Teal', targetId: 'product-blue', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#C4A6D4', label: 'Lavender', targetId: 'product-blue', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#F4A6A0', label: 'Coral', targetId: 'product-blue', shopeeUrl: 'https://shopee.co.id/luvea.official' },
    ],
  },
  {
    id: 'product-mint',
    name: 'Luvea Fresh Mint',
    series: 'Fresh & Light Series',
    price: 129000,
    originalPrice: 149000,
    image: '/images/luvea_piyama_3.png',
    badge: 'Favorit ✦',
    color: 'mint',
    swatchColor: '#D4F9C6',
    swatches: [
      { color: '#A8C8A1', label: 'Sage', targetId: 'product-mint', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#E8C96A', label: 'Mustard', targetId: 'product-mint', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#7EC8C8', label: 'Teal', targetId: 'product-mint', shopeeUrl: 'https://shopee.co.id/luvea.official' },
    ],
  },
];

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

export function getDiscount(original: number, sale: number): string {
  return `-${Math.round((1 - sale / original) * 100)}%`;
}
