require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const favicon = require("serve-favicon");

// Express App
const app = express();

// Connect to MongoDB Atlas
const dbURI =
  "mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.gccgm.mongodb.net/node-tutorial?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//  register view engine
app.set("view engine", "ejs");

//Middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(favicon(('public/favicon.ico')));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.send("<p>About Page</p>");
  res.render("about", { title: "About" });
});
// Blog routes
app.use('/blogs', blogRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
