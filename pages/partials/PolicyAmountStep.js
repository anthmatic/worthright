import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const PolicyAmountStep = () => {
    const [amount, setAmount] = useState("");
    const [unknown, setUnknown] = useState(false);
    const [state, setState] = useContext(AppContext);

  const handleContinue = () => {
      const actualAmount = unknown ? "unknown" : amount;
    setState({ ...state, amount: actualAmount, currentStep: 5 });
  };

  return (
    <>
      <label className="block">What is your policy face amount?</label>
      <input
        type="text"
        value={amount}
        placeholder="Enter your policy face amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        className="border-1 border border-black py-3 px-4 bg-wwhite"
      />
        <label className="border-1 border border-black py-3 px-4 bg-wwhite block">
        <input
          type="checkbox"

          checked={unknown === true}
          onChange={(e) => {
            setUnknown(!unknown);
          }}
          className="border-1 border border-black py-3 px-4 bg-wwhite"
        />
        I don't know
      </label>
      <Button color="wgold" text="Contine" handler={handleContinue} />
    </>
  );
};

export default PolicyAmountStep;
