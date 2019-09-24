import IEmbeddingService from './IEmbeddingService';
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
  embed: (element: HTMLElement, config: EmbedConfig): void => {
    powerbi.embed(element, config);
  }
};

export default PowerBIEmbeddingService;
