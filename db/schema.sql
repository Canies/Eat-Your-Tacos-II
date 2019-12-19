CREATE DATABASE taco_db;
USE taco_db;

CREATE TABLE tacos
(
    id INT NOT NULL AUTO_INCREMENT,
    toppings VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);