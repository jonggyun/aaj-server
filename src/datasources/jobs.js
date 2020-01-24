const { RESTDataSource } = require('apollo-datasource-rest');

class JobAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      'http://anywhereanytimejobsprod-env.2rwcjbmhyb.ap-northeast-2.elasticbeanstalk.com/';
  }

  launchReducer(job) {
    return {
      company: job.company,
      companyId: job.companyId,
      description: job.description ? job.description : '',
      location: job.location ? job.location : '',
      anywhereRule: job.anywhere && job.anywhere.rule,
      anywherePermission: job.anywhere && job.anywhere.permission,
      anytimeRule: job.anytime && job.anytime.rule,
      anytimePermission: job.anytime && job.anytime.permission,
    };
  }

  async getAllJobs() {
    const response = await this.get('company');
    return Array.isArray(response.jobs)
      ? response.jobs.map(job => this.launchReducer(job))
      : [];
  }
}

module.exports = JobAPI;
