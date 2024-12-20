//const dotenv = require("dotenv");
//dotenv.config();
//kan ook gewoon direct opgeroepen worden
require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://hogent.be"],
    credentials: true,
  })
);
//Lijn 15 mag verwijderd worden: dat is voor een view engine

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


app.all("/*name", (req, res) => {
  res.send("APP.JS Fallback");
});

module.exports = app;
