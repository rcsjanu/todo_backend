import Joi from 'joi';

export const createTodoSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().allow('').optional(),
  dueDate: Joi.date().iso().optional()
});