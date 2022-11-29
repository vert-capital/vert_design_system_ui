<template>
  <div class="week-carousel">
    <div
      v-for="(day, dayIndex) in days"
      :key="dayIndex"
      class="week-carousel__day"
      :class="{
        'is-today':
          time.getDateTimeStringFromDate(now, 'start') === day.dateTimeString,
      }"
      @click="$emit('day-was-clicked', day.dateTimeString.substring(0, 10))"
    >
      <div class="week-carousel__day-name">
        {{ day.dayName.substring(0, 3) }}
      </div>

      <div class="week-carousel__date">
        {{ getDaysDate(day) }}
      </div>

      <div class="week-carousel__events">
        <template v-for="(event, key) in day.fullDayEvents" :key="key">
          <FullDayEvent
            v-if="key !== 'date'"
            :schedule-event="typeof event === 'object' ? event : null"
            :config="config"
            :mode="mode"
            @event-was-clicked="$emit('event-was-clicked', $event)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { modeType, IConfig, IEventsFullDay, IDay } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import FullDayEvent from './FullDayEvent.vue';

export default defineComponent({
  name: 'Weekcarousel',

  components: { FullDayEvent },

  props: {
    days: {
      type: Array as PropType<IDay[]>,
      required: true,
    },
    time: {
      type: Object as PropType<Time>,
      required: true,
    },
    fullDayEvents: {
      type: Array as PropType<IEventsFullDay[]>,
      default: () => [],
    },
    config: {
      type: Object as PropType<IConfig>,
      required: true,
    },
    mode: {
      type: String as PropType<modeType>,
      required: true,
    },
  },

  emits: ['event-was-clicked', 'day-was-clicked'],

  data() {
    return {
      now: new Date(),
    };
  },

  methods: {
    getDaysDate(day: IDay) {
      const { date } = this.time.getAllVariablesFromDateTimeString(
        day.dateTimeString
      );

      return date;
    },
  },
});
</script>

<style scoped lang="scss">
.week-carousel {
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: var(--vcalendar-spacing-half);
  padding-left: var(--vcalendar-week-padding-left);
  border-bottom: var(--vcalendar-border-gray-thin);

  .mode-is-day & {
    width: 100%;
    padding-left: 0;
  }

  &__day {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }

  &__day-name {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 4px;
    color: $neutral-color-low-medium;
  }

  &__date {
    font-size: 1rem;
    margin-bottom: 4px;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .is-today & {
      color: $color-primary-pure;
    }
  }

  &__events {
    width: 100%;
    flex: 1;
    border-right: 1px dashed rgb(224 224 224);

    .week-carousel__day:first-child & {
      border-left: 1px dashed rgb(224 224 224);
    }
  }
}
</style>