const express = require('express');
const app = express();

require('./services/passport') // execute passport.js

require('./routes/authRoutes')(app); // execute routes and send app module



const PORT = process.env.PORT || 5000;

app.listen(PORT);