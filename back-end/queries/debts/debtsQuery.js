const db = require('../../db/dbConfig');

const getAllDebts = async (user_id) => {
    try {
        const bills = await db.any(
            `SELECT * FROM bills WHERE user_id=user_id`, 
            user_id
        );
        
        const loans = await db.any(
            `SELECT * FROM loans WHERE user_id=user_id`,
            user_id
        );

        const credits = await db.any(
            `SELECT * FROM credit WHERE user_id=user_id`,
            user_id
        );

        const expenses = await db.any(
            `SELECT * FROM personal_expenses WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            debts: {
                bills,
                credits,
                loans,
                expenses
            }
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllDebts
};