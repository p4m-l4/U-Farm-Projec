const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

// router.post('/home', (request, response) => {
//     console.log(request.body);
// });

module.exports = router;