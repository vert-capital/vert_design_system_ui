import { IEvent, IEventsWeek, IDay } from '@/utils/types/calendar';
import Time from './Time';

export default class EventPosition extends Time {

  positionFullDayEventsInWeek(weekStart: Date, weekEnd: Date, events: IEvent[]) {
    const eventsWithJSDates = events.map((scheduleEvent: IEvent) => {
      const { year: startYear, month: startMonth, date: startDate } = this.getAllVariablesFromDateTimeString(scheduleEvent.time.start)
      const { year: endYear, month: endMonth, date: endDate } = this.getAllVariablesFromDateTimeString(scheduleEvent.time.end)
      scheduleEvent.timeJS = {
        start: new Date(startYear, startMonth, startDate),
        end: new Date(endYear, endMonth, endDate),
      }

      return scheduleEvent
    }).sort((a, b) => {
      if (a.time.start < b.time.start) return -1;
      if (a.time.start > b.time.start) return 1;

      return 0
    })

    const allDatesOfWeek = this.getDatesBetweenTwoDates(weekStart, weekEnd)
    const week: IEventsWeek = allDatesOfWeek.map(d => ({ date: d }))

    for (const scheduleEvent of eventsWithJSDates) {
      for (const [dayIndex, day] of week.entries()) {
        const thisDayDateString = this.getDateStringFromDate(day.date)

        if (
          // @ts-ignore
          this.getDateStringFromDate(scheduleEvent.timeJS.start) <= thisDayDateString
          // @ts-ignore
          && this.getDateStringFromDate(scheduleEvent.timeJS.end) >= thisDayDateString
        ) {
          let levelToStartOn = 1
          while (typeof week[dayIndex][`level${levelToStartOn}`] !== 'undefined') {
            levelToStartOn++
          }

          // @ts-ignore
          let eventNDays = (Math.ceil((scheduleEvent.timeJS.end.getTime() - day.date.getTime()) / this.MS_PER_DAY) + 1) // Get difference in days, plus the first day itself
          const remainingDaysOfWeek = (week.length - dayIndex)
          if (eventNDays > remainingDaysOfWeek) eventNDays = remainingDaysOfWeek

          week[dayIndex][`level${levelToStartOn}`] = {
            ...scheduleEvent,
            nDays: eventNDays, 
          }

          for (let i = 1; i < eventNDays; i++) {
            week[dayIndex + i][`level${levelToStartOn}`] = 'blocked'
          }

          break
        }
      }
    }

    const weekWithSortedLevelsInDays = []

    for (const day of week) {
      weekWithSortedLevelsInDays.push(Object.keys(day).sort().reduce(
        (obj: any, key: any) => {
          obj[key] = day[key];
          return obj;
        },
        {}
      ))
    }

    return weekWithSortedLevelsInDays
  }

  positionFullDayEventsInMonth(
    calendarMonth: IDay[][],
    fullDayEvents: IEvent[]
  ): IDay[][] {
    const newMonth: IDay[][] = []
    const flatMonth = calendarMonth.flat()
    const monthMap = new Map()
    flatMonth.forEach(day => monthMap.set(day.dateTimeString.substring(0, 10), day))
    fullDayEvents = fullDayEvents.sort((a, b) => {
      if (a.time.start < b.time.start) return 1;
      if (a.time.start > b.time.start) return -1;

      return 0
    })

    for (const fullDayEvent of fullDayEvents) {
      const { year: startYear, month: startMonth, date: startDate } = this.getAllVariablesFromDateTimeString(fullDayEvent.time.start)
      const { year: endYear, month: endMonth, date: endDate } = this.getAllVariablesFromDateTimeString(fullDayEvent.time.end)
      const allDatesOfEvent = this.getDatesBetweenTwoDates(
        new Date(startYear, startMonth, startDate),
        new Date(endYear, endMonth, endDate),
      )

      for (const date of allDatesOfEvent) {
        const dateString = this.getDateStringFromDate(date)
        const dateInMap = monthMap.get(dateString)

        if (dateInMap) monthMap.set(dateString, {
          ...dateInMap,
          events: [fullDayEvent, ...dateInMap.events]
        })
      }
    }

    let weekIterator = 0

    monthMap.forEach(day => {
      if ( ! newMonth.length) newMonth.push([day])

      else if (newMonth[weekIterator] && newMonth[weekIterator].length < 7) newMonth[weekIterator].push(day)

      else if (newMonth[weekIterator] && newMonth[weekIterator].length === 7) {
        newMonth.push([day])
        weekIterator++
      }
    })

    return newMonth
  }
}
