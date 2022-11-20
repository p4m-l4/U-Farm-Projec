const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
	res.render("login");
});

//Login route
router.post(
	"/login",
	passport.authenticate("local", { failureRedirect: "/login" }),
	(req, res) => {
		console.log(req.body);
		req.session.user = req.user;
		const user = req.session.user;
		console.log(user.role);
		if (req.user.role == "farmerone") {
			res.redirect("/dashboard/farmerdashboard");
		} else if (req.user.role == "urbanfarmer") {
			res.redirect("/dashboard/urbandashboard");
		} else if (req.user.role == "agriculturalofficer") {
			res.redirect("/dashboard/agricdashboard");
		} else if (req.user.role == "generalusers") {
			res.redirect("/dashboard/clientdashboard")
		} else {
			res.send("You are not signed in")
		}
	}
);

//logout route
router.post(
	"/logout", (req, res) => {
        if(req.session){
            req.session.destroy(function(err){
                if(err){
                    res.status(400).send("Unable to logout at this time");
                } else {
                    return res.redirect('/login/login')
                }
            })
        }
		
	}
);


module.exports = router;