const db = require('../../db/dbConfig');

const getAllPersonalExpenses = async (user_id) => {
    try {
        const allExpenses = await db.any(
            `SELECT * FROM personal_expenses WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            payload: allExpenses
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOnePersonalExpense = async (user_id, id) => {
    try {
        const oneExpense = await db.one(
            `
                SELECT * FROM personal_expenses
                WHERE
                user_id=$1 AND id=$2
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: oneExpense
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newPersonalExpense = async (user_id, expense) => {
    try {
        const newExpense = await db.one(
            `
                INSERT INTO personal_expenses
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ expense.name, expense.type, expense.amount, user_id ]
        );

        return {
            success: true,
            payload: newExpense
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllPersonalExpenses,
    getOnePersonalExpense,
    newPersonalExpense,
};