Follow these step

npm install 

run node hash-password.js;

generate hash password of your nornal password
 normal password asd@123
 hash password   dasjfjkdcnddsjad3275h@#%7bdfmsvnmf    


 then add your database psql shell

 It looks like the tables users and transactions have not been created in the fintech_db database. You need to create these tables again.

Steps to Create Tables and Insert Data
Create the users table:


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    balance DECIMAL(10, 2) DEFAULT 0.00
);
Create the transactions table:


CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    amount DECIMAL(10, 2) NOT NULL,
    type VARCHAR(10) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Insert a sample user into the users table:

INSERT INTO users (username, email, password, balance)
VALUES ('yourusername', 'youremail', 'yourhashpassword', 1000.00);
Verify the Tables and Data
List Tables:


\dt
Describe users Table:


\d users
Describe transactions Table:


\d transactions
Select All Users:


SELECT * FROM users;
Select All Transactions:


SELECT * FROM transactions;
Example Execution


This view of psql terminal if you are follow above steps....

postgres=# \c fintech_db
You are now connected to database "fintech_db" as user "postgres".

fintech_db=# CREATE TABLE users (
fintech_db(#     id SERIAL PRIMARY KEY,
fintech_db(#     username VARCHAR(100) NOT NULL,
fintech_db(#     email VARCHAR(100) NOT NULL UNIQUE,
fintech_db(#     password VARCHAR(100) NOT NULL,
fintech_db(#     balance DECIMAL(10, 2) DEFAULT 0.00
fintech_db(# );
CREATE TABLE

fintech_db=# CREATE TABLE transactions (
fintech_db(#     id SERIAL PRIMARY KEY,
fintech_db(#     user_id INTEGER REFERENCES users(id),
fintech_db(#     amount DECIMAL(10, 2) NOT NULL,
fintech_db(#     type VARCHAR(10) NOT NULL,
fintech_db(#     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
fintech_db(# );
CREATE TABLE

fintech_db=# INSERT INTO users (username, email, password, balance)
fintech_db-# VALUES ('subhakar', 'subhakar@gmail.com', '$2b$10$tae/UYQRDyxzcF07oF23hOweBR8zSkq3YuNVx7ndWiC9o36PtI3ku', 1000.00);
INSERT 0 1

fintech_db=# \dt
              List of relations
 Schema |      Name       | Type  |  Owner
--------+-----------------+-------+----------
 public | transactions    | table | postgres
 public | users           | table | postgres
(2 rows)

fintech_db=# \d users
                                      Table "public.users"
  Column  |         Type          | Collation | Nullable |              Default
----------+-----------------------+-----------+----------+-----------------------------------
 id       | integer               |           | not null | nextval('users_id_seq'::regclass)
 username | character varying(100)|           | not null |
 email    | character varying(100)|           | not null |
 password | character varying(100)|           | not null |
 balance  | numeric(10,2)         |           |          | 0.00
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
    "users_email_key" UNIQUE CONSTRAINT, btree (email)

fintech_db=# \d transactions
                                     Table "public.transactions"
  Column  |           Type           | Collation | Nullable |              Default
----------+--------------------------+-----------+----------+-----------------------------------
 id       | integer                  |           | not null | nextval('transactions_id_seq'::regclass)
 user_id  | integer                  |           |          |
 amount   | numeric(10,2)            |           | not null |
 type     | character varying(10)    |           | not null |
 timestamp| timestamp with time zone |           |          | CURRENT_TIMESTAMP
Indexes:
    "transactions_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "transactions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id)

fintech_db=# SELECT * FROM users;
 id | username |       email       |                 password                 | balance
----+----------+-------------------+------------------------------------------+---------
  1 | subhakar | subhakar@gmail.com| $2b$10$tae/UYQRDyxzcF07oF23hOweBR8zSkq3YuNVx7ndWiC9o36PtI3ku | 1000.00
(1 row)

fintech_db=# SELECT * FROM transactions;
 id | user_id | amount | type |         timestamp
----+---------+--------+------+----------------------------
(0 rows)

After ensuring the tables and data are set up correctly, proceed with the steps to run the Hasura GraphQL engine, Node.js backend, and the frontend as mentioned in the previous instructions