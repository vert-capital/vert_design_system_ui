import { PropType } from 'vue';
import { generateColumnContent } from '../../utils';
export interface IHeader {
    label: string;
    personalizaded?: boolean;
    sortable?: boolean;
    prop: string;
    sortType?: 'none' | 'desc' | 'asc';
}
export type SortType = 'asc' | 'desc';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        required: true;
    };
    headers: {
        type: PropType<IHeader[]>;
        required: true;
    };
}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    clickRow: (item: any) => void;
    generateColumnContent: typeof generateColumnContent;
    updateSortField: (newSortBy: string, oldSortType: SortType | 'none') => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-row" | "update-sort-field")[], "click-row" | "update-sort-field", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        required: true;
    };
    headers: {
        type: PropType<IHeader[]>;
        required: true;
    };
}>> & {
    "onClick-row"?: ((...args: any[]) => any) | undefined;
    "onUpdate-sort-field"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
