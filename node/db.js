import mysql from "mysql2";



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "969696",
    database: "blog",
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("database Connected");
});


export default db;