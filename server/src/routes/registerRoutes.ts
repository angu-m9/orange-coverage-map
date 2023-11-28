// Importaciones necesarias
import express from 'express';
import { createUser} from '../controllers/userController';

const registerRouter = express.Router();

registerRouter.post('/register', createUser);

export default registerRouter;
