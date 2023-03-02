<template>
  <div class="vcalendar-mini">
    <div class="vcalendar-mini--week">
      <WeekCarousel
        :days="days"
        :time="time"
        @day-was-clicked="handleDayWasClicked"
        @event-was-clicked="changeWeekDays"
      />
    </div>
    <div class="vcalendar-mini--day">
      {{ dayNameSelected }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import { IPeriod } from "@/utils/types/calendar";
import { Time } from "@/utils/helpers/Time";
import WeekCarousel from "./WeekCarousel.vue";
import { StringHelper } from "@/utils/helpers/String";

const props = defineProps({
  time: {
    type: Object as PropType<Time>,
    required: true,
  },
  period: {
    type: Object as PropType<IPeriod>,
    required: true,
  },
  nDays: {
    type: Number,
    default: 7,
  },
});

const emits = defineEmits({
  "day-was-clicked": (__day: any) => true,
  "change-period": (__value: string) => true,
});

const days = ref<any[]>([]);
const dayNameSelected = ref("");
const initialMonth = ref<number | null>(null);
const initialYear = ref<number | null>(null);

const setDays = (day: Date) => {
  const days_: any[] = props.time
    .getCalendarWeekDateObjects(day)
    .map((day: Date) => {
      const dayName = props.time.getLocalizedNameOfWeekday(day, "long");
      const dateTimeString = props.time.getDateTimeStringFromDate(day, "start");
      if (props.time.dateIsToday(day)) getDateAndDayLongName(day, true);
      emits("change-period", dateTimeString.substring(0, 7));
      return { dayName, dateTimeString };
    });
  days.value = days_;
};

const changeWeekDays = (event: string) => {
  if (event === "chevron-left") {
    const firstDayOfWeek = new Date(days.value[0].dateTimeString);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);
    setDays(firstDayOfWeek);
  } else if (event === "chevron-right") {
    const lastDayOfWeek = new Date(
      days.value[days.value.length - 1].dateTimeString
    );
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 7);
    setDays(lastDayOfWeek);
  }
};

const setInitialEvents = () => {
  setDays(props.period.start);
  const { month, year } = props.time.getAllVariablesFromDateTimeString(
    props.time.getDateTimeStringFromDate(props.period.start, "start")
  );
  initialMonth.value = month;
  initialYear.value = year;
};

const getDateAndDayLongName = (day: Date, isToday = false) => {
  const { date } = props.time.getAllVariablesFromDateTimeString(
    props.time.getDateTimeStringFromDate(day, "start")
  );
  dayNameSelected.value =
    (isToday ? "Hoje - " : "") +
    props.time.getLocalizedNameOfWeekday(day, "short") +
    ", " +
    date +
    " de " +
    StringHelper.capitalizeFirstLetter(
      props.time.getLocalizedNameOfMonth(day, "short")
    );

  return dayNameSelected.value;
};

const handleDayWasClicked = (day: any) => {
  const replate_date = day.dateTimeString.replace("-", ",");
  const dayDate = new Date(replate_date);
  day.dayName = getDateAndDayLongName(dayDate, props.time.dateIsToday(dayDate));
  emits("day-was-clicked", day);
};

onMounted(() => {
  setInitialEvents();
});
</script>
<style lang="scss" scoped>
.vcalendar-mini {
  position: relative;
  flex: 1;

  &--week {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
  }

  &--day {
    font-weight: 700;
    font-size: 1rem;
    padding-top: 1rem;
    color: $neutral-color-low-pure;
    line-height: initial;
  }
}
</style>
