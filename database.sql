-- follow these steps in terminal to set up the database --

-- * to access postgres (requires password)
--psql -U postgres
-- * then create database by copying query below
CREATE DATABASE brighte_eats; --right click on terminal to paste the copied query


-- * to access newly created database, run command below
-- \c brighte-eats

CREATE TABLE leads (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   mobile VARCHAR(20),
   postcode VARCHAR(10),
   services_interested text[]
);
-- * this command will list all tables in the current database
--\dt

-- * this command will get all records from leads table
SELECT * FROM "leads";
