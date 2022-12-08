import { IDayStarEndControl } from '@/utils/types/calendar';
import EDate from './EDate';
import StringHelper
  from './String';
export type calendarWeekType = Date[];
export type calendarMonthType = calendarWeekType[];
export type calendarYearMonths = Date[];

export default class Time {
  FIRST_DAY_OF_WEEK: 'sunday' | 'monday';
  CALENDAR_LOCALE: string;
  DAY_START: number;
  DAY_END: number;

  constructor(
    firstDayOfWeek: 'sunday' | 'monday' = 'monday',
    locale: string | null = null,
    dayBoundaries: { start: IDayStarEndControl; end: IDayStarEndControl } = {
      start: 0,
      end: 2400,
    }
  ) {
    this.FIRST_DAY_OF_WEEK = firstDayOfWeek;
    this.CALENDAR_LOCALE = locale ? locale : 'pt-BR';
    this.DAY_START = dayBoundaries.start;
    this.DAY_END = dayBoundaries.end;
  }

  getDatesBetweenTwoDates(start: Date, end: Date) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    }

    return arr;
  }

  getCalendarWeekDateObjects(date: Date | null = null): calendarWeekType {
    const selectedDate = date ? date : new Date();

    let subtractedDaysToGetFirstDate;
    if (this.FIRST_DAY_OF_WEEK === 'sunday'){
      subtractedDaysToGetFirstDate = selectedDate.getDay();
      }
    else {
      subtractedDaysToGetFirstDate =
        selectedDate.getDay() === 0 ? 6 : selectedDate.getDay() - 1;
    }

    const dateOfFirstDayOfWeek = selectedDate.getDate() - subtractedDaysToGetFirstDate; 
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      dateOfFirstDayOfWeek
    );

    return this.getDatesBetweenTwoDates(
      firstDay,
      new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        firstDay.getDate() + 6
      )
    );
  }

  /**
   * Returns an array of the weeks that comprise a month
   *
   * @param {number} yyyy
   * @param {number} mm - zero indexed (January === 0)
   * */
  getCalendarMonthSplitInWeeks(yyyy: number, mm: number): calendarMonthType {
    const month: calendarMonthType = [];
    const selectedDate = ![typeof yyyy, typeof mm].includes('undefined')
      ? new Date(yyyy, mm, 1)
      : new Date();

    const firstDateOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const firstWeekOfMonth = this.getCalendarWeekDateObjects(firstDateOfMonth);
    month.push(firstWeekOfMonth);

    let isInMonth = true;
    let mondayOfWeekToPush = firstWeekOfMonth[0];
    const specifiedMonth = selectedDate.getMonth();

    while (isInMonth) {
      const newMonday = new Date(
        mondayOfWeekToPush.getFullYear(),
        mondayOfWeekToPush.getMonth(),
        mondayOfWeekToPush.getDate() + 7
      );

      if (newMonday.getMonth() === specifiedMonth) {
        month.push(this.getCalendarWeekDateObjects(newMonday));
        mondayOfWeekToPush = newMonday;
      } else {
        isInMonth = false;
      }
    }

    return month;
  }

  getCalendarYearMonths(year: number | null = null): calendarYearMonths {
    const selectedYear = year ? year : new Date().getFullYear();
    const yearList: calendarYearMonths = [];

    let month = 0;

    while (month <= 11) {
      yearList.push(new Date(selectedYear, month, 1));
      month++;
    }

    return yearList;
  }

  getLocalizedNameOfWeekday(
    date: Date,
    weekdayNameLength: 'long' | 'short' = 'short'
  ): string {
    return StringHelper.capitalizeFirstLetter(date.toLocaleDateString(this.CALENDAR_LOCALE, {
      weekday: weekdayNameLength,
    }));
  }

  getLocalizedNameOfMonth(
    date: Date,
    monthNameLength: 'long' | 'short' = 'short'
  ): string {
    return date.toLocaleDateString(this.CALENDAR_LOCALE, {
      month: monthNameLength,
    });
  }

  getLocalizedDateString(date: Date): string {
    return date.toLocaleDateString(this.CALENDAR_LOCALE);
  }

  getDateTimeStringFromDate(
    date: Date,
    timeIsStartOrEndOfDay?: 'start' | 'end'
  ): string {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const fullDate = `${y}-${m >= 10 ? m : '0' + m}-${d >= 10 ? d : '0' + d}`;

    if (!timeIsStartOrEndOfDay) {
      const hour = date.getHours();
      const minutes = date.getMinutes();

      return `${fullDate} ${hour >= 10 ? hour : '0' + hour}:${
        minutes >= 10 ? minutes : '0' + minutes
      }`;
    }

    const fullTime = timeIsStartOrEndOfDay === 'start' ? '00:00' : '23:59';

    return `${fullDate} ${fullTime}`;
  }

  getAllVariablesFromDateTimeString(dateTimeString: string) {
    return {
      year: +dateTimeString.substring(0, 4),
      month: +dateTimeString.substring(5, 7) - 1,
      date: +dateTimeString.substring(8, 10),
      hour: +dateTimeString.substring(11, 13),
      minutes: +dateTimeString.substring(14, 16),
    };
  }

  dateIsToday(date: Date) {
    const {
      fullYear: yearToday,
      month: monthToday,
      date: dateToday,
    } = new EDate();
    const {
      fullYear: dateYear,
      month: dateMonth,
      date: dateDate,
    } = new EDate(date);

    return (
      yearToday === dateYear &&
      monthToday === dateMonth &&
      dateToday === dateDate
    );
  }

  dateIsInWeek(dateToCheck: Date, week: Date[]) {
    const { date, month, fullYear } = new EDate(dateToCheck);

    for (const weekDay of week) {
      const dateIsSame = date === weekDay.getDate();
      const monthIsSame = month === weekDay.getMonth();
      const yearIsSame = fullYear === weekDay.getFullYear();

      if (dateIsSame && monthIsSame && yearIsSame) return true;
    }

    return false;
  }

  getDateStringFromDate(date: Date) {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return `${yyyy}-${mm >= 10 ? mm : '0' + mm}-${dd >= 10 ? dd : '0' + dd}`;
  }

  dateStringsHaveEqualDates(dateTimeString1: string, dateTimeString2: string) {
    const {
      year: year1,
      month: month1,
      date: date1,
    } = this.getAllVariablesFromDateTimeString(dateTimeString1);
    const {
      year: year2,
      month: month2,
      date: date2,
    } = this.getAllVariablesFromDateTimeString(dateTimeString2);

    return year1 === year2 && month1 === month2 && date1 === date2;
  }

  setDateToEndOfDay(date: Date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      999
    );
  }

  getNextWeek(day: Date) {
    const week: Date[] = [];

    for (let i = 0; i < 7; i++) {
      const newDate = new Date(day);
      newDate.setDate(day.getDate() + i);
      week.push(newDate);
    }

    return week;
  }

  getLastWeek(day: Date) {
    const week: Date[] = [];

    for (let i = 0; i < 7; i++) {
      const newDate = new Date(day);
      newDate.setDate(day.getDate() - i);
      week.push(newDate);
    }

    return week;
  }
}
