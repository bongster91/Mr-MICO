const db = require('../../db/dbConfig');

const getAllBankAccounts = async (user_id) => {
    try {
        const allBankAccounts = await db.any(
            `SELECT * FROM bank_accounts WHERE user_id=user_id`
            ,user_id
        );

        return {
            success: true,
            payload: allBankAccounts
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const getOneBankAccount = async (user_id, id) => {
    try {
        const oneBankAccount = await db.one(
            `SELECT * FROM bank_accounts WHERE user_id=$1 AND id=$2`
            , [ user_id, id ]
        );

        return {
            success: true,
            payload: oneBankAccount
        };

    } catch (error) {
       return {
           success: false,
           payload: error
       };
   };
};

const newBankAccount = async (user_id, bankAccount) => {
    try {
        const newBankAccount = await db.one(
            `
                INSERT INTO bank_accounts
                (bank, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ bankAccount.bank, bankAccount.type, bankAccount.amount, user_id ]
        );

        return {
            success: true,
            payload: newBankAccount
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteBankAccount = async (user_id, id) => {
    try {
        const deletedBankAccount = await db.one(
            `
            DELETE FROM bank_accounts
            WHERE user_id=$1 AND id=$2
            RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: deletedBankAccount
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateBankAccount = async (user_id, id, bankAccount) => {
    try {
        const updatedBankAccount = await db.one(
            `
            UPDATE bank_accounts
            SET bank=$1, type=$2, amount=$3
            WHERE user_id=$4 AND id=$5
            RETURNING *
            `,
            [ bankAccount.bank, bankAccount.type, bankAccount.amount, user_id, id ]
        );

        return {
            success: true,
            payload: updatedBankAccount
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllBankAccounts,
    getOneBankAccount,
    newBankAccount,
    deleteBankAccount,
    updateBankAccount
};