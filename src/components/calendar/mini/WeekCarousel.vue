<template>
  <div class="week-carousel">
    <div
      v-for="(day, dayIndex) in days"
      :key="dayIndex"
      class="week-carousel__day"
      :class="[{
        'is-today':
          time.getDateTimeStringFromDate(now, 'start') === day.dateTimeString,
      }, {'is-selected':day.dateTimeString.substring(0, 10) === selectedDay}]"
      @click="onHandleDayWasClicked(day.dateTimeString.substring(0, 10))"
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
            mode="week"
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
    }
  },

  emits: ['event-was-clicked', 'day-was-clicked'],

  data() {
    return {
      now: new Date(),
      selectedDay: '',
    };
  },

  methods: {
    getDaysDate(day: IDay) {
      const { date } = this.time.getAllVariablesFromDateTimeString(
        day.dateTimeString
      );

      return date;
    },
    isLastDayOfMonth(day: IDay) {
      //validate if day is last day of last month
      const { month, year } = this.time.getAllVariablesFromDateTimeString(
        day.dateTimeString
      );

    },
    onHandleDayWasClicked(day: string) {
      this.selectedDay = day;
      this.$emit('day-was-clicked', day);
    }
  },
});
</script>

<style scoped lang="scss">
.week-carousel {
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  padding-left: 0;
  border-bottom: $color-primary-medium;
  font-family: "Lato", sans-serif;

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
    font-size: 0.843rem;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 4px;
    color: $neutral-color-low-medium;
    line-height: 17px;
  }

  &__date {
    font-size: 0.843rem;
    margin-bottom: 4px;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4A4A4A;
    :hover {
      cursor: pointer;
      background-color: $neutral-color-low-extra-light;
    }

    .is-today & {
      color: $color-primary-pure;
    }

    .is-selected & {
      background-color: $color-primary-light;
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
