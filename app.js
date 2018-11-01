var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser'); //2
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')



sequelize.sync();


app.use(bodyParser.json()); //3
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(4000, function() {  //4
   console.log("App is listening on 4000");
})