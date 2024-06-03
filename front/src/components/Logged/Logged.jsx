import style from "./Logged.module.css";
import TurnButton from "../TurnButton/TurnButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Logged = ({ isLanding }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className={isLanding ? style.contenedorAside : style.contenedor}>
        <div className={style.texto}>
          <h2>Hola {user.user.credential.username}</h2>

          <TurnButton text="Agendar cita" />

          <LogoutButton />
        </div>
        <div className={isLanding ? style.imagenAside : style.imagen}>
          <Link to="/turns">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg"
              alt="user"
            />
          </Link>
        </div>
      </div>
      {!isLanding && (
        <Link className={style.loginButton} to="/">
          Agendar cita o Cerrar sesión
        </Link>
      )}
    </>
  );
};

export default Logged;
