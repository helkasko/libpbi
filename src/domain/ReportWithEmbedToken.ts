import * as pbi from 'powerbi-client';
import Report from './Report';
import { EmbedTokenReportConfig, ReportType } from './types';

/**
 * Represents a Power BI report that is configured with an embed token.
 */
export default class ReportWithEmbedToken extends Report {
  constructor(config: EmbedTokenReportConfig) {
    super({
      ...config,
      tokenType: pbi.models.TokenType.Embed,
      type: ReportType.REPORT
    });
  }
}
