const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


app.get("/", (req, res) => {
    let token = jwt.sign({email: "shivam@gmail.com"}, "secret");
    console.log(token);
    res.cookie('token', token);
    res.send("Token generated");
    
});

app.get('/read', (req, res) => {
    let token = jwt.verify(req.cookies.token, "secret");
    console.log(token);
});

/*


app.get('/', (req, res) => {
    res.cookie('name','Shivam');
    res.send('Cookie set');

});

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("read page");
});

*/

/*


app.get("/setpassword", (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash("password123", salt, (err, hash) => {
            console.log(hash);
        });
    });
});

*/

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});