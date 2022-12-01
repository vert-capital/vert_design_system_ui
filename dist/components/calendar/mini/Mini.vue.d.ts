import { PropType } from 'vue';
import { IConfig, IEvent, IPeriod, IDay } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
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
    nDays: {
        type: NumberConstructor;
        default: number;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'event-was-clicked': (event: IEvent) => true;
    'day-was-clicked': (day: IDay) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    nDays: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onEvent-was-clicked"?: ((event: IEvent) => any) | undefined;
    "onDay-was-clicked"?: ((day: IDay) => any) | undefined;
}, {
    eventsProp: IEvent[];
    nDays: number;
}>;
export default _default;
