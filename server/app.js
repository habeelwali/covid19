const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({path: './config.env'})

require('./db/conn');
const User = require('./model/userSchema')

const PORT = process.env.PORT;



// middleware
const middleware = (req,res, next)=>{
    console.log(`hello my Middleware`);
    next();
    

}






app.get('/',(req, res) => {
    res.send(`Hello word from the server`);
    
});


app.get('/about',middleware,(req, res) => {
    res.send(`Hello word from the about`);
});


app.get('/contact',(req, res) => {
    res.send(`Hello word contact from the server`);
});


app.get('/signin',(req, res) => {
    res.send(`Hello word login from the server`);
});


app.get('/signup',(req, res) => {
    res.send(`Hello word registration from the server`);
});

app.listen(PORT,() => {
    console.log(`server is running at port no ${PORT}`);
})
