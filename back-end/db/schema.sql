DROP DATABASE IF EXISTS mico_db;
CREATE DATABASE mico_db;
\c mico_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    phone_number VARCHAR(12),
    address VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    admin BOOLEAN DEFAULT false,
    bank_id BIGINT REFERENCES bank_accounts(id),
    property_id BIGINT REFERENCES properties(id),
    investment_id BIGINT REFERENCES investments(id)
);

DROP TABLE IF EXISTS bank_accounts;
CREATE TABLE bank_accounts (
    id BIGSERIAL PRIMARY KEY,
    bank VARCHAR(50) NOT NULL,
    type TEXT NOT NULL,
    amount BIGINT NOT NULL
);

DROP TABLE IF EXISTS properties;
CREATE TABLE properties (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type TEXT NOT NULL,
    worth BIGINT NOT NULL
);

DROP TABLE IF EXISTS investments;
CREATE TABLE investments (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type TEXT NOT NULL,
    amount BIGINT NOT NULL
);