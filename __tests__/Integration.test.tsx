import { mount } from 'enzyme';
import * as React from 'react';
import EmbeddedReport,
{
  EmbedConfig,
  EmbedTokenReportConfig,
  EmbedTokenVisualConfig,
  IEmbeddingService,
  ReportWithEmbedToken,
  VisualWithEmbedToken
} from '../src';

class DummyEmbeddingService implements IEmbeddingService {
  embed = (_: HTMLElement, __: EmbedConfig): void => {
    return;
  };
}

describe('Library', () => {
  test('User can render a report with embed token', () => {
    const config: EmbedTokenReportConfig = {
      accessToken: 'token',
      groupId: 'groupId',
      id: 'reportId',
      description: 'description'
    };

    const report: ReportWithEmbedToken = new ReportWithEmbedToken(config);

    const embeddedReport = mount(<EmbeddedReport report={report} />);

    expect(embeddedReport).toMatchSnapshot();
  });

  test('User can render a visual with embed token', () => {
    const config: EmbedTokenVisualConfig = {
      accessToken: 'token',
      groupId: 'groupId',
      id: 'reportId',
      description: 'description',
      pageName: 'pageName',
      visualName: 'visualName',
    };

    const report: VisualWithEmbedToken = new VisualWithEmbedToken(config);

    const embeddedReport = mount(<EmbeddedReport report={report} />);

    expect(embeddedReport).toMatchSnapshot();
  });
});
