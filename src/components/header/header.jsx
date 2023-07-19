import HeaderNavBar from "./headerNavBar";
import Logo from "./logo";
import Contact from "./contact";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <HeaderNavBar />
        <Contact />
      </header>
    </>
  );
};

export default Header;
