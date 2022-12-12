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
    modelValue?: string | number;
    borderNone?: boolean;
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
    } & {
        default: string;
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
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    } & {
        default: string;
    };
    borderNone: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onChange: (selected: any) => void;
} & {
    "update:modelValue": (selected: any) => void;
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
    } & {
        default: string;
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
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    } & {
        default: string;
    };
    borderNone: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
}>> & {
    onOnChange?: ((selected: any) => any) | undefined;
    "onUpdate:modelValue"?: ((selected: any) => any) | undefined;
}, {
    name: string;
    size: string;
    id: string;
    placeholder: string;
    label: string;
    options: ISelectOptions[];
    modelValue: string | number;
    borderNone: boolean;
}>;
export default _default;
