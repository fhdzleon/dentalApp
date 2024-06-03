import { AppoimentModel, UserModel } from "../config/data-source";
import { Appoiment } from "../entities/Appoiment";

/*----------------------------------------------------------------------------
MOSTRAR TODOS LOS TURNOS
----------------------------------------------------------------------------*/

export const getAppoimnetsService = async (): Promise<Appoiment[]> => {
  try {
    const appoiments = await AppoimentModel.find();
    return appoiments;
  } catch (error) {
    throw new Error("Error");
  }
};

/*----------------------------------------------------------------------------
MOSTRAR TURNOS POR ID
----------------------------------------------------------------------------*/

export const getAppoimentsByIdService = async (
  id: number
): Promise<Appoiment | null> => {
  try {
    const appoiment = await AppoimentModel.findOneByOrFail({
      id: id,
    });

    return appoiment;
  } catch (error) {
    throw new Error("Appoiment no encontrado");
  }
};

/*----------------------------------------------------------------------------
CREAR TURNOS
----------------------------------------------------------------------------*/

export const createAppoimentService = async (
  appoimentData: Appoiment
): Promise<Appoiment> => {
  appoimentData.status = "pendiente";

  /* const result =  await AppoimentModel.save(appoimentCreate) */

  const userFound = await UserModel.findOneBy({
    id: appoimentData.user?.id,
  });

  if (userFound) {
    const appoimentCreate = AppoimentModel.create(appoimentData);
    appoimentCreate.user = userFound;
    const appoimentSave = await AppoimentModel.save(appoimentCreate);
    return appoimentSave;
  } else {
    throw Error("El usuario no existe");
  }
};

/*----------------------------------------------------------------------------
CANCELAR TURNO (CAMBIA LA PROPIEDAD STATUS)
----------------------------------------------------------------------------*/

export const cancelAppoimentService = async (
  id: number
): Promise<Appoiment | null> => {
  const appoiment = await AppoimentModel.findOneBy({ id });

  if (!appoiment) {
    return null;
  }
  appoiment.status = "cancelada";

  await AppoimentModel.save(appoiment);

  return appoiment;
};
