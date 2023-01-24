declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: {
        type: StringConstructor;
        default: string;
    };
    responsable: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-clicked"[], "on-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: {
        type: StringConstructor;
        default: string;
    };
    responsable: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    isLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onOn-clicked"?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    status: string;
    title: string;
    subtitle: string;
    responsable: string;
    isLoading: boolean;
    color: string;
}>;
export default _default;
