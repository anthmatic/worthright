import { Button, Container } from "./global";

const ImageBlock = () => {
  return (
    <>
      <div className="bg-wyellow relative overflow-x-hidden">
        <img
          src="/image_block/william.png"
          className="md:absolute right-1/2 bottom-0 max-h-full pt-10"
        />
        <Container>
          <div className="md:w-1/2 ml-auto md:pt-48 pt-10 pb-32 px-6 md:pl-28 ">
            <h1 className="font-bold text-3xl pb-8 ">
              How much is my life insurance policy{" "}
              <span className="text-wgold">worth?</span>
            </h1>
            <p className="text-lg pb-8">
              Your life policy is your property, just like your house. The value
              of your life insurance policy depends on many factors, but all
              things being equal, the value of a life policy today is
              significantly more valuable when converted to a life settlement,
              compared to letting the policy lapse, or selling it back to the
              insurance company.
              <br />
              <br />
              <span className="text-wgreen font-bold">William</span> received
              $638,700 by selling his policy, which was $375,000 more than he
              would have received surrendering it.
            </p>
            <Button text="GET YOUR ESTIMATE" id="estimate" />
          </div>
        </Container>
      </div>
      <div className="bg-wlightgreen relative overflow-x-hidden">
        <img
          src="/image_block/anna.png"
          className="md:absolute left-1/2 top-0 max-h-full pb-10"
        />
        <Container>
          <div className="md:w-1/2 mr-auto pb-48 pt-10 px-6 md:pt-32 md:pr-28">
            <h1 className="font-bold text-3xl pb-8 ">
              Is is <span className="text-wgold">safe</span> to sell my life
              policy?
            </h1>
            <p className="text-lg ">
              Worthright takes your saftey and privacy seriously. We only work
              with accredited, reputable partners. As long as your policy meets
              these two requirements, your policy may qualify for a settlement:
            </p>
            <ul className="text-lg  list-disc list-inside py-4">
              <li>Your policy is worth more than $100,000 face value</li>
              <li>You are at least 65 years old</li>
            </ul>
            <p className="text-lg  pb-8">
              <span className="text-wgreen font-bold">Anna</span> unlocked
              $64,000 in value from a life policy that had no cash value. She
              used it to reinvest in her family’s business, freeing up
              much-needed capital that her sons were able to use today.
            </p>
            <Button text="GET YOUR ESTIMATE" id="estimate" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ImageBlock;
