import styles from './FeatureStrip.module.css';

const features = [
  {
    title: 'Rayon Grade A',
    desc: 'Serat halus yang adem dan menyerap keringat, nyaman dipakai sepanjang malam.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-2.5 2-4 4.2-4 6.5A4 4 0 0 0 12 13a4 4 0 0 0 4-3.5C16 7.2 14.5 5 12 3Z" />
        <path d="M7 13c-1.6 1.3-2.5 2.8-2.5 4.2A2.6 2.6 0 0 0 7 20a2.6 2.6 0 0 0 2.5-2.8" />
        <path d="M17 13c1.6 1.3 2.5 2.8 2.5 4.2A2.6 2.6 0 0 1 17 20a2.6 2.6 0 0 1-2.5-2.8" />
      </svg>
    ),
  },
  {
    title: 'Jahitan Flatlock',
    desc: 'Jahitan rapi dan kuat yang tidak mengganjal di kulit dan awet dicuci berkali-kali.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M4 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="20" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: 'Gratis Ongkir',
    desc: 'Pengiriman gratis ke seluruh Indonesia langsung dari TikTok Shop.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h11v9H3z" />
        <path d="M14 9h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </svg>
    ),
  },
  {
    title: 'Retur 7 Hari',
    desc: 'Ukuran kurang pas? Ada garansi retur 7 hari supaya kamu belanja tanpa ragu.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 2.3 5.6" />
        <path d="M4 20v-4h4" />
      </svg>
    ),
  },
];

export default function FeatureStrip() {
  return (
    <section className={styles.section} aria-label="Keunggulan singkat Luvea">
      <div className={styles.inner}>
        {features.map((f) => (
          <div key={f.title} className={`${styles.item} reveal-card`}>
            <span className={styles.icon} aria-hidden="true">{f.icon}</span>
            <div className={styles.text}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
