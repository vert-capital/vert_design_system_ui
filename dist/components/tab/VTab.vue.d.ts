declare const _default: import("vue").DefineComponent<{
    eixo: {
        type: StringConstructor;
        default: string;
    };
    borderBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}, unknown, {
    tabActived: string;
}, {}, {
    onChangeTab(tabTo: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "changeTab")[], "update:modelValue" | "changeTab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    eixo: {
        type: StringConstructor;
        default: string;
    };
    borderBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChangeTab?: ((...args: any[]) => any) | undefined;
}, {
    eixo: string;
    borderBottom: boolean;
}>;
export default _default;
