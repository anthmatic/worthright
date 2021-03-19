import { useState, useContext } from "react";
import { Button, scrollUp } from "./global";
import { AppContext } from "../screens/AppContext";
const Choice = () => {
  const [goal, setGoal] = useState("placeholder");
  const [state, setState] = useContext(AppContext);
  const handleSubmit = () => {
    scrollUp()
    setState({ goal, currentStep: 1 });
  };
  return (
    <div className="flex mb-4">
      <div className="relative">
      <select
        className="border-1 border border-black py-3 px-4 bg-wwhite w-full appearance-none h-full"
        value={goal}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
      >
        <option disabled="true" value="placeholder">
          I would...
        </option>
        <option value="Pay for medical expenses">
          Pay for medical expenses
        </option>
        <option value="Take a family vacation">Take a family vacation</option>
        <option value="Pay for long-term care expenses">
          Pay for long-term care expenses
        </option>
        <option value="Take a once-in-a-lifetime trip">
          Take a once-in-a-lifetime trip
        </option>
        <option value="Pay for educational expenses">
          Pay for educational expenses
        </option>
        <option value="Buy a vacation house">Buy a vacation house</option>
        <option value="Reduce credit card debt">Reduce credit card debt</option>
        <option value="Reduce mortgage debt">Reduce mortgage debt</option>
        <option value="Leave an inheritance for my children">
          Leave an inheritance for my children
        </option>
      </select>
      <img src="/icons/down_chevron.png" className="absolute right-5 top-1/2 transform -translate-y-1/2" />
      </div>
      <button
        type="button"
        className="border-1 border border-wgold bg-wgold text-wwhite block py-4 px-6 whitespace-nowrap"
        onClick={handleSubmit}
        disabled={goal == "placeholder"}
      >
        GET STARTED
      </button>
    </div>
  );
};
export default Choice;
