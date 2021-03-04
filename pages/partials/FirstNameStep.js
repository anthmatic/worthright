import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const FirstNameStep = () => {
  const [name, setName] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
    setState({ ...state, name, currentStep: 2 });
  };

  return (
    <>
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
