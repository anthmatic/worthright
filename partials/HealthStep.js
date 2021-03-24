import { Button,Container, scrollUp } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import Logos from "../partials/Logos"
import Image from "next/image";
import HowHealthySection from "./HowHealthySection";

const HealthStep = () => {
  const [state, setState] = useContext(AppContext);
  const [health, setHealth] = useState(state.health || "");

  const handleContinue = () => {
    scrollUp()
    setState({ ...state, health, currentStep: 6 });
  };

  return (
    <>
     <Container cName="bg-wgray px-5 pb-5">
     <div className="md:flex pb-20">
      <div className="flex-1">
      <h1 className="text-5xl font-serif font-bold pt-4 mb-6">
        Thank you. How are you feeling?
      </h1>
      <p className="text-xl">
        Sometimes we feel great; sometimes we don’t. Unlike popular belief, you
        don’t have to be very ill to get a valuable policy settlement. Health is
        just one factor that goes into the equation.
      </p>
      <div className="block mt-4 mb-5">
        How would a doctor describe your general health?
      </div>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
        <input
          type="radio"
          value="Healthy"
          checked={health === "Healthy"}
          onChange={(e) => {
            setHealth("Healthy");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        <span>Healthy</span>
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
        <input
          type="radio"
          value="Minor conditions"
          checked={health === "Minor conditions"}
          onChange={(e) => {
            setHealth("Minor conditions");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        <span>Minor conditions</span>
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
        <input
          type="radio"
          value="Serious conditions"
          checked={health === "Serious conditions"}
          onChange={(e) => {
            setHealth("Serious conditions");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        <span>Serious conditions</span>
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
        <input
          type="radio"
          value="Terminal conditions"
          checked={health === "Terminal conditions"}
          onChange={(e) => {
            setHealth("Terminal conditions");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        <span>Terminal conditions</span>
      </label>
      <Button id="step6" color="wgold mt-3" text="CONTINUE" handler={handleContinue} disabled={!health} />
      </div>
      <div className="flex-1 text-center md:text-right pt-5">
        <Image src="/step_5.png" width="261" height="283"/>
      </div>
    </div>
      </Container>
      <HowHealthySection />
    </>
  );
};

export default HealthStep;
