const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./models/user'); // Import the user model

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    let { username, email, password, age } = req.body;
        let createdUser = await userModel.create({
            username,
            email,
            password,
            age
        });
        res.send(createdUser);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});    