const express = require('express');
const investments = express.Router({ mergeParams: true });

const {
    getAllInvestments,
    getOneInvestment,
    newInvestment,
    deleteInvestment,
    updateInvestment
} = require('../../queries/assets/investmentsQuery');

investments.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, investments } = await getAllInvestments(user_id);

        if (success) {
            res.status(200).json({
                success,
                investments: investments
            });

        } else {
            console.error(investments);
            return {
                success,
                payload: `Failed to find investments with user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

investments.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, investment } = await getOneInvestment(user_id, id);

        if (success && investment.id) {
            res.status(200).json({
                success,
                investment: investment
            });

        } else {
            console.error(investment);
            return {
                success,
                payload: `Failed to find investment with user_id: ${user_id} at id: ${id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    };
});

investments.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, newInvestment } = await newInvestment(user_id, req.body);

        if (success && newInvestment.id) {
            res.status(201).json({
                success,
                newInvestment: newInvestment
            });

        } else {
            console.error(newInvestment);
            return {
                success,
                payload: `Failed to create new investment for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

investments.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, deletedInvestment } = await deleteInvestment(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                deletedInvestment: deletedInvestment
            });

        } else {
            console.error(deletedInvestment);
            return {
                success,
                payload: `Failed to delete investment with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

investments.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, updatedInvestment } = await updateInvestment(user_id, id, req.body);

        if (success && updatedInvestment.id) {
            res.status(201).json({
                success,
                updatedInvestment: updatedInvestment
            });

        } else {
            console.error(updatedInvestment);
            return {
                success,
                payload: `Failed to update investment with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = investments;