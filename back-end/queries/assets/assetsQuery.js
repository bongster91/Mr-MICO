const db = require('../../db/dbConfig');

const getAllAssets = async (user_id) => {
    try {
        const bankAccounts = await db.any(
            `SELECT * FROM bank_accounts WHERE user_id=user_id`,
            user_id
        );

        const investments = await db.any(
            `SELECT * FROM investments WHERE user_id=user_id`,
            user_id
        );

        const properties = await db.any(
            `SELECT * FROM properties WHERE user_id=user_id`,
            user_id
        );

        return {
            success: true,
            assets: {
                bankAccounts,
                investments,
                properties
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
    getAllAssets
};