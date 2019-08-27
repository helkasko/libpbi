import * as pbi from 'powerbi-client';
import Report from './Report';
import { EmbedTokenVisualConfig, ReportType } from '../types';

/**
 * Represents a Power BI visual that is configured with an embed token
 */
export default class VisualWithEmbedToken extends Report {
  constructor(config: EmbedTokenVisualConfig) {
    super({
      tokenType: pbi.models.TokenType.Embed,
      type: ReportType.VISUAL
    }, config);
  }
}
