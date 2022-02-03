const express = require('express');
const bank_accounts = express.Router({ mergeParams: true });

const {
    getAllBankAccounts
} = require('../../queries/assets/bankAccountsQuery');

bank_accounts.get('/', async (req, res) => {
    const { user_id } = req.params;
    const { success, payload } = await getAllBankAccounts(user_id);

    if (success) {
        res.status(200).json({payload});

    } else {
        console.error(payload);
        res.status(404).json({
            success,
            payload: 'Resources not found'
        });
    };
});

module.exports = bank_accounts;