import IUser from "./IUser";

export type statusType = "activo" | "done" | "cancelado"

interface IAppoiment {
    id?: number;
    date: string;
    time: string;
    status?: statusType;
    user_id?: IUser;
}

export default IAppoiment;

 