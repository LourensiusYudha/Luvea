/** WebP paths for display-optimized assets (generated via `npm run optimize-images`). */
export const IMAGES = {
  hero: '/images/sekar.webp',
  logo: '/images/Luvea.webp',
  products: {
    pink: '/images/luvea_piyama_1.webp',
    blue: '/images/luvea_piyama_2.webp',
    mint: '/images/luvea_piyama_3.webp',
  },
  advantages: {
    kelembutan: '/images/kelembutan_serat.webp',
    jahitan: '/images/ketahanan_jahitan.webp',
    kancing: '/images/kancing_premium.webp',
    adem: '/images/kain_adem.webp',
  },
} as const;

export function testimonialAvatar(name: string): string {
  return `/images/testimonials/${name}.webp`;
}
