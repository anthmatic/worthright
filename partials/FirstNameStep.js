import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";

const FirstNameStep = () => {
  const [name, setName] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
    setState({ ...state, name, currentStep: 2 });
  };

  return (
    <><h1 className="text-5xl font-serif font-bold mt-4 mb-6">Your policy settlement could go a long way to help pay for {state.goal ? state.goal : "??????"}!</h1>
      <p className="text-xl">Let’s get started. We’ll do our best to see if we can help you find a way to pay for that!</p>
      <label className="block">What is your first name?</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border-1 border border-black py-3 px-4 bg-wwhite"
      />
      <Button color="wgold" text="Contine" handler={handleContinue} />
    </>
  );
};

export default FirstNameStep;
