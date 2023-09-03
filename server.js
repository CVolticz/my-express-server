//require express module
const express = require("express");
const app = express();                  //instantiate the express object

//set up reponse request
//ExpressJS -> what happened when Brower make a get request to the home route
app.get("/", function(request,response){
    //let get a reponse
    response.send("<h1>Hello World!</h1>");
})
//req res on a new route
app.get("/contact", function(req,res){
    res.send("Here is my contact information");
})

//req res on a new route
app.get("/about", function (req, res) {
    res.send("I am a data scientist.");
})


//req res on a new route
app.get("/hobby", function (req, res) {
    res.send("Coffee.");
})
//listen to a specific port
//check to see if connection is found
app.listen(3000, function(){
    console.log("server started on port 3000!");
});