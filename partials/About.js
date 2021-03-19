import Image from "next/image";

const About = () => {
  return (
    <div className="container py-20 text-center max-w-3xl px-5">
        <Image src="/icons/logo.png" height={79} width={61} />
      <h2 className="text-5xl font-serif font-bold text-center mt-4 mb-6">
       About Worthright
      </h2>
      <p className="text-xl">Worthright is on a mission to help families live a wonderful life as they age. We're here to advocate for you and the options you may not know you have - we're not here to sell.</p>
      {/* <p className="text-xl mt-4">2 Avenue de Lafayette
4th Floor
Boston, MA 02111 | 
Phone: <a href="tel:(877) 777-2918">(877) 777-2918</a></p> */}
      </div>
  );
};

export default About;
