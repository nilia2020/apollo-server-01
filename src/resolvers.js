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
		photo: (_, { _id }, { dataSources }) => {
			return dataSources.petgramAPI.getPhoto(_id);
		},
	},
	Photo: {
		category: ({ categoryId }, _, { dataSources }) => {
			return dataSources.petgramAPI.getCategory(categoryId);
		},
		user: ({ userId }, _, { dataSources }) => {
			return dataSources.petgramAPI.getUser(userId);
		},
	},
};

module.exports = resolvers;
