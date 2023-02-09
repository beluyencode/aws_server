const express = require('express');
const router = express.Router();
const WeatherController = require('../controller/WeatherController')

router.get('/', WeatherController.geCurrenttWeather);

module.exports = router;