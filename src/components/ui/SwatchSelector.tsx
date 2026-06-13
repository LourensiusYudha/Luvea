import styles from './SwatchSelector.module.css';

interface Swatch {
  color: string;
  label: string;
  targetId: string;
  shopeeUrl: string;
}

interface SwatchSelectorProps {
  swatches: Swatch[];
  activeId?: string;
}

export function SwatchSelector({ swatches }: SwatchSelectorProps) {
  return (
    <div className={styles.swatches}>
      {swatches.map((s) => (
        <a
          key={s.color}
          href={s.shopeeUrl}
          target="_blank"
          rel="noopener"
          className={styles.swatch}
          style={{ backgroundColor: s.color } as React.CSSProperties}
          title={`Beli ${s.label} di Shopee`}
        />
      ))}
    </div>
  );
}
