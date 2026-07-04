'use client';

import { memo } from 'react';
import { IMAGES } from '@/data/images';
import Image from 'next/image';
import { useNav } from '@/hooks/useNav';
import { shopeeLink } from '@/data/links';
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

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
        <div className={styles.logo}>
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

        <a
          href={shopeeLink({ medium: 'nav', campaign: 'beli-sekarang' })}
          target="_blank"
          rel="noopener"
          className={styles.cta}
          aria-label="Beli Sekarang di Shopee"
        >
          Beli Sekarang
        </a>

        <button className={`${styles.burger} ${open ? styles.open : ''}`} onClick={toggle} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.drawer} ${open ? styles.open : ''}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.drawerLink} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.drawerCta}>
          <a
            href={shopeeLink({ medium: 'nav-drawer', campaign: 'beli-shopee' })}
            target="_blank"
            rel="noopener"
            className="btn btn-shopee btn--lg"
            aria-label="Beli di Shopee dari menu navigasi"
          >
            <ChannelIcon src="/images/shopee.png" />
            Beli di Shopee
          </a>
        </div>
      </div>

      <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={close} />
    </>
  );
});

export default Nav;
