import { EmbedConfig } from '../types';

/**
 * Defines an interface for an embedding service for Power BI reports
 */
export default interface IEmbeddingService {
  embed: (element: HTMLElement, config: EmbedConfig) => void;
}
