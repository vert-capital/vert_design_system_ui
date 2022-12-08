declare const _default: import("vue").DefineComponent<
  {
    eixo: {
      type: StringConstructor;
      default: string;
    };
    contentId: {
      type: StringConstructor;
      required: true;
    };
  },
  unknown,
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
      eixo: {
        type: StringConstructor;
        default: string;
      };
      contentId: {
        type: StringConstructor;
        required: true;
      };
    }>
  >,
  {
    eixo: string;
  }
>;
export default _default;
