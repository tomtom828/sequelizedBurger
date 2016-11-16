-- @author: Thomas Thompson
-- @github: tomtom28
-- @comment: Homework 15 - Eat the Burger - Part 2!


--- Note this is just for creating the burgers_db MySQL database locally on your machine...
--- Creating tables and inserting data is now done using Sequelize migrations...
--- Run line 12 in your MySQL workbench to set up the database.


-- Database Creation
CREATE DATABASE burgers_db;


-- Then run the following in your Sequelize CLI to create the migrations and seed the database
-- Note this only works since the migrations already exist in the repo
` sequelize db:migrate `
` sequelize db:seed:all `






--- Below are the commands used in the Sequelized CLI to create the migrations...
--- Note that there is no need to run this if you clone down the repo, since the migrations already exist...
--- The below lines are just for my personal documentation (they were ran in command line to set up migrations).


--- 1. Set Up Sequelize index.js and folders
` sequelize init `


--- 2a. Create the burgers.js model and Migrations
` sequelize model:create --name burgers --attributes 'burger_name:string devoured:boolean' `

--- 2b. Run migration to get it into MySQL database (the burger entries were added manaully)
` sequelize db:migrate `


--- 3a. Create a seed file for burgers (up and down entries were done manually)
` sequelize seed:create --name burger-seeder `

--- 3b. Run the Database seeder file
` sequelize db:seed:all `


--- 4a. Create the devourers.js model and Migrations (this is an additional table for burger eater associations)
` sequelize model:create --name devourers --attributes 'devourer_name:string' `

--- 4b. Run migration to get it into MySQL database (the burger entries were added manaully)
` sequelize db:migrate `




--- Below are how to remove the migration and/or seeds (aka calling the "down" of the models)...
--- Again, the below lines are just for my personal documentation (they can be ran in command line).


--- Remove the seeds
` sequelize db:seed:undo:all `

--- Remove the whole table
` sequelize db:migrate:undo:all `