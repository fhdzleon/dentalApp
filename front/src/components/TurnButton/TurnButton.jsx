/* eslint-disable react/prop-types */
import style from "./TurnButton.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TurnButton = ({ text }) => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useNavigate();

  const handleTurnButton = () => {
    if (!isLogged) {
      return alert("Debes iniciar sesion o registrarte para reservar una cita");
    } else {
      navigate("/newturn");
    }
  };

  return (
    <button onClick={handleTurnButton} className={style.button}>
      {text}
    </button>
  );
};

export default TurnButton;
