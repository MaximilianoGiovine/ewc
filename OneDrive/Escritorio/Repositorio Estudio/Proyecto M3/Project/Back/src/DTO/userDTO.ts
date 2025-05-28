import { ICredential } from "../interfaces/ICredential";
import { Credential } from "../entities/Credential";

export interface IUserDTO {
    name: string;
    email: string;
    birthdate: Date;
    nDni: string;
    credentials: ICredential | Credential;
}