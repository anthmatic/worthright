import { Button, Container, scrollUp } from "./global";
import { useState, useContext } from "react";
import { AppContext } from "../screens/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies, { set } from "js-cookie";
import axios from "axios";
import NumberFormat from "react-number-format";

const SubmitStep = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useContext(AppContext);
  const router = useRouter();

  const getPolicyCalculation = () => {
    const AVERAGE_RATE = {
      66: 5.84,
      67: 5.95,
      68: 6.17,
      69: 6.48,
      70: 6.74,
      71: 6.96,
      72: 7.2,
      73: 7.42,
      74: 7.62,
      75: 7.91,
      76: 8.24,
      77: 8.64,
      78: 9.09,
      79: 9.51,
      80: 10.08,
      81: 10.32,
      82: 10.98,
      83: 11.33,
      84: 11.91,
      85: 12.72,
      86: 13.11,
      87: 13.94,
      88: 15.2,
      89: 15.88,
      90: 17.05,
      91: 18.8,
      92: 19.99,
      93: 21.26,
      94: 22.59,
      95: 24.02,
    };
    const HURDLE_RATE = 5.5 / 100;
    const FACE_AMOUT_PERCENT = 1 / 100;
    const averageRate = AVERAGE_RATE[state.age] / 100;
    const amount = state.amount || 0;
    const mathVal =
      ((averageRate - HURDLE_RATE) * amount - amount * FACE_AMOUT_PERCENT) /
      averageRate;
    return mathVal.toFixed();
  };

  const handleContinue = async () => {
    const policyValue = parseInt(getPolicyCalculation());
    scrollUp();
    setState({ ...state, email, phone, policyValue });
    await handleFormSubmit(policyValue);
  };

  const submitData = () => {
    return <div>{JSON.stringify()}</div>;
  };

  const handleFormSubmit = async (policyValue) => {
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
          value: state.amount || 0,
        },
        {
          name: "kosmos___policy_face_amount__don_t_know_",
          value: state.unknown || "false",
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
          value: phone,
        },
        {
          name: "email",
          value: email,
        },
      ],
      context: {
        hutk: Cookies.get("hubspotutk"),
        pageUri: "https://worthrightfinance.com/",
        pageName: "Worthright Finance",
      },
    };
    const URL = `https://api.hsforms.com/submissions/v3/integration/submit/7142976/f80ca816-881a-4cfc-9396-a2d156891252`;
    // try {
    //   await axios.post(URL, params);
    // } catch (e) {
    //   const errorData = e.response.data;

    //   if (
    //     errorData.errors.some((error) => {
    //       return error.errorType === "INVALID_EMAIL";
    //     })
    //   ) {
    //     setErrorMessage("Please enter a valid email address");
    //   } else {
    //     setErrorMessage("There was an error processing this form");
    //   }
    //   setError(true);
    //   return;
    // }

    if (policyValue > 0) {
      router.push("/estimate");
    } else {
      router.push("/confirmation");
    }
  };
  return (
    <>
      <Container cName="bg-wgray px-5 pb-5">
        <div className="md:flex pb-20">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold pt-4 mb-6">
              We've got some helpful information for you regarding your policy
            </h1>
            <label className="block mt-4 mb-5">Where should we send it?</label>
            <input
              type="text"
              value={email}
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-1 border border-black py-3 px-4 bg-wwhite w-3/4 mb-2"
            />
            <NumberFormat
              format="+1 (###) ###-####"
              mask="_"
              value={phone}
              onValueChange={(values) => {
                const { formattedValue } = values;
                setPhone(formattedValue);
              }}
              placeholder="Phone number"
              className="border-1 border border-black py-3 px-4 bg-wwhite block w-3/4 mb-2"
            />
            <Button
              color="wgold mt-3"
              id="step7"
              text="SEE MY RESULTS"
              handler={handleContinue}
              disabled={!email}
            />
            {error && errorMessage}
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
