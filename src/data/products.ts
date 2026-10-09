export interface Swatch {
  color: string;
  label: string;
  targetId: string;
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
    name: 'Aluna Series',
    series: 'Lembut & Anggun Series',
    price: 119000,
    originalPrice: 149000,
    image: '/images/aluna.webp',
    badge: 'Terlaris ✦',
    color: 'pink',
    swatchColor: '#F9C6D0',
    swatches: [
      { color: '#F4A6A0', label: 'Coral', targetId: 'product-pink' },
      { color: '#A8C8A1', label: 'Sage', targetId: 'product-pink' },
      { color: '#E8C96A', label: 'Mustard', targetId: 'product-pink' },
    ],
  },
  {
    id: 'product-blue',
    name: 'Midnight Bloom',
    series: 'Floral Malam Elegan Series',
    price: 120000,
    originalPrice: 152000,
    image: '/images/midnight.webp',
    badge: '🔥 New',
    color: 'blue',
    swatchColor: '#C6D4F9',
    featured: true,
    swatches: [
      { color: '#7EC8C8', label: 'Teal', targetId: 'product-blue' },
      { color: '#C4A6D4', label: 'Lavender', targetId: 'product-blue' },
      { color: '#F4A6A0', label: 'Coral', targetId: 'product-blue' },
    ],
  },
  {
    id: 'product-mint',
    name: 'Ruffle Series',
    series: 'Ringan & Feminim Series',
    price: 118000,
    originalPrice: 149000,
    image: '/images/ruffle.webp',
    badge: 'Favorit ✦',
    color: 'mint',
    swatchColor: '#D4F9C6',
    swatches: [
      { color: '#A8C8A1', label: 'Sage', targetId: 'product-mint' },
      { color: '#E8C96A', label: 'Mustard', targetId: 'product-mint' },
      { color: '#7EC8C8', label: 'Teal', targetId: 'product-mint' },
    ],
  },
];

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

export function getDiscount(original: number, sale: number): string {
  return `-${Math.round((1 - sale / original) * 100)}%`;
}
