import Image from "next/image";

const Blurb = ({ image, heading, text }) => {
  return (
    <div className="p-2">
      <Image src={image} height={108} width={115} />
      <h3 className="pt-6 pb-3 text-xl">{heading}</h3>
      <p className="font-light">{text}</p>
    </div>
  );
};

const HowHealthySection = () => {
  return (

    <div className="container py-20 text-center md:text-left">
        {/* <h2 className="text-5xl font-serif font-bold text-center mb-4">How healthy am I?</h2>
        <p className="text-lg  mb-20 max-w-2xl mx-auto text-center">Your health is important, not just to you and your family, but for valuing your policy too. Want to know one thing we’ve learned over our years of experience? Your policy may very well hold more value today than you think.</p> */}
      <div className="grid md:grid-cols-4 gap-8">
        <Blurb
          image="/icons/100-heart.png"
          heading="Medical expenses"
          text="Rising healthcare costs in addition to treatments, therapy, and medication expenses can quickly pile up."
        />
        <Blurb image="/icons/75-heart.png" heading="Education tuition costs" text="Many parents still support adult children or grandchildren, especially when it comes to paying for their school tuition." />
        <Blurb
          image="/icons/50-heart.png"
          heading="Trip of a lifetime"
          text="Has travel always excited you? Seeing a new place near or far is a life-changing moment and one to be cherished forever. "
        />
        <Blurb
          image="/icons/25-heart.png"
          heading="Family vacations"
          text="Sometimes there’s extra cash in a policy that isn’t needed any longer. Don’t let it lapse. Create an experience for your family."
        />
      </div>
    </div>

  );
};

export default HowHealthySection;
