import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        default: string;
    };
    authorization: {
        type: StringConstructor;
        default: string;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    eventClass: {
        type: PropType<any>;
        default: () => void;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("event-was-clicked" | "day-was-clicked" | "search-event")[], "event-was-clicked" | "day-was-clicked" | "search-event", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        default: string;
    };
    authorization: {
        type: StringConstructor;
        default: string;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    eventClass: {
        type: PropType<any>;
        default: () => void;
    };
}>> & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onSearch-event"?: ((...args: any[]) => any) | undefined;
}, {
    method: string;
    url: string;
    authorization: string;
    eventClass: any;
}>;
export default _default;
