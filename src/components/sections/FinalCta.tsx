import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} id="beli">
      <div className={`${styles.deco} ${styles.deco1}`} />
      <div className={`${styles.deco} ${styles.deco2}`} />
      <div className={styles.inner}>
        <p className={`eyebrow reveal-up`}>✦ Limited Stock — Jangan Sampai Kehabisan ✦</p>
        <h2 className="section-title reveal-up" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)' }}>
          Waktunya Manjakan<br /><em>Dirimu Sendiri</em>
        </h2>
        <p className="section-sub reveal-up">
          Piyama impianmu sudah menunggu. Pesan sekarang dan rasakan tidur berkualitas bersama Luvea.<br />
          <strong style={{ color: 'var(--pink-500)' }}>🎁 Gratis ongkir ke seluruh Indonesia!</strong>
        </p>
        <div className={`${styles.btns} reveal-up`}>
          <a href="https://shopee.co.id/luvea.official" target="_blank" rel="noopener" className="btn btn-shopee btn--xl">
            <img src="/images/shopee.png" alt="Shopee" /> Beli di Shopee
          </a>
          <a href="https://tiktok.com/@luvea.official" target="_blank" rel="noopener" className="btn btn-tiktok btn--xl">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.27 8.27 0 004.84 1.55V7.07a4.85 4.85 0 01-1.07-.38z"/>
            </svg>
            TikTok Shop
          </a>
          <a href="https://wa.me/6281234567890?text=Halo%20kak%2C%20saya%20mau%20pesan%20piyama%20Luvea%20%F0%9F%98%8A" target="_blank" rel="noopener" className="btn btn-wa btn--xl">
            <img src="/images/whatsapp.png" alt="WA" /> Chat &amp; Order WA
          </a>
        </div>
      </div>
    </section>
  );
}
