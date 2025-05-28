import { Request, Response } from "express";
import { createUserService, getUserService, deleteUserService } from "../services/userService";
import IUser from "../interfaces/IUser";

export const createUser = async (req:Request, res:Response) => {
    const userData = req.body
    const newUser: IUser = await createUserService(userData)
    res.status(201).json(newUser)
}
export const getUsers = async (req: Request, res:Response) => {
    const users: IUser[] = await getUserService()
    res.status(200).json(users)
}
export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.body
    await deleteUserService(id)
    res.status(200).json({message: "User deleted Successfully"})
}