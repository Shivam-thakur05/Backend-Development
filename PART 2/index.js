const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
            res.render('index', { files: files });
    });
});


app.post('/create', (req, res) => {
    const { filename, content } = req.body;
    if (!filename || !content) {
        return res.status(400).send('Filename and content are required');
    }
    fs.writeFile(`./files/${filename}`, content, (err) => {
        if (err) {
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});






app.listen(3000, () => {
    console.log('Server is running on port 3000');
});