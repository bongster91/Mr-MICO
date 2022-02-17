const express = require('express');
const debts = express.Router({ mergeParams: true });

const billsController = require('./billsController');
const loansController = require('./loansController');
const creditController = require('./creditController');
const personalExpensesController = require('./personalExpensesController');

const {
    getAllDebts
} = require('../../queries/debts/debtsQuery');

debts.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllDebts(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
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