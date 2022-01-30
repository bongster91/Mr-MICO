\c mico_db;

INSERT INTO users (
    first_name, last_name, password, phone_number, address, email, admin
) VALUES (
    'Mister', 'Meowgi', '000000', '111-111-1111', '123 Beans Lane', 'catchmice@fields.com', true
);

INSERT INTO bank_accounts (
    user_id, bank, type, amount
) VALUES
    (1, 'Catnip Collective', 'Checking', 250000),
    (1, 'Mice Catchers', 'Checking', 100000),
    (1, 'Lick Le Fur', 'Savings', 394000),
    (1, 'Lick Le Fur', 'Checking', 50000),
    (1, 'Catnip Collective', 'Savings', 20000),
    (1, 'Mice Catchers', 'Savings', 25000)
;

INSERT INTO properties (
    user_id, name, type, worth
) VALUES
    (1, '4 Tier Cat Tree Extravaganza', 'Home', 20000),
    (1, 'Paw Pool Raft', 'Vehicle', 5000),
    (1, 'Meowgi Portait', 'Inventory', 15000),
    (1, 'Wooden Arch Bridge', 'Other', 2000)
;

INSERT INTO investments (
    user_id, name, type, amount
) VALUES
    (1, 'Dogecoin', 'Crypto', 2000),
    (1, 'Future Retirement', '401k', 30000),
    (1, 'Kitty Korp', 'Stock', 15000),
    (1, 'Kitty Bond', 'Bond', 10000),
    (1, 'Catnip Collective Fund', 'Mutual Fund', 5000),
    (1, 'Diverse Catnip', 'ETF', 9000)
;

INSERT INTO bills (
    user_id, name, note, type, amount
) VALUES
    (1, '12-Cat Collect', 'regular litter cleaner', 'Household', 500),
    (1, 'Cats-R-Us', 'kitten daycare', 'Household', 700), 
    (1, 'Feline Finder', 'dating site', 'Other', 100), 
    (1, 'Netflix', 'gotta watch bird videos', 'Subscription', 100),
    (1, 'Kitty Koffee Kollective', 'monthly coffee subscription', 'Subscription', 100)
;

INSERT INTO loans (
    user_id, name, note, type, amount
) VALUES
    (1, 'American Cat Promotion', 'govt assistance for cats', 'Personal', 5000),
    (1, 'Catmobile', 'car', 'Auto', 10000), 
    (1, 'EduCated', 'kitty university', 'Student', 8000), 
    (1, '5 Tier Cat Tower Complex', '2nd home', 'Mortgage', 7000),
    (1, 'Small Business Fund', 'government assistance for small businesses', 'Business', 20000)
;

INSERT INTO credit (
    user_id, name, note, type, amount
) VALUES
    (1, 'Premium', '', 'American Express', 20000),
    (1, 'Value', '', 'Discover', 3000), 
    (1, 'One Preferred', '', 'Visa', 5000), 
    (1, 'Select', '', 'Mastercard', 17000)
;

INSERT INTO personal_expenses (
    user_id, name, note, amount
) VALUES
    (1, 'Relaxing Sauna', 'spa day', 500),
    (1, 'Starbucks', 'vanilla latte', 10), 
    (1, 'Kitty Rolex', 'watch on sale', 12000), 
    (1, 'Catnip', 'snacks for the month', 950)
;
