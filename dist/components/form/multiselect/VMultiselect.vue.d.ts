export interface ISelectOptions {
    value: any;
    label: string;
}
export interface Props {
    id?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    options: Array<ISelectOptions>;
    required?: boolean;
    disable?: boolean;
    size?: string;
    modelValue?: any;
}
declare const _default: import("vue").DefineComponent<{
    id: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    name: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    options: {
        type: import("vue").PropType<ISelectOptions[]>;
        required: true;
    } & {
        default: () => never[];
    };
    required: {
        type: import("vue").PropType<boolean>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    } & {
        default: never[];
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onChange: (valueOption: any) => void;
} & {
    "update:modelValue": (valueOption: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    name: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    options: {
        type: import("vue").PropType<ISelectOptions[]>;
        required: true;
    } & {
        default: () => never[];
    };
    required: {
        type: import("vue").PropType<boolean>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<string>;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    } & {
        default: never[];
    };
}>> & {
    onOnChange?: ((valueOption: any) => any) | undefined;
    "onUpdate:modelValue"?: ((valueOption: any) => any) | undefined;
}, {
    name: string;
    id: string;
    placeholder: string;
    options: ISelectOptions[];
    modelValue: any;
}>;
export default _default;
