import Image from 'next/image';
import type { Testimonial } from '@/data/testimonials';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function Stars({ count }: { count: number }) {
  if (count === 5) return <span className={styles.starsFull}>★★★★★</span>;
  return (
    <span className={styles.stars4}>
      {'★'.repeat(count)}
      <span className={styles.starEmpty}>{'★'.repeat(5 - count)}</span>
    </span>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const t = testimonial;
  return (
    <div className={`testi-card ${styles.card}`}>
      <div className={styles.top}>
        <Stars count={t.stars} />
        <span className={styles.verified}>✓ Terverifikasi</span>
      </div>
      <p className={styles.quote}>{t.text}</p>
      <div className={styles.variant}>{t.variant}</div>
      <div className={styles.footer}>
        <Image src={t.avatarUrl} alt={t.name} width={36} height={36} className={styles.avatar} />
        <div>
          <strong>{t.name}</strong>
          <span>{t.location} • {t.date}</span>
        </div>
      </div>
      <div className={styles.helpful}>👍 {t.helpful} orang merasa ini membantu</div>
    </div>
  );
}
