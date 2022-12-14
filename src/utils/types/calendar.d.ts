export type applicationsNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type eventTypes =
  | "obrigacoes"
  | "eventos_pagamento"
  | "integralizacoes"
  | "subscricoes"
  | "atualizacao_status_patrimonios"
  | "marcos_patrimonios"
  | "vencimento_series"
  | "rating";

export interface IDay {
  dayName: string;
  dateTimeString: string;
  events?: IEvent[];
}

export type eventId = string | number;

export type modeType = "month" | "week" | "day" | "personalized" | "mini";

export enum eventTypesEnum {
  OBRIGACOES = 'obrigacoes',
  EVENTOS_PAGAMENTO = 'eventos_pagamento',
  INTEGRALIZACOES = 'integralizacoes',
  SUBSCRICOES = 'subscricoes',
  ATUALIZACAO_STATUS_PATRIMONIOS = 'atualizacao_status_patrimonios',
  MARCOS_PATRIMONIOS = 'marcos_patrimonios',
  VENCIMENTO_SERIES = 'vencimento_series',
  RATING = 'rating'
}

export interface IEvent {
  id?: number | null;
  json: IJSON;
  series: ISeries;
  emission: IEmission;
  patrimony: IPatrimony;
  event_data: string;
  application: IApplication;
  event_type: IEventType;
  event_formated?: IEventCard;
  tag?: string[];
}

export interface IEventCard {
  title: string;
  subtitle: string;
  responsable?: string;
  size?: string;
  event_type: eventTypes;
  status?: string;
  event_data?: string;
}

export interface IEmission {
  date: string;
  type: string;
  number: number;
  approved: string;
  responsible: string[];
  _emission_name: string;
  number_patrimonies: number;
  _emission_code_name: string;
  external_emission_id: number;
  principal_responsable_name: string;
  principal_responsable_email: string;
}

export interface IJSON {
  march: string;
  title: string;
  status: string;
  march_period: string;
  issuing_company: string;
  effective_period: string;
  financial_instrument: string;
}

export interface IPatrimony {
  number: number;
  external_patrimony_id: number;
  status: string;
  status_mark: string;
  credit_purchase_period_start_date: string | null;
  credit_purchase_period_end_date: string | null;
  payment_period_start_date: string | null;
  payment_period_end_date: string | null;
  closing_period_start_date: string | null;
  closing_period_end_date: string | null;
}

export interface ISeries {
  name: string;
  type: string;
  priority: number;
  patrimony: number;
  external_series_id: number;
}

export interface IApplication {
  id: number;
  slug: string;
  name: string;
}

export interface IEventType {
  id: number;
  name: string;
  responsible_area: IResponsiblesArea;
}

export type IEventsWeek = IEvent[];

export interface IPeriod {
  start: Date;
  end: Date;
  selectedDate: Date;
}

export type IDayStarEndControl =
  | 0
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 1300
  | 1400
  | 1500
  | 1600
  | 1700
  | 1800
  | 1900
  | 2000
  | 2100
  | 2200
  | 2300
  | 2400;

export type colorScheme = { color: string; backgroundColor: string };

export interface colorSchemes {
  [key: string]: colorScheme;
}

export type intervalLengthType = 7 | 15 | 30 | 60;

export type dayIntervalsType = {
  length?: intervalLengthType;
  height?: number;
  displayClickableInterval?: boolean;
  intervalStyles?: { [key: string]: any };
};

export interface DOMRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}
