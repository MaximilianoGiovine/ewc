import { IUser } from "../interfaces/IUser";
import { User } from "../entities/User";

export interface appointmentDTO  {
    id: Number,
    date: Date,
    status: String,
    time: String,
    userId: IUser | User
}