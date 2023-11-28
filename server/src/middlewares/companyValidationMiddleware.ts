import { z } from 'zod';

export const companySchema = z.object({
    company_name: z.string().refine((name) => ['Orange', 'Jazztel', 'Simyo'].includes(name), {
        message: 'La compañía debe ser Orange, Jazztel o Simyo.',
    }),
    });

const result = companySchema.parse({
    company_name: 'Jazztel',
    })

console.log(result)