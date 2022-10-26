const express = require("express");
const router = express.Router();

router.get("/clientdashboard", (req, res) => {
	res.render("clientDashboard");
});
router.post("/clientDashboard", (req, res) => {
	console.log(req.body);
});

router.get("/farmerdashboard", (req, res) => {
	res.render("farmerDashboard");
});
router.post("/farmerDashboard", (req, res) => {
	console.log(req.body);
});

router.get("/urbandashboard", (req, res) => {
	res.render("urbanDashboard");
});
router.post("/urbanDashboard", (req, res) => {
	console.log(req.body);
});

router.get("/agricdashboard", (req, res) => {
	res.render("agricDashboard");
});
router.post("/agricDashboard", (req, res) => {
	console.log(req.body);
});

module.exports = router;