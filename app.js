const express= require("express");
const bodyParser = require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/success", function(req, res){
   // res.send("done");

   console.log(req.body.firstName);
   console.log(req.body.secondName);
   console.log(req.body.phoneNo);
   console.log(req.body.email);
   console.log(req.body.password);
   console.log(req.body.Gender);
   console.log(req.body.Terms);
   console.log(req.body.Submit);



   res.sendFile(__dirname + "/success.html");
});

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});



