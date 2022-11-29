<template>
  <div class="vcalendar-mini">
    <div class="vcalendar-mini--week">
      <WeekCarousel
        :days="days"
        :time="time"
        :full-day-events="fullDayEvents"
        :config="config"
        :mode="mode"
        @event-was-clicked="handleClickOnEvent"
        @day-was-clicked="$emit('day-was-clicked', $event)"
      />
    </div>
</div>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue';
import { IConfig, IEvent, IPeriod, IDay, IEventsFullDay, modeType } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import EDate from '@/utils/helpers/EDate';
import WeekCarousel from './WeekCarousel.vue';

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
  eventsProp: {
    type: Array as PropType<IEvent[]>,
    default: () => [],
  },
  mode: {
    type: String as PropType<modeType>,
    default: 'mini',
  },
  nDays: {
    type: Number,
    default: 7,
  },
});

const emits = defineEmits<{
  'edit-event': (event: IEvent) => void;
  'delete-event': (event: IEvent) => void;
  'updated-period': (period: IPeriod) => void;
  'event-was-clicked': (event: IEvent) => void;
  'event-was-dragged': (event: IEvent) => void;
  'day-was-clicked': (day: IDay) => void;
}>();

const days = ref<IDay[]>([]);
const selectedEvent = ref<IEvent | null>(null);
const selectedEventElement = ref<any | null>(null);
const mode = ref<modeType>(props.modeProp);
const events = ref(props.eventsProp);
const fullDayEvents = ref<IEventsFullDay[]>([]);

const handleClickOnEvent = (event: IEvent, element: any) => {
  selectedEvent.value = event;
  selectedEventElement.value = element;
  emits['event-was-clicked'](event);
};

const setDays = () => {
  const days_ = props.time.getCalendarWeekDateObjects(props.period.start).
    map((day: Date) => {
      const dayName = props.time.getLocalizedNameOfWeekday(day, 'long');
      const dateTimeString = props.time.getDateTimeStringFromDate(day,'start');
      const events_ = events.value.filter((event: IEvent) => {
        const eventIsInDay = event.time.start.substring(0, 11) === dateTimeString.substring(0, 11);
        let eventIsInDayBoundaries = true;

        return eventIsInDay && eventIsInDayBoundaries;
      });
      return { dayName, dateTimeString, events_ };
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
  }
}
</style>