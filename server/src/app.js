const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
("use strict");
const { sequelize } = require("./models");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
require("./routes")(app);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`server started on port ${config.port}`);
});
