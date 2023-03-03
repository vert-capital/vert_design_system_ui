import { eventTypes, IEventCard } from "./utils/types/calendar";
import { Event } from "./utils/helpers/Event";
declare const _default: import("vue").DefineComponent<{}, {
    pagination: {
        count: number;
        page: number;
        size: number;
    };
    selectOptions: {
        value: number;
        label: string;
    }[];
    pokemons: import("vue").Ref<{
        count: number;
        next: string;
        previous: string;
        results: never[];
    }>;
    onChangePagination: (data: any) => void;
    clickRowTable: (row: any) => void;
    calendarSelectedDate: import("vue").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    reactToEvent: (payload: any) => void;
    onClickButtonWarning: () => void;
    onClickButton: () => void;
    onHandleClickDay: () => void;
    eventsTypes: import("vue").Ref<eventTypes[]>;
    onHandleSearch: (search: any) => void;
    onHandleEventClicked: (event: any) => void;
    onChangeTab: (tab: string) => void;
    currentTab: import("vue").Ref<string>;
    testeActiveTab: () => void;
    firstSwitch: import("vue").Ref<boolean>;
    secondSwitch: import("vue").Ref<boolean>;
}, {
    typeTab: string;
    testeSelect: string;
    dropDownExemplo: never[];
    dropDownExemplo2: never[];
    checkbox: never[];
    Event: typeof Event;
    events: IEventCard[];
    isLoading: boolean;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
