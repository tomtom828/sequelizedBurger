-- @author: Thomas Thompson
-- @github: tomtom28
-- @comment: Homework 15 - Eat the Burger - Part 2!




--- Note this is for creating the burgers_db Database locally on your machine



-- Database Creation
CREATE DATABASE burgers_db;

USE burgers_db;


-- Table Creation
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);
