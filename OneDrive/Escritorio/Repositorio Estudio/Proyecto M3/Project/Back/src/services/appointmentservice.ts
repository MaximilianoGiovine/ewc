import { AppDataSource } from '../config/appDataSource';
import { Appointment } from '../entities/Appointment';


export const scheduleAppointmentService = async (appointment: Appointment) => {
try {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const newAppointment = appointmentRepository.create({
        date: appointment.date,
        status: appointment.status,
        time: appointment.time,
        userId: appointment.userId
    });
    const savedAppointment = await appointmentRepository.save(newAppointment);
    console.log('Cita guardada en la base de datos:', savedAppointment); // Depuración: Log de la cita guardada
    return savedAppointment;
}catch (error) {
    console.error('Error en scheduleAppointmentService:', (error as any).message);
    throw error;
}}

export const getAppointmentsService = async () => {
    try {
        const appointmentRepository = AppDataSource.getRepository(Appointment);
        const appointments = await appointmentRepository.find();
        console.log('Citas obtenidas de la base de datos:', appointments); // Depuración: Log de las citas obtenidas
        return appointments;
    } catch (error) {
        console.error('Error en getAppointmentsService:', (error as any).message);
        throw error;
    }
}

export const getAppointmentByIdService = async (id: number) => {
    try {
        const appointmentRepository = AppDataSource.getRepository(Appointment);
        const appointment = await appointmentRepository.findOneBy({ id });
        console.log('Cita obtenida de la base de datos:', appointment); // Depuración: Log de la cita obtenida
        return appointment;
    } catch (error) {
        console.error('Error en getAppointmentByIdService:', (error as any).message);
        throw error;
    }
}



export const cancelAppointmentService = async () => {
    try {
        const appointmentRepository = AppDataSource.getRepository(Appointment);
        const appointmentsDeleted = await appointmentRepository.update(
            { status: 'scheduled' }, // Criteria to find appointments to update
            { status: 'cancelled' }  // Updated values
        );
        console.log('Citas canceladas:', appointmentsDeleted); // Depuración: Log de las citas canceladas
        return appointmentsDeleted;
    }catch (error) {
        console.error('Error en cancelAppointmentService:', (error as any).message);
        throw error;
    }
}
