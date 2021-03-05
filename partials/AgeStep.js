import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";

const AgeStep = () => {
  const [age, setAge] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
    setState({ ...state, age, currentStep: 4 });
  };

  return (
    <>
      <h1 className="text-5xl font-serif font-bold mt-4 mb-6">
        That was easy!
      </h1>
      <p className="text-xl">
        Let’s keep going. Your age is one of the most important factors in
        determining your policy value. As long as you are older than 65, you’ve
        not only acquired a world of wisdom, but you’ll also be able to see if
        you qualify for a settlement!
      </p>
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
