import { PropType } from "vue";
import { Time, calendarMonthType, calendarWeekType, calendarYearMonths } from "@/utils/helpers/Time";
import { modeType } from "@/utils/types/calendar";
interface disableDates {
    before: Date;
    after: Date;
}
interface IPeriod {
    start: Date;
    end: Date;
    selectedDate: Date;
}
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        validator: (value: modeType) => boolean;
        default: string;
    };
    timeProp: {
        type: PropType<Time>;
        default: null;
    };
    periodProp: {
        type: PropType<IPeriod>;
        default: null;
    };
    firstDayOfWeek: {
        type: PropType<"sunday" | "monday">;
        default: string;
    };
    defaultDate: {
        type: DateConstructor;
        default: Date;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    disableDates: {
        type: PropType<disableDates>;
        default: null;
    };
}, unknown, {
    periodText: string;
    weekPickerDates: calendarMonthType;
    monthPickerDates: calendarYearMonths;
    showDatePicker: boolean;
    datePickerCurrentDate: Date;
    selectedDate: Date;
    datePickerMode: "month" | "year";
    weekDays: calendarWeekType;
    time: Time;
    period: IPeriod;
}, {
    isStandAloneComponent(): "" | "sunday" | "monday";
}, {
    setMonthDaysInWeekPicker(month?: number, year?: number): void;
    togglePeriodSelector(): void;
    setWeek(date: Date, isOnMountHook?: boolean): void;
    setMonth(date: Date): void;
    emitChange(start: Date, end: Date): void;
    toggleDatePickerPeriod(direction: "previous" | "next"): void;
    toggleDatePickerMode(): "month" | "year" | undefined;
    getLocale(): string;
    goToPeriod(direction: "next" | "previous"): void;
    hideDatePicker(): void;
    hydrateDatePicker(isOnMountHook?: boolean): void;
    checkIfDateIsDisabled(date: Date): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "updated"[], "updated", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        validator: (value: modeType) => boolean;
        default: string;
    };
    timeProp: {
        type: PropType<Time>;
        default: null;
    };
    periodProp: {
        type: PropType<IPeriod>;
        default: null;
    };
    firstDayOfWeek: {
        type: PropType<"sunday" | "monday">;
        default: string;
    };
    defaultDate: {
        type: DateConstructor;
        default: Date;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    disableDates: {
        type: PropType<disableDates>;
        default: null;
    };
}>> & {
    onUpdated?: ((...args: any[]) => any) | undefined;
}, {
    mode: string;
    timeProp: Time;
    periodProp: IPeriod;
    firstDayOfWeek: "sunday" | "monday";
    defaultDate: Date;
    locale: string;
    disableDates: disableDates;
}>;
export default _default;
