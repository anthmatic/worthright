import { useState, useContext } from "react";
import { Button } from "./global";
import { AppContext } from "../screens/AppContext";
const Choice = () => {
  const [goal, setGoal] = useState("");
  const [state, setState] = useContext(AppContext);
  const handleSubmit = () => {
    setState({ goal, currentStep: 1 });
  };
  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="border-1 border border-black py-3 px-4 bg-wwhite w-full"
        placeholder="I would pay for..."
        value={goal}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
      />
      <button
        type="button"
        className="border-1 border border-wgold bg-wgold text-wwhite block py-4 px-6 whitespace-nowrap"
        onClick={handleSubmit}
      >
        GET STARTED
      </button>
    </div>
  );
};
export default Choice;
