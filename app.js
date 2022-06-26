const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/",function(reqeust,respond){
    respond.sendFile( __dirname + "/public/index.html");
});

app.post("/login",function(req,res){
    res.redirect("https://foc.kdu.ac.lk/");
})

app.post("/email",function(erq,res){
    res.redirect()
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
