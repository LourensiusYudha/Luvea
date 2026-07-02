import styles from './ComparisonTable.module.css';

const rows = [
  { feature: 'Bahan', biasa: '✗ Polyester panas', luvea: '✓ Rayon grade A adem' },
  { feature: 'Kenyamanan', biasa: '✗ Gerah & lengket', luvea: '✓ Menyerap keringat, sejuk' },
  { feature: 'Jahitan', biasa: '✗ Standar biasa', luvea: '✓ 4-benang flatlock rapi' },
  { feature: 'Tampilan', biasa: '✗ Polos & biasa', luvea: '✓ Cantik dipakai di rumah' },
  { feature: 'Dipakai Santai', biasa: '✗ Kurang cocok', luvea: '✓ Sangat cocok' },
];

export default function ComparisonTable() {
  return (
    <section className={styles.section} id="perbandingan">
      <div className={styles.inner}>
        <div className="section-label">Perbandingan Produk</div>
        <h2 className="section-title reveal-up">Luvea vs<br /><em>Piyama Biasa</em></h2>
        <p className="section-sub reveal-up">Lihat sendiri perbedaannya. Luvea dibuat beda, bukan piyama biasa.</p>

        <div className={`${styles.wrap} reveal-up`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Fitur</th>
                <th className={styles.colBiasa}>Piyama Biasa</th>
                <th className={styles.colLuvea}>Luvea</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature}>
                  <td>{r.feature}</td>
                  <td className={styles.colBiasa}>{r.biasa}</td>
                  <td className={styles.colLuvea}>{r.luvea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
