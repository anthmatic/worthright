import Image from "next/image";

const Blurb = ({ image, heading, text }) => {
  return (
    <div className="p-2">
      <Image src={image} height={108} width={115} />
      <h3 className="pt-6 pb-3 text-xl text-wgreen font-bold">{heading}</h3>
      <p className="font-light text-lg">{text}</p>
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
          heading="Healthy"
          text="Physically, socially, and mentally fit, with the absence of disease."
        />
        <Blurb image="/icons/75-heart.png" heading="Minor conditions" text="Chronic but manageable conditions such as diabetes or hypertension." />
        <Blurb
          image="/icons/50-heart.png"
          heading="Serious conditions"
          text="Severe conditions such as cancer or coronary artery disease (CAD)."
        />
        <Blurb
          image="/icons/25-heart.png"
          heading="Terminal conditions"
          text="Irreversible conditions that severely reduce life expectancy such as late stage cancer."
        />
      </div>
    </div>

  );
};

export default HowHealthySection;
