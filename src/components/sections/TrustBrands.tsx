import styles from './TrustBrands.module.css';

const brands = [
  'Rayon Grade A',
  'Flatlock',
  'Gratis Ongkir',
  'Retur 7 Hari',
  'TikTok Shop',
];

export default function TrustBrands() {
  return (
    <section className={styles.section} aria-label="Kepercayaan pelanggan">
      <div className={styles.inner}>
        {brands.map((name) => (
          <span key={name} className={`${styles.item} reveal-card`}>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
