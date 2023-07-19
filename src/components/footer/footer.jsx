import Company from "./company";
import Contact from "./contact";
import "./footer.css";
import Menu from "./menu";

const Footer = () => {
  return (
    <div className='footer'>
      <Company />
      <Menu />
      <Contact />
    </div>
  );
};

export default Footer;
