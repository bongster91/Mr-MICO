const db = require('../../db/dbConfig');

const getAllDebts = async (user_id) => {
    try {
        const allDebts = await db.any(
            `
                SELECT * FROM bills
                UNION ALL
                SELECT * FROM loans
                UNION ALL
                SELECT * FROM credit
                UNION ALL
                SELECT * FROM personal_expenses
                WHERE user_id=user_id
            `, 
            user_id
        );

        return {
            success: true,
            debts: allDebts
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