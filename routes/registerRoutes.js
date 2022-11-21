const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");


//Importing model
const User = require('../models/User');

router.get("/registeragricofficer", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	res.render("registerAgric");
});
router.post("/registeragricofficer", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	console.log(req.body);
	try {
		const user = new User(req.body);

		let uniqueID = await User.findOne({ userID: req.body.userID });
		if (uniqueID) {
			return res.status(400).send("This ID is already in use.");
		} else {
			await User.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/registeragricofficer");
			});
		}
	} catch (error) {
		res.status(400).send("Registration failed");
		console.log(error);
	}
});

router.get("/registerurbanfarmer", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	res.render("registerUo");
});
router.post("/registerurbanfarmer", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	console.log(req.body);
	try {
		const user = new User(req.body);

		let uniqueID = await User.findOne({ userID: req.body.userID });
		let uniqueNIN = await User.findOne({ uniqueNIN: req.body.NIN });
		if (uniqueID) {
			return res.status(400).send("This ID is already in use.");
		} else if (uniqueNIN) {
			return res.status(400).send("This National ID number is already in use.");
		} else {
			await User.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/dashboard/urbandashboard");
			});
		}
	} catch (error) {
		res.status(400).send("Registration failed");
		console.log(error);
	}
});

router.get("/registerGeneral", (req, res) => {
	res.render("registerGeneral");
});
router.post("/registerGeneral", async (req, res) => {
	console.log(req.body);
	try {
		const user = new User(req.body);

		let uniqueID = await User.findOne({ userID: req.body.userID });
		if (uniqueID) {
			return res.status(400).send("This ID is already in use.");
		} else {
			await User.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/");
			});
		}
	} catch (error) {
		res.status(400).send("Registration failed");
		console.log(error);
	}
});

router.get("/registerFarmer", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	res.render("registerFarmer");
});
router.post("/registerFarmer", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	console.log(req.body);
	try {
		const user = new User(req.body);

		let uniqueID = await User.findOne({ userID: req.body.userID });
		if (uniqueID) {
			return res.status(400).send("This ID is already in use.");
		} else {
			await User.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/dashboard/farmerdashboard");
			});
		}
	} catch (error) {
		res.status(400).send("Registration failed");
		console.log(error);
	}
});

// router.get("/signIn", (req, res) => {
// 	res.render("signIn");
// });



module.exports = router;