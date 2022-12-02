const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv/config");
const mysql = require("mysql2");
const cors = require("cors")
const AuthRoute = require("./Routes/AuthRoute");
const userRoute = require("./Routes/UserRoute")
const postRouter = require("./Routes/PostRoute")
var connection = require("./Database/DatabaseConnection")
// Routers

const app = express();
const port = process.env.Port;

// Middleware
app.use(express.json());
app.use(cors())

// connection.query("SELECT * from users", function (err, result, fields) {
//   if (err) console.log(err);
//   console.table(result)
// });

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`The backend is up and running!`);
});

// usage of routes

app.use("/auth", AuthRoute);
app.use("/user", userRoute);
app.use("/post", postRouter)
