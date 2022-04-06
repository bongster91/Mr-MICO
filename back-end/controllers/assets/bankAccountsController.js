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

    try {
        const { success, bankAccounts } = await getAllBankAccounts(user_id);
        
        if (success) {
            res.status(200).json({
                success,
                bankAccounts: bankAccounts
            });
            
        } else {
            console.error(bankAccounts);
            return {
                success,
                payload: `Failed to find bank accounts for user_id: ${user_id}`
            };
        };
    } catch (error) {
        res.status(404).json({
            error: `Resources not found`,
            message: error
        });
    };
});

bank_accounts.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, bankAccount } = await getOneBankAccount(user_id, id);
        
        if (success && bankAccount.id) {
            res.status(200).json({
                success,
                bankAccount: bankAccount
            });
            
        } else {
            console.error(bankAccount);
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
        const { success, newBankAccount } = await newBankAccount(user_id, req.body);

        if (success && newBankAccount.id) {
            res.status(201).json({
                success,
                newBankAccount: newBankAccount
            });

        } else {
            console.error(newBankAccount);
            return {
                success,
                payload: `Failed to create new bank account for user_id: ${user_id} with details: ${req.body}`
            };
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
        const { success, updatedBankAccount } = await updateBankAccount(user_id, id, req.body);

        if (success && updatedBankAccount.id) {
            res.status(201).json({
                success,
                updatedBankAccount: updatedBankAccount
            });

        } else {
            console.error(updatedBankAccount);
            return {
                success,
                payload: `Failed to update bank account with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

bank_accounts.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, deletedBankAccount } = await deleteBankAccount(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                deletedBankAccount: deletedBankAccount
            });

        } else {
            console.error(deletedBankAccount);
            return {
                success,
                payload: `Failed to delete bank account with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

module.exports = bank_accounts;