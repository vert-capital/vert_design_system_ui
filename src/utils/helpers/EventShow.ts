import { eventsTypes, IEvent } from "../types/calendar";
import Time from "./Time";

export class EventShow implements IEvent {
  public id?: string | number;
  public title?: string;
  public subtitle?: string;
  public event_type: eventsTypes;
  public event_data: string;
  public responsable?: string | undefined;

  public timeHelper = new Time();

  constructor(data: IEvent) {
    this.id = data?.id;
    this.title = data?.title;
    this.event_data =
      data?.event_data || this.timeHelper.getDateStringFromDate(new Date());
    this.responsable = data?.responsable;
    this.event_type = data?.event_type;
  }
}
