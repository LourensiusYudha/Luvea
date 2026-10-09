import { tiktokLink } from '@/data/links';
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

export function SwatchSelector({ swatches, productName }: SwatchSelectorProps) {
  return (
    <div className={styles.swatches}>
      {swatches.map((s) => (
        <a
          key={s.color}
          href={tiktokLink({ medium: 'swatch', campaign: `${productName}-${s.label}`.toLowerCase() })}
          target="_blank"
          rel="noopener"
          className={styles.swatch}
          style={{ backgroundColor: s.color } as React.CSSProperties}
          title={`Belanja ${s.label} di TikTok Shop`}
        />
      ))}
    </div>
  );
}
