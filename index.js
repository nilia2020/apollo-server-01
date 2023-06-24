import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./data/db.json" assert { type: "json" };

const typeDefs = `#graphql
    type Category {
        id: ID!
        name: String
    }

    type Query {
        categories: [Category]
    }
`;

const resolvers = {
	Query: {
		categories: () => db.categories,
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: process.env.port || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
