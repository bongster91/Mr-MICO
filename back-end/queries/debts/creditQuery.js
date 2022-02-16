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

module.exports = {
    getAllCredit,
    getOneCredit,
};