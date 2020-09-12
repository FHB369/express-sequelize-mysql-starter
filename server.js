"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const DB = require("./database.js");

module.exports.init = function (configs) {
  const app = express();

  // config express middlewares
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(cors());
  app.use(helmet());

  app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send(err);

    next();
  });

  app.use(compression());
  app.use(morgan(configs.logger.format));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true | false }));

  //checking DB connection
  DB.checkAuthentication();
  // setup routes
  app.get("/", (req, res) => {
    res.json("Welcome to the Express-Sequelize-MySQL-Starter");
  });

  require("./routes")(app);

  return app;
};
