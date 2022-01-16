const express = require('express');
const rRouter = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require('../controllers/transactions');

rRouter.route('/:id').get(getTransactions);
rRouter.route('/').post(addTransaction);
rRouter.route('/:uid').delete(deleteTransaction);

module.exports = rRouter;
