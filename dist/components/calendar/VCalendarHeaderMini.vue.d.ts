declare const _default: import("vue").DefineComponent<
  {},
  {},
  {
    currentPeriod: any;
  },
  {},
  {
    handlePeriodChange(period: any): void;
  },
  {
    data(): {
      languageKeys: {
        week: {
          "it-IT": string;
          "en-US": string;
          "de-DE": string;
          "sv-SE": string;
          "zh-CN": string;
          "pt-BR": string;
          "fr-FR": string;
        };
        month: {
          "it-IT": string;
          "en-US": string;
          "de-DE": string;
          "sv-SE": string;
          "zh-CN": string;
          "pt-BR": string;
          "fr-FR": string;
        };
        day: {
          "it-IT": string;
          "en-US": string;
          "de-DE": string;
          "sv-SE": string;
          "zh-CN": string;
          "pt-BR": string;
          "fr-FR": string;
        };
        personalized: {
          "it-IT": string;
          "en-US": string;
          "de-DE": string;
          "sv-SE": string;
          "zh-CN": string;
          "pt-BR": string;
          "fr-FR": string;
        };
        mini: {
          "it-IT": string;
          "en-US": string;
          "de-DE": string;
          "sv-SE": string;
          "zh-CN": string;
          "pt-BR": string;
          "fr-FR": string;
        };
        moreEvents: {
          "it-IT": string;
          "en-US": string;
          "de-DE": string;
          "sv-SE": string;
          "zh-CN": string;
          "pt-BR": string;
          "fr-FR": string;
        };
      };
    };
    methods: {
      getLanguage(languageKeys: any, locale: string): any;
    };
  },
  import("vue").ComponentOptionsMixin,
  "updated-period"[],
  "updated-period",
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<import("vue").ExtractPropTypes<{}>> & {
    "onUpdated-period"?: ((...args: any[]) => any) | undefined;
  },
  {}
>;
export default _default;
