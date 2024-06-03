/* eslint-disable react/prop-types */
import style from "./CancelButton.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelAppoiment } from "../../features/appoimentSlice";

const CancelButton = ({ turn }) => {
  const idAppoiment = turn.id;
  const dispatch = useDispatch();

  const handleButton = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/appoiments/cancel/${idAppoiment}`
      );
      if (response.status === 200) {
        dispatch(cancelAppoiment({ id: idAppoiment, status: "cancelada" }));
        alert("Cita cancelada");
      } else {
        alert("Error al cancelar la cita");
      }
    } catch (error) {
      alert("Error al cancelar la cita");
    }
  };

  return (
    <button
      onClick={handleButton}
      className={turn.status === "cancelada" ? style.buttonC : style.buttonA}
    >
      cancelar
    </button>
  );
};

export default CancelButton;
