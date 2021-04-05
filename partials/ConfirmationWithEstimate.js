import Image from "next/image";

const ConfirmationWithEstimate = ({ amount }) => {
  const AmountRange = () => {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const lowAmount = formatter.format(amount * 0.85);
    const highAmount = formatter.format(amount * 1.15);
    return (
      <>
        {lowAmount} - {highAmount}
      </>
    );
  };
  return (
    <>
      <div className="bg-wgray">
        <div className="container p-20 pb-32 text-center max-w-3xl ">
          <Image src="/pinecone.png" height={291} width={251} />
          <h2 className="text-5xl font-serif font-bold text-center mt-8 mb-8">
            Great News!
          </h2>
          <p className="text-xl mt-8">
            You’ve been waiting for this moment and... your policy may qualify
            for a settlement!
          </p>
          <p className="text-xl mt-8 font-bold">
            Our estimate of your policy’s settlement value is:
          </p>
          <p className="text-4xl mt-16 font-bold">
            {amount ? (
              <AmountRange />
            ) : (
              <>There was an error calculating your settlement</>
            )}
          </p>
        </div>
      </div>
      <div className="container pb-20 -mt-12 text-center max-w-3xl px-5">
        <Image src="/icons/heart.svg" height={84} width={65} />
        <h2 className="text-5xl font-serif font-bold text-center mt-10 mb-6">
          What's next?
        </h2>
        <p className="text-xl mb-4">
          We'll be getting in touch to gather a bit more information and answer any questions or curiosities you might have. If you'd like to get in touch faster - feel free to call us anytime at 1-877-466-5730.
        </p>
      </div>
    </>
  );
};

export default ConfirmationWithEstimate;
