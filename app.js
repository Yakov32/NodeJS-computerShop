//aboba-revers
const express = require('express');

app = express();


app.get('/', (req, res) => {
    console.log('REQUEST!!');
    res.send('abo');
    
})


app.listen(3000, () => {
    console.log('server hass started');
})