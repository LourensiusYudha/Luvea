// Single source of truth for external links, business stats, UTM tagging, and
// feature flags. Update values here instead of hardcoding them in components.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://luvea.id';

export const WHATSAPP_NUMBER = '6285113131023';
export const TIKTOK_URL =
  'https://www.tiktok.com/@heyluvea?_r=1&_t=ZS-97gcdEBptbg';
export const SHOPEE_STORE_URL = 'https://shopee.co.id/luvea.official';

// Prewritten WhatsApp opening messages (plain text, encoded by `waLink`).
export const WA_MESSAGES = {
  order: 'Halo kak, saya mau pesan piyama Luvea 😊',
  ask: 'Halo kak, mau tanya piyama Luvea 😊',
  orderShort: 'Halo kak, mau order piyama Luvea',
  size: 'Halo kak, saya mau tanya ukuran piyama Luvea',
} as const;

// Business numbers shown across the page. Keep them consistent by reading from
// here rather than duplicating literals in each section.
//
// - reviews: Shopee review count; always pair with `rating` (4.9/5).
// - customers: total buyers / trust metric; do NOT pair with rating on the same line.
export const STATS = {
  customers: '12.000+',
  rating: '4.9',
  reviews: '3.200+',
} as const;

// Toggle synthetic/urgency elements. The fabricated purchase popup is disabled
// by default because random names are not real transactions; re-enable only
// when wired to real order data.
interface FeatureFlags {
  socialProofPopup: boolean;
  scarcityCounter: boolean;
  promoCountdown: boolean;
}

export const FEATURES: FeatureFlags = {
  socialProofPopup: false,
  scarcityCounter: true,
  promoCountdown: true,
};

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
}

export function withUtm(url: string, utm: UtmParams = {}): string {
  const params = new URLSearchParams();
  params.set('utm_source', utm.source ?? 'landing');
  params.set('utm_medium', utm.medium ?? 'cta');
  if (utm.campaign) params.set('utm_campaign', utm.campaign);
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}${params.toString()}`;
}

export function shopeeLink(utm?: UtmParams): string {
  return withUtm(SHOPEE_STORE_URL, utm);
}

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
