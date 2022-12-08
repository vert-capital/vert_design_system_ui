import { PropType } from "vue";
import { IPeriod, IDay } from "@/utils/types/calendar";
import Time from "@/utils/helpers/Time";
declare const _default: import("vue").DefineComponent<{
    time: {
        type: PropType<Time>;
        required: true;
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
    nDays: {
        type: NumberConstructor;
        default: number;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "day-was-clicked": (__day: IDay) => true;
    "change-period": (__value: string) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    time: {
        type: PropType<Time>;
        required: true;
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
    nDays: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onDay-was-clicked"?: ((__day: IDay) => any) | undefined;
    "onChange-period"?: ((__value: string) => any) | undefined;
}, {
    nDays: number;
}>;
export default _default;
