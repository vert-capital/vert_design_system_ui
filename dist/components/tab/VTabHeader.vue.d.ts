declare const _default: import("vue").DefineComponent<{
    eixo: {
        type: StringConstructor;
        default: string;
    };
    tabTo: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {
    actived(): boolean;
}, {
    activeTab(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeTab"[], "changeTab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    eixo: {
        type: StringConstructor;
        default: string;
    };
    tabTo: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onChangeTab?: ((...args: any[]) => any) | undefined;
}, {
    eixo: string;
}>;
export default _default;
