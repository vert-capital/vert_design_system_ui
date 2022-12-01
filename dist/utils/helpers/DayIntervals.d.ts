import Time from './Time';
export declare type interval = {
    intervalStart: string;
    intervalEnd: string;
    hasBorder?: boolean;
};
export default class DayIntervals extends Time {
    private readonly INTERVAL_MINUTES;
    private readonly DAY_START_DATE_TIME_STRING;
    HOURS_PER_DAY: number;
    constructor(intervalMinutes: 15 | 30 | 60, dayStartDateTimeString: string, hoursPerDay?: number);
    getIntervals(): interval[];
}
