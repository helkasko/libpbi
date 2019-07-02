import * as pbi from 'powerbi-client';
import { AbstractReportConfig, EmbedTokenVisualConfig, ReportType } from '../../src/domain/types';
import VisualWithEmbedToken from '../../src/domain/VisualWithEmbedToken';

describe('VisualWithEmbedToken', () => {
  test('the config is set properly', () => {
    const dummyConfig: EmbedTokenVisualConfig = {
      reportId: 'reportId',
      groupId: 'groupId',
      accessToken: 'accessToken',
      pageName: 'pageName',
      visualName: 'visualName'
    };

    const embedTokenVisual: VisualWithEmbedToken = new VisualWithEmbedToken(dummyConfig);

    const config: AbstractReportConfig = embedTokenVisual.getConfig();

    expect(config.groupId).toEqual(dummyConfig.groupId);
    expect(config.reportId).toEqual(dummyConfig.reportId);
    expect(config.tokenType).toEqual(pbi.models.TokenType.Embed);
    expect(config.type).toEqual(ReportType.VISUAL);
  });
});
