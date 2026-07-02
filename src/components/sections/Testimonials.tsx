'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { useCarousel } from '@/hooks/useCarousel';
import { STATS } from '@/data/links';
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

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className={styles.card}>
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
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const {
    trackRef,
    index,
    displayIndex,
    goTo,
    enableTransition,
    dragOffset,
    handleTransitionEnd,
    gap,
  } = useCarousel(testimonials.length, 4500);

  const slides = useMemo(
    () => [
      testimonials[testimonials.length - 1],
      ...testimonials,
      testimonials[0],
    ],
    [testimonials],
  );

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

  const baseOffset = cardWidth ? -(index * (cardWidth + gap)) : 0;
  const translateX = baseOffset + dragOffset;

  return (
    <section className={styles.section} id="testimoni">
      <div className="section-label">Kata Mereka</div>
      <h2 className="section-title reveal-up">Pembeli Nyata,<br /><em>Cerita Nyata</em></h2>

      <div className={`${styles.summary} reveal-up`}>
        <div className={styles.summaryStars}>⭐⭐⭐⭐⭐</div>
        <div className={styles.summaryScore}><strong>{STATS.rating}</strong><span>/5</span></div>
        <div className={styles.summaryCount}>dari <b>{STATS.reviews}</b> ulasan di Shopee</div>
      </div>

      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Ulasan pelanggan Luvea"
      >
        <div
          className={`${styles.track} ${enableTransition ? styles.trackAnimated : ''}`}
          ref={trackRef}
          style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === displayIndex ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ulasan ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
