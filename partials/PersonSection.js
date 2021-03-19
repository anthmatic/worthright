import Image from "next/image";

const Person = ({ image, heading, text }) => {
  function createMarkup() {
    return { __html: text };
  }
  return (
    <div className="p-2">
      <Image src={image} height={175} width={175} />
      <p className="mt-10 text-lg" dangerouslySetInnerHTML={createMarkup()}></p>
    </div>
  );
};

const PersonSection = ({ title }) => {
  const htmlTitle = () => {
    if (title) {
      return { __html: title };
    }
    return {
      __html:
        '<span class="text-wgold ">What have others done</span> with their policy?',
    };
  };
  return (
    <div className="container py-20 px-5">
      <h2 className="text-5xl font-serif font-bold text-center mb-20" dangerouslySetInnerHTML={htmlTitle()}></h2>
      <div className="grid md:grid-cols-3 gap-24 text-center md:text-left">
        <Person
          image="/people/sally.png"
          text={
            '<span class="text-wgreen">Sally</span> is 80 years old. She purchased her policy 11 years ago to cover estate taxes. With the tax law changes, her family no longer needs the death benefit to pay for estate taxes. We gave Sally an opportunity to create cash now and eliminate her ongoing premium of $79,495 per year.'
          }
        />
        <Person
          image="/people/will.png"
          text={`When <span class="text-wgreen">Will</span> retired ten years ago, he received a large payout from his employer. He used the money to purchase a life insurance policy with a single premium payment of $610,000. Now at age 83, Will no longer needs his policy and would prefer to have additional income. Rather than surrendering his policy, we helped him recover the premium and access the cash he wanted.`}
        />
        <Person
          image="/people/anna.png"
          text={
            '<span class="text-wgreen">Anna</span> Chang and her sons own a successful tile business. 15 years ago they purchased a Key Person policy on Anna with an annual premium of $8,440. Today, the policy has no cash value and to keep the policy they will need to pay a significantly higher premium of $36,906. Knowing that Anna would soon retire, they decided to unlock the market value of Anna’s policy.'
          }
        />
      </div>
    </div>
  );
};

export default PersonSection;
