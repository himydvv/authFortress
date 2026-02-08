require('dotenv').config();
const express = require ('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;
//  Cross Origin Resource Sharing
// This uses whitelist from config/allowedOrigins.js
app.use(cors(corsOptions));
//  Built-in middleware to handle urlencoded data (form data)
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({extended:false}));
 // built in middlewarfe for JSON
 app.use(express.json());
 //  Middleware for cookie
 // let read  HttpOnly cookie
 app.use(cookieParser());
    
 //  ROUTES
 // root route
 app.get('/',(req, res)=>{
    res.send("Auth-Fortress Backend Is Running!");
 });

 // auth route 
 app.use('/auth',require('./routes/authroutes'));

 // error handling
  app.use((req,res)=>{
    res.status(404);
    if(req.accepts('json')){
        res.json({error : "404 Not Found"});
    }
    else{
        res.type('txt').send("404 Not Found");
    }
  });
  app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
  });
