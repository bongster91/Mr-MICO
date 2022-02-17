const db = require('../../db/dbConfig');

const getAllPersonalExpenses = async (user_id) => {
    try {
        const allExpenses = await db.any(
            `SELECT * FROM personal_expenses WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            payload: allExpenses
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllPersonalExpenses,
};