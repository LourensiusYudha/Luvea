import { tiktokLink } from '@/data/links';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} id="beli" aria-label="Ajakan belanja">
      <div className={styles.inner}>
        <p className={styles.copy}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <rect x="3" y="5" width="18" height="12" rx="1" />
              <path d="M8 20h8" />
            </svg>
          </span>
          Siap belanja piyama Luvea hari ini?
        </p>
        <a
          href={tiktokLink({ medium: 'final-cta', campaign: 'belanja' })}
          target="_blank"
          rel="noopener"
          className={`btn btn-dark btn--rect ${styles.cta}`}
          aria-label="Belanja di TikTok Shop"
        >
          Belanja di TikTok Shop
        </a>
      </div>
    </section>
  );
}
