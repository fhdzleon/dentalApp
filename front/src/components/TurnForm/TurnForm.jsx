import { useState } from "react";
import style from "./TurnForm.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TurnForm = () => {
  const user = useSelector((state) => state.user.user);
  const id = user.user.credential.id;
  const navigate = useNavigate();

  const [appoimnet, setAppoiment] = useState({
    date: "",
    time: "",
    userId: id,
  });

  console.log(id);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newAppoiment = { ...appoimnet, [name]: value };

    setAppoiment(newAppoiment);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:3000/appoiments/schedule`, appoimnet);
      alert("Se Registro la cita con exito");
      setAppoiment({ date: "", time: "" });
    } catch (error) {
      alert("Error al crear la cita");
    }
    navigate("/turns");
  };

  return (
    <div className={style.container}>
      <h2>Reservar una nueva cita</h2>
      <form onSubmit={handleOnSubmit} className={style.formulario}>
        <p>Selecciona el dia</p>
        <input
          type="date"
          name="date"
          value={appoimnet.date}
          onChange={handleChange}
        />
        <p>Selecciona la Hora </p>
        <input
          type="time"
          min="09:00"
          max="17:00"
          step="3600"
          name="time"
          value={appoimnet.time}
          onChange={handleChange}
        />

        <button type="submit">RESERVAR</button>
      </form>
    </div>
  );
};

export default TurnForm;
