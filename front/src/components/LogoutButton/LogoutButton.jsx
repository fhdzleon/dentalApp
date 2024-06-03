import { useDispatch } from "react-redux";
import style from "./LogoutButton.module.css";
import { logOut } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <button onClick={handleLogout} className={style.button}>
        Cerrar sesión
      </button>
    </>
  );
};

export default LogoutButton;
