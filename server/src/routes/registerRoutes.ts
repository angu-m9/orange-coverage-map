/*import express from 'express';
import { createUser} from '../controllers/userController';

const registerRouter = express.Router();

registerRouter.post('/register', createUser);

export default registerRouter;*/

import express from 'express';
import { createUser } from '../controllers/userController';
import { validationMiddleware } from '../middlewares/validationMiddleware';
import { registerUserSchema } from '../middlewares/registerValidationMiddleware';

const registerRouter = express.Router();

registerRouter.post('/register', validationMiddleware(registerUserSchema), createUser);

export default registerRouter;
