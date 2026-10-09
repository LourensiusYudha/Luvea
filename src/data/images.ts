/** WebP paths for display-optimized assets (generated via `npm run optimize-images`). */
export const IMAGES = {
  hero: '/images/hero.webp',
  logo: '/images/Luvea.webp',
  products: {
    aluna: '/images/aluna.webp',
    midnight: '/images/midnight.webp',
    ruffle: '/images/ruffle.webp',
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
