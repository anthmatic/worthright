import { Button, Container } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";

const SubmitStep = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useContext(AppContext);
  const router = useRouter();

  const handleContinue = async () => {
    setState({ ...state, email, phone, currentStep: 7 });
    await handleFormSubmit();
    router.push("/confirmation");
  };

  const submitData = () => {
    return <div>{JSON.stringify()}</div>;
  };
  const handleFormSubmit = async () => {

    const params = {
      fields: [
        {
          name: "kosmos___age",
          value: state.age,
        },
        {
          name: "kosmos___gender",
          value: state.gender,
        },
        {
          name: "kosmos___how_are_you_feeling_",
          value: state.health,
        },
        {
          name: "kosmos___policy_face_amount",
          value: state.amount | 0,
        },
        {
          name: "kosmos___policy_face_amount__don_t_know_",
          value: state.unkown || false,
        },
        {
          name: "intent___what_would_you_do_with_extra_funds_",
          value: state.goal,
        },
        {
          name: "firstname",
          value: state.name,
        },
        {
          name: "phone",
          value: state.phone,
        },
        {
          name: "email",
          value: state.email,
        },
      ],
      context: {
        hutk: Cookies.get("hubspotutk"),
        pageUri: "www.example.com/page",
        pageName: "Example page",
      }
    };
const URL = `https://api.hsforms.com/submissions/v3/integration/submit/7142976/f80ca816-881a-4cfc-9396-a2d156891252`;
    const response = await axios.request({
      url: URL,
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(params),
    });
    console.log(response)
  };
  return (
    <>
      <Container cName="bg-wgray px-5 pb-5">
        <div className="md:flex pb-20">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold pt-4 mb-6">
              We’ve got your estimate <span className="text-wgold">ready.</span>
            </h1>
            <label className="block mt-4 mb-5">
              Let us know how to send your estimate to you.
            </label>
            <input
              type="text"
              value={email}
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-1 border border-black py-3 px-4 bg-wwhite w-3/4 mb-2"
            />
            <input
              type="text"
              value={phone}
              placeholder="Phone number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2"
            />
            <Button
              color="wgold mt-3"
              text="SEE MY RESULTS"
              handler={handleContinue}
              disabled={!email || !phone}
            />
          </div>
          <div className="flex-1 text-center md:text-right pt-5">
            <Image src="/step_1.png" width="503" height="152" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SubmitStep;
