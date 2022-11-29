import {IEvent} from '../types/calendar';
import Time from './Time';
const time = new Time()

export default class DragAndDrop {

  static eventCanBeDraggedFurther(
    event: IEvent,
    direction: 'backwards' | 'forwards',
    dayStart: number,
    dayEnd: number,
  ) {
    if (dayStart !== 0) dayStart = dayStart / 100
    dayEnd = dayEnd / 100

    if (direction === 'forwards') {
      const lastHourBeforeEndOfDay = dayEnd - 1;
      const { hour: endHour } = time.getAllVariablesFromDateTimeString(event.time.end)
      const { minutes: endMinutes } = time.getAllVariablesFromDateTimeString(event.time.end)
      const { hour: startHour } = time.getAllVariablesFromDateTimeString(event.time.start)
      const { minutes: startMinutes } = time.getAllVariablesFromDateTimeString(event.time.start)

      return (endHour < lastHourBeforeEndOfDay || (endHour === lastHourBeforeEndOfDay && endMinutes < 45))
       && (startHour < lastHourBeforeEndOfDay || startHour === lastHourBeforeEndOfDay && startMinutes < 45)
    }

    const { hour: startHour } = time.getAllVariablesFromDateTimeString(event.time.start)
    const { minutes: startMinutes } = time.getAllVariablesFromDateTimeString(event.time.start)

    return startHour > dayStart || (startHour === dayStart && startMinutes >= 15)
  }
}
