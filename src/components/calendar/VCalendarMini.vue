<template>
  <div class="calendar-root-wrapper">
    <div
      class="calendar-root"
      :class="{
        'mode-is-mini': mode === 'mini',
        'vcalendar-is-small': calendarWidth < 700,
      }"
    >
      <Transition name="loading">
        <div v-if="isLoading" class="top-bar-loader" />
      </Transition>

      <AppHeaderMini 
        :key="wasInitialized + mode + '-header'"
        :config="config"
        :mode="mode"
        :time="time"
        :period="period"
        @updated-period="handleUpdatedPeriod" />

      <Mini
        :key="period.start.getTime() + period.end.getTime() + eventRenderingKey"
        :events-prop="eventsDataProperty"
        :time="time"
        :config="config"
        :period="period"
        :n-days="week.nDays"
        @event-was-clicked="$emit('event-was-clicked', $event)"
        @day-was-clicked="$emit('day-was-clicked', $event)"
        @event-was-dragged="handleEventWasUpdated($event, 'dragged')"
        @updated-period="handleUpdatedPeriod($event)"
        @edit-event="$emit('edit-event', $event)"
        @delete-event="$emit('delete-event', $event)"
      >
        <template #eventDialog="p">
          <slot
            name="eventDialog"
            :event-dialog-data="p.eventDialogData"
            :close-event-dialog="p.closeEventDialog"
          ></slot>
        </template>
      </Mini>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IEvent, IConfig, modeType } from '@/utils/types/calendar';
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
    'event-was-resized',
    'event-was-dragged',
    'updated-period',
    'edit-event',
    'delete-event',
    'interval-was-clicked',
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
        {
          start: this.setTimePointsFromDayBoundary(this.config?.dayBoundaries?.start || 0),
          end: this.setTimePointsFromDayBoundary(this.config?.dayBoundaries?.end || 24),
        },
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
    this.onCalendarResize();
    this.setPeriodOnMount();
    window.addEventListener('resize', this.onCalendarResize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onCalendarResize);
  },

  methods: {
    setConfigOnMount() {
      this.wasInitialized = 1;
    },

    handleUpdatedPeriod(
      value: { start: Date; end: Date; selectedDate: Date }
    ) {
      console.log('handleUpdatedPeriod', value);
      this.$emit('updated-period', { start: value.start, end: value.end });
      this.period = value;
    },


    onCalendarResize() {
      // Calculate break point for day mode based on root font-size
      const documentRoot = document.documentElement;
      const calendarRoot = document.querySelector('.calendar-root');
      const documentFontSize = +window
        .getComputedStyle(documentRoot)
        .fontSize.split('p')[0];
      const breakPointFor1RemEquals16px = 700;
      const multiplier = 16 / documentFontSize;
      const dayModeBreakpoint = breakPointFor1RemEquals16px / multiplier; // For 16px root font-size, break point is at 43.75rem

      if (!calendarRoot) return;

      this.calendarWidth = calendarRoot.clientWidth;

      if (this.calendarWidth < dayModeBreakpoint && this.mode !== 'day') this.mode = 'day';
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
      this.$emit(`event-was-${eventType}`, calendarEvent);
    },

    setTimePointsFromDayBoundary(boundary: number) {
      // Only allow integers between 0 and 24
      if (boundary < 0 || boundary > 24 || boundary % 1 !== 0) throw new Error('Invalid day boundary');

      if (boundary === 0) return boundary;

      return boundary * 100;
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
