import { Request, Response } from 'express';
import User from '../models/userModel';
import { v4 as uuidv4 } from 'uuid'; //this will make the cookie id unique

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, last_name, postal_code, cellular_carrier } = req.body;
    const user = await User.create({ name, last_name, postal_code, cellular_carrier });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const rowsDeleted = await User.destroy({
      where: { id: userId },
    });

    if (rowsDeleted > 0) {
      res.status(204).send(); // 204 No Content
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
