export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Kebijakan Retur',
    answer: '• Retur berlaku untuk salah kirim, cacat produksi, atau barang tidak sesuai pesanan.\n• Pengajuan retur maksimal 7 hari setelah barang diterima.\n• Wajib menyertakan video unboxing, foto produk, dan nomor pesanan.\n• Produk harus dalam kondisi baru, belum dipakai, belum dicuci, dan label masih lengkap.\n• Tukar ukuran bisa dilakukan selama stok tersedia.\n• Jika kesalahan dari pihak Luvea, ongkir retur ditanggung oleh kami.\n• Jika retur karena alasan pribadi, ongkir retur ditanggung pembeli.\n• Pengajuan retur dilakukan melalui WhatsApp admin resmi.\n• Setelah verifikasi disetujui, retur dapat diproses dalam bentuk tukar barang atau refund.\n• Jika stok pengganti habis, pembeli bisa memilih varian lain, menunggu restock, atau refund.',
  },
  {
    id: 2,
    question: 'Apakah bisa COD?',
    answer: 'Bisa, untuk pembelian melalui marketplace yang mendukung fitur COD seperti Shopee.',
  },
  {
    id: 3,
    question: 'Kapan barang dikirim?',
    answer: 'Pesanan diproses 1x24 jam di hari kerja. Order sebelum jam tertentu biasanya diproses di hari yang sama.',
  },
  {
    id: 4,
    question: 'Apakah bahan piyama ini luntur?',
    answer: 'Tidak mudah luntur. Bahan rayon grade A Luvea sudah melalui proses washing sehingga warna lebih stabil dan tetap nyaman dipakai setelah dicuci berulang dengan perawatan yang tepat.',
  },
  {
    id: 5,
    question: 'Apakah bahannya panas?',
    answer: 'Bahan rayon Luvea terasa adem, lembut, dan breathable, Jadi nyaman dipakai tidur di cuaca hangat.',
  },
];  
