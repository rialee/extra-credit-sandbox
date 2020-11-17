// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql")

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "extra_credit_db"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Mock Data
// var facts = [
//     { id: 1, miles: 10, rewards: 3, cashback: 4 },
//     { id: 2, miles: 4, rewards: 8, cashback: 6 },
//     { id: 3, miles: 1, rewards: 1, cashback: 5 },
// ];

// home html route
app.get("/", function (req, res) {
    res.render("index");
});


// api route get random fact from server
app.get("/api/facts", function (req, res) {

    // accessing database to get a random fact row data object
    const selectRandomQuery = "SELECT * from extra_credit_db.facts_library ORDER BY RAND () LIMIT 1"

    connection.query(selectRandomQuery, function (err, data) {
        if (err) {
            throw err;
        }
        // Test it.
        console.log('The solution is: ', data[0]);

        // res.render("index", data[0]);
        res.send(data);
    });
});



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
