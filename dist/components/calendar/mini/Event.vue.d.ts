import { PropType } from 'vue';
import Time from '@/utils/helpers/Time';
import { IEvent, IConfig, IDay } from '@/utils/types/calendar';
declare const _default: import("vue").DefineComponent<{
    time: {
        type: PropType<Time>;
        required: true;
    };
    calendarEvent: {
        type: PropType<IEvent>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    day: {
        type: PropType<IDay>;
        required: true;
    };
}, unknown, {
    colors: {
        [key: string]: string;
    };
    eventBackgroundColor: string;
    eventIdPrefix: string;
}, {
    eventTimeStart(): string | null;
    elementId(): string;
    elementDraggableAttribute(): true | undefined;
}, {
    setColors(): string;
    handleClickOnEvent(): void;
    handleDragStart(dragEvent: DragEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "event-was-clicked"[], "event-was-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    time: {
        type: PropType<Time>;
        required: true;
    };
    calendarEvent: {
        type: PropType<IEvent>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    day: {
        type: PropType<IDay>;
        required: true;
    };
}>> & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
