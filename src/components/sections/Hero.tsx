'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { shopeeLink, STATS } from '@/data/links';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './Hero.module.css';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const avatars = [
  { src: '/images/testimonials/maya.jpg', name: 'Maya' },
  { src: '/images/testimonials/nadia.jpg', name: 'Nadia' },
  { src: '/images/testimonials/salsabila.jpg', name: 'Salsabila' },
  { src: '/images/testimonials/anisa.jpg', name: 'Anisa' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.span className="eyebrow" variants={item}>
            Piyama Rayon Grade A
          </motion.span>

          <motion.h1 className={styles.title} variants={item}>
            Adem sepanjang hari,<br />
            <em>anggun</em> setiap saat.
          </motion.h1>

          <motion.p className={styles.tagline} variants={item}>
            Rayon grade A yang lembut dan adem, cukup elegan dipakai dari kamar
            sampai menyambut tamu di depan pintu.
          </motion.p>

          <motion.div className={styles.ctas} variants={item}>
            <a
              href={shopeeLink({ medium: 'hero', campaign: 'shopee' })}
              target="_blank"
              rel="noopener"
              className="btn btn--lg btn-shopee"
            >
              <ChannelIcon src="/images/shopee.png" />
              Belanja Sekarang
            </a>
            <a href="#produk" className="btn btn--lg btn-ghost">
              Lihat Koleksi
            </a>
          </motion.div>

          <motion.div className={styles.proof} variants={item}>
            <div className={styles.avatars}>
              {avatars.map((a) => (
                <div key={a.name} className={styles.av}>
                  <Image src={a.src} alt={a.name} width={36} height={36} />
                </div>
              ))}
            </div>
            <div className={styles.proofText}>
              <span className={styles.proofStars}>★★★★★</span>
              <span>
                Dipercaya <strong>{STATS.customers}</strong> pelanggan
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className={styles.imgFrame}>
            <Image
              src="/images/sekar.png"
              alt="Piyama Luvea rayon grade A"
              width={520}
              height={650}
              priority
              className={styles.heroImg}
            />
          </div>

          <motion.div
            className={styles.floatCard}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <span className={styles.floatStars}>★★★★★</span>
            <div>
              <strong>{STATS.rating}/5</strong>
              <small>{STATS.reviews} ulasan asli</small>
            </div>
          </motion.div>

          <motion.div
            className={styles.pricePill}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
          >
            <small>Mulai dari</small>
            <strong>Rp119.000</strong>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
