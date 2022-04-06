DROP DATABASE IF EXISTS mico_db;
CREATE DATABASE mico_db;
\c mico_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(50),
    phone_number TEXT,
    address VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    admin BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS bank_accounts;
CREATE TABLE bank_accounts (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS properties;
CREATE TABLE properties (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS investments;
CREATE TABLE investments (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS bills;
CREATE TABLE bills (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS loans;
CREATE TABLE loans (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS credit;
CREATE TABLE credit (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS expenses;
CREATE TABLE expenses (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50),
    type TEXT,
    amount NUMERIC(1000, 2),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);
