import TurnButton from "../components/TurnButton/TurnButton";
import style from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={style.contenedor}>
        <div className="titleText">
          <h1 className={style.titulo}>Somos Dental Henry</h1>
          <p className={style.subtitulo}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            exercitationem vitae sint ratione quis fuga perferendis tenetur
            illum ipsum molestias vel amet in deserunt labore quibusdam odit
            totam, error accusamus!
          </p>
          <br />
          <p className={style.subtitulo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            accusamus, cum, perferendis eos enim possimus vitae sit ab magni
            pariatur eligendi hic dolor tempora non autem explicabo iure
            doloribus! Laborum?
          </p>
          <br />
          <p className={style.subtitulo}>
            Dolor sit amet consectetur adipisicing elit. Possimus labore cumque
            incidunt alias sed quibusdam, adipisci maxime natus architecto
            excepturi et numquam totam, ipsum quis doloremque officia dolorum
            corrupti. Atque?
          </p>
        </div>
        <div className={style.contImagen}>
          <img
            className={style.imagen}
            src="https://www.aguilardentalsalut.com/wp-content/uploads/2015/06/grupo-doctores.jpg"
            alt=""
          />
          <TurnButton text="Agenda tu cita con nuestros especialistas" />
        </div>
      </div>
    </>
  );
};

export default About;
