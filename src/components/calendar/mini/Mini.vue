<template>
  <div class="calendar-mini">
    <div class="calendar-mini__weeks">
      <div
        v-for="(week, weekIndex) in mini"
        :key="weekIndex"
        class="calendar-mini__week"
      >
        <Day
          v-for="(day, dayIndex) in week"
          :key="dayIndex"
          :is-first-week="weekIndex === 0"
          :config="config"
          :day="day"
          :time="time"
          @event-was-clicked="handleClickOnEvent"
          @event-was-dragged="handleEventWasDragged"
          @day-was-clicked="$emit('day-was-clicked', $event)"
          @updated-period="$emit('updated-period', $event)"
        />
      </div>
    </div>

    <EventFlyout
      v-if="!config.eventDialog || !config.eventDialog.isDisabled"
      :calendar-event-prop="selectedEvent"
      :event-element="selectedEventElement"
      :time="time"
      :config="config"
      @hide="selectedEvent = null"
      @edit-event="$emit('edit-event', $event)"
      @delete-event="$emit('delete-event', $event)"
    >
      <template #default="p">
        <slot
          name="eventDialog"
          :event-dialog-data="p.eventDialogData"
          :close-event-dialog="p.closeEventDialog"
        ></slot>
      </template>
    </EventFlyout>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Day from './Day.vue';
import Time from '@/utils/helpers/Time';
import { IEvent, IConfig, IPeriod, IDay } from '@/utils/types/calendar';
import EDate from '@/utils/helpers/EDate';
import EventFlyout from '../partials/EventFlyout.vue';
import {
  DATE_PATTERN,
  DATE_TIME_PATTERN,
} from '@/utils/constants';
import EventPosition from '@/utils/helpers/EventPosition';
import PerfectScrollbar from 'perfect-scrollbar';

const EventPositionHelper = new EventPosition();

export default defineComponent({
  name: 'mini',

  components: {
    Day,
    EventFlyout,
  },

  props: {
    config: {
      type: Object as PropType<IConfig>,
      required: true,
    },
    time: {
      type: Object as PropType<Time>,
      required: true,
    },
    period: {
      type: Object as PropType<IPeriod>,
      required: true,
    },
    eventsProp: {
      type: Array as PropType<IEvent[]>,
      default: () => [],
    },
  },

  emits: [
    'edit-event',
    'delete-event',
    'updated-period',
    'event-was-clicked',
    'event-was-dragged',
    'day-was-clicked',
  ],

  data() {
    return {
      mini: [] as IDay[][],
      selectedEvent: null as IEvent | null,
      selectedEventElement: null as any | null,
      events: this.eventsProp,
      fullDayEvents: [] as IEvent[],
      scrollbar: null as any,
    };
  },

  mounted() {
    this.iniMini();
    this.initScrollbar();
  },

  methods: {
    initScrollbar(elapsedMs = 0) {
      const el = document.querySelector('.calendar-mini');
      if (elapsedMs > 3000) return;
      if (!el) this.initScrollbar(elapsedMs + 50);
      else {
        this.scrollbar = new PerfectScrollbar(el);
        this.scrollbar.update();
      }
    },

    iniMini() {
      this.mini = [];

      this.sortOutFullDayEvents();
      this.setMini();
    },

    setMini() {
      const { month, fullYear } = new EDate(this.period.selectedDate);
      const calendarmini = this.time.getCalendarMonthSplitInWeeks(
        fullYear,
        month
      );

      const miniWithEvents = calendarmini.map((week) => {
        return week.map((day) => {
          const dateTimeString = this.time.getDateTimeStringFromDate(day);
          const events = this.events.filter((event) => {
            return (
              event.time.start.substring(0, 11) ===
              dateTimeString.substring(0, 11)
            );
          });

          return {
            dayName: this.time.getLocalizedNameOfWeekday(day),
            dateTimeString: this.time.getDateTimeStringFromDate(day),
            events: events,
          };
        });
      });

      this.mini = EventPositionHelper.positionFullDayEventsInMonth(
        miniWithEvents,
        this.fullDayEvents
      );
    },

    sortOutFullDayEvents() {
      const timedEvents = [];
      const fullDayEvents = [];

      for (const calendarEvent of this.events) {
        if (DATE_TIME_PATTERN.test(calendarEvent.time.start))
          timedEvents.push(calendarEvent);
        else if (
          DATE_PATTERN.test(calendarEvent.time.start)
        )
          fullDayEvents.push(calendarEvent);
      }

      this.events = timedEvents;
      this.fullDayEvents = fullDayEvents;
    },

    handleClickOnEvent(event: {
      eventElement: HTMLDivElement;
      clickedEvent: IEvent;
    }) {
      this.$emit('event-was-clicked', event);

      this.selectedEventElement = event.eventElement;
      this.selectedEvent = event.clickedEvent;
    },

    handleEventWasDragged(calendarEvent: IEvent) {
      this.$emit('event-was-dragged', calendarEvent);
      const newEvents = [...this.events, ...this.fullDayEvents].filter(
        (e) => e.id !== calendarEvent.id
      );
      newEvents.push(calendarEvent);
      this.events = [];
      this.fullDayEvents = [];
      this.events = newEvents;
      this.iniMini();
    },
  },
});
</script>

<style lang="scss" scoped>
.calendar-mini {
  position: relative;
  flex: 1;
  width: 100%;
  overflow-y: auto;

  .calendar-mini__weeks {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .calendar-mini__week {
    display: flex;
    flex: 1;
  }
}
</style>