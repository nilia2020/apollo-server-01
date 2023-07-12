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
    getUser(userId) {
        return this.get(`user/seeusers/${userId}`);
    }
    getCategory(categoryId) {
        return this.get(`categories/see/${categoryId}`);
    }
    getPhoto(id) {
        return this.get(`photos/see/${id}`);
    }
    getPhotosByCategory(categoryId) {
        return this.get(`photos/seecategory/${categoryId}`);
    }
}

module.exports = PetgramAPI;
