//import modules - dependencies
// const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config/db");
const passport = require("passport");

//express session
const expressSession = require("express-session")({
	secret: "secret123",
	resave: false,
	saveUninitialized: false,
});

//Import the SignIn model
const User = require("./models/User");

//Setting up routes OR Importing route files
const routesHome = require("./routes/indexRoute");
const routesRegister = require("./routes/registerRoutes");
const routesDashboard = require("./routes/dashboardRoutes");
const routesProduce = require("./routes/productsRoute");

//Instantiation
const app = express();

//Set up database connections
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

//Check connection
db.once("open", function () {
	console.log("Connected to MongoDB");
});

//Check for db errors
db.on("error", function (err) {
	console.error(err);
});

//Configurations
app.set("view engine", "pug");
app.set("views", "./views");

//Middleware to serves static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession);

//passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/", (request, response) => {
//     response.send('Home page');
// });

//Using routes - custom middleware because we have designed them by ourselves but have app.use
app.use("/", routesHome);
app.use("/user", routesRegister);
app.use("/dashboard", routesDashboard);
app.use("/produce", routesProduce);

//Invalid route handling
app.get('*', (req, res) => {
    res.send('404! File not found.');
});

//Final line in code
app.listen(5000, () => console.log("Working!"));
