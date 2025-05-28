import { IUser } from "./IUser";

export interface IAppointment {
    id: string;
    date: Date;
    status: string;
    time: string;
    userId: IUser;
}