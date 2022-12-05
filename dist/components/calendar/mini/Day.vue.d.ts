import { PropType } from 'vue';
import { IConfig, IDay } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    day: {
        type: PropType<IDay>;
        required: true;
    };
    isFirstWeek: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    isActiveDroppable: boolean;
}, {
    canBeDropped(): boolean;
}, {
    switchToWeekMode(): void;
    handleDragLeave(): void;
    handleDragEnd(mouseEvent: DragEvent): void;
    handleDrop(dropEvent: DragEvent): void;
    handleDragOver(e: DragEvent): false;
    emitDayWasClicked(): void;
}, {
    data(): {
        languageKeys: {
            week: {
                'it-IT': string;
                'en-US': string;
                'de-DE': string;
                'sv-SE': string;
                'zh-CN': string;
                'pt-BR': string;
                'fr-FR': string;
            };
            month: {
                'it-IT': string;
                'en-US': string;
                'de-DE': string;
                'sv-SE': string;
                'zh-CN': string;
                'pt-BR': string;
                'fr-FR': string;
            };
            day: {
                'it-IT': string;
                'en-US': string;
                'de-DE': string;
                'sv-SE': string;
                'zh-CN': string;
                'pt-BR': string;
                'fr-FR': string;
            };
            personalized: {
                'it-IT': string;
                'en-US': string;
                'de-DE': string;
                'sv-SE': string;
                'zh-CN': string;
                'pt-BR': string;
                'fr-FR': string;
            };
            mini: {
                'it-IT': string;
                'en-US': string;
                'de-DE': string;
                'sv-SE': string;
                'zh-CN': string;
                'pt-BR': string;
                'fr-FR': string;
            };
            moreEvents: {
                'it-IT': string;
                'en-US': string;
                'de-DE': string;
                'sv-SE': string;
                'zh-CN': string;
                'pt-BR': string;
                'fr-FR': string;
            };
        };
    };
    methods: {
        getLanguage(languageKeys: any, locale: string): any;
    };
}, import("vue").ComponentOptionsMixin, ("updated-period" | "event-was-clicked" | "day-was-clicked" | "event-was-dragged")[], "updated-period" | "event-was-clicked" | "day-was-clicked" | "event-was-dragged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<IConfig>;
        required: true;
    };
    time: {
        type: PropType<Time>;
        required: true;
    };
    day: {
        type: PropType<IDay>;
        required: true;
    };
    isFirstWeek: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdated-period"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onEvent-was-dragged"?: ((...args: any[]) => any) | undefined;
}, {
    isFirstWeek: boolean;
}>;
export default _default;
