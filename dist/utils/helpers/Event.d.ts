import { IEvent, IJSON, ISeries, IEmission, IPatrimony, IEventCard, IApplication, IEventType, eventTypes } from "@/utils/types/calendar.d";
export declare class Event implements IEvent {
    id: number | null | undefined;
    json: IJSON;
    series: ISeries;
    emission: IEmission;
    patrimony: IPatrimony;
    event_data: string;
    event_title: string;
    application: IApplication;
    event_type: IEventType;
    event_formated: IEventCard;
    emission_name: string;
    series_name: string;
    responsables_name: string;
    application_link: string | undefined;
    all_responsables: any[];
    constructor(event?: IEvent);
    formatEvent(): void;
    getEmissionFormated(): string;
    getEmissionName(): string;
    getSeriesFormated(): string;
    getSeriesName(): string;
    getResponsableFormated(): string;
    getResponsablesObject(): any[];
    getEventTypeFormated(): eventTypes;
    getLinkApplication(): string | undefined;
}
