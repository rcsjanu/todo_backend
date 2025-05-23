import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    userId?: string;
}

const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;
    if (!authHeader) res.status(401).json({ message: 'No token provided' });
    else {
        const token = authHeader;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
            req.userId = decoded.userId;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    }
};

export default authMiddleware;
