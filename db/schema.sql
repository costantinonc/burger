CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN,
    date TIMESTAMP,
	PRIMARY KEY (id)
);

USE burgers_db;


INSERT burgers (burger_name) VALUES ('bacon burger');
INSERT burgers (burger_name) VALUES ('egg burger');
INSERT burgers (burger_name) VALUES ('cheese burger');