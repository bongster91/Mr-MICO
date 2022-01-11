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
    try {
        const allUsers = await getAllUsers();
        res.json(allUsers);

    } catch (error) {
        res.json(error);
    };
});

users.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getOneUser(id);
        return user;
    } catch (error) {
        res.status(404).json({
            error: 'not found'
        });
    };
});

users.post('/', async (req, res) => {
    const user = await newUser(req.body);
    res.json(user);
});

users.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
});

module.exports = users;