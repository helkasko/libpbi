import * as pbi from 'powerbi-client';

export enum ReportType {
  VISUAL = 'visual',
  REPORT = 'report',
}

export type AbstractReportConfig = ReportConfig & {
  type: ReportType;
  tokenType: pbi.models.TokenType;
};

export type ReportConfig = {
  description?: string;
  reportId: string;
  groupId: string;
};

export type EmbedTokenReportConfig = ReportConfig & {
  accessToken: string;
};

export type EmbedTokenVisualConfig = EmbedTokenReportConfig & {
  pageName: string;
  visualName: string;
};
