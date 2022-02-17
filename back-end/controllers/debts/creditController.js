const express = require('express');
const credit = express.Router({ mergeParams: true });
const {
    getAllCredit,
    getOneCredit,
    newCredit,
    deleteCredit,
    updateCredit
} = require('../../queries/debts/creditQuery');

credit.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllCredit(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to get all credit for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resources not found',
            message: error
        });
    };
});

credit.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await getOneCredit(user_id, id);

        if (success && payload.id) {
            res.status(200).json({
                success, 
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to get credit with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    };
});

credit.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await newCredit(user_id, req.body);

        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to create credit for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not created',
            message: error
        });
    };
});

credit.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await deleteCredit(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to deleted credit with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

credit.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, payload } = await updateCredit(user_id, id, req.body);

        if (success && payload.id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            return {
                success,
                payload: `Failed to update credit with id: ${id} for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(400).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = credit;