DROP DATABASE IF EXISTS lr7ji4dahnkxuinu;

CREATE DATABASE lr7ji4dahnkxuinu;
USE lr7ji4dahnkxuinu;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);