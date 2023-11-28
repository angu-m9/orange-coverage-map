import { z } from 'zod';

export const registerUserSchema = z.object({
  user_name: z.string().min(3).refine((name) => /^([A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?$/.test(name), {
    message: 'El nombre debe comenzar con mayúscula y no puede haber espacios después de la última letra.',
  }),
  user_lastname: z.string().min(3).refine((lastname) => /^([A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñÁÉÍÓÚÜÑ']+)?$/.test(lastname), {
    message: 'El apellido debe comenzar con mayúscula y no puede haber espacios después de la última letra.',
  }),
  postal_code: z.string().refine((code) => /^\d{5}$/.test(code), {
    message: 'El código postal debe contener exactamente 5 números.',
  }),
});

const result = registerUserSchema.parse({
  user_name: 'Virginia',
  user_lastname: 'Santana',
  postal_code: '28010',
})

console.log(result)