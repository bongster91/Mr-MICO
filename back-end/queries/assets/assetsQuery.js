const db = require('../../db/dbConfig');

const getAllAssets = async (user_id) => {
    try {
        const allAssets = await db.any(
            `
                SELECT * FROM bank_accounts 
                UNION ALL 
                SELECT * FROM properties 
                UNION ALL 
                SELECT * FROM investments 
                WHERE user_id=user_id
            `,
            user_id
        );
        return {
            success: true,
            payload: allAssets
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

module.exports = {
    getAllAssets
};