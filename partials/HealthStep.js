import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";

const HealthStep = () => {
  const [health, setHealth] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
    setState({ ...state, health, currentStep: 6 });
  };

  return (
    <>
      <h1 className="text-5xl font-serif font-bold mt-4 mb-6">
        Thank you. How are you feeling?
      </h1>
      <p className="text-xl">
        Sometimes we feel great; sometimes we don’t. Unlike popular belief, you
        don’t have to be very ill to get a valuable policy settlement. Health is
        just one factor that goes into the equation.
      </p>
      <div className="block">
        How would a doctor describe your general health?
      </div>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="healthy"
          checked={health === "healthy"}
          onChange={(e) => {
            setHealth("healthy");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Healthy
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="minor"
          checked={health === "minor"}
          onChange={(e) => {
            setHealth("minor");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Minor conditions
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="serious"
          checked={health === "serious"}
          onChange={(e) => {
            setHealth("serious");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Serious conditions
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="terminal"
          checked={health === "terminal"}
          onChange={(e) => {
            setHealth("terminal");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Terminal conditions
      </label>
      <Button color="wgold" text="Contine" handler={handleContinue} />
    </>
  );
};

export default HealthStep;
