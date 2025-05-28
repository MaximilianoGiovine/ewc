import {Router, Request, Response} from 'express';
import {createUser, getUsers, deleteUser} from '../controllers/userController';
import auth from '../middlewares/auth';


const router: Router = Router();

router.post('/recursos', createUser)
router.get('/recursos', auth, getUsers)
router.delete('/recursos/', deleteUser)

export default router;