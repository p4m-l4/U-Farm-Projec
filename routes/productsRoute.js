const express = require('express');
const router = express.Router();
//import multer to upload images
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

//Importing model
const ProductUpload = require("../models/Uploads");
const User = require("../models/User")

//Image upload code
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
    cb(null, file.originalname);
    }
});

//Instantiate variable upload to store multer functionality to upload images
var upload = multer({ storage: storage })

// router.get('/upload', async (req, res) => {
//     let urbanFarmerList = await User.find({ role: 'urbanfarmer'});
//     res.render('uploadProduce', {urbanFarmers: urbanFarmerList});
// });

router.get("/upload", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
	
	res.render("uploadProduce", { currentUser: req.session.user });
});

router.post("/upload", connectEnsureLogin.ensureLoggedIn(), upload.single('productImage'), async (req, res) => {
    console.log(req.body);
    try {
        const produce = new ProductUpload(req.body);
        produce.productImage = req.file.path;
        await produce.save(); 
            res.redirect('/produce/upload');
        }
        catch (error) {
        res.status(400).send("Failed to upload produce")
        console.log(error);
    }
});

router.get("/products-list", async (req, res) => {
    try {
        let products = await ProductUpload.find();
        res.render("produce-list", { products: products });
    } catch (error) {
        res.status(400).send("Unable to get products list");
        console.log(error);
    }
    
});

//Updating produce
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

// router.get("/products-list", async (req, res) => {
// 	try {
// 		let items = await User.find({ userID: req.body.userID });
// 		res.render("produce-list", { farmerones: items });
// 	} catch (error) {
// 		res.send(400).send("Unable to find Urban Farmers in the database.");
// 		console.log(error);
// 	}
// });

// router.get("/products-list", (req, res) => {
// 	res.render("produce-list");
// });
// router.post("/products-list", (req, res) => {
// 	console.log(req.body);
// });

module.exports = router;