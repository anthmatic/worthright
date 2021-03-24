import { Button, Container, scrollUp } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import Logos from "../partials/Logos";
import Image from "next/image";
import PersonSection from "./PersonSection";
import NumberFormat from "react-number-format";
import { debounce } from "debounce";

const PolicyAmountStep = () => {
  const [state, setState] = useContext(AppContext);
  const [amount, setAmount] = useState(state.amount);
  const [unknown, setUnknown] = useState(state.unknown || false);
  const [error, setError] = useState(false);

  const handleContinue = () => {
    scrollUp();
    setState({ ...state, amount, unknown, currentStep: 5 });
  };

  const validateAmount = (newAmount) => {
    setAmount(newAmount);
    if (newAmount && newAmount < 50000) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const isDisabled = () => {
    return (!unknown && !amount) || error;
  };
  return (
    <>
      <Container cName="bg-wgray px-5 pb-5">
        <div className="md:flex pb-20">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold pt-4 mb-6">
              Sharpening the pencil…
            </h1>
            <p className="text-xl">
              Every insurance policy has a face amount, or the amount that is
              paid to your beneficiaries. You might have to look this up - it’s
              inside your policy documents. No rush. We’re here, even if you
              have to call your insurance company.
            </p>
            <label className="block mt-4 mb-5">
              What is your policy face amount?
            </label>
            <NumberFormat
              value={amount}
              prefix={"$"}
              onValueChange={(values) => {
                const { formattedValue, value } = values;
                debounce(validateAmount(value), 200);
              }}
              thousandSeparator={true}
              placeholder="Enter your policy face amount"
              className="border-1 border border-black py-3 px-4 bg-wwhite  w-3/4 mb-2"
            />
            <label className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2 radio">
              <input
                type="checkbox"
                checked={unknown === true}
                onChange={(e) => {
                  setUnknown(!unknown);
                }}
                className="border-1 border border-black py-3 px-4 bg-wwhite"
              />
              <span>I don't know</span>
            </label>
            {error && (
              <span className="block text-sm text-red pt-1">
                The policy face amount must be at least $50,000 or more.
              </span>
            )}
            <Button
              color="wgold mt-3"
              id="step5"
              text="CONTINUE"
              handler={handleContinue}
              disabled={isDisabled()}
            />
          </div>
          <div className="flex-1 text-center md:text-right pt-5">
            <Image src="/step_4.png" width="204" height="252" />
          </div>
        </div>
      </Container>
      <Logos />
      <PersonSection title='How we’ve helped others, <span class="text-wgold">like you.</span>' />
    </>
  );
};

export default PolicyAmountStep;
