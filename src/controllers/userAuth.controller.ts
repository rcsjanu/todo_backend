import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPassword });

        res.status(201).json({ message: 'User created' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) res.status(400).json({ message: 'Invalid credentials' });
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) res.status(400).json({ message: 'Invalid credentials' });
            else {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
                res.status(200).json({ message: "Login successful", token });
            }
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};