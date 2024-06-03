import { UserModel } from "../config/data-source";
import { User } from "../entities/User";
 
/*----------------------------------------------------------------------------
MOSTRAR TODOS LOS USUARIOS
----------------------------------------------------------------------------*/

export const getUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find({
        relations: {
            appoiments: true,
            credential: true
        }
    })
    return users;
}

/*----------------------------------------------------------------------------
MOSTAR USUARIO BUSCADO POR ID
----------------------------------------------------------------------------*/

export const getUserByIdService = async (id: number): Promise <User | null> => {
    const user = await UserModel.findOne({
        where: {
            id,
        },
        relations:{
            appoiments: true
        }
    }) 

    return user;
}

/*----------------------------------------------------------------------------
CREAR UN NUEVO USUARIO
----------------------------------------------------------------------------*/

export const registerService = async (userData: User): Promise<User> => {
    
    const user = await UserModel.create(userData)
     const result = await UserModel.save(user);
    
     return user;
} 