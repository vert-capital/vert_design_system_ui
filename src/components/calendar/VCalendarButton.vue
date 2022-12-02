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
        @day-was-clicked="reactToEvent"
      ></v-calendar-mini>

      <div class="search-events">
        <input
          v-model="search"
          placeholder="Search"
          @input="searchEvent"
        />
      </div>

      <div class="list-events">
        <div
          v-for="event in events"
          :key="event.id"
          class="list-events__item"
          @click="reactToEvent(event)"
        >
          <div class="list-events__item--title">
            {{ event.title }}
          </div>
          <div class="list-events__item--date">
            {{ event.event_data }}
          </div>
        </div>
      </div>
    </template>
  </v-pop-up>
</template>
<script lang="ts" setup>
import { VPopUp, VCalendarMini } from '@/components';
import IconCalendar from '@/components/icons/CalendarDay.vue';
import { IEvent } from '@/utils/types/calendar';
import { PropType, ref } from 'vue';

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

function reactToEvent(payload: any) {
  console.log(payload);
  const date = new Date(payload.date);
  calendarSelectedDate.value = date;
}

const search = ref('');
function searchEvent() {
  console.log(search.value);
}
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
  width: 100%;
  max-width: 100vw;
  height: 300px;
  min-height: 0px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .list-events__item {
    width: 90%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
}
</style>
