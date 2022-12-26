import { IEvent, IJSON, ISeries, IEmission, IPatrimony, IEventCard, IApplication, IEventType, eventTypes } from "../types/calendar.d";
export declare class Event implements IEvent {
    id?: number | null;
    json: IJSON;
    series: ISeries;
    emission: IEmission;
    patrimony: IPatrimony;
    event_data: string;
    application: IApplication;
    event_type: IEventType;
    event_formated: IEventCard;
    constructor(event?: IEvent);
    formatEvent(): void;
    getEmissionFormated(): string;
    getSeriesFormated(): string;
    getResponsableFormated(): string;
    getEventTypeFormated(): eventTypes;
    getTitle(): string;
    getTitleObrigacoes(): string;
    getTitleAtualizacaoPatrimonio(): string;
    getTitleIntegralizacoesSubscricoes(): string;
    getTitleMarcoPatrimonio(): string;
    getTitleStatusSerie(): string;
    getTitleVencimentoSerie(): string;
    getTitleEventosPagamento(): string;
}
