import styles from './SwatchSelector.module.css';

interface Swatch {
  color: string;
  label: string;
  targetId: string;
}

interface SwatchSelectorProps {
  swatches: Swatch[];
  productName: string;
  activeId?: string;
}

// Info warna yang tersedia, bukan tombol: dulu tiap titik warna adalah link
// ke profil TikTok, jadi klik "pilih warna" malah membuka tab baru.
export function SwatchSelector({ swatches, productName }: SwatchSelectorProps) {
  const names = swatches.map((s) => s.label).join(', ');
  return (
    <div className={styles.swatches}>
      <ul className={styles.dots} aria-label={`Warna ${productName} yang tersedia`}>
        {swatches.map((s) => (
          <li
            key={s.color}
            className={styles.swatch}
            style={{ backgroundColor: s.color } as React.CSSProperties}
            title={s.label}
          >
            <span className={styles.srOnly}>{s.label}</span>
          </li>
        ))}
      </ul>
      <span className={styles.names} aria-hidden="true">{names}</span>
    </div>
  );
}
