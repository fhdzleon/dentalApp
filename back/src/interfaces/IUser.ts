import ICredential from "./ICredential";

interface IUser {
  id?: number;
  name: string;
  email: string;
  birthday: string;
  dni: number;
  credential_id?: ICredential | undefined;
}

export default IUser;
