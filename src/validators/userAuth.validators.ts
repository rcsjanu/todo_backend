import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});