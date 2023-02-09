const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const weatherRouter = require('./weatherRouter');
const folderRouter = require('./folderRouter');


router.use('/user', userRouter);
router.use('/weather', weatherRouter);
router.use('/folder', folderRouter);



module.exports = router;