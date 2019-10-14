var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NODEJS_db"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'KERLA1' WHERE name = 'gautam'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});