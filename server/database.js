var QuibbleEntity = require('./model/QuibbleEntity.js');
var quibbles = require('./initial.js');

// Import the mongoose module
var mongoose = require('mongoose');
var uri = "mongodb://localhost/quibbledb";

// Set up default mongoose connection
mongoose.connect(uri, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.dropDatabase();

quibbles.forEach(function (quibble) {
    new QuibbleEntity(quibble).save();
});