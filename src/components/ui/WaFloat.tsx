import Image from 'next/image';
import styles from './WaFloat.module.css';

export default function WaFloat() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20kak%2C%20mau%20tanya%20piyama%20Luvea%20%F0%9F%98%8A"
      target="_blank"
      rel="noopener"
      className={styles.waFloat}
      aria-label="Chat WhatsApp Admin Luvea"
    >
      <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
      <span>Tanya Admin</span>
    </a>
  );
}
