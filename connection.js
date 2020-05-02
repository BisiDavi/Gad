const mongoose = require('mongoose');

//connnect to mongodb
mongoose.connect('mongodb://localhost:3000');

mongoose.connection.once('open', function () {
  console.log('Connection has been made, wow');
}).on('error', function (error) {
  console.log('Connection error:', error);
});