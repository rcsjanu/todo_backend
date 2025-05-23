import express from 'express';
import { register, login } from '../controllers/userAuth.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { registerSchema, loginSchema } from '../validators/userAuth.validators';

const router = express.Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);

export default router;
