import { eventsTypes, IEvent } from "../types/calendar";
import Time from "./Time";
export declare class EventShow implements IEvent {
    id?: string | number;
    title?: string;
    subtitle?: string;
    event_type: eventsTypes;
    event_data: string;
    responsable?: string | undefined;
    timeHelper: Time;
    constructor(data: IEvent);
}
