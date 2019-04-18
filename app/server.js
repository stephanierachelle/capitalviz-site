const express= require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
});

app.listen(300, () => {
    console.log('Server started on port 3000');
});