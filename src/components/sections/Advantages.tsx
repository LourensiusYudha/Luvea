import Image from 'next/image';
import styles from './Advantages.module.css';

const advantages = [
  { image: '/images/kelembutan_serat.png', title: 'Kelembutan Serat', desc: 'Serat cotton-rayon yang sangat halus memanjakan kulit. Tidak kasar, tidak gatal, nyaman dipakai sepanjang malam.' },
  { image: '/images/ketahanan_jahitan.png', title: 'Ketahanan Jahitan', desc: 'Jahitan 4-benang flatlock yang rapi dan kuat. Anti-pill, tidak mudah sobek walau dicuci berkali-kali.' },
  { image: '/images/kancing_premium.png', title: 'Kancing Premium', desc: 'Detail kancing berkualitas tinggi yang tidak mudah lepas. Desain yang memudahkan saat menyusui.' },
  { image: '/images/kain_adem.png', title: 'Kain Adem Dipakai', desc: 'Bahan jatuh alami yang breathable, mengalir mengikuti gerak tubuh. Sirkulasi udara lancar sehingga tidak gerah.' },
];

export default function Advantages() {
  return (
    <section className={styles.section} id="keunggulan">
      <div className={styles.inner}>
        <div className="section-label">— Kenapa Luvea? —</div>
        <h2 className="section-title reveal-up">Dibuat dengan<br /><em>Cinta & Detail</em></h2>
        <p className="section-sub reveal-up">Setiap jahitan dirancang khusus untuk kenyamanan wanita Indonesia.</p>

        <div className={styles.grid}>
          {advantages.map((a) => (
            <div key={a.title} className={`${styles.card} reveal-card`}>
              <div className={styles.imgWrap}>
                <Image src={a.image} alt={a.title} width={320} height={180} />
              </div>
              <div className={styles.body}>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
