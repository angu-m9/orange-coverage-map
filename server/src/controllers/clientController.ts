import { Request, Response } from 'express';
import Client from '../models/clientModel';

export const createClient = async (req: Request, res: Response) => {
  try {
    const { name, last_name, postal_code, cellular_carrier } = req.body;
    const client = await Client.create({ name, last_name, postal_code, cellular_carrier });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getClientById = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findByPk(clientId);

    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;
    const { name, last_name, postal_code, cellular_carrier } = req.body;

    const [rowsUpdated, updatedClients] = await Client.update(
      { name, last_name, postal_code, cellular_carrier },
      {
        where: { id: clientId },
        returning: true, // Return the updated records
      }
    );

    if (rowsUpdated > 0) {
      res.status(200).json(updatedClients[0]);
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;
    const rowsDeleted = await Client.destroy({
      where: { id: clientId },
    });

    if (rowsDeleted > 0) {
      res.status(204).send(); // 204 No Content
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
