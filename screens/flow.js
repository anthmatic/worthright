import { useContext } from "react";
import { AppContext } from "./AppContext";
import AgeStep from "../partials/AgeStep";
import FirstNameStep from "../partials/FirstNameStep";
import GenderStep from "../partials/GenderStep";
import { Header, Footer, Container } from "../partials/global";
import PolicyAmountStep from "../partials/PolicyAmountStep";
import HealthStep from "../partials/HealthStep";
import SubmitStep from "../partials/SubmitStep";
import Steps from "../partials/Steps";

const Flow = () => {
  const [state, setState] = useContext(AppContext);

  const setCurrentStep = (step) => {
    setState({...state, currentStep: step})
  }
  return (
    <div className="">
      <Container cName="bg-wgray px-5 py-5">
        <Header />
        <Steps currentStep={state.currentStep} setCurrentStep={setCurrentStep} />
      </Container>
      {
        {
          1: <FirstNameStep />,
          2: <GenderStep />,
          3: <AgeStep />,
          4: <PolicyAmountStep />,
          5: <HealthStep />,
          6: <SubmitStep />,
        }[state.currentStep]
      }

      <Footer />
    </div>
  );
};

export default Flow;
