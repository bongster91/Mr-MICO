const express = require('express');
const loans = express.Router({ mergeParams: true });
const {
    getAllLoans,
    getOneLoan,
    newLoan,
    deleteLoan,
    updateLoan
} = require('../../queries/debts/loansQuery');

loans.get('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, loans } = await getAllLoans(user_id);

        if (success) {
            res.status(200).json({
                success,
                loans: loans
            });

        } else {
            console.error(loans);
            return {
                success,
                payload: `Failed to get all loans for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resources not found',
            message: error
        });
    };
});

loans.get('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, loan } = await getOneLoan(user_id, id);

        if (success && loan.id) {
            res.status(200).json({
                success,
                loan: loan
            });

        } else {
            console.error(loan);
            return {
                success,
                payload: `Failed to get one loan with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not found',
            message: error
        });
    }
});

loans.post('/', async (req, res) => {
    const { user_id } = req.params;

    try {
        const { success, newLoan } = await newLoan(user_id, req.body);

        if (success && newLoan.id) {
            res.status(201).json({
                success,
                newLoan: newLoan
            });

        } else {
            console.error(newLoan);
            return {
                success,
                payload: `Failed to create new loan for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not created',
            message: error
        });
    };
});

loans.delete('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, deletedLoan } = await deleteLoan(user_id, id);

        if (success) {
            res.status(200).json({
                success,
                deletedLoan: deletedLoan
            });

        } else {
            console.error(deletedLoan);
            return {
                success,
                payload: `Failed to delete loan with id: ${id} for user_id: ${user_id}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not deleted',
            message: error
        });
    };
});

loans.put('/:id', async (req, res) => {
    const { user_id, id } = req.params;

    try {
        const { success, updatedLoan } = await updateLoan(user_id, id, req.body);

        if (success && updatedLoan.id) {
            res.status(200).json({
                success,
                updatedLoan: updatedLoan
            });

        } else {
            console.error(updatedLoan);
            return {
                success,
                payload: `Failed to update loan with id: ${id} for user_id: ${user_id} with details: ${req.body}`
            };
        };

    } catch (error) {
        res.status(404).json({
            error: 'Resource not updated',
            message: error
        });
    };
});

module.exports = loans;