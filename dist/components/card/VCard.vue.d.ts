export interface Props {
  title: string;
  type: string;
}
declare const _default: import("vue").DefineComponent<
  {
    title: {
      type: import("vue").PropType<string>;
      required: true;
    } & {
      default: string;
    };
    type: {
      type: import("vue").PropType<string>;
      required: true;
    } & {
      default: string;
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    import("vue").ExtractPropTypes<{
      title: {
        type: import("vue").PropType<string>;
        required: true;
      } & {
        default: string;
      };
      type: {
        type: import("vue").PropType<string>;
        required: true;
      } & {
        default: string;
      };
    }>
  >,
  {
    type: string;
    title: string;
  }
>;
export default _default;
