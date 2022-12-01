import { PropType } from 'vue';
import { IEvent, IConfig } from '@/utils/types/calendar';
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
        nDays: number;
    };
    mode: string;
    time: any;
    fontFamily: string;
    calendarWidth: number;
    eventRenderingKey: number;
    eventsDataProperty: IEvent[];
}, {}, {
    setConfigOnMount(): void;
    setPeriodOnMount(): void;
    handleEventWasUpdated(calendarEvent: IEvent, eventType: 'dragged' | 'resized'): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("event-was-clicked" | "day-was-clicked")[], "event-was-clicked" | "day-was-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
}, {
    config: IConfig;
    selectedDate: Date;
    events: IEvent[];
    isLoading: boolean;
}>;
export default _default;
