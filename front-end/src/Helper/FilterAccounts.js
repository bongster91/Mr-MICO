const accountTypes = {
    'bankAccount': ['Checking', 'Saving'],
    'investment': ['401k', 'Stock', 'Bond', 'Mutual Fund', 'ETF', 'Crypto'],
    'property': ['Home', 'Vehicle', 'Inventory', 'Other']
};

const findAccountType = (response) => {
    for (let key in response) {
   
        if (accountTypes[key]) {
            return {
                key: key,
                accountTypes: accountTypes[key]
            };
        };
    };
};

module.exports = {
    findAccountType,
};