import Link from 'next/link'
import Image from "next/image";

const AboutOverlap = () => {
  return (
    <div className="container pb-20 -mt-12 text-center max-w-3xl px-5">
    <Image src="/icons/logo_icon.png" height={84} width={65} />
      <h2 className="text-5xl font-serif font-bold text-center mt-10 mb-6">
      About Worthright Finance
      </h2>
      <p className="text-xl mb-4">Worthright is on a mission to help families live and afford a wonderful life as they age. We're here to illuminate and advocate for options you may not know you have.</p>
      {/* <Link href="/"><span className="text-xl underline cursor-pointer">Learn more about Worthright &gt;</span></Link> */}
      </div>
  );
};

export default AboutOverlap;
