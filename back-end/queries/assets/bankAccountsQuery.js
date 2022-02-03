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