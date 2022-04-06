const db = require('../../db/dbConfig');

const getAllLoans = async (user_id) => {
    try {
        const allLoans = await db.any(
            `SELECT * FROM loans WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            loans: allLoans
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
            loan: oneLoan
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
            newLoan: newLoan
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteLoan = async (user_id, id) => {
    try {
        const deletedLoan = await db.one(
            `
                DELETE FROM loans
                WHERE
                user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            deletedLoan: deletedLoan
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateLoan = async (user_id, id, loan) => {
    try {
        const updatedLoan = await db.one(
            `
                UPDATE loans
                SET
                name=$1, type=$2, amount=$3
                WHERE
                user_id=$4 AND id=$5
                RETURNING *
            `,
            [ loan.name, loan.type, loan.amount, user_id, id ]
        );

        return {
            success: true,
            updatedLoan: updatedLoan
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
    deleteLoan,
    updateLoan
}; 