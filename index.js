const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge:30*24*60*60*1000, //the cookies will last for 30 days (days,hour/day,min/hour,sec/min,milisecond/sec)
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./Routes/authRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  
}



const PORT = process.env.PORT || 5000;
app.listen(PORT);








