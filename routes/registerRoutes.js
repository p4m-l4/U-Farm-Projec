const express = require('express');
const router = express.Router();

//Importing model
const User = require('../models/User');

router.get('/registeragricofficer', (req, res) => {
    res.render('registerAgric')
});
router.post('/registeragricofficer', async (req, res) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        await User.register(user, req.body.password,(error) => {
            if (error) {
                throw error
            }
            res.redirect("/dashboard/agricDashboard")
        });
    } catch (error) {
        res.status(400).send('Registration failed');
        console.log(error)
    }
});

router.get("/registerurbanfarmer", (req, res) => {
	res.render("registerUo");
});
router.post("/registerurbanfarmer", (req, res) => {
	console.log(req.body);
	res.send("Registration successful!");
});

router.get("/registerGeneral", (req, res) => {
	res.render("registerGeneral");
});
router.post("/registerGeneral", (req, res) => {
	console.log(req.body);
	res.send("Registration successful!");
});

router.get("/registerfarmerone", (req, res) => {
	res.render("registerfo");
});
router.post("/registerfarmerone", (req, res) => {
	console.log(req.body);
	res.send("Registration successful!");
});

router.get("/signIn", (req, res) => {
	res.render("signIn");
});

router.get("/farmer", (req, res) => {
	res.render("farmeroSignin");
});


module.exports = router;