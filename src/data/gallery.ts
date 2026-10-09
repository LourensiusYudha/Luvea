/** Galeri editorial — terpisah dari katalog produk (ProductCard). */
export interface GalleryItem {
  id: string;
  image: string;
  label: string;
}

export const GALLERY_TABS = [
  { id: 'semua', label: 'Semua' },
  { id: 'terlaris', label: 'Terlaris' },
  { id: 'terbaru', label: 'Terbaru' },
] as const;

export type GalleryTabId = (typeof GALLERY_TABS)[number]['id'];

export const GALLERY_BY_TAB: Record<GalleryTabId, GalleryItem[]> = {
  semua: [
    { id: 'g-hero', image: '/images/hero.webp', label: 'Koleksi Luvea' },
    { id: 'g-aluna', image: '/images/aluna.webp', label: 'Nuansa Lembut' },
    { id: 'g-midnight', image: '/images/midnight.webp', label: 'Malam Nyaman' },
    { id: 'g-ruffle', image: '/images/ruffle.webp', label: 'Feminim Ringan' },
  ],
  terlaris: [
    { id: 'g-piyama-1', image: '/images/luvea_piyama_1.webp', label: 'Favorit Pelanggan' },
    { id: 'g-aluna', image: '/images/aluna.webp', label: 'Warna Lembut' },
    { id: 'g-ruffle', image: '/images/ruffle.webp', label: 'Paling Disukai' },
    { id: 'g-hero', image: '/images/hero.webp', label: 'Best Seller' },
  ],
  terbaru: [
    { id: 'g-midnight', image: '/images/midnight.webp', label: 'Koleksi Baru' },
    { id: 'g-piyama-2', image: '/images/luvea_piyama_2.webp', label: 'Edisi Terbaru' },
    { id: 'g-piyama-3', image: '/images/luvea_piyama_3.webp', label: 'Look Terkini' },
    { id: 'g-hero', image: '/images/hero.webp', label: 'New Arrival' },
  ],
};
