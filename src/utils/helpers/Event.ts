import {
  IEvent,
  IJSON,
  ISeries,
  IEmission,
  IPatrimony,
  IEventCard,
  IApplication,
  IEventType,
  eventTypes,
  eventTypesEnum,
} from "../types/calendar.d";

export class Event implements IEvent {
  id?: number | null;
  json: IJSON;
  series: ISeries;
  emission: IEmission;
  patrimony: IPatrimony;
  event_data: string;
  application: IApplication;
  event_type: IEventType;

  public event_formated: IEventCard;

  constructor(
    event: IEvent = {
      id: null,
      json: {} as IJSON,
      series: {} as ISeries,
      emission: {} as IEmission,
      patrimony: {} as IPatrimony,
      event_data: "",
      application: {} as IApplication,
      event_type: {} as IEventType,
    } as IEvent
  ) {
    this.json = event.json;
    this.series = event.series;
    this.emission = event.emission;
    this.patrimony = event.patrimony;
    this.event_data = event.event_data;
    this.application = event.application;
    this.event_type = event.event_type;

    this.event_formated = {
      id: "",
      title: "",
      subtitle: "",
      responsable: "",
      event_data: "",
      event_type: eventTypesEnum.OBRIGACOES,
    };

    this.formatEvent();
  }

  formatEvent(): void {
    this.event_formated.id = this.id?.toString() || "";
    this.event_formated.title = this.getTitle();
    this.event_formated.subtitle =
      this.getEmissionFormated() + " " + this.getSeriesFormated();
    this.event_formated.responsable = this.getResponsableFormated();
    this.event_formated.event_data = this.event_data;
    this.event_formated.event_type = this.getEventTypeFormated();
  }

  getEmissionFormated(): string {
    return `(${this.emission._emission_name} - ${this.emission.number})`;
  }

  getSeriesFormated(): string {
    if (this.series) {
      return `(#${this.series.external_series_id} | ${this.series.priority} - ${this.series.name} - ${this.series.type})`;
    }
    return "";
  }

  getResponsableFormated(): string {
    return (
      this.emission.principal_responsable_name +
      "(Responsável), " +
      this.emission.responsible?.join(", ")
    );
  }

  getEventTypeFormated(): eventTypes {
    const events = [
      "OBRIGACOES",
      "EVENTOS_PAGAMENTO",
      "INTEGRALIZACOES",
      "SUBSCRICOES",
      "ATUALIZACAO_STATUS_PATRIMONIOS",
      "MARCOS_PATRIMONIOS",
      "VENCIMENTO_SERIES",
      "RATING",
    ];
    const _key: number = this.event_type.id - 1;
    const _keyofenum: any = events[_key];
    return eventTypesEnum[_keyofenum as keyof typeof eventTypesEnum];
  }

  getTitle(): string {
    switch (this.getEventTypeFormated()) {
      case eventTypesEnum.OBRIGACOES:
        return this.getTitleObrigacoes();
      case eventTypesEnum.EVENTOS_PAGAMENTO:
        return this.getTitleEventosPagamento();
      case eventTypesEnum.INTEGRALIZACOES:
        return this.getTitleIntegralizacoesSubscricoes();
      case eventTypesEnum.SUBSCRICOES:
        return this.getTitleIntegralizacoesSubscricoes();
      case eventTypesEnum.ATUALIZACAO_STATUS_PATRIMONIOS:
        return this.getTitleAtualizacaoPatrimonio();
      case eventTypesEnum.MARCOS_PATRIMONIOS:
        return this.getTitleMarcoPatrimonio();
      case eventTypesEnum.VENCIMENTO_SERIES:
        return this.getTitleVencimentoSerie();
      case eventTypesEnum.RATING:
        return this.getTitleStatusSerie();
      default:
        return "";
    }
  }

  getTitleObrigacoes(): string {
    return `${this.event_type.name}${
      this.json.title ? " - " + this.json.title : ""
    }`;
  }

  getTitleAtualizacaoPatrimonio(): string {
    return `${this.event_type.name}${
      this.patrimony.status ? " - " + this.patrimony.status : ""
    }`;
  }

  getTitleIntegralizacoesSubscricoes(): string {
    return `${this.event_type.name}`;
  }

  getTitleMarcoPatrimonio(): string {
    return (
      `${this.event_type.name}${
        this.patrimony.status_mark ? " - " + this.patrimony.status_mark : ""
      }` +
      " (" +
      `${this.patrimony.credit_purchase_period_start_date} à ${this.patrimony.credit_purchase_period_end_date}` +
      ")"
    );
  }

  getTitleStatusSerie(): string {
    return `${this.event_type.name}${
      this.json.status ? " - " + this.json.status : ""
    }`;
  }

  getTitleVencimentoSerie(): string {
    return `${this.event_type.name}`;
  }

  getTitleEventosPagamento(): string {
    return `${this.event_type.name}${
      this.json.title ? " - " + this.json.title : ""
    }`;
  }
}
