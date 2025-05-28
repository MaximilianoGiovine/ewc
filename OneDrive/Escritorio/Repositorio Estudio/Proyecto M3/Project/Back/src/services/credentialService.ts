import { AppDataSource } from "../config/appDataSource";
import { Credential } from "../entities/Credential";

export const credentialService = {
    createCredential: async (credentialData: { username: string; password: string }): Promise<Credential> => {
        try {
            const credentialRepository = AppDataSource.getRepository(Credential);

            const newCredential = credentialRepository.create({
                username: credentialData.username,
                password: credentialData.password,
            });

            const savedCredential = await credentialRepository.save(newCredential);
            console.log('Credencial guardada en la base de datos:', savedCredential); // Depuración: Log de la credencial guardada
            return savedCredential;
        } catch (error) {
            console.error('Error en createCredential:', (error as any).message);
            throw error;
        }
    },
};

export const getCredentialsService = async () => {
    try {
        const credentialRepository = AppDataSource.getRepository(Credential);
        const credentials = await credentialRepository.find();
        console.log('Credenciales obtenidas de la base de datos:', credentials); // Depuración: Log de las credenciales obtenidas
        return credentials;
    } catch (error) {
        console.error('Error en getCredentialsService:', (error as any).message);
        throw error;
    }
}