import { EmbedConfig, ReportConfig } from '../types';

/**
 * The root Report class. Designed to be extended by more specific report classes.
 */
export default class Report {
  private readonly baseUrl: string = 'https://app.powerbi.com/reportEmbed';
  private readonly embedConfig: EmbedConfig;
  private readonly reportConfig: ReportConfig;

  constructor(embedConfig: EmbedConfig, reportConfig: ReportConfig) {
    this.embedConfig = embedConfig;
    this.reportConfig = reportConfig;
  }

  /**
   * Returns the configuration of a report to be passed to Power BI interface when embedding a report
   */
  getConfig(): EmbedConfig {
    const embedUrl = this.embedConfig.embedUrl || this.getEmbedUrl();

    return {
      ...this.embedConfig,
      ...this.reportConfig,
      embedUrl,
    };
  }

  private getEmbedUrl(): string {
    const { groupId, id } = this.reportConfig;

    return `${this.baseUrl}?reportId=${id}&groupId=${groupId}`;
  }
}
