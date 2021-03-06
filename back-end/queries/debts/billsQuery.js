const db = require('../../db/dbConfig');

const getAllBills = async (user_id) => {
    try {
        const allBills = await db.any(
            `SELECT * FROM bills WHERE user_id=user_id`
            , user_id
        );

        return {
            success: true,
            bills: allBills
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
            bill: oneBill
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
            newBill: newBill
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
                WHERE 
                user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            deletedBill: deletedBill
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateBill = async (user_id, id, bill) => {
    try {
        const updatedBill = await db.one(
            `
                UPDATE bills
                SET
                name=$1, type=$2, amount=$3
                WHERE 
                user_id=$4 AND id=$5
                RETURNING *
            `,
            [ bill.name, bill.type, bill.amount, user_id, id ]
        );

        return {
            success: true,
            updatedBill: updatedBill
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
    updateBill
};