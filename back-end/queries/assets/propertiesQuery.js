const db = require('../../db/dbConfig');

const getAllProperties = async (user_id) => {
    try {
        const allProperties = await db.any(
            `SELECT * FROM properties WHERE user_id=user_id`
            ,user_id
        );

        return {
            success: true,
            payload: allProperties
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};


module.exports = {
    getAllProperties,
    
};