DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(60),
	department_name VARCHAR(60), 
	price DECIMAL(10,2), 
	stock_quantity INTEGER(11),
    
    PRIMARY KEY (id)
);