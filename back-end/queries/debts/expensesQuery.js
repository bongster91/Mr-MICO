const db = require('../../db/dbConfig');

const getAllExpenses = async (user_id) => {
    try {
        const allExpenses = await db.any(
            `SELECT * FROM expenses WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            expenses: allExpenses
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneExpense = async (user_id, id) => {
    try {
        const oneExpense = await db.one(
            `
                SELECT * FROM expenses
                WHERE
                user_id=$1 AND id=$2
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            expense: oneExpense
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newExpense = async (user_id, expense) => {
    try {
        const newExpense = await db.one(
            `
                INSERT INTO expenses
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ expense.name, expense.type, expense.amount, user_id ]
        );

        return {
            success: true,
            newExpense: newExpense
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteExpense = async (user_id, id) => {
    try {
        const deletedExpense = await db.one(
            `
                DELETE FROM expenses
                WHERE
                user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            deletedExpense: deletedExpense
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateExpense = async (user_id, id, expense) => {
    try {
        const updatedExpense = await db.one(
            `
                UPDATE expenses
                SET
                name=$1, type=$2, amount=$3
                WHERE
                user_id=$4 AND id=$5
                RETURNING *
            `,
            [ expense.name, expense.type, expense.amount, user_id, id ] 
        );

        return {
            success: true,
            updatedExpense: updatedExpense
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllExpenses,
    getOneExpense,
    newExpense,
    deleteExpense,
    updateExpense
};