const db = require('../../db/dbConfig');

const getAllProperties = async (user_id) => {
    try {
        const allProperties = await db.any(
            `SELECT * FROM properties WHERE user_id=user_id`
            ,user_id
        );

        return {
            success: true,
            properties: allProperties
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
            property: oneProperty
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const newProperty = async (user_id, property) => {
    try {
        const newProperty = await db.one(
            `
                INSERT INTO properties
                (name, type, amount, user_id)
                VALUES
                ($1, $2, $3, $4)
                RETURNING *
            `,
            [ property.name, property.type, property.amount, user_id ]
        );

        return {
            success: true,
            payload: newProperty
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const deleteProperty = async (user_id, id) => {
    try {
        const deletedProperty = await db.one(
            `
                DELETE FROM properties
                WHERE 
                user_id=$1 AND id=$2
                RETURNING *
            `,
            [ user_id, id ]
        );

        return {
            success: true,
            payload: deletedProperty
        };

    } catch (error) {
        return {
            success: false,
            payload: error
        };
    };
};

const updateProperty = async (user_id, id, investment) => {
    try {
        const updatedProperty = await db.one(
            `
                UPDATE properties
                SET 
                name=$2, type=$2, amount=$3
                WHERE 
                user_id=$4 AND id=$5
                RETURNING *
            `,
            [ investment.name, investment.type, investment.amount, user_id, id ]
        );

        return {
            success: true,
            payload: updatedProperty
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
    newProperty,
    deleteProperty,
    updateProperty
};