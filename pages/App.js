import { Header, Footer, Container } from "./partials/global";
import Hero from "./partials/Hero";
import Logos from "./partials/Logos";
import IconSection from "./partials/IconSection";
import ImageBlock from "./partials/ImageBlock";
import PersonSection from "./partials/PersonSection";
import HowSection from "./partials/HowSection";
import About from "./partials/About";
import {useContext} from 'react';
import {AppContext} from './AppContext';
import Flow from "./flow";

const App = () => {
    const [state, setState] = useContext(AppContext);
  return (
       state.currentStep === 0 ?
    <>
      <Container cName="bg-wgray px-5 py-5">
        <Header />
      </Container>
      <Container cName="bg-wgray px-5 py-5">
        <Hero />
      </Container>
      <Logos />
      <IconSection />
      <ImageBlock />
      <PersonSection />
      <HowSection />
      <About />
      <Footer />
    </> 
    : 
    <Flow />
  );
};

export default App;
