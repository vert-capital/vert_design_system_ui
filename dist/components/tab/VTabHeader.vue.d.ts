declare const _default: import("vue").DefineComponent<{
    actived: {
        type: BooleanConstructor;
        default: boolean;
    };
    eixo: {
        type: StringConstructor;
        default: string;
    };
    tabTo: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {}, {
    activeTab(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    actived: {
        type: BooleanConstructor;
        default: boolean;
    };
    eixo: {
        type: StringConstructor;
        default: string;
    };
    tabTo: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    eixo: string;
    actived: boolean;
}>;
export default _default;
