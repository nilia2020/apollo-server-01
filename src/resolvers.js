const resolvers = {
    Query: {
        categories: (_, __, { dataSources }) => {
            return dataSources.petgramAPI.getCategories();
        },
        photos: (_, __, { dataSources }) => {
            return dataSources.petgramAPI.getPhotos();
        },
        users: (_, __, { dataSources }) => {
            return dataSources.petgramAPI.getUsers();
        },
    },
};

module.exports = resolvers;
