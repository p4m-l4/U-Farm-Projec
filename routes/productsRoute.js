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

//Getting the list of produce for farmer one approval
router.get("/products-list", async (req, res) => {
    try {
        // const order = {_id:-1};
        let products = await ProductUpload.find().sort({ $natural: -1 });
        res.render("produce-list", { products: products });
    } catch (error) {
        res.status(400).send("Unable to get products list");
        console.log(error);
    }
    
});

//Getting the list of products for the farmer one display
router.get("/products-list", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ userID: req.body.userID }).sort({ $natural: -1 });
		res.render("produce-list", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

//Getting the list of products for the client access
router.get("/dairy-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: 'dairy' }).sort({ $natural: -1 });
		res.render("dairy-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/grain-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "cereal/grain" }).sort({ $natural: -1 });
		res.render("grain-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/meat-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "butcher/meats" }).sort({ $natural: -1 });
		res.render("meat-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/fruit-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "fruits" }).sort({ $natural: -1 });
		res.render("fruit-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/vegetable-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "vegetables" }).sort({ $natural: -1 });
		res.render("vegetable-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/oil-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "oils" }).sort({ $natural: -1 });
		res.render("oil-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/spice-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "spices" }).sort({ $natural: -1 });
		res.render("spices-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});

router.get("/other-products", async (req, res) => {
	try {
		// const order = {_id:-1};
		let products = await ProductUpload.find({ productGroup: "other products" }).sort({ $natural: -1 });
		res.render("other-produce", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get products list");
		console.log(error);
	}
});



//Updating produce
router.get("/update/:id", async (req, res) => {
    try {
        const updateProduct = await ProductUpload.findOne({_id: req.params.id});
        res.render("produce-update", {product:updateProduct});
    } catch (error) {
        res.status(400).send("Unable to update product")
    }
});

//Post Updated produce
router.post("/update", async (req, res) => {
    try {
        await ProductUpload.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/produce/products-list");
    } catch (error) {
        res.status(400).send("Unable to update product")
    }
});

//Delete route
router.post('/delete', async (req, res) => {
	try {
		await ProductUpload.deleteOne({ _id: req.body.id });
        console.log("Item deleted")
		res.redirect("back");
	} catch (error) {
		res.status(400).send("Unable to delete product");
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