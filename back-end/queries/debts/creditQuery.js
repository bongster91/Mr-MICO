const db = require('../../db/dbConfig');

const getAllCredit = async (user_id) => {
    try {
        const allCredit = await db.any(
            `SELECT * FROM credit WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            credits: allCredit
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
            credit: oneCredit
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
            newCredit: newCredit
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteCredit = async (user_id, id) => {
    try {
        const deletedCredit = await db.one(
            `
                DELETE FROM credit
                WHERE
                user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            deletedCredit: deletedCredit
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateCredit = async (user_id, id, credit) => {
    try {
        const updatedCredit = await db.one(
            `
                UPDATE credit
                SET
                name=$1, type=$2, amount=$3
                WHERE
                user_id=$4 AND id=$5
                RETURNING *
            `,
            [ credit.name, credit.type, credit.amount, user_id, id ]
        );

        return {
            success: true,
            updatedCredit: updatedCredit
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
    deleteCredit,
    updateCredit
};