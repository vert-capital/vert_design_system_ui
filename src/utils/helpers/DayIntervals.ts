import Time from './index';

export type interval = {
  intervalStart: string,
  intervalEnd: string
  hasBorder?: boolean
}

export default class DayIntervals extends Time {
  private readonly INTERVAL_MINUTES: 15 | 30 | 60
  private readonly DAY_START_DATE_TIME_STRING: string
  HOURS_PER_DAY: number = 24

  constructor(
    intervalMinutes: 15 | 30 | 60,
    dayStartDateTimeString: string,
    hoursPerDay: number = 24,
  ) {
    super()
    this.INTERVAL_MINUTES = intervalMinutes
    this.DAY_START_DATE_TIME_STRING = dayStartDateTimeString
    this.HOURS_PER_DAY = hoursPerDay
  }

  getIntervals(): interval[] {
    const intervals = []
    const numberOfIntervalsInDay = this.HOURS_PER_DAY * (60 / this.INTERVAL_MINUTES)
    let iteratorDateTimeString = this.DAY_START_DATE_TIME_STRING

    while (intervals.length < numberOfIntervalsInDay) {
      const intervalEnd = this.addMinutesToDateTimeString(this.INTERVAL_MINUTES, iteratorDateTimeString)

      intervals.push({
        intervalStart: iteratorDateTimeString,
        intervalEnd,
        hasBorder: intervalEnd.substring(14, 16) !== '00'
      })

      iteratorDateTimeString = intervalEnd
    }

    return intervals
  }
}
