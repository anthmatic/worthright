import Image from "next/image";

const Header = () => {
  return (
    <div className="md:flex justify-between items-center w-full text-center md:text-left">
      <Image src="/logo_full.svg" width={100} height={25} />
      <p className="text-sm">TALK TO AN ADVISOR - CALL (555) 555-5555</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div class="bg-wfooter p-6 text-center md:text-left">
      <Container>
        <div className="md:flex justify-between items-center">
      <Image src="/footer_logo.png" width={128} height={30} />
      <div className="text-wwhite">©2021 Worthright  |   All right reserved</div>
      </div>
      </Container>
    </div>
  );
};

const Container = (props) => {
  return (
    <div className={props.cName}>
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

const Button = ({id, text, handler, color, align, disabled}) => {
  return (
    <button type="button" onClick={handler} id={id} className={`${ disabled && `opacity-30 cursor-not-allowed`} bg-${color ? color : 'wblack'} ${align === 'center' ? "mx-auto" : ""} block text-wwhite py-3 px-6 rounded`}>
      {text}
    </button>
  )
}

export { Header, Footer, Container, Button };
