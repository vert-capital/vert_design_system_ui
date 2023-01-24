<template>
  <v-pop-up
    position-content="center center"
    title="Calendário de eventos"
    width-content="23rem"
  >
    <template #event-area>
      <icon-calendar />
    </template>
    <template #popup-body>
      <v-calendar-mini
        :selected-date="calendarSelectedDate"
        @day-was-clicked="onHandleDayClicked"
      ></v-calendar-mini>

      <div class="search-events">
        <input v-model="search" placeholder="Buscar" @focusout="searchEvent" @keyup.enter="searchEvent" />
        <search-icon class="search-events__icon" @click="searchEvent" />
      </div>

      <div id="container-list" class="list-events">
        <div
          v-for="(event, index) in eventsOfDay"
          :key="index"
          class="list-events__item"
        >
          <event :event="event" @on-clicked="onHandleEventClicked" :loading="isLoading"></event>
        </div>

        <div v-if="!isLoading && !eventsOfDay.length" class="list-events__empty">
          <p>Nenhum evento encontrado</p>
        </div>
      </div>
    </template>
    <template #popup-footer>
      <a class="a-link">Ir para versão completa</a>
    </template>
  </v-pop-up>
</template>
<script lang="ts" setup>
import { VPopUp, VCalendarMini } from "@/components";
import IconCalendar from "@/components/icons/CalendarDay.vue";
import type { IEvent, IEventCard } from "@/utils/types/calendar";
import { onMounted, PropType, ref, shallowRef, watch, computed } from "vue";
import PerfectScrollbar from "perfect-scrollbar";
import Event from "@/components/calendar/mini/Event.vue";
import SearchIcon from "@/components/icons/Search.vue";
import { useCalendar } from "@/components/calendar/useCalendar";

const props = defineProps({
  events: {
    type: Array as PropType<IEventCard[]>,
    default: () => {
      return null;
    },
  },
  url: {
    type: String,
    default: "",
  },
  urlEvents: {
    type: String,
    default: "",
  },
  authorization: {
    type: String,
    default: "",
  },
  method: {
    type: String,
    default: "GET",
  },
  eventClass: {
    type: [Function, Object] as PropType<any>,
    default: () => {
      return;
    },
  },
});

const emits = defineEmits([
  "search-event",
  "event-was-clicked",
  "day-was-clicked",
]);

const calendarSelectedDate = ref(new Date());
const events = ref<IEventCard[]>([]);

const eventsDataProperty = shallowRef<IEvent[]>(events as unknown as IEvent[]);
const eventsOfDay = ref([] as IEvent[]);
const eventRenderingKey = ref(0);
const dayClicked = ref('');
const search = ref('');
const isLoading = ref(false);

const { getEvents } = useCalendar(
  props.url,
  props.authorization,
  props.method,
  props.eventClass
);

const _params = computed(() => {
  return {
    event_data_after: dayClicked.value,
    event_data_before: dayClicked.value,
    page: 1,
    per_page: 1000,
    q: search.value,
  };
});

async function onHandleDayClicked(payload: any) {
  dayClicked.value = payload.dateTimeString.substring(0, 10);
  if (!props.events) {
    isLoading.value = true;
    const _data: IEventCard[] = await getEvents(_params.value).finally(() => {
      isLoading.value = false;
    });
    events.value = _data;
  }
  const date = new Date(payload.dateTimeString);
  calendarSelectedDate.value = date;

  eventsDataProperty.value = events.value as unknown as IEvent[];
  eventsOfDay.value = eventsDataProperty.value?.filter((event: IEvent) => {
    const eventIsInDay = event?.event_data === dayClicked.value;
    return eventIsInDay;
  });
  emits("day-was-clicked", payload);
}

async function searchEvent() {
  if (!props.events) {
    isLoading.value = true;
    const _data: IEventCard[] = await getEvents(_params.value).finally(() => {
      isLoading.value = false;
    });
    events.value = _data;
  }

  eventsDataProperty.value = events.value as unknown as IEvent[];
  eventsOfDay.value = eventsDataProperty.value?.filter((event: IEvent) => {
    const eventIsInDay = event?.event_data === dayClicked.value;
    return eventIsInDay;
  });
  emits("search-event", search.value);
}

function onHandleEventClicked(event: any) {
  emits("event-was-clicked", event);
  if (props.urlEvents === "") return;
  const _url = props.urlEvents + '/modal/event-detail/' + event?.id;
  window.open(_url, '_blank');
}

const scrollbar = ref<any | null>(null);

function initScrollbar() {
  scrollbar.value = new PerfectScrollbar(".list-events", {
    wheelSpeed: 0.5,
    wheelPropagation: true,
  });
}

watch(
  () => events,
  (newVal, oldVal) => {
    if (!newVal.value) return;
    eventsDataProperty.value = newVal.value as unknown as IEvent[];
    const dateTimeString = calendarSelectedDate.value
      .toISOString()
      .substring(0, 10);
    eventsOfDay.value = eventsDataProperty.value.filter((event: IEvent) => {
      const eventIsInDay = event?.event_data === dateTimeString;
      return eventIsInDay;
    });
    eventRenderingKey.value = eventRenderingKey.value + 1;
  },
  { deep: true, immediate: true }
);

onMounted(async () => {
  initScrollbar();

  if (props.events) {
    events.value = props.events;
  } else {
    isLoading.value = true;
    const today = new Date();
    dayClicked.value = today.toISOString().substring(0, 10);
    const data: IEventCard[] = await getEvents(_params.value).finally(() => {
      isLoading.value = false;
    });
    events.value = data;
  }
});
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
    border-right: none;
    border-radius: 0.25rem 0 0 0.25rem;
  }

  .search-events__icon {
    cursor: pointer;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 0.25rem 0.25rem 0;
    padding-right: 0.25rem;
  }
}

.list-events {
  margin-top: 1rem;
  .list-events__item {
    width: 100%;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  &__empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.875rem;
      color: #ccc;
    }
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

.a-link {
  color: $color-primary-pure;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  line-height: 1rem;
  margin-left: 22%;
}
</style>
