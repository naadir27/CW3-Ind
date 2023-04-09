//Setting up the Express Application
const express = require ('express');
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");

//Cross-Application
app.use(cors());
app.use(express.json())
app.set('port',3000)
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})

// Middleware that logs the resource the user has requested for.
app.use((req, res, next) => {
    console.log(`You requested for '${req.url}'`);
    next();
});

// Connect to the MongoDB
const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb+srv://naadir:naadir123@cluster0.guegops.mongodb.net', (err, client) => {    
    db = client.db('LessonSpace')
})

//Displaying the message for root path to show that API is working
app.get('/',(req,res,)=>{
    res.send('Select a Collection, e.g., /collection/lessons')
})

// GET the collection name
app.param('collectionName', (req,res,next,collectionName)=>{
    req.collection= db.collection(collectionName);
    return next();
})

// Retrive all the objects from Lesson collection
app.get('/collection/:collectionName',(req,res,next)=>{
    req.collection.find({}).toArray((e,results) => {
        if (e) return next(e)
        res.send(results)
    })
    console.log("Getting the Data from Lesson Collection")
})

 // If it is not a GET request, also servers a 404 error.
app.use(function(response) {
    response.status(404).send("Page not found!");
});

app.listen(3000, () => {
    console.log('Express.js server running at localhost:3000')
})
