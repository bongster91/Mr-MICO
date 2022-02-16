const express = require('express');
const loans = express.Router({ mergeParams: true });
const {
    getAllLoans,
    getOneLoan,
    newLoan,
    deleteLoan,
} = require('../../queries/debts/loansQuery');

loans.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllLoans(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to get all loans for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

loans.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await getOneLoan(user_id, id);

        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            return {
                success,
                payload: `Failed to get one loan with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    }
});

loans.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await newLoan(user_id, req.body);

        if (success && payload.id) {
            res.status(201).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to create new loan for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

loans.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await deleteLoan(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to delete loan with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

module.exports = loans;