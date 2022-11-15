const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
	res.render("login");
});

router.post(
	"/login",
	passport.authenticate("local", { failureRedirect: "/login/login" }),
	(req, res) => {
		console.log(req.body);
		req.session.user = req.user;
		const user = req.session.user;
		console.log(user.role);
		res.send("Logged In as " + user.role);
	}
);

router.get("/signIn", (req, res) => {
	res.render("signIn");
});
router.post("/signIn", passport.authenticate("local", { failureRedirect: "/" }), (req, res) => {
	console.log(req.body), res.redirect("signInUrban");
});

router.get("/farmer", (req, res) => {
	res.render("signInFarmero");
});

router.get("/urban", (req, res) => {
	res.render("signInUrban");
});

router.post("/urban", passport.authenticate("local", { failureRedirect: "/urban" }), (req, res) => {
	res.redirect("signInUrban");
});

router.get("/officer", (req, res) => {
	res.render("signInAgrico");
});

module.exports = router;
