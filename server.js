const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Check if the database connection is successful
app.get("/", (req, res) => {
  return res.json("i am alive");
});

app.get("/health", (req, res) => {
  return res.json("i am alive testing second route");
});

// Listen on port 80 for incoming HTTP requests
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
