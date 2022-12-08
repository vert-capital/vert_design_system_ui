import { IEvent } from "@/utils/types/calendar";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<
  {
    events: {
      type: PropType<IEvent[]>;
      default: () => never[];
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  ("event-was-clicked" | "day-was-clicked" | "search-event")[],
  "event-was-clicked" | "day-was-clicked" | "search-event",
  import("vue").VNodeProps &
    import("vue").AllowedComponentProps &
    import("vue").ComponentCustomProps,
  Readonly<
    import("vue").ExtractPropTypes<{
      events: {
        type: PropType<IEvent[]>;
        default: () => never[];
      };
    }>
  > & {
    "onEvent-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onDay-was-clicked"?: ((...args: any[]) => any) | undefined;
    "onSearch-event"?: ((...args: any[]) => any) | undefined;
  },
  {
    events: IEvent[];
  }
>;
export default _default;
