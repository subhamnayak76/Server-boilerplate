const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');

router.get('/details', userController.getUsers);
router.post('/create', userController.createUser);

module.exports = router;
