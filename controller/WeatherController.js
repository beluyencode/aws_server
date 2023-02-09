const apiWeatherLocation = 'http://api.openweathermap.org/geo/1.0/direct';
const apiCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather';
const axios = require('axios');
const ResponseController = require('./ResponseController');


class WeatherController {
    geCurrenttWeather(req, res) {
        axios.get(apiWeatherLocation, {
            params: {
                q: 'Hanoi',
                appid: process.env.API_WEATHER
            }
        }).then(res1 => {
            if (res1.status === 200) {
                axios.get(apiCurrentWeather, {
                    params: {
                        lat: res1.data[0].lat,
                        lon: res1.data[0].lon,
                        appid: process.env.API_WEATHER,
                        lang: 'vi'
                    }
                }).then(res2 => {
                    res.json(ResponseController.responseOK(res2.data, ''))
                }).catch(error => {
                    res.json(ResponseController.responseERR(error, 'error'));
                })
            } else {
                res.json(ResponseController.responseERR(null, 'error'))
            }
        }).catch(error => {
            res.json(ResponseController.responseERR(error, 'error'));
        })
    }
}

module.exports = new WeatherController;