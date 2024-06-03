import { Request, Response } from "express";
import { getUserByIdService, getUsersService, registerService } from "../services/usersServices";
import { createCredentialService, validateCredentialService } from "../services/credentialsServices";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { UserModel } from "../config/data-source";

/*----------------------------------------------------------------------------
MOSTRAR TODOS LOS USUARIOS
----------------------------------------------------------------------------*/

export const getUsers = async (req: Request, res: Response) => {
    const users: User[] = await getUsersService();
    res.status(200).json(users)
}

/*----------------------------------------------------------------------------
MOSTRAR USUARIO BUSCADO POR ID
----------------------------------------------------------------------------*/

export const getUserByID = async (req: Request, res: Response) => {
   const id = Number(req.params.id);
   try {
        const user = await getUserByIdService(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message:"Usuario no encontrado"})
        }
   } catch (error) {
        console.log("Error al obtener el usuario", error );
        res.status(500).json({message: "Error interno del servidor"})        
   }
}

/*----------------------------------------------------------------------------
CREAR UN NUEVO USUARIO Y CREDENCIAL
----------------------------------------------------------------------------*/

 export const register = async (req: Request, res: Response) => {
    const { name, email, birthday, dni, username, password } = req.body;
     try {
        const newUser: User = await registerService({name, email, birthday, dni})
        const newCredential : Credential = await createCredentialService({username, password})

        newUser.credential = newCredential;
        await UserModel.save(newUser)

        res.status(201).json({message: "Usuario y credencial creadas correctamente"})
     } catch (error) {
        res.status(500).json({message: "Error interno en el servidor"})
     }
} 

/*----------------------------------------------------------------------------
LOG IN 
----------------------------------------------------------------------------*/

export const login = async (req: Request, res: Response ) => {
   const { username, password } = req.body;

   try {
      const user = await validateCredentialService ({ username, password })

      if(user) {
         res.status(200).json({ message:"Inicio de sesion exitoso", user})
      } else {
         res.status(400).json({message:"Credenciales invalidas"})
      }
   } catch (error) {
      res.status(500).json({message: "Error interno en el servidor"})
   }
}