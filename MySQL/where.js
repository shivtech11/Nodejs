var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NODEJS_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'NEW DELHI 59'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});