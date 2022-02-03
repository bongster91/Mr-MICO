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

};

const deleteBankAccount = async (user_id, id) => {

};

const updateBankAccount = async (user_id, id, bankAccount) => {

};

module.exports = {
    getAllBankAccounts,
    getOneBankAccount,
    newBankAccount,
    deleteBankAccount,
    updateBankAccount
};