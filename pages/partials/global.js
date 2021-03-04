import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <Image src="/worthright.svg" width={86} height={21} />
      <ul className="ml-10 items-baseline space-x-4 hidden md:flex">
        <li>FOR FAMILIES</li>
        <li>PROFESSIONALS</li>
        <li>SOLUTIONS</li>
        <li>ABOUT</li>
        <li>RESOURCES</li>
      </ul>
      <a href="">Contact</a>
    </div>
  );
};

const Footer = () => {
  return (
    <div class="bg-wfooter p-6">
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

const Button = ({id, text, handler, color, align}) => {
  return (
    <button type="button" onClick={handler} id={id} className={`bg-${color ? color : 'wblack'} ${align === 'center' ? "mx-auto" : ""} block text-wwhite py-3 px-6 rounded`}>
      {text}
    </button>
  )
}

export { Header, Footer, Container, Button };
