import { Request, Response } from 'express';
import { cancelAppoimentService, createAppoimentService, getAppoimentsByIdService, getAppoimnetsService } from '../services/appoimentsServices';
import { Appoiment } from '../entities/Appoiment';
import { UserModel } from '../config/data-source';
import catchAsync from '../utils/catchAsync';

/*----------------------------------------------------------------------------
MOSTRAR TODOS LOS TURNOS
----------------------------------------------------------------------------*/

 const getAppoiments = async (req: Request, res: Response) => {

        const appoiments: Appoiment[] = await getAppoimnetsService()
        res.status(200).json(appoiments)
   
}

/*----------------------------------------------------------------------------
MOSTRAR TURNO POR ID
----------------------------------------------------------------------------*/

const getAppoimentsById = async (req: Request, res: Response) => {
    const appoimentId = Number(req.params.id);

        const appoiment = await getAppoimentsByIdService (appoimentId);
            res.status(200).json(appoiment)
         
}

/*----------------------------------------------------------------------------
CREAR TURNO 
----------------------------------------------------------------------------*/

export const createAppoiment = async (req: Request, res: Response)=> {
    const { date, time, userId } = req.body;
    
    if(!date || !time || !userId) {
        return res.status(400).json({message:"Faltan datos por favor verifica"})
    } 

    try {
 
        const newAppoimentData: Appoiment = {
            date,
            time,
            user: { id: userId }
        }

        const newAppoiment: Appoiment = await createAppoimentService(newAppoimentData);
        res.status(201).json({message: "Se creo el turno correctamente"})

    } catch (error) {
        res.status(500).json({message: "Error interno del servidor", error})
        }

}

/*----------------------------------------------------------------------------
CANCELAR TURNO (CAMBIAR STATUS DEL TURNO)
----------------------------------------------------------------------------*/

export const cancelAppoiment = async (req: Request, res: Response) => {
    const appoimentId = req.params.id;
    try {
        const appoiment = await cancelAppoimentService (parseInt(appoimentId));
        if (appoiment) {
            res.status(200).json("Se cancelo el turno correctamente")
        } else {
            res.status(400).json({message:"No existe una cita con este id"})
        }
    } catch (error) {
        res.status(500).json({message: "Error interno del servidor"})
    }

}

export default {
    getAppoiments: catchAsync(getAppoiments),
    getAppoimentsById: catchAsync(getAppoimentsById)
}