<template>
  <div class="vcalendar-mini">
    <div class="vcalendar-mini--week">
      <WeekCarousel
        :days="days"
        :time="time"
        :full-day-events="fullDayEvents"
        :config="config"
        @day-was-clicked="handleDayWasClicked"
      />
    </div>
    <div class="vcalendar-mini--day">
      {{dayNameSelected}}
    </div>
</div>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue';
import { IConfig, IEvent, IPeriod, IDay, IEventsFullDay } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import WeekCarousel from './WeekCarousel.vue';
import StringHelper from '@/utils/helpers/String';

const props = defineProps({
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
  nDays: {
    type: Number,
    default: 7,
  },
});

const emits = defineEmits({
  'day-was-clicked': (day: IDay) => true,
});


const days = ref<IDay[]>([]);
const fullDayEvents = ref<IEventsFullDay[]>([]);
const dayNameSelected = ref('');

const setDays = () => {
  const days_: IDay[] = props.time.getCalendarWeekDateObjects(props.period.start).
    map((day: Date) => {
      const dayName = props.time.getLocalizedNameOfWeekday(day, 'long');
      const dateTimeString = props.time.getDateTimeStringFromDate(day, 'start');
      if (props.time.dateIsToday(day)) {
        getDateAndDayLongName(day, true);
      }
      return { dayName, dateTimeString };
    });

  if (props.nDays === 5 && props.time.FIRST_DAY_OF_WEEK === 'monday') {
    days_.splice(5, 2);
    fullDayEvents.value.splice(5, 2);
  } else if (props.nDays === 5 && props.time.FIRST_DAY_OF_WEEK === 'sunday') {
    days_.splice(6, 1);
    fullDayEvents.value.splice(6, 1);
    days_.splice(0, 1);
    fullDayEvents.value.splice(0, 1);
  }

  days.value = days_;
}

const mergeFullDayEventsIntoDays = () => {
  for (const [dayIndex] of days.value.entries()) {
    days.value[dayIndex].fullDayEvents = fullDayEvents.value[dayIndex];
  }
}

const setInitialEvents = () => {
  setDays();
  mergeFullDayEventsIntoDays();
}

const getDateAndDayLongName = (day: Date, isToday = false) => {
  const { date } = props.time.getAllVariablesFromDateTimeString(props.time.getDateTimeStringFromDate(day, 'start'));
  dayNameSelected.value = (isToday ? 'Hoje - ' : '') + props.time.getLocalizedNameOfWeekday(day, 'short')
    + ', '
    + date
    + ' de '
    + StringHelper.capitalizeFirstLetter(props.time.getLocalizedNameOfMonth(day, 'short'));
  return dayNameSelected.value;
}

const handleDayWasClicked = (day: IDay) => {
  const replate_date = day.dateTimeString.replace('-',',');
  const dayDate = new Date(replate_date);
  day.dayName = getDateAndDayLongName(dayDate, props.time.dateIsToday(dayDate));
  emits('day-was-clicked', day);
}

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
    border-bottom: 1px solid #E0E0E0;
  }

  &--day {
    font-weight: 700;
    font-size: 1rem;
    padding-top: 0.8rem;
  }
}
</style>