const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const ip = require('ip');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on ${ip.address()}`)
});