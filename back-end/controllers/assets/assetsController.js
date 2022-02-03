const express = require('express');
const assets = express.Router({ mergeParams: true });

const bankAccountsController = require('./bankAccountsController');
const investmentsController = require('./investmentsController');
const propertiesController = require('./propertiesController');

const {
    getAllAssets
} = require('../../queries/assets/assetsQuery');

assets.get('/', async (req, res) => {
    const { user_id } = req.params;
    const { success, payload } = await getAllAssets(user_id);

    if (success) {
        res.status(200).json(payload);

    } else {
        console.error(payload);
        res.status(404).json({
            success,
            payload: 'Resources not found'
        });
    };
});

assets.use('/bank_accounts', bankAccountsController);
assets.use('/investments', investmentsController);
assets.use('/properties', propertiesController);

module.exports = assets;