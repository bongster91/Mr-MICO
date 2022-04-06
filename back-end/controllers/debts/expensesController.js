const express = require('express');
const expenses = express.Router({ mergeParams: true });
const {
    getAllExpenses,
    getOneExpense,
    newExpense,
    deleteExpense,
    updateExpense
} = require('../../queries/debts/ExpensesQuery');

expenses.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, expenses } = await getAllExpenses(user_id);

        if (success) {
            res.status(200).json({
                success,
                expenses: expenses
            });

        } else {
            console.error(expenses);
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

expenses.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, expense } = await getOneExpense(user_id, id);

        if (success && expense.id) {
            res.status(200).json({
                success,
                expense: expense
            });

        } else {
            console.error(expense);
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

expenses.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, newExpense } = await newExpense(user_id, req.body);

        if (success && newExpense.id) {
            res.status(200).json({
                success,
                newExpense: newExpense
            });

        } else {
            console.error(newExpense);
            return {
                success,
                payload: `Failed to create new personal expense for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not created',
            message: error
        });
    };
});

expenses.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, deletedExpense } = await deleteExpense(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                deletedExpense: deletedExpense
            });

        } else {
            console.error(deletedExpense);
            return {
                success,
                payload: `Failed to delete personal expense with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

expenses.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, updatedExpense } = await updateExpense(user_id, id, req.body);

        if (success && updatedExpense.id) {
            res.status(200).json({
                success,
                updatedExpense: updatedExpense
            });

        } else {
            console.error(updatedExpense);
            return {
                success,
                payload: `Failed to update personal expense with id: ${id} for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = expenses;