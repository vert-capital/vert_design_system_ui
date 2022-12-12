import { applicationReference, applicationsNumber, IEvent } from "../types/calendar";
import Time from "./Time";
import { APPLICATIONS_COLORS, APPLICATIONS_NAME } from "../constants";
export declare class EventShow implements IEvent {
    id?: string | number;
    title?: string;
    application: applicationsNumber;
    patrimony?: number;
    series?: number;
    emission?: number;
    time: {
        start: string;
        end: string;
    };
    event_data: string;
    data?: any;
    responsable?: string | undefined;
    timeHelper: Time;
    constructor(data: IEvent);
    getApplicationName(): typeof APPLICATIONS_NAME[keyof typeof APPLICATIONS_NAME];
    getApplicationColors(): typeof APPLICATIONS_COLORS[keyof typeof APPLICATIONS_COLORS];
    getApplicationsReferenceName(): applicationReference;
    getSubtitle(): string;
}
