const express = require('express');
const debts = express.Router({ mergeParams: true });

// Controllers
const billsController = require('./billsController');
const loansController = require('./loansController');
const creditController = require('./creditController');
const personalExpensesController = require('./personalExpensesController');

// Queries
const {
    getAllDebts
} = require('../../queries/debts/debtsQuery');

// Routes
debts.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, debts} = await getAllDebts(user_id);

        if (success) {
            res.status(200).json({
                success: true,
                allDebts: debts
            });

        } else {
            console.error(debts);
            return {
                success: false,
                payload: `Failed to get all debts for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

debts.use('/bills', billsController);
debts.use('/loans', loansController);
debts.use('/credit', creditController);
debts.use('/personal_expenses', personalExpensesController);

module.exports = debts;