import { IMAGES } from '@/data/images';
import Image from 'next/image';
import styles from './Advantages.module.css';

const advantages = [
  { image: IMAGES.advantages.kelembutan, title: 'Kelembutan Serat', desc: 'Serat rayon grade A yang sangat halus memanjakan kulit. Tidak kasar, tidak gatal, nyaman dipakai sepanjang malam.' },
  { image: IMAGES.advantages.jahitan, title: 'Ketahanan Jahitan', desc: 'Jahitan 4-benang flatlock yang rapi dan kuat. Anti-pill, tidak mudah sobek walau dicuci berkali-kali.' },
  { image: IMAGES.advantages.kancing, title: 'Kancing Berkualitas', desc: 'Detail kancing kuat yang tidak mudah lepas. Desain yang memudahkan saat menyusui.' },
  { image: IMAGES.advantages.adem, title: 'Kain Adem Dipakai', desc: 'Bahan jatuh alami yang breathable, mengalir mengikuti gerak tubuh. Sirkulasi udara lancar sehingga tidak gerah.' },
];

export default function Advantages() {
  return (
    <section className={styles.section} id="keunggulan">
      <div className={styles.inner}>
        <div className="section-label">Keunggulan</div>
        <h2 className="section-title reveal-up">Tidur nyenyak.<br /><em>Bangun tetap rapi.</em></h2>
        <p className="section-sub reveal-up">Setiap jahitan dirancang khusus untuk kenyamanan wanita Indonesia.</p>

        <div className={styles.grid}>
          {advantages.map((a) => (
            <div key={a.title} className={`${styles.card} reveal-card`}>
              <div className={styles.imgWrap}>
                <Image
                  src={a.image}
                  alt={a.title}
                  width={640}
                  height={360}
                  sizes="(max-width: 768px) 50vw, 320px"
                  loading="lazy"
                />
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
