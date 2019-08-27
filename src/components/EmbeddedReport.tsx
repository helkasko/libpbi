import IEmbeddingService from '../services/IEmbeddingService';
import PowerBIEmbeddingService from '../services/PowerBIEmbeddingService';
import * as React from 'react';
import Report from '../domain/Report';

type ReportProps = {
  report: Report;
  embeddingService?: IEmbeddingService;
};

/**
 * Renders an embedded PowerBI report.
 */
export default class EmbeddedReport extends React.PureComponent<ReportProps> {
  reportRef: React.RefObject<HTMLDivElement>;
  embeddingService: IEmbeddingService;

  constructor(props: ReportProps) {
    super(props);

    this.reportRef = React.createRef();
  }

  componentDidMount() {
    this.getEmbeddedReport();
  }

  private getEmbeddedReport(): void {
    if (!this.reportRef.current) {
      return;
    }

    const { report } = this.props;
    const embeddingService = this.props.embeddingService || PowerBIEmbeddingService;
    embeddingService.embed(this.reportRef.current, report.getConfig());
  }

  render() {
    return <div ref={this.reportRef} />;
  }
}
