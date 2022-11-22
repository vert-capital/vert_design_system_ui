declare const _default: import("vue").DefineComponent<{}, {
    pagination: {
        count: number;
        page: number;
        size: number;
    };
    selectOptions: {
        value: string;
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
}, {
    typeTab: string;
    testeSelect: string;
}, {}, {
    onClickButton(): void;
    onClickButtonWarning(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
