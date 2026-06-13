import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: number;
  stars: number;
  text: string;
  variant: string;
  name: string;
  location: string;
  date: string;
  helpful: number;
  avatarUrl: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  currentIndex: number;
  trackRef: React.RefObject<HTMLDivElement | null>;
  goTo: (idx: number) => void;
}

const gap = 16;

function Stars({ count }: { count: number }) {
  if (count === 5) return <span className={styles.starsFull}>★★★★★</span>;
  return (
    <span className={styles.stars4}>
      {'★'.repeat(count)}
      <span className={styles.starEmpty}>{'★'.repeat(5 - count)}</span>
    </span>
  );
}

export default function Testimonials({ testimonials, currentIndex, trackRef, goTo }: TestimonialsProps) {
  const [cardWidth, setCardWidth] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      const card = track.firstElementChild as HTMLElement | null;
      if (card) setCardWidth(card.offsetWidth);
    }
    measure();
    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measure);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [trackRef]);

  const translateX = cardWidth ? -(currentIndex * (cardWidth + gap)) : 0;

  return (
    <section className={styles.section} id="testimoni">
      <div className="section-label">— Kata Mereka —</div>
      <h2 className="section-title reveal-up">Ribuan Pelanggan<br /><em>Sudah Merasakan</em></h2>

      <div className={`${styles.summary} reveal-up`}>
        <div className={styles.summaryStars}>⭐⭐⭐⭐⭐</div>
        <div className={styles.summaryScore}><strong>4.9</strong><span>/5</span></div>
        <div className={styles.summaryCount}>dari <b>3.200+</b> ulasan</div>
      </div>

      <div className={styles.carousel}>
        <div
          className={styles.track}
          ref={trackRef}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.top}>
                <Stars count={t.stars} />
                <span className={styles.verified}>✓ Terverifikasi</span>
              </div>
              <p className={styles.quote}>{t.text}</p>
              <div className={styles.variant}>{t.variant}</div>
              <div className={styles.footer}>
                <Image
                  src={t.avatarUrl}
                  alt={t.name}
                  width={36}
                  height={36}
                  className={styles.avatar}
                />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location} • {t.date}</span>
                </div>
              </div>
              <div className={styles.helpful}>👍 {t.helpful} orang merasa ini membantu</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
