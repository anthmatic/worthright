import { Button, Container, scrollUp } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import Logos from "../partials/Logos";
import Image from "next/image";
import IconSection from "./IconSection";

const FirstNameStep = () => {
  const [state, setState] = useContext(AppContext);
  const [name, setName] = useState(state.name || "");

  const handleContinue = () => {
    scrollUp()
    setState({ ...state, name, currentStep: 2 });
  };

  return (
    <>
      <Container cName="bg-wgray px-5 pb-5">
        <div className="md:flex pb-20">
          <div className="flex-1">
            <h1 className="text-3xl font-serif font-bold pt-4 mb-6">
              Your policy settlement could go a long way to help{" "}
              <span className="lowercase">
                {state.goal ? state.goal : "??????"}
              </span>
              .
            </h1>
            <p className="text-xl">
              Let’s get started. We’ll do our best to see if we can help you
              find a way to pay for that!
            </p>
            <label className="block mt-4 mb-5">What is your first name?</label>
            <input
              type="text"
              value={name}
              placeholder="First name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border-1 border border-black py-3 px-4 bg-wwhite w-3/4"
            />
            <Button
              color="wgold mt-3"
              id="step2"
              text="CONTINUE"
              handler={handleContinue}
              disabled={!name}
            />
          </div>
          <div className="flex-1 text-center md:text-right pt-5">
            <Image src="/step_1.png" width="503" height="152" />
          </div>
        </div>
      </Container>
      <Logos />
      <IconSection title={`<span class="text-wgold ">What would you do</span>  with extra funds today?`} />
    </>
  );
};

export default FirstNameStep;
