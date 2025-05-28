import { Router, Request, Response } from "express";
import { cancelAppointment, getAppointment, getAppointmentId, getCredentials, getUsers, getUsersId, login, register, schedule } from "../controllers";

const router: Router = Router();

router.get('/users', getUsers)
router.get('/users/:id', getUsersId)
router.post('/users/register', register)
router.post('/users/login', login)

router.get('/credentials', getCredentials)

router.get('/appointments', getAppointment)
router.get('/appointments/:id', getAppointmentId)
router.post('/appointments/schedule', schedule)
router.put('/appointments/cancel', cancelAppointment)

export default router;