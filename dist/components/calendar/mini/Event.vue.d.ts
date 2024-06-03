import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    event: {
        type: PropType<any>;
        required: true;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-clicked"[], "on-clicked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    event: {
        type: PropType<any>;
        required: true;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onOn-clicked"?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
}>;
export default _default;
