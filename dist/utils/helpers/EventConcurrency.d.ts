import { IEvent } from "@/utils/types/calendar";
export default class EventConcurrency {
    protected sortEventsAccordingToStartOfTime(events: IEvent[]): IEvent[];
    calculateConcurrencyForEvents(events: IEvent[]): IEvent[];
}
