import { PropType } from "vue";
import { applicationReference } from "@/utils/types/calendar";
export interface Props {
    title: string;
    subtitle: string;
    responsable: string;
    size: string;
    aplication: applicationReference;
    status: string;
}
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
    aplication: {
        type: PropType<applicationReference>;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    aplication: {
        type: PropType<applicationReference>;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    size: string;
    status: string;
    title: string;
    responsable: string;
    subtitle: string;
    aplication: applicationReference;
}>;
export default _default;
