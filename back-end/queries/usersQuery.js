const db = require('../db/dbConfig');

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM users');
        return allUsers;
    } catch (error) {
        return error;
    };
};

const getOneUser = async (id) => {
    try {
        const oneUser = await db.any('SELECT * FROM users WHERE id=$1', id);
        return oneUser;
    } catch (error) {
        return error;
    };
};

const newUser = async (user) => {
    try {
        const newUser = await db.one(
            'INSERT INTO users (first_name, last_name, password, phone_number, address, email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [
                user.first_name, user.last_name, user.password, user.phone_number, user.address, user.email
            ]
        );
    } catch (error) {
        return error;
    };
};

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one(
            'DELETE FROM users WHERE id=$1 RETURNING *', id
        );
        return deleteUser;
    } catch (error) {
        return error;
    };
};

const updateUser = async (user) => {
    try {
        const updatedUser = await db.one(
            'UPDATE users SET first_name=$1, last_name=$2, password=$3, phone_number=$4, address=$5, email=$6',
            [
                user.first_name, user.last_name, user.password, user.phone_number, user.address, user.email
            ]
        );
        return updatedUser;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllUsers,
    getOneUser,
    newUser,
    deleteUser,
    updateUser
};