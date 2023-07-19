import Telegram from "../../img/Telegram.png";
import Viber from "../../img/Viber.png";
import Whatsapp from "../../img/Whatsapp.png";

const Contact = () => {
  return (
    <div className='contact'>
      <span className='footer-header'>КОНТАКТЫ</span>
      <div className='footer-text'>
        <span className='nubmer'>+7 555 555-55-55</span>
        <div className='footer-img'>
          <img src={Telegram} alt='Telegram'></img>
          <img src={Viber} alt='Viber'></img>
          <img src={Whatsapp} alt='Whatsapp'></img>
        </div>
        <span className='address'>Москва, Путевой проезд 3с1, к 902</span>
      </div>
      <div className='corp'>
        <span className='corp-text'>©WELBEX 2022. Все права защищены.</span>{" "}
        <br />
        <span className='corp-pol'>Политика конфиденциальности</span>
      </div>
    </div>
  );
};

export default Contact;
