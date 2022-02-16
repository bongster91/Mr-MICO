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

const getOneProperty = async (user_id, id) => {
    try {
        const oneProperty = await db.one(
            `SELECT * FROM properties WHERE user_id=$1 AND id=$2`
            , [ user_id, id ]
        );

        return {
            success: true,
            payload: oneProperty
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
    getOneProperty,
};