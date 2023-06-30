const { gql } = require("graphql-tag");

const typeDefs = gql`
	type Query {
		categories: [Category!]
		photos: [Photo!]
	}
	type Category {
		_id: ID!
		name: String
		emoji: String
		cover: String
		path: String
	}
	type Photo {
		_id: ID!
		category: [Category]
		user: [User]
		src: String!
		likes: Int
	}

	type User {
		_id: ID!
		password: String
		favs: [Photo]
		avatar: String
		email: String
	}
`;

module.exports = typeDefs;
