import Link from 'next/link'
import Image from "next/image";

const AboutOverlap = () => {
  return (
    <div className="container pb-20 -mt-12 text-center max-w-3xl">
    <Image src="/icons/logo_icon.png" height={84} width={65} />
      <h2 className="text-5xl font-serif font-bold text-center mt-10 mb-6">
       About Worthright
      </h2>
      <p className="text-xl mb-4">We're on a mission to answer the fundamental question of how to live and afford a wonderful life as we age.</p>
      <Link href="/"><span className="text-xl underline cursor-pointer">Learn more about Worthright &gt;</span></Link>
      </div>
  );
};

export default AboutOverlap;
