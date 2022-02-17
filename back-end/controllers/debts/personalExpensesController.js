const express = require('express');
const personalExpenses = express.Router({ mergeParams: true });
const {
    getAllPersonalExpenses,
    getOnePersonalExpense,
} = require('../../queries/debts/personalExpensesQuery');

personalExpenses.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllPersonalExpenses(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to get all personal expenses for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resources not found',
            message: error
        });
    };
});

personalExpenses.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await getOnePersonalExpense(user_id, id);

        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to get one personal expense with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not found',
            message: error
        });
    };
});

module.exports = personalExpenses;