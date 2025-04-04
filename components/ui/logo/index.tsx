import Image from 'next/image';

export default function Logo() {
  return <Image src={`/images/logo.svg`} alt="Logo" height={32} width={32} />;
}
