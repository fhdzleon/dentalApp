import style from "./MisTurnos.module.css";
import AppoimentList from "../components/AppoimentList/AppoimentList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getAppoiments } from "../features/appoimentSlice";

const MisTurnos = () => {
  const dispatch = useDispatch();
  /*   const [myTurns, setMyTurns] = useState([]); */
  const user = useSelector((state) => state.user.user);
  const appoiments = useSelector((state) => state.appoiment.appoiments);
  console.log(appoiments);
  const userId = user.user.credential.id;

  useEffect(() => {
    const fetchAppoiments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        dispatch(getAppoiments(response.data.appoiments));
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (userId) {
      fetchAppoiments();
    }
  }, [userId, dispatch]);

  return (
    <div className={style.contenedor}>
      <h2>Historial de citas:</h2>
      {appoiments.length === 0 ? (
        <p>No tienes ninguna cita agendada</p>
      ) : (
        <AppoimentList myTurns={appoiments} />
      )}
    </div>
  );
};

export default MisTurnos;
