const express = require("express");
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

router.get("/urbandashboard", (req, res) => {
	res.render("urbanDashboard");
});
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