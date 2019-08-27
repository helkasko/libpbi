import IEmbeddingService from './IEmbeddingService';
import * as pbi from 'powerbi-client';
import { EmbedConfig } from '../types';

// powerbi is global
declare const powerbi: any;

/**
 * For embedding Power BI reports to HTML elements
 */
const PowerBIEmbeddingService: IEmbeddingService = {
  /**
   * Retrieves a report using the report configuration passed as argument and embeds it to the
   * element passed as argument. Finally returns the report as well.
   * @param element the element to embed the report to
   * @param config the embed configuration
   * @returns a powerbi Embed object
   */
  embed(element: HTMLElement, config: EmbedConfig): pbi.Embed | null {
    const errors = pbi.models.validateReportLoad(config);

    if (errors) {
      return null;
    }

    const report: pbi.Embed = powerbi.embed(element, config);

    return report;
  }
};

export default PowerBIEmbeddingService;
