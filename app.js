//aboba-revers
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');

require('dotenv/config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'templates');


//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

//Static
//This made in order to fix loading styles in templates
app.use(express.static('./'));


app.use(router);

app.listen(config.port, () => {
    console.log('server hass started');
})
