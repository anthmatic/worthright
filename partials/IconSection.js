import Image from "next/image";

const Blurb = ({ image, heading, text }) => {
  return (
    <div className="p-2">
      <Image src={image} height={84} width={150} />
      <h3 className="text-wgreen font-bold py-2text-xl">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

const IconSection = () => {
  return (

    <div className="container py-20">
        <h2 className="text-5xl font-serif font-bold text-center mb-20"><span className="text-wgold ">What can I do</span> if I sell my policy?</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <Blurb
          image="/icons/medical_expenses.svg"
          heading="Medical expenses"
          text="Rising healthcare costs in addition to treatments, therapy, and medication expenses can quickly pile up."
        />
        <Blurb image="/icons/education.svg" heading="Education tuition costs" text="Many parents still support adult children or grandchildren, especially when it comes to paying for their school tuition." />
        <Blurb
          image="/icons/trip.svg"
          heading="Trip of a lifetime"
          text="Has travel always excited you? Seeing a new place near or far is a life-changing moment and one to be cherished forever. "
        />
        <Blurb
          image="/icons/vacation.svg"
          heading="Family vacations"
          text="Sometimes there’s extra cash in a policy that isn’t needed any longer. Don’t let it lapse. Create an experience for your family."
        />
      </div>
    </div>

  );
};

export default IconSection;
