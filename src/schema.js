const { gql } = require("graphql-tag");

const typeDefs = gql`
	type Query {
		categories: [Category!]
		photos: [Photo!]
		users: [User!]
		photo(_id: ID!): Photo
	}

	type Photo {
		_id: ID!
		userId: ID
		categoryId: ID
		category: Category
		user: User
		likes: Int
		src: String
	}
	type Category {
		_id: ID!
		name: String
		emoji: String
		cover: String
		path: String
	}
	type User {
		_id: ID!
		password: String
		favs: [String]
		avatar: String
		email: String
	}
`;

module.exports = typeDefs;
