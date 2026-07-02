import styles from './ProblemAwareness.module.css';

const problems = [
  { title: 'Bahan panas & gerah', desc: 'Tidur jadi tidak nyaman karena bahan polyester yang tidak menyerap keringat.' },
  { title: 'Kain terasa lengket saat tidur', desc: 'Keringat tidak terserap dengan baik sehingga badan jadi lembap dan tidak segar.' },
  { title: 'Cepat kusut & tidak enak dipakai santai', desc: 'Bahan langsung kusut parah, tidak bisa dipakai santai-santai di rumah.' },
  { title: 'Model kurang cantik dipakai di rumah', desc: 'Desain polos dan membosankan, tidak percaya diri meski hanya di rumah sendiri.' },
];

export default function ProblemAwareness() {
  return (
    <section className={styles.section} id="masalah">
      <div className={styles.inner}>
        <div className="section-label">Kamu Pernah Merasakannya?</div>
        <h2 className="section-title reveal-up">Sering merasa piyama<br /><em>tidak nyaman dipakai tidur?</em></h2>
        <div className={`${styles.cards} reveal-up`}>
          {problems.map((p, i) => (
            <div key={p.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{p.title}</strong>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.solution} reveal-up`}>
          <p><strong>Luvea hadir dengan bahan rayon grade A</strong> yang adem, lembut, dan tetap terlihat cantik dipakai di rumah.</p>
        </div>
      </div>
    </section>
  );
}
