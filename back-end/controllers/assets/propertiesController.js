const express = require('express');
const properties = express.Router({ mergeParams: true });
const {
    getAllProperties
} = require('../../queries/assets/propertiesQuery');

properties.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllProperties(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to find properties for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

module.exports = properties;