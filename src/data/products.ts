import { SHOPEE_STORE_URL } from './links';

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
  // Listing URL for this variant. Defaults to the store; replace with the
  // specific Shopee product URL when available for true deep-linking.
  shopeeUrl: string;
  swatches: Swatch[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'product-pink',
    name: 'Aluna Series',
    series: 'Lembut & Anggun Series',
    price: 119000,
    originalPrice: 149000,
    image: '/images/luvea_piyama_1.webp',
    badge: 'Terlaris ✦',
    color: 'pink',
    swatchColor: '#F9C6D0',
    shopeeUrl: SHOPEE_STORE_URL,
    swatches: [
      { color: '#F4A6A0', label: 'Coral', targetId: 'product-pink', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#A8C8A1', label: 'Sage', targetId: 'product-pink', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#E8C96A', label: 'Mustard', targetId: 'product-pink', shopeeUrl: 'https://shopee.co.id/luvea.official' },
    ],
  },
  {
    id: 'product-blue',
    name: 'Midnight Bloom',
    series: 'Floral Malam Elegan Series',
    price: 120000,
    originalPrice: 152000,
    image: '/images/luvea_piyama_2.webp',
    badge: '🔥 New',
    color: 'blue',
    swatchColor: '#C6D4F9',
    featured: true,
    shopeeUrl: SHOPEE_STORE_URL,
    swatches: [
      { color: '#7EC8C8', label: 'Teal', targetId: 'product-blue', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#C4A6D4', label: 'Lavender', targetId: 'product-blue', shopeeUrl: 'https://shopee.co.id/luvea.official' },
      { color: '#F4A6A0', label: 'Coral', targetId: 'product-blue', shopeeUrl: 'https://shopee.co.id/luvea.official' },
    ],
  },
  {
    id: 'product-mint',
    name: 'Ruffle Series',
    series: 'Ringan & Feminim Series',
    price: 118000,
    originalPrice: 149000,
    image: '/images/luvea_piyama_3.webp',
    badge: 'Favorit ✦',
    color: 'mint',
    swatchColor: '#D4F9C6',
    shopeeUrl: SHOPEE_STORE_URL,
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
