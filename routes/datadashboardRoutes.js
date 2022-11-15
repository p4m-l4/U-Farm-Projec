const express = require("express");
const User = require("../models/Uploads");
const router = express.Router();

router.get("/agricdatadasboard", async (req, res) => {
    try {
        let items= await User.find({role: "farmerone"});
        res.render("datadashboardAgric", {farmerones:items});
    } catch (error) {
        res.send(400).send("Unable to find Farmer Ones in the database.");
        console.log(error);
    }
	
});
router.get("/farmerdatadashboard", async (req, res) => {
	try {
		let items = await User.find({ role: "urbanFarmer" });
		res.render("datadashboardFarmer", { farmerones: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});
    router.get("/urbandatadashboard", async (req, res) => {
	try {
		let items = await User.find({ role: "urbanFarmer" });
		res.render("datadashboardUrban", { farmerones: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});


module.exports = router;