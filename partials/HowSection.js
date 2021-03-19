import Image from "next/image";
import { Button, scrollUp } from "./global";

const Person = ({ image, heading, text, height, width }) => {
  return (
    <div className="p-2 flex">
        <div style={{width}}>
      <Image src={image} height={height} width={width} layout="fixed" />
      </div>
      <div className="flex-initial ml-4">
        <h3 className="font-bold text-l">{heading}</h3>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
};

const HowSection = () => {
  return (
    <div className="bg-wgray">
    <div className="container py-20">
      <h2 className="text-5xl font-serif font-bold text-center mb-20">
        How it works
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <Person
          image="/icons/coins.png"
          height={59}
          width={93}
          heading="Get your Estimate"
          text="Share some basic information and we'll show you what might be available from your policy today."
        />
        <Person
          image="/icons/talk.png"
          height={86}
          width={86}
          heading="Talk to a Specialist"
          text="Go a bit deeper. Understand the process, time line, and ask questions you want answered in order to feel comfortable. It's all free of charge."
        />
        <Person
          image="/icons/check.png"
          height={78}
          width={88}
          heading="Do what’s best for you"
          text="We're here to educate you on what's possible, and advocate for your best interest - not to sell you."
        />
      </div>
      <div className="text-center mt-10">
      <Button text="GET MY ESTIMATE" id="estimate" color="wgold" align="center" handler={scrollUp} />
      <a href="tel:555-5555" className="underline inline-block mt-4">Or, call us at <a href="tel:(877) 777-2918">(877) 777-2918</a></a>
      </div>
    </div>
    </div>
  );
};

export default HowSection;
