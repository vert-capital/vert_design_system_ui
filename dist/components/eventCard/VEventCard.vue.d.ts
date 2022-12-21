import { PropType } from "vue";
import { eventsTypes } from "@/utils/types/calendar";
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: {
        type: StringConstructor;
        default: string;
    };
    responsable: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    eventType: {
        type: PropType<eventsTypes>;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: {
        type: StringConstructor;
        default: string;
    };
    responsable: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    eventType: {
        type: PropType<eventsTypes>;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    size: string;
    status: string;
    title: string;
    subtitle: string;
    responsable: string;
    eventType: eventsTypes;
}>;
export default _default;
