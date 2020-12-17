DROP DATABASE IF EXISTS kionling_db;
CREATE DATABASE kionling_db;

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT,
    username VARCHAR(200),
    password VARCHAR(200),
    PRIMARY KEY (id)
)

CREATE TABLE email (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(200),
    message VARCHAR(500)
    PRIMARY KEY(id)   
)