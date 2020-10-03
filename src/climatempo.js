const Axios = require('axios');

class ClimaTempoAPIClient {
    constructor(token) {
        this.token = token;
        this.http = Axios.create({
            baseURL: 'http://apiadvisor.climatempo.com.br/',
            params: {
                token: token
            }
        });
    }
    
    async getCitiesList() {
        const response = await this.http.get('/api/v1/locale/city?country=BR');        
        return response.data;
    }
    
    async setLocale(city_id) {
        const response = await this.http.put(`/api-manager/user-token/${this.token}/locales`, `localeId[]=${city_id}`);
        return response.data;
    }

    async getCurrentWeather(city_id) {
        const response = await this.http.get(`/api/v1/weather/locale/${city_id}/current`);
        return response.data;
    }
}

module.exports = { ClimaTempoAPIClient };