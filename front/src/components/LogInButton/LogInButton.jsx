import { useState } from "react";
import style from "./LogInButton.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSucces, loginError } from "../../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LogInButton = ({ isLanding }) => {
  const navigate = useNavigate();
  //Estado del formulario

  const [credentialData, setCredential] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  //Manejador de cambios en los inputs

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newCredential = { ...credentialData, [name]: value };

    setCredential(newCredential);
  };

  //Manejador del submit

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        credentialData
      );
      dispatch(loginSucces(response.data));
      alert(`Bienvenido de nuevo ${credentialData.username}`);
      setCredential({ username: "", password: "" });
    } catch (error) {
      dispatch(loginError("Credenciales invalidas"));
      alert("Credenciales invalidas");
    }
    navigate("/");
  };

  return (
    <>
      <div className={isLanding ? style.contenedorAside : style.contenedorTop}>
        <h3>Ingresa a tu cuenta </h3>
        <form
          onSubmit={handleSubmit}
          className={isLanding ? style.formularioAside : style.formularioTop}
        >
          <label className={style.label} htmlFor="">
            username:
          </label>
          <input
            className={style.input}
            type="text"
            name="username"
            value={credentialData.username}
            onChange={handleChange}
          />

          <label className={style.label} htmlFor="">
            password:
          </label>
          <input
            className={style.input}
            type="password"
            name="password"
            value={credentialData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={isLanding ? style.buttonAside : style.buttonTop}
          >
            Iniciar sesión
          </button>
        </form>

        <p>
          ¿No tienes Cuenta? <Link to="/register"> Registrarse</Link>
        </p>
      </div>
      {!isLanding && (
        <Link className={style.loginButton} to="/">
          Iniciar sesion o Registrarse
        </Link>
      )}
    </>
  );
};

export default LogInButton;
