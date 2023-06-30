const { RESTDataSource } = require("@apollo/datasource-rest");

class PetgramAPI extends RESTDataSource {
    baseURL = "https://petgram-server-production.up.railway.app/api/";
    getCategories() {
        return this.get("categories/seeall");
    }
    getPhotos() {
        return this.get("photos/seeall");
    }
    getUsers() {
        return this.get("user/seeusers");
    }
}

module.exports = PetgramAPI;
