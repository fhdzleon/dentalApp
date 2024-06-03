import style from "./Appoiment.module.css";
import CancelButton from "../CancelButton/CancelButton";

/* eslint-disable react/prop-types */
const Appoiment = ({ turn }) => {
  return (
    <div className={style.contenedor}>
      <p> Fecha: {turn.date}</p>
      <p> Hora: {turn.time} </p>
      <p
        className={turn.status === "cancelada" ? style.cancelado : style.activo}
      >
        {turn.status}
      </p>
      <CancelButton turn={turn} />
    </div>
  );
};

export default Appoiment;
