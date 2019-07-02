import * as pbi from 'powerbi-client';
import { AbstractReportConfig } from '../domain/types';

/**
 * Defines an interface for an embedding service for Power BI reports
 */
export default abstract class IEmbeddingService {
  abstract embed: (element: HTMLElement, config: AbstractReportConfig) => pbi.Embed | null;
}
