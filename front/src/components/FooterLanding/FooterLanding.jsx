import style from "./FooterLanding.module.css";

// eslint-disable-next-line react/prop-types
const FooterLanding = ({ isLanding }) => {
  return (
    <div className={isLanding ? style.contenedorAside : style.contenedorTop}>
      <p>Desarrollado por @skullDev</p>
      <p>Proyecto Academico - No destinado para uso comercial </p>
    </div>
  );
};

export default FooterLanding;
