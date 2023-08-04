const express = require('express');

// controllers
const userController = require('../controllers/expense');

const router = express.Router();

router.get('/', userController.getIndex);

router.post('/add-expense', userController.postAddExpense);

router.get('/get-expenses', userController.getExpenses);
router.delete('/delete-expense/:id', userController.deleteExpense);

module.exports = router;