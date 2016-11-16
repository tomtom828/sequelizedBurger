# :hamburger: Eat Da Burger - Part 2!


### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!

This app is a remake of the original Burger repo found [here](https://github.com/tomtom28/burger). 
The key difference is that is uses the **Sequelize ORM** rather than raw MySQL queries.
And, using Sequelize, the app is now relational, tracking which users ate which burger.

Please try out the deployed app in Heroku, found [here](http://eat-da-burgerz-2.herokuapp.com).


### Functionality
Using the Sequelize ORM, the app has 3 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
    * note that at a SQL join is used to match each devoured burger to its respective customer. 
  2. UPDATE a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database (via Sequelize ORM)
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database (via Sequelize ORM)
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)


### Cloning down the repo
If you wish to clone the app down to your local machine...

1. Use MySQL Workbench to create a database called `burgers_db`:
  * The raw SQL query is `CREATE DATABASE burgers_db;`.
2. Inside the `config` folder, open up the `config.json` file:
  * In the `development` object, add your MySQL localhost `password`.
3. In your terminal, `cd` into the project folder and run:
  * `npm install` to download all node.js dependencies
  * `sequelize db:migrate && sequelize db:seed:all` to migrate/seed the database via Sequelize CLI
4. Finally, you can run the programming using:
  * `node server.js` in the terminal to start the node server
  * And navigating to `localhost:3000` in your browser.


### Just for Fun
The app also has a funny "Whine" feature, where random sound effects are played to grieve a devoured burger. This feature uses jQuery click listeners.

If a customer does not enter their name upon devouring a burger, it will default to *Anynomous*.

Lastly, the app's front-end design uses Bootstrap. This means that your burgers look just as tasty on mobile as they do on desktop. Please see the screenshots below...


### Screenshots
- Desktop View
  * ![Full Size](/screenshots/fullsize.png)


- Mobile View
  * ![Mobile Size](/screenshots/mobile.png)


### For the truly curious
The Sequelize `models` were generated using the Sequelize CLI (**C**ommand **L**ine **I**nterface).

For more information regarding those nifty commands, please refer to the `schema.sql` file inside the `db` folder.

Lastly, heroku deployment setup was similiar to localhost setup. After adding JASWDB to the app, the following was done...
  * Connected to the JAWSDB database using MySQL workbench and the hostname and passwords provided for my app
  * From node, two commands were used to migrate and seed the db...
    * `heroku run sequelize db:migrate --env production -m --app eat-da-burgerz-2`
    * `heroku run sequelize db:seed:all --env production -m --app eat-da-burgerz-2`