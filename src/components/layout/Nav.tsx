'use client';

import Image from 'next/image';
import { useNav } from '@/hooks/useNav';
import styles from './Nav.module.css';

const links = [
  { href: '#produk', label: 'Produk' },
  { href: '#ukuran', label: 'Ukuran' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#testimoni', label: 'Ulasan' },
];

export default function Nav() {
  const { open, scrolled, toggle, close } = useNav();

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
        <div className={styles.logo}>
          <Image src="/images/Luvea.png" alt="Luvea" width={103} height={40} priority />
        </div>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <a href="https://shopee.co.id/luvea.official" target="_blank" rel="noopener" className={styles.cta}>
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
          <a href="https://shopee.co.id/luvea.official" target="_blank" rel="noopener" className="btn btn-shopee btn--lg">
            <Image src="/images/shopee.png" alt="Shopee" width={18} height={18} />
            Beli di Shopee
          </a>
        </div>
      </div>

      <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={close} />
    </>
  );
}
