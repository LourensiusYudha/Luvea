import { waLink, WA_MESSAGES } from '@/data/links';
import styles from './SizeGuide.module.css';

const sizes = [
  { label: '110', desc: 'Lingkar Dada 108–112 cm', popular: true },
  { label: '115', desc: 'Lingkar Dada 113–117 cm', popular: false },
  { label: '120', desc: 'Lingkar Dada 118–122 cm', popular: false },
];

export default function SizeGuide() {
  return (
    <section className={styles.section} id="ukuran">
      <div className={styles.inner}>
        <div className="section-label">Panduan Ukuran</div>
        <h2 className="section-title reveal-up">Cari Ukuran yang<br /><em>Tepat untukmu</em></h2>
        <p className="section-sub reveal-up">Pilih ukuran berdasarkan lingkar dada (LD).</p>

        <div className={`${styles.cards} reveal-up`}>
          {sizes.map((s) => (
            <div key={s.label} className={`${styles.card} ${s.popular ? styles.popular : ''}`}>
              {s.popular && <div className={styles.badge}>⭐ Paling Populer</div>}
              <div className={styles.label}>{s.label}</div>
              <div className={styles.data}><span>{s.desc}</span></div>
            </div>
          ))}
        </div>

        <div className={`${styles.tips} reveal-up`}>
          <div className={styles.tip}>
            <span>📏</span>
            <p>Masih ragu? Hubungi admin via <a href={waLink(WA_MESSAGES.size)} target="_blank" rel="noopener">WhatsApp</a> untuk rekomendasi ukuran yang pas.</p>
          </div>
          <div className={styles.tip}>
            <span>🔄</span>
            <p>Ukuran tidak sesuai? Tenang, ada <strong>retur 7 hari</strong> garansi dari Luvea.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
