import { applicationsNumber, IEvent } from "../types/calendar";
import Time from "./Time";
import { APPLICATIONS_COLORS, APPLICATIONS_NAME, APPLICATIONS_REFERENCE_NAME } from "../constants";

export class EventShow implements IEvent {

  public id?: string | number;
  public title?: string;
  public application: applicationsNumber;
  public patrimony?: number;
  public series?: number;
  public emission?: number;
  public time: { start: string; end: string };
  public event_data: string;
  public data?: {};

  public timeHelper = new Time();

  constructor(
    id?: string | number,
    title?: string,
    application?: applicationsNumber,
    patrimony?: number,
    series?: number,
    emission?: number,
    time?: { start: string; end: string },
    event_data?: string,
    data?: {}
  ) {
    this.id = id;
    this.title = title;
    this.application = application || 1;
    this.patrimony = patrimony;
    this.series = series;
    this.emission = emission;
    this.time = time || { start: this.timeHelper.getDateTimeStringFromDate(new Date()), end: this.timeHelper.getDateTimeStringFromDate(new Date()) };
    this.event_data = event_data || this.timeHelper.getDateStringFromDate(new Date());
    this.data = data;
  }


  getApplicationName(): typeof APPLICATIONS_NAME[keyof typeof APPLICATIONS_NAME] {
    return APPLICATIONS_NAME[this.application];
  }

  getApplicationColors(): typeof APPLICATIONS_COLORS[keyof typeof APPLICATIONS_COLORS] {
    return APPLICATIONS_COLORS[this.application];
  }

  getApplicationsReferenceName(): typeof APPLICATIONS_REFERENCE_NAME[keyof typeof APPLICATIONS_REFERENCE_NAME] {
    return APPLICATIONS_REFERENCE_NAME[this.application];
  }

}