import Image from 'next/image';
import { shopeeLink, STATS } from '@/data/links';
import { IMAGES, testimonialAvatar } from '@/data/images';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './Hero.module.css';

const avatars = [
  { src: testimonialAvatar('maya'), name: 'Maya' },
  { src: testimonialAvatar('nadia'), name: 'Nadia' },
  { src: testimonialAvatar('salsabila'), name: 'Salsabila' },
  { src: testimonialAvatar('anisa'), name: 'Anisa' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`eyebrow ${styles.reveal}`}>Piyama Rayon Grade A</span>

          <h1 className={`${styles.title} ${styles.reveal}`}>
            Adem sepanjang hari,<br />
            <em>anggun</em> setiap saat.
          </h1>

          <p className={`${styles.tagline} ${styles.reveal}`}>
            Rayon grade A yang lembut dan adem, cukup elegan dipakai dari kamar
            sampai menyambut tamu di depan pintu.
          </p>

          <div className={`${styles.ctas} ${styles.reveal}`}>
            <a
              href={shopeeLink({ medium: 'hero', campaign: 'shopee' })}
              target="_blank"
              rel="noopener"
              className="btn btn--lg btn-shopee"
              aria-label="Belanja Sekarang di Shopee"
            >
              <ChannelIcon src="/images/shopee.png" />
              Belanja Sekarang
            </a>
            <a href="#produk" className="btn btn--lg btn-ghost">
              Lihat Koleksi
            </a>
          </div>

          <div className={`${styles.proof} ${styles.reveal}`}>
            <div className={styles.avatars}>
              {avatars.map((a) => (
                <div key={a.name} className={styles.av}>
                  <Image src={a.src} alt={a.name} width={36} height={36} loading="lazy" />
                </div>
              ))}
            </div>
            <div className={styles.proofText}>
              <span className={styles.proofStars}>★★★★★</span>
              <span>
                Dipercaya <strong>{STATS.customers}</strong> pelanggan
              </span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src={IMAGES.hero}
            alt="Piyama Luvea rayon grade A"
            width={1040}
            height={1040}
            priority
            sizes="(max-width: 900px) 560px, 520px"
            className={styles.heroImg}
          />

          <div className={`${styles.floatCard} ${styles.floatIn}`}>
            <span className={styles.floatStars}>★★★★★</span>
            <div>
              <strong>{STATS.rating}/5</strong>
              <small>{STATS.reviews} ulasan asli</small>
            </div>
          </div>

          <div className={`${styles.logoBadge} ${styles.pillIn}`}>
            <Image
              src={IMAGES.logo}
              alt="Luvea"
              width={103}
              height={40}
              style={{ width: 'auto', height: '32px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
