const express = require('express');
const assets = express.Router({ mergeParams: true });
const { getTotalAssets } = require('../../helper/portfolioCalculations');

// Controllers
const bankAccountsController = require('./bankAccountsController');
const investmentsController = require('./investmentsController');
const propertiesController = require('./propertiesController');

// Queries
const {
    getAllAssets
} = require('../../queries/assets/assetsQuery');

// Routes
assets.get('/', async (req, res) => {
    const { user_id } = req.params;
    
    try {
        const { success, assets } = await getAllAssets(user_id);

        if (success) {
            let totalAssetAmount = getTotalAssets(assets);
     
            res.status(200).json({
                success,
                allAssets: {
                    assets: assets,
                    assetBalances: totalAssetAmount
                }
            });

        } else {
            console.error(assets);
            return {
                success: false,
                payload: `Failed to get all assets for user_id: ${user_id}`
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