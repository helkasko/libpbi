import EmbeddedReport from '../../src/components/EmbeddedReport';
import { mount } from 'enzyme';
import IEmbeddingService from '../../src/services/IEmbeddingService';
import * as React from 'react';
import ReportWithEmbedToken from '../../src/domain/ReportWithEmbedToken';
import { AbstractReportConfig, EmbedTokenReportConfig } from '../../src/domain/types';

const dummyEmbeddingService: IEmbeddingService = {
  embed: (_: HTMLElement, __: AbstractReportConfig): null => {
    return null;
  }
};

const config: EmbedTokenReportConfig = {
  accessToken: 'dumdum',
  description: 'lollol',
  groupId: 'groupId',
  reportId: 'reportId'
};

const report = new ReportWithEmbedToken(config);

describe('<EmbeddedReport />', () => {
  it('renders correctly', () => {
    const component = mount(<EmbeddedReport report={report} embeddingService={dummyEmbeddingService} />);
    expect(component).toMatchSnapshot();
  });
});
