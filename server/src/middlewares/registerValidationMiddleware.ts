import { z } from 'zod';

export const registerUserSchema = z.object({
    user_name: z.string().min(3),
    user_lastname: z.string().min(3),
    postal_code: z.string().min(5),
  // Otros campos que puedas tener en tu formulario de registro
});
