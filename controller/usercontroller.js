const userModel = require('../models/userModel');
const logger = require('../middleware/logger');
const { createUserSchema, getUsersSchema } = require('../validation/userValidation');

exports.getUsers = async (req, res) => {
  try {
    logger.info(`Accessing route: ${req.originalUrl} [${req.method}]`);
    logger.info(`[${req.method}] Fetching all users`);
    // const users = await userModel.getAllUsers();
    // logger.info(`[${req.method}] Found ${users.length} users`);
    res.status(200).json({msg : "here is the message"});
  } catch (error) {
    logger.error(`[${req.method}] Error fetching users:`, error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    logger.info(`Accessing route: ${req.originalUrl} [${req.method}]`);
    logger.info(`[${req.method}] Creating a new user`, { userData: req.body });
    const user = await userModel.createUser(req.body);
    logger.info(`[${req.method}] User created successfully`, { userId: user.id });
    res.status(201).json(user);
  } catch (error) {
    logger.error(`[${req.method}] Error creating user:`, error.message);
    res.status(500).json({ error: error.message });
  }
};
