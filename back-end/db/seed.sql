\c mico_db;

INSERT INTO users (
    first_name, last_name, password, phone_number, address, email, admin
) VALUES (
    'Mister', 'Meowgi', '000000', 1111111111, '123 Beans Lane', 'catchmice@fields.com', true
);

INSERT INTO bank_accounts (
    user_id, bank, type, amount
) VALUES
    (1, 'Catnip Collective', 'Checking', 250000),
    (1, 'Mice Catchers', 'Checking', 100000),
    (1, 'Lick Le Fur', 'Savings', 394000)
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
    (1, 'Google', 'Stock', 15000),
    (1, 'Kitty Bond', 'Bond', 10000),
    (1, 'Catnip Collective Fund', 'Mutual Fund', 5000),
    (1, 'Diverse Catnip', 'ETF', 9000)
;