<template>
  <div class="calendar-root-wrapper">
    <div
      class="calendar-root mode-is-mini"
      :class="{
        'vcalendar-is-small': calendarWidth < 700,
      }"
    >
      <Transition name="loading">
        <div v-if="isLoading" class="top-bar-loader" />
      </Transition>

      <AppHeaderMini 
        :key="wasInitialized + mode + '-header'"
        :time="time"
        :period="period"
      />

      <Mini
        :key="period.start.getTime() + period.end.getTime() + eventRenderingKey"
        :events-prop="eventsDataProperty"
        :time="time"
        :config="config"
        :period="period"
        :n-days="week.nDays"
        @event-was-clicked="$emit('event-was-clicked', $event)"
        @day-was-clicked="$emit('day-was-clicked', $event)"
      >
      </Mini>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IEvent, IConfig } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import AppHeaderMini from '@/components/calendar/VCalendarHeaderMini.vue';
import Errors from './Errors';
import Mini from '@/components/calendar/mini/Mini.vue';

export default defineComponent({
  name: 'VCalendarMini',

  components: {
    AppHeaderMini,
    Mini
},

  props: {
    config: {
      type: Object as PropType<IConfig>,
      default: () => ({}),
    },
    events: {
      type: Array as PropType<IEvent[]>,
      default: () => [],
    },
    selectedDate: {
      type: Date,
      default: new Date(),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  emits: [
    'event-was-clicked',
    'day-was-clicked',
  ],

  data() {
    return {
      wasInitialized: 0,
      period: {
        start: new Date(),
        end: new Date(),
        selectedDate: this.selectedDate ? this.selectedDate : new Date(),
      },
      week: {
        nDays: 7,
      },
      mode: 'mini',
      time: new Time(
        this.config?.week?.startsOn,
        this.config?.locale || null,
      ) as Time | any,
      fontFamily:
        this.config?.style?.fontFamily || "'Lato",
      calendarWidth: 0,
      eventRenderingKey: 0,
      eventsDataProperty: this.events || [],
    };
  },

  watch: {
    events: {
      deep: true,
      handler(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.eventsDataProperty = newVal;
          this.eventRenderingKey = this.eventRenderingKey + 1;
        }

        if (this.config.isSilent) return;
        this.events.forEach((e) => Errors.checkEventProperties(e));
      },
      immediate: true,
    },

    config: {
      deep: true,
      handler(value: IConfig) {
        Errors.checkConfig(value);
      },
      immediate: true,
    },
  },

  mounted() {
    this.setConfigOnMount();
    this.setPeriodOnMount();
  },


  methods: {
    setConfigOnMount() {
      this.wasInitialized = 1;
    },

    setPeriodOnMount() {

        const currentWeek = this.time.getCalendarWeekDateObjects(
          this.period.selectedDate
        );
        this.period.start = currentWeek[0];
        this.period.end = currentWeek[6];
    },

    handleEventWasUpdated(
      calendarEvent: IEvent,
      eventType: 'dragged' | 'resized'
    ) {
      const newEvents = this.eventsDataProperty.filter(
        (e) => e.id !== calendarEvent.id
      );
      this.eventsDataProperty = [calendarEvent, ...newEvents];
    }
  },
});
</script>

<style lang="scss">

.calendar-root-wrapper {
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 00px;
  display: flex;

  .calendar-root {
    flex: 1;
    border: #aaa;
    border-radius: #ccc;
    font-family: "Lato", sans-serif;

    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;

    .top-bar-loader {
      position: absolute;
      top: 1px;
      left: 2px;
      width: calc(100% - 4px);
      height: 3px;
      background: rgba(241, 241, 241, 0.2);
      border-radius: 16px;
      overflow: hidden;
    }

    .top-bar-loader:before {
      content: '';
      height: 4px;
      width: calc(100% - 4px);
      position: absolute;
      top: 1px;
      left: 2px;
      background: rgb(38, 132, 255);
      background: linear-gradient(
        90deg,
        rgba(38, 132, 255, 1) 0%,
        rgba(38, 132, 255, 0.5088410364145659) 48%,
        rgba(38, 132, 255, 1) 100%
      );
      animation: load 1.8s infinite;
      border-radius: 16px;
    }

    @keyframes load {
      0% {
        width: 0;
        left: -100%;
      }
      50% {
        left: 0;
        width: 100%;
      }
      100% {
        width: 0;
        left: 100%;
      }
    }

    .loading-enter-active,
    .loading-leave-active {
      transition: background 0.5s ease;
    }

    .loading-leave-to,
    .loading-enter-from {
      background-color: rgba(255, 255, 255, 0);
    }
  }
}
</style>
