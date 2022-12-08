import { PropType } from "vue";
import { IEvent } from "@/utils/types/calendar";
declare const _default: import("vue").DefineComponent<
  {
    events: {
      type: PropType<IEvent[]>;
      default: () => never[];
    };
    selectedDate: {
      type: DateConstructor;
      default: Date;
    };
    isLoading: {
      type: BooleanConstructor;
      default: boolean;
    };
  },
  unknown,
  {
    wasInitialized: number;
    period: {
      start: Date;
      end: Date;
      selectedDate: Date;
    };
    week: {
      nDays: number;
    };
    mode: string;
    time: any;
  },
  {},
  {
    setConfigOnMount(): void;
    setPeriodOnMount(): void;
  },
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  ("event-was-clicked" | "day-was-clicked")[],
  "event-was-clicked" | "day-was-clicked",
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    import("vue").ExtractPropTypes<{
      events: {
        type: PropType<IEvent[]>;
        default: () => never[];
      };
      selectedDate: {
        type: DateConstructor;
        default: Date;
      };
      isLoading: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
  },
  {
    events: IEvent[];
    selectedDate: Date;
    isLoading: boolean;
  }
>;
export default _default;
