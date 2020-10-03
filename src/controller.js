const { ClimaTempoAPIClient } = require('./climatempo');
const CLIMATEMPO_TOKEN = process.env['CLIMATEMPO_TOKEN'] || '';

class Controller {
    constructor() {
        this.api = new ClimaTempoAPIClient(CLIMATEMPO_TOKEN);
    }

    async queryForCurrentWeather(city_id) {        
        await this.api.setLocale(city_id);
        return await this.api.getCurrentWeather(city_id);
    }

    async queryAvailableCities() {        
        return await this.api.getCitiesList();
    }
}

module.exports = { Controller };