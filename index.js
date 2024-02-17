const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
-app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin:["http://localhost:8080/", "https;//newsapp.onrender.com"]
}
));


app.get("/",  function(req, res){
    res.sendFile(__dirname + "/index.html");

})





app.listen(8080, function(){
    console.log("The server is on and running in the port 8080");
})