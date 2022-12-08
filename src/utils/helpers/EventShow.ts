import {
  applicationReference,
  applicationsNumber,
  IEvent,
} from "../types/calendar";
import Time from "./Time";
import {
  APPLICATIONS_COLORS,
  APPLICATIONS_NAME,
  APPLICATIONS_REFERENCE_NAME,
} from "../constants";

export class EventShow implements IEvent {
  public id?: string | number;
  public title?: string;
  public application: applicationsNumber;
  public patrimony?: number;
  public series?: number;
  public emission?: number;
  public time: { start: string; end: string };
  public event_data: string;
  public data?: any;
  public responsable?: string | undefined;

  public timeHelper = new Time();

  constructor(data: IEvent) {
    this.id = data?.id;
    this.title = data?.title;
    this.application = data?.application || 1;
    this.patrimony = data?.patrimony;
    this.series = data?.series;
    this.emission = data?.emission;
    this.time = data?.time || {
      start: this.timeHelper.getDateTimeStringFromDate(new Date()),
      end: this.timeHelper.getDateTimeStringFromDate(new Date()),
    };
    this.event_data =
      data?.event_data || this.timeHelper.getDateStringFromDate(new Date());
    this.data = data ? data.data : {};
    this.responsable = data?.responsable;
  }

  getApplicationName(): typeof APPLICATIONS_NAME[keyof typeof APPLICATIONS_NAME] {
    return APPLICATIONS_NAME[this.application];
  }

  getApplicationColors(): typeof APPLICATIONS_COLORS[keyof typeof APPLICATIONS_COLORS] {
    return APPLICATIONS_COLORS[this.application];
  }

  getApplicationsReferenceName(): applicationReference {
    return APPLICATIONS_REFERENCE_NAME[
      this.application
    ] as applicationReference;
  }

  getSubtitle(): string {
    let subtitle = "";
    if (this.patrimony) {
      subtitle += `Patrimônio: ${this.patrimony}`;
    }
    if (this.series) {
      subtitle += ` Série: ${this.series}`;
    }
    if (this.emission) {
      subtitle += ` Emissão: ${this.emission}`;
    }
    return subtitle;
  }
}
