// Set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "cat_db";
});

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected!  ID:" + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;