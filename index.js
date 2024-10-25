const express = require('express');
const keys = require('./config/keys') // get config keys
const app = express();
const moongose = require('mongoose');

require('./services/passport') // execute passport.js
require('./routes/authRoutes')(app); // execute routes and send app module

moongose.connect(keys.mongoURI); // mongoose connection


const PORT = process.env.PORT || 5000;

app.listen(PORT);