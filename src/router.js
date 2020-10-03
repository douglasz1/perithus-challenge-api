const { Service } = require('./service');

const service = new Service();
const router = require('express').Router();
router.get('/weather/:city_id', service.queryCurrentWeather.bind(service));
router.get('/cities', service.queryAvailableCities.bind(service));

module.exports = { router };