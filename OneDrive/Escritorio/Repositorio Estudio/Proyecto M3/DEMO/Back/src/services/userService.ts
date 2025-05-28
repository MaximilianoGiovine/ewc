import IUser from "../interfaces/IUser"
import userDTO from "../DTO/userDTO"

let users:IUser[] = []

let id:number = 1

export const createUserService = async (userData:userDTO): Promise<IUser> => {
    const newUser:IUser = {
        id: id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser)
    id++
    return newUser
}
export const getUserService = async (): Promise<IUser[]> => {
    return users
}
export const deleteUserService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) =>{
        return user.id !== id
    })
}