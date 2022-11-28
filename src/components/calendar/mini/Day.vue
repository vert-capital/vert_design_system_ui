<template>
  <div
    :id="'day-' + day.dateTimeString.substring(0, 10)"
    class="calendar-mini__weekday"
    :class="{ 'is-droppable': canBeDropped }"
    @click.self="emitDayWasClicked"
    @dragleave="handleDragLeave"
    @dragover="handleDragOver"
    @drop="handleDrop"
    @dragend="handleDragEnd"
  >
    <span
      v-if="isFirstWeek"
      class="calendar-mini__day-name"
      @click="emitDayWasClicked"
    >
      {{ day.dayName }}
    </span>

    <span class="calendar-mini__day-date" @click="emitDayWasClicked">
      {{ day.dateTimeString.substring(7, 10) }}
    </span>

    <div
      v-for="(calendarEvent, index) in day.events"
      :key="index"
      class="calendar-mini__event-wrapper"
    >
      <Event
        v-if="index < 3"
        :key="calendarEvent.id"
        :calendar-event="calendarEvent"
        :config="config"
        :time="time"
        :day="day"
        @event-was-clicked="$emit('event-was-clicked', $event)"
      />
    </div>

    <div
      v-if="day.events.length >= 4"
      class="calendar-mini__weekday-more"
      @click="switchToWeekMode"
    >
      {{ getLanguage(languageKeys.moreEvents, time.CALENDAR_LOCALE) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IConfig, IDay, IEvent } from  '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import Event from './Event.vue';
import getLanguage from '@/utils/language';

export default defineComponent({
  name: 'Day',

  components: { Event },

  mixins: [getLanguage],

  props: {
    config: {
      type: Object as PropType<IConfig>,
      required: true,
    },
    time: {
      type: Object as PropType<Time>,
      required: true,
    },
    day: {
      type: Object as PropType<IDay>,
      required: true,
    },
    isFirstWeek: {
      type: Boolean,
      default: false,
    },
  },

  emits: [
    'event-was-clicked',
    'event-was-dragged',
    'updated-period',
    'day-was-clicked',
  ],

  data() {
    return {
      isActiveDroppable: false,
    };
  },

  computed: {
    canBeDropped() {
      return this.isActiveDroppable;
    },
  },

  methods: {
    switchToWeekMode() {
      const { date, month, year } = this.time.getAllVariablesFromDateTimeString(
        this.day.dateTimeString
      );
      const selectedDate = new Date(year, month, date);
      const week = this.time.getCalendarWeekDateObjects(selectedDate);
      const start = week[0];
      const end = week[6];

      this.$emit('updated-period', { start, end, selectedDate });
    },

    handleDragLeave() {
      this.isActiveDroppable = false;
    },

    handleDragEnd(mouseEvent: DragEvent) {
      this.isActiveDroppable = false;
      mouseEvent.stopPropagation();
    },

    handleDrop(dropEvent: DragEvent) {
      this.isActiveDroppable = false;
      dropEvent.stopPropagation();

      if (!dropEvent || !dropEvent.dataTransfer) return;

      const calendarEvent: IEvent = JSON.parse(
        dropEvent.dataTransfer.getData('json')
      );
      const eventDroppedOnSameDay = this.time.dateStringsHaveEqualDates(
        calendarEvent.time.start,
        this.day.dateTimeString.substring(0, 10)
      );
      if (eventDroppedOnSameDay) return;

      // Exchange the yyyy-mm-dd part of the string
      calendarEvent.time.start = calendarEvent.time.start.replace(
        /^\d{4}-\d{2}-\d{2}/,
        this.day.dateTimeString.substring(0, 10)
      );
      calendarEvent.time.end = calendarEvent.time.end.replace(
        /^\d{4}-\d{2}-\d{2}/,
        this.day.dateTimeString.substring(0, 10)
      );
      this.$emit('event-was-dragged', calendarEvent);
    },

    handleDragOver(e: DragEvent) {
      this.isActiveDroppable = true;
      e.preventDefault();

      return false;
    },

    emitDayWasClicked() {
      this.$emit('day-was-clicked', this.day.dateTimeString.substring(0, 10));
    },
  },
});
</script>

<style lang="scss" scoped>
.calendar-mini__weekday {
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-right: var(--vcalendar-border-gray-thin);
  border-bottom: var(--vcalendar-border-gray-thin);
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;

  &.is-droppable {
    background-color: var(--vcalendar-light-gray);
  }

  &:last-child {
    border-right: 0;
  }

  .calendar-mini__week:first-child & {
    border-top: var(--vcalendar-border-gray-thin);
  }

  .calendar-mini__day-name,
  .calendar-mini__day-date {
    font-size: var(--vcalendar-font-xs);
    color: var(--vcalendar-gray-quite-dark);

    &:first-child {
      margin-top: 6px;
    }
  }

  .calendar-mini__event-wrapper {
    width: 100%;
  }

  .calendar-mini__weekday-more {
    font-size: var(--vcalendar-font-2xs);
    width: 100%;
    padding-left: 4px;
    color: var(--vcalendar-gray-quite-dark);
    cursor: pointer;
  }
}
</style>
