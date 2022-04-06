const accountTypes = {
    'bankAccount': [
        'Checking', 'Saving'
    ],
    'investment': [
        '401k', 'Stock', 'Bond', 'Mutual Fund', 'ETF', 'Crypto', 'Other'
    ],
    'property': [
        'Home', 'Vehicle', 'Inventory', 'Other'
    ],
    'bill': [
        'Household', 'Subscription', 'Phone', 'Television', 'Utilities', 'Insurance', 'Streaming Services', 'Taxes' ,'Other'
    ],
    'loan': [
        'Personal', 'Auto', 'Student', 'Mortgage', 'Business', 'Other'
    ],
    'credit': [
        'American Express', 'Visa', 'MasterCard', 'Discover', 'Other'
    ],
    'expense': [
        'Ride Share', 'Groceries', 'Food/Drink', 'Services', 'Public Transport', 'Vacation', 'Charity', 'School', 'Entertainment', 'Fees/Charges', 'Health/Fitness', 'Kids', 'Self Care', 'Pets', 'Shopping', 'Money Transfer', 'Travel', 'Other'
    ]
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