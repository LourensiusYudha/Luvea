export interface Testimonial {
  id: number;
  stars: number;
  text: string;
  variant: string;
  name: string;
  location: string;
  date: string;
  helpful: number;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    text: 'Bahannya lembut banget, dipakai tidur rasanya kayak dipeluk bantal awan. Pengiriman juga cepat!',
    variant: 'Sky Blue',
    name: 'Maya L.',
    location: 'Yogyakarta',
    date: '12 Mei 2026',
    helpful: 23,
    avatarUrl: '/images/testimonials/maya.jpg',
  },
  {
    id: 2,
    stars: 5,
    text: 'Aku beli buat kado sahabat. Dia langsung nanya beli di mana. Fix bakal order lagi!',
    variant: 'Blossom Pink',
    name: 'Nadia Putri',
    location: 'Semarang',
    date: '3 Mei 2026',
    helpful: 14,
    avatarUrl: '/images/testimonials/nadia.jpg',
  },
  {
    id: 3,
    stars: 5,
    text: 'Sumpah ini paling nyaman yang pernah aku pakai. Bahannya adem, nggak bikin gerah. Udah beli 3 warna sekaligus!',
    variant: 'Sky Blue',
    name: 'Salsabila R.',
    location: 'Jakarta',
    date: '12 Mei 2026',
    helpful: 32,
    avatarUrl: '/images/testimonials/salsabila.jpg',
  },
  {
    id: 4,
    stars: 4,
    text: 'Bahannya enak dan adem banget, kancing depannya memudahkan buat menyusui. Pengiriman agak telat 2 hari, tapi produknya worth it banget. Pasti repeat order!',
    variant: 'Blossom Pink',
    name: 'Fitri Amalia',
    location: 'Surabaya',
    date: '8 Mei 2026',
    helpful: 29,
    avatarUrl: '/images/testimonials/fitri.jpg',
  },
  {
    id: 5,
    stars: 5,
    text: 'Desainnya aesthetic banget, cocok buat konten juga! Bahannya adem dan jatuh, dipakai santai di rumah tetap terlihat rapi dan pede.',
    variant: 'Sky Blue',
    name: 'Anisa',
    location: 'Bandung',
    date: '18 Mei 2026',
    helpful: 41,
    avatarUrl: '/images/testimonials/anisa.jpg',
  },
  {
    id: 6,
    stars: 4,
    text: 'Motifnya lucu dan tidak pasaran. Bahan halus, jahitan rapi. Minus-nya warna sedikit beda dari foto — mint-nya lebih terang di aslinya, tapi tetap cantik!',
    variant: 'Fresh Mint',
    name: 'Rina Setia',
    location: 'Malang',
    date: '8 Mei 2026',
    helpful: 19,
    avatarUrl: '/images/testimonials/rina.jpg',
  },
];
