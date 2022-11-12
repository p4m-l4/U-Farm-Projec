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

        let uniqueID = await User.findOne({userID: req.body.userID});
        if (uniqueID) {
            return res.status(400).send("This ID is already in use.")
        } else {
            await User.register(user, req.body.password,(error) => {
            if (error) {
                throw error
            }
            res.redirect("/role")
        });
        }
        
    } catch (error) {
        res.status(400).send('Registration failed');
        console.log(error)
    }
});

router.get("/registerurbanfarmer", (req, res) => {
	res.render("registerUo");
});
router.post("/registerurbanfarmer", async (req, res) => {
	console.log(req.body);
	try {
        const user = new User(req.body);

        let uniqueID = await User.findOne({userID: req.body.userID});
        let uniqueNIN = await User.findOne({uniqueNIN: req.body.NIN});
        if (uniqueID) {
            return res.status(400).send("This ID is already in use.")
        } else if (uniqueNIN) {
            return res.status(400).send("This National ID number is already in use.")
        } else {
            await User.register(user, req.body.password,(error) => {
            if (error) {
                throw error
            }
            res.redirect("/role")
        });
        }
        
    } catch (error) {
        res.status(400).send('Registration failed');
        console.log(error)
    }
});

router.get("/registerGeneral", (req, res) => {
	res.render("registerGeneral");
});
router.post("/registerGeneral", async (req, res) => {
	console.log(req.body);
	try {
		const user = new User(req.body);

		let uniqueID = await User.findOne({ userID: req.body.userID });
		if (uniqueID) {
			return res.status(400).send("This ID is already in use.");
		} else {
			await User.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/role");
			});
		}
	} catch (error) {
		res.status(400).send("Registration failed");
		console.log(error);
	}
});

router.get("/registerFarmer", (req, res) => {
	res.render("registerFarmer");
});
router.post("/registerFarmer", async (req, res) => {
	console.log(req.body);
	try {
        const user = new User(req.body);

        let uniqueID = await User.findOne({userID: req.body.userID});
        if (uniqueID) {
            return res.status(400).send("This ID is already in use.")
        } else {
            await User.register(user, req.body.password,(error) => {
            if (error) {
                throw error
            }
            res.redirect("/role")
        });
        }
        
    } catch (error) {
        res.status(400).send('Registration failed');
        console.log(error)
    }
});

// router.get("/signIn", (req, res) => {
// 	res.render("signIn");
// });

router.get("/signIn", (req, res) => {
	res.render("signIn");
});

router.get("/farmer", (req, res) => {
	res.render("signInFarmero");
});

router.get("/urban", (req, res) => {
	res.render("signInUrban");
});

router.get("/officer", (req, res) => {
	res.render("signInAgrico");
});


module.exports = router;