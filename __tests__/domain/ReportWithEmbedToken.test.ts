import * as pbi from 'powerbi-client';
import ReportWithEmbedToken from '../../src/domain/ReportWithEmbedToken';
import { AbstractReportConfig, EmbedTokenReportConfig, ReportType } from '../../src/domain/types';

describe('ReportWithEmbedToken', () => {
  test('the config is set properly', () => {
    const dummyConfig: EmbedTokenReportConfig = {
      reportId: 'reportId',
      groupId: 'groupId',
      accessToken: 'accessToken',
    };

    const embedTokenReport: ReportWithEmbedToken = new ReportWithEmbedToken(dummyConfig);

    const config: AbstractReportConfig = embedTokenReport.getConfig();

    expect(config.groupId).toEqual(dummyConfig.groupId);
    expect(config.reportId).toEqual(dummyConfig.reportId);
    expect(config.tokenType).toEqual(pbi.models.TokenType.Embed);
    expect(config.type).toEqual(ReportType.REPORT);
  });
});
