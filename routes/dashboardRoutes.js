const express = require("express");
const User = require("../models/Uploads");
const router = express.Router();

router.get("/clientdashboard", (req, res) => {
	res.render("clientDashboard");
});
router.post("/clientdashboard", (req, res) => {
	console.log(req.body);
});

router.get("/farmerdashboard", (req, res) => {
	res.render("farmerDashboard");
});
router.post("/farmerdashboard", (req, res) => {
	console.log(req.body);
});
router.get("/urbandashboard", async (req, res) => {
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
router.post("/urbandashboard", (req, res) => {
	console.log(req.body);
});

router.get("/agricdashboard", (req, res) => {
	res.render("agricDashboard");
});
router.post("/agricdashboard", (req, res) => {
	console.log(req.body);
});

module.exports = router;