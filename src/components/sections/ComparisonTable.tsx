import styles from './ComparisonTable.module.css';

const rows = [
  {
    feature: 'Bahan',
    biasa: 'Polyester panas, cepat gerah',
    luvea: 'Rayon grade A adem sepanjang hari',
  },
  {
    feature: 'Kenyamanan',
    biasa: 'Lengket & gerah saat tidur',
    luvea: 'Menyerap keringat, tetap sejuk',
  },
  {
    feature: 'Jahitan',
    biasa: 'Standar, gampang lepas setelah cuci',
    luvea: 'Jahitan rapi & awet dipakai harian',
  },
  {
    feature: 'Tampilan',
    biasa: 'Polos, kurang enak dilihat',
    luvea: 'Elegan, cantik dipakai di rumah',
  },
  {
    feature: 'Dipakai Santai',
    biasa: 'Kurang nyaman seharian',
    luvea: 'Sangat cocok untuk di rumah',
  },
];

export default function ComparisonTable() {
  return (
    <section className={styles.section} id="perbandingan">
      <div className={styles.inner}>
        <div className="section-label">Perbandingan Produk</div>
        <h2 className="section-title reveal-up">
          Luvea vs<br /><em>Piyama Polyester Murah</em>
        </h2>
        <p className="section-sub reveal-up">
          Bandingkan sendiri — Luvea dirancang untuk kenyamanan sehari-hari di rumah,
          bukan sekadar piyama murah.
        </p>

        <div className={`${styles.wrap} reveal-up`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Fitur</th>
                <th className={styles.colBiasa}>Piyama Polyester Murah</th>
                <th className={styles.colLuvea}>Luvea</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature}>
                  <td>{r.feature}</td>
                  <td className={styles.colBiasa}>
                    <span className={styles.iconBad} aria-hidden="true">✗</span>
                    {r.biasa}
                  </td>
                  <td className={styles.colLuvea}>
                    <span className={styles.iconGood} aria-hidden="true">✓</span>
                    {r.luvea}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
