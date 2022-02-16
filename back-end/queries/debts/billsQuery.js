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

module.exports = {
    getAllBills,
};