import { register } from "module";
import { CredentialModel, UserModel } from "../config/data-source";
import { Credential } from "../entities/Credential";
import ICredential from "../interfaces/ICredential";
import { User } from "../entities/User";

const credentials: ICredential[] = [];
let id = 1;

/*--------------------------------------------------------
CREAR CREDENCIAL DE USUARIO
--------------------------------------------------------*/

export const createCredentialService = async (
  credentialData: Credential
): Promise<Credential> => {
  const credential = await CredentialModel.create(credentialData);
  const result = await CredentialModel.save(credential);

  return credential;
};

/*---------------------------------------------------------
VALIDATE CREDENTIAL
----------------------------------------------------------*/

interface IcredentialUser {
  credential: Credential;
}

export const validateCredentialService = async (credentialData: {
  username: string;
  password: string;
}): Promise<IcredentialUser | undefined> => {
  const { username, password } = credentialData;

  const foundCredentialUserName = await CredentialModel.findOne({
    where: { username },
    relations: ["user"],
  });

  if (!foundCredentialUserName) throw new Error("No autentificado");

  const itsPasswordValidate = foundCredentialUserName.password === password;

  if (itsPasswordValidate) {
    const user = await UserModel.findOne({
      where: { id: foundCredentialUserName.user?.id },
    });

    return { credential: foundCredentialUserName };
  }
};
