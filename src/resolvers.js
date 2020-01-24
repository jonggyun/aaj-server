module.exports = {
  Query: {
    jobs: (_, __, { dataSources }) => dataSources.JobAPI.getAllJobs(),
  },
};
