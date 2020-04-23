const express = require('express');
const mongoose = require('mongoose');

const app = express();

const db = require('./config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//Bodyparser
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));