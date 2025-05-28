import { Request, Response } from "express";

import { getUsersService, registerService, getUserByIdService } from "../services/userService";
import { getAppointmentsService, scheduleAppointmentService, cancelAppointmentService, getAppointmentByIdService } from "../services/appointmentservice"
import { getCredentialsService } from "../services/credentialService";

export const register = async (req: Request, res: Response) => {
    try {
        const userdata = req.body;

        console.log('Request body:', userdata); // Debugging: Log the incoming data
        const newUser = await registerService(userdata);
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in register controller:', error.message);
        } else {
            console.error('Error in register controller:', error);
        }
        res.status(500).json({ 
            message: 'Internal server error', 
            error: error instanceof Error ? error.message : 'Unknown error' 
        });
    }
};

export const login = async (req: Request, res: Response) => {
    req.body
    res.status(200).json({message: 'esta es la ruta de login'
})}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService(); // Fetch all users
        res.status(200).json(users); // Return the users as JSON
    } catch (error) {
        console.error('Error in getUsers controller:', error instanceof Error ? error.message : error);
        res.status(500).json({
            message: 'Internal server error',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export const getUsersId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params; // Extract the ID from the request parameters
        console.log('Requested ID:', id); // Debugging: Log the requested ID

        const user = await getUserByIdService(Number(id)); // Fetch the user by ID
        console.log('Found user:', user); // Debugging: Log the found user

        if (!user) {
            res.status(404).json({ message: 'User not found' }); // Return 404 if user is not found
            return;
        }

        res.status(200).json(user); // Return the user as JSON
    } catch (error) {
        console.error('Error in getUsersId controller:', error instanceof Error ? error.message : error);
        res.status(500).json({
            message: 'Internal server error',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export const schedule = async (req: Request, res: Response) => {
    const appointmentData = req.body; // Extract appointment data from the request body
    console.log('Request body:', appointmentData); // Debugging: Log the incoming data
    const appointment = await scheduleAppointmentService(appointmentData); // Schedule the appointment
    res.status(201).json(appointment); // Return the scheduled appointment as JSON
}

export const getAppointment = async (req: Request, res: Response) => {
    const appointments = await getAppointmentsService(); // Fetch all appointments
    res.status(200).json(appointments); // Return the appointments as JSON
}

export const getAppointmentId = async (req: Request, res: Response) => {
    const { id } = req.params; // Extract the ID from the request parameters
    const appointment = await getAppointmentByIdService(Number(id)); // Fetch the appointment by ID
    if (!appointment) {
        res.status(404).json({ message: 'Appointment not found' }); // Return 404 if appointment is not found
        return;
    }
    res.status(200).json(appointment); // Return the appointment as JSON
}

export const cancelAppointment = async (req: Request, res: Response) => {
    const appointments = await cancelAppointmentService(); // Cancel appointments
    res.status(200).json(appointments); // Return the canceled appointments as JSON
}

export const getCredentials = async (req: Request, res: Response) => {
    const credentials = await getCredentialsService(); // Fetch all credentials
    res.status(200).json(credentials); // Return the credentials as JSON
}