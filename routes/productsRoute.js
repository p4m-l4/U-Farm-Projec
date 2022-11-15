const express = require('express');
const router = express.Router();
//import multer to upload images
const multer = require('multer');

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

router.get('/upload', async (req, res) => {
    let urbanFarmerList = await User.find({ role: 'urbanfarmer'});
    res.render('uploadProduce', {urbanFarmers: urbanFarmerList});
});

router.post('/upload', upload.single('productImage'), async (req, res) => {
    console.log(req.body);
    try {
        const produce = new ProductUpload(req.body);
        produce.productImage = req.file.path;
        await produce.save(); 
            res.redirect('/');
        }
        catch (error) {
        res.status(400).send("Failed to upload produce")
        console.log(error);
    }
});

module.exports = router;