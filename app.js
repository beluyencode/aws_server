//import lib
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
//import router
const apiRouter = require('./routes/api');

// use lib
require('dotenv').config()
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use router
app.use('/api', apiRouter);

// run
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/`)
});