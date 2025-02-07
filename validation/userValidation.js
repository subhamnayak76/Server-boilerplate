const { z } = require('zod');

const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

const getUsersSchema = z.object({
  // Add query parameters validation if needed
});

module.exports = {
  createUserSchema,
  getUsersSchema,
};
