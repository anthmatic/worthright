import Image from "next/image";

const ConfirmationNoEstimate = () => {
  return (
    <div className="bg-wgray">
      <div className="container p-20 pb-32 text-center max-w-3xl ">
        <Image src="/pinecone.png" height={291} width={251} />
        <h2 className="text-5xl font-serif font-bold text-center mt-8 mb-8">
        Good News! 
        </h2>
        <p className="text-xl mt-8">
        We've sent this, as well as some other helpful information to the email you provided. A specialist will reach out and give you an opportunity to ask whatever questions you'd like and run through what might be next in the process. 
        </p>
        <p className="text-xl mt-8">
        If you have questions in the meantime, feel free to call us at (877) 777-2918.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationNoEstimate;
