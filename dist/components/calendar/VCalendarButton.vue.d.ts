import type { IEventCard } from "@/utils/types/calendar";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    events: {
        type: PropType<IEventCard[]>;
        default: () => null;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    urlEvents: {
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
    events: {
        type: PropType<IEventCard[]>;
        default: () => null;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    urlEvents: {
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
    events: IEventCard[];
    method: string;
    url: string;
    urlEvents: string;
    authorization: string;
    eventClass: any;
}>;
export default _default;
