import portada from "../../assets/portada.jpg";
import style from "./Background.module.css";

const Background = () => {
  return (
    <div className={style.background}>
      <img className={style.portada} src={portada} alt="background" />;
    </div>
  );
};

export default Background;
