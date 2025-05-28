import { AppDataSource, userModel } from "../config/appDataSource";
import { IUserDTO } from "../DTO/userDTO";
import { User } from "../entities/User";
import {IUser} from "../interfaces/IUser";
import { credentialService } from "./credentialService";

let users: IUser[] = []
let id = 1

export const registerService = async (userdata: IUserDTO) => {
    try {
        console.log('Incoming user data:', userdata); // Debugging: Log the incoming data

        if (!userdata.credentials) {
            throw new Error('Missing credentials in user data');
        }

        const newCredential = await credentialService.createCredential({
            username: userdata.credentials.username,
            password: userdata.credentials.password,
        });

        console.log('New credential created:', newCredential); // Debugging: Log the new credential
        const userAttempt: User = {
            id: id,
            name: userdata.name,
            email: userdata.email,
            birthdate: userdata.birthdate,
            nDni: userdata.nDni,
            credentials: newCredential,
        };

        console.log('New user created:', userAttempt); // Debugging: Log the new user
        const result = await userModel.save(userAttempt);
        console.log('User saved:', result); // Debugging: Log the saved user
        return users;
    } catch (error) {
        console.error('Error in registerService:', (error as any).message);
        throw error;
    }
};

export const getUsersService = async () => {
    const users= await userModel.find();
    return users
}

export const getUserByIdService = async (id: number) => {
    console.log('Searching for user with ID:', id); // Debugging: Log the ID being searched
    console.log('Users array:', users); // Debugging: Log the users array

    const user = users.find((user: IUser) => user.id === id);
    return user;
};