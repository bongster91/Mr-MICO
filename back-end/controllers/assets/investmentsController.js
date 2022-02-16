const express = require('express');
const investments = express.Router({ mergeParams: true });

const {
    getAllInvestments,
    getOneInvestment,
    newInvestment,
    deleteInvestment,
    updateInvestment
} = require('../../queries/assets/investmentsQuery');

investments.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllInvestments(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to find investments with user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

investments.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await getOneInvestment(user_id, id);

        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to find investment with user_id: ${user_id} at id: ${id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    };
});

investments.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await newInvestment(user_id, req.body);

        if (success && payload.id) {
            res.status(201).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to create new investment for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

investments.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await deleteInvestment(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to delete investment with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

investments.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await updateInvestment(user_id, id, req.body);

        if (success && payload.id) {
            res.status(201).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to update investment with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = investments;