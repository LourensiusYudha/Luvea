export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Apakah bahan piyama ini luntur?',
    answer: 'Tidak. Bahan Rayon Premium Grade A Luvea sudah melalui proses washing sehingga warna lebih stabil dan tidak mudah luntur walau dicuci berkali-kali.',
  },
  {
    id: 2,
    question: 'Apakah bisa COD?',
    answer: 'Bisa! Pembelian melalui marketplace yang menyediakan fitur COD seperti Shopee sudah mendukung metode pembayaran ini.',
  },
  {
    id: 3,
    question: 'Kapan barang dikirim?',
    answer: 'Pesanan dikirim dalam 1×24 jam pada hari kerja (Senin–Sabtu). Pesanan yang masuk sebelum pukul 15.00 biasanya langsung diproses di hari yang sama.',
  },
  {
    id: 4,
    question: 'Apakah bahannya panas?',
    answer: 'Tidak. Bahan Rayon Premium Grade A terkenal adem dan breathable sehingga sangat nyaman dipakai tidur, bahkan di malam yang panas sekalipun.',
  },
  {
    id: 5,
    question: 'Apakah ada garansi produk?',
    answer: 'Ya! Luvea memberikan garansi retur 7 hari jika produk mengalami cacat produksi atau tidak sesuai pesanan. Hubungi admin kami untuk proses retur.',
  },
];
