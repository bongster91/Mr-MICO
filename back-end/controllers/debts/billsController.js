const express = require('express');
const bills = express.Router({ mergeParams: true });
const {
    getAllBills,
} = require('../../queries/debts/billsQuery');

bills.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, payload } = await getAllBills(user_id);

        if (success) {
            res.status(200).json({
                success,
                payload
            });

        } else {
             console.error(payload);
             return {
                success,
                payload: `Failed to get all bills for user_id: ${user_id}`
             };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});


module.exports = bills;