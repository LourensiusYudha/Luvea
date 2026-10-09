'use client';

import { memo, useCallback, useRef } from 'react';
import { IMAGES } from '@/data/images';
import Image from 'next/image';
import { useNav } from '@/hooks/useNav';
import { ADMIN_URL, tiktokLink, waLink, WA_MESSAGES } from '@/data/links';
import ChannelIcon from '@/components/ui/ChannelIcon';
import styles from './Nav.module.css';

const Nav = memo(function Nav() {
  const links = [
    { href: '#produk', label: 'Produk' },
    { href: '#ukuran', label: 'Ukuran' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#testimoni', label: 'Ulasan' },
    { href: '#faq', label: 'FAQ' },
  ];

  const { open, scrolled, toggle, close } = useNav();
  const tapCountRef = useRef(0);
  const resetTimerRef = useRef<number | null>(null);

  const handleLogoSecretTap = useCallback(() => {
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    tapCountRef.current += 1;
    if (tapCountRef.current >= 3) {
      tapCountRef.current = 0;
      window.location.href = ADMIN_URL;
      return;
    }
    resetTimerRef.current = window.setTimeout(() => {
      tapCountRef.current = 0;
    }, 800);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
        <div className={styles.logo} onClick={handleLogoSecretTap}>
          <Image
            src={IMAGES.logo}
            alt="Luvea"
            width={103}
            height={40}
            priority
            style={{ width: 'auto', height: '100%' }}
          />
        </div>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        {/* Desktop: satu jalan ke toko yang selalu terlihat setelah hero lewat */}
        <a
          href={tiktokLink({ medium: 'nav', campaign: 'tiktok' })}
          target="_blank"
          rel="noopener"
          className={styles.navCta}
        >
          Belanja di TikTok Shop
        </a>

        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={toggle}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={close} />

      <div className={`${styles.drawer} ${open ? styles.open : ''}`} id="mobile-menu" aria-hidden={!open}>
        <div className={styles.drawerHeader}>
          <Image
            src={IMAGES.logo}
            alt="Luvea"
            width={103}
            height={40}
            style={{ width: 'auto', height: '38px' }}
          />
          <button className={styles.drawerClose} onClick={close} aria-label="Tutup menu">
            <span />
            <span />
          </button>
        </div>

        <div className={styles.drawerIntro}>
          <span>Pilih bagian</span>
          <p>Temukan koleksi, ukuran, keunggulan, dan ulasan Luvea.</p>
        </div>

        <ul className={styles.drawerList}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.drawerLink} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.drawerCta}>
          <a
            href={tiktokLink({ medium: 'nav-drawer', campaign: 'tiktok' })}
            target="_blank"
            rel="noopener"
            className="btn btn-tiktok btn--lg"
            aria-label="Belanja di TikTok Shop dari menu navigasi"
            onClick={close}
          >
            <ChannelIcon src="/images/tiktok.png" />
            Belanja di TikTok Shop
          </a>
          <a
            href={waLink(WA_MESSAGES.order)}
            target="_blank"
            rel="noopener"
            className="btn btn-wa-outline btn--lg"
            aria-label="Tanya via WhatsApp dari menu navigasi"
            onClick={close}
          >
            <ChannelIcon src="/images/whatsapp.png" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
});

export default Nav;
