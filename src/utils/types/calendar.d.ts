export type applicationsNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type eventsTypes =
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

export interface IEvent {
  id?: eventId;
  title?: string;
  event_type: eventsTypes;
  event_data: string;
  subtitle?: string;
  responsable?: string;
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
