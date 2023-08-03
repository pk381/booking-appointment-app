const express = require('express');

// controllers
const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.getIndex);
router.post('/add-user', userController.postAddUser);

router.get('/get-users', userController.getUsers);
router.delete('/delete-user/:email', userController.deleteUser);

module.exports = router;