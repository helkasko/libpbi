import IEmbeddingService from './IEmbeddingService';
import * as pbi from 'powerbi-client';
import { AbstractReportConfig } from '../domain/types';

// powerbi is global
declare const powerbi: any;

/**
 * A singleton class for retrieving embeddable Power BI reports
 */
class PowerBIEmbeddingService implements IEmbeddingService {
  private static instance: PowerBIEmbeddingService;

  private constructor() {}

  /**
   * Returns an instance of this class. Note that if an object of this class has been already
   * instantiated, it will be returned instead of creating a new one.
   */
  static getInstance(): PowerBIEmbeddingService {
    if (!PowerBIEmbeddingService.instance) {
      const instance = new PowerBIEmbeddingService();
      PowerBIEmbeddingService.instance = Object.freeze(instance);
    }

    return PowerBIEmbeddingService.instance;
  }

  /**
   * Retrieves a report using the report configuration passed as argument and embeds it to the
   * element passed as argument. Finally returns the report as well.
   * @param element the element to embed the report to
   * @param config the embed configuration
   * @returns a powerbi Embed object
   */
  embed(element: HTMLElement, config: AbstractReportConfig): pbi.Embed | null {
    const errors = pbi.models.validateReportLoad(config);

    if (errors) {
      return null;
    }

    const report: pbi.Embed = powerbi.embed(element, config);

    return report;
  }
}

export default PowerBIEmbeddingService.getInstance();
