const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    jobs: [Job]!
  }

  type Job {
    company: String
    companyId: String!
    description: String
    location: String
    anywhereRule: String
    anywherePermission: Boolean
    anytimeRule: String
    anytimePermission: Boolean
  }
`;

module.exports = typeDefs;
