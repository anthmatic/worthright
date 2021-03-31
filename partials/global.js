import Image from "next/image";

const Header = ({ handleLogoClick }) => {
  return (
    <div className="md:flex justify-between items-center w-full text-center md:text-left">
      <Image
        src="/logo_full.svg"
        width={100}
        height={25}
        onClick={handleLogoClick}
      />
      <p className="text-sm">
        TALK TO A SPECIALIST - CALL{" "}
        <a href="tel:(877) 466-5730">(877) 466-5730</a>
      </p>
    </div>
  );
};

const OldFooter = () => {
  return (
    <div class="bg-wfooter p-6 text-center md:text-left">
      <Container>
        <div className="md:flex justify-between items-center">
          <Image src="/footer_logo.png" width={128} height={30} />
          <div className="text-wwhite">
            ©2021 Worthright | All right reserved
          </div>
        </div>
      </Container>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer px-2">
      <div className="footer-block">
        <a href="#" className="footer-logo w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/5e5435c7173a85582beb1f7f/5e561fd324830b24ad0a0125_Worthright_Logo.png"
            alt=""
            className="logo-footer"
          />
        </a>
        <div className="footer-link-parent">
          {/* <div className="footer-title">
            <a href="https://www.worthright.com/families" className="link">
              For Families
            </a>
          </div>
          <div className="footer-title">
            <a href="/geriatric-care-managers" className="link">
              For Providers
            </a>
          </div>
          <div className="footer-title">
            <a href="/resources" className="link">
              Resources
            </a>
          </div>
          <div className="footer-title">
            <a href="/about-us" className="link">
              About
            </a>
          </div> */}
          <div className="footer-title">
            <a
              href="https://www.worthright.com/privacy-policy"
              className="link"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      {/* <div className="footer-block horizontal">
        <div className="card-name small">Made with Empathy ❤</div>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/worthright"
            target="_blank"
            className="social-link w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/5e5435c7173a85582beb1f7f/5e5660f824830b2d0d0b8a8b_Facebook.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/company/worthright/"
            target="_blank"
            className="social-link w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/5e5435c7173a85582beb1f7f/5e6931ce7de02f589a922ef6_linkedin.png"
              alt=""
            />
          </a>
        </div>
      </div> */}
      <div className="footer-block horizontal">
        <p className="footer-text">
          Worthright is a{" "}
          <a
            href="https://www.bbb.org/us/ma/boston/profile/financial-services/worthright-inc-0021-538119"
            target="_blank"
            className="footer-link"
          >
            {" "}
            Better Business Bureau Accredited Business
          </a>{" "}
          and has achieved the{" "}
          <a
            href="https://aws.amazon.com/security/"
            target="_blank"
            className="footer-link"
          >
            {" "}
            Amazon Web Services Security Best Practices Certification
          </a>
        </p>
        <div className="footer-social-icons">
          <a
            href="https://www.bbb.org/us/ma/boston/profile/financial-services/worthright-inc-0021-538119"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/5e5435c7173a85582beb1f7f/5fa1d4fed273b350fdf242a8_bbb2.jpeg"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 12vw, 100px"
              srcset="
          https://uploads-ssl.webflow.com/5e5435c7173a85582beb1f7f/5fa1d4fed273b350fdf242a8_bbb2-p-500.jpeg  500w,
          https://uploads-ssl.webflow.com/5e5435c7173a85582beb1f7f/5fa1d4fed273b350fdf242a8_bbb2.jpeg       1024w
        "
              alt=""
              className="bbb"
            />
          </a>
        </div>
      </div>
      <div className="footer-block vertical">
        <div className="footer-text">
          Worthright Finance is an experience from Worthright, an independent
          technology company. We are neither a life settlement broker nor a life
          settlement provider. We will help you understand your options and
          refer you to the most appropriate licensed entity that will meet your
          needs.
        </div>
      </div>
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

const Button = ({ id, text, handler, color, align, disabled }) => {
  return (
    <button
      type="button"
      onClick={handler}
      id={id}
      className={`${disabled && `opacity-30 cursor-not-allowed`} bg-${
        color ? color : "wblack"
      } ${
        align === "center" ? "mx-auto" : ""
      } block text-wwhite py-3 px-6 rounded`}
    >
      {text}
    </button>
  );
};

const scrollUp = () => {
  window.scrollTo(0, 0);
};

export { Header, Footer, Container, Button, scrollUp };
