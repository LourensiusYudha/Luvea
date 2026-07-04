import Image from 'next/image';
import { shopeeLink, waLink, TIKTOK_URL, WA_MESSAGES } from '@/data/links';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} id="beli">
      <div className={styles.inner}>
        <p className="eyebrow">Stok terbatas bulan ini</p>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.3rem,5.4vw,4rem)' }}>
          Manjakan dirimu dengan<br /><em>kenyamanan yang pantas</em>
        </h2>
        <p className="section-sub">
          Piyama rayon yang kamu tunggu sudah siap. Pesan hari ini dan
          nikmati gratis ongkir ke seluruh Indonesia.
        </p>
        <div className={styles.btns}>
          <a href={shopeeLink({ medium: 'final-cta', campaign: 'shopee' })} target="_blank" rel="noopener" className="btn btn-shopee btn--xl" aria-label="Beli di Shopee - Luvea Official Store">
            <ChannelIcon src="/images/shopee.png" size={20} />
            Beli di Shopee
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noopener" className="btn btn-tiktok-outline btn--xl">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.27 8.27 0 004.84 1.55V7.07a4.85 4.85 0 01-1.07-.38z"/>
            </svg>
            TikTok Shop
          </a>
          <a href={waLink(WA_MESSAGES.order)} target="_blank" rel="noopener" className="btn btn-wa-outline btn--xl">
            <Image src="/images/whatsapp.png" alt="" width={20} height={20} />
            Chat &amp; Order WA
          </a>
        </div>
      </div>
    </section>
  );
}
