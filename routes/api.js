const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController')

router.get('/user', UserController.getUser);

module.exports = router;