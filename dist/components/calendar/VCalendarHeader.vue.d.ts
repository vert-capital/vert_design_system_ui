import { PropType } from 'vue';
import { IConfig, modeType } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import String from '@/utils/helpers/String';
interface IPeriod {
    start: Date;
    end: Date;
    selectedDate: Date;
}
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<IConfig>;
        default: () => {};
    };
    mode: {
        type: typeof String;
        validator: (value: modeType) => boolean;
        default: string;
    };
    time: {
        type: PropType<Time>;
        default: () => {};
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
}, unknown, {
    modeOptions: {
        value: string;
        label: string;
    }[];
    currentPeriod: IPeriod;
    showModePicker: boolean;
}, {
    periodName(): string;
    modeName(): any;
    onlyDayModeIsEnabled(): boolean | undefined;
}, {
    handlePeriodChange(value: {
        start: Date;
        end: Date;
        selectedDate: Date;
    }): void;
    goToPeriod(event: MouseEvent, direction: 'previous' | 'next'): void;
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
}, import("vue").ComponentOptionsMixin, ("change-mode" | "updated-period")[], "change-mode" | "updated-period", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<IConfig>;
        default: () => {};
    };
    mode: {
        type: typeof String;
        validator: (value: modeType) => boolean;
        default: string;
    };
    time: {
        type: PropType<Time>;
        default: () => {};
    };
    period: {
        type: PropType<IPeriod>;
        required: true;
    };
}>> & {
    "onChange-mode"?: ((...args: any[]) => any) | undefined;
    "onUpdated-period"?: ((...args: any[]) => any) | undefined;
}, {
    mode: string;
    config: IConfig;
    time: Time;
}>;
export default _default;
