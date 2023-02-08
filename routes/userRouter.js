const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController')

router.get('/', UserController.getUser);

module.exports = router;