declare const _default: import("vue").DefineComponent<
  {
    title: {
      type: StringConstructor;
      default: string;
    };
    positionContent: {
      type: StringConstructor;
      default: string;
    };
    widthContent: {
      type: StringConstructor;
      default: string;
    };
    showIcon: {
      type: BooleanConstructor;
      default: boolean;
    };
    showPopUp: {
      type: BooleanConstructor;
      default: boolean;
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
        type: StringConstructor;
        default: string;
      };
      positionContent: {
        type: StringConstructor;
        default: string;
      };
      widthContent: {
        type: StringConstructor;
        default: string;
      };
      showIcon: {
        type: BooleanConstructor;
        default: boolean;
      };
      showPopUp: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  >,
  {
    title: string;
    positionContent: string;
    widthContent: string;
    showIcon: boolean;
    showPopUp: boolean;
  }
>;
export default _default;
