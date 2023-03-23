const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'templates');

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(config.appSecret));

//Static
// './' set in order to fix loading styles error in templates
app.use(express.static('./'));

//Session
app.use(session({
    secret: config.appSecret,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

app.use(router);

app.listen(config.port, () => {
    console.log('server has started');
})
