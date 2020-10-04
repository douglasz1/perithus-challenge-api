const fs = require('fs');
const { ClimaTempoAPIClient } = require('./climatempo');
const CLIMATEMPO_TOKEN = process.env['CLIMATEMPO_TOKEN'] || '';
const citiesJSON = JSON.parse( fs.readFileSync('./cities.json') );

class Controller {
    constructor() {
        this.api = new ClimaTempoAPIClient(CLIMATEMPO_TOKEN);
    }

    async queryForCurrentWeather(city_id) {        
        await this.api.setLocale(city_id);
        return await this.api.getCurrentWeather(city_id);
    }

    async queryAvailableCities() {        
        // return await this.api.getCitiesList();
        return citiesJSON;
    }

    async queryCities(query) {  
        // return await this.api.getCitiesList();
        const re = new RegExp(`^${query.toLowerCase()}`);
        return citiesJSON.filter( e => re.test(e.name.toLowerCase()) );
    }
}

module.exports = { Controller };