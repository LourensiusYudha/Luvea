import Image from 'next/image';

interface ChannelIconProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function ChannelIcon({ src, alt = '', size = 18 }: ChannelIconProps) {
  return (
    <span className="channelIcon">
      <Image src={src} alt={alt} width={size} height={size} />
    </span>
  );
}
