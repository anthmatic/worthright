import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const AgeStep = () => {
  const [age, setAge] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
    setState({ ...state, age, currentStep: 4 });
  };

  return (
    <>
      <label className="block">What is your age?</label>
      <input
        type="text"
        value={age}
        placeholder="Enter your age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        className="border-1 border border-black py-3 px-4 bg-wwhite"
      />
      <Button color="wgold" text="Contine" handler={handleContinue} />
    </>
  );
};

export default AgeStep;
