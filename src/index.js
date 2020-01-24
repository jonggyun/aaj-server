const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const JobAPI = require('./datasources/jobs');

const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    JobAPI: new JobAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
