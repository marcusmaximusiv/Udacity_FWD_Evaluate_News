const path = require("path");
const cor = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const apiKey = process.env.API_KEY;
const port = 8080;
console.log(port);
const app = express();
dotenv.config();

app.use(cor());
app.use(express.static("dist"));

//this allows for the index.html file to load from the client side 
app.get("/", function (req, res) {
    res.sendFile('index.html', {root: './index.html'});
});

// designates what port the app will listen to for incoming requests and prints out the port for the request
app.listen(port, function () {
    console.log('Example app listening on port:' + port);
});

app.post('/', async function (req, res) {
    console.log(apiKey);
    const data = await fetch('https://api.meaningcloud.com/sentiment-2.1?key='+apiKey+'&url=${url}&lang=en', {method: "POST"});
    console.log(data);
    const Analysis = await data.response.json();
    console.log(Analysis);
})
