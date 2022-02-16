const express = require('express');
const bills = express.Router({ mergeParams: true });
const {
    getAllBills,
    getOneBill,
    newBill,
    deleteBill,
} = require('../../queries/debts/billsQuery');

bills.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllBills(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
             console.error(payload);
             return {
                success,
                payload: `Failed to get all bills for user_id: ${user_id}`
             };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

bills.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await getOneBill(user_id, id);

        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to get bill with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    };
});

bills.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await newBill(user_id, req.body);

        if (success && payload.id) {
            res.status(201).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to create bill for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

bills.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await deleteBill(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to delete bill with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

module.exports = bills;