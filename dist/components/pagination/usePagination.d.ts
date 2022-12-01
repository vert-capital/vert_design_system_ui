import type { Ref, ComputedRef } from 'vue';
declare type MaybeRef<T> = T | Ref<T>;
export interface IOptions {
    page?: MaybeRef<number>;
    pageSize?: MaybeRef<number>;
    numItems?: MaybeRef<number>;
    numButtons?: MaybeRef<number>;
}
export interface IPagination {
    page: Ref<number>;
    pageSize: Ref<number>;
    numItems: Ref<number>;
    numButtons: Ref<number>;
    numPages: ComputedRef<number>;
    slice: ComputedRef<[number, number]>;
    buttons: ComputedRef<IPaginatorButton[]>;
    hasPrev: ComputedRef<boolean>;
    hasNext: ComputedRef<boolean>;
    goPrev: () => number;
    goNext: () => number;
    goStart: () => 1;
    goEnd: () => number;
}
interface IButton {
    page: number;
}
export interface IPageButton extends IButton {
    active: boolean;
    ellipsis: false;
}
export interface IEllipsisButton extends IButton {
    active: false;
    ellipsis: true;
}
export declare type IPaginatorButton = IPageButton | IEllipsisButton;
declare const _default: (userOptions: IOptions) => IPagination;
export default _default;
