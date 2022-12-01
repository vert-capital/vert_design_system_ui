import { PropType } from 'vue';
import Time from '@/utils/helpers/Time';
import { IEvent, IConfig, IPeriod, IDay } from '@/utils/types/calendar';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
    eventsProp: {
        type: PropType<IEvent[]>;
        default: () => never[];
    };
}, unknown, {
    month: IDay[][];
    selectedEvent: IEvent | null;
    selectedEventElement: any;
    events: IEvent[];
    fullDayEvents: IEvent[];
    scrollbar: any;
}, {}, {
    initScrollbar(elapsedMs?: number): void;
    initMonth(): void;
    setMonth(): void;
    sortOutFullDayEvents(): void;
    handleClickOnEvent(event: {
        eventElement: HTMLDivElement;
        clickedEvent: IEvent;
    }): void;
    handleEventWasDragged(calendarEvent: IEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("updated-period" | "event-was-clicked" | "day-was-clicked" | "event-was-dragged" | "edit-event" | "delete-event")[], "updated-period" | "event-was-clicked" | "day-was-clicked" | "event-was-dragged" | "edit-event" | "delete-event", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
    eventsProp: {
        type: PropType<IEvent[]>;
        default: () => never[];
    };
}>> & {
    "onUpdated-period"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-dragged"?: ((...args: any[]) => any) | undefined;
    "onEdit-event"?: ((...args: any[]) => any) | undefined;
    "onDelete-event"?: ((...args: any[]) => any) | undefined;
}, {
    eventsProp: IEvent[];
}>;
export default _default;
