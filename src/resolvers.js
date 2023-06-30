const resolvers = {
	Query: {
		categories: (_, __, { dataSources }) => {
			return dataSources.petgramAPI.getCategories();
		},
		photos: (_, __, { dataSources }) => {
			return dataSources.petgramAPI.getPhotos();
		},
	},
};

module.exports = resolvers;
