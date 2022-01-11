\c dbo407mpb4m0o9;

INSERT INTO users (
    first_name, last_name, password, phone_number, address, email, admin
) VALUES (
    'Mister', 'Meowgi', '000000', '111-111-1111', '123 Beans Lane', 'catchmice@fields.com', true, 1, 1, 1
);

INSERT INTO bank_accounts (
    bank, type, amount
) VALUES
    ('Catnip Collective', 'Checking', 250000),
    ('Lick Le Fur', 'Savings', 394000)
;

INSERT INTO properties (
    name, type, worth
) VALUES
    ('4 Tier Cat Tree Extravaganza', 'home', 20000),
    ('Paw Pool Raft', 'Vehicle', 5000)
;

INSERT INTO investments (
    name, type, amount
) VALUES
    ('Dogecoin', 'Crypto', 2000),
    ('Future Retirement', '401k', 30000)
;