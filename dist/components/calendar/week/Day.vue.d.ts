import { PropType } from 'vue';
import { IEvent, IConfig, dayIntervalsType, IDay } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import { modeType } from '@/utils/types/calendar';
import { interval } from '@/utils/helpers/DayIntervals';
declare const _default: import("vue").DefineComponent<{
    day: {
        type: PropType<IDay>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    dayInfo: {
        type: PropType<{
            daysTotalN: number;
            thisDayIndex: number;
        }>;
        required: true;
    };
    mode: {
        type: PropType<modeType>;
        required: true;
    };
    dayIntervals: {
        type: PropType<dayIntervalsType>;
        required: true;
    };
}, unknown, {
    events: IEvent[];
    intervals: interval[];
}, {
    intervalStyles(): {
        [key: string]: any;
    };
}, {
    calculateEventConcurrency(): void;
    handleEventWasResized(event: any): void;
    handleClickOnInterval(payload: interval): void;
    setClickableIntervals(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("event-was-clicked" | "day-was-clicked" | "event-was-resized" | "event-was-dragged" | "interval-was-clicked")[], "event-was-clicked" | "day-was-clicked" | "event-was-resized" | "event-was-dragged" | "interval-was-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    day: {
        type: PropType<IDay>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    dayInfo: {
        type: PropType<{
            daysTotalN: number;
            thisDayIndex: number;
        }>;
        required: true;
    };
    mode: {
        type: PropType<modeType>;
        required: true;
    };
    dayIntervals: {
        type: PropType<dayIntervalsType>;
        required: true;
    };
}>> & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-resized"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-dragged"?: ((...args: any[]) => any) | undefined;
    "onInterval-was-clicked"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
