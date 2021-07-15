const port =process.env.PORT||5000;
 
const express= require('express');
var app = express();
const mongoose =require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/avi"),{ useNewUrlParser: true }, function(err){

    if (err){
        console.log("not working")
    }
    console.log("mogoose working");
} ;
// mongoose.Connection.Collection("uzer").find (function(err,docs){
mongoose.connection.on('connected', function(){
    console.log("mongoose connected to " + port);
})
// })

// res.status(200);
// res.send({aaaa:"studns"})
var bodyparsrs =require('body-parser');

app.use(require("cors")());
var userRouts = require('./rautes');
app.use(express.json())

// console.log(req.method);
console.log("1ssss");

app.use('/api', function(req,res,next){
    console.log("test1")
     next();
})
app.use('/api/users',userRouts)

// app.get('/users/:_id', function(req,res){     res.status(200).send(res.params._id);   }) 

// var bodyparors= require ('body-parors');
//const mongoose =require ('mongoose');
// app.use("/api/users", require ('./rauters.js'));
app.listen(port),()=>{
    console.log("port connected");
};