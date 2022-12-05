import { PropType } from 'vue';
import { IEvent, IConfig } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
declare const _default: import("vue").DefineComponent<{
    calendarEventProp: {
        type: PropType<IEvent | null>;
        default: () => {};
    };
    eventElement: {
        type: PropType<any>;
        default: null;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
}, unknown, {
    isVisible: boolean;
    top: number | null;
    left: number | null;
    calendarEvent: IEvent | null;
    flyoutWidth: string;
    colors: {
        yellow: string;
        primary: string;
        green: string;
        red: string;
        orange: string;
        purple: string;
        blue: string;
        black: string;
    };
}, {
    getEventTime(): string | null;
    eventFlyoutInlineStyles(): {
        top: string;
        left: string;
        position: "fixed";
        transform: string;
    } | {
        top: string;
        left: string;
        position: "fixed";
        transform?: undefined;
    };
    isEditable(): boolean;
    eventBackgroundColor(): string;
}, {
    setFlyoutPosition(): void;
    editEvent(): void;
    deleteEvent(): void;
    closeFlyout(): void;
    getDateFromDateString(dateString: string): string;
    listenForClickOutside(): void;
    closeFlyoutOnClickOutside(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "edit-event" | "delete-event")[], "hide" | "edit-event" | "delete-event", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    calendarEventProp: {
        type: PropType<IEvent | null>;
        default: () => {};
    };
    eventElement: {
        type: PropType<any>;
        default: null;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
}>> & {
    onHide?: ((...args: any[]) => any) | undefined;
    "onEdit-event"?: ((...args: any[]) => any) | undefined;
    "onDelete-event"?: ((...args: any[]) => any) | undefined;
}, {
    calendarEventProp: IEvent | null;
    eventElement: any;
}>;
export default _default;
