const { ApolloServer } = require("@apollo/server");
const {
	startStandaloneServer,
} = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const PetgramAPI = require("./datasources/petgram-api");

async function starApolloServer() {
	const server = new ApolloServer({ typeDefs, resolvers });
	const { url } = await startStandaloneServer(server, {
		context: async () => {
			const { cache } = server;
			return {
				dataSources: {
					petgramAPI: new PetgramAPI({ cache }),
				},
			};
		},
	});
	console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
starApolloServer();
