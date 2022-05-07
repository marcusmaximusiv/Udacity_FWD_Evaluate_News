//required npm packages for the server.js to run
const cors = require('cors')
const mockRequest = require('./mockAPI.js')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
//Initiliazes the server instance where URL will appear
const app = express();
//use the following npm packages
app.use(cors());
app.use(express.static("dist"));
//console logging to ensure the correct folder is being called
console.log(__dirname);
/*this next area of the code defines the global variables that will ne used in the server.js*/
//this defines the port the app will be working on
const port = 8080;
console.log(port);
//This defines the variables for the api we will be constantly using
const apiLink = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
//we console.log the apiKey to ensure the key we have in the .env file is correct and working
console.log(apiKey)
//this allows for the index.html file to load from the client side 
app.get("/", function (req, res) {
    //if you would like to use a dist folder please set the root to './dist'
    res.sendFile('index.html', {root: './src/client/views'});
});
//this is a test to ensure api response is actually working using dummy test data from the mockAPI.js file in the server folder
app.get('/test', function (req, res) {
    res.send(mockRequest)
})
//this is the section fo the code where we are making our post command to the API to see if we receive data back from Meaningful API
app.post('/api', async (req, res) => {
    //input is the user's input into the form
    input = req.body.url;
    //here we create the string for the request to meaningful API and validate the link using console.log to ensure the link is being processed correctly
    const link = apiLink+"key="+apiKey+"&url="+input+"&lang=en";
    console.log(link);
    //the request is sent to Meaningful API
    const request = await fetch(link);
    //the request is then sent back and to validate a response was received i put a console.log afterwards for validation
    const apiResponse = await request.json();
    console.log(apiResponse);
    res.send(apiResponse);
})
// designates what port the app will listen to for incoming requests and prints out the port for the request
app.listen(port, function () {
    console.log('Example app listening on port:' + port)
});
