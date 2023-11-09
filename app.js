const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./src/config/db")
const cors = require("cors");
const routes = require("./src/routes/index");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());


app.use("/api", routes);

dbConnection()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
