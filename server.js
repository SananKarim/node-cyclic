const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bot-db",
});

// Check if the database connection is successful
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  return res.json("testing");
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM WORKER";
  db.query(sql, (error, data) => {
    if (error) {
      console.error("Error querying database:", error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// Listen on port 80 for incoming HTTP requests
app.listen(80, () => {
  console.log("Server is running on port 80");
});
