import { PropType } from 'vue';
import { IEvent, IConfig, modeType } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
declare const _default: import("vue").DefineComponent<{
    eventProp: {
        type: PropType<IEvent>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    dayInfo: {
        type: PropType<{
            daysTotalN: number;
            thisDayIndex: number;
        }>;
        required: true;
    };
    mode: {
        type: PropType<modeType>;
        required: true;
    };
}, unknown, {
    event: IEvent;
    showResizeElements: boolean;
    eventTransformValue: string;
    eventZIndexValue: number | "initial";
    dayElement: Element | null;
    resizingStartingPoint: undefined;
    resizingStartingPointEndOfTime: string;
    resizingStartingPointStartOfTime: string;
    resizingDirection: string;
    changeInQuarterHoursEventStart: number;
    changeInQuarterHoursEventEnd: number;
    isEditable: boolean;
    colors: {
        [key: string]: string;
    };
    eventColor: string;
    eventBackgroundColor: string;
    isResizing: boolean;
    canDrag: boolean;
    clientYDragStart: number | null;
    clientXDragStart: number | null;
    changeInQuartersOnDrag: number;
    changeInDaysOnDrag: number;
    timeStartDragStart: string;
    timeEndDragStart: string;
}, {
    getEventTime(): string;
    timePointsInDay(): number;
    timePointsInOneMinute(): number;
    getLeftRule(): number;
    getWidthRule(): number;
    getBorderRule(): "none" | "1px solid #fff";
    eventIsLongerThan30Minutes(): boolean;
    hasDisabledDragAndDrop(): boolean;
    hasDisabledResize(): boolean;
    requiredStyles(): {
        top: string;
        height: string;
        left: string;
        width: string;
        transform: string;
        zIndex: number | "initial";
    };
}, {
    getPositionInDay(dateTimeString: string): string;
    getLengthOfEvent(start: string, end: string): string;
    handleClickOnEvent(event: any): void;
    getEventElementFromChildElement(event: any): any;
    onMouseMove(event: any): void;
    onMouseUp(): void;
    resizeEvent(direction: 'down' | 'up'): void;
    stopResizing(): void;
    resetResizingValues(): void;
    getMinutesFromTimePoints(timePoints: number): number;
    setColors(): string;
    handleMouseDown(mouseEvent: MouseEvent): void;
    handleDragEnd(): void;
    handleDrag(mouseEvent: MouseEvent): void;
    handleVerticalDrag(mouseEvent: MouseEvent): void;
    handleHorizontalDrag(mouseEvent: MouseEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("event-was-clicked" | "event-was-resized" | "event-was-dragged")[], "event-was-clicked" | "event-was-resized" | "event-was-dragged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    eventProp: {
        type: PropType<IEvent>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    dayInfo: {
        type: PropType<{
            daysTotalN: number;
            thisDayIndex: number;
        }>;
        required: true;
    };
    mode: {
        type: PropType<modeType>;
        required: true;
    };
}>> & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-resized"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-dragged"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
