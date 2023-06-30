const { gql } = require("graphql-tag");

const typeDefs = gql`
    type Query {
        categories: [Category!]
        photos: [Photo!]
        users: [User!]
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
        categoryId: ID
        userId: ID
        likes: Int
        src: String
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
