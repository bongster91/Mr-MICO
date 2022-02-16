const express = require('express');
const bank_accounts = express.Router({ mergeParams: true });

const {
    getAllBankAccounts,
    getOneBankAccount,
    newBankAccount,
    updateBankAccount,
    deleteBankAccount
} = require('../../queries/assets/bankAccountsQuery');

bank_accounts.get('/', async (req, res) => {
    const { user_id } = req.params;
    const { success, payload } = await getAllBankAccounts(user_id);

    if (success) {
        res.status(200).json({ payload });

    } else {
        console.error(payload);
        res.status(404).json({
            success,
            payload: `Resource not found for user_id: ${user_id}`
        });
    };
});

bank_accounts.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await getOneBankAccount(user_id, id);
        
        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });
            
        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to find bank account with id: ${id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: `Resource not found`,
            message: error
        });
    };
});

bank_accounts.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await newBankAccount(user_id, req.body);

        if (success && payload.id) {
            res.status(201).json({
                success,
                payload
            });
        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: `Failed to create new bank account for user_id: ${user_id}`
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

bank_accounts.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await updateBankAccount(user_id, id, req.body);

        if (success && payload.id) {
            res.status(201).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: `Failed to update bank account with id: ${id} for user_id: ${user_id}`
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

bank_accounts.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await deleteBankAccount(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: `Failed to delete bank account with id: ${id} for user_id: ${user_id}`
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

module.exports = bank_accounts;