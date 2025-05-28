import { ICredential } from "./ICredential";

export interface IUser {
    id:number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: string;
    credentialsId: number | ICredential; // Foreign key to Credential entity
}