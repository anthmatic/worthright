import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";

const GenderStep = () => {
  const [gender, setGender] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
    setState({ ...state, gender, currentStep: 3 });
  };

  return (
    <>
      <h1 className="text-5xl font-serif font-bold mt-4 mb-6">
        Hi {state.name ? state.name : "there"}!
      </h1>
      <p className="text-xl">
        Taking the guesswork out of how to maintain a full life as we age means
        knowing what the options are. Let’s find out how much value your life
        policy holds today.
      </p>
      <div className="block">What is your gender?</div>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender("male");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Male
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender("female");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Female
      </label>
      <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="radio"
          value="omit"
          checked={gender === "omit"}
          onChange={(e) => {
            setGender("omit");
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        Prefer not to say
      </label>
      <Button color="wgold" text="Contine" handler={handleContinue} />
    </>
  );
};

export default GenderStep;
