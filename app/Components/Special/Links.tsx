import Link from 'next/link'
import Image from 'next/image'; 

export interface BuyCharge {
  Price: number
  Name: string
}

type SocialLinkProps = {
  platform: 'youtube' | 'instagram' | 'twitter' | 'github' | 'threads';
  profile: string;
};

export function SocialLink({ platform, profile }: SocialLinkProps) {
  const urls: { [key in SocialLinkProps['platform']]: string } = {
    youtube: `https://www.youtube.com/${profile}`,
    instagram: `https://www.instagram.com/${profile}`,
    twitter: `https://www.twitter.com/${profile}`,
    github: `https://www.github.com/${profile}`,
    threads: `https://www.threads.com/${profile}`,
  };

  return <Link href={urls[platform]}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</Link>;
}


export function Home() {
  return <Link href="/" className="">
    <Image src="/AdagIO.png" className="h-[170px]  max-w-full rounded-lg" alt="" width={170}
  height={30}/></Link>
}

export function BuyLink({ Name, Price }: { Name: string; Price: number }) {
  return <Link href={`/${Name}`}>${Price}</Link>;
}




