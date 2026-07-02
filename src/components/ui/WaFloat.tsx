import Image from 'next/image';
import { waLink, WA_MESSAGES } from '@/data/links';
import styles from './WaFloat.module.css';

export default function WaFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.ask)}
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
