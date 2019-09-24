import * as pbi from 'powerbi-client';
import ReportWithEmbedToken from '../../src/domain/ReportWithEmbedToken';
import { EmbedConfig, EmbedTokenReportConfig, ReportType } from '../../src/types';

describe('ReportWithEmbedToken', () => {
  test('the config is set properly', () => {
    const dummyConfig: EmbedTokenReportConfig = {
      id: 'reportId',
      groupId: 'groupId',
      accessToken: 'accessToken',
    };

    const embedTokenReport: ReportWithEmbedToken = new ReportWithEmbedToken(dummyConfig);

    const config: EmbedConfig = embedTokenReport.getConfig();

    expect(config.groupId).toEqual(dummyConfig.groupId);
    expect(config.id).toEqual(dummyConfig.id);
    expect(config.tokenType).toEqual(pbi.models.TokenType.Embed);
    expect(config.type).toEqual(ReportType.REPORT);
    expect(config.accessToken).toEqual(dummyConfig.accessToken);
  });
});
