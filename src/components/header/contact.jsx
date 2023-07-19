import Telegram from "../../img/Telegram.png";
import Viber from "../../img/Viber.png";
import Whatsapp from "../../img/Whatsapp.png";

const Contact = () => {
  return (
    <>
      <div class='contacts'>
        <span class='contact-text'>+7 555 555-55-55</span>
      </div>
      <div class='icons'>
        <img src={Telegram} alt='Telegram'></img>
        <img src={Viber} alt='Viber'></img>
        <img src={Whatsapp} alt='Whatsapp'></img>
      </div>
    </>
  );
};

export default Contact;
