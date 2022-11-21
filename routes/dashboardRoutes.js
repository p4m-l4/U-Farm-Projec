const express = require("express");
const User = require("../models/Uploads");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

router.get("/clientdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
if (req.user.role == "generalusers") {
	res.render("clientDashboard");
} else res.send("You must be a registered user to access this page.");
});
router.post("/clientdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	console.log(req.body);
});

router.get("/farmerdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
if (req.user.role == "farmerone") {
	res.render("farmerDashboard");
} else res.send("You must be a registered Farmer one to access this page.");
});

router.post("/farmerdashboard", (req, res) => {
	console.log(req.body);
});


router.get("/urbandashboard",  connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
if (req.user.role == "urbanfarmer") {
	res.render("urbanDashboard");
} else res.send("You must be a registered Urban Farmer to access this page.");
});
	// try {
	// 		// const order = {_id:-1};
	// 		let products = await ProductUpload.find({ userID: req.body.userID }).sort({ $natural: -1 });
	// 		res.render("produce-list", { products: products });
	// 	} catch (error) {
	// 		res.status(400).send("Unable to get products list");
	// 		console.log(error);
	// 	}
	// });
// router.get("/urbandashboard", (req, res) => {
// 	res.render("urbanDashboard");
// });
router.post("/urbandashboard", (req, res) => {
	console.log(req.body);
});

router.get("/agricdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	req.session.user = req.user;
if (req.user.role == "agriculturalofficer") {
	res.render("agricDashboard");
} else res.send("You must be an Agricultural officer to access this page.");
});
router.post("/agricdashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	console.log(req.body);
});

module.exports = router;