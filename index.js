require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')
const app = express();
const methodOverride = require("method-override");
const port = process.env.PORT || 3000;

//middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(port);
mongoose.connect(process.env.MONGO_URI)