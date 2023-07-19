import LogoImg from "../../img/LogoImg.png";
import LogoText from "../../img/LogoText.png";

const Logo = () => {
  return (
    <>
      <div class='logo'>
        <div className='logo-img'>
          <img src={LogoImg} alt='Лого' className='logo-1'></img>
          <img src={LogoText} alt='Лого' className='logo-2'></img>
        </div>
        <span class='logo-text'>
          крупный интегратор CRM в России и ещё 8 странах
        </span>
      </div>
    </>
  );
};

export default Logo;
