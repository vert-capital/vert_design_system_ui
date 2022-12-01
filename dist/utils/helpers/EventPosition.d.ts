import { IEvent, IDay } from '@/utils/types/calendar';
import Time from './Time';
export default class EventPosition extends Time {
    positionFullDayEventsInWeek(weekStart: Date, weekEnd: Date, events: IEvent[]): any[];
    positionFullDayEventsInMonth(calendarMonth: IDay[][], fullDayEvents: IEvent[]): IDay[][];
}
