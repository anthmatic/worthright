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
          heading="Get your estimate."
          text="Tell us what success looks like and we’ll show you how to achieve it."
        />
        <Person
          image="/icons/talk.png"
          height={86}
          width={86}
          heading="Talk to a Worthright Specialist."
          text="We’ll ask some questions and show you the complete financial situation now, and how to achieve that going forward."
        />
        <Person
          image="/icons/check.png"
          height={78}
          width={88}
          heading="Do what’s best for you."
          text="Worthright shows you hidden sources of funding and can help you convert them to cash now, so you can achieve your goals."
        />
      </div>
      <div className="text-center mt-10">
      <Button text="GET MY ESTIMATE" id="estimate" color="wgold" align="center" handler={scrollUp} />
      <a href="tel:555-5555" className="underline inline-block mt-4">Or, call us at (877) 777-2918</a>
      </div>
    </div>
    </div>
  );
};

export default HowSection;
