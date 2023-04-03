import Vue from "vue"
import Router from "vue-router"
import lessonList from "@/components/lessonList"

/* const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8080;
const url = 'mongodb+srv://naadir:naadir123@cluster0.guegops.mongodb.net';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  const db = client.db('app');
  const collection = db.collection('lessons');

  app.get('/api/lessons', function(req, res) {
    collection.find({}).toArray(function(err, lessons) {
      if (err) throw err;
      res.json(lessons);
    });
  });

  app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
  });
}); */