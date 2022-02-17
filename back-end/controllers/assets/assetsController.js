const express = require('express');
const assets = express.Router({ mergeParams: true });

const bankAccountsController = require('./bankAccountsController');
const investmentsController = require('./investmentsController');
const propertiesController = require('./propertiesController');

const {
    getAllBankAccounts
} = require('../../queries/assets/bankAccountsQuery');
const {
    getAllInvestments
} = require('../../queries/assets/investmentsQuery');
const {
    getAllProperties
} = require('../../queries/assets/propertiesQuery');

assets.get('/', async (req, res) => {
    const { user_id } = req.params;
    
    try {
        const { bankAccounts } = await getAllBankAccounts(user_id);
        const { investments } = await getAllInvestments(user_id);
        const { properties } = await getAllProperties(user_id);

        if (bankAccounts.length && investments.length && properties.length) {
            res.status(200).json({
                success: true,
                allAssets: {
                    bankAccounts,
                    investments,
                    properties
                }
            });

        } else {
            return {
                success: false,
                payload: `Failed to get all assets`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resources not found',
            message: error
        });
    };
});

assets.use('/bank_accounts', bankAccountsController);
assets.use('/investments', investmentsController);
assets.use('/properties', propertiesController);

module.exports = assets;