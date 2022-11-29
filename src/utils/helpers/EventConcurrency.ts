import { IEvent } from "@/utils/types/calendar";

export default class EventConcurrency {
  protected sortEventsAccordingToStartOfTime(events: IEvent[]) {
    function compare(a: IEvent, b: IEvent) {
      if (a.time.start < b.time.start) {
        return -1;
      }
      if (a.time.start > b.time.start) {
        return 1;
      }
      return 0;
    }

    return events.sort(compare);
  }

  calculateConcurrencyForEvents(events: IEvent[]) {
    const updatedEvents = this.sortEventsAccordingToStartOfTime(events);
    if (!updatedEvents.length) return [];

    for (const [index, calendarEvent] of updatedEvents.entries()) {
      if (index === 0) continue;

      let previousEvent = updatedEvents[index - 1];
      let iterator = 0;
      let nOfConcurrentEvents = 0;
      while (iterator < index) {
        if (updatedEvents[iterator].time.end > calendarEvent.time.start)
          nOfConcurrentEvents++;
        iterator++;
      }

      if (nOfConcurrentEvents)
        updatedEvents[index].nOfPreviousConcurrentEvents = nOfConcurrentEvents;
    }

    for (let index = updatedEvents.length - 1; index >= 0; index--) {
      let nOfUpcomingConcurrentEvents = 0;
      let iterator = updatedEvents.length - 1;

      while (iterator > index) {
        if (
          updatedEvents[iterator].time.start < updatedEvents[index].time.end
        ) {
          nOfUpcomingConcurrentEvents++;
        }

        iterator--;
      }

      const nfOfPreviousEvents =
        updatedEvents[index].nOfPreviousConcurrentEvents || 0;
      updatedEvents[index].totalConcurrentEvents =
        nfOfPreviousEvents + nOfUpcomingConcurrentEvents + 1;
    }

    return events;
  }
}
