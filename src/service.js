const { Controller } = require('./controller');

class Service {
    constructor() {
        this.controller = new Controller();
    }

    async queryCurrentWeather(req, res) {
        try {
            const city_id = req.params.city_id;
            const result = await this.controller.queryForCurrentWeather(city_id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    async queryAvailableCities(req, res) {
        try {         
            const result = await this.controller.queryAvailableCities();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}

module.exports = { Service };