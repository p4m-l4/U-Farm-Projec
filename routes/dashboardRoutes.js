const express = require("express");
const User = require("../models/Uploads");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

router.get("/clientdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	res.render("clientDashboard");
});
router.post("/clientdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	console.log(req.body);
});

router.get("/farmerdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	res.render("farmerDashboard");
});
router.post("/farmerdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	console.log(req.body);
});
router.get("/urbandashboard", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	try {
		let items = await User.find({ role: "urbanFarmer" });
		res.render("urbanDashboard", { farmerones: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});
// router.get("/urbandashboard", (req, res) => {
// 	res.render("urbanDashboard");
// });
router.post("/urbandashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	console.log(req.body);
});

router.get("/agricdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
if (req.user.role == "agricofficer") {
	res.render("agricDashboard");
} else
	res.send('You must be an Agricultural officer to access this page.')
});
router.post("/agricdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	console.log(req.body);
});

module.exports = router;