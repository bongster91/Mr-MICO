const db = require('../../db/dbConfig');

const getAllCredit = async (user_id) => {
    try {
        const allCredit = await db.any(
            `SELECT * FROM credit WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            payload: allCredit
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneCredit = async (user_id, id) => {
    try {
        const oneCredit = await db.one(
            `
                SELECT * FROM credit 
                WHERE
                user_id=$1 AND id=$2
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: oneCredit
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newCredit = async (user_id, credit) => {
    try {
        const newCredit = await db.one(
            `
                INSERT INTO credit
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ credit.name, credit.type, credit.amount, user_id ]
        );

        return {
            success: true,
            payload: newCredit
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllCredit,
    getOneCredit,
    newCredit,
};