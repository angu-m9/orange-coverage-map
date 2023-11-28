import { z, ZodError, ZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const userSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
});

export const validationMiddleware = (schema: ZodObject<T>) => {
    return(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        schema.parse(req.body); // Reemplaza req.body con el objeto que deseas validar
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                error: 'Validation failed',
                details: error.message,
            });
        } else {
        next(error);
    }
}
}};
