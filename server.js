const express = require("express");

const bodyParser = require("body-parser");
const User = require("./dataAccess/Customer");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

if (app.get("env") === "development") {
  require("dotenv").load();
}
const users = require("./routes/users");

app.use("/", users);

app.listen(port, () => console.log(`Listening on port ${port}`));
