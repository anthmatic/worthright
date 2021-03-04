import {useContext} from 'react';
import {AppContext} from './AppContext';
import AgeStep from '../partials/AgeStep';
import FirstNameStep from '../partials/FirstNameStep';
import GenderStep from '../partials/GenderStep';
import { Header, Footer, Container } from "../partials/global";
import PolicyAmountStep from '../partials/PolicyAmountStep';



const Step1 = () => {
    return (
        <div>Step 1 
            <FirstNameStep />
        </div>
    )
}
const Step2 = () => {
    return (
        <div>Step 2 <GenderStep /></div>
    )
}
const Step3 = () => {
    return (
        <div>Step 3 <AgeStep /></div>
    )
}
const Step4 = () => {
    return (
        <div>Step 4 <PolicyAmountStep /></div>
    )
}
const Step5 = () => {
    return (
        <div>Step 5 TBD</div>
    )
}
const Step6 = () => {
    return (
        <div>Step 6 TBD</div>
    )
}


const Flow = () => {
    const [state, setState] = useContext(AppContext);

  return <div>
       <Container cName="bg-wgray px-5 py-5">
        <Header />
      </Container>
      {
        {
          1: <Step1 />,
          2: <Step2 />,
          3: <Step3 />,
          4: <Step4 />,
          5: <Step5 />,
          6: <Step6 />,

        }[state.currentStep]
      }
      <Footer />
  </div>;
};

export default Flow;
