import styles from './BannerStrip.module.css';

const messages = [
  'GARANSI 100%',
  'BEST SELLER',
  'NEW COLLECTION',
  'FREE ONGKIR SE-INDONESIA',
  'RETUR 7 HARI',
  'GARANSI 100%',
  'BEST SELLER',
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
