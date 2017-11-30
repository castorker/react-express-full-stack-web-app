var express = require('express');
var app = express();
var parser = require('body-parser');

require('./database.js');

app.get('/', function (req, res) {
        res.render('./../app/index.ejs', {});
    })
    .use(express.static(__dirname + '/../.tmp'))
    .listen(3000);

app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
})); // this will allows to handle POST requests

// http://localhost:9001/api/quibbles
require('./routes/quibbles.js')(app);