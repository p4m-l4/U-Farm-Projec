const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get("/role", (req, res) => {
	res.render("roleSelect");
});

module.exports = router;