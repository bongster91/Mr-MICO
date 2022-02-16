const db = require('../../db/dbConfig');

const getAllBills = async (user_id) => {
    try {
        const allBills = await db.any(
            `SELECT * FROM bills WHERE user_id=user_id`
            , user_id
        );

        return {
            success: true,
            payload: allBills
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneBill = async (user_id, id) => {
    try {
        const oneBill = await db.one(
            `SELECT * FROM bills WHERE user_id=$1 AND id=$2`,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: oneBill
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newBill = async (user_id, bill) => {
    try {
        const newBill = await db.one(
            `
                INSERT INTO bills
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ bill.name, bill.type, bill.amount, user_id ]
        );

        return {
            success: true,
            payload: newBill
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteBill = async (user_id, id) => {
    try {
        const deletedBill = await db.one(
            `
                DELETE FROM bills
                WHERE user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: deletedBill
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllBills,
    getOneBill,
    newBill,
    deleteBill,
};