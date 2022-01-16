const Transaction = require("../models/Transaction");

// @desc Get transactons of a user
// @route GET /api/v1/transactions
// @access Protected
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ uniqId: req.params.id });

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    console.log(err);
    return res.status.json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add transacton of the user
// @route POST /api/v1/transactions
// @access Protected
exports.addTransaction = async (req, res, next) => {
  try {
    const { uniqId, text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc Delete transactons of the user
// @route DEL /api/v1/transactions
// @access Protected
exports.deleteTransaction = async (req, res, next) => {
  try {
    // console.log(parseInt(req.params.amt));

    const transactions = await Transaction.findById(req.params.uid);

    if (!transactions) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transactions.remove();

    return res.status(200).json({
      success: true,
      msg: "Transaction deleted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
