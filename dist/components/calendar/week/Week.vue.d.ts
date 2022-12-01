import { PropType } from 'vue';
import { modeType, IEvent, IConfig, IPeriod, IDay, IEventsWeek } from '@/utils/types/calendar';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    eventsProp: {
        type: PropType<IEvent[]>;
        default: () => never[];
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
    nDays: {
        type: PropType<7 | 5>;
        required: true;
    };
    modeProp: {
        type: PropType<modeType>;
        default: string;
    };
    time: {
        type: PropType<any>;
        required: true;
    };
}, unknown, {
    days: IDay[];
    mode: modeType;
    selectedEvent: IEvent | null;
    selectedEventElement: any;
    events: IEvent[];
    fullDayEvents: IEventsWeek;
    weekVersion: number;
    dayIntervals: any;
    weekHeight: string;
    scrollbar: any;
    currentTimePercentage: number;
    showCurrentTime: boolean;
}, {
    hasCustomCurrentTimeSlot(): boolean;
}, {
    initScrollbar(elapsedMs?: number): void;
    filterOutFullDayEvents(): void;
    setDays(): void;
    mergeFullDayEventsIntoDays(): void;
    setDay(): void;
    setInitialEvents(mode: modeType): void;
    handleClickOnEvent(event: {
        eventElement: HTMLDivElement;
        clickedEvent: IEvent;
    }): void;
    handleEventWasDragged(event: IEvent): void;
    scrollOnMount(): void;
    setDayIntervals(): void;
    setWeekHeightBasedOnIntervals(): void;
    setCurrentTime(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("event-was-clicked" | "day-was-clicked" | "event-was-resized" | "event-was-dragged" | "interval-was-clicked" | "edit-event" | "delete-event")[], "event-was-clicked" | "day-was-clicked" | "event-was-resized" | "event-was-dragged" | "interval-was-clicked" | "edit-event" | "delete-event", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    eventsProp: {
        type: PropType<IEvent[]>;
        default: () => never[];
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
    nDays: {
        type: PropType<7 | 5>;
        required: true;
    };
    modeProp: {
        type: PropType<modeType>;
        default: string;
    };
    time: {
        type: PropType<any>;
        required: true;
    };
}>> & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-resized"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-dragged"?: ((...args: any[]) => any) | undefined;
    "onInterval-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEdit-event"?: ((...args: any[]) => any) | undefined;
    "onDelete-event"?: ((...args: any[]) => any) | undefined;
}, {
    eventsProp: IEvent[];
    modeProp: modeType;
}>;
export default _default;
