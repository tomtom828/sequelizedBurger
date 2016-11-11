# :hamburger: Eat Da Burger - Part 2!


### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!
This app is a remake of the original Burger repo found [here](https://github.com/tomtom28/burger). 
The key difference is that is uses the Sequelize ORM rather than raw MySQL queries.


### Functionality
Using the Sequelize ORM, the app has 3 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)


### Just for Fun
The app also has a funny "Whine" feature, where random sound effects are played to grieve a devoured burger. This feature uses jQuery click listeners.

Lastly, the app's front-end design uses Bootstrap. This means that your burgers look just as tasty on mobile as they do on desktop. Please see the screenshots below...


### Screenshots
- Desktop View
  * ![Full Size](/screenshots/fullsize.png)


- Mobile View
  * ![Mobile Size](/screenshots/mobile.png)