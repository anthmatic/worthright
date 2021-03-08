import Image from "next/image";

const Logos = () => {
  return (
    <div className="w-full max-w-5xl bg-wlight -mt-8 flex flex-col md:flex-row justify-around items-center align-center p-5 mx-auto">
      <div className="my-4 md:m-0">
        <Image src="/logo_aarp.svg" width={138} height={30} />
      </div>
      <div className="my-4 md:m-0">
        <Image src="/logo_aging_life_care.svg" width={185} height={70} />
      </div>
      <div className="my-4 md:m-0">
        <Image src="/logo_techstars.svg" width={133} height={24} />
      </div>
      <div className="my-4 md:m-0">
        <Image src="/logo_afcpe.svg" width={155} height={57} />
      </div>
    </div>
  );
};

export default Logos;
