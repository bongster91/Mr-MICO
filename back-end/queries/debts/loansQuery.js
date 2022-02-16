const db = require('../../db/dbConfig');

const getAllLoans = async (user_id) => {
    try {
        const allLoans = await db.any(
            `SELECT * FROM loans WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            payload: allLoans
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneLoan = async (user_id, id) => {
    try {
        const oneLoan = await db.one(
            `
                SELECT * FROM loans
                WHERE
                user_id=$1 AND id=$1
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: oneLoan
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newLoan = async (user_id, loan) => {
    try {
        const newLoan = await db.one(
            `
                INSERT INTO loans
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ loan.name, loan.type, loan.amount, user_id ]
        );

        return {
            success: true,
            payload: newLoan
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllLoans,
    getOneLoan,
    newLoan,
}; 