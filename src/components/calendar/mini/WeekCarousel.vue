<template>
  <div class="week-carousel">
    <chevron-left
      class="week-carousel__chevron-left"
      @click="onHandleChevronLeftWasClicked"
    />
    <div
      v-for="(day, dayIndex) in days"
      :key="dayIndex"
      class="week-carousel__day"
      :class="[
        {
          'is-today':
            time.getDateTimeStringFromDate(now, 'start') === day.dateTimeString,
        },
        { 'is-selected': day.dateTimeString.substring(0, 10) === selectedDay },
      ]"
      @click="onHandleDayWasClicked(day)"
    >
      <div class="week-carousel__day-name">
        {{ day.dayName.substring(0, 3) }}
      </div>

      <div class="week-carousel__date">
        {{ getDaysDate(day) }}
      </div>
    </div>
    <chevron-right
      class="week-carousel__chevron-right"
      @click="onHandleChevronRightWasClicked"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IDay } from "@/utils/types/calendar";
import { Time } from "@/utils/helpers/Time";
import ChevronLeft from "@/components/icons/ChevronLeft.vue";
import ChevronRight from "@/components/icons/ChevronRight.vue";
export default defineComponent({
  name: "Weekcarousel",

  components: { ChevronLeft, ChevronRight },

  props: {
    days: {
      type: Array as PropType<any[]>,
      required: true,
    },
    time: {
      type: Object as PropType<Time>,
      required: true,
    },
  },

  emits: ["event-was-clicked", "day-was-clicked"],

  data() {
    return {
      now: new Date(),
      selectedDay: "",
    };
  },

  methods: {
    getDaysDate(day: IDay) {
      const { date } = this.time.getAllVariablesFromDateTimeString(
        day.dateTimeString
      );

      return date;
    },
    onHandleDayWasClicked(day: IDay) {
      this.selectedDay = day.dateTimeString.substring(0, 10);
      this.$emit("day-was-clicked", day);
    },
    onHandleChevronLeftWasClicked() {
      this.$emit("event-was-clicked", "chevron-left");
    },
    onHandleChevronRightWasClicked() {
      this.$emit("event-was-clicked", "chevron-right");
    },
  },
});
</script>

<style scoped lang="scss">
.week-carousel {
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
  border-bottom: $brand-color-primary-medium;
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
    :hover {
      cursor: pointer;
      background-color: $neutral-color-low-extra-light;
    }
  }

  &__day-name {
    font-size: 0.843rem;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 1rem;
    color: $neutral-color-low-medium;
    line-height: 17px;
  }

  &__date {
    font-size: 0.843rem;
    line-height: 1rem;
    margin-bottom: 1rem;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4a4a4a;
    :hover {
      cursor: pointer;
      background-color: $neutral-color-low-extra-light;
    }

    .is-today & {
      color: $brand-color-primary-pure;
      font-weight: 700;
    }

    .is-selected & {
      background-color: $neutral-color-hight-extra-light;
    }
  }

  &__chevron-left {
    color: $neutral-color-low-medium;
    cursor: pointer;
  }

  &__chevron-right {
    color: $neutral-color-low-medium;
    cursor: pointer;
  }
}
</style>
