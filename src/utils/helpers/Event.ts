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
  IObligation,
  EStatus,
} from '@/utils/types/calendar.d';
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
  obligation: IObligation;

  public event_formated: IEventCard;
  public emission_name: string;
  public series_name: string;
  public responsables_name: string;
  public application_link: string | undefined;
  public all_responsables: any[];
  public url_ops = '';
  public url_obrigacoes = '';

  constructor(
    event: IEvent | null = {
      id: null,
      json: {} as IJSON,
      series: {} as ISeries,
      emission: {} as IEmission,
      patrimony: {} as IPatrimony,
      event_data: '',
      event_title: '',
      application: {} as IApplication,
      event_type: {} as IEventType,
    } as IEvent,
    url_ops = '',
    url_obrigacoes = ''
  ) {
    this.json = event?.json || ({} as IJSON);
    this.series = event?.series || ({} as ISeries);
    this.emission = event?.emission || ({} as IEmission);
    this.patrimony = event?.patrimony || ({} as IPatrimony);
    this.event_data = event?.event_data || '';
    this.event_title = event?.event_title || '';
    this.application = event?.application || ({} as IApplication);
    this.event_type = event?.event_type || ({} as IEventType);
    this.obligation = event?.obligation || ({} as IObligation);
    this.id = event?.id || null;
    this.event_formated = {
      title: '',
      subtitle: '',
      responsable: '',
      event_data: '',
      event_type: eventTypesEnum.OBRIGACOES,
      color: '',
      tag: null,
    };
    this.formatEvent();
    this.emission_name = this.getEmissionName();
    this.series_name = this.getSeriesFormated();
    this.responsables_name = this.getResponsableFormated();
    this.application_link = this.getLinkApplication();
    this.all_responsables = this.getResponsablesObject();
    this.url_obrigacoes = url_obrigacoes;
    this.url_ops = url_ops;
  }

  formatEvent(): void {
    this.event_formated.id = this.id;
    this.event_formated.title = this.event_title;
    this.event_formated.subtitle =
      this.getEmissionFormated() +
      (this.getSeriesFormated() == ''
        ? ''
        : ' (' + this.getSeriesFormated() + ')');
    this.event_formated.responsable = this.getResponsableFormated();
    this.event_formated.event_data = this.event_data;
    this.event_formated.event_type = this.getEventTypeFormated();
    this.event_formated.color = this.event_type?.color;
  }

  getEmissionFormated(): string {
    if (this.emission) {
      return `(${
        this.emission?._emission_code_name +
        (this.patrimony?.number ? ' - ' + this.patrimony?.number : '')
      })`;
    }
    return '';
  }

  getEmissionName(): string {
    if (this.emission) {
      return `${this.emission?._emission_code_name} - ${this.patrimony?.number}`;
    }
    return '';
  }

  getSeriesFormated(): string {
    if (this.series) {
      return `#${this.series.external_series_id} | ${this.series.priority} - ${
        this.series.name + (this.series.type ? ' - ' + this.series.type : '')
      }`;
    }
    return '';
  }

  getSeriesName(): string {
    if (this.series) {
      return `#${this.series.external_series_id} | ${this.series.priority} - ${this.series.name} - ${this.series.type}`;
    }
    return '';
  }

  getResponsableFormated(): string {
    if (this.json.responsible_obligation) {
      return (
        this.json.responsible_obligation +
        ' (Responsável)' +
        (this.emission
          ? `, ${
              this.emission?.principal_responsable_name
            }, ${this.emission?.responsible?.join(', ')}`
          : '')
      );
    } else {
      return this.emission
        ? this.emission?.principal_responsable_name +
            ' (Responsável), ' +
            this.emission?.responsible?.join(', ')
        : '';
    }
  }

  getResponsable(): string {
    return this.json.responsible_obligation &&
      this.json.responsible_obligation != ''
      ? this.json.responsible_obligation
      : this.emission?.principal_responsable_name;
  }

  getCoresponsable(): string[] {
    const coResponsible = this.emission?.responsible.filter(
      (main) => main != this.responsables_name
    );
    return this.emission?.principal_responsable_name &&
      this.responsables_name != this.emission?.principal_responsable_name
      ? [this.emission?.principal_responsable_name, ...coResponsible]
      : coResponsible;
  }

  getResponsablesObject(): any[] {
    const responsables = [] as any[];
    if (this.emission) {
      responsables.push({
        name: this.emission?.principal_responsable_name,
        isPrincipal: true,
        email: this.emission?.principal_responsable_email,
        avatar: '',
      });

      this.emission?.responsible?.forEach((responsable) => {
        responsables.push({
          name: responsable,
          isPrincipal: false,
          email: '',
          avatar: '',
        });
      });
    }

    return responsables;
  }

  getEventTypeFormated(): eventTypes {
    const events = [
      'OBRIGACOES',
      'EVENTOS_PAGAMENTO',
      'INTEGRALIZACOES',
      'SUBSCRICOES',
      'ATUALIZACAO_STATUS_PATRIMONIOS',
      'MARCOS_PATRIMONIOS',
      'VENCIMENTO_SERIES',
      'RATING',
    ];
    return eventTypesEnum[
      events[this.event_type?.id - 1] as keyof typeof eventTypesEnum
    ];
  }

  getLinkApplication(): string | undefined {
    if (this.application?.slug === 'ops') {
      return (
        this.url_ops + '/patrimony/' + this.patrimony?.external_patrimony_id
      );
    } else if (this.application?.slug === 'obrigacoes') {
      return this.url_obrigacoes;
    }
    return '';
  }
  getEventTag(): object | null {
    if (this.application.slug === 'obligation') {
      return {
        status: EStatus[this.json.status as keyof typeof EStatus],
        text: this.json.status,
      };
    } else return null;
  }
}
