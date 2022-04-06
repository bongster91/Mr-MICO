const db = require('../../db/dbConfig');

const getAllInvestments = async (user_id) => {
    try {
        const allInvestments = await db.any(
            `SELECT * FROM investments WHERE user_id=user_id`
            , user_id
        );

        return {
            success: true,
            investments: allInvestments
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneInvestment = async (user_id, id) => {
    try {
        const oneInvestment = await db.one(
            `SELECT * FROM investments WHERE user_id=$1 AND id=$2`
            , [ user_id, id ]
        );

        return {
            success: true,
            investment: oneInvestment
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newInvestment = async (user_id, investment) => {
    try {
        const newInvestment = await db.one(
            `
                INSERT INTO investments
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ investment.name, investment.type, investment.amount, user_id ]
        );

        return {
            success: true,
            newInvestment: newInvestment
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteInvestment = async (user_id, id) => {
    try {
        const deletedInvestment = await db.one(
            `
                DELETE FROM investments 
                WHERE user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            deletedInvestment: deletedInvestment
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateInvestment = async (user_id, id, investment) => {
    try {
        const updatedInvestment = await db.one(
            `
                UPDATE investments
                SET name=$1, type=$2, amount=$3
                WHERE user_id=$4 AND id=$5
                RETURNING *
            `,
            [ investment.name, investment.type, investment.amount, user_id, id ]
        );

        return {
            success: true,
            updatedInvestment: updatedInvestment
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllInvestments,
    getOneInvestment,
    newInvestment,
    deleteInvestment,
    updateInvestment
};