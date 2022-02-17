const express = require('express');
const portfolio = express.Router({ mergeParams: true });
const assetsController = require('./assets/assetsController');
const debtsController = require('./debts/debtsController');

const {
    getAllAssets
} = require('../queries/assets/assetsQuery');
const {
    getAllDebts
} = require('../queries/debts/debtsQuery');

portfolio.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const allAssets = await getAllAssets(user_id);
        const allDebts = await getAllDebts(user_id);

        if (allAssets.success && allDebts.success) {
            res.status(200).json({
                success: true,
                portfolio: {
                    allAssets,
                    allDebts
                }
            });
            
        } else {
            return {
                success: false,
                payload: `Failed to get all assets: ${allAssets} and all debts: ${allDebts}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resources not found',
            message: error
        });
    };
});

portfolio.use('/assets', assetsController);
portfolio.use('/debts', debtsController);

module.exports = portfolio;
