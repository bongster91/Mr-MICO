const db = require('../db/dbConfig');

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM users');
        return {
            success: true,
            payload: allUsers
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneUser = async (id) => {
    try {
        const oneUser = await db.one('SELECT * FROM users WHERE user_id=$1', id);
        return {
            success: true,
            payload: oneUser
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newUser = async (user) => {
    try {
        const newUser = await db.one(
            `
            INSERT INTO users 
            (first_name, last_name, password, phone_number, address, email) 
            VALUES
            ($1, $2, $3, $4, $5, $6) 
            RETURNING *
            `,
            [
                user.first_name, 
                user.last_name, 
                user.password, 
                user.phone_number, 
                user.address, 
                user.email
            ]
        );
        return {
            success: true,
            payload: newUser
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one(
            'DELETE FROM users WHERE user_id=$1 RETURNING *', id
        );
        return {
            success: true,
            payload: deletedUser
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateUser = async (id, user) => {
    try {
        const updatedUser = await db.one(
            `UPDATE users 
            SET 
                first_name=$1, 
                last_name=$2, 
                password=$3, 
                phone_number=$4, 
                address=$5, 
                email=$6 
            WHERE user_id=$7 
            RETURNING *
            `,
            [
                user.first_name, 
                user.last_name, 
                user.password, 
                user.phone_number, 
                user.address, 
                user.email, 
                id
            ]
        );
        return {
            success: true,
            payload: updatedUser
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllUsers,
    getOneUser,
    newUser,
    deleteUser,
    updateUser
};