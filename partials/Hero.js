import Choice from "./Choice";


const Hero = () => {
  return (
    <div className="relative" id="top">
        <img
          src="/image_block/sally.png"
          className="md:absolute right-1/2 top-0 max-h-full pb-10 mr-20"
        />
      <div className="md:w-1/2 ml-auto py-32">
        <h1 className="font-serif font-bold text-5xl pb-8 leading-tight ">
          Sally received <span className="text-wgold">$227,500</span> to pay for
          expenses <span className="text-wgold">today.</span>
        </h1><p className="text-xl mb-10">Selling a life insurance policy that was no longer needed saved her almost $80,000 per year in premium expenses. We can show you what your policy is worth, too. </p>
        <p className="text-2xl font-bold  pb-8">What would you do with some extra funds? </p>
       <Choice />
        <p className="text-sm italic">Privacy Statement: Worthright will not share your information, unless you ask us to.</p>
      </div>
    </div>
  );
};

export default Hero;
