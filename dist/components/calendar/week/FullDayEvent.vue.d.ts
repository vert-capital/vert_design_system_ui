import { PropType } from 'vue';
import { IEvent, modeType, IConfig } from '@/utils/types/calendar';
interface extendedIEvent extends IEvent {
    nDays: number;
}
declare const _default: import("vue").DefineComponent<{
    scheduleEvent: {
        type: PropType<extendedIEvent>;
        default: null;
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
    colors: {
        [key: string]: string;
    };
    eventColor: string;
    eventBackgroundColor: string;
    eventElementIdPrefix: string;
}, {
    eventWidth(): string;
}, {
    setColors(): string;
    handleClickOnEvent(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "event-was-clicked"[], "event-was-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    scheduleEvent: {
        type: PropType<extendedIEvent>;
        default: null;
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
}, {
    scheduleEvent: extendedIEvent;
}>;
export default _default;
