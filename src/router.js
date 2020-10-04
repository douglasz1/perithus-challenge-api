const { Service } = require('./service');

const service = new Service();
const router = require('express').Router();
router.get('/cities', service.queryAvailableCities.bind(service));
router.get('/cities/:query', service.queryCities.bind(service));
router.get('/weather/:city_id', service.queryCurrentWeather.bind(service));

module.exports = { router };