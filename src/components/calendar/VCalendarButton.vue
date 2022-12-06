<template>
  <v-pop-up position-content="center center">
    <template #event-area>
      <icon-calendar />
    </template>
    <template #popup-body>
      <v-calendar-mini
        :config="config"
        :events="events"
        :selected-date="calendarSelectedDate"
        @day-was-clicked="onHandleDayClicked"
      ></v-calendar-mini>

      <div class="search-events">
        <input
          v-model="search"
          placeholder="Search"
          @input="searchEvent"
        />
      </div>

      <div id="container-list" class="list-events">
          <div class="list-events__item" v-for="event in eventsOfDay">
            <Event :event="event" ></Event>
          </div>
      </div>
    </template>
  </v-pop-up>
</template>
<script lang="ts" setup>
import { VPopUp, VCalendarMini } from '@/components';
import IconCalendar from '@/components/icons/CalendarDay.vue';
import { IEvent } from '@/utils/types/calendar';
import { onMounted, PropType, ref, watch } from 'vue';
import PerfectScrollbar from 'perfect-scrollbar';
import Event from '@/components/calendar/mini/Event.vue';

const props = defineProps({
  events: {
    type: Array as PropType<IEvent[]>,
    default: () => [],
  },
})

const config = {
  locale: 'pt-BR',
  showCurrentTime: true,
  isSilent: true
};


const calendarSelectedDate = ref(new Date());

function onHandleDayClicked(payload: any) {
  const date = new Date(payload.dateTimeString);
  calendarSelectedDate.value = date;

  const dateTimeString = payload.dateTimeString.substring(0, 10);
  eventsOfDay.value = eventsDataProperty.value.filter((event: IEvent) => {
    const eventIsInDay = event.time.start.substring(0, 10) === dateTimeString;
    return eventIsInDay;
  });
}

const search = ref('');
function searchEvent() {
  console.log(search.value);
}


function onHandleEventClicked(event: any) {
  console.log('event clicked', event);
}

const scrollbar = ref<any | null>(null);

function initScrollbar() {
  scrollbar.value = new PerfectScrollbar('.list-events', {
    wheelSpeed: 0.5,
    wheelPropagation: true,
  });
}

onMounted(() => {
  initScrollbar();
});

const eventsDataProperty = ref(props.events);
const eventsOfDay = ref(props.events);
const eventRenderingKey = ref(0);

watch(
  () => props.events,
  (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      eventsDataProperty.value = props.events;
      const dateTimeString = calendarSelectedDate.value.toISOString().substring(0, 10);
      eventsOfDay.value = eventsDataProperty.value.filter((event: IEvent) => {
        const eventIsInDay = event.time.start.substring(0, 10) === dateTimeString;
        return eventIsInDay;
      });
      eventRenderingKey.value = eventRenderingKey.value + 1;
    }
  },
  { deep: true, immediate: true }
)

</script>

<style lang="scss">

.v-popup__content.center {
  left: auto;
}

.search-events {
  margin-top: 1rem;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 0px;
  display: flex;
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
}

.list-events {
  margin-top: 1rem;
  .list-events__item {
    width: 100%;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
}

#container-list {
  height: 300px;
  overflow: auto;
  max-height: 100%;
  min-height: 0px;
  position: relative;
  .ps__rail-y {
    right: 0;
    width: 6px;
    background-color: #fff;
    opacity: 0.5;
    z-index: 1;
    .ps__thumb-y {
      background-color: $v-calendar-gray;
      border-radius: 3px;
      width: 6px;
      height: 100px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>
