const express = require('express');
const users = express.Router({ mergeParams: true });
const {
    getAllUsers,
    getOneUser,
    newUser,
    deleteUser,
    updateUser
} = require('../queries/usersQuery');

users.get('/', async (req, res) => {
    const { success, payload } = await getAllUsers();

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

users.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { success, payload } = await getOneUser(id);

        if (payload.user_id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: 'Failed to find user'
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    };
});

users.post('/', async (req, res) => {
    try {
        const { success, payload } = await newUser(req.body);

        if (payload.user_id) {
            res.json({
                success,
                payload
            });

        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: 'Failed to create new user'
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

users.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { success, payload } = await updateUser(id, req.body);

        if (payload.user_id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: 'Failed to update user'
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            payload: error
        });
    };
});

users.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { success, payload } = await deleteUser(id);

        if (payload.user_id) {
            res.status(200).json({
                success,
                payload
            });

        } else {
            console.error(payload);
            res.status(404).json({
                success,
                payload: 'Failed to delete user'
            });
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            payload: error
        });
    };
});

module.exports = users;