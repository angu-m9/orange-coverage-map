import { Router } from 'express';
import adminAuthController from '../controllers/adminAuthController';
import { verifyAdminToken } from '../middlewares/verifyAdminToken';

const adminRouter = Router();

adminRouter.post('/admins', adminAuthController.login);
adminRouter.get('/admins', verifyAdminToken, (req, res) => {
  res.json({ message: 'Acceso concedido a la ruta protegida de administrador' });
});

export default adminRouter;
