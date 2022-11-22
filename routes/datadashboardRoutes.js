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

router.get("/agricdatadashboard2", async (req, res) => {
	try {
		let items = await User.find({ role: "urbanfarmer" });
		res.render("datadashboardAgric-2", { urbanfarmers: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});

router.get("/farmerdatadashboard", async (req, res) => {
	try {
		let items = await User.find({ role: "urbanfarmer" });
		res.render("datadashboardFarmer", { urbanfarmers: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});
router.get("/urbandatadashboard", async (req, res) => {
	try {
		let items = await User.find({ role: "urbanFarmer" });
		res.render("datadashboardUrban", { products: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});

router.get("/urbandatadashboard2", async (req, res) => {
	try {
		let items = await User.find({ role: "urbanFarmer" });
		res.render("datadashboardUrban2", { products: items });
	} catch (error) {
		res.send(400).send("Unable to find Urban Farmers in the database.");
		console.log(error);
	}
});

//Updating farmerone list
router.get("/update/:id", async (req, res) => {
    try {
        const updateProduct = await ProductUpload.findOne({_id: req.params.id});
        res.render("produce update", {product:updateProduct});
    } catch (error) {
        res.status(400).send("Unable to update produce")
    }
});

//Post Updated produce
router.post("/update", async (req, res) => {
    try {
        await ProductUpload.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/products-list");
    } catch (error) {
        res.status(400).send("Unable to update produce")
    }
});

module.exports = router;