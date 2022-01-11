const customErrorHandler = (e, req, res, next) => {
    console.log(`[ERROR]: ${e}`);

    res.status(e.statusCode).json({
        error: e.name,
        message: e.message
    });
};

class ValidationError extends Error {
    constructor(message) {
        super(message);

        this.name = 'Validation Error';
        this.statusCode = '400';
        this.message = message;
    };
};

module.exports = {
    customErrorHandler,
    ValidationError
};