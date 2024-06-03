export const validate = (input) => {
  const errors = {};

  // Validaciones name -->

  if (!input.name) {
    errors.name = "El nombre es requerido";
  }

  // Validaciones email -->

  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email es inválido";
  }

  // Validaciones birthday -->

  if (!input.birthday) {
    errors.birthday = "La fecha de nacimiento es requerida";
  }

  // Validaciones dni -->

  if (!input.dni) {
    errors.dni = "El numero de identificación es requerido";
  } else if (!/^\d+$/.test(input.dni)) {
    errors.dni = "Ingresa solo numeros";
  }

  // Validaciones username -->

  if (!input.username) {
    errors.username = "El username es requerido";
  }

  // Validaciones password -->

  if (!input.password) {
    errors.password = "La contraseña es requerida";
  }

  return errors;
};
