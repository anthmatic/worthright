import Image from "next/image";

const About = () => {
  return (
    <div className="container py-20 text-center max-w-3xl">
        <Image src="/icons/logo.png" height={79} width={61} />
      <h2 className="text-5xl font-serif font-bold text-center mt-4 mb-6">
       About Worthright
      </h2>
      <p className="text-xl">We're on a mission to answer the fundamental question of how to live and afford a wonderful life as we age. </p>
      <p className="text-xl mt-4">ADDRESS PHONE </p>
      </div>
  );
};

export default About;
