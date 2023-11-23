import { z } from 'zod';

export const companySchema = z.object({
    company_name: z.string().min(3),
});
