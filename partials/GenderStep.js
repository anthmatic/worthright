import { Button, Container, scrollUp } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import Logos from "../partials/Logos";
import Image from "next/image";

const GenderStep = () => {
  const [state, setState] = useContext(AppContext);
  const [gender, setGender] = useState(state.gender || "");
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (!gender) {
      return setError(true);
    } else {
      scrollUp()
      setState({ ...state, gender, currentStep: 3 });
    }
  };

  return (
    <>
      <Container cName="bg-wgray px-5 pb-5">
        <div className="md:flex pb-20">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold pt-4 mb-6">
              Hi {state.name ? state.name : "there"}!
            </h1>
            <p className="text-xl">
              Taking the guesswork out of how to maintain a full life as we age
              means knowing what the options are. Let’s find out how much value
              your life insurance policy holds today.
            </p>
            <div className="block mt-4 mb-5">What is your gender?</div>
            <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => {
                  setGender("male");
                }}
                className="border-1 border border-black py-3 px-4 bg-wwhite"
              />
              <span> Male</span>
            </label>
            <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => {
                  setGender("female");
                }}
                className="border-1 border border-black py-3 px-4 bg-wwhite "
              />
              <span>Female</span>
            </label>
            <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
              <input
                type="radio"
                value="omit"
                checked={gender === "omit"}
                onChange={(e) => {
                  setGender("omit");
                }}
                className="border-1 border border-black py-3 px-4 bg-wwhite"
              />
              <span>Prefer not to disclose</span>
            </label>
            <Button
              color="wgold mt-3"
              id="step3"
              disabled={!gender}
              text="CONTINUE"
              handler={handleContinue}
            />
          </div>
          <div className="flex-1 text-center md:text-right pt-5">
            <Image src="/step_2.png" width="348" height="465" />
          </div>
        </div>
      </Container>
      <Logos />
      <Container>
        <div className="pt-20 pb-32 text-center max-w-4xl mx-auto px-5">
          <h2 className="text-5xl font-serif font-bold mb-10">Did you know?</h2>
          <p className="text-xl leading-normal mb-10">
            It’s even possible to keep some a portion of your policy’s benefit
            intact, just in case you want to leave it for your beneficiaries.{" "}
          </p>
          <Image src="/flags.png" width="419" height="134" />
        </div>
      </Container>
    </>
  );
};

export default GenderStep;
