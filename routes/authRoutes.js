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
		res.redirect("/dashboard/urbandashboard");
	}
);

router.post(
	"/logout", (req, res) => {
        if(req.session){
            req.session.destroy(function(err){
                if(err){
                    res.status(400).send("Unable to logout at this time");
                } else {
                    return res.redirect('/login')
                }
            })
        }
		
	}
);


module.exports = router;