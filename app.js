const express = require('express');
// const { appendFile } = require('fs');
const path = require('path');

const app = express('app');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.render('registerAgric')
});

app.post('/', (req,res) => {
    console.log(req.body)
});

app.listen(7000, console.log("Server 7000 up and running"));