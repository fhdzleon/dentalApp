import TurnButton from "../TurnButton/TurnButton";
import style from "./Promo.module.css";

/* eslint-disable react/prop-types */
const Promo = ({ promo }) => {
  return (
    <div className={style.container}>
      <img src={promo.img} alt="promo" />
      <h3>{promo.title}</h3>
      <p>{promo.promo}</p>
      <p>{promo.validity}</p>
      <TurnButton text="¡Aprovecha la promoción! Agenda tu cita" />
    </div>
  );
};

export default Promo;
