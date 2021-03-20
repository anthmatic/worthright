import { Button, Container, scrollUp } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import Logos from "../partials/Logos";
import Image from "next/image";

const AgeStep = () => {
  const [state, setState] = useContext(AppContext);
  const [age, setAge] = useState(state.age || "");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleContinue = () => {
    if (!disabled) {
      scrollUp()
      setState({ ...state, age, currentStep: 4 });
    }
  };

  const validateAge = (newAge) => {
    setAge(newAge);
    if (isNaN(newAge) || newAge < 65) {
      setError(true);
      setDisabled(true);
    } else {
      setError(false);
      setDisabled(false);
    }
  };

  return (
    <>
      <Container cName="bg-wgray px-5 pb-5">
        <div className="md:flex pb-20">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold pt-4 mb-6">
              That was easy!
            </h1>
            <p className="text-xl">
              Let’s keep going. Your age is one of the most important factors in
              determining how much you could earn from your policy. As long as
              you are older than 65, you’ve not only acquired a world of wisdom,
              but you’ll also be able to see if you qualify for a settlement!
            </p>
            <label className="block mt-4 mb-5">What is your age?</label>
            <input
              type="text"
              value={age}
              placeholder="Enter your age"
              onChange={(e) => {
                validateAge(e.target.value);
              }}
              className="border-1 border border-black py-3 px-4 bg-wwhite w-3/4"
            />
            {error && (
              <span className="block text-sm text-red pt-1">
                Please enter an age greater than 64
              </span>
            )}
            <Button
              color="wgold mt-3"
              text="CONTINUE"
              id="step4"
              handler={handleContinue}
              disabled={disabled}
            />
          </div>
          <div className="flex-1 text-center md:text-right pt-5">
            <Image src="/step_3.png" width="296" height="352" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AgeStep;
