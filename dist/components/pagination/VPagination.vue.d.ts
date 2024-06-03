import { PropType } from "vue";
import { ISelectOptions } from "../form/select/VSelect.vue";
declare const _default: import("vue").DefineComponent<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    sizeDefault: {
        type: NumberConstructor;
        default: number;
    };
    sizeOptions: {
        type: PropType<ISelectOptions[]>;
        default: () => {
            value: string;
            label: string;
        }[];
    };
    qtdeButtonsPaginate: {
        type: NumberConstructor;
        default: number;
    };
}, {
    hasPrev: import("vue").ComputedRef<boolean>;
    hasNext: import("vue").ComputedRef<boolean>;
    pageSize: import("vue").Ref<number>;
    goPrev: () => number;
    goNext: () => number;
    buttons: import("vue").ComputedRef<import("./usePagination").IPaginatorButton[]>;
    page: import("vue").Ref<number>;
    numPages: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onChangePagination"[], "onChangePagination", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    sizeDefault: {
        type: NumberConstructor;
        default: number;
    };
    sizeOptions: {
        type: PropType<ISelectOptions[]>;
        default: () => {
            value: string;
            label: string;
        }[];
    };
    qtdeButtonsPaginate: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onOnChangePagination?: ((...args: any[]) => any) | undefined;
}, {
    count: number;
    currentPage: number;
    sizeDefault: number;
    sizeOptions: ISelectOptions[];
    qtdeButtonsPaginate: number;
}>;
export default _default;
