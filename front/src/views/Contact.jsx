import style from "./Contact.module.css";
import TurnButton from "../components/TurnButton/TurnButton";

const Contact = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo}>¡Estaremos encantados de atenderte!</h1>
      <div className={style.subContainer}>
        <img
          src="https://png.pngtree.com/png-vector/20220410/ourlarge/pngtree-pin-location-icon-with-folded-map-png-image_4537898.png"
          alt=""
        />
        <div className={style.datos}>
          <h2>Tel. 555 555 555</h2>
          <h2>Calle falsa, 123 col. Unica</h2>
          <h2>CDMX México</h2>

          <p>Reserva tu cita dando click al boton</p>
          <TurnButton text="Agenda tu cita con nosotros" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
