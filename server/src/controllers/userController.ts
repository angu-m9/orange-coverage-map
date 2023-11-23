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

    // Establecer la cookie en la respuesta
    res.cookie('userId', userUuid, {
      expires: new Date(Date.now() + 31536000000),
      httpOnly: true,
      sameSite: 'Lax'
    });

    // Devolver el UUID en lugar del ID autoincrementable
    res.status(201).json({ user_id: userUuid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const checkUser = async (req:Request, res : Response) => {
  try {
    const userId = req.cookies['userId'];
    if (!userId) {
      // Si no hay cookie 'userId', se asume que es un nuevo usuario
      return res.status(200).json({ exists: false });
    }
    const user = await User.findByPk(userId);
    res.status(200).json({ exists: !!user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { name, last_name, postal_code, cellular_carrier } = req.body;

    const [rowsUpdated, updatedUsers] = await User.update(
      { name, last_name, postal_code, cellular_carrier },
      {
        where: { id: userId },
        returning: true, // Return the updated records
      }
    );

    if (rowsUpdated > 0) {
      res.status(200).json(updatedUsers[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
      res.status(500).json({ error: error.message }); 
  }
};

export const deleteUser= async (req: Request, res: Response): Promise<void>  => {
  try {
    const { userId } = req.params;
    const rowsDeleted = await User.destroy({
      where: { id: userId },
    });

    if (rowsDeleted > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
