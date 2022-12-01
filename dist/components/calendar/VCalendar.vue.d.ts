import { PropType } from 'vue';
import { IEvent, IConfig, modeType } from '@/utils/types/calendar';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<IConfig>;
        default: () => {};
    };
    events: {
        type: PropType<IEvent[]>;
        default: () => never[];
    };
    selectedDate: {
        type: DateConstructor;
        default: Date;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    wasInitialized: number;
    period: {
        start: Date;
        end: Date;
        selectedDate: Date;
    };
    week: {
        nDays: 7 | 5;
    };
    mode: modeType;
    time: any;
    fontFamily: string;
    calendarWidth: number;
    eventRenderingKey: number;
    eventsDataProperty: IEvent[];
}, {}, {
    setConfigOnMount(): void;
    /**
     * setModeWeek is used as flag, when the user clicks "+ see more" for a day, in the month view
     * */
    handleUpdatedPeriod(value: {
        start: Date;
        end: Date;
        selectedDate: Date;
    }, setModeWeek?: boolean): void;
    /**
     * Update this.period according to the new mode, and then set this.mode to the provided payload
     * */
    handleChangeMode(payload: modeType): void;
    onCalendarResize(): void;
    setPeriodOnMount(): void;
    handleEventWasUpdated(calendarEvent: IEvent, eventType: 'dragged' | 'resized'): void;
    setTimePointsFromDayBoundary(boundary: number): number;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("updated-period" | "event-was-clicked" | "day-was-clicked" | "event-was-resized" | "event-was-dragged" | "interval-was-clicked" | "edit-event" | "delete-event" | "updated-mode")[], "updated-period" | "event-was-clicked" | "day-was-clicked" | "event-was-resized" | "event-was-dragged" | "interval-was-clicked" | "edit-event" | "delete-event" | "updated-mode", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<IConfig>;
        default: () => {};
    };
    events: {
        type: PropType<IEvent[]>;
        default: () => never[];
    };
    selectedDate: {
        type: DateConstructor;
        default: Date;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdated-period"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-resized"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-dragged"?: ((...args: any[]) => any) | undefined;
    "onInterval-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEdit-event"?: ((...args: any[]) => any) | undefined;
    "onDelete-event"?: ((...args: any[]) => any) | undefined;
    "onUpdated-mode"?: ((...args: any[]) => any) | undefined;
}, {
    config: IConfig;
    selectedDate: Date;
    events: IEvent[];
    isLoading: boolean;
}>;
export default _default;
