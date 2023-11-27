import { Request, Response } from 'express';
import Company from '../models/companyModel'; 

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });      
    }
  }
};
