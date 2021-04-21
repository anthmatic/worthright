import { Header, Footer, Container } from "../partials/global";
import About from "../partials/About";
import {useContext} from 'react';
import {AppContext} from './AppContext';
import { useRouter } from "next/router";
import ConfirmationWithEstimate from "../partials/ConfirmationWithEstimate";
import AboutOverlap from "../partials/AboutOverlap";

const ConfirmationScreen = () => {
    const [state, setState] = useContext(AppContext);
    const router = useRouter();
  return (
    <>
      <Container cName="bg-wgray px-5 py-5">
        <Header handleLogoClick={() =>{router.push('/')}} />
      </Container>
        <ConfirmationWithEstimate amount={state.policyValue}/>
      <AboutOverlap />
      <Footer />
    </> 
  );
};

export default ConfirmationScreen;
