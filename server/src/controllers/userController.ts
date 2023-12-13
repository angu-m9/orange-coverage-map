import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/userModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user_name, user_lastname, company_id, postal_code } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({
      where: { user_name, user_lastname, company_id, postal_code }
    });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Generar un UUID para el nuevo usuario
    const userUuid = uuidv4();

    // Si no existe, crear usuario nuevo con UUID
    const user = await User.create({
      user_name,
      user_lastname,
      company_id,
      postal_code,
      uuid: userUuid // Asegúrate de que el modelo User incluya este campo
    });


    // Devolver el UUID en lugar del ID autoincrementable
    res.status(201).json({ user_id: userUuid });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

