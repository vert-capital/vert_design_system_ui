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
} from "@/utils/types/calendar.d";

export class Event implements IEvent {
  id: number | null | undefined;
  json: IJSON;
  series: ISeries;
  emission: IEmission;
  patrimony: IPatrimony;
  event_data: string;
  event_title: string;
  application: IApplication;
  event_type: IEventType;

  public event_formated: IEventCard;
  public emission_name: string;
  public series_name: string;
  public responsables_name: string;
  public application_link: string | undefined;
  public all_responsables: any[];

  constructor(
    event: IEvent = {
      id: null,
      json: {} as IJSON,
      series: {} as ISeries,
      emission: {} as IEmission,
      patrimony: {} as IPatrimony,
      event_data: "",
      event_title: "",
      application: {} as IApplication,
      event_type: {} as IEventType,
    } as IEvent
  ) {
    this.json = event.json;
    this.series = event.series;
    this.emission = event.emission;
    this.patrimony = event.patrimony;
    this.event_data = event.event_data;
    this.event_title = event.event_title;
    this.application = event.application;
    this.event_type = event.event_type;
    this.id = event.id;

    this.event_formated = {
      title: "",
      subtitle: "",
      responsable: "",
      event_data: "",
      event_type: eventTypesEnum.OBRIGACOES,
      color: "",
    };

    this.formatEvent();

    this.emission_name = this.getEmissionName();
    this.series_name = this.getSeriesFormated();
    this.responsables_name = this.getResponsableFormated();
    this.application_link = this.getLinkApplication();
    this.all_responsables = this.getResponsablesObject();
  }

  formatEvent(): void {
    this.event_formated.id = this.id;
    this.event_formated.title = this.event_title;
    this.event_formated.subtitle =
      this.getEmissionFormated() + " " + this.getSeriesFormated();
    this.event_formated.responsable = this.getResponsableFormated();
    this.event_formated.event_data = this.event_data;
    this.event_formated.event_type = this.getEventTypeFormated();
    this.event_formated.color = this.event_type?.color;
  }

  getEmissionFormated(): string {
    if (this.emission) {
      return `(${this.emission?._emission_code_name} - ${this.patrimony?.number})`;
    }
    return "";
  }

  getEmissionName(): string {
    if (this.emission) {
      return `${this.emission?._emission_code_name} - ${this.patrimony?.number}`;
    }
    return "";
  }

  getSeriesFormated(): string {
    if (this.series) {
      return `(#${this.series.external_series_id} | ${this.series.priority} - ${this.series.name} - ${this.series.type})`;
    }
    return "";
  }

  getSeriesName(): string {
    if (this.series) {
      return `#${this.series.external_series_id} | ${this.series.priority} - ${this.series.name} - ${this.series.type}`;
    }
    return "";
  }

  getResponsableFormated(): string {
    if (this.emission) {
      return (
        this.emission?.principal_responsable_name +
        "(Responsável), " +
        this.emission?.responsible?.join(", ")
      );
    }
    return "";
  }

  getResponsablesObject(): any[] {
    const responsables = [] as any[];
    if (this.emission) {
      responsables.push({
        name: this.emission?.principal_responsable_name,
        isPrincipal: true,
        email: this.emission?.principal_responsable_email,
        avatar: "",
      });

      this.emission?.responsible?.forEach((responsable) => {
        responsables.push({
          name: responsable,
          isPrincipal: false,
          email: "",
          avatar: "",
        });
      });
    }

    return responsables;
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
    return eventTypesEnum[
      events[this.event_type?.id - 1] as keyof typeof eventTypesEnum
    ];
  }

  getLinkApplication(): string | undefined {
    if (this.application?.slug === "ops") {
      return (
        import.meta.env.VITE_OPS_URL +
        "/patrimony/" +
        this.patrimony?.external_patrimony_id
      );
    } else if (this.application?.slug === "obrigacoes") {
      return import.meta.env.VITE_OBRIGACOES_URL;
    }

    return "";
  }
}
