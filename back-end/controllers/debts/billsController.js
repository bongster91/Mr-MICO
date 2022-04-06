const express = require('express');
const bills = express.Router({ mergeParams: true });
const {
    getAllBills,
    getOneBill,
    newBill,
    deleteBill,
    updateBill
} = require('../../queries/debts/billsQuery');

bills.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, bills } = await getAllBills(user_id);

        if (success) {
            res.status(200).json({
                success,
                bills: bills
            });

        } else {
             console.error(bills);
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
        const { success, bill } = await getOneBill(user_id, id);

        if (success && bill.id) {
            res.status(200).json({
                success,
                bill: bill
            });

        } else {
            console.error(bill);
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
        const { success, newBill } = await newBill(user_id, req.body);

        if (success && newBill.id) {
            res.status(201).json({
                success,
                newBill: newBill
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
        const { success, deletedBill } = await deleteBill(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                deletedBill: deletedBill
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

bills.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, updatedBill } = await updateBill(user_id, id, req.body);

        if (success && updatedBill.id) {
            res.status(201).json({
                success,
                updatedBill: updatedBill
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to update bill with id: ${id} for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = bills;