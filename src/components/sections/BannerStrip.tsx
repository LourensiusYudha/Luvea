import styles from './BannerStrip.module.css';

const messages = [
  'Gratis Ongkir se-Indonesia',
  'Retur 7 Hari',
  'Rayon Grade A',
  'Gratis Ongkir se-Indonesia',
  'Retur 7 Hari',
  'Rayon Grade A',
];

export default function BannerStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className={styles.item}>{msg}</span>
        ))}
      </div>
    </div>
  );
}
