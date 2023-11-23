import { object, string } from 'zod';
import { Request, Response, NextFunction } from 'express';

const userSchema = object({
    username: string().min(3),
    email: string().email(),
});

export const validationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        userSchema.parse(req.body); // Reemplaza req.body con el objeto que deseas validar
        next();
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                error: 'Validation failed',
                details: error.message,
            });
        } else {
        next(error);
    }
}
};
