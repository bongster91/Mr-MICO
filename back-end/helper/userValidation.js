const { ValidationError } = require('./errorHelperFunctions');

const validateUser = (req, res, next) => {
    try {
        const {
            first_name,
            last_name,
            password,
            phone_number,
            address,
            email
        } = req.body;
        let isUserValid = true;
        let errorMsg = 'User request not formatted correctly: ';

        if (typeof first_name !== 'string') {
            isUserValid = false;
            errorMsg += `First name must be of type 'string'`;
        };
        if (typeof last_name !== 'string') {
            isUserValid = false;
            errorMsg += `Last name must be of type 'string'`;
        };
        if (typeof password !== 'string') {
            isUserValid = false;
            errorMsg += `Password must be of type 'string'`;
        };
        if (typeof phone_number !== 'string') {
            isUserValid = false;
            errorMsg += `Phone number must be of type 'string'`;
        };
        if (typeof address !== 'string') {
            isUserValid = false;
            errorMsg += `Address must be of type 'string'`;
        };
        if (typeof email !== 'string') {
            isUserValid = false;
            errorMsg += `Email must be of type 'email'`;
        };

        if (!isUserValid) throw new ValidationError(errorMsg);
    } catch (error) {
        next(error);
    };
    return next();
};

module.exports = {
    validateUser
};