import * as pbi from 'powerbi-client';
import { EmbedConfig } from '../types';

/**
 * Defines an interface for an embedding service for Power BI reports
 */
export default interface IEmbeddingService {
  embed: (element: HTMLElement, config: EmbedConfig) => pbi.Embed | null;
}
