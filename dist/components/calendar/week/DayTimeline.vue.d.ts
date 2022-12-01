import { PropType } from 'vue';
import { IDayStarEndControl } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
declare const _default: import("vue").DefineComponent<{
    time: {
        type: PropType<Time>;
        required: true;
    };
    weekHeight: {
        type: StringConstructor;
        required: true;
    };
}, unknown, {
    availableHours: IDayStarEndControl[];
    timelineHours: IDayStarEndControl[];
}, {}, {
    getLocaleTimeString(time: IDayStarEndControl): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    time: {
        type: PropType<Time>;
        required: true;
    };
    weekHeight: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
