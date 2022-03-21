const express = require('express');
const users = express.Router({ mergeParams: true });
const portfolioContoller = require('./portfolioController');

const {
    getAllUsers,
    getOneUser,
    newUser,
    deleteUser,
    updateUser
} = require('../queries/userQuery');

const {
    customErrorHandler
} = require('../helper/errorHelperFunctions');
const { validateUser } = require('../helper/userValidation');

users.get('/', async (req, res) => {
    try {
        const { success, allUsers } = await getAllUsers();
    
        if (success) {
            res.status(200).json({
                success: true,
                allUsers: allUsers
            });
            
        } else {
            return {
                success: false,
                payload: `Failed to get all users with ${payload}`
            };
        }; 

    } catch (error) {
        res.status(400).json({
            error: 'Resources not found',
            message: error
        });
    };
});

users.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { success, user } = await getOneUser(id);

        if (user.user_id) {
            res.status(200).json({
                success,
                user
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

users.post('/', validateUser, async (req, res) => {
    try {
        const { success, payload } = await newUser(req.body);

        if (payload.user_id) {
            res.status(201).json({
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

users.put('/:id', validateUser, async (req, res) => {
    const { id } = req.params;

    try {
        const { success, payload } = await updateUser(id, req.body);

        if (payload.user_id) {
            res.status(201).json({
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

users.use('/:user_id/portfolio', portfolioContoller);

module.exports = users;