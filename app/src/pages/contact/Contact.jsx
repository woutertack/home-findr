import style from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignHanging } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            src={require("../../images/contactMap.png")}
            alt="rent"
          />
        </div>

        <div className={style.info}>
          <h1 className={style.title}>
            Home Findr
            <FontAwesomeIcon icon={faSignHanging} className={style.iconLogo} />
          </h1>
          <h2 className={style.email}>
            <span className={style.span}>Email: </span>
            homefindr@hotmail.com
          </h2>
          <h2 className={style.phone}>
            <span className={style.span}>Phone: </span>
            +32 123 45 67 89
          </h2>
          <h2 className={style.address}>
            <span className={style.span}>Address: </span>
            Papegaaistraat 42, 9000 Gent, Belgium
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
