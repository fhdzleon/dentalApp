import style from "./Categories.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ isLanding }) => {
  return (
    <div className={isLanding ? style.contenedorAside : style.ContenedorTop}>
      <ul className={isLanding ? style.listaAside : style.listaTop}>
        <li className={isLanding ? style.itemsAside : style.itemsTop}>
          <Link className={style.underline} to="/home">
            Inicio
          </Link>
        </li>
        <li className={isLanding ? style.itemsAside : style.itemsTop}>
          <Link className={style.underline} to="/about">
            Quienes somos
          </Link>
        </li>
        <li className={isLanding ? style.itemsAside : style.itemsTop}>
          <Link className={style.underline} to="/contact">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
