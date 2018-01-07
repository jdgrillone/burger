// Set up MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = myswl.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "kikiritsu",
        database: "burgers_db"
    });
};

// Make connection
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected!  ID:" + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;