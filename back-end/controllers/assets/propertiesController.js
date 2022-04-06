const express = require('express');
const properties = express.Router({ mergeParams: true });
const {
    getAllProperties,
    getOneProperty,
    newProperty,
    deleteProperty,
    updateProperty
} = require('../../queries/assets/propertiesQuery');

properties.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, properties } = await getAllProperties(user_id);

        if (success) {
            res.status(200).json({
                success,
                properties: properties
            });

        } else {
            console.error(properties);
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

properties.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, property } = await getOneProperty(user_id, id);

        if (success && property.id) {
            res.status(200).json({
                success,
                property: property
            });

        } else {
            console.error(property);
            return {
                success,
                payload: `Failed to find property with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    };
});

properties.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, newProperty } = await newProperty(user_id, req.body);

        if (success && newProperty.id) {
            res.status(201).json({
                success,
                newProperty: newProperty
            });

        } else {
            console.error(newProperty);
            return {
                success,
                payload: `Failed to create new property for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

properties.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, deletedProperty } = await deleteProperty(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                deletedProperty: deletedProperty
            });

        } else {
            console.error(deletedProperty);
            return {
                success,
                payload: `Failed to delete property with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resouce not deleted',
            message: error
        });
    };
});

properties.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, updatedProperty } = await updateProperty(user_id, id, req.body);

        if (success && updatedProperty.id) {
            res.status(200).json({
                success,
                updatedProperty: updatedProperty
            });

        } else {
            console.error(updatedProperty);
            return {
                success,
                payload: `Failed to update property with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = properties;