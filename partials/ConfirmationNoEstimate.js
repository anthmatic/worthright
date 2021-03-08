import Image from "next/image";

const ConfirmationNoEstimate = () => {
  return (
    <div className="bg-wgray">
      <div className="container p-20 pb-32 text-center max-w-3xl ">
        <Image src="/pinecone.png" height={291} width={251} />
        <h2 className="text-5xl font-serif font-bold text-center mt-8 mb-8">
          Good news!
        </h2>
        <p className="text-xl">
          You may qualify for a settlement!
        </p>
        <p className="text-xl mt-8">
          <strong>Call us at (877) 777-2918.</strong> We can help you better understand your
          options, so you can make the right choice for you.{" "}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationNoEstimate;
