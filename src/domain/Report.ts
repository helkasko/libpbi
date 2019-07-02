import { AbstractReportConfig } from './types';

/**
 * The root Report class. Designed to be extended by more specific report classes.
 */
export default class Report {
  private readonly config: AbstractReportConfig;

  constructor(config: AbstractReportConfig) {
    this.config = {
      ...config,
      embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${config.id}&groupId=${config.groupId}`,
    };
  }

  /**
   * Returns the configuration of a report to be passed to Power BI interface when embedding a report
   */
  getConfig(): AbstractReportConfig {
    return this.config;
  }
}
