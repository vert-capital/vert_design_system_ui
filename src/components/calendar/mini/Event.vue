<template>
  <div
    :id="elementId"
    class="calendar-month__event is-event"
    :class="{ 'is-draggable': elementDraggableAttribute }"
    :draggable="elementDraggableAttribute"
    @dragstart="handleDragStart"
    @click="handleClickOnEvent"
  >
    <span class="calendar-month__event-color" />

    <span v-if="eventTimeStart" class="calendar-month__event-time">
      {{ eventTimeStart }}
    </span>

    <span class="calendar-month__event-title">
      {{ calendarEvent.title }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Time from '@/utils/helpers/Time';
import { IEvent, IConfig, IDay } from '@/utils/types/calendar';
import { DATE_TIME_PATTERN, ITENS_COLOR } from '@/utils/constants';

export default defineComponent({
  name: 'Event',

  props: {
    time: {
      type: Object as PropType<Time>,
      required: true,
    },
    calendarEvent: {
      type: Object as PropType<IEvent>,
      required: true,
    },
    config: {
      type: Object as PropType<IConfig>,
      required: true,
    },
    day: {
      type: Object as PropType<IDay>,
      required: true,
    },
  },

  emits: ['event-was-clicked'],

  data() {
    return {
      colors: ITENS_COLOR as { [key: string]: string },
      eventBackgroundColor: '',
      eventIdPrefix: 'calendar-month__event-',
    };
  },

  computed: {
    eventTimeStart() {
      return DATE_TIME_PATTERN.test(this.calendarEvent.time.start)
        ? this.time.getLocalizedTime(this.calendarEvent.time.start)
        : null;
    },

    elementId() {
      return (
        this.eventIdPrefix +
        this.calendarEvent.id +
        this.day.dateTimeString.substring(0, 10)
      );
    },

    elementDraggableAttribute() {
      const {
        year: startYear,
        month: startMonth,
        date: startDate,
      } = this.time.getAllVariablesFromDateTimeString(
        this.calendarEvent.time.start
      );
      const {
        year: endYear,
        month: endMonth,
        date: endDate,
      } = this.time.getAllVariablesFromDateTimeString(
        this.calendarEvent.time.end
      );
      const eventIsSingleDay =
        startYear === endYear &&
        startMonth === endMonth &&
        startDate === endDate;

      const dragAndDropIsDisabled =
        this.calendarEvent.disableDnD &&
        this.calendarEvent.disableDnD.includes('month');

      return this.calendarEvent.isEditable &&
        eventIsSingleDay &&
        !dragAndDropIsDisabled
        ? true
        : undefined;
    },
  },

  mounted() {
    this.setColors();
  },

  methods: {
    setColors() {
      if (
        this.calendarEvent?.colorScheme &&
        this.config.style?.colorSchemes &&
        this.config.style.colorSchemes[this.calendarEvent.colorScheme]
      ) {
        return (this.eventBackgroundColor =
          this.config.style.colorSchemes[
            this.calendarEvent.colorScheme
          ].backgroundColor);
      }

      if (this.calendarEvent?.color) {
        return (this.eventBackgroundColor =
          this.colors[this.calendarEvent.color]);
      }

      return (this.eventBackgroundColor = this.colors.blue);
    },

    handleClickOnEvent() {
      const eventElement = document.getElementById(this.elementId);

      this.$emit('event-was-clicked', {
        clickedEvent: this.calendarEvent,
        eventElement,
      });
    },

    handleDragStart(dragEvent: DragEvent) {
      if (!dragEvent || !dragEvent.dataTransfer) return;

      dragEvent.dataTransfer.effectAllowed = 'move';
      dragEvent.dataTransfer.setData(
        'json',
        JSON.stringify(this.calendarEvent)
      );
    },
  },
});
</script>

<style lang="scss" scoped>

.calendar-month__event {
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  font-size: 0.5rem;
  width: 30px;
  margin-bottom: 4px;
  padding: 2px 0;
  cursor: pointer;
  user-select: none;

  &.is-draggable {
    cursor: grab;
  }

  &:active {
    z-index: 100;
  }

  &:not(.is-draggable) {
    &:active {
      cursor: not-allowed;
    }
  }

  @include hover {
    background-color: #a5f3fc;
  }

  .calendar-month__event-color {
    background-color: #ccc;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 4px;
  }

  .calendar-month__event-time {
    margin-right: 6px;
  }

  .calendar-month__event-time,
  .calendar-month__event-title,
  .calendar-month__event-color {
    flex-shrink: 0;
  }

  .calendar-month__event-title {
    font-weight: 600;
  }
}
</style>
