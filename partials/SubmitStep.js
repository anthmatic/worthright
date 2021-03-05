import { Button } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import { useRouter } from "next/router";

const SubmitStep = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useContext(AppContext);
  const router = useRouter();

  const handleContinue = () => {
    setState({ ...state, email, phone, currentStep: 7 });
    router.push("/confirmation");
  };

  return (
    <>
      {" "}
      <h1 className="text-5xl font-serif font-bold mt-4 mb-6">
        We’ve got your estimate <span className="text-wgold">ready.</span>
      </h1>
      {/* <p className="text-xl">
    Sometimes we feel great; sometimes we don’t. Unlike popular belief, you
    don’t have to be very ill to get a valuable policy settlement. Health is
    just one factor that goes into the equation.
  </p> */}
      <label className="block">
        Let us know how to send your estimate to you.
      </label>
      <input
        type="text"
        value={email}
        placeholder="Email address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-1 border border-black py-3 px-4 bg-wwhite"
      />
      <input
        type="text"
        value={phone}
        placeholder="Phone number"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        className="border-1 border border-black py-3 px-4 bg-wwhite"
      />
      <Button color="wgold" text="Contine" handler={handleContinue} />
    </>
  );
};

export default SubmitStep;
