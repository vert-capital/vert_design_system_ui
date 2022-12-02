
export interface IDay {
  dayName: string;
  dateTimeString: string;
  events: IEvent[];
  fullDayEvents?: IEventsFullDay;
}

export type eventId = string | number;

export type modeType = 'month' | 'week' | 'day' | 'personalized' | 'mini';

export interface IEvent {
  id?: eventId;
  title?: string;
  application: number;
  patrimony?: number;
  series?: number;
  emission?: number;
  time: { start: string; end: string }; 
  event_data: string;
  data?: {}
}

export interface IEventsFullDay {
  date: Date;
  [key: string]: IEvent|any|string;
}

export type IEventsWeek = IEventsFullDay[];

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

export interface IConfig {
  locale?: string;
  week?: {
    nDays?: 5 | 7;
    startsOn?: 'sunday' | 'monday';
    scrollToHour?: number;
  };
  style?: {
    fontFamily?: string;
    colorSchemes?: colorSchemes;
  };
  defaultMode?: modeType;
  disableModes?: ('week' | 'month')[];
  isSilent?: boolean;
  dayIntervals?: dayIntervalsType;
  eventDialog?: {
    isDisabled?: boolean;
    isCustom?: boolean;
  };
  dayBoundaries?: {
    start: number; 
    end: number; 
  };
  showCurrentTime?: boolean;
}

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