import { PropType } from "vue";
import { IEvent } from "@/utils/types/calendar";
declare const _default: import("vue").DefineComponent<{
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
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "event-was-clicked": (event: any) => void;
} & {
    "day-was-clicked": (event: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onEvent-was-clicked"?: ((event: any) => any) | undefined;
    "onDay-was-clicked"?: ((event: any) => any) | undefined;
}, {
    events: IEvent[];
    selectedDate: Date;
    isLoading: boolean;
}>;
export default _default;
