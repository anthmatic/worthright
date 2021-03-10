import { Header, Footer, Container } from "../partials/global";
import About from "../partials/About";
import {useContext} from 'react';
import {AppContext} from './AppContext';
import ConfirmationNoEstimate from "../partials/ConfirmationNoEstimate";
import AboutOverlap from "../partials/AboutOverlap";

const ConfirmationScreen = () => {
    const [state, setState] = useContext(AppContext);
  return (
    <>
      <Container cName="bg-wgray px-5 py-5">
        <Header />
      </Container>
        <ConfirmationNoEstimate />
      <AboutOverlap />
      <Footer />
    </> 
  );
};

export default ConfirmationScreen;
