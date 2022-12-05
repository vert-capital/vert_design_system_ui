import { PropType } from 'vue';
import { modeType, IConfig, IEventsFullDay, IDay } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
declare const _default: import("vue").DefineComponent<{
    days: {
        type: PropType<IDay[]>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    fullDayEvents: {
        type: PropType<IEventsFullDay[]>;
        default: () => never[];
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    mode: {
        type: PropType<modeType>;
        required: true;
    };
}, unknown, {
    now: Date;
}, {}, {
    getDaysDate(day: IDay): number;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("event-was-clicked" | "day-was-clicked")[], "event-was-clicked" | "day-was-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    days: {
        type: PropType<IDay[]>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    fullDayEvents: {
        type: PropType<IEventsFullDay[]>;
        default: () => never[];
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    mode: {
        type: PropType<modeType>;
        required: true;
    };
}>> & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
}, {
    fullDayEvents: IEventsFullDay[];
}>;
export default _default;
