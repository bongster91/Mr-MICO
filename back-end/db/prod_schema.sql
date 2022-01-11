\c dbo407mpb4m0o9;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    phone_number VARCHAR(12),
    address VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    admin BOOLEAN DEFAULT false
);

-- DROP TABLE IF EXISTS assets;
-- CREATE TABLE assets (
--     assets_id BIGSERIAL PRIMARY KEY,
--     bank_accounts NUMERIC,
--     cash BIGINT,
--     properties NUMERIC,
--     investments NUMERIC
-- );

-- DROP TABLE IF EXISTS debt;
-- CREATE TABLE debt (
--     debt_id BIGSERIAL PRIMARY KEY,
--     bills NUMERIC,
--     loans NUMERIC,
--     credit NUMERIC,
--     personal_expense NUMERIC
-- );

DROP TABLE IF EXISTS user_assets;
CREATE TABLE user_assets (
    user_id BIGSERIAL NOT NULL,
    assets_id BIGSERIAL NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (assets_id) REFERENCES assets(assets_id)
);

-- DROP TABLE IF EXISTS user_debt;
-- CREATE TABLE user_debt (
--     user_id BIGSERIAL NOT NULL,
--     debt_id BIGSERIAL NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES users(user_id),
--     FOREIGN KEY (debt_id) REFERENCES debt(debt_id)
-- );

DROP TABLE IF EXISTS bank_accounts;
CREATE TABLE bank_accounts (
    assets_id BIGSERIAL REFERENCES assets(assets_id) ON DELETE CASCADE,
    bank VARCHAR(50) NOT NULL,
    type TEXT NOT NULL,
    amount BIGINT
);