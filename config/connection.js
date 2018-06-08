var mysql = require("mysql");
var connection;
var JAWSDB_URL = "mysql://sy2t49hx7gq6g59n:mkrz51g37vvpg95b@j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ri5ygb187o3anqy6";

if ( process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
        host: "j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "sy2t49hx7gq6g59n",
        password: "mkrz51g37vvpg95b",
        database: "sandwich_db"
      });
}

module.exports = connection;