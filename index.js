// Import express and request modules
const express = require('express');
const request = require('request');
const axios = require('axios');
const bodyParser = require('body-parser');

// Instantiates Express and assigns our app variable to it
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Again, we define a port we want to listen to
const PORT=3000;

app.listen(PORT, function () {
    console.log("Example app listening on port " + PORT);
});


app.get('/', function(req, res) {
    res.send('Ngrok is working! Path Hit: ' + req.url);
});


