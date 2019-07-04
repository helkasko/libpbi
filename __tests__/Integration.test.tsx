import { mount } from 'enzyme';
import * as React from 'react';
import {
  EmbeddedReport,
  EmbedTokenReportConfig,
  EmbedTokenVisualConfig,
  ReportWithEmbedToken,
  VisualWithEmbedToken
} from '../src';

describe('Library', () => {
  test('User can render a report with embed token', () => {
    const config: EmbedTokenReportConfig = {
      accessToken: 'token',
      groupId: 'groupId',
      reportId: 'reportId',
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
      reportId: 'reportId',
      description: 'description',
      pageName: 'pageName',
      visualName: 'visualName',
    };

    const report: VisualWithEmbedToken = new VisualWithEmbedToken(config);

    const embeddedReport = mount(<EmbeddedReport report={report} />);

    expect(embeddedReport).toMatchSnapshot();
  });
});
