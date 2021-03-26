DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS product_images;
DROP TABLE IF EXISTS products;


CREATE TABLE users (
    user_id    SERIAL PRIMARY KEY NOT NULL,
    email      VARCHAR(100),
    hash       VARCHAR(1000)
); 

CREATE TABLE products (
    product_id  SERIAL PRIMARY KEY NOT NULL,
    category    VARCHAR(100),
    price       DECIMAL,
    description VARCHAR(1000),
    name        VARCHAR(100)
); 

CREATE TABLE product_images (
    product_images  SERIAL PRIMARY KEY NOT NULL,
    product_id      INTEGER REFERENCES products (product_id),
    url             TEXT
); 