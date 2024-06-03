import style from "./Home.module.css";
import PromoList from "../components/PromoList/PromoList";

const Home = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo}>Bienvenidos a HenryDental</h1>
      <h3 className={style.subtitulo}>Conoce nuestras promociones</h3>
      <PromoList />
    </div>
  );
};

export default Home;
