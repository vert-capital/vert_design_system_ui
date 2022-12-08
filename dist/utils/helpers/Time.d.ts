import { IDayStarEndControl } from "@/utils/types/calendar";
export declare type calendarWeekType = Date[];
export declare type calendarMonthType = calendarWeekType[];
export declare type calendarYearMonths = Date[];
export default class Time {
    FIRST_DAY_OF_WEEK: "sunday" | "monday";
    CALENDAR_LOCALE: string;
    DAY_START: number;
    DAY_END: number;
    constructor(firstDayOfWeek?: "sunday" | "monday", locale?: string | null, dayBoundaries?: {
        start: IDayStarEndControl;
        end: IDayStarEndControl;
    });
    getDatesBetweenTwoDates(start: Date, end: Date): Date[];
    getCalendarWeekDateObjects(date?: Date | null): calendarWeekType;
    /**
     * Returns an array of the weeks that comprise a month
     *
     * @param {number} yyyy
     * @param {number} mm - zero indexed (January === 0)
     * */
    getCalendarMonthSplitInWeeks(yyyy: number, mm: number): calendarMonthType;
    getCalendarYearMonths(year?: number | null): calendarYearMonths;
    getLocalizedNameOfWeekday(date: Date, weekdayNameLength?: "long" | "short"): string;
    getLocalizedNameOfMonth(date: Date, monthNameLength?: "long" | "short"): string;
    getLocalizedDateString(date: Date): string;
    getDateTimeStringFromDate(date: Date, timeIsStartOrEndOfDay?: "start" | "end"): string;
    getAllVariablesFromDateTimeString(dateTimeString: string): {
        year: number;
        month: number;
        date: number;
        hour: number;
        minutes: number;
    };
    dateIsToday(date: Date): boolean;
    dateIsInWeek(dateToCheck: Date, week: Date[]): boolean;
    getDateStringFromDate(date: Date): string;
    dateStringsHaveEqualDates(dateTimeString1: string, dateTimeString2: string): boolean;
    setDateToEndOfDay(date: Date): Date;
    getNextWeek(day: Date): Date[];
    getLastWeek(day: Date): Date[];
    getNumberOfDaysInMonth(year: number, month: number): number;
}
