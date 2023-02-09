//aboba-revers
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');
const cors = require('cors');

require('dotenv/config');


app = express();

app.set('view engine', 'ejs');
app.set('views', 'templates');


//Middleware
app.use(morgan('tiny'));
app.use(cors());


//Static
app.use(express.static('./'));


app.use(router);

app.listen(3000, () => {
    console.log('server hass started');
})

// app.get('/test', (req, res) => {
//     res.send('test');
//     console.log(process.env.PORT);
// })