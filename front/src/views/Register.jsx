import axios from "axios";
import { useState } from "react";
import style from "./Register.module.css";
import { validate } from "../helpers/validate";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  /*
        Estado del formulario controlado
    */

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    birthday: "",
    dni: "",
    username: "",
    password: "",
  });

  /*
        Estado para el manejo de errores por medio de validaciones
  */

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthday: "",
    dni: "",
    username: "",
    password: "",
  });

  /*
        Manejador de cambios en inputs
    */

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newUserData = { ...userData, [name]: value };

    setuserData(newUserData);
    setErrors(validate(newUserData));
  };

  /*
        Manejador de envio del formulario
    */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post("http://localhost:3000/users/register", userData);
        alert(
          `El usuario ${userData.username} se registró con éxito, Ahora puedes iniciar sesión`
        );
        setuserData({
          name: "",
          email: "",
          birthday: "",
          dni: "",
          username: "",
          password: "",
        });
        navigate("/");
      } catch (error) {
        alert("Hubo un problema, inténtelo de nuevo");
      }
    } else {
      alert("Algunos datos son erróneos o faltan datos");
    }
  };

  return (
    <div className={style.contenedor}>
      <form className={style.formulario} onSubmit={handleSubmit}>
        <h1 className={style.titulo}>Formulario de registro</h1>

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="birthday">Fecha de Nacimiento:</label>
        <input
          type="date"
          name="birthday"
          value={userData.birthday}
          onChange={handleChange}
        />
        {errors.birthday && <p>{errors.birthday}</p>}

        <label htmlFor="dni">No. Identificación:</label>
        <input
          type="text"
          name="dni"
          value={userData.dni}
          onChange={handleChange}
        />
        {errors.dni && <p>{errors.dni}</p>}

        <label htmlFor="username">Elige tu username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Register;
