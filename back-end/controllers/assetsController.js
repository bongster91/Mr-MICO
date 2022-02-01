const express = require('express');
const assets = express.Router({ mergeParams: true });
const {
    getAllAssets,
    getOneAsset,
    newAsset,
    updateAsset,
    deleteAsset
} = require('../queries/assetsQuery');

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


module.exports = assets;