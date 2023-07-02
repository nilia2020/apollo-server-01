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
		/* sólo si quiero recuperar una foto con todo el detalle */
		photo: (_, { _id }, { dataSources }) => {
			return dataSources.petgramAPI.getPhoto(_id);
		},
	},
	/* Relaciona el categoryId de photo con id de categories y el userId de photo con el id de users */
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
